import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Got questions about Localibo? Find answers about pricing, free trials, how clients find you, payments, cancellation, and our money-back guarantee.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://localibo.com/faq" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
