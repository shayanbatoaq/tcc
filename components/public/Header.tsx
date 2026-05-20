"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  ["About", "/about"],
  ["Categories", "/categories"],
  ["Get Featured", "/get-featured"],
  ["Submit Story", "/submit-your-story"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/92 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-[#c9a96a]/70 text-sm font-semibold text-[#eadfc8]">
            TCC
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.26em] text-[#f8f6f1]">
            The Corporate Corner
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/78 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#eadfc8]">
              {label}
            </Link>
          ))}
          <Link
            href="/admin"
            className="border border-[#c9a96a]/50 px-4 py-2 text-[#eadfc8] transition hover:bg-[#c9a96a] hover:text-[#07111f]"
          >
            Admin
          </Link>
        </nav>
        <button
          aria-label="Toggle navigation"
          className="grid size-10 place-items-center border border-white/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      <div
        className={cn(
          "grid border-t border-white/10 bg-[#07111f] transition-all lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="overflow-hidden px-5">
          <div className="flex flex-col gap-1 py-4">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="py-3 text-white/82" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/admin" className="mt-2 bg-[#c9a96a] px-4 py-3 text-center font-medium text-[#07111f]">
              Admin Dashboard
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
