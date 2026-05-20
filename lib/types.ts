export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: string[];
};

export type PostStatus =
  | "draft"
  | "pending_review"
  | "published"
  | "scheduled"
  | "archived";

export type Post = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  categoryId: string;
  authorId: string;
  status: PostStatus;
  isFeatured: boolean;
  readingTime: number;
  tags: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type Submission = {
  id: string;
  name: string;
  company: string;
  designation: string;
  email: string;
  phone: string;
  storyType: string;
  storySummary: string;
  supportingLinks: string;
  mediaUrls: string[];
  status: "pending" | "approved" | "rejected" | "converted";
  createdAt: string;
};
