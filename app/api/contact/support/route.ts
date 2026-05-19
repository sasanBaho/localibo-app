import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp, rateLimitResponse } from "@/lib/rateLimit";
import { isValidEmail, isValidString, sanitizeString } from "@/lib/validate";

export async function POST(req: NextRequest) {
  // Rate limit: 5 requests per IP per hour
  const ip = getClientIp(req);
  if (!checkRateLimit(`support:${ip}`, 5, 60 * 60 * 1000)) {
    return rateLimitResponse();
  }

  const body = await req.json();
  const { name, email, phone, subject, description } = body;

  if (!isValidString(name, 100)) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  if (!isValidString(subject, 200)) {
    return NextResponse.json({ error: "Invalid subject" }, { status: 400 });
  }
  if (!isValidString(description, 5000)) {
    return NextResponse.json({ error: "Invalid description" }, { status: 400 });
  }
  if (phone !== undefined && phone !== null && phone !== "" && !isValidString(phone, 20)) {
    return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "re_your_api_key_here") {
    console.error("[support] RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Email service is not configured. Please contact us at support@yardyman.com." }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  const lines = [
    `Name: ${sanitizeString(name, 100)}`,
    `Email: ${email}`,
    phone ? `Phone: ${sanitizeString(phone, 20)}` : null,
    `Subject: ${sanitizeString(subject, 200)}`,
    ``,
    `Message:`,
    sanitizeString(description, 5000),
  ].filter(Boolean).join("\n");

  try {
    const { error } = await resend.emails.send({
      from: "Yardyman Support <noreply@yardyman.com>",
      to: "habibiansasan@gmail.com",
      replyTo: email,
      subject: `[Provider Support] ${sanitizeString(subject, 100)}`,
      text: lines,
    });

    if (error) {
      console.error("[support] Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[support] Unexpected error:", err?.message);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
