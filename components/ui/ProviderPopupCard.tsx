"use client";
import React, { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import ReportModal from "./ReportModal";
import RatingModal from "./RatingModal";

export interface ProviderPopupCardProps {
  provider: any;
  onClose: () => void;
  activeService?: "snow" | "lawn";
  isOwnerInactive?: boolean;
  isOwnProfile?: boolean;
  onSubscribe?: () => void;
}

const ProviderPopupCard: React.FC<ProviderPopupCardProps> = ({
  provider,
  onClose,
  activeService,
  isOwnerInactive,
  isOwnProfile,
  onSubscribe,
}) => {
  const [showReport, setShowReport] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [displayRating, setDisplayRating] = useState<number>(provider?.rating ?? 0);
  const [displayCount, setDisplayCount] = useState<number>(provider?.ratingsCount ?? 0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsLargeScreen(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!provider) return null;

  const rawPhone = provider.phone || provider.phoneNumber || provider.contactNumber || "";
  const phone = rawPhone;
  const formattedPhone = (() => {
    const digits = rawPhone.replace(/\D/g, "");
    if (digits.length === 10) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    if (digits.length === 11 && digits[0] === "1") return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return rawPhone;
  })();

  const isSnow = activeService === "snow";
  const accentColor = isSnow ? "#0ea5e9" : "#22c55e";
  const accentLight = isSnow ? "#e0f2fe" : "#f0fdf4";
  const serviceLabel = isSnow ? "Snow Removal" : "Lawn Care";
  const serviceIcon = isSnow ? "/shovel-blue.png" : "/lawn-mower-green.png";
  const serviceKey = isSnow ? "service-two" : "service-one";

  const descriptionText = (() => {
    const d = provider.description;
    if (!d) return "";
    if (typeof d === "string") return d;
    if (typeof d === "object") return (d as Record<string, string>)[serviceKey] ?? Object.values(d as Record<string, string>)[0] ?? "";
    return "";
  })();

  const filledStars = Math.round(displayRating);

  function recordInteraction(type: "call" | "message") {
    if (!provider.id) return;
    fetch("/api/providers/record-interaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ providerId: provider.id, type }),
    }).catch(() => {});
  }

  function getAnalyticsPayload() {
    return {
      providerId: provider.id || "unknown",
      providerName: provider.providerName || "Unknown",
      serviceType: activeService || "unknown",
      hasTools: Boolean(provider.hasTools),
      rating: provider.rating ?? null,
      ratingsCount: provider.ratingsCount ?? 0,
      paymentMethodsCount: provider.paymentMethods?.length ?? 0,
      hasPhone: Boolean(phone),
    };
  }

  // Avatar is 96px tall; 78px overlaps into the card (30px more than half)
  const AVATAR_SIZE = 96;
  const AVATAR_OVERLAP = AVATAR_SIZE / 2 + 30;

  return (
    <>
      <style>{`
        @keyframes cardSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(24px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      {showReport && (
        <ReportModal
          providerId={provider.id || ""}
          providerName={provider.providerName || ""}
          onClose={() => setShowReport(false)}
        />
      )}
      {showRating && (
        <RatingModal
          providerId={provider.id || ""}
          providerName={provider.providerName || ""}
          onClose={() => setShowRating(false)}
          onRated={(avg, count) => { setDisplayRating(avg); setDisplayCount(count); }}
        />
      )}

      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "calc(100vw - 32px)",
          maxWidth: 440,
          background: "#fff",
          borderRadius: 24,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 16px 48px rgba(0,0,0,0.16)",
          marginTop: -AVATAR_OVERLAP,
          overflow: "hidden",
          animation: "cardSlideUp 0.28s cubic-bezier(0.34,1.1,0.64,1) both",
        }}
      >
        {/* Owner inactive alert */}
        {isOwnerInactive && (
          <div style={{
            background: "#fff7ed",
            borderBottom: "1px solid #fed7aa",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <svg width={15} height={15} viewBox="0 0 24 24" fill="#f97316" style={{ flexShrink: 0 }}>
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="17" x2="12.01" y2="17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p style={{ margin: 0, fontSize: 13, color: "#9a3412", flex: 1, lineHeight: 1.4 }}>
              Your profile is hidden from homeowners
            </p>
            {onSubscribe && (
              <button
                onClick={onSubscribe}
                style={{
                  background: "#f97316",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  padding: "5px 12px",
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Subscribe
              </button>
            )}
          </div>
        )}

        {/* ── Profile header ── */}
        <div style={{ padding: "20px 20px 0" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>

            {/* Avatar with colored ring */}
            <div style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              padding: 1,
              background: accentColor,
              flexShrink: 0,
            }}>
              <img
                src={provider.imageUrl}
                alt={provider.providerName}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #fff",
                  display: "block",
                }}
              />
            </div>

            {/* Name + badges */}
            <div style={{ flex: 1, minWidth: 0, paddingTop: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{
                  fontWeight: 800,
                  fontSize: 19,
                  color: "#111827",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}>
                  {provider.providerName}
                </span>
              </div>

              {/* Service badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "end",
                gap: 5,
                background: accentLight,
                borderRadius: 999,
                padding: "4px 10px 4px 6px",
                marginBottom: 8,
              }}>
                <img src={serviceIcon} alt={serviceLabel} style={{ width: 22, height: 22, objectFit: "contain" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: accentColor }}>{serviceLabel}</span>
              </div>

              {/* Rating */}
              <div
                onClick={() => { if (!isOwnProfile) setShowRating(true); }}
                style={{ cursor: isOwnProfile ? "default" : "pointer", display: "flex", alignItems: "center", gap: 4 }}
                title={isOwnProfile ? undefined : "Tap to rate"}
              >
                {displayCount > 0 ? (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width={16} height={16} viewBox="0 0 24 24"
                        fill={i < filledStars ? "#f59e0b" : "none"}
                        stroke={i < filledStars ? "#f59e0b" : "#d1d5db"}
                        strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                    <span style={{ fontWeight: 700, fontSize: 13, color: "#111827", marginLeft: 2 }}>
                      {displayRating.toFixed(1)}
                    </span>
                    <span style={{ fontSize: 12, color: "#9ca3af" }}>({displayCount})</span>
                  </>
                ) : (
                  <span
                    onClick={(e) => { e.stopPropagation(); setShowRating(true); }}
                    style={{
                      fontSize: 12, fontWeight: 600, color: "#f59e0b",
                      borderRadius: 999, padding: "3px 0px",
                      display: "inline-flex", alignItems: "center", gap: 4,
                      cursor: "pointer",
                    }}>
                    ★ Tap to rate
                  </span>
                )}
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => { trackEvent("Provider_Details_Closed", getAnalyticsPayload()); onClose(); }}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#f3f4f6",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
            >
              <svg width={14} height={14} viewBox="0 0 24 24" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>

          </div>

          {/* Description — full card width background */}
          {descriptionText ? (
            <p style={{
              fontSize: 14,
              color: "#4b5563",
              lineHeight: 1.6,
              margin: "14px 0 0",
              padding: "12px 20px 0",            }}>
              {descriptionText}
            </p>
          ) : null}

          {/* Details chips */}
          <div style={{ padding: "12px 20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
            <div>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                borderRadius: 999,
                padding: "0px 5px 5px",
                fontSize: 12,
                fontWeight: 600,
                color: "#0369A1",
              }}>
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
                {provider.hasTools ? "Has own tools" : "Uses owner's tools"}
              </span>
            </div>

            <div style={{ paddingBottom: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {(provider.paymentMethods ?? []).map((method: string) => (
                <span key={method} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: 999,
                  padding: "5px 11px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#166534",
                }}>
                  <svg width={12} height={12} viewBox="0 0 20 20" fill="none">
                    <path d="M5 10.5L9 14.5L15 7.5" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ padding: "0 16px 16px", display: "flex", gap: 10 }}>
            {isLargeScreen ? (
              <a
                href={`tel:${phone}`}
                onClick={() => { trackEvent("Provider_Call_Tapped", getAnalyticsPayload()); recordInteraction("call"); }}
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: accentColor, color: "#fff", borderRadius: 14, padding: "13px 0",
                  fontWeight: 700, fontSize: 15, textDecoration: "none",
                }}
              >
                <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.13h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.92a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                {formattedPhone}
              </a>
            ) : (
              <>
                <a
                  href={`tel:${phone}`}
                  onClick={() => { trackEvent("Provider_Call_Tapped", getAnalyticsPayload()); recordInteraction("call"); }}
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: accentColor, color: "#fff", borderRadius: 14, padding: "14px 0",
                    fontWeight: 700, fontSize: 16, textDecoration: "none",
                    boxShadow: `0 4px 14px ${accentColor}44`,
                  }}
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.13h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.92a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call
                </a>
                <a
                  href={`sms:${phone}?body=${encodeURIComponent(`Hi, I found your profile on Yardyman and I'd like to get a quote for your ${serviceLabel.toLowerCase()} service. Are you available?`)}`}
                  onClick={() => { trackEvent("Provider_Message_Tapped", getAnalyticsPayload()); recordInteraction("message"); }}
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "#f9fafb", color: "#374151", border: "1.5px solid #e5e7eb",
                    borderRadius: 14, padding: "14px 0", fontWeight: 700, fontSize: 16, textDecoration: "none",
                  }}
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  Message
                </a>
              </>
            )}
          </div>

          {/* Footer: rating + report */}
          {!isOwnProfile && (
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "10px 20px 18px",
              borderTop: "1px solid #f3f4f6",
            }}>

              {/* Report */}
              <button
                onClick={() => setShowReport(true)}
                style={{
                  display: "flex", alignItems: "center", gap: 5,
                  background: "none", border: "1px solid #f4b385", borderRadius: 999,
                  cursor: "pointer", padding: "5px 12px",
                  color: "#9ca3af", fontSize: 12, fontWeight: 500,
                }}
              >
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
                Report
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProviderPopupCard;
