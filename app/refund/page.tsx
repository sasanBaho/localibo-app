import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Yardyman offers a 30-day money-back guarantee if you don't receive any client leads. Read our full refund policy to understand eligibility and how to request a refund.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://yardyman.com/refund" },
};

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

function PolicySection({ title, children, last }: { title: string; children: ReactNode; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 0 : 32, paddingBottom: last ? 0 : 28, borderBottom: last ? "none" : "1px solid #f3f4f6" }}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 12px" }}>{title}</h3>
      <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.85 }}>{children}</div>
    </div>
  );
}

function Para({ children }: { children: ReactNode }) {
  return <p style={{ margin: "0 0 8px", fontSize: 14, color: "#6b7280", lineHeight: 1.85 }}>{children}</p>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "4px 0 8px", paddingLeft: 20, listStyleType: "disc" }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 6, fontSize: 14, color: "#6b7280", lineHeight: 1.75 }}>{item}</li>
      ))}
    </ul>
  );
}

function InfoBox({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 12, padding: "14px 16px", marginTop: 8 }}>
      <p style={{ margin: 0, fontSize: 13, color: "#92400e", lineHeight: 1.7 }}>{children}</p>
    </div>
  );
}

function ContactBox() {
  return (
    <div style={{ background: "#f0fdf4", borderRadius: 12, padding: "14px 16px", marginTop: 8 }}>
      <p style={{ margin: "0 0 5px", fontSize: 14, color: "#374151" }}>
        <strong>Email:</strong>{" "}
        <a href="mailto:refund@yardyman.com" style={{ color: "#22c55e", textDecoration: "none" }}>refund@yardyman.com</a>
      </p>
      <p style={{ margin: 0, fontSize: 14, color: "#374151" }}>
        <strong>Website:</strong>{" "}
        <a href="https://yardyman.com" target="_blank" rel="noopener noreferrer" style={{ color: "#22c55e", textDecoration: "none" }}>yardyman.com</a>
      </p>
    </div>
  );
}

export default function RefundPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#f9fafb" }}>
      <PageHeader title="Refund Policy" />

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "36px 20px 60px" }}>
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
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
          </svg>
        </div>

        <h2 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 700, color: "#111827" }}>Refund Policy</h2>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#9ca3af" }}>Last updated: June 1, 2025</p>
        <p style={{ margin: "0 0 32px", fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>
          At Yardyman, we are committed to provider satisfaction. This Refund Policy outlines the terms under which refunds may be issued. It forms part of our Terms of Use and applies to all providers who have made a purchase through our official channels.
        </p>

        <div style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>

          <PolicySection title="1. Eligibility for Refund">
            <Para>
              We offer a 30-day money-back guarantee from the date of purchase if you did not receive any client through Yardyman. This policy applies regardless of your country of residence, ensuring a fair experience for all providers.
            </Para>
            <Para>To be eligible for a refund:</Para>
            <Bullets items={[
              "Your request must be received within thirty (30) calendar days of the original purchase date.",
              "You must submit your request via email to refund@yardyman.com.",
              "Include your phone number and the email address used during checkout.",
              "Include a brief explanation of the reason for the refund.",
              "Optionally include your order ID or the last 4 digits of your payment card for verification.",
            ]} />
      
          </PolicySection>

          <PolicySection title="2. Method and Processing of Refunds">
            <Bullets items={[
              "Approved refunds will be issued via PayPal.",
              "Refunds are issued minus 2.5% of the original payment amount. This deduction reflects the Stripe commission fee that is not paid to Yardyman and therefore cannot be refunded.",
              "We do not charge any additional refund handling or processing fees.",
            ]} />
          </PolicySection>

          <PolicySection title="3. Cases Where Refunds Are Not Granted">
            <Para>Refunds may be declined under the following conditions:</Para>
            <Bullets items={[
              "Requests made after the 30-day window has elapsed.",
              "Violation of our Terms of Use, including unlawful, harmful, or abusive use of the platform.",
              "Fraudulent behavior, false identity, or payment disputes.",
              "Abuse of the refund policy, including repeated refund requests for the same or multiple purchases.",
              "The account has been suspended or banned due to breach of policy or detected fraud.",
            ]} />
            <Para>
              We reserve the right to deny any refund where we have a good-faith belief that the request is dishonest or abusive.
            </Para>
          </PolicySection>

          <PolicySection title="4. Additional Considerations">
            <Bullets items={[
              "Eligibility is based on compliance with the 30-day timeframe and adherence to our Terms of Use.",
              "Refunds are not guaranteed and are issued at our reasonable discretion.",
              "We reserve the right to interpret, apply, or amend this policy in accordance with applicable law.",
            ]} />
          </PolicySection>

          <PolicySection title="5. How to Submit a Refund Request">
            <Para>
              Send an email to <strong>refund@yardyman.com</strong> with the subject line: <em>Refund Request &ndash; Yardyman</em>
            </Para>
            <Para>Your email should include:</Para>
            <Bullets items={[
              "The email address used during the original purchase.",
              "Your name (exactly as used on Yardyman) and phone number.",
              "A short explanation of your reason for requesting a refund.",
              "Optional: your order number or proof of purchase.",
            ]} />
            <Para>
              We aim to respond to all refund inquiries within 3 business days, though response times may vary based on volume.
            </Para>
          </PolicySection>

          <PolicySection title="6. Your Statutory Rights">
            <Para>
              This Refund Policy does not limit or exclude any rights you may have under applicable consumer protection laws in your jurisdiction. If you are a resident of a country where specific statutory refund rights apply (e.g., under the EU Consumer Rights Directive), those rights shall be respected in full.
            </Para>
          </PolicySection>

          <PolicySection title="7. Contact Information" last>
            <Para>For all refund inquiries, support requests, or legal concerns, contact us at:</Para>
            <ContactBox />
          </PolicySection>

        </div>
      </div>
    </div>
  );
}
