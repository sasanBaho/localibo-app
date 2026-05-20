import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://localibo.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Find Beauty, Tailor & Cook Services Near You | Localibo",
    template: "%s | Localibo",
  },
  description:
    "Find trusted, local beauty, tailor, and cook service providers in your area. Connect directly with vetted professionals, view ratings, and book today.",
  keywords: [
    "beauty providers near me",
    "tailor near me",
    "cook near me",
    "local beauty service",
    "find tailor near me",
    "hire cook near me",
    "beauty professionals",
    "local cook service",
    "localibo",
  ],
  authors: [{ name: "Localibo", url: BASE_URL }],
  creator: "Localibo",
  publisher: "Localibo",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "Localibo",
    title: "Find Beauty, Tailor & Cook Services Near You | Localibo",
    description:
      "Find trusted, local beauty, tailor, and cook service providers in your area. Connect directly with vetted professionals, view ratings, and book today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Localibo — Find Local Beauty, Tailor & Cook Providers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Beauty, Tailor & Cook Services Near You | Localibo",
    description:
      "Find trusted, local beauty, tailor, and cook service providers in your area. Connect directly with professionals and book today.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/localibo-logo.png",
    apple: "/localibo-logo.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Localibo",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/localibo-logo.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hi@localibo.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Localibo",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?service={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#beauty`,
      name: "Beauty",
      serviceType: "Beauty & Personal Care",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Canada" },
      description: "Find trusted local beauty professionals near you through Localibo.",
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#tailor`,
      name: "Tailor",
      serviceType: "Tailoring & Alterations",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Canada" },
      description: "Find trusted local tailors near you through Localibo.",
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#cook`,
      name: "Cook",
      serviceType: "Personal Chef & Cooking",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Canada" },
      description: "Find trusted local cooks and personal chefs near you through Localibo.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
