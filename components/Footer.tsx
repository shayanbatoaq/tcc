import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { MotionDiv, MotionFooter } from "@/components/Motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <MotionFooter
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
      className="bg-brand-navy text-[#F8F6F1]"
    >
      <div className="border-b border-white/10 bg-brand-gold py-4 text-brand-navy">
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          className="section-shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
          <p className="font-brand text-lg font-bold">The Corporate Lens</p>
          <Button href="/contact" variant="secondary" className="w-full bg-white md:w-auto">
            Start an Inquiry <ArrowRight aria-hidden size={17} />
          </Button>
        </MotionDiv>
      </div>

      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.15fr_0.6fr_0.85fr]">
        <MotionDiv
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <Link href="/" className="inline-flex rounded-sm border border-white/15 bg-brand-gold p-2">
            <Image
              src="/the-corporate-lens-logo-cropped.png"
              alt="The Corporate Lens logo"
              width={1253}
              height={525}
              className="h-auto w-64 max-w-full"
            />
          </Link>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#F8F6F1]">
            Beyond the Headlines. Premium corporate media, editorial credibility, and leadership storytelling for
            Pakistan&apos;s business landscape.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
        >
          <nav aria-label="Footer navigation">
          <h2 className="text-base font-bold text-[#F8F6F1]">Quick Links</h2>
          <div className="mt-5 grid gap-3 text-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#F8F6F1] transition hover:text-[#F8F6F1]">
                {link.label}
              </Link>
            ))}
          </div>
          </nav>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <h2 className="text-base font-bold text-[#F8F6F1]">Contact</h2>
          <div className="mt-5 grid gap-4 text-[#F8F6F1]">
            <p className="flex items-center gap-3">
              <Mail aria-hidden size={18} />
              info@thecorporatelens.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin aria-hidden size={18} />
              Karachi, Pakistan
            </p>
          </div>
        </MotionDiv>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="section-shell text-sm text-[#F8F6F1]">
          Copyright {new Date().getFullYear()} The Corporate Lens. All rights reserved.
        </div>
      </div>
    </MotionFooter>
  );
}
