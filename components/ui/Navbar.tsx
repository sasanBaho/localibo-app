"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import SidebarMenu from "./SidebarMenu";

type NavbarProps = {
  children?: React.ReactNode;
  onCreateAccount?: () => void;
  onSignIn?: () => void;
  currentUser?: { photoUrl: string; name: string } | null;
  onEditAccount?: () => void;
  onSignOut?: () => void;
  onCancelSubscription?: () => Promise<void>;
  canCancelSubscription?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({
  children,
  onCreateAccount,
  onSignIn,
  currentUser,
  onEditAccount,
  onSignOut,
  onCancelSubscription,
  canCancelSubscription,
}) => {
  const [isWide, setIsWide] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsWide(window.innerWidth >= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          gap: isWide ? 12 : 8,
          background: "#fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          paddingTop: "max(8px, env(safe-area-inset-top, 8px))",
          paddingBottom: isWide ? "8px" : "6px",
          paddingLeft: isWide ? "20px" : "12px",
          paddingRight: isWide ? "20px" : "12px",
          transform: "translate3d(0,0,0)",
          WebkitTransform: "translate3d(0,0,0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, marginRight: isWide ? 4 : 2 }}>
          <img
            src="/yardyman-logo.png"
            alt="Yardyman Logo"
            style={{ width: isWide ? 36 : 32, height: isWide ? 36 : 32, objectFit: "contain", borderRadius: 4 }}
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          style={{ background: "none", border: "none", padding: isWide ? 4 : 2, cursor: "pointer", display: "flex", alignItems: "center", flexShrink: 0 }}
          aria-label="Open menu"
        >
          <FiMenu size={isWide ? 26 : 24} />
        </button>

        {/* Account */}
        {currentUser ? (
          <button
            onClick={onEditAccount}
            aria-label="My profile"
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <img
              src={currentUser.photoUrl}
              alt={currentUser.name}
              style={{
                width: isWide ? 32 : 28,
                height: isWide ? 32 : 28,
                borderRadius: "50%",
                objectFit: "cover",
                border: "1.5px solid #3eab40",
              }}
            />
          </button>
        ) : (
          (onCreateAccount || onSignIn) && (
            <div ref={dropdownRef} style={{ position: "relative", flexShrink: 0 }}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                aria-label="Account"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                <img
                  src="/user-account.png"
                  alt="Account"
                  style={{ width: isWide ? 30 : 26, height: isWide ? 30 : 26, objectFit: "contain" }}
                />
              </button>

              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: 0,
                    background: "#fff",
                    borderRadius: 16,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                    minWidth: 210,
                    overflow: "hidden",
                    zIndex: 300,
                    border: "1px solid #f0f0f0",
                  }}
                >
                  <button
                    onClick={() => { setDropdownOpen(false); onCreateAccount?.(); }}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid #f3f4f6",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span style={{
                      width: 36, height: 36, borderRadius: "50%", background: "#f0fdf4",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="19" y1="8" x2="19" y2="14" />
                        <line x1="22" y1="11" x2="16" y2="11" />
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#111", lineHeight: 1.3 }}>Join as Provider</div>
                      <div style={{ fontSize: 12, color: "#888", marginTop: 1 }}>Create a new account</div>
                    </div>
                  </button>

                  <button
                    onClick={() => { setDropdownOpen(false); onSignIn?.(); }}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span style={{
                      width: 36, height: 36, borderRadius: "50%", background: "#f5f5f5",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                        <polyline points="10 17 15 12 10 7" />
                        <line x1="15" y1="12" x2="3" y2="12" />
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#111", lineHeight: 1.3 }}>Sign In</div>
                      <div style={{ fontSize: 12, color: "#888", marginTop: 1 }}>Access your account</div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          )
        )}

        {/* Service buttons (children) */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: isWide ? 10 : 6 }}>
          {children}
        </div>
      </div>

      <SidebarMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentUser={currentUser}
        onSignOut={onSignOut}
        onCancelSubscription={onCancelSubscription}
        canCancelSubscription={canCancelSubscription}
      />
    </>
  );
};

export default Navbar;
