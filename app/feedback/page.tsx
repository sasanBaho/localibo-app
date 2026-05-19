"use client";
import { useState } from "react";
import Link from "next/link";

function PageHeader() {
  return (
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
      <Link href="/" style={{
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
      <h1 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#111827" }}>Send Feedback</h1>
    </header>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  fontSize: 15,
  border: "1.5px solid #e5e7eb",
  borderRadius: 10,
  outline: "none",
  background: "#fff",
  color: "#111827",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#374151",
  marginBottom: 6,
};

const SUBJECTS = [
  "General Feedback",
  "App Experience",
  "Feature Request",
  "Bug Report",
  "Homeowner Experience",
  "Provider Experience",
  "Other",
];

const RATINGS = [
  { value: 5, label: "Love it" },
  { value: 4, label: "Pretty good" },
  { value: 3, label: "It's okay" },
  { value: 2, label: "Needs work" },
  { value: 1, label: "Not happy" },
];

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", rating: 0 });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredStar, setHoveredStar] = useState(0);

  const set = (field: string, value: string | number) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "", rating: 0 });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "");
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "");
      setStatus("error");
    }
  };

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focusedField === field ? "#22c55e" : "#e5e7eb",
    boxShadow: focusedField === field ? "0 0 0 3px rgba(34,197,94,0.12)" : "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
  });

  const activeStar = hoveredStar || form.rating;

  return (
    <div style={{ minHeight: "100dvh", background: "#f9fafb" }}>
      <PageHeader />

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "36px 20px 80px" }}>

        {/* Hero */}
        <div style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#fff7ed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}>
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </div>
        <h2 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 700, color: "#111827" }}>Send Feedback</h2>
        <p style={{ margin: "0 0 32px", fontSize: 15, color: "#6b7280", lineHeight: 1.6 }}>
          We'd love to hear from you. Your feedback helps us improve Yardyman for everyone.
        </p>

        {/* Form card */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "28px 24px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}>

          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "32px 16px" }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#fff7ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}>
                <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 17, color: "#111827" }}>Thanks for your feedback!</p>
              <p style={{ margin: "0 0 20px", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
                We read every message and use it to make Yardyman better. We may follow up at your email if needed.
              </p>
              <button
                onClick={() => setStatus("idle")}
                style={{
                  background: "none",
                  border: "1.5px solid #e5e7eb",
                  borderRadius: 999,
                  padding: "9px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#374151",
                  cursor: "pointer",
                }}
              >
                Send more feedback
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

              {/* Star rating */}
              <div>
                <label style={{ ...labelStyle, marginBottom: 10 }}>
                  How would you rate your experience? <span style={{ color: "#9ca3af", fontWeight: 400 }}>(optional)</span>
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {RATINGS.map(({ value, label }) => (
                    <button
                      key={value}
                      type="button"
                      title={label}
                      onMouseEnter={() => setHoveredStar(value)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => set("rating", form.rating === value ? 0 : value)}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 2,
                        cursor: "pointer",
                        lineHeight: 1,
                      }}
                    >
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        fill={value <= activeStar ? "#f59e0b" : "none"}
                        stroke={value <= activeStar ? "#f59e0b" : "#d1d5db"}
                        strokeWidth="1.5"
                        style={{ transition: "fill 0.1s, stroke 0.1s" }}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  ))}
                  {activeStar > 0 && (
                    <span style={{ fontSize: 13, color: "#6b7280", marginLeft: 4 }}>
                      {RATINGS.find((r) => r.value === activeStar)?.label}
                    </span>
                  )}
                </div>
              </div>

              {/* Name + Email */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <label style={labelStyle}>
                    Your Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    required
                    onChange={(e) => set("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    style={focusStyle("name")}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <label style={labelStyle}>
                    Email Address <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    required
                    onChange={(e) => set("email", e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    style={focusStyle("email")}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={labelStyle}>
                  Subject <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <select
                  value={form.subject}
                  required
                  onChange={(e) => set("subject", e.target.value)}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...focusStyle("subject"),
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: 38,
                    cursor: "pointer",
                    color: form.subject ? "#111827" : "#9ca3af",
                  }}
                >
                  <option value="" disabled>Select a topic...</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>
                  Your Feedback <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea
                  placeholder="Share your thoughts, ideas, or anything you'd like us to know. The more detail, the better!"
                  value={form.message}
                  required
                  rows={5}
                  onChange={(e) => set("message", e.target.value)}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...focusStyle("message"),
                    resize: "vertical",
                    minHeight: 120,
                  }}
                />
              </div>

              {status === "error" && (
                <p style={{ margin: 0, fontSize: 13, color: "#dc2626", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px" }}>
                  {errorMsg || "Something went wrong. Please try again or email us at"}{" "}
                  {!errorMsg && <a href="mailto:hi@yardyman.com" style={{ color: "#dc2626", fontWeight: 600 }}>hi@yardyman.com</a>}
                  {!errorMsg && "."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  background: status === "loading" ? "#fdba74" : "#f97316",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: "14px 0",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  width: "100%",
                  transition: "background 0.15s",
                }}
              >
                {status === "loading" ? "Sending…" : "Submit Feedback"}
              </button>

              <p style={{ margin: 0, textAlign: "center", fontSize: 12, color: "#9ca3af" }}>
                Your feedback goes directly to the Yardyman team.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
