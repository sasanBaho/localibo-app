import { Metadata } from "next";
import {
  BlogPostLayout,
  ImagePlaceholder,
  H2,
  H3,
  P,
  TipBox,
  BulletList,
  Divider,
} from "@/components/blog/BlogPostLayout";

export const metadata: Metadata = {
  title: "How to Catch Homeowners' Attention: Build a Profile That Gets You More Calls | Yardyman Blog",
  description:
    "Learn how to create a standout Yardyman provider profile with a professional photo, detailed service description, clear service area, and transparent pricing to get more calls from homeowners.",
  keywords: [
    "yardyman provider tips",
    "lawn care provider profile",
    "how to get more clients lawn care",
    "provider profile optimization",
    "attract homeowners yardyman",
    "snow removal provider tips",
  ],
  openGraph: {
    title: "How to Catch Homeowners' Attention: Build a Profile That Gets You More Calls",
    description:
      "Your profile is your first impression. Follow these tips to create a Yardyman provider profile that earns trust and gets the phone ringing.",
    type: "article",
    publishedTime: "2025-05-06",
  },
};

export default function Post1() {
  return (
    <BlogPostLayout
      title="How to Catch Homeowners' Attention: Build a Profile That Gets You More Calls"
      category="Provider Tips"
      publishDate="May 6, 2025"
      readTime="6 min"
    >
      <P>
        On Yardyman, homeowners browse dozens of provider profiles before deciding who to call. Most of them make up their mind within seconds — based entirely on what your profile looks like. Your profile is your storefront. If it looks professional and trustworthy, your phone will ring. If it looks unfinished or vague, homeowners will scroll right past you.
      </P>
      <P>
        The good news? You don't need a marketing degree to stand out. You just need to fill your profile the right way. Here's exactly how to do it.
      </P>

      <ImagePlaceholder label="Photo placeholder — upload a professional profile photo example here" />

      <H2>1. Your Profile Photo: The First Thing Homeowners See</H2>
      <P>
        Your profile photo is the single most powerful part of your listing. Before a homeowner reads a single word you've written, they've already made a judgment based on your picture. A great photo builds instant trust. A bad one — or worse, no photo at all — loses the lead before you ever get a chance.
      </P>
      <H3>What makes a great profile photo?</H3>
      <BulletList items={[
        <><strong>Use a real photo of yourself.</strong> Not a logo, not a stock image, not a picture of your truck. Homeowners are inviting someone onto their property — they want to see a real face.</>,
        <><strong>Smile and look approachable.</strong> A warm, confident smile signals friendliness and professionalism. You don't need a studio shoot — a well-lit selfie outdoors works perfectly.</>,
        <><strong>Good lighting matters.</strong> Take the photo during the day, near a window or outside. Avoid dark or blurry shots.</>,
        <><strong>Dress the part.</strong> If you have a work shirt or jacket with your name or logo, wear it. It signals you take your work seriously.</>,
        <><strong>Keep the background clean.</strong> A plain wall, your truck, or a tidy yard works well. Avoid cluttered or distracting backgrounds.</>,
      ]} />
      <TipBox>
        Update your photo at the start of each season. A fresh, current photo keeps your profile feeling active and current to homeowners browsing the app.
      </TipBox>

      <Divider />

      <H2>2. Write a Description That Actually Sells Your Service</H2>
      <P>
        Your service description is where homeowners decide whether to call you or someone else. Most providers write two generic sentences and wonder why they're not getting calls. The providers who win are the ones who take the time to be specific and personal.
      </P>
      <H3>How to write a great description:</H3>
      <BulletList items={[
        <><strong>Start with your experience.</strong> How many years have you been doing this? Have you worked on hundreds of properties? Say so. Experience reassures homeowners.</>,
        <><strong>Be specific about what you do.</strong> Don't just say "I do lawn care." Say: "I offer weekly lawn mowing, edging, trimming, leaf blowing, and seasonal cleanups." The more specific you are, the better you match with homeowners who need exactly what you offer.</>,
        <><strong>Mention your equipment.</strong> If you own professional-grade tools, say it. Homeowners appreciate knowing they're hiring someone who is fully equipped.</>,
        <><strong>Share what makes you different.</strong> Do you always clean up after the job? Do you check in with the homeowner before leaving? These small things matter — mention them.</>,
        <><strong>Keep it friendly and human.</strong> Write the way you'd introduce yourself to a neighbor, not like a legal document. A warm, personal tone builds connection.</>,
      ]} />
      <TipBox>
        Aim for at least 3–4 sentences. Profiles with detailed descriptions consistently get 2–3 times more views than profiles with short or missing descriptions.
      </TipBox>

      <Divider />

      <H2>3. Be Clear About the Areas You Cover</H2>
      <P>
        Homeowners want to know right away whether you work in their neighborhood. Your location on Yardyman automatically places you on the map, but your description can reinforce this by mentioning the specific towns, neighborhoods, or areas you serve.
      </P>
      <P>
        This also helps you filter out calls that aren't worth your time. If you clearly state that you work within a 15-km radius of downtown, homeowners far outside that area will know to look elsewhere — saving both of you time.
      </P>
      <BulletList items={[
        "Name the cities or towns you regularly serve",
        "Mention any areas you're willing to travel to for the right job",
        "If you have a maximum distance, say so clearly",
      ]} />

      <ImagePlaceholder label="Photo placeholder — upload an image showing a provider working in a neighborhood here" />

      <Divider />

      <H2>4. Price Transparency Builds Trust</H2>
      <P>
        One of the biggest reasons homeowners don't call is uncertainty about price. If they have no idea what you charge, many will simply move on to someone else rather than risk an awkward conversation.
      </P>
      <P>
        You don't need to post a fixed price list — in fact, most jobs vary by property size. But giving homeowners a <strong>rough starting price</strong> or a clear indication of how you price your work goes a long way toward getting that first call.
      </P>
      <H3>Ways to communicate pricing in your profile:</H3>
      <BulletList items={[
        <><strong>Mention your typical starting rate.</strong> For example: "Lawn mowing starts at $40 for a standard-size property."</>,
        <><strong>Explain how you quote.</strong> Do you do a free on-site assessment? Do you quote over the phone? Let them know.</>,
        <><strong>Be honest about variables.</strong> Mention that price varies based on property size, grass height, or seasonal conditions — homeowners appreciate the honesty.</>,
      ]} />
      <TipBox>
        Homeowners who see a price range in your profile are significantly more likely to contact you. Transparency reduces hesitation.
      </TipBox>

      <Divider />

      <H2>Profile Checklist: Before You Publish</H2>
      <BulletList items={[
        "Professional, friendly photo of your face ✓",
        "Detailed description with specific services ✓",
        "Equipment and tools mentioned ✓",
        "Service area / neighborhoods covered ✓",
        "Pricing information or starting rate ✓",
        "Warm, personal tone throughout ✓",
      ]} />
      <P>
        A great profile doesn't happen overnight, but every improvement you make puts you ahead of providers who don't bother. Take an hour today to review your profile against this checklist — the calls you get in return will be worth every minute.
      </P>
    </BlogPostLayout>
  );
}
