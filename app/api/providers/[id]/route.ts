import { NextRequest, NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { checkRateLimit, getClientIp, rateLimitResponse } from "@/lib/rateLimit";
import { isValidFirestoreId } from "@/lib/validate";

const ACTIVE_STATUSES = ["active", "trialing"];

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ip = getClientIp(req);
  if (!checkRateLimit(`provider-public:${ip}`, 60, 60 * 60 * 1000)) {
    return rateLimitResponse();
  }

  const { id } = await params;

  if (!isValidFirestoreId(id)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const snap = await getAdminDb().collection("providers").doc(id).get();
    if (!snap.exists) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const d = snap.data()!;
    if (!ACTIVE_STATUSES.includes(d.subscriptionStatus)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: snap.id,
      providerName: d.providerName ?? null,
      city: d.city ?? null,
      selectedServices: d.selectedServices ?? [],
      description: d.description ?? null,
      imageUrl: d.imageUrl ?? null,
      rating: d.rating ?? null,
      ratingsCount: d.ratingsCount ?? 0,
      hasTools: d.hasTools ?? false,
      paymentMethods: d.paymentMethods ?? [],
      isAvailable: d.isAvailable ?? false,
      profileViewCount: d.profileViewCount ?? 0,
    });
  } catch (err: any) {
    console.error("[providers/[id]] error:", err?.message ?? err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
