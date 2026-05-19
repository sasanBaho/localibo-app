import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

function resend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

async function getCustomerEmail(customerId: string): Promise<string | null> {
  try {
    const customer = await stripe.customers.retrieve(customerId);
    if (customer.deleted) return null;
    return (customer as Stripe.Customer).email ?? null;
  } catch {
    return null;
  }
}

async function sendReceiptEmail(email: string, invoice: Stripe.Invoice) {
  const amount = ((invoice.amount_paid ?? 0) / 100).toFixed(2);
  const currency = (invoice.currency ?? "usd").toUpperCase();
  const date = new Date((invoice.created ?? Date.now()) * 1000).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
  const invoiceUrl = invoice.hosted_invoice_url ?? "";

  await resend().emails.send({
    from: "Yardyman <noreply@yardyman.com>",
    to: email,
    subject: `Your Yardyman receipt — ${currency} ${amount}`,
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#111827">
        <div style="background:#166534;padding:32px 24px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">Payment Confirmed</h1>
          <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;font-size:14px">Thank you for subscribing to Yardyman</p>
        </div>
        <div style="background:#fff;padding:32px 24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
          <p style="margin:0 0 24px;font-size:15px;color:#374151">Hi there,</p>
          <p style="margin:0 0 24px;font-size:15px;color:#374151">
            We received your payment of <strong>${currency} $${amount}</strong> on ${date}.
            Your provider profile is now active and visible to homeowners in your area.
          </p>
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px 20px;margin-bottom:24px">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:14px;color:#166534;font-weight:600">Amount paid</span>
              <span style="font-size:20px;color:#166534;font-weight:800">${currency} $${amount}</span>
            </div>
            <div style="margin-top:8px;font-size:13px;color:#16a34a">${date}</div>
          </div>
          ${invoiceUrl ? `<a href="${invoiceUrl}" style="display:inline-block;background:#166534;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;font-size:14px;margin-bottom:24px">View Invoice</a>` : ""}
          <p style="margin:24px 0 0;font-size:13px;color:#6b7280">
            Questions? Reply to this email or reach us at <a href="mailto:hi@yardyman.com" style="color:#166534">hi@yardyman.com</a>
          </p>
        </div>
      </div>
    `,
  });
}

async function sendCancellationEmail(email: string, subscription: Stripe.Subscription) {
  const sub = subscription as any;
  const periodEnd: number =
    sub.current_period_end ??
    sub.items?.data?.[0]?.current_period_end ??
    Date.now() / 1000;
  const endDate = new Date(periodEnd * 1000).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  await resend().emails.send({
    from: "Yardyman <noreply@yardyman.com>",
    to: email,
    subject: "Your Yardyman subscription has been cancelled",
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#111827">
        <div style="background:#374151;padding:32px 24px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">Subscription Cancelled</h1>
          <p style="color:rgba(255,255,255,0.7);margin:8px 0 0;font-size:14px">We're sorry to see you go</p>
        </div>
        <div style="background:#fff;padding:32px 24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
          <p style="margin:0 0 24px;font-size:15px;color:#374151">Hi there,</p>
          <p style="margin:0 0 24px;font-size:15px;color:#374151">
            Your Yardyman subscription has been cancelled. Your profile will remain visible until
            <strong>${endDate}</strong>, after which it will be hidden from homeowners.
          </p>
          <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:10px;padding:16px 20px;margin-bottom:24px">
            <p style="margin:0;font-size:14px;color:#b91c1c;font-weight:600">Profile hidden after ${endDate}</p>
            <p style="margin:6px 0 0;font-size:13px;color:#dc2626">
              Reactivate anytime to instantly restore your visibility.
            </p>
          </div>
          <p style="margin:0 0 16px;font-size:15px;color:#374151">
            Changed your mind? You can reactivate your subscription at any time from your profile settings.
          </p>
          <p style="margin:24px 0 0;font-size:13px;color:#6b7280">
            Need help? Contact us at <a href="mailto:hi@yardyman.com" style="color:#166534">hi@yardyman.com</a>
          </p>
        </div>
      </div>
    `,
  });
}

async function sendTrialEndingEmail(email: string, subscription: Stripe.Subscription) {
  const sub = subscription as any;
  const trialEndTs: number =
    sub.trial_end ??
    sub.items?.data?.[0]?.trial_end ??
    Date.now() / 1000;
  const trialEnd = new Date(trialEndTs * 1000).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  await resend().emails.send({
    from: "Yardyman <noreply@yardyman.com>",
    to: email,
    subject: "Your free trial ends in 3 days",
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#111827">
        <div style="background:#166534;padding:32px 24px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800">Trial Ending Soon</h1>
          <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;font-size:14px">Your free trial ends on ${trialEnd}</p>
        </div>
        <div style="background:#fff;padding:32px 24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
          <p style="margin:0 0 24px;font-size:15px;color:#374151">Hi there,</p>
          <p style="margin:0 0 24px;font-size:15px;color:#374151">
            Your 30-day free trial ends on <strong>${trialEnd}</strong>. After that, your subscription
            will automatically continue and your card on file will be charged.
          </p>
          <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:16px 20px;margin-bottom:24px">
            <p style="margin:0;font-size:14px;color:#92400e;font-weight:600">3 days remaining in your trial</p>
            <p style="margin:6px 0 0;font-size:13px;color:#b45309">
              No action needed — your profile will continue seamlessly after the trial.
            </p>
          </div>
          <p style="margin:0 0 16px;font-size:15px;color:#374151">
            Want to cancel before you're charged? You can do so anytime from your profile settings —
            no questions asked.
          </p>
          <p style="margin:24px 0 0;font-size:13px;color:#6b7280">
            Questions? Reach us at <a href="mailto:hi@yardyman.com" style="color:#166534">hi@yardyman.com</a>
          </p>
        </div>
      </div>
    `,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature or webhook secret" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error("[stripe-webhook] Signature verification failed:", err?.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id;
        if (!customerId) break;
        const email = await getCustomerEmail(customerId);
        if (email) await sendReceiptEmail(email, invoice);
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const previousAttributes = event.data.previous_attributes as any;
        const justScheduledCancel =
          (subscription as any).cancel_at_period_end === true &&
          previousAttributes?.cancel_at_period_end === false;
        if (!justScheduledCancel) break;
        const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer?.id;
        if (!customerId) break;
        const email = await getCustomerEmail(customerId);
        if (email) await sendCancellationEmail(email, subscription);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer?.id;
        if (!customerId) break;
        const email = await getCustomerEmail(customerId);
        if (email) await sendCancellationEmail(email, subscription);
        break;
      }

      case "customer.subscription.trial_will_end": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer?.id;
        if (!customerId) break;
        const email = await getCustomerEmail(customerId);
        if (email) await sendTrialEndingEmail(email, subscription);
        break;
      }

      default:
        break;
    }
  } catch (err: any) {
    console.error(`[stripe-webhook] Error handling ${event.type}:`, err?.message ?? err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
