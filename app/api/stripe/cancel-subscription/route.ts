import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { verifyAuthToken, unauthorized, forbidden } from "@/lib/authVerify";
import { getAdminDb } from "@/lib/firebaseAdmin";

export async function POST(req: NextRequest) {
  const uid = await verifyAuthToken(req);
  if (!uid) return unauthorized();

  const body = await req.json();
  const { subscriptionId } = body;

  if (!subscriptionId || typeof subscriptionId !== "string") {
    return NextResponse.json({ error: "Missing subscriptionId" }, { status: 400 });
  }

  // Verify the subscription belongs to this user
  const providerDoc = await getAdminDb().collection("providers").doc(uid).get();
  if (!providerDoc.exists || providerDoc.data()?.stripeSubscriptionId !== subscriptionId) {
    return forbidden();
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    await stripe.subscriptions.update(subscriptionId, { cancel_at_period_end: true });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[cancel-subscription]", err?.message);
    return NextResponse.json({ error: "Stripe error" }, { status: 500 });
  }
}
