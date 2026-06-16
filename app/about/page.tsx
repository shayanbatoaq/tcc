import type { Metadata } from "next";
import { Award, BookOpenCheck, Building2, Compass, Eye, MessagesSquare, Newspaper, Target, UsersRound } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { MotionDiv, MotionSection } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Corporate Lens, its vision, mission, coverage areas, and editorial leadership.",
};

const coverage = [
  {
    title: "Corporate News",
    copy: "Company announcements, appointments, milestones, partnerships, and institution-level developments.",
    Icon: Newspaper,
  },
  {
    title: "Leadership Voices",
    copy: "Interviews and profiles centered on CEOs, founders, executives, entrepreneurs, and sector leaders.",
    Icon: UsersRound,
  },
  {
    title: "Business Reputation",
    copy: "Stories that connect public perception, communication choices, and long-term institutional trust.",
    Icon: MessagesSquare,
  },
  {
    title: "Sector Movement",
    copy: "Developments across finance, industry, technology, real estate, education, health, and impact sectors.",
    Icon: Building2,
  },
];

const team = [
  {
    name: "Haroon Khalid",
    role: "Veteran Journalist and Editorial Leader",
    description:
      "Veteran journalist and editorial leader with experience across Dawn, Tribune 24/7 and Indus News.",
    Icon: Award,
  },
  {
    name: "Sabeehul-Wara Fasihi",
    role: "Experienced Newsroom Leader",
    description:
      "Experienced newsroom leader with expertise across Geo News, ARY News, Express News, Bol Network and News One.",
    Icon: BookOpenCheck,
  },
  {
    name: "Tariq Habib",
    role: "Corporate Communications Strategist",
    description:
      "Corporate communications strategist with 20+ years of experience spanning media, academia, corporate and non-profit sectors.",
    Icon: MessagesSquare,
  },
];

export default function AboutPage() {
  return (
    <>
      <MotionSection
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-line bg-brand-navy py-16 text-white sm:py-24"
      >
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            <p className="font-brand text-base font-bold uppercase text-brand-gold">About the platform</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.02] sm:text-6xl">About The Corporate Lens</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-white/72">
              A premium corporate media and storytelling platform built to document the people, decisions, and
              developments shaping Pakistan&apos;s business landscape.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            whileHover={{ y: -4 }}
            className="rounded-sm border border-brand-gold bg-brand-gold p-6 text-brand-navy"
          >
            <p className="font-brand text-xl font-bold leading-tight sm:text-2xl">Beyond the Headlines</p>
            <p className="mt-4 text-lg leading-7">
              Editorial credibility for companies, leaders, and institutions with stories that matter.
            </p>
          </MotionDiv>
        </div>
      </MotionSection>

      <MotionSection
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="section-shell py-16 sm:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            eyebrow="Who we are"
            title="A sharper lens on corporate Pakistan."
            copy="The Corporate Lens exists for leaders, institutions, and readers who value context. We combine newsroom discipline with corporate storytelling to make business developments clearer and more credible."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              title="Vision"
              copy="To become a trusted editorial platform for Pakistan's corporate landscape, where meaningful business stories are presented with clarity, credibility, and influence."
              Icon={Eye}
              index={0}
            />
            <FeatureCard
              title="Mission"
              copy="To spotlight companies, leaders, decisions, and developments through premium journalism, executive storytelling, and thoughtful business analysis."
              Icon={Target}
              index={1}
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="border-y border-line bg-paper py-16 sm:py-24"
      >
        <div className="section-shell">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <SectionHeader
              eyebrow="What we cover"
              title="Business coverage with editorial board credibility."
              copy="The platform focuses on corporate narratives that benefit from context, responsible framing, and polished presentation."
            />
            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="rounded-sm border-l-4 border-brand-gold bg-white p-6 text-xl leading-8 text-ink-muted"
            >
              We cover stories that sit at the intersection of business decisions, public trust, leadership visibility,
              and institutional reputation.
            </MotionDiv>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coverage.map((item, index) => (
              <FeatureCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="section-shell py-16 sm:py-24"
      >
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Editorial Board / Team"
            title="Seasoned media and communications leadership."
            copy="The Corporate Lens is guided by professionals who understand journalism, newsroom leadership, and strategic corporate communication."
          />
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="flex items-start gap-4 rounded-sm border border-brand-navy bg-brand-gold p-6 text-brand-navy"
          >
            <Compass aria-hidden className="mt-1 shrink-0" size={28} />
            <p className="text-xl leading-8">
              The team brings editorial judgment, media fluency, and corporate communications experience to every story.
            </p>
          </MotionDiv>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamCard key={member.name} {...member} index={index} />
          ))}
        </div>
      </MotionSection>

      <CTASection
        tone="gold"
        eyebrow="Work with us"
        title="Bring your leadership story into sharper focus."
        copy="Speak with The Corporate Lens about executive interviews, corporate features, and editorial collaborations."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/"
        secondaryLabel="Back Home"
      />
    </>
  );
}
