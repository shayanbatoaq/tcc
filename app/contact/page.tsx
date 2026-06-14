import type { Metadata } from "next";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Corporate Lens for collaborations, corporate storytelling, media features, and business inquiries.",
};

const contactMethods = [
  { label: "Email", value: "info@thecorporatelens.com", Icon: Mail },
  { label: "Phone", value: "+92 XXX XXXXXXX", Icon: Phone },
  { label: "Location", value: "Karachi, Pakistan", Icon: MapPin },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="section-shell">
          <div>
            <p className="font-brand text-xs font-bold uppercase tracking-[0.28em] text-brand-navy/65">Contact</p>
            <h1 className="font-brand mt-5 max-w-5xl text-5xl font-bold leading-tight text-brand-navy sm:text-6xl">
              Contact The Corporate Lens
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
              For collaborations, corporate storytelling, media features, and business inquiries, get in touch with our
              team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-line bg-white p-5 sm:p-8">
          <SectionHeader
            eyebrow="Send a message"
            title="Let us know what you want to build."
            copy="Share the essentials and the team will review your inquiry with editorial care."
            className="mb-8"
          />
          <form className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-brand-navy">
                Name
                <input
                  className="min-h-12 border border-line bg-paper px-4 text-base outline-none transition focus:border-brand-navy focus:bg-white"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-brand-navy">
                Email
                <input
                  className="min-h-12 border border-line bg-paper px-4 text-base outline-none transition focus:border-brand-navy focus:bg-white"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-brand-navy">
                Company
                <input
                  className="min-h-12 border border-line bg-paper px-4 text-base outline-none transition focus:border-brand-navy focus:bg-white"
                  name="company"
                  type="text"
                  autoComplete="organization"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-brand-navy">
                Phone
                <input
                  className="min-h-12 border border-line bg-paper px-4 text-base outline-none transition focus:border-brand-navy focus:bg-white"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-brand-navy">
              Message
              <textarea
                className="min-h-40 resize-y border border-line bg-paper px-4 py-3 text-base outline-none transition focus:border-brand-navy focus:bg-white"
                name="message"
                required
              />
            </label>
            <div>
              <Button type="submit">
                Submit <Send aria-hidden size={18} />
              </Button>
            </div>
          </form>
        </div>

        <aside className="space-y-4">
          {contactMethods.map(({ label, value, Icon }) => (
            <div key={label} className="border border-line bg-paper p-6">
              <Icon aria-hidden className="mb-6 text-brand-navy" size={24} />
              <p className="font-brand text-xs font-bold uppercase tracking-[0.22em] text-brand-navy/60">{label}</p>
              <p className="mt-2 text-lg font-semibold text-brand-navy">{value}</p>
            </div>
          ))}
          <div className="bg-brand-navy p-6 text-white">
            <h2 className="font-brand text-2xl font-bold">Beyond the Headlines</h2>
            <p className="mt-4 leading-7 text-white/70">
              Corporate stories deserve the same care as the decisions behind them.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
