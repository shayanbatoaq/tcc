import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ValueCardProps = {
  copy: string;
  dark?: boolean;
  Icon: LucideIcon;
  title: string;
};

export function ValueCard({ copy, dark = false, Icon, title }: ValueCardProps) {
  return (
    <article className={cn("border p-6", dark ? "border-white/15 bg-white/[0.03]" : "border-line bg-white")}>
      <div
        className={cn(
          "mb-8 inline-flex size-12 items-center justify-center border",
          dark ? "border-brand-yellow text-brand-yellow" : "border-brand-navy bg-brand-yellow text-brand-navy",
        )}
      >
        <Icon aria-hidden size={22} />
      </div>
      <h3 className={cn("font-brand text-lg font-bold leading-tight [overflow-wrap:anywhere]", dark ? "text-white" : "text-brand-navy")}>{title}</h3>
      <p className={cn("mt-4 text-sm leading-7", dark ? "text-white/65" : "text-ink-soft")}>{copy}</p>
    </article>
  );
}
