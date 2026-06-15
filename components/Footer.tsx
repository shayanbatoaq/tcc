import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="border-b border-white/10 bg-brand-gold py-4 text-brand-navy">
        <div className="section-shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-brand text-lg font-bold">The Corporate Lens</p>
          <Button href="/contact" variant="secondary" className="w-full bg-white md:w-auto">
            Start an Inquiry <ArrowRight aria-hidden size={17} />
          </Button>
        </div>
      </div>

      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.15fr_0.6fr_0.85fr]">
        <div>
          <Link href="/" className="inline-flex rounded-sm border border-white/15 bg-brand-gold p-2">
            <Image
              src="/the-corporate-lens-logo-cropped.png"
              alt="The Corporate Lens logo"
              width={1253}
              height={525}
              className="h-auto w-64 max-w-full"
            />
          </Link>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/72">
            Beyond the Headlines. Premium corporate media, editorial credibility, and leadership storytelling for
            Pakistan&apos;s business landscape.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-brand text-base font-bold uppercase text-brand-gold">Quick Links</h2>
          <div className="mt-5 grid gap-3 text-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/70 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <h2 className="font-brand text-base font-bold uppercase text-brand-gold">Contact</h2>
          <div className="mt-5 grid gap-4 text-white/72">
            <p className="flex items-center gap-3">
              <Mail aria-hidden size={18} />
              info@thecorporatelens.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin aria-hidden size={18} />
              Karachi, Pakistan
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="section-shell text-sm text-white/55">
          Copyright {new Date().getFullYear()} The Corporate Lens. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
