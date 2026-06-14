import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-brand-navy text-white hover:bg-brand-navy/90",
  secondary: "border border-brand-navy bg-white text-brand-navy hover:bg-paper",
  ghost: "text-brand-navy hover:bg-paper",
};

export function Button({ children, className, href, onClick, type = "button", variant = "primary" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-center font-brand text-sm font-bold uppercase tracking-[0.12em] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow",
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
