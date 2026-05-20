import type { Author, Category, Post, Submission } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "corporate-news",
    name: "Corporate News",
    slug: "corporate-news",
    description: "Market-moving announcements, boardroom decisions, and corporate milestones from Pakistan's enterprise landscape.",
  },
  {
    id: "executive-interviews",
    name: "Executive Interviews",
    slug: "executive-interviews",
    description: "Measured conversations with founders, CEOs, directors, and functional leaders shaping business influence.",
  },
  {
    id: "insights-analysis",
    name: "Insights & Analysis",
    slug: "insights-analysis",
    description: "Context-rich analysis on strategy, reputation, governance, transformation, and emerging business signals.",
  },
  {
    id: "brand-stories",
    name: "Brand Stories",
    slug: "brand-stories",
    description: "Selective storytelling for brands with substance, momentum, and a credible point of view.",
  },
  {
    id: "events-happenings",
    name: "Events & Happenings",
    slug: "events-happenings",
    description: "Executive forums, launches, ceremonies, partnerships, and industry gatherings worth documenting.",
  },
];

export const authors: Author[] = [
  {
    id: "ayesha-khan",
    name: "Ayesha Khan",
    role: "Editorial Director",
    bio: "Ayesha leads editorial strategy across leadership, reputation, and corporate narrative in Pakistan.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    socialLinks: ["https://linkedin.com"],
  },
  {
    id: "saad-mir",
    name: "Saad Mir",
    role: "Business Features Editor",
    bio: "Saad covers executive journeys, enterprise transformation, and brand-led business growth.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    socialLinks: ["https://linkedin.com"],
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Inside the New Discipline of Corporate Storytelling",
    slug: "inside-the-new-discipline-of-corporate-storytelling",
    subtitle: "Why Pakistani organizations are investing in narrative clarity as a strategic business asset.",
    excerpt: "As competition moves beyond product and price, corporate storytelling is becoming a board-level reputation discipline.",
    content:
      "<p>Pakistan's business ecosystem is entering a more deliberate era of communication. Large organizations are recognizing that milestones, leadership transitions, and transformation programs need context, not just announcements.</p><p>The most credible corporate stories are not ornamental. They explain strategy, signal governance, and help stakeholders understand why a business is moving in a particular direction.</p><h2>From publicity to influence</h2><p>Premium storytelling connects operational substance with public confidence. It turns launches, partnerships, and executive journeys into durable institutional memory.</p>",
    coverImageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    categoryId: "insights-analysis",
    authorId: "ayesha-khan",
    status: "published",
    isFeatured: true,
    readingTime: 5,
    tags: ["strategy", "reputation", "leadership"],
    publishedAt: "2026-05-12T09:00:00.000Z",
    createdAt: "2026-05-10T09:00:00.000Z",
    updatedAt: "2026-05-12T09:00:00.000Z",
  },
  {
    id: "2",
    title: "Executive Interview: Building Trust at Scale",
    slug: "executive-interview-building-trust-at-scale",
    subtitle: "A leadership conversation on culture, customer confidence, and the next chapter of responsible growth.",
    excerpt: "A senior executive reflects on how trust is built through consistency, transparency, and disciplined execution.",
    content:
      "<p>Trust is not a campaign. It is a management system built into hiring, service design, governance, and the way teams respond under pressure.</p><p>For fast-growing companies, the challenge is to preserve founder-level care while building institutional processes that can scale.</p>",
    coverImageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
    categoryId: "executive-interviews",
    authorId: "saad-mir",
    status: "published",
    isFeatured: true,
    readingTime: 7,
    tags: ["interview", "trust", "culture"],
    publishedAt: "2026-05-08T10:30:00.000Z",
    createdAt: "2026-05-07T10:30:00.000Z",
    updatedAt: "2026-05-08T10:30:00.000Z",
  },
  {
    id: "3",
    title: "A National Brand Marks Its Expansion Milestone",
    slug: "national-brand-expansion-milestone",
    subtitle: "The expansion signals renewed confidence in consumer demand and operational resilience.",
    excerpt: "A major Pakistani brand expands its footprint while reinforcing service consistency across new markets.",
    content:
      "<p>Expansion stories matter when they reveal more than scale. They show how organizations interpret demand, invest in talent, and create repeatable experiences across markets.</p>",
    coverImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
    categoryId: "brand-stories",
    authorId: "ayesha-khan",
    status: "published",
    isFeatured: false,
    readingTime: 4,
    tags: ["brand", "growth", "markets"],
    publishedAt: "2026-05-04T08:00:00.000Z",
    createdAt: "2026-05-03T08:00:00.000Z",
    updatedAt: "2026-05-04T08:00:00.000Z",
  },
  {
    id: "4",
    title: "Corporate Leaders Convene for Strategy Forum",
    slug: "corporate-leaders-convene-for-strategy-forum",
    subtitle: "The closed-door event focused on resilience, talent, and digital operating models.",
    excerpt: "Executives across banking, telecom, retail, and technology gathered to discuss the next business cycle.",
    content:
      "<p>Industry forums create value when they move beyond ceremony into shared learning. This gathering placed emphasis on practical transformation, future talent, and the operating discipline needed for volatile markets.</p>",
    coverImageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85",
    categoryId: "events-happenings",
    authorId: "saad-mir",
    status: "published",
    isFeatured: false,
    readingTime: 3,
    tags: ["events", "strategy", "leadership"],
    publishedAt: "2026-04-29T12:00:00.000Z",
    createdAt: "2026-04-29T12:00:00.000Z",
    updatedAt: "2026-04-29T12:00:00.000Z",
  },
];

export const submissions: Submission[] = [
  {
    id: "sub-1",
    name: "Hira Ahmed",
    company: "Meridian Foods",
    designation: "Head of Corporate Communications",
    email: "hira@example.com",
    phone: "+92 300 0000000",
    storyType: "Brand milestone",
    storySummary: "A nationwide distribution expansion with new sustainability commitments.",
    supportingLinks: "https://example.com/press",
    mediaUrls: [],
    status: "pending",
    createdAt: "2026-05-18T11:00:00.000Z",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getAuthor(id: string) {
  return authors.find((author) => author.id === id) ?? authors[0];
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(slug: string) {
  return posts.filter((post) => post.categoryId === slug && post.status === "published");
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
