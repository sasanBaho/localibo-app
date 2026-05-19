import type { MetadataRoute } from "next";
import { getAdminDb } from "@/lib/firebaseAdmin";

const BASE_URL = "https://yardyman.com";

const SERVICE_SLUG: Record<string, string> = {
  "service-one": "lawn-care",
  "service-two": "snow-removal",
};

const staticPages = [
  { url: BASE_URL, priority: 1.0, changeFrequency: "daily" as const },
  { url: `${BASE_URL}/faq`, priority: 0.8, changeFrequency: "weekly" as const },
  { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
  { url: `${BASE_URL}/privacy`, priority: 0.4, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/terms`, priority: 0.4, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/refund`, priority: 0.5, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/feedback`, priority: 0.3, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/provider-support`, priority: 0.4, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/how-to-enable-location`, priority: 0.5, changeFrequency: "monthly" as const },
];

const blogPosts = [
  "lawn-mowing-side-hustle",
  "10-tips-returning-customers",
  "stand-out-profile-tips",
  "safe-job-practices",
  "yardyman-vs-uber",
].map((slug) => ({
  url: `${BASE_URL}/blog/${slug}`,
  priority: 0.7,
  changeFrequency: "monthly" as const,
}));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  let providerUrls: MetadataRoute.Sitemap = [];
  try {
    const snap = await getAdminDb()
      .collection("providers")
      .where("subscriptionStatus", "in", ["active", "trialing"])
      .select("citySlug", "nameSlug", "selectedServices", "updatedAt")
      .get();

    for (const doc of snap.docs) {
      const d = doc.data();
      if (!d.citySlug || !d.nameSlug) continue;
      const services: string[] = d.selectedServices ?? [];
      for (const svc of services) {
        const serviceSlug = SERVICE_SLUG[svc];
        if (!serviceSlug) continue;
        providerUrls.push({
          url: `${BASE_URL}/provider/${d.citySlug}/${serviceSlug}/${d.nameSlug}`,
          lastModified: d.updatedAt?.toDate?.() ?? now,
          priority: 0.7,
          changeFrequency: "weekly" as const,
        });
      }
    }
  } catch {
    // If Firestore is unavailable at build time, skip provider URLs
  }

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...blogPosts.map((p) => ({ ...p, lastModified: now })),
    ...providerUrls,
  ];
}
