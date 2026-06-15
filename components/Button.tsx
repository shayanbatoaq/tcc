import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "gold" | "ghost";
};

const variants = {
  primary: "bg-brand-navy text-white shadow-[6px_6px_0_#F0CB30] hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#F0CB30]",
  secondary: "border border-brand-navy bg-white text-brand-navy hover:bg-paper",
  gold: "bg-brand-gold text-brand-navy shadow-[6px_6px_0_rgba(255,255,255,0.28)] hover:-translate-y-0.5",
  ghost: "text-brand-navy underline decoration-brand-gold decoration-4 underline-offset-8 hover:text-brand-navy/70",
};

export function Button({ children, className, href, onClick, type = "button", variant = "primary" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 py-3 text-center font-brand text-sm font-bold uppercase transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick as MouseEventHandler<HTMLButtonElement>}>
      {children}
    </button>
  );
}
