import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Yardyman collects, uses, and protects your information. Our Privacy Policy covers data handling for both service providers and clients on the platform.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://yardyman.com/privacy" },
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

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100dvh", background: "#f9fafb" }}>
      <PageHeader title="Privacy Policy" />

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
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>

        <h2 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 700, color: "#111827" }}>Privacy Policy</h2>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#9ca3af" }}>Last updated: Nov 4, 2025</p>
        <p style={{ margin: "0 0 32px", fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>
          Yardyman respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our web application.
        </p>

        <div style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>

          <PolicySection title="1. Information We Collect">
            <SubTitle>From Providers</SubTitle>
            <Bullets items={[
              "Phone number (for account creation and login).",
              "Service information you choose to provide (e.g., business description, contact details).",
            ]} />
            <SubTitle>From Clients</SubTitle>
            <Para>
              No sign-up is required. We may collect device and usage information (e.g., platform activity) to improve the service.
            </Para>
            <SubTitle>Location Data</SubTitle>
            <Para>
              We may collect approximate location data to display nearby providers on the map. You can manage location permissions in your device settings at any time.
            </Para>
          </PolicySection>

          <PolicySection title="2. How We Use Information">
            <Para>We use collected information to:</Para>
            <Bullets items={[
              "Enable providers to create and manage accounts.",
              "Display provider profiles and locations to clients.",
              "Allow clients to contact providers via call or message.",
              "Improve, maintain, and secure the platform.",
              "Comply with legal obligations.",
            ]} />
          </PolicySection>

          <PolicySection title="3. Sharing of Information">
            <Bullets items={[
              "We do not sell or rent your personal information.",
              "We may share information with service providers that help operate the platform (e.g., hosting, messaging, analytics).",
              "We may share information with authorities if required by law or to protect rights, safety, or security.",
              "Information shared by providers (such as phone number or service description) may be visible to clients on the platform.",
            ]} />
          </PolicySection>

          <PolicySection title="4. Data Security">
            <Para>
              We implement reasonable safeguards to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </Para>
          </PolicySection>

          <PolicySection title="5. Data Retention">
            <Bullets items={[
              "Provider data (phone number, profile) is retained as long as the account is active.",
              "You may request deletion of your account and associated data by contacting us.",
              "Some data may be retained for legal or security purposes even after account deletion.",
            ]} />
          </PolicySection>

          <PolicySection title="6. Your Choices">
            <Bullets items={[
              "Providers: You may update your account information at any time through the platform.",
              "Clients: You may manage location permissions in your browser settings.",
              "All users: You may clear your browser data or stop using the platform to limit further data collection.",
            ]} />
          </PolicySection>

          <PolicySection title="7. Children's Privacy">
            <Para>
              Yardyman is not intended for children under 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us information, please contact us and we will remove it promptly.
            </Para>
          </PolicySection>

          <PolicySection title="8. Liability Disclaimer">
            <SubTitle>For Providers</SubTitle>
            <Bullets items={[
              "Your phone number and location are publicly visible on the platform so that clients can contact you directly.",
              "Clients may call or text you using this information. We are not responsible or liable for any misuse of your contact information by other users.",
              "You are solely responsible for interactions, communications, and services provided to clients.",
            ]} />
            <SubTitle>For Providers and Clients</SubTitle>
            <Bullets items={[
              "We are not liable for any loss, damage, theft, injury, or misconduct that may occur during or after a service engagement arranged through Yardyman.",
              "If a client fails to pay or if a provider causes damage, these matters are strictly between the involved parties.",
              "Yardyman functions solely as a connection platform and does not mediate payments or guarantee outcomes.",
            ]} />
          </PolicySection>

          <PolicySection title="9. Reporting and Account Actions">
            <Bullets items={[
              "Clients can report a provider directly on the platform. Upon review, we may suspend or permanently block a provider account if violations are confirmed.",
              "Providers can submit a Provider Support Form available in the platform settings to report client misconduct. We may block client accounts after review.",
            ]} />
          </PolicySection>

          <PolicySection title="10. Changes to This Privacy Policy">
            <Para>
              We may update this Privacy Policy from time to time. Changes will be effective once posted on the platform. Your continued use of Yardyman after any changes constitutes your acceptance of the updated policy.
            </Para>
          </PolicySection>

          <PolicySection title="11. Contact Us" last>
            <Para>If you have questions about this Privacy Policy, please contact us:</Para>
            <ContactBox />
          </PolicySection>

        </div>
      </div>
    </div>
  );
}
