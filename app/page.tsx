import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { ArticleCard } from "@/components/public/ArticleCard";
import { MotionDiv, MotionSection } from "@/components/public/Motion";
import { PublicShell } from "@/components/public/PublicShell";
import { categories, posts } from "@/lib/content";

export default function Home() {
  const [heroPost] = posts;
  const latest = posts.slice(1);

  return (
    <PublicShell>
      <section className="premium-gradient relative overflow-hidden text-white">
        <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <MotionDiv initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c9a96a]">Premium Corporate Media</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl">
              The Corporate Corner
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Pakistan&apos;s premier platform for corporate stories, leadership, and business influence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/categories" className="inline-flex items-center justify-center gap-2 bg-[#eadfc8] px-6 py-4 font-semibold text-[#07111f]">
                Explore Insights <ArrowRight size={18} />
              </Link>
              <Link href="/get-featured" className="inline-flex items-center justify-center border border-[#c9a96a]/55 px-6 py-4 font-semibold text-[#eadfc8]">
                Get Featured
              </Link>
              <Link href="/submit-your-story" className="inline-flex items-center justify-center border border-white/18 px-6 py-4 font-semibold text-white">
                Submit Your Story
              </Link>
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="border border-white/12 bg-white/[0.06] p-4 backdrop-blur"
          >
            <ArticleCard post={heroPost} priority />
          </MotionDiv>
        </div>
      </section>

      <MotionSection initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6a34]">Featured Stories</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Selected for influence</h2>
          </div>
          <Link href="/categories" className="hidden items-center gap-2 text-sm font-semibold text-[#8a6a34] md:flex">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.filter((post) => post.isFeatured).map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
          <div className="border border-[#d8cfbd] bg-[#07111f] p-7 text-white">
            <Sparkles className="mb-8 text-[#c9a96a]" />
            <h3 className="text-2xl font-semibold">Editorially shaped, commercially aware.</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">
              We help meaningful corporate developments read with the clarity and restraint expected by senior audiences.
            </p>
          </div>
        </div>
      </MotionSection>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6a34]">Latest Insights</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latest.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6a34]">Coverage Categories</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">A focused editorial map.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.slug}`} className="border border-[#d8cfbd] bg-white p-6 transition hover:-translate-y-1 hover:border-[#c9a96a]">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b626f]">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-3 lg:px-8">
          {[
            ["Selective positioning", "Stories are shaped for decision makers, not casual scrolling."],
            ["Corporate credibility", "Tone, sourcing, and framing protect the seriousness of the institutions we cover."],
            ["Premium discovery", "Your milestones sit inside a publication built for attention and trust."],
          ].map(([title, copy]) => (
            <div key={title} className="border border-white/12 p-7">
              <CheckCircle2 className="mb-8 text-[#c9a96a]" />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="border border-[#d8cfbd] bg-white p-8">
          <ShieldCheck className="mb-8 text-[#8a6a34]" />
          <h2 className="text-3xl font-semibold">Editorial integrity</h2>
          <p className="mt-5 leading-8 text-[#5b626f]">
            The Corporate Corner maintains a clear distinction between editorial coverage, sponsored features,
            and submitted stories. Every piece is reviewed for relevance, clarity, and corporate substance.
          </p>
        </div>
        <div className="bg-[#c9a96a] p-8 text-[#07111f]">
          <h2 className="text-3xl font-semibold">Have a milestone worth documenting?</h2>
          <p className="mt-5 leading-8">
            Put your announcement, executive journey, event, or brand story in front of a premium business audience.
          </p>
          <Link href="/get-featured" className="mt-8 inline-flex items-center gap-2 bg-[#07111f] px-6 py-4 font-semibold text-white">
            Start the feature process <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PublicShell>
  );
}
