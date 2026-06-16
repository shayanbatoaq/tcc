import type { Metadata } from "next";
import { Mail, MapPin, MessagesSquare, Phone, Send } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { MotionAside, MotionDiv, MotionSection } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Corporate Lens for corporate features, executive interviews, business updates, and editorial inquiries.",
};

const contactDetails = [
  {
    label: "Editorial Email",
    value: "info@thecorporatelens.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+92 XXX XXXXXXX",
    Icon: Phone,
  },
  {
    label: "Location",
    value: "Karachi, Pakistan",
    Icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <>
      <MotionSection
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-line bg-brand-gold py-16 text-brand-navy sm:py-24"
      >
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-end">
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            <p className="font-brand text-base font-bold uppercase">Contact</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.02] sm:text-6xl">Contact The Corporate Lens</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-brand-navy/78">
              For corporate storytelling, executive features, publication inquiries, and editorial collaborations,
              share the essentials with our team.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            whileHover={{ y: -4 }}
            className="rounded-sm border border-brand-navy bg-white p-6 shadow-[10px_10px_0_#0F1C2A]"
          >
            <MessagesSquare aria-hidden className="mb-5 text-brand-navy" size={34} />
            <p className="font-brand text-xl font-bold leading-tight sm:text-2xl">Inquiry CTA</p>
            <p className="mt-4 text-lg leading-7 text-ink-muted">
              Tell us what needs to be seen, understood, and remembered.
            </p>
          </MotionDiv>
        </div>
      </MotionSection>

      <MotionSection
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="section-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-sm border border-line bg-paper p-5 sm:p-8"
        >
          <SectionHeader
            eyebrow="Send a message"
            title="Start a premium editorial inquiry."
            copy="Use the form for feature requests, executive interviews, business updates, sponsored editorial opportunities, or general contact."
            className="mb-8"
          />
          <ContactForm />
        </MotionDiv>

        <MotionAside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="space-y-5"
        >
          {contactDetails.map(({ label, value, Icon }, index) => (
            <MotionDiv
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1], delay: index * 0.055 }}
              whileHover={{ y: -4 }}
              className="rounded-sm border border-line bg-white p-6"
            >
              <Icon aria-hidden className="mb-6 text-brand-navy" size={26} />
              <p className="font-brand text-base font-bold uppercase text-brand-navy/62">{label}</p>
              <p className="mt-2 text-2xl font-bold text-brand-navy">{value}</p>
            </MotionDiv>
          ))}
          <MotionDiv
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1], delay: contactDetails.length * 0.055 }}
            whileHover={{ y: -4 }}
            className="rounded-sm bg-brand-navy p-7 text-white"
          >
            <Send aria-hidden className="mb-6 text-brand-gold" size={28} />
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">Position Your Story Where It Matters</h2>
            <p className="mt-4 text-lg leading-8 text-white/72">
              Share your announcement, leadership profile, event, or corporate milestone with editorial context.
            </p>
          </MotionDiv>
        </MotionAside>
      </MotionSection>

      <CTASection
        tone="white"
        eyebrow="Inquiry path"
        title="Your story deserves more than a passing mention."
        copy="The Corporate Lens reviews each inquiry with attention to relevance, credibility, and audience fit."
        primaryHref="/about"
        primaryLabel="Meet the Team"
        secondaryHref="/"
        secondaryLabel="Return Home"
      />
    </>
  );
}
