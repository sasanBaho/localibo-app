import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { priceId, email, phone, uid } = await req.json();

  if (!priceId || !uid) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const customer = await stripe.customers.create({
    email: email || undefined,
    phone: phone || undefined,
    metadata: { uid },
  });

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customer.id,
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: { trial_period_days: 30 },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?stripe_session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?stripe_cancelled=true`,
  });

  return NextResponse.json({ url: session.url, customerId: customer.id });
}
