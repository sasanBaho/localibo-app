"use client";
import React from "react";
import ModalBase from "./ModalBase";

interface MapPreviewStepProps {
  imageUrl: string;
  providerName: string;
  onSubscribe: () => void;
  onLater: () => void;
}

const MapPreviewStep: React.FC<MapPreviewStepProps> = ({
  imageUrl,
  providerName,
  onSubscribe,
  onLater,
}) => {
  return (
    <ModalBase onClose={onLater} closeButtonColor="#22c55e">
      <div style={{ paddingTop: 8 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: "#111" }}>
          You're almost live!
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 14, color: "#666" }}>
          This is how homeowners in your area will find you on the map.
        </p>

        {/* Map preview */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            height: 200,
            background: "#e8f0e8",
            marginBottom: 20,
          }}
        >
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="mpGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c8d8c8" strokeWidth="1" />
              </pattern>
              <pattern id="mpRoads" width="120" height="120" patternUnits="userSpaceOnUse">
                <rect width="120" height="120" fill="url(#mpGrid)" />
                <rect x="50" width="20" height="120" fill="#d4e6d4" />
                <rect y="50" width="120" height="20" fill="#d4e6d4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mpRoads)" />
          </svg>

          {/* Greyed-out pin */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #fff",
                  background: "#ccc",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  filter: "grayscale(1) opacity(0.55)",
                }}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt={providerName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ width: "100%", height: "100%", background: "#bbb" }} />
                )}
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -2,
                  right: -2,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "#ef4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1.5px solid #fff",
                }}
              >
                <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
            <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "8px solid rgba(255,255,255,0.7)", marginTop: -2 }} />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 999,
              padding: "4px 12px",
              whiteSpace: "nowrap",
            }}
          >
            Hidden from homeowners
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <p style={{ margin: "0 0 8px", fontSize: 15, color: "#222", fontWeight: 600 }}>
            Subscribe to go live and start getting customers
          </p>
          <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              "Your pin appears on the map for homeowners nearby",
              "Customers call or message you directly — no commission",
              "First 30 days completely free",
            ].map((item) => (
              <li key={item} style={{ fontSize: 13, color: "#555" }}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={onSubscribe}
          style={{
            width: "100%",
            padding: "15px 0",
            borderRadius: 999,
            background: "#22c55e",
            color: "#fff",
            fontWeight: 700,
            fontSize: 17,
            border: "none",
            cursor: "pointer",
            marginBottom: 12,
          }}
        >
          Start 30-Day Free Trial
        </button>

        <button
          onClick={onLater}
          style={{
            width: "100%",
            padding: "12px 0",
            borderRadius: 999,
            background: "none",
            color: "#888",
            fontWeight: 600,
            fontSize: 15,
            border: "none",
            cursor: "pointer",
          }}
        >
          I'll do this later
        </button>
      </div>
    </ModalBase>
  );
};

export default MapPreviewStep;
