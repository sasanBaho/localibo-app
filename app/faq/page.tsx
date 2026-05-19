"use client";
import Link from "next/link";
import { useState } from "react";

const FAQS: { q: string; a: string; link?: { href: string; label: string } }[] = [
  {
    q: "Do I need to pay to join?",
    a: "Every provider starts with a free 1-month trial. After your trial, choose the plan that works best for you. We're currently offering a limited-time discount: 50% off the 3-month plan ($18.99) and 75% off the yearly plan ($72), valid until July 1st. If you don't receive any job leads during your paid plan period, we'll refund you — no questions asked.",
    link: { href: "/refund", label: "Learn more about our refund policy" },
  },
  {
    q: "Can I use my own tools and ingredients?",
    a: "Absolutely. Unless a client makes a special request, you are free to use your own tools and supplies. We encourage providers to maintain consistency and quality in their services to build trust and long-term satisfaction with customers.",
  },
  {
    q: "How do customers find me?",
    a: "We actively promote Yardyman within local communities through advertising and outreach to help customers discover providers like you. However, the most powerful growth comes from happy clients — satisfied customers are more likely to recommend your services to friends and family, helping you build a loyal client base over time.",
  },
  {
    q: "Can I set my own working hours?",
    a: "Yes — you have full flexibility to choose when you want to work. As your own boss, you set your availability and schedule according to what works best for you. Whether you want to work full-time, part-time, or only on weekends, Yardyman gives you the freedom to run your business entirely on your own terms.",
  },
  {
    q: "What if I am away or on vacation?",
    a: 'You are in control. Simply turn off the "I\'m available" toggle in your profile and you will be hidden from the map until you are ready to take orders again. No need to cancel anything — just flip the switch.',
  },
  {
    q: "What services can I offer on Yardyman?",
    a: "Currently, Yardyman supports lawn care and snow removal services. We are continuously working to expand the range of services available on the platform, so stay tuned for future updates.",
  },
  {
    q: "How do clients contact me?",
    a: "Clients can reach you directly through Yardyman by calling or sending a text message to the phone number you registered with. Your contact information is visible to clients so they can get in touch without any delays.",
  },
  {
    q: "Is my personal information safe?",
    a: "We take data security seriously and implement reasonable safeguards to protect your information. Note that your phone number and approximate location are visible to clients on the platform so they can contact you. Please review our Privacy Policy for full details on how we handle your data.",
  },
  {
    q: "What happens if a client has a complaint?",
    a: "Clients can report a provider directly on the platform. We review all reports carefully and may take action, including suspending or permanently blocking an account, if a violation is confirmed. As a provider, you can also report client misconduct by submitting a Provider Support Form from the platform settings.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel your subscription at any time from your account settings. After cancellation, you will retain access to your account until the end of your current billing period. If you are not satisfied, you may also be eligible for a refund under our 30-day money-back guarantee — see our Refund Policy for details.",
  },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "transform 0.22s", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function FaqItem({ question, answer, link }: { question: string; answer: string; link?: { href: string; label: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: "1px solid #f3f4f6",
      overflow: "hidden",
    }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "18px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: "#111827", lineHeight: 1.4, flex: 1 }}>
          {question}
        </span>
        <ChevronDown open={open} />
      </button>

      {open && (
        <div style={{ padding: "0 24px 18px" }}>
          <p style={{ margin: 0, fontSize: 14, color: "#6b7280", lineHeight: 1.85 }}>{answer}</p>
          {link && (
            <Link
              href={link.href}
              style={{ display: "inline-block", marginTop: 8, fontSize: 13, color: "#22c55e", fontWeight: 600, textDecoration: "none" }}
            >
              {link.label} →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#f9fafb" }}>
      {/* Header */}
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
        <h1 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#111827" }}>FAQ</h1>
      </header>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "36px 20px 60px" }}>
        {/* Icon + heading */}
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

        <h2 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 700, color: "#111827" }}>
          Frequently Asked Questions
        </h2>
        <p style={{ margin: "0 0 32px", fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>
          Everything you need to know before you start your home-based business with Yardyman.
        </p>

        {/* FAQ accordion card */}
        <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", overflow: "hidden" }}>
          {FAQS.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} link={faq.link} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div style={{
          marginTop: 28,
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: 16,
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <div style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "#dcfce7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <div>
            <p style={{ margin: "0 0 2px", fontSize: 15, fontWeight: 700, color: "#111827" }}>Still have questions?</p>
            <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>
              {"Reach out to us at "}
              <a href="mailto:hi@Yardyman.com" style={{ color: "#22c55e", textDecoration: "none", fontWeight: 600 }}>
                hi@Yardyman.com
              </a>
              {" and we will be happy to help."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
