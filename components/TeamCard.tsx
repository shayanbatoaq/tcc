import type { LucideIcon } from "lucide-react";
import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

type TeamCardProps = {
  Icon?: LucideIcon;
  compact?: boolean;
  description: string;
  name: string;
  role: string;
};

export function TeamCard({ Icon = UserRound, compact = false, description, name, role }: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className={cn("rounded-sm border border-line bg-white p-6 transition hover:border-brand-navy hover:shadow-[8px_8px_0_#F0CB30]", !compact && "sm:p-8")}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-sm border border-brand-navy bg-brand-gold text-brand-navy">
          {compact ? <span className="font-brand text-xl font-bold">{initials}</span> : <Icon aria-hidden size={26} />}
        </div>
        <div>
          <h3 className="text-2xl font-bold leading-tight text-brand-navy">{name}</h3>
          <p className="mt-2 text-base font-bold uppercase text-brand-navy/65">{role}</p>
          <p className="mt-5 text-lg leading-8 text-ink-muted">{description}</p>
        </div>
      </div>
    </article>
  );
}
