import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  copy: string;
  dark?: boolean;
  Icon: LucideIcon;
  title: string;
};

export function FeatureCard({ copy, dark = false, Icon, title }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group grid min-h-64 rounded-sm border p-6 transition",
        dark
          ? "border-white/14 bg-white/[0.04] text-white hover:border-brand-gold"
          : "border-line bg-white text-brand-navy hover:border-brand-navy hover:shadow-[8px_8px_0_#f6bc23]",
      )}
    >
      <div>
        <div
          className={cn(
            "mb-8 inline-flex size-12 items-center justify-center rounded-sm border",
            dark ? "border-brand-gold text-brand-gold" : "border-brand-navy bg-brand-gold text-brand-navy",
          )}
        >
          <Icon aria-hidden size={23} />
        </div>
        <h3 className="text-2xl font-bold leading-tight">{title}</h3>
        <p className={cn("mt-4 text-lg leading-8", dark ? "text-white/72" : "text-ink-muted")}>{copy}</p>
      </div>
      <span className={cn("mt-8 inline-flex items-center gap-2 self-end text-base font-bold", dark ? "text-brand-gold" : "text-brand-navy")}>
        Explore <ArrowRight aria-hidden size={17} className="transition group-hover:translate-x-1" />
      </span>
    </article>
  );
}
