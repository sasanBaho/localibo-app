"use client";
import React, { useState, useRef, useEffect } from "react";

const COUNTRY_CODES = [
  { code: "+1", flag: "🇺🇸", label: "US / CA" },
  { code: "+44", flag: "🇬🇧", label: "UK" },
  { code: "+61", flag: "🇦🇺", label: "AU" },
  { code: "+49", flag: "🇩🇪", label: "DE" },
  { code: "+33", flag: "🇫🇷", label: "FR" },
  { code: "+91", flag: "🇮🇳", label: "IN" },
];

interface PhoneInputProps {
  value: string;
  onChange: (phone: string) => void;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  onBlur?: () => void;
  hasError?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
  onBlur,
  hasError,
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selected = COUNTRY_CODES.find((c) => c.code === countryCode) ?? COUNTRY_CODES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <div ref={wrapperRef} style={{ position: "relative" }}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "14px 12px",
            background: "#f0f0f0",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
            fontSize: 15,
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: 22 }}>{selected.flag}</span>
          <span>{selected.code}</span>
          <span style={{ fontSize: 10 }}>▼</span>
        </button>

        {open && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              background: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: 12,
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              zIndex: 600,
              minWidth: 180,
              overflow: "hidden",
            }}
          >
            {COUNTRY_CODES.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => {
                  onCountryCodeChange(c.code);
                  setOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  padding: "12px 16px",
                  background: c.code === countryCode ? "#f0f8ff" : "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 15,
                  textAlign: "left",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <span style={{ fontSize: 20 }}>{c.flag}</span>
                <span style={{ fontWeight: 600 }}>{c.code}</span>
                <span style={{ color: "#888", fontSize: 13 }}>{c.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder="Phone number"
        style={{
          flex: 1,
          padding: "14px 16px",
          background: hasError ? "#fff5f5" : "#f0f0f0",
          border: hasError ? "1.5px solid #f87171" : "1.5px solid transparent",
          borderRadius: 12,
          fontSize: 16,
          outline: "none",
          minWidth: 0,
          transition: "border-color 0.15s, background 0.15s",
        }}
      />
    </div>
  );
};

export default PhoneInput;
