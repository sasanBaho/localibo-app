import { track as trackVercel } from "@vercel/analytics";
import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

function normalizeFirebaseEventName(name: string) {
  const normalized = name
    .trim()
    .replace(/[^a-zA-Z0-9_]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  const prefixed = /^[a-zA-Z]/.test(normalized)
    ? normalized
    : `event_${normalized || "unnamed"}`;

  return prefixed.toLowerCase().slice(0, 40);
}

export async function trackEvent(name: string, params?: Record<string, any>) {
  trackVercel(name, params);

  const instance = await analytics;
  if (instance) {
    logEvent(instance, normalizeFirebaseEventName(name), params);
  }
}

export async function trackPageView(params?: Record<string, any>) {
  const instance = await analytics;

  if (instance) {
    logEvent(instance, "page_view", params);
  }
}