import { cache } from "react";
import { notFound, redirect } from "next/navigation";
import { RedirectType } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { slugifyStr } from "@/lib/slugify";
import ViewTracker from "./ViewTracker";

export const revalidate = 3600;
export const dynamicParams = true;

const BASE_URL = "https://yardyman.com";
const ACTIVE_STATUSES = ["active", "trialing"];

const SERVICE_MAP: Record<string, { key: string; label: string }> = {
  "lawn-care": { key: "service-one", label: "Lawn Care" },
  "snow-removal": { key: "service-two", label: "Snow Removal" },
};

const SERVICE_SLUG: Record<string, string> = {
  "service-one": "lawn-care",
  "service-two": "snow-removal",
};

// ─── Data fetching ────────────────────────────────────────────────────────────

const fetchProvider = cache(async (citySlug: string, nameSlug: string) => {
  const snap = await getAdminDb()
    .collection("providers")
    .where("citySlug", "==", citySlug)
    .where("nameSlug", "==", nameSlug)
    .where("subscriptionStatus", "in", ACTIVE_STATUSES)
    .limit(1)
    .get();
  if (snap.empty) return null;
  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() } as Record<string, any>;
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  if (digits.length === 11 && digits[0] === "1") return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  return raw;
}

function getDescription(description: any, serviceKey: string): string {
  if (description && typeof description === "object") {
    if (description[serviceKey]) return description[serviceKey];
    const first = Object.values(description)[0];
    if (typeof first === "string") return first;
  }
  return typeof description === "string" ? description : "";
}

function getAccent(serviceKey: string) {
  return serviceKey === "service-two"
    ? { accent: "#0ea5e9", light: "#e0f2fe" }
    : { accent: "#22c55e", light: "#f0fdf4" };
}

