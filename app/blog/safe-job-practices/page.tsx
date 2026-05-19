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
  title: "The Safe and Professional Way to Do Every Job: Call Before You Start | Yardyman Blog",
  description:
    "Discover the simple habit that every Yardyman provider should follow: always call the homeowner when you arrive before starting any work. Learn why it protects you, builds trust, and makes every job run smoother.",
  keywords: [
    "yardyman provider safety tips",
    "professional lawn care practices",
    "how to be a professional provider",
    "call homeowner before starting job",
    "safe job practices yard work",
    "yardyman best practices",
  ],
  openGraph: {
    title: "The Safe and Professional Way to Do Every Job: Call Before You Start",
    description:
      "One simple phone call when you arrive can protect you, impress the homeowner, and prevent misunderstandings on every job.",
    type: "article",
    publishedTime: "2025-05-06",
  },
};

export default function Post2() {
  return (
    <BlogPostLayout
      title="Always Call Before You Start: The Simple Habit That Makes Every Job Professional and Safe"
      category="Safety & Best Practices"
      publishDate="May 6, 2025"
      readTime="5 min"
    >
      <P>
        It takes 30 seconds. One phone call when you pull up to a property. And yet, this single habit separates the most trusted, most-booked providers on Yardyman from everyone else. It's not about the tools you use or how fast you work — it's about communication. And it starts the moment you arrive.
      </P>
      <P>
        In this post, we'll explain exactly why calling a homeowner when you arrive — before you touch anything — is the most professional and safest thing you can do as a provider.
      </P>

      <ImagePlaceholder label="Photo placeholder — upload an image of a provider calling a homeowner on arrival here" />

      <H2>Why Calling When You Arrive Is So Important</H2>
      <P>
        Think about it from the homeowner's perspective. They've hired someone they've never met to work on their property. They may be inside, at work, or watching through a window nervously. A quick call the moment you arrive changes everything:
      </P>
      <BulletList items={[
        "It confirms you showed up as scheduled — immediately building reliability",
        "It gives the homeowner a chance to walk the property with you before you start",
        "It ensures you're working on the right area and doing exactly what they want",
        "It prevents misunderstandings that could lead to complaints or disputes",
        "It starts the job on a warm, professional note that homeowners remember",
      ]} />
      <TipBox>
        Even if the homeowner said "just go ahead and start" when they booked — still call. A quick check-in when you arrive shows respect for their property and builds the kind of trust that earns five-star reviews and repeat bookings.
      </TipBox>

      <Divider />

      <H2>It Protects You Too</H2>
      <P>
        This habit isn't just about impressing the homeowner — it actively protects you as a provider. Here's how:
      </P>
      <H3>Avoid Doing Work That Wasn't Requested</H3>
      <P>
        Without a quick check-in, it's easy to mow an area the homeowner wanted left alone, trim a hedge they were planning to remove, or clear a path that was off-limits. These misunderstandings can create conflict and, in some cases, damage claims. A 30-second call eliminates that risk entirely.
      </P>
      <H3>Create a Clear Starting Point</H3>
      <P>
        When you call before starting, you establish a shared understanding of what the job includes. If a dispute ever arises about what was done or what was agreed upon, that arrival call is your reference point. You spoke to them. You confirmed the scope. You started only when everything was clear.
      </P>
      <H3>Document Any Pre-Existing Issues</H3>
      <P>
        During your arrival call — or immediately after — take note of any pre-existing damage on the property: a broken fence panel, a garden feature that's already cracked, or patches of lawn that were already dead before you arrived. If possible, take a quick photo on your phone. This protects you from being blamed for damage you didn't cause.
      </P>

      <Divider />

      <H2>What to Say in That Arrival Call</H2>
      <P>
        You don't need a script, but if you're not sure what to say, here's a simple approach that works every time:
      </P>
      <div style={{
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: "20px 22px",
        margin: "20px 0",
        fontStyle: "italic",
        fontSize: 15,
        color: "#374151",
        lineHeight: 1.8,
      }}>
        <strong style={{ fontStyle: "normal" }}>Example:</strong>
        <br />
        "Hi [Name], it's [Your Name] from Yardyman. I've just arrived at your property. I wanted to check in quickly before I start — is there anything specific you'd like me to focus on, or anything I should avoid? Sounds great, I'll get right to it and let you know when I'm done."
      </div>
      <P>
        That's it. Short, professional, and reassuring. Most calls take under a minute — and the impact lasts a long time.
      </P>

      <ImagePlaceholder label="Photo placeholder — upload an image of a provider reviewing the property with a homeowner here" />

      <H2>Always Let Them Know When You're Done</H2>
      <P>
        The arrival call is step one. The completion call — or a brief knock on the door — is step two. Before you leave, let the homeowner know the job is done and ask if they'd like to do a quick walk-through. This final check-in:
      </P>
      <BulletList items={[
        "Gives the homeowner a chance to flag anything before you drive away",
        "Shows pride in your work — you're not rushing off before they've seen the result",
        "Opens the door for immediate positive feedback and tips",
        "Reduces the chance of a negative review based on a minor issue that could have been fixed on the spot",
      ]} />
      <TipBox>
        Providers who do a completion walk-through with homeowners receive significantly more five-star reviews than those who simply finish and leave. It's one of the easiest ways to earn top ratings on Yardyman.
      </TipBox>

      <Divider />

      <H2>Building Trust One Job at a Time</H2>
      <P>
        The providers who build the strongest reputations on Yardyman aren't always the fastest or the cheapest. They're the ones who communicate clearly, show up reliably, and treat every homeowner with respect. A quick phone call when you arrive is a small act that signals all three of those things at once.
      </P>
      <P>
        Start making it a habit on your very next job. You'll notice the difference immediately — in how homeowners respond, in the reviews you receive, and in the bookings that follow.
      </P>
    </BlogPostLayout>
  );
}
