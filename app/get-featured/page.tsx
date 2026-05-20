import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { PublicShell } from "@/components/public/PublicShell";

export const metadata = { title: "Get Featured" };

export default function GetFeaturedPage() {
  return (
    <PublicShell>
      <PageHero
        eyebrow="Get Featured"
        title="Place your corporate milestone inside a premium editorial environment."
        copy="For executive interviews, brand stories, launch coverage, event recaps, and strategic announcements."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-3 lg:px-8">
        {["Editorial discovery", "Story architecture", "Premium publication"].map((title) => (
          <div key={title} className="border border-[#d8cfbd] bg-white p-7">
            <CheckCircle2 className="mb-8 text-[#8a6a34]" />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-7 text-[#5b626f]">
              Our team reviews relevance, gathers context, and shapes the piece for a polished business audience.
            </p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-20">
        <Link href="/submit-your-story" className="flex items-center justify-between bg-[#07111f] p-7 text-white">
          <span className="text-2xl font-semibold">Start with a story submission</span>
          <ArrowRight />
        </Link>
      </section>
    </PublicShell>
  );
}
