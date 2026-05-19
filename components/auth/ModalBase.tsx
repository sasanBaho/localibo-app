"use client";
import React from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

interface ModalBaseProps {
  onClose: () => void;
  children: React.ReactNode;
  closeButtonColor?: string;
  slideFrom?: "right" | "left";
}

const ModalBase: React.FC<ModalBaseProps> = ({
  onClose,
  children,
  closeButtonColor = "#09f",
  slideFrom,
}) => {
  useBodyScrollLock();

  const animationName =
    slideFrom === "right"
      ? "modalSlideFromRight"
      : slideFrom === "left"
      ? "modalSlideFromLeft"
      : "modalSlideUp";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: "rgba(0,0,0,0.45)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <style>{`
        @keyframes modalSlideUp {
          from { transform: translateY(40px); opacity: 0; }
          to   { transform: translateY(0);   opacity: 1; }
        }
        @keyframes modalSlideFromRight {
          from { transform: translateX(60px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes modalSlideFromLeft {
          from { transform: translateX(-60px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
      <div
        style={{
          background: "#fff",
          borderRadius: "20px 20px 0 0",
          width: "100%",
          maxWidth: 520,
          maxHeight: "92dvh",
          overflowY: "auto",
          overscrollBehavior: "contain",
          padding: "24px 24px 48px",
          position: "relative",
          animation: `${animationName} 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: closeButtonColor,
            border: "none",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            lineHeight: 1,
            zIndex: 1,
            flexShrink: 0,
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalBase;
