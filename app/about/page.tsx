import { PageHero } from "@/components/public/PageHero";
import { PublicShell } from "@/components/public/PublicShell";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PublicShell>
      <PageHero
        eyebrow="About"
        title="A premium editorial platform for Pakistan's corporate ecosystem."
        copy="The Corporate Corner documents the stories, leaders, announcements, and institutional progress that shape business influence."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <h2 className="text-3xl font-semibold md:text-5xl">Not a casual blog. Not a noisy feed.</h2>
        <div className="space-y-6 text-lg leading-9 text-[#4f5866]">
          <p>
            We cover corporate news, executive interviews, insights, brand stories, events, and organizational milestones with
            a selective editorial lens.
          </p>
          <p>
            Our purpose is to give Pakistan&apos;s serious businesses a polished platform where their work is framed with context,
            restraint, and credibility.
          </p>
        </div>
      </section>
    </PublicShell>
  );
}
