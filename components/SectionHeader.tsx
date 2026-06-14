import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  align?: "left" | "center";
  className?: string;
  copy?: string;
  dark?: boolean;
  eyebrow?: string;
  title: string;
};

export function SectionHeader({ align = "left", className, copy, dark = false, eyebrow, title }: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("font-brand text-xs font-bold uppercase tracking-[0.28em]", dark ? "text-brand-yellow" : "text-brand-navy/60")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("font-brand mt-4 text-3xl font-bold leading-tight sm:text-5xl", dark ? "text-white" : "text-brand-navy")}>
        {title}
      </h2>
      {copy ? <p className={cn("mt-5 text-base leading-8 sm:text-lg", dark ? "text-white/70" : "text-ink-soft")}>{copy}</p> : null}
    </div>
  );
}
