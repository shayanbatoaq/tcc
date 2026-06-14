import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand-navy text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.1fr_0.7fr_0.8fr]">
        <div>
          <Link href="/" className="inline-block border border-white/15 bg-brand-yellow p-2">
            <Image
              src="/the-corporate-lens-logo-cropped.png"
              alt="The Corporate Lens logo"
              width={742}
              height={369}
              className="h-auto w-56 max-w-full"
            />
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/70">
            Beyond the Headlines. Corporate storytelling, editorial credibility, and strategic business narratives for
            Pakistan.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-brand text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">Quick Links</h2>
          <div className="mt-5 grid gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/70 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <h2 className="font-brand text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">Contact</h2>
          <div className="mt-5 space-y-3 text-white/70">
            <p>info@thecorporatelens.com</p>
            <p>+92 XXX XXXXXXX</p>
            <p>Karachi, Pakistan</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell text-sm text-white/55">
          © {new Date().getFullYear()} The Corporate Lens. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
