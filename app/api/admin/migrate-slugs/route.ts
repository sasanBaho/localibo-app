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
  const snap = await db
    .collection("providers")
    .orderBy("profileViewCount", "desc")
    .get();

  // Track slugs per city to handle collisions: city -> Set of used nameSlug values
  const usedSlugs: Record<string, Set<string>> = {};

  const batch = db.batch();
  let count = 0;

  for (const docSnap of snap.docs) {
    const d = docSnap.data();
    const citySlug = slugifyStr(d.city ?? "");
    const nameBase = slugifyStr(d.providerName ?? "");

    if (!citySlug || !nameBase) continue;

    if (!usedSlugs[citySlug]) usedSlugs[citySlug] = new Set();

    let nameSlug = nameBase;
    if (usedSlugs[citySlug].has(nameBase)) {
      let i = 2;
      while (usedSlugs[citySlug].has(`${nameBase}-${i}`)) i++;
      nameSlug = `${nameBase}-${i}`;
    }
    usedSlugs[citySlug].add(nameSlug);

    batch.update(docSnap.ref, { citySlug, nameSlug, nameSlugBase: nameBase });
    count++;

    // Firestore batch limit is 500
    if (count % 499 === 0) {
      await batch.commit();
    }
  }

  await batch.commit();

  return NextResponse.json({ ok: true, updated: count });
}
