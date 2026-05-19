import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { verifyAuthToken, unauthorized, forbidden } from "@/lib/authVerify";
import { getAdminDb } from "@/lib/firebaseAdmin";

export async function GET(req: NextRequest) {
  const uid = await verifyAuthToken(req);
  if (!uid) return unauthorized();

  const subscriptionId = req.nextUrl.searchParams.get("subscriptionId");
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
    const sub = await stripe.subscriptions.retrieve(subscriptionId);
    const currentPeriodEnd = sub.items.data[0]?.current_period_end ?? null;
    return NextResponse.json({
      status: sub.status,
      created: sub.created,
      trialEnd: sub.trial_end ?? null,
      currentPeriodEnd,
      cancelAtPeriodEnd: sub.cancel_at_period_end,
    });
  } catch (err: any) {
    console.error("[subscription]", err?.message);
    return NextResponse.json({ error: "Stripe error" }, { status: 500 });
  }
}
