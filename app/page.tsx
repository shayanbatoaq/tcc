import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Eye,
  MessagesSquare,
  PenLine,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "@/components/Button";
import { MotionSection } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { ValueCard } from "@/components/ValueCard";

const features = [
  {
    title: "Corporate Storytelling",
    copy: "Narratives shaped around leadership, institutions, reputation, and business impact.",
    Icon: PenLine,
  },
  {
    title: "Editorial Experience",
    copy: "Newsroom standards applied to every profile, feature, and strategic message.",
    Icon: BookOpenText,
  },
  {
    title: "Strategic Communication",
    copy: "Clear positioning for organizations that need credible visibility.",
    Icon: MessagesSquare,
  },
];

const values = [
  {
    title: "Credibility",
    copy: "Measured editorial judgment, fact-led framing, and a respect for professional standards.",
    Icon: ShieldCheck,
  },
  {
    title: "Clarity",
    copy: "Complex business developments translated into polished, accessible narratives.",
    Icon: Eye,
  },
  {
    title: "Corporate Perspective",
    copy: "Coverage shaped around institutions, leadership decisions, and market perception.",
    Icon: Target,
  },
];

export default function Home() {
  return (
    <>
      <section className="editorial-grid border-b border-line bg-white">
        <div className="section-shell grid min-h-[calc(100vh-82px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="font-brand text-xs font-bold uppercase tracking-[0.28em] text-brand-navy/70">
              The Corporate Lens
            </p>
            <h1 className="font-brand mt-5 max-w-4xl text-5xl font-bold leading-[1.02] text-brand-navy sm:text-6xl lg:text-7xl">
              Beyond the Headlines
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-soft sm:text-xl">
              The Corporate Lens is a corporate media and storytelling platform built to spotlight the people,
              decisions, and ideas shaping Pakistan&apos;s business landscape.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/about">
                Learn About Us <ArrowRight aria-hidden size={18} />
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-3 top-6 hidden h-44 w-44 border border-brand-navy/15 bg-brand-yellow lg:block" />
            <div className="relative border border-brand-navy bg-white p-3 shadow-[18px_18px_0_#F0CB30]">
              <div className="bg-brand-yellow px-4 py-8 sm:px-8 sm:py-10">
                <Image
                  src="/the-corporate-lens-logo-cropped.png"
                  alt="The Corporate Lens logo"
                  width={742}
                  height={369}
                  loading="eager"
                  className="h-auto w-full"
                />
              </div>
              <div className="grid border-t border-brand-navy/20 bg-white sm:grid-cols-3">
                {["Editorial depth", "Business context", "Public trust"].map((item) => (
                  <div
                    key={item}
                    className="border-brand-navy/15 p-4 text-sm font-semibold text-brand-navy sm:border-r sm:last:border-r-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-shell py-16 sm:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="About the platform"
            title="A Clearer View of Corporate Pakistan"
            copy="The Corporate Lens brings together experienced journalists, editors, and communications professionals to deliver credible, curated, and insight-led corporate storytelling."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {features.map((feature) => (
              <ValueCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="bg-brand-navy py-16 text-white sm:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="What we stand for"
            title="Credible media thinking with a corporate perspective."
            copy="Our work is built for audiences who value context, restraint, and substance."
            className="max-w-3xl"
            dark
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} dark />
            ))}
          </div>
        </div>
      </section>

      <MotionSection
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-shell py-16 sm:py-24"
      >
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Leadership"
            title="An editorial team built for depth."
            copy="The Corporate Lens is guided by professionals with experience across journalism, news operations, marketing, and corporate communication."
            className="max-w-3xl"
          />
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-brand text-sm font-bold uppercase tracking-[0.16em] text-brand-navy underline decoration-brand-yellow decoration-4 underline-offset-8"
          >
            Meet the team <ArrowRight aria-hidden size={16} />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <TeamCard
            name="Haroon Khalid"
            role="Editorial Lead / Senior Journalist"
            summary="A seasoned editorial professional with deep newsroom experience across Pakistani media."
          />
          <TeamCard
            name="Sabeehul-Wara Fasihi"
            role="Controller News / Editorial Operations"
            summary="An experienced media professional focused on news judgment, content supervision, and newsroom coordination."
          />
          <TeamCard
            name="Tariq Habib"
            role="Marketing & Corporate Communications Strategist"
            summary="A senior communication strategist with cross-sector expertise in brand, media, and stakeholder engagement."
          />
        </div>
      </MotionSection>

      <section className="border-y border-line bg-paper py-16 sm:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="inline-flex size-16 items-center justify-center border border-brand-navy bg-brand-yellow text-brand-navy">
            <Sparkles aria-hidden size={30} />
          </div>
          <div>
            <h2 className="font-brand max-w-4xl text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
              Let&apos;s Tell the Story Behind the Business
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">
              Collaborate with a platform designed for credible corporate visibility, meaningful leadership
              narratives, and polished business storytelling.
            </p>
            <div className="mt-8">
              <Button href="/contact">
                Get in Touch <BadgeCheck aria-hidden size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
