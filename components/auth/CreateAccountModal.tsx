"use client";
import React, { useRef, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import ModalBase from "./ModalBase";
import PhoneInput from "./PhoneInput";
import ImageCropModal from "./ImageCropModal";
import { auth, db, collection, query, where, getDocs } from "@/firebase";

export interface SignupFormData {
  name: string;
  email: string;
  photoFile: File | null;
  photoPreview: string | null;
}

interface CreateAccountModalProps {
  onClose: () => void;
  onCodeSent: (result: ConfirmationResult, phone: string, data: SignupFormData) => void;
  onLogin: () => void;
  onPhoneAlreadyRegistered: (phone: string, countryCode: string) => void;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({
  onClose,
  onCodeSent,
  onLogin,
  onPhoneAlreadyRegistered,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [email, setEmail] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);
  const recaptchaRef = useRef<RecaptchaVerifier | null>(null);

  const digits = phone.replace(/\D/g, "");
  const fullPhone = countryCode + digits;

  const isValidName = name.trim().length >= 2;
  const isValidPhone = digits.length >= 10;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isValid = isValidName && isValidPhone && isValidEmail;

  const nameError = touched.name && !isValidName;
  const phoneError = touched.phone && !isValidPhone;
  const emailError = touched.email && !isValidEmail;

  const touch = (field: string) => setTouched((t) => ({ ...t, [field]: true }));

  const fieldStyle = (fieldName: string, hasError = false): React.CSSProperties => ({
    width: "100%",
    padding: "14px 16px",
    background: "#f9fafb",
    border: `1.5px solid ${focusedField === fieldName ? "#22c55e" : hasError ? "#f87171" : "#e5e7eb"}`,
    borderRadius: 12,
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    color: "#111827",
    transition: "border-color 0.15s",
  });

  const inlineError = (msg: string) => (
    <p style={{ color: "#ef4444", fontSize: 12, margin: "4px 0 8px 2px", lineHeight: 1.4 }}>{msg}</p>
  );

  const handlePhotoSelected = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setCropSrc(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleCropDone = (dataUrl: string) => {
    setCropSrc(null);
    setPhotoPreview(dataUrl);
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    const u8 = new Uint8Array(bstr.length);
    for (let i = 0; i < bstr.length; i++) u8[i] = bstr.charCodeAt(i);
    setPhotoFile(new File([u8], "profile.jpg", { type: mime }));
  };

  const handleSendCode = async () => {
    if (!isValid || loading) return;
    setLoading(true);
    setError("");
    try {
      const snapshot = await getDocs(
        query(collection(db, "providers"), where("phoneNumber", "==", fullPhone))
      );
      if (!snapshot.empty) {
        setLoading(false);
        onPhoneAlreadyRegistered(phone, countryCode);
        return;
      }
      if (!recaptchaRef.current) {
        recaptchaRef.current = new RecaptchaVerifier(auth, "recaptcha-create", {
          size: "invisible",
        });
      }
      const result = await signInWithPhoneNumber(auth, fullPhone, recaptchaRef.current);
      onCodeSent(result, fullPhone, { name, email, photoFile, photoPreview });
    } catch (err: any) {
      setError(err.message ?? "Failed to send verification code. Please try again.");
      recaptchaRef.current = null;
    }
    setLoading(false);
  };

  return (
    <>
      {cropSrc && (
        <ImageCropModal
          src={cropSrc}
          onCrop={handleCropDone}
          onCancel={() => setCropSrc(null)}
        />
      )}

      <ModalBase onClose={onClose} closeButtonColor="#22c55e">
        <div id="recaptcha-create" />

        {/* Hidden file input — "image/*" lets iOS show its native Camera/Library sheet */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files?.[0]) handlePhotoSelected(e.target.files[0]);
            e.target.value = "";
          }}
        />

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 24, paddingTop: 4 }}>
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
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
            Become a Provider
          </h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
            Join Yardyman and start getting clients
          </p>
        </div>

        {/* Photo upload — tapping directly opens the file picker */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            style={{
              position: "relative",
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: photoPreview ? "transparent" : "#f0fdf4",
              border: photoPreview ? "3px solid #22c55e" : "2px dashed #86efac",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: 0,
            }}
          >
            {photoPreview ? (
              <>
                <img
                  src={photoPreview}
                  alt="Profile preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 30,
                  background: "rgba(0,0,0,0.42)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span style={{ color: "#22c55e", fontSize: 11, marginTop: 6, fontWeight: 600 }}>Add Photo</span>
              </>
            )}
          </button>
        </div>

        {/* Full Name */}
        <label style={{ fontWeight: 600, fontSize: 13, color: "#374151", display: "block", marginBottom: 6, letterSpacing: "0.02em" }}>
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setFocusedField("name")}
          onBlur={() => { setFocusedField(null); touch("name"); }}
          placeholder="Enter your full name"
          style={{ ...fieldStyle("name", nameError), marginBottom: nameError ? 0 : 16 }}
        />
        {nameError && inlineError("Please enter your full name")}

        {/* Phone Number */}
        <label style={{ fontWeight: 600, fontSize: 13, color: "#374151", display: "block", marginBottom: 6, letterSpacing: "0.02em", marginTop: nameError ? 12 : 0 }}>
          Phone Number
        </label>
        <PhoneInput
          value={phone}
          onChange={setPhone}
          countryCode={countryCode}
          onCountryCodeChange={setCountryCode}
          onBlur={() => touch("phone")}
          hasError={phoneError}
        />
        {phoneError
          ? inlineError("Please enter a valid 10-digit phone number")
          : <p style={{ color: "#9ca3af", fontSize: 13, margin: "6px 0 16px" }}>A verification code will be sent via SMS.</p>
        }

        {/* Email */}
        <label style={{ fontWeight: 600, fontSize: 13, color: "#374151", display: "block", marginBottom: 6, letterSpacing: "0.02em", marginTop: phoneError ? 4 : 0 }}>
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocusedField("email")}
          onBlur={() => { setFocusedField(null); touch("email"); }}
          placeholder="Enter your email address"
          style={{ ...fieldStyle("email", emailError), marginBottom: emailError ? 0 : 24 }}
        />
        {emailError && inlineError("Please enter a valid email address (e.g. name@example.com)")}

        <div style={{ marginTop: emailError ? 16 : 0 }} />

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
          <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 8px" }}>Already have an account?</p>
          <button
            onClick={onLogin}
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
      </ModalBase>
    </>
  );
};

export default CreateAccountModal;
