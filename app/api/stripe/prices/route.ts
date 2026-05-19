import { NextResponse } from "next/server";
import Stripe from "stripe";

const PRICE_IDS = [
  process.env.STRIPE_MONTHLY_PRICE_ID,
  process.env.STRIPE_QUARTERLY_PRICE_ID,
  process.env.STRIPE_YEARLY_PRICE_ID,
].filter(Boolean) as string[];

export async function GET() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const prices = await Promise.all(
      PRICE_IDS.map((id) =>
        stripe.prices.retrieve(id, { expand: ["product"] })
      )
    );

    const result = prices.map((price) => {
      const product = price.product as Stripe.Product;
      const amount = (price.unit_amount ?? 0) / 100;
      const interval = price.recurring?.interval ?? "month";
      const intervalCount = price.recurring?.interval_count ?? 1;

      return {
        priceId: price.id,
        productName: product.name,
        amount,
        currency: price.currency,
        interval,
        intervalCount,
      };
    });

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Stripe error" }, { status: 500 });
  }
}
