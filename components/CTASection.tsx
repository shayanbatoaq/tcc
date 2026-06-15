import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  copy: string;
  eyebrow?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  title: string;
  tone?: "navy" | "gold" | "white";
};

export function CTASection({
  copy,
  eyebrow,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  title,
  tone = "navy",
}: CTASectionProps) {
  const dark = tone === "navy";

  return (
    <section
      className={cn(
        "border-y py-14 sm:py-20",
        tone === "navy" && "border-brand-navy bg-brand-navy text-white",
        tone === "gold" && "border-brand-gold bg-brand-gold text-brand-navy",
        tone === "white" && "border-line bg-white text-brand-navy",
      )}
    >
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_0.55fr] lg:items-center">
        <div>
          {eyebrow ? <p className={cn("font-brand text-sm font-bold uppercase", dark ? "text-brand-gold" : "text-brand-navy/65")}>{eyebrow}</p> : null}
          <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.06] sm:text-6xl">{title}</h2>
          <p className={cn("mt-5 max-w-3xl text-xl leading-8", dark ? "text-white/72" : "text-brand-navy/75")}>{copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button href={primaryHref} variant={tone === "navy" ? "gold" : "primary"}>
            {primaryLabel} <ArrowRight aria-hidden size={18} />
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant={tone === "navy" ? "secondary" : "ghost"} className={tone === "navy" ? "border-white bg-white text-brand-navy" : undefined}>
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
