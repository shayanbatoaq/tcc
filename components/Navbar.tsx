import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/the-corporate-lens-logo-cropped.png"
            alt="The Corporate Lens logo"
            width={742}
            height={369}
            loading="eager"
            className="h-12 w-auto border border-brand-navy/15 bg-brand-yellow sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-brand text-sm font-bold uppercase tracking-[0.15em] text-brand-navy/65 transition hover:text-brand-navy hover:underline hover:decoration-brand-yellow hover:decoration-4 hover:underline-offset-8"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="min-h-11 px-4 py-2 text-xs">
            Contact Us
          </Button>
        </div>

        <div className="md:hidden">
          <input id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-label="Toggle menu" />
          <label
            htmlFor="mobile-nav-toggle"
            className="inline-flex size-11 cursor-pointer items-center justify-center border border-brand-yellow text-brand-navy"
          >
            <Menu aria-hidden size={22} />
          </label>
          <nav
            className="fixed left-0 right-0 top-20 hidden border-t border-line bg-white px-4 py-4 shadow-[0_20px_40px_rgba(15,28,42,0.12)] peer-checked:grid"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-3 font-brand text-sm font-bold uppercase tracking-[0.16em] text-brand-navy/75"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full">
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
