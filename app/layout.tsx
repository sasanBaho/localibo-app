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

const BASE_URL = "https://yardyman.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Find Lawn Care & Snow Removal Providers Near You | Yardyman",
    template: "%s | Yardyman",
  },
  description:
    "Find trusted, local lawn care and snow removal contractors in your area. Connect directly with vetted service providers, view ratings, and get quotes today.",
  keywords: [
    "lawn care providers near me",
    "snow removal contractors near me",
    "local lawn mowing service",
    "lawn care near me",
    "snow removal near me",
    "find lawn care provider",
    "hire snow removal",
    "lawn care Ontario",
    "snow removal Ontario",
    "yardyman",
  ],
  authors: [{ name: "Yardyman", url: BASE_URL }],
  creator: "Yardyman",
  publisher: "Yardyman",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "Yardyman",
    title: "Find Lawn Care & Snow Removal Providers Near You | Yardyman",
    description:
      "Find trusted, local lawn care and snow removal contractors in your area. Connect directly with vetted service providers, view ratings, and get quotes today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yardyman — Find Local Lawn Care & Snow Removal Providers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Lawn Care & Snow Removal Providers Near You | Yardyman",
    description:
      "Find trusted, local lawn care and snow removal contractors in your area. Connect directly with service providers and get quotes today.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/yardyman-logo.png",
    apple: "/yardyman-logo.png",
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
      name: "Yardyman",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/yardyman-logo.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hi@yardyman.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Yardyman",
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
      "@id": `${BASE_URL}/#lawn-care`,
      name: "Lawn Care",
      serviceType: "Lawn Care & Mowing",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Canada" },
      description:
        "Find trusted local lawn care and mowing providers near you through Yardyman.",
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#snow-removal`,
      name: "Snow Removal",
      serviceType: "Snow Removal & Plowing",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Canada" },
      description:
        "Find trusted local snow removal contractors near you through Yardyman.",
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
