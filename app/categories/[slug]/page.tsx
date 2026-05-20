import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/public/ArticleCard";
import { PageHero } from "@/components/public/PageHero";
import { PublicShell } from "@/components/public/PublicShell";
import { categories, getCategory, getPostsByCategory } from "@/lib/content";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  return { title: category?.name ?? "Category" };
}

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const categoryPosts = getPostsByCategory(slug);

  return (
    <PublicShell>
      <PageHero eyebrow="Category" title={category.name} copy={category.description} />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-3 lg:px-8">
        {categoryPosts.length ? (
          categoryPosts.map((post) => <ArticleCard key={post.id} post={post} />)
        ) : (
          <div className="border border-[#d8cfbd] bg-white p-8 md:col-span-3">
            New editorial pieces in this category are being prepared.
          </div>
        )}
      </section>
    </PublicShell>
  );
}
