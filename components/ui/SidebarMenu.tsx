"use client";
import React, { useState } from "react";
import Link from "next/link";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser?: { photoUrl: string; name: string } | null;
  onSignOut?: () => void;
  onCancelSubscription?: () => Promise<void>;
  canCancelSubscription?: boolean;
}

// ── Icon components ────────────────────────────────────────────────────────

const BlogIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

const TermsIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const PrivacyIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const RefundIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
  </svg>
);

const FaqIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const FeedbackIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const SupportIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const SignOutIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const CancelSubIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="10" y1="14" x2="14" y2="18" />
    <line x1="14" y1="14" x2="10" y2="18" />
  </svg>
);

const ChevronIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ── Helper components ──────────────────────────────────────────────────────

function SidebarLink({ href, icon, label, onClose }: {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 20px",
        textDecoration: "none",
      }}
    >
      <span style={{
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: "#f0fdf4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        {icon}
      </span>
      <span style={{ fontSize: 15, color: "#111827", fontWeight: 500, flex: 1 }}>{label}</span>
      <ChevronIcon />
    </Link>
  );
}

function SectionTitle({ label }: { label: string }) {
  return (
    <p style={{
      fontSize: 11,
      fontWeight: 700,
      color: "#9ca3af",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      padding: "0 20px 6px",
      margin: 0,
    }}>
      {label}
    </p>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "#f3f4f6", margin: "12px 0" }} />;
}

function ConfirmPanel({ message, confirmLabel, loading, onConfirm, onDismiss }: {
  message: string;
  confirmLabel: string;
  loading: boolean;
  onConfirm: () => void;
  onDismiss: () => void;
}) {
  return (
    <div style={{ margin: "2px 16px 8px", background: "#fef2f2", borderRadius: 12, padding: "14px 16px" }}>
      <p style={{ fontSize: 13, color: "#374151", margin: "0 0 12px", lineHeight: 1.6 }}>{message}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={onDismiss}
          style={{
            flex: 1,
            padding: "9px",
            background: "#f3f4f6",
            border: "none",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            color: "#374151",
            cursor: "pointer",
          }}
        >
          Keep It
        </button>
        <button
          onClick={onConfirm}
          disabled={loading}
          style={{
            flex: 1,
            padding: "9px",
            background: "#ef4444",
            border: "none",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 700,
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Please wait…" : confirmLabel}
        </button>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSignOut,
  onCancelSubscription,
  canCancelSubscription,
}) => {
  const [confirmAction, setConfirmAction] = useState<"cancel" | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  if (!isOpen) return null;

  const handleSignOut = () => {
    onClose();
    onSignOut?.();
  };

  const handleCancelSubscription = async () => {
    setActionLoading(true);
    await onCancelSubscription?.();
    setActionLoading(false);
    setConfirmAction(null);
    onClose();
  };

  return (
    <>
      <style>{`
        @keyframes sidebarSlideIn {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 300,
          background: "rgba(0,0,0,0.38)",
          animation: "overlayFadeIn 0.22s ease",
        }}
      />

      {/* Sidebar panel */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        width: "min(300px, 88vw)",
        zIndex: 350,
        background: "#fff",
        overflowY: "auto",
        overscrollBehavior: "contain",
        animation: "sidebarSlideIn 0.26s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        boxShadow: "4px 0 28px rgba(0,0,0,0.13)",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "1px solid #f3f4f6",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/yardyman-logo.png" alt="Yardyman" style={{ width: 30, height: 30, borderRadius: 6, objectFit: "contain" }} />
            <span style={{ fontWeight: 700, fontSize: 17, color: "#111827" }}>Yardyman</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
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
            }}
          >
            <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, paddingBottom: 40 }}>

          {/* INFORMATION */}
          <div style={{ paddingTop: 20 }}>
            <SectionTitle label="Information" />
            <SidebarLink href="/blog" icon={<BlogIcon />} label="Blog" onClose={onClose} />
            <SidebarLink href="/terms" icon={<TermsIcon />} label="Terms of Use" onClose={onClose} />
            <SidebarLink href="/privacy" icon={<PrivacyIcon />} label="Privacy Policy" onClose={onClose} />
            <SidebarLink href="/refund" icon={<RefundIcon />} label="Refund Policy" onClose={onClose} />
            <SidebarLink href="/faq" icon={<FaqIcon />} label="FAQ" onClose={onClose} />
          </div>

          <Divider />

          {/* CONTACT US */}
          <div>
            <SectionTitle label="Contact Us" />
            <SidebarLink href="/feedback" icon={<FeedbackIcon />} label="Send Feedback" onClose={onClose} />
          </div>

          {/* ACCOUNT (logged-in only) */}
          {currentUser && (
            <>
              <Divider />
              <div>
                <SectionTitle label="Account" />

                <SidebarLink href="/provider-support" icon={<SupportIcon />} label="Provider Support" onClose={onClose} />

                {/* Sign Out */}
                <button
                  onClick={handleSignOut}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "#f9fafb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <SignOutIcon />
                  </span>
                  <span style={{ fontSize: 15, color: "#374151", fontWeight: 500 }}>Sign Out</span>
                </button>

                {/* Cancel Subscription — only shown when provider has an active subscription */}
                {canCancelSubscription && (
                  confirmAction === "cancel" ? (
                    <ConfirmPanel
                      message="Cancel your subscription? You'll keep access until the end of your billing period."
                      confirmLabel="Yes, Cancel"
                      loading={actionLoading}
                      onConfirm={handleCancelSubscription}
                      onDismiss={() => setConfirmAction(null)}
                    />
                  ) : (
                    <button
                      onClick={() => setConfirmAction("cancel")}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "11px 20px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "#fff7ed",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <CancelSubIcon />
                      </span>
                      <span style={{ fontSize: 15, color: "#f97316", fontWeight: 500 }}>Cancel Subscription</span>
                    </button>
                  )
                )}

              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
