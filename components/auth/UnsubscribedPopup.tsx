"use client";
import React from "react";

interface UnsubscribedPopupProps {
  profileViews: number;
  isCancelled: boolean;
  onGoLive: () => void;
  onDismiss: () => void;
}

const UnsubscribedPopup: React.FC<UnsubscribedPopupProps> = ({
  profileViews,
  isCancelled,
  onGoLive,
  onDismiss,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 600,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: "rgba(0,0,0,0.45)",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onDismiss(); }}
    >
      <style>{`@keyframes popupSlideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`}</style>
      <div
        style={{
          background: "#fff",
          borderRadius: "20px 20px 0 0",
          width: "100%",
          maxWidth: 520,
          padding: "28px 24px 40px",
          animation: "popupSlideUp 0.28s cubic-bezier(0.25,0.46,0.45,0.94) both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width={20} height={20} viewBox="0 0 24 24" fill="#f59e0b">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="17" x2="12.01" y2="17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: "#111" }}>Your profile is hidden from homeowners</p>
            <p style={{ margin: 0, fontSize: 13, color: "#888" }}>You are not visible on the map</p>
          </div>
        </div>

        {profileViews > 0 && (
          <div style={{ background: "#f0fdf4", borderRadius: 12, padding: "12px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
            </svg>
            <p style={{ margin: 0, fontSize: 14, color: "#166534" }}>
              You had <strong>{profileViews}</strong> profile {profileViews === 1 ? "view" : "views"} — reactivate to start getting customers.
            </p>
          </div>
        )}

        <p style={{ margin: "0 0 20px", fontSize: 14, color: "#555", lineHeight: 1.6 }}>
          {isCancelled
            ? "Your subscription has ended. Reactivate to appear on the map and get contacted by homeowners directly."
            : "Subscribe to appear on the map and get contacted by homeowners directly. Your first 30 days are free."}
        </p>

        <button
          onClick={onGoLive}
          style={{ width: "100%", padding: "15px 0", borderRadius: 999, background: "#22c55e", color: "#fff", fontWeight: 700, fontSize: 17, border: "none", cursor: "pointer", marginBottom: 10 }}
        >
          {isCancelled ? "Reactivate Subscription" : "Start 30-Day Free Trial"}
        </button>

        <p style={{ margin: "0 0 10px", textAlign: "center", fontSize: 12, color: "#aaa" }}>
          Your profile and stats are saved
        </p>

        <button
          onClick={onDismiss}
          style={{ width: "100%", padding: "10px 0", borderRadius: 999, background: "none", color: "#888", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer" }}
        >
          Maybe later
        </button>
      </div>
    </div>
  );
};

export default UnsubscribedPopup;
