import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";
import { checkRateLimit, getClientIp, rateLimitResponse } from "@/lib/rateLimit";
import { isValidFirestoreId } from "@/lib/validate";

export async function POST(req: NextRequest) {
  // Rate limit: 30 views per IP per hour (covers browsing multiple providers)
  const ip = getClientIp(req);
  if (!checkRateLimit(`record-view:${ip}`, 30, 60 * 60 * 1000)) {
    return rateLimitResponse();
  }

  try {
    const body = await req.json();
    const { providerId } = body;

    if (!isValidFirestoreId(providerId)) {
      return NextResponse.json({ error: "Invalid providerId" }, { status: 400 });
    }

    // Per-provider dedup: same IP can only count once per provider per hour
    if (!checkRateLimit(`record-view:${ip}:${providerId}`, 1, 60 * 60 * 1000)) {
      return NextResponse.json({ ok: true }); // silently ignore duplicate
    }

    const monthKey = new Date().toISOString().slice(0, 7);

    await getAdminDb().collection("providers").doc(providerId).update({
      profileViewCount: FieldValue.increment(1),
      [`viewsByMonth.${monthKey}`]: FieldValue.increment(1),
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[record-view] error:", err?.message ?? err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
