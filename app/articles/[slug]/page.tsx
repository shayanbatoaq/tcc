import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Link2, Mail, MessageCircle, Share2 } from "lucide-react";
import { ArticleCard } from "@/components/public/ArticleCard";
import { PublicShell } from "@/components/public/PublicShell";
import { categories, formatDate, getAuthor, getPost, posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post?.title ?? "Article",
    description: post?.excerpt,
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      images: post ? [post.coverImageUrl] : [],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const author = getAuthor(post.authorId);
  const category = categories.find((item) => item.id === post.categoryId);
  const related = posts.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <PublicShell>
      <article>
        <header className="premium-gradient text-white">
          <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c9a96a]">{category?.name}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-white/70">{post.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/62">
              <span>{author.name}</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </header>
        <div className="relative mx-auto -mt-10 aspect-[16/8] max-w-6xl overflow-hidden border border-[#d8cfbd] bg-[#07111f]">
          <Image src={post.coverImageUrl} alt={post.title} fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[140px_1fr] lg:px-8">
          <aside className="flex gap-2 lg:flex-col">
            {[Share2, MessageCircle, Link2, Mail].map((Icon, index) => (
              <button key={index} className="grid size-11 place-items-center border border-[#d8cfbd] bg-white text-[#07111f]" title="Share article">
                <Icon size={17} />
              </button>
            ))}
          </aside>
          <div>
            <div className="editorial-prose max-w-3xl" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="mt-12 bg-[#07111f] p-8 text-white">
              <h2 className="text-2xl font-semibold">Tell a story with corporate weight.</h2>
              <p className="mt-3 text-white/66">Feature your executive journey, milestone, launch, or leadership perspective.</p>
              <Link href="/get-featured" className="mt-6 inline-block bg-[#c9a96a] px-5 py-3 font-semibold text-[#07111f]">
                Get Featured
              </Link>
            </div>
          </div>
        </div>
      </article>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <h2 className="mb-6 text-3xl font-semibold">Related articles</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <ArticleCard key={item.id} post={item} />
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
