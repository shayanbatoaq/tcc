"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/12 bg-brand-gold text-brand-navy">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center rounded-sm bg-brand-gold p-1.5" onClick={() => setOpen(false)}>
          <Image
            src="/the-corporate-lens-logo-cropped.png"
            alt="The Corporate Lens logo"
            width={1253}
            height={525}
            loading="eager"
            className="h-12 w-auto sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-sm px-4 py-3 font-brand text-sm font-bold uppercase text-brand-navy transition hover:bg-white/45",
                  active && "bg-brand-navy text-white hover:bg-brand-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="min-h-11 px-4 py-2 text-xs">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-sm border border-brand-navy text-brand-navy md:hidden"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-brand-navy/12 bg-brand-gold px-4 py-4 shadow-[0_22px_44px_rgba(15,28,42,0.14)] md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-xl gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-sm px-4 py-3 font-brand text-sm font-bold uppercase text-brand-navy",
                  pathname === link.href && "bg-brand-navy text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Contact Us
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
