"use client";
import React, { useRef, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import ModalBase from "./ModalBase";
import PhoneInput from "./PhoneInput";
import { auth, db, collection, query, where, getDocs } from "@/firebase";

interface LoginModalProps {
  onClose: () => void;
  onCodeSent: (result: ConfirmationResult, phone: string) => void;
  onCreateAccount: () => void;
  initialPhone?: string;
  initialCountryCode?: string;
  slideFrom?: "right" | "left";
}

const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  onCodeSent,
  onCreateAccount,
  initialPhone = "",
  initialCountryCode = "+1",
  slideFrom,
}) => {
  const [phone, setPhone] = useState(initialPhone);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const recaptchaRef = useRef<RecaptchaVerifier | null>(null);

  const digits = phone.replace(/\D/g, "");
  const fullPhone = countryCode + digits;
  const isValidPhone = digits.length >= 10;
  const isValid = isValidPhone;
  const phoneError = phoneTouched && !isValidPhone;

  const handleSendCode = async () => {
    if (!isValid || loading) return;
    setLoading(true);
    setError("");
    setNotFound(false);
    try {
      const snapshot = await getDocs(
        query(collection(db, "providers"), where("phoneNumber", "==", fullPhone))
      );
      if (snapshot.empty) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      if (!recaptchaRef.current) {
        recaptchaRef.current = new RecaptchaVerifier(auth, "recaptcha-login", {
          size: "invisible",
        });
      }
      const result = await signInWithPhoneNumber(auth, fullPhone, recaptchaRef.current);
      onCodeSent(result, fullPhone);
    } catch (err: any) {
      setError(err.message ?? "Failed to send verification code. Please try again.");
      recaptchaRef.current = null;
    }
    setLoading(false);
  };

  return (
    <ModalBase onClose={onClose} slideFrom={slideFrom} closeButtonColor="#22c55e">
      <div id="recaptcha-login" />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28, paddingTop: 4 }}>
        <div style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#f0fdf4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 14px",
        }}>
          <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
          Welcome Back
        </h2>
        <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
          Sign in to manage your services
        </p>
      </div>

      <label style={{ fontWeight: 600, fontSize: 13, color: "#374151", display: "block", marginBottom: 6, letterSpacing: "0.02em" }}>
        Phone Number
      </label>
      <PhoneInput
        value={phone}
        onChange={(v) => { setPhone(v); setNotFound(false); }}
        countryCode={countryCode}
        onCountryCodeChange={setCountryCode}
        onBlur={() => setPhoneTouched(true)}
        hasError={phoneError}
      />
      {phoneError ? (
        <p style={{ color: "#ef4444", fontSize: 12, margin: "4px 0 20px 2px" }}>
          Please enter a valid 10-digit phone number
        </p>
      ) : (
        <p style={{ color: "#9ca3af", fontSize: 13, margin: "6px 0 28px" }}>
          A verification code will be sent via SMS.
        </p>
      )}

      {notFound && (
        <div style={{
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: 12,
          padding: "14px 16px",
          marginBottom: 16,
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
            <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p style={{ color: "#991b1b", fontSize: 13, margin: 0, lineHeight: 1.5 }}>
              No account found for this phone number. Want to join Yardyman as a provider?
            </p>
          </div>
          <button
            onClick={onCreateAccount}
            style={{
              width: "100%",
              padding: "11px 0",
              background: "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: 9,
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Create Provider Account
          </button>
        </div>
      )}

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
        onClick={handleSendCode}
        disabled={!isValid || loading}
        style={{
          width: "100%",
          padding: "16px",
          background: isValid && !loading ? "#22c55e" : "#e5e7eb",
          color: isValid && !loading ? "#fff" : "#9ca3af",
          border: "none",
          borderRadius: 14,
          fontSize: 16,
          fontWeight: 700,
          cursor: isValid && !loading ? "pointer" : "not-allowed",
          marginBottom: 12,
          transition: "background 0.15s",
        }}
      >
        {loading ? "Sending…" : "Send Verification Code"}
      </button>

      <p style={{ textAlign: "center", color: "#9ca3af", fontSize: 12, marginBottom: 20, lineHeight: 1.6 }}>
        By continuing, you agree to our{" "}
        <a href="/terms" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "#6b7280" }}>Terms of Use</a>
        {" "}and{" "}
        <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "#6b7280" }}>Privacy Policy</a>
      </p>

      <div style={{ textAlign: "center", borderTop: "1px solid #f3f4f6", paddingTop: 16 }}>
        <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 8px" }}>New to Yardyman?</p>
        <button
          onClick={onCreateAccount}
          style={{
            background: "none",
            border: "none",
            color: "#22c55e",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Create Provider Account
        </button>
      </div>
    </ModalBase>
  );
};

export default LoginModal;
