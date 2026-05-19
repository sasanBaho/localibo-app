"use client";
import React from "react";
import Link from "next/link";

interface LocationPermissionModalProps {
  onGranted: (coords: [number, number]) => void;
  onClose: () => void;
}

const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.5)",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 24,
          padding: "36px 28px 28px",
          width: "100%",
          maxWidth: 380,
          boxShadow: "0 24px 64px rgba(0,0,0,0.22)",
          textAlign: "center",
        }}
      >
        {/* Icon */}
        <div style={{
          width: 68,
          height: 68,
          borderRadius: "50%",
          background: "#f0fdf4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
        }}>
          <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 10px" }}>
          Location Access Required
        </h2>

        <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 12px", lineHeight: 1.65 }}>
          Yardyman needs your location to show you on the map and connect you with nearby homeowners.
        </p>

        <p style={{ fontSize: 14, fontWeight: 600, color: "#374151", margin: "0 0 24px", lineHeight: 1.5 }}>
          You cannot create a provider account without sharing your location.
        </p>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "15px",
            background: "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: 14,
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: 14,
            transition: "background 0.15s",
          }}
        >
          OK
        </button>

        <Link
          href="/how-to-enable-location"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            color: "#3b82f6",
            fontSize: 13,
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          How to enable location access?
        </Link>
      </div>
    </div>
  );
};

export default LocationPermissionModal;
