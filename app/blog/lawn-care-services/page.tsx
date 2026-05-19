import { Metadata } from "next";
import { BlogPostLayout, P } from "@/components/blog/BlogPostLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lawn Care & Snow Removal Services Near You in Ontario | Yardyman",
  description:
    "Find local providers for bush trimming, lawn mowing, snow removal, leaf removal, gutter cleaning, and more in Newmarket, Richmond Hill, Barrie, Aurora, Vaughan, and across Ontario.",
  keywords: [
    "lawn care services near me",
    "lawn mowing near me",
    "bush trimming near me",
    "snow removal near me",
    "leaf removal near me",
    "gutter cleaning near me",
    "lawn care Newmarket",
    "lawn mowing Newmarket",
    "bush trimming Newmarket",
    "snow removal Newmarket",
    "lawn care Richmond Hill",
    "lawn mowing Richmond Hill",
    "snow removal Richmond Hill",
    "lawn care Barrie",
    "lawn care Aurora",
    "lawn care Vaughan",
    "lawn care Markham",
    "lawn care Bradford",
    "lawn care King City",
    "lawn care Ontario",
    "yard clean up near me",
    "lawn aeration near me",
    "fertilization near me",
    "weed control near me",
    "gardening services near me",
    "seeding near me",
    "pre-emergent weed control",
    "local lawn care provider",
    "hire lawn care Ontario",
    "yardyman services",
  ],
  alternates: {
    canonical: "https://yardyman.com/blog/lawn-care-services",
  },
  openGraph: {
    title: "Lawn Care & Snow Removal Services Near You in Ontario | Yardyman",
    description:
      "Connect with local providers for every outdoor service — lawn mowing, bush trimming, snow removal, and more — in Newmarket, Richmond Hill, Barrie, and across Ontario.",
    type: "article",
    publishedTime: "2025-05-19",
  },
};

const SERVICES = [
  {
    name: "Bush Trimming",
    slug: "bush-trimming",
    description:
      "Overgrown shrubs and hedges make a yard look neglected. A local bush trimming provider will shape and cut back your shrubs, hedges, and bushes so they look neat, healthy, and well-defined — boosting your home's curb appeal instantly.",
    tip: "Best done in late spring and early fall.",
  },
  {
    name: "Yard Clean Up",
    slug: "yard-clean-up",
    description:
      "After a long winter or a busy season, yards accumulate debris, dead leaves, fallen branches, and clutter. A yard clean-up service removes it all and leaves your outdoor space looking fresh and ready to enjoy.",
    tip: "Popular in spring and autumn across Ontario.",
  },
  {
    name: "Fertilization",
    slug: "fertilization",
    description:
      "A fertilized lawn grows thicker, greener, and more resistant to weeds and drought. Local providers apply the right nutrients at the right time so your grass thrives all season long without you lifting a finger.",
    tip: "Typically applied 2–4 times per growing season.",
  },
  {
    name: "Gardening",
    slug: "gardening",
    description:
      "Whether it's planting seasonal flowers, maintaining vegetable beds, or tidying up decorative landscaping, a local gardening provider keeps your garden looking its best throughout the season.",
    tip: "Great for homeowners who love a beautiful yard but don't have the time.",
  },
  {
    name: "Gutter Cleaning",
    slug: "gutter-cleaning",
    description:
      "Clogged gutters cause water damage, roof leaks, and foundation issues. A gutter cleaning provider clears leaves, dirt, and blockages from your gutters and downspouts — protecting your home before the next heavy rain.",
    tip: "Recommended every spring and fall in Ontario.",
  },
  {
    name: "Lawn Aeration",
    slug: "lawn-aeration",
    description:
      "If your lawn feels hard or looks thin, compacted soil may be to blame. Aeration perforates the soil with small holes so air, water, and nutrients can reach the roots — resulting in a thicker, healthier lawn.",
    tip: "Ideally done in early fall for cool-season grasses.",
  },
  {
    name: "Lawn Mowing",
    slug: "lawn-mowing",
    description:
      "Regular mowing keeps your lawn looking sharp and prevents overgrowth. Find a reliable local lawn mowing provider in Newmarket, Richmond Hill, Barrie, or your area to maintain a consistently well-kept yard all season.",
    tip: "Most Ontario homeowners mow every 1–2 weeks from May to October.",
  },
  {
    name: "Leaf Removal",
    slug: "leaf-removal",
    description:
      "Leaving fallen leaves on your lawn over winter can kill the grass underneath. A local leaf removal provider rakes or blows leaves off your lawn, driveway, and patio so your yard stays healthy through autumn.",
    tip: "Best done in October and November in most Ontario cities.",
  },
  {
    name: "Seeding",
    slug: "seeding",
    description:
      "Bare or thin patches in your lawn are an eyesore and invite weeds. A seeding provider spreads grass seed over problem areas to fill in the lawn and encourage even, lush growth.",
    tip: "Early fall is the best time to seed cool-season grass in Ontario.",
  },
  {
    name: "Snow Removal",
    slug: "snow-removal",
    description:
      "Ontario winters can be brutal. A local snow removal provider keeps your driveway, walkways, and entryways clear after every snowfall — so you can safely get in and out without doing it yourself.",
    tip: "Available in Newmarket, Richmond Hill, Barrie, and surrounding areas.",
  },
  {
    name: "Pre-Emergent Weed Control",
    slug: "pre-emergent-weed-control",
    description:
      "Stop weeds before they start. Pre-emergent treatments applied early in the season prevent weed seeds from germinating — saving you from a much bigger problem later in the summer.",
    tip: "Apply in early spring before soil temperatures rise above 10°C.",
  },
  {
    name: "Weed Control",
    slug: "weed-control",
    description:
      "Weeds compete with your grass for nutrients and water. A weed control provider removes existing weeds from your lawn and garden beds using targeted treatments, keeping your property looking clean and well-maintained.",
    tip: "Most effective when addressed early in the growing season.",
  },
];

