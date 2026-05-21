import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { slugifyStr } from "@/lib/slugify";

const MIGRATE_SECRET = process.env.MIGRATE_SECRET;

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-migrate-secret");
  if (!MIGRATE_SECRET || secret !== MIGRATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getAdminDb();
  const snap = await db.collection("providers").get();

  // Build a map of already-assigned slugs per city so we handle collisions correctly
  // across ALL providers (not just ones being updated)
  const usedSlugs: Record<string, Set<string>> = {};
  for (const docSnap of snap.docs) {
    const d = docSnap.data();
    if (d.citySlug && d.nameSlug) {
      if (!usedSlugs[d.citySlug]) usedSlugs[d.citySlug] = new Set();
      usedSlugs[d.citySlug].add(d.nameSlug);
    }
  }

  let updated = 0;
  let skipped = 0;
  let batch = db.batch();
  let batchCount = 0;

  for (const docSnap of snap.docs) {
    const d = docSnap.data();

    // Skip providers that already have all three fields
    if (d.citySlug && d.nameSlug && d.nameSlugBase) {
      skipped++;
      continue;
    }

    const citySlug = slugifyStr(d.city ?? "");
    const nameBase = slugifyStr(d.providerName ?? "");
    if (!citySlug || !nameBase) { skipped++; continue; }

    if (!usedSlugs[citySlug]) usedSlugs[citySlug] = new Set();

    let nameSlug = nameBase;
    for (let i = 2; usedSlugs[citySlug].has(nameSlug); i++) {
      nameSlug = `${nameBase}-${i}`;
    }
    usedSlugs[citySlug].add(nameSlug);

    batch.update(docSnap.ref, { citySlug, nameSlug, nameSlugBase: nameBase });
    updated++;
    batchCount++;

    if (batchCount === 499) {
      await batch.commit();
      batch = db.batch();
      batchCount = 0;
    }
  }

  if (batchCount > 0) await batch.commit();

  return NextResponse.json({ ok: true, updated, skipped });
}
