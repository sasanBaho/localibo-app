import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read Yardyman's Terms & Conditions governing use of the platform for both service providers and clients. Understand your rights and responsibilities.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://yardyman.com/terms" },
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

function SubTitle({ children }: { children: ReactNode }) {
  return <p style={{ margin: "12px 0 4px", fontWeight: 600, color: "#374151", fontSize: 14 }}>{children}</p>;
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

function ContactBox() {
  return (
    <div style={{ background: "#f0fdf4", borderRadius: 12, padding: "14px 16px", marginTop: 8 }}>
      <p style={{ margin: "0 0 5px", fontSize: 14, color: "#374151" }}>
        <strong>Email:</strong>{" "}
        <a href="mailto:hi@yardyman.com" style={{ color: "#22c55e", textDecoration: "none" }}>hi@yardyman.com</a>
      </p>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#f9fafb" }}>
      <PageHeader title="Terms of Use" />

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
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </div>

        <h2 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 700, color: "#111827" }}>Terms &amp; Conditions</h2>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#9ca3af" }}>Last updated: Sept 27, 2025</p>
        <p style={{ margin: "0 0 32px", fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>
          These Terms &amp; Conditions govern the use of the Yardyman platform. By accessing or using Yardyman, you agree to be bound by these Terms. If you do not agree, do not use the platform.
        </p>

        <div style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>

          <PolicySection title="1. Eligibility">
            <SubTitle>Providers</SubTitle>
            <Para>
              To create a provider account, you must register using your phone number. You represent that all information provided is accurate and that you are legally eligible to offer services in your region.
            </Para>
            <SubTitle>Clients</SubTitle>
            <Para>
              Clients may use Yardyman without creating an account. By using the platform, you agree to abide by these Terms.
            </Para>
          </PolicySection>

          <PolicySection title="2. Use of the Platform">
            <Bullets items={[
              "Yardyman provides a digital platform that connects clients with local service providers.",
              "Yardyman does not manage, employ, endorse, or guarantee any provider or service.",
              "All interactions, communications, and transactions are strictly between clients and providers.",
            ]} />
          </PolicySection>

          <PolicySection title="3. Terms for Providers">
            <SubTitle>Account Responsibility</SubTitle>
            <Bullets items={[
              "You are responsible for all activity under your account.",
              "You must ensure that your service information is accurate, lawful, and not misleading.",
              "You agree not to post false, fraudulent, or inappropriate content.",
            ]} />
            <SubTitle>Service Responsibility</SubTitle>
            <Bullets items={[
              "You are solely responsible for the quality, safety, and legality of the services you provide.",
              "You agree to handle client inquiries and transactions in good faith.",
              "Yardyman bears no responsibility for disputes, cancellations, or unsatisfactory services.",
            ]} />
          </PolicySection>

          <PolicySection title="4. Terms for Clients">
            <SubTitle>Independent Providers</SubTitle>
            <Bullets items={[
              "You understand that providers are independent third parties, not employees or representatives of Yardyman.",
              "You are responsible for evaluating providers before engaging their services.",
            ]} />
            <SubTitle>No Guarantee</SubTitle>
            <Bullets items={[
              "Yardyman does not guarantee the reliability, safety, availability, or quality of any services offered by providers.",
              "All transactions and agreements are strictly between you and the provider.",
            ]} />
          </PolicySection>

          <PolicySection title="5. Prohibited Conduct">
            <Para>You agree not to:</Para>
            <Bullets items={[
              "Use the platform for unlawful purposes.",
              "Misrepresent your identity or services.",
              "Harass, abuse, or defraud other users.",
              "Attempt to interfere with the security or functionality of the platform.",
            ]} />
          </PolicySection>

          <PolicySection title="6. Limitation of Liability">
            <Bullets items={[
              'Yardyman is provided "as is" without warranties of any kind.',
              "Yardyman is not responsible for any losses, damages, injuries, or disputes arising from interactions between clients and providers.",
              "To the fullest extent permitted by law, Yardyman disclaims all liability related to your use of the platform.",
            ]} />
          </PolicySection>

          <PolicySection title="7. Termination">
            <Para>
              Yardyman reserves the right to suspend or terminate access to any user or provider who violates these Terms or engages in harmful conduct.
            </Para>
          </PolicySection>

          <PolicySection title="8. Disclaimer">
            <Bullets items={[
              "Yardyman is a neutral platform and does not control or monitor the services of providers.",
              "Yardyman does not guarantee the accuracy of listings, availability of providers, or outcomes of services.",
              "Users assume all risks when contacting or engaging with providers through Yardyman.",
            ]} />
          </PolicySection>

          <PolicySection title="9. Changes to Terms">
            <Para>
              We may update these Terms from time to time. Continued use of Yardyman after changes are posted constitutes acceptance of the revised Terms.
            </Para>
          </PolicySection>

          <PolicySection title="10. Contact Us" last>
            <Para>If you have questions about these Terms, please reach out to us:</Para>
            <ContactBox />
          </PolicySection>

        </div>
      </div>
    </div>
  );
}