// ─── generateStaticParams ─────────────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const snap = await getAdminDb()
      .collection("providers")
      .where("subscriptionStatus", "in", ACTIVE_STATUSES)
      .orderBy("profileViewCount", "desc")
      .limit(100)
      .get();

    const params: { city: string; service: string; name: string }[] = [];
    for (const doc of snap.docs) {
      const d = doc.data();
      if (!d.citySlug || !d.nameSlug) continue;
      const services: string[] = d.selectedServices ?? [];
      for (const svc of services) {
        const serviceSlug = SERVICE_SLUG[svc];
        if (serviceSlug) {
          params.push({ city: d.citySlug, service: serviceSlug, name: d.nameSlug });
        }
      }
    }
    return params;
  } catch {
    return [];
  }
}

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string; name: string }>;
}): Promise<Metadata> {
  const { city, service, name } = await params;
  const p = await fetchProvider(city, name);
  if (!p) return { title: "Provider Not Found" };

  const svc = SERVICE_MAP[service];
  const serviceLabel = svc?.label ?? "Lawn Care";
  const providerName: string = p.providerName ?? "Provider";
  const cityName: string = p.city ?? "";
  const ratingPart =
    (p.ratingsCount ?? 0) > 0
      ? ` ${Number(p.rating).toFixed(1)} stars from ${p.ratingsCount} reviews.`
      : "";

  return {
    title: `${providerName} - ${serviceLabel} in ${cityName}`,
    description: `${providerName} offers ${serviceLabel.toLowerCase()} in ${cityName}.${ratingPart} Contact directly for a free quote.`,
    alternates: { canonical: `${BASE_URL}/provider/${city}/${service}/${name}` },
    openGraph: {
      type: "profile",
      title: `${providerName} - ${serviceLabel} in ${cityName} | Yardyman`,
      description: `${providerName} offers ${serviceLabel.toLowerCase()} in ${cityName}.${ratingPart} Contact directly for a free quote.`,
      images: p.imageUrl ? [{ url: p.imageUrl, width: 400, height: 400, alt: `${providerName} profile photo` }] : [],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ city: string; service: string; name: string }>;
}) {
  const { city, service, name } = await params;

  // Validate service slug
  const svc = SERVICE_MAP[service];
  if (!svc) notFound();

  const provider = await fetchProvider(city, name);
  if (!provider) notFound();

  // Verify provider actually offers this service
  const services: string[] = provider.selectedServices ?? [];
  if (!services.includes(svc.key)) {
    // Redirect to their first available service page
    const firstSvc = services.find((s) => SERVICE_SLUG[s]);
    if (!firstSvc) notFound();
    redirect(`/provider/${city}/${SERVICE_SLUG[firstSvc]}/${name}`, RedirectType.replace);
  }

  // Canonical slug check
  const expectedCity = provider.citySlug ?? slugifyStr(provider.city ?? "");
  const expectedName = provider.nameSlug ?? slugifyStr(provider.providerName ?? "");
  if (city !== expectedCity || name !== expectedName) {
    redirect(`/provider/${expectedCity}/${service}/${expectedName}`, RedirectType.replace);
  }

  const serviceLabel = svc.label;
  const { accent, light } = getAccent(svc.key);
  const description = getDescription(provider.description, svc.key);
  const phone: string = provider.phoneNumber ?? "";
  const cityName: string = provider.city ?? "";
  const providerName: string = provider.providerName ?? "Provider";
  const rating: number = provider.rating ?? 0;
  const ratingsCount: number = provider.ratingsCount ?? 0;
  const paymentMethods: string[] = provider.paymentMethods ?? [];
  const filledStars = Math.round(rating);
  const otherServices = services.filter((s) => s !== svc.key && SERVICE_SLUG[s]);

  const smsBody = encodeURIComponent(
    `Hi, I found your profile on Yardyman and I'd like to get a quote for your ${serviceLabel.toLowerCase()} service. Are you available?`
  );

  const localBusinessSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: providerName,
    telephone: phone,
    url: `${BASE_URL}/provider/${city}/${service}/${name}`,
    image: provider.imageUrl ?? undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressCountry: "CA",
    },
    serviceType: [serviceLabel],
    areaServed: { "@type": "City", name: cityName },
  };

  if (ratingsCount > 0) {
    localBusinessSchema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating.toFixed(1),
      reviewCount: ratingsCount,
    };
  }

  const serviceIcon = svc.key === "service-two" ? "/shovel-blue.png" : "/lawn-mower-green.png";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ViewTracker providerId={provider.id} />

      <div style={{ minHeight: "100dvh", background: "#fff" }}>
        {/* Header */}
        <header style={{
          position: "sticky", top: 0, background: "#fff",
          borderBottom: "1px solid #f3f4f6", padding: "14px 20px",
          display: "flex", alignItems: "center", gap: 14,
          zIndex: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}>
          <Link href="/" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 36, height: 36, borderRadius: "50%", background: "#f3f4f6",
            textDecoration: "none", flexShrink: 0,
          }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <img src="/yardyman-logo.png" alt="Yardyman" style={{ width: 28, height: 28, objectFit: "contain", borderRadius: 4 }} />
            <span style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>Yardyman</span>
          </Link>
        </header>

        <div style={{ maxWidth: 520, margin: "0 auto", padding: "24px 16px 60px" }}>
          <article>
            <div style={{ marginBottom: 20 }}>

              {/* Profile header: avatar left, name+badge+rating right */}
              <div style={{ padding: "20px 20px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>

                  {/* Avatar with colored ring */}
                  <div style={{
                    width: 100, height: 100,
                    borderRadius: "50%", padding: 1,
                    background: accent, flexShrink: 0,
                  }}>
                    <img
                      src={provider.imageUrl}
                      alt={`${providerName} profile photo`}
                      style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", border: "2px solid #fff", display: "block" }}
                    />
                  </div>

                  {/* Name + service badge + rating */}
                  <div style={{ flex: 1, minWidth: 0, paddingTop: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <h1 style={{
                        margin: 0, fontWeight: 800, fontSize: 19, color: "#111827",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}>
                        {providerName}
                      </h1>
                    </div>

                    {/* Service badge */}
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      background: light, borderRadius: 999,
                      padding: "4px 10px 4px 6px", marginBottom: 8,
                    }}>
                      <img src={serviceIcon} alt={serviceLabel} style={{ width: 22, height: 22, objectFit: "contain" }} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: accent }}>{serviceLabel}</span>
                    </div>

                    {/* Rating */}
                    <div style={{ display: "flex", alignItems: "center", gap: 4, minHeight: 24 }}>
                      {ratingsCount > 0 ? (
                        <>
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} width={16} height={16} viewBox="0 0 24 24"
                              fill={i < filledStars ? "#f59e0b" : "none"}
                              stroke={i < filledStars ? "#f59e0b" : "#d1d5db"}
                              strokeWidth="1.5">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                          <span style={{ fontWeight: 700, fontSize: 13, color: "#111827", marginLeft: 2 }}>
                            {rating.toFixed(1)}
                          </span>
                          <span style={{ fontSize: 12, color: "#9ca3af" }}>({ratingsCount})</span>
                        </>
                      ) : (
                        <span style={{
                          fontSize: 12, fontWeight: 600, color: "#f59e0b",
                          background: "#fffbeb", border: "1.5px solid #fde68a",
                          borderRadius: 999, padding: "3px 10px",
                          display: "inline-flex", alignItems: "center", gap: 4,
                        }}>
                          ★ No ratings yet
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description — full width gray background */}
                {description ? (
                  <p style={{
                    fontSize: 14, color: "#4b5563", lineHeight: 1.6,
                    margin: "14px 0 0", padding: "12px 20px 0",
                  }}>
                    {description}
                  </p>
                ) : null}

                {/* Details chips */}
                <div style={{ padding: "12px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      borderRadius: 999, padding: "0px 5px 5px",
                      fontSize: 12, fontWeight: 600, color: "#0369A1",
                    }}>
                      <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                      </svg>
                      {provider.hasTools ? "Has own tools" : "Uses owner's tools"}
                    </span>
                  </div>

                  {paymentMethods.length > 0 && (
                    <div style={{ paddingBottom: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {paymentMethods.map((method: string) => (
                        <span key={method} style={{
                          display: "inline-flex", alignItems: "center", gap: 5,
                          background: "#f0fdf4", border: "1px solid #bbf7d0",
                          borderRadius: 999, padding: "5px 11px",
                          fontSize: 12, fontWeight: 600, color: "#166534",
                        }}>
                          <svg width={12} height={12} viewBox="0 0 20 20" fill="none">
                            <path d="M5 10.5L9 14.5L15 7.5" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {method}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Other service links */}
              {otherServices.length > 0 && (
                <div style={{ padding: "0 20px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 600 }}>Also offers:</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {otherServices.map((s) => {
                      const otherSvc = Object.entries(SERVICE_MAP).find(([, v]) => v.key === s);
                      if (!otherSvc) return null;
                      const [otherSlug, { label }] = otherSvc;
                      return (
                        <Link key={s} href={`/provider/${city}/${otherSlug}/${name}`} style={{
                          display: "inline-flex", alignItems: "center", gap: 5,
                          background: "#f3f4f6", borderRadius: 999, padding: "5px 14px",
                          fontSize: 13, fontWeight: 600, color: "#374151", textDecoration: "none",
                        }}>
                          {label} →
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              {phone ? (
                <div style={{ padding: "0 16px 16px", display: "flex", gap: 10 }}>
                  <a href={`tel:${phone}`} style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: accent, color: "#fff", borderRadius: 14, padding: "14px 0",
                    fontWeight: 700, fontSize: 16, textDecoration: "none",
                    boxShadow: `0 4px 14px ${accent}44`,
                  }}>
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.13h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.92a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    Call
                  </a>
                  <a href={`sms:${phone}?body=${smsBody}`} style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "#f9fafb", color: "#374151", border: "1.5px solid #e5e7eb",
                    borderRadius: 14, padding: "14px 0", fontWeight: 700, fontSize: 16, textDecoration: "none",
                  }}>
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    Message
                  </a>
                </div>
              ) : null}

              {/* Footer: report */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "flex-end",
                padding: "10px 20px 18px", borderTop: "1px solid #f3f4f6",
              }}>
                <span style={{
                  fontSize: 12, fontWeight: 500, color: "#9ca3af",
                  border: "1px solid #f4b385", borderRadius: 999,
                  padding: "5px 12px", display: "inline-flex", alignItems: "center", gap: 5,
                }}>
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                  Report
                </span>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <Link href="/" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 14, color: accent, fontWeight: 600, textDecoration: "none",
              }}>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                View all providers on the map
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
