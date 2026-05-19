import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";
import { checkRateLimit, getClientIp, rateLimitResponse } from "@/lib/rateLimit";
import { isValidFirestoreId } from "@/lib/validate";

const VALID_TYPES = ["call", "message"] as const;
type InteractionType = (typeof VALID_TYPES)[number];

const FIELD_MAP: Record<InteractionType, string> = {
  call: "gotCallCount",
  message: "gotMessageCount",
};

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (!checkRateLimit(`record-interaction:${ip}`, 60, 60 * 60 * 1000)) {
    return rateLimitResponse();
  }

  try {
    const body = await req.json();
    const { providerId, type } = body;

    if (!isValidFirestoreId(providerId)) {
      return NextResponse.json({ error: "Invalid providerId" }, { status: 400 });
    }
    if (!VALID_TYPES.includes(type as InteractionType)) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
    const interactionType = type as InteractionType;

    // Per-provider dedup: same IP can only count once per provider per type per hour
    if (!checkRateLimit(`record-interaction:${ip}:${providerId}:${interactionType}`, 1, 60 * 60 * 1000)) {
      return NextResponse.json({ ok: true });
    }

    await getAdminDb()
      .collection("providers")
      .doc(providerId)
      .update({ [FIELD_MAP[interactionType]]: FieldValue.increment(1) });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[record-interaction] error:", err?.message ?? err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
