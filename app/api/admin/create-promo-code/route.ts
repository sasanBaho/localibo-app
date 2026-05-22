import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

const MIGRATE_SECRET = process.env.MIGRATE_SECRET;

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-migrate-secret");
  if (!MIGRATE_SECRET || secret !== MIGRATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { code, trialDays, maxUses } = body as {
    code: string;
    trialDays: number;
    maxUses: number;
  };

  if (!code || typeof trialDays !== "number" || typeof maxUses !== "number") {
    return NextResponse.json(
      { error: "Required fields: code, trialDays, maxUses" },
      { status: 400 }
    );
  }

  const normalized = code.trim().toUpperCase();
  if (!normalized) {
    return NextResponse.json({ error: "Code cannot be empty" }, { status: 400 });
  }

  const db = getAdminDb();
  await db.collection("promoCodes").doc(normalized).set({
    trialDays,
    maxUses,
    usedCount: 0,
    active: true,
    createdAt: FieldValue.serverTimestamp(),
  });

  return NextResponse.json({ ok: true, code: normalized, trialDays, maxUses });
}
