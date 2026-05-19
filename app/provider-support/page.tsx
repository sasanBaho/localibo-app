"use client";
import { useState } from "react";
import Link from "next/link";

function PageHeader({ title }: { title: string }) {
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
      <h1 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#111827" }}>{title}</h1>
    </header>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: 20, marginBottom: 20 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
        <span style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "#f0fdf4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: 1,
        }}>
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </span>
        <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>{question}</p>
      </div>
      <p style={{ margin: "0 0 0 32px", fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{answer}</p>
    </div>
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
  "Subscription Issue",
  "Profile Problem",
  "Payment Issue",
  "Technical Issue",
  "Account Access",
  "Other",
];

export default function ProviderSupportPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", description: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const set = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", description: "" });
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

  return (
    <div style={{ minHeight: "100dvh", background: "#f9fafb" }}>
      <PageHeader title="Provider Support" />

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "36px 20px 80px" }}>

        {/* Hero */}
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
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <h2 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 700, color: "#111827" }}>Provider Support</h2>
        <p style={{ margin: "0 0 32px", fontSize: 15, color: "#6b7280", lineHeight: 1.6 }}>
          Find answers to common questions below, or fill out the form and we'll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "28px 24px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          marginBottom: 28,
        }}>
          <h3 style={{ margin: "0 0 20px", fontSize: 17, fontWeight: 700, color: "#111827" }}>Contact Support</h3>

          {status === "success" ? (
            <div style={{
              textAlign: "center",
              padding: "32px 16px",
            }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#f0fdf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}>
                <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 17, color: "#111827" }}>Message sent!</p>
              <p style={{ margin: "0 0 20px", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
                Our support team will get back to you at <strong>{form.email || "your email"}</strong> within 1–2 business days.
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
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Name + Email row */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <label style={labelStyle}>
                    Full Name <span style={{ color: "#ef4444" }}>*</span>
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
                <div style={{ flex: 1, minWidth: 200 }}>
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

              {/* Phone */}
              <div>
                <label style={labelStyle}>Phone Number <span style={{ color: "#9ca3af", fontWeight: 400 }}>(optional)</span></label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  style={focusStyle("phone")}
                />
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

              {/* Description */}
              <div>
                <label style={labelStyle}>
                  Describe your issue <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea
                  placeholder="Please describe your issue in as much detail as possible — include any error messages, steps to reproduce, or relevant account information."
                  value={form.description}
                  required
                  rows={5}
                  onChange={(e) => set("description", e.target.value)}
                  onFocus={() => setFocusedField("description")}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...focusStyle("description"),
                    resize: "vertical",
                    minHeight: 120,
                  }}
                />
              </div>

              {status === "error" && (
                <p style={{ margin: 0, fontSize: 13, color: "#dc2626", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px" }}>
                  {errorMsg || "Something went wrong. Please try again or email us directly at"}{" "}
                  {!errorMsg && <a href="mailto:support@yardyman.com" style={{ color: "#dc2626", fontWeight: 600 }}>support@yardyman.com</a>}
                  {!errorMsg && "."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  background: status === "loading" ? "#86efac" : "#22c55e",
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
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              <p style={{ margin: 0, textAlign: "center", fontSize: 12, color: "#9ca3af" }}>
                We typically respond within 1–2 business days.
              </p>
            </form>
          )}
        </div>

        {/* FAQ */}
        <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", margin: "0 0 20px" }}>Frequently Asked Questions</h3>

        <div style={{ background: "#fff", borderRadius: 16, padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <FaqItem
            question="How do I update my profile information?"
            answer="Tap your profile photo in the top navigation bar to open your provider profile. From there you can edit your name, photo, services, and payment methods."
          />
          <FaqItem
            question="How do I manage my subscription?"
            answer="Open your profile from the top navigation bar and scroll to the 'My Subscription' section. You can view your billing dates and cancel or reactivate your subscription from there."
          />
          <FaqItem
            question="How do homeowners find my profile?"
            answer="Once you create an account and enable availability, your profile appears as a pin on the Yardyman map for homeowners in your area."
          />
          <FaqItem
            question="What happens after my free trial ends?"
            answer="After your 1-month free trial, your chosen subscription plan will begin billing. You can cancel at any time before the trial ends to avoid charges."
          />
          <FaqItem
            question="How do I toggle my availability?"
            answer="Open your provider profile and use the availability toggle. When set to unavailable, your pin will be hidden from homeowners on the map."
          />
        </div>
      </div>
    </div>
  );
}
