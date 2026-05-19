import { Metadata } from "next";
import Link from "next/link";
import LocationTabs from "./LocationTabs";

export const metadata: Metadata = {
  title: "How to Enable Location Access — Yardyman",
  description: "Step-by-step instructions to enable location access for Yardyman in Chrome, Safari, Firefox, Edge, and on iOS and Android devices.",
};

export default function HowToEnableLocationPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#f9fafb" }}>

      {/* Header */}
      <header style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        borderBottom: "1px solid #f3f4f6",
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        zIndex: 10,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}>
        <Link href="/" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#f3f4f6",
          textDecoration: "none",
          flexShrink: 0,
        }}>
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <h1 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#111827" }}>
          Enable Location Access
        </h1>
      </header>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "28px 16px 80px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#f0fdf4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}>
            <svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h2 style={{ margin: "0 0 10px", fontSize: 24, fontWeight: 800, color: "#111827" }}>
            How to Enable Location
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: "#6b7280", lineHeight: 1.7, maxWidth: 480, marginInline: "auto" }}>
            Select your browser or device below and follow the steps to allow Yardyman to access your location.
          </p>
        </div>

        {/* Tabs (client component) */}
        <LocationTabs />

        {/* Already denied tip */}
        <div style={{
          marginTop: 20,
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: 14,
          padding: "14px 16px",
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
        }}>
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={{ margin: 0, fontSize: 13, color: "#b91c1c", lineHeight: 1.6 }}>
            <strong>Already clicked "Block"?</strong> The browser will not ask again automatically. You must manually change the setting using the steps above, then reload the page.
          </p>
        </div>

        {/* Back CTA */}
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Link href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#22c55e",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
            borderRadius: 999,
            padding: "13px 28px",
            textDecoration: "none",
          }}>
            Back to Yardyman
          </Link>
        </div>
      </div>
    </div>
  );
}
