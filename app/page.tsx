import {
  BookOpenText,
  BriefcaseBusiness,
  CalendarDays,
  Eye,
  Newspaper,
  PenLine,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroSection } from "@/components/HeroSection";
import { MotionDiv, MotionSection } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";

const features = [
  {
    title: "Corporate News",
    copy: "Fast, credible updates on companies, institutions, appointments, partnerships, and market-facing decisions.",
    Icon: Newspaper,
  },
  {
    title: "Executive Interviews",
    copy: "Boardroom conversations with founders, CEOs, directors, and decision-makers shaping business direction.",
    Icon: UsersRound,
  },
  {
    title: "Articles & Analysis",
    copy: "Editorially framed perspective on corporate strategy, reputation, sectors, leadership, and public trust.",
    Icon: BookOpenText,
  },
  {
    title: "Events & Happenings",
    copy: "Coverage of launches, forums, conferences, ceremonies, and high-value corporate gatherings.",
    Icon: CalendarDays,
  },
  {
    title: "Business Updates",
    copy: "Concise intelligence on announcements, growth moves, industry shifts, and organizational milestones.",
    Icon: TrendingUp,
  },
  {
    title: "Leadership Stories",
    copy: "Premium profiles that reveal the judgement, ambition, and human choices behind corporate progress.",
    Icon: PenLine,
  },
];

const credibility = [
  {
    title: "Newsroom Judgment",
    copy: "Seasoned journalists bring editorial discipline, story selection, and context-led framing to every feature.",
    Icon: ShieldCheck,
  },
  {
    title: "Corporate Context",
    copy: "Media professionals translate business developments into narratives leaders, stakeholders, and readers can trust.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Public Relevance",
    copy: "Coverage is shaped for clarity, credibility, and the bigger picture behind the announcement.",
    Icon: Eye,
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <MotionSection
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="section-shell py-16 sm:py-24"
      >
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
          <SectionHeader
            eyebrow="What we cover"
            title="A corporate media platform built for fast scanning and serious depth."
            copy="From breaking business updates to leadership profiles, The Corporate Lens gives corporate stories the structure, polish, and editorial confidence they deserve."
          />
          <div className="rounded-sm border-l-4 border-brand-gold bg-paper p-6 text-xl leading-8 text-brand-navy">
            Designed for CEOs, founders, communications leaders, investors, and readers who want substance beyond the press release.
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </MotionSection>

      <MotionSection
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="bg-brand-navy py-16 text-white sm:py-24"
      >
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeader
              eyebrow="Editorial credibility"
              title="Guided by journalists and media professionals who understand consequence."
              copy="The platform is shaped by experienced newsroom leaders, editors, and corporate communication specialists who know how stories move through public attention."
              dark
            />
            <div className="grid gap-5 md:grid-cols-3">
              {credibility.map((item, index) => (
                <FeatureCard key={item.title} {...item} index={index} dark />
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="lens-grid border-y border-line bg-white py-16 sm:py-24"
      >
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.32 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-sm border border-brand-navy bg-brand-gold p-8 text-brand-navy shadow-[12px_12px_0_#0F1C2A]"
          >
            <p className="font-brand text-base font-bold uppercase">Get featured</p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.06] sm:text-5xl">Position Your Story Where It Matters</h2>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.32 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <p className="text-2xl leading-9 text-brand-navy">
              When a company has a meaningful development, leadership milestone, or strategic message, it needs a platform
              that can hold the story with credibility.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Visibility", "Context", "Credibility"].map((item, index) => (
                <MotionDiv
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: 0.12 + index * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="rounded-sm border border-line bg-white p-5 font-brand text-lg font-bold text-brand-navy"
                >
                  {item}
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      <CTASection
        eyebrow="Ready for the lens"
        title="Put your corporate story in front of a more discerning audience."
        copy="Talk to The Corporate Lens about profiles, features, interviews, editorial collaborations, and business updates."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/about"
        secondaryLabel="About the Platform"
      />

      <CTASection
        tone="white"
        eyebrow="Closing note"
        title="Beyond the headline is where reputation is built."
        copy="We help corporate stories become clearer, more credible, and more memorable."
        primaryHref="/contact"
        primaryLabel="Start an Inquiry"
        secondaryHref="/about"
        secondaryLabel="Meet the Team"
      />
    </>
  );
}
