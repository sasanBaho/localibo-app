// In-memory rate limiter — works per serverless instance.
// For high-traffic production, replace with Redis (@upstash/ratelimit).
const store = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = store.get(key);
  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

export function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

import { NextRequest } from "next/server";

export function rateLimitResponse() {
  return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
}
