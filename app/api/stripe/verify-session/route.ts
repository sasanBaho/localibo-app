import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!sessionId || typeof sessionId !== "string" || !/^cs_[a-zA-Z0-9_]+$/.test(sessionId)) {
    return NextResponse.json({ ok: false, error: "Invalid session_id" }, { status: 400 });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["subscription"],
    });

    if (session.status !== "complete") {
      return NextResponse.json({ ok: false, error: "Session not complete" });
    }

    const subscription = session.subscription as Stripe.Subscription | null;

    return NextResponse.json({
      ok: true,
      customerId: session.customer as string,
      subscriptionId: subscription?.id ?? null,
      subscriptionStatus: subscription?.status ?? null,
    });
  } catch (err: any) {
    console.error("[verify-session]", err?.message);
    return NextResponse.json({ ok: false, error: "Failed to verify session" }, { status: 500 });
  }
}
