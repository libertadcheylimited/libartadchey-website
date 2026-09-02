/**
 * Static Insights content stub.
 *
 * CMS note: Swap this module for Sanity (or similar) later.
 * Keep `InsightPost` as the contract so listing/detail components stay stable.
 * Fields map roughly to: title, slug, excerpt, category, author, publishedAt,
 * readingMinutes, featured, body (Portable Text → string[] or rich blocks).
 */

export const insightCategories = [
  "Process Audits",
  "Risk Strategy",
  "Compliance",
  "SOPs",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  author: string;
  /** ISO date string */
  publishedAt: string;
  readingMinutes: number;
  featured?: boolean;
  /** Plain paragraphs for long-form sample copy. Replace with CMS rich text. */
  body: string[];
  /** Marks placeholder content the client will replace post-launch. */
  isSample: true;
};

const AUTHOR = "Uchechukwu Maduka";

/**
 * Sample posts only. Tone matches boutique audit/risk voice;
 * titles and body are clearly draft-quality for client rewrite.
 */
export const insightPosts: InsightPost[] = [
  {
    slug: "risk-as-architecture-not-checklist",
    title: "Risk as architecture, not a checklist",
    excerpt:
      "When risk work is a quarterly form exercise, gaps hide in how work actually gets done. Treat controls as structure you can walk through with the people who run the process.",
    category: "Risk Strategy",
    author: AUTHOR,
    publishedAt: "2025-11-12",
    readingMinutes: 8,
    featured: true,
    isSample: true,
    body: [
      "Sample article. This draft stands in until Libertad Chey publishes live insights. Keep the structure; rewrite every paragraph with client voice and cases.",
      "Most organisations do not fail risk reviews because they lack a policy binder. They fail because the binder never meets the Tuesday afternoon when a payment exception, a vendor shortcut, or a well-meaning workaround becomes normal.",
      "An architectural view of risk asks different questions. Who can change a control? What evidence proves it still works? Where does judgement live when the SOP runs out? Those answers belong in process design, not in a slide titled residual risk.",
      "Start with one high-stakes workflow. Map the handoffs, the systems of record, and the moments a person can override the system. Then decide which overrides are intentional, which are silent, and which should never happen without a second pair of eyes.",
      "Boutique advisory work earns trust by staying close to that map. The goal is not a longer checklist. It is a clearer path from risk appetite to the controls people can actually run.",
    ],
  },
  {
    slug: "finding-friction-before-the-numbers",
    title: "Finding friction before the numbers tell you",
    excerpt:
      "Process audits surface where work stalls, duplicates, or depends on heroics. Catch the friction early and the financial story usually improves with less drama.",
    category: "Process Audits",
    author: AUTHOR,
    publishedAt: "2025-10-03",
    readingMinutes: 6,
    isSample: true,
    body: [
      "Sample article. Replace with a real field note from a process review once content is ready.",
      "By the time a variance shows up in the accounts, the underlying friction has often been living in the process for months. People know the workaround. Spreadsheets fill gaps the system never did. Nobody wrote it down because it felt temporary.",
      "A process audit that only samples transactions will miss that texture. Walk the flow with the operators. Ask what breaks when a key person is away. Ask which steps exist only because a prior control failed upstream.",
      "Root-cause work is quieter than a fire drill. It looks like clarifying ownership, closing a loop between teams, and retiring a shadow process that somehow became the real one.",
      "If you are deciding whether to open a review, start with the workflow that keeps leadership awake. Numbers will follow once the friction is named.",
    ],
  },
  {
    slug: "compliance-without-the-theatre",
    title: "Compliance without the theatre",
    excerpt:
      "Policies that exist for the file cabinet create a false sense of safety. Useful compliance is readable, owned, and tested against how the organisation actually operates.",
    category: "Compliance",
    author: AUTHOR,
    publishedAt: "2025-09-18",
    readingMinutes: 7,
    isSample: true,
    body: [
      "Sample article. Client rewrite should ground this in Nigerian and cross-border contexts as needed.",
      "Theatre looks like a thick policy set that nobody opens, training that ticks a box, and an annual sign-off that never changes behaviour. It can look impressive from a distance. Up close, it leaves the same gaps.",
      "Practical compliance starts with fewer documents and clearer owners. Each control should answer: what risk it addresses, who runs it, what evidence it produces, and how often someone checks that evidence.",
      "When regulations shift, update the operating model first. Then update the policy so it describes reality, not aspiration. That order keeps teams honest and auditors less surprised.",
      "Founder-led reviews help because the conversation can stay concrete. Bring the policy to the process, not the other way around.",
    ],
  },
  {
    slug: "sop-discipline-for-growing-teams",
    title: "SOP discipline for teams that are growing fast",
    excerpt:
      "Standard operating procedures should shorten onboarding and reduce silent variation, not freeze a company in place. Write them for the people who will use them on a busy day.",
    category: "SOPs",
    author: AUTHOR,
    publishedAt: "2025-08-21",
    readingMinutes: 5,
    isSample: true,
    body: [
      "Sample article. Swap for a practical SOP guide drawn from client delivery.",
      "Growing teams inherit tribal knowledge. That knowledge works until someone leaves, a volume spike arrives, or a new office tries to copy the Lagos rhythm without the same unwritten rules.",
      "Good SOPs are short, current, and tied to a named owner. They show the happy path and the approved exceptions. They avoid jargon that only the author understands.",
      "Review cadence matters as much as the first draft. A quarterly pass with the people who run the process beats an annual rewrite by a committee that no longer touches the work.",
      "If you need a starting point, pick one revenue-critical or cash-critical flow and document it end to end. Then expand. Coverage without clarity is just more paper.",
    ],
  },
];

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return insightPosts.find((post) => post.slug === slug);
}

export function getFeaturedInsight(): InsightPost {
  return insightPosts.find((post) => post.featured) ?? insightPosts[0];
}

export function getInsightsByCategory(
  category: InsightCategory | "all",
): InsightPost[] {
  if (category === "all") return insightPosts;
  return insightPosts.filter((post) => post.category === category);
}

export function formatInsightDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}