const CITIES = [
  "Newmarket", "Richmond Hill", "Barrie", "Aurora", "Vaughan",
  "Markham", "King City", "Bradford", "Innisfil", "Keswick",
  "Georgina", "East Gwillimbury", "Stouffville", "Maple", "Woodbridge",
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Lawn Care & Snow Removal Services in Ontario",
  description:
    "A complete list of lawn care and snow removal services available through Yardyman in Ontario.",
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((svc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: svc.name,
    url: `https://yardyman.com/blog/lawn-care-services#${svc.slug}`,
    description: svc.description,
  })),
};

export default function LawnCareServicesPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <BlogPostLayout
        title="Lawn Care & Snow Removal Services Near You in Ontario"
        category="Services Guide"
        publishDate="May 19, 2025"
        readTime="4 min"
      >
        <P>
          Looking for a reliable local provider for lawn mowing, bush trimming,
          snow removal, or any other outdoor service? Yardyman connects
          homeowners across Ontario with vetted local providers who offer exactly
          what you need — at rates you negotiate directly, with no middleman
          taking a cut.
        </P>
        <P>
          Below is a complete guide to every service available through Yardyman,
          what each one involves, and why you might need it.
        </P>

        {/* Cities strip */}
        <div style={{
          background: "#f0fdf4", border: "1px solid #bbf7d0",
          borderRadius: 12, padding: "12px 16px", margin: "4px 0 28px",
        }}>
          <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 700, color: "#166534", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Serving communities across Ontario
          </p>
          <p style={{ margin: 0, fontSize: 13, color: "#15803d", lineHeight: 1.7 }}>
            {CITIES.join(" · ")}
          </p>
        </div>

        {/* One section per service — each h2 is crawlable by Google */}
        {SERVICES.map((svc) => (
          <div key={svc.slug} id={svc.slug} style={{ marginBottom: 32 }}>
            <h2 style={{
              fontSize: 20, fontWeight: 800, color: "#111827",
              margin: "0 0 8px", lineHeight: 1.3,
            }}>
              {svc.name} Near Me in Ontario
            </h2>
            <p style={{ margin: "0 0 8px", fontSize: 15, color: "#374151", lineHeight: 1.7 }}>
              {svc.description}
            </p>
            <p style={{
              margin: 0, fontSize: 13, color: "#22c55e", fontWeight: 600,
              background: "#f0fdf4", borderRadius: 8, padding: "6px 12px",
              display: "inline-block",
            }}>
              💡 {svc.tip}
            </p>
          </div>
        ))}

        {/* Find a provider CTA */}
        <div style={{
          marginTop: 8, marginBottom: 32,
          background: "#f0fdf4", border: "1px solid #bbf7d0",
          borderRadius: 16, padding: "24px 20px", textAlign: "center",
        }}>
          <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 17, color: "#111827" }}>
            Find a provider near you
          </p>
          <p style={{ margin: "0 0 18px", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
            Browse local providers on the Yardyman map and contact them directly
            — no commission, no booking fee.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block", background: "#22c55e", color: "#fff",
              fontWeight: 700, fontSize: 14, borderRadius: 999,
              padding: "11px 28px", textDecoration: "none",
            }}
          >
            Find Providers Near Me →
          </Link>
        </div>

        {/* Provider tip section */}
        <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#111827", margin: "0 0 12px" }}>
            Are You a Provider? Add These Services to Your Profile
          </h2>
          <P>
            If you offer any of the services above, make sure they&apos;re listed
            on your Yardyman profile so homeowners in your area can find you.
            The more specific your service list and description, the more calls
            you&apos;ll receive.
          </P>
          <Link
            href="/"
            style={{
              display: "inline-block", color: "#22c55e",
              fontWeight: 600, fontSize: 14, textDecoration: "none",
            }}
          >
            Set up your provider profile →
          </Link>
        </div>
      </BlogPostLayout>
    </>
  );
}
