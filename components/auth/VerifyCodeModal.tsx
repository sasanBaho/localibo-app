"use client";
import React, { useState, useRef } from "react";
import { ConfirmationResult, UserCredential } from "firebase/auth";
import ModalBase from "./ModalBase";

interface VerifyCodeModalProps {
  onClose: () => void;
  confirmationResult: ConfirmationResult;
  phone: string;
  photoPreview?: string | null;
  onVerified: (credential: UserCredential) => void;
  onEditPhone: () => void;
  isSignup?: boolean;
  onLoginInstead?: () => void;
}

const VerifyCodeModal: React.FC<VerifyCodeModalProps> = ({
  onClose,
  confirmationResult,
  phone,
  photoPreview,
  onVerified,
  onEditPhone,
  isSignup = false,
  onLoginInstead,
}) => {
  const [digits, setDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const code = digits.join("");
  const isComplete = code.length === 6;

  const handleDigitChange = (idx: number, val: string) => {
    const cleaned = val.replace(/\D/g, "").slice(-1);
    const newDigits = [...digits];
    newDigits[idx] = cleaned;
    setDigits(newDigits);
    if (cleaned && idx < 5) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[idx] && idx > 0) {
      const newDigits = [...digits];
      newDigits[idx - 1] = "";
      setDigits(newDigits);
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const newDigits = Array(6).fill("").map((_, i) => pasted[i] ?? "");
    setDigits(newDigits);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleVerify = async () => {
    if (!isComplete || loading) return;
    setLoading(true);
    setError("");
    try {
      const credential = await confirmationResult.confirm(code);
      onVerified(credential);
    } catch {
      setError("Invalid code. Please check and try again.");
      setDigits(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
    setLoading(false);
  };

  return (
    <ModalBase onClose={onClose} closeButtonColor="#22c55e">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>

        {/* Header */}
        {photoPreview ? (
          <img
            src={photoPreview}
            alt="Profile"
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #22c55e",
              marginBottom: 16,
            }}
          />
        ) : (
          <div style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#f0fdf4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}>
            <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
        )}

        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6, textAlign: "center" }}>
          Check your messages
        </h2>
        <p style={{ color: "#6b7280", fontSize: 14, textAlign: "center", margin: "0 0 6px" }}>
          We sent a 6-digit code to
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{phone}</span>
          <button
            onClick={onEditPhone}
            style={{
              background: "none",
              border: "none",
              color: "#22c55e",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              padding: 0,
              textDecoration: "underline",
            }}
          >
            Edit
          </button>
        </div>

        {/* 6-box OTP input */}
        <div
          style={{ display: "flex", gap: 6, marginBottom: 20, width: "100%" }}
          onPaste={handlePaste}
        >
          {digits.map((d, idx) => (
            <input
              key={idx}
              ref={(el) => { inputRefs.current[idx] = el; }}
              type="tel"
              inputMode="numeric"
              maxLength={1}
              value={d}
              onChange={(e) => handleDigitChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              style={{
                flex: 1,
                minWidth: 0,
                height: 46,
                border: `2px solid ${error ? "#fca5a5" : d ? "#22c55e" : "#e5e7eb"}`,
                borderRadius: 10,
                fontSize: 18,
                fontWeight: 700,
                textAlign: "center",
                outline: "none",
                background: error ? "#fff5f5" : d ? "#f0fdf4" : "#f9fafb",
                color: "#111827",
                cursor: "text",
                transition: "border-color 0.15s, background 0.15s",
              }}
            />
          ))}
        </div>

        {error && (
          <div style={{
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: 10,
            padding: "10px 14px",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "100%",
            boxSizing: "border-box",
          }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p style={{ color: "#ef4444", fontSize: 13, margin: 0 }}>{error}</p>
          </div>
        )}

        <button
          onClick={handleVerify}
          disabled={!isComplete || loading}
          style={{
            width: "100%",
            padding: "16px",
            background: isComplete && !loading ? "#22c55e" : "#e5e7eb",
            color: isComplete && !loading ? "#fff" : "#9ca3af",
            border: "none",
            borderRadius: 14,
            fontSize: 16,
            fontWeight: 700,
            cursor: isComplete && !loading ? "pointer" : "not-allowed",
            marginBottom: 16,
            transition: "background 0.15s",
          }}
        >
          {loading ? "Verifying…" : "Verify Code"}
        </button>

        {isSignup && onLoginInstead && (
          <div style={{ textAlign: "center", borderTop: "1px solid #f3f4f6", paddingTop: 16, width: "100%" }}>
            <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 8px" }}>Already have an account?</p>
            <button
              onClick={onLoginInstead}
              style={{
                background: "none",
                border: "none",
                color: "#22c55e",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </ModalBase>
  );
};

export default VerifyCodeModal;
