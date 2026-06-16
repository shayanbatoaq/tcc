import Image from "next/image";
import { ArrowRight, BookOpenText, Newspaper, UsersRound } from "lucide-react";
import { Button } from "@/components/Button";
import { MotionDiv, MotionH1, MotionP } from "@/components/Motion";

const signals = [
  { label: "Corporate News", Icon: Newspaper },
  { label: "Executive Voices", Icon: UsersRound },
  { label: "Editorial Analysis", Icon: BookOpenText },
];

const heroGroup = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="lens-grid relative overflow-hidden border-b border-line bg-white text-brand-navy">
      <div className="section-shell grid min-h-[calc(100svh-81px)] gap-10 py-12 md:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <MotionDiv
          initial="hidden"
          animate="show"
          variants={heroGroup}
        >
          <MotionH1
            variants={heroItem}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-4xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl"
          >
            Beyond the Headlines
          </MotionH1>
          <MotionP
            variants={heroItem}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-xl leading-8 sm:text-2xl"
          >
            The Corporate Lens is a premium corporate media and storytelling platform spotlighting the people,
            decisions, and developments shaping Pakistan&apos;s corporate landscape.
          </MotionP>
          <MotionDiv
            variants={heroItem}
            transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/about">
              About Us <ArrowRight aria-hidden size={18} />
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          whileHover={{ y: -4 }}
          className="relative"
        >
          <div className="absolute -right-8 -top-8 hidden h-40 w-40 border border-brand-navy/22 bg-white lg:block" />
          <div className="relative rounded-sm border border-brand-navy bg-brand-navy p-3 shadow-[16px_16px_0_rgba(255,255,255,0.55)]">
            <div className="rounded-sm bg-brand-gold p-4">
              <Image
                src="/the-corporate-lens-logo-cropped.png"
                alt="The Corporate Lens logo"
                width={1253}
                height={525}
                loading="eager"
                className="h-auto w-full rounded-sm"
              />
            </div>
            <div className="grid gap-px bg-white/12 pt-3 sm:grid-cols-3">
              {signals.map(({ label, Icon }, index) => (
                <MotionDiv
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: 0.34 + index * 0.08 }}
                  className="rounded-sm bg-white p-4 text-brand-navy"
                >
                  <Icon aria-hidden className="mb-5" size={24} />
                  <p className="font-brand text-base font-bold leading-tight">{label}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
