"use client";
import React, { useState } from "react";
import { auth, db } from "@/firebase";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const REPORT_TYPES = [
  {
    value: "poor_service",
    label: "Poor Service Quality",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    ),
  },
  {
    value: "unprofessional_behavior",
    label: "Unprofessional Behavior",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <line x1="17" y1="11" x2="23" y2="17" /><line x1="23" y1="11" x2="17" y2="17" />
      </svg>
    ),
  },
  {
    value: "no_show",
    label: "Provider No-Show",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        <line x1="18" y1="18" x2="22" y2="22" />
      </svg>
    ),
  },
  {
    value: "overcharging",
    label: "Overcharging",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v10M14.5 9.5a2.5 2.5 0 00-5 0 2.5 2.5 0 005 0 2.5 2.5 0 00-5 0" />
      </svg>
    ),
  },
  {
    value: "safety_concerns",
    label: "Safety Concerns",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    ),
  },
  {
    value: "inappropriate_behavior",
    label: "Inappropriate Behavior",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    value: "fraud_scam",
    label: "Fraud / Scam",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
        <line x1="16" y1="17" x2="22" y2="11" /><line x1="22" y1="17" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    value: "other",
    label: "Other",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="12" r="0.5" fill="currentColor" /><circle cx="12" cy="12" r="0.5" fill="currentColor" /><circle cx="16" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
] as const;

type ReportTypeValue = (typeof REPORT_TYPES)[number]["value"];

const MAX_DESC = 500;

interface ReportModalProps {
  providerId: string;
  providerName: string;
  onClose: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ providerId, providerName, onClose }) => {
  useBodyScrollLock();

  const [selectedType, setSelectedType] = useState<ReportTypeValue>("poor_service");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid = description.trim().length > 0 && description.length <= MAX_DESC;

  async function handleSubmit() {
    if (!isValid || submitting) return;
    const userId = auth.currentUser?.uid;
    if (!userId) {
      setError("You need to be signed in to submit a report.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const reportId = crypto.randomUUID();
      await setDoc(doc(db, "provider_reports", reportId), {
        id: reportId,
        reporterId: userId,
        providerId,
        providerName: providerName ?? "",
        reportType: selectedType,
        description: description.trim(),
        createdAt: serverTimestamp(),
        status: "pending",
      });
      setDone(true);
      setTimeout(onClose, 2000);
    } catch (e: any) {
      setError(e?.message ?? "Failed to submit report. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 800,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: "rgba(0,0,0,0.45)",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: "#f2f2f7",
          borderRadius: "20px 20px 0 0",
          width: "100%",
          maxWidth: 520,
          maxHeight: "88dvh",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nav bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 16px 12px",
          background: "#f2f2f7",
          borderRadius: "20px 20px 0 0",
          flexShrink: 0,
        }}>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#007aff", fontSize: 16, cursor: "pointer", padding: 0 }}>
            Cancel
          </button>
          <span style={{ fontWeight: 700, fontSize: 17 }}>Report Provider</span>
          <button
            onClick={handleSubmit}
            disabled={!isValid || submitting || done}
            style={{
              background: "none",
              border: "none",
              color: isValid && !submitting && !done ? "#007aff" : "#aaa",
              fontSize: 16,
              fontWeight: 700,
              cursor: isValid && !submitting && !done ? "pointer" : "not-allowed",
              padding: 0,
            }}
          >
            {submitting ? "…" : "Submit"}
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ overflowY: "auto", flex: 1, paddingBottom: 40 }}>
          {done ? (
            <div style={{ textAlign: "center", padding: "60px 24px" }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
              <p style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>Report Submitted</p>
              <p style={{ color: "#888", fontSize: 14, marginTop: 8, lineHeight: 1.5 }}>
                Thank you for your report. Our team will review it and take appropriate action.
              </p>
            </div>
          ) : (
            <>
              {/* Provider info */}
              <div style={{ margin: "12px 16px 0", background: "#fff", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "8px 0 4px 12px", fontSize: 12, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>
                  Provider Information
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px 14px" }}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  <span style={{ fontWeight: 600, fontSize: 16 }}>{providerName || "Unknown Provider"}</span>
                </div>
              </div>

              {/* Report type */}
              <div style={{ margin: "20px 16px 0" }}>
                <div style={{ fontSize: 12, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8, paddingLeft: 4 }}>
                  Report Type
                </div>
                <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden" }}>
                  {REPORT_TYPES.map((type, idx) => (
                    <button
                      key={type.value}
                      onClick={() => setSelectedType(type.value)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "13px 14px",
                        background: "none",
                        border: "none",
                        borderBottom: idx < REPORT_TYPES.length - 1 ? "1px solid #f0f0f0" : "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ color: "#22c55e", flexShrink: 0 }}>{type.icon}</span>
                      <span style={{ flex: 1, fontSize: 15, color: "#222" }}>{type.label}</span>
                      {selectedType === type.value && (
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="#007aff">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8z" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div style={{ margin: "20px 16px 0" }}>
                <div style={{ fontSize: 12, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8, paddingLeft: 4 }}>
                  Issue Description
                </div>
                <div style={{ background: "#fff", borderRadius: 12, padding: "12px 14px" }}>
                  <p style={{ fontSize: 13, color: "#888", margin: "0 0 8px" }}>
                    Please describe the issue <span style={{ color: "#e53e3e" }}>*</span>
                  </p>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what happened…"
                    rows={4}
                    style={{
                      width: "100%",
                      border: "none",
                      outline: "none",
                      resize: "none",
                      fontSize: 15,
                      fontFamily: "inherit",
                      color: "#222",
                      background: "transparent",
                      boxSizing: "border-box",
                    }}
                  />
                  <div style={{ textAlign: "right", fontSize: 12, color: description.length > MAX_DESC ? "#e53e3e" : "#aaa", marginTop: 4 }}>
                    {description.length}/{MAX_DESC}
                  </div>
                </div>
              </div>

              {/* Privacy notice */}
              <div style={{ margin: "20px 16px 0" }}>
                <div style={{ background: "#fff", borderRadius: 12, padding: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>Privacy Notice</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.5 }}>
                    Your report will be sent directly to our admin team and will remain confidential. Reports are not visible to other users or the reported provider.
                  </p>
                </div>
              </div>

              {error && (
                <p style={{ color: "#e53e3e", fontSize: 14, margin: "14px 16px 0", textAlign: "center" }}>
                  {error}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
