import React from "react";
import Link from "next/link";

export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div style={{
      width: "100%",
      aspectRatio: "16/9",
      background: "#f3f4f6",
      borderRadius: 14,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "28px 0",
      border: "2px dashed #d1d5db",
      gap: 8,
    }}>
      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span style={{ color: "#9ca3af", fontSize: 13, fontWeight: 500, textAlign: "center", padding: "0 16px" }}>{label}</span>
    </div>
  );
}

interface BlogPostLayoutProps {
  children: React.ReactNode;
  title: string;
  readTime: string;
  publishDate: string;
  category: string;
}

export function BlogPostLayout({ children, title, readTime, publishDate, category }: BlogPostLayoutProps) {
  return (
    <div style={{ minHeight: "100dvh", background: "#f9fafb" }}>
      {/* Sticky header */}
      <header style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        borderBottom: "1px solid #f3f4f6",
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        zIndex: 10,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}>
        <Link href="/blog" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#f3f4f6",
          textDecoration: "none",
          flexShrink: 0,
        }}>
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#111827", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          Yardyman Blog
        </span>
      </header>

      <main style={{ maxWidth: 680, margin: "0 auto", padding: "36px 20px 80px" }}>
        {/* Category badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          background: "#f0fdf4",
          color: "#16a34a",
          fontSize: 12,
          fontWeight: 700,
          borderRadius: 999,
          padding: "4px 12px",
          marginBottom: 16,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}>
          {category}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#111827", lineHeight: 1.3, margin: "0 0 16px" }}>
          {title}
        </h1>

        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#22c55e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <span style={{ fontSize: 13, color: "#374151", fontWeight: 600 }}>Yardyman Team</span>
          </div>
          <span style={{ color: "#d1d5db", fontSize: 13 }}>·</span>
          <span style={{ fontSize: 13, color: "#6b7280" }}>{publishDate}</span>
          <span style={{ color: "#d1d5db", fontSize: 13 }}>·</span>
          <span style={{ fontSize: 13, color: "#6b7280" }}>{readTime} read</span>
        </div>

        {/* Content */}
        <div style={{ fontSize: 16, color: "#374151", lineHeight: 1.8 }}>
          {children}
        </div>

        {/* CTA footer */}
        <div style={{
          marginTop: 56,
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: 16,
          padding: "28px 24px",
          textAlign: "center",
        }}>
          <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 18, color: "#111827" }}>
            Ready to grow your business?
          </p>
          <p style={{ margin: "0 0 20px", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
            Join Yardyman and start connecting with homeowners in your area today.
          </p>
          <Link href="/" style={{
            display: "inline-block",
            background: "#22c55e",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
            borderRadius: 999,
            padding: "12px 28px",
            textDecoration: "none",
          }}>
            Become a Provider
          </Link>
        </div>
      </main>
    </div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: 21, fontWeight: 700, color: "#111827", margin: "36px 0 12px", lineHeight: 1.35 }}>
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", margin: "24px 0 8px", lineHeight: 1.4 }}>
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ margin: "0 0 18px", lineHeight: 1.8 }}>
      {children}
    </p>
  );
}

export function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "#f0fdf4",
      border: "1px solid #bbf7d0",
      borderLeft: "4px solid #22c55e",
      borderRadius: "0 10px 10px 0",
      padding: "14px 18px",
      margin: "20px 0",
      fontSize: 14,
      color: "#166534",
      lineHeight: 1.7,
    }}>
      <strong>Pro Tip:</strong> {children}
    </div>
  );
}

export function NumberedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol style={{ margin: "0 0 18px", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ lineHeight: 1.7 }}>{item}</li>
      ))}
    </ol>
  );
}

export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: "0 0 18px", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ lineHeight: 1.7 }}>{item}</li>
      ))}
    </ul>
  );
}

export function Divider() {
  return <hr style={{ border: "none", borderTop: "1px solid #f3f4f6", margin: "32px 0" }} />;
}

export function TipCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #f3f4f6",
      borderRadius: 14,
      padding: "18px 20px",
      marginBottom: 14,
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#22c55e",
          color: "#fff",
          fontWeight: 800,
          fontSize: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          {number}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 6 }}>{title}</div>
          <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
