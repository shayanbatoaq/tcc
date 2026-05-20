import Link from "next/link";
import { PageHero } from "@/components/public/PageHero";
import { PublicShell } from "@/components/public/PublicShell";
import { categories } from "@/lib/content";

export const metadata = { title: "Categories" };

export default function CategoriesPage() {
  return (
    <PublicShell>
      <PageHero eyebrow="Categories" title="Coverage built for business significance." copy="Explore the editorial verticals that define The Corporate Corner." />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-20 md:grid-cols-2 lg:px-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`} className="border border-[#d8cfbd] bg-white p-7 transition hover:-translate-y-1 hover:border-[#c9a96a]">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8a6a34]">Editorial vertical</p>
            <h2 className="mt-4 text-2xl font-semibold">{category.name}</h2>
            <p className="mt-4 leading-7 text-[#5b626f]">{category.description}</p>
          </Link>
        ))}
      </section>
    </PublicShell>
  );
}
