"use client";
import { useEffect } from "react";

export default function ViewTracker({ providerId }: { providerId: string }) {
  useEffect(() => {
    fetch("/api/providers/record-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ providerId }),
    }).catch(() => {});
  }, [providerId]);

  return null;
}
