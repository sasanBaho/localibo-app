import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code")?.trim().toUpperCase();

  if (!code) {
    return NextResponse.json({ valid: false, reason: "No code provided" });
  }

  const snap = await getAdminDb().collection("promoCodes").doc(code).get();

  if (!snap.exists) {
    return NextResponse.json({ valid: false, reason: "Invalid or expired code" });
  }

  const d = snap.data()!;

  if (!d.active) {
    return NextResponse.json({ valid: false, reason: "Invalid or expired code" });
  }

  if (d.maxUses > 0 && d.usedCount >= d.maxUses) {
    return NextResponse.json({ valid: false, reason: "This code has reached its usage limit" });
  }

  return NextResponse.json({ valid: true, trialDays: d.trialDays as number });
}
