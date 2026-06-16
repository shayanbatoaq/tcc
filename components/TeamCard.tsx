import type { LucideIcon } from "lucide-react";
import { UserRound } from "lucide-react";
import { MotionArticle } from "@/components/Motion";
import { cn } from "@/lib/utils";

type TeamCardProps = {
  Icon?: LucideIcon;
  compact?: boolean;
  description: string;
  index?: number;
  name: string;
  role: string;
};

export function TeamCard({ Icon = UserRound, compact = false, description, index = 0, name, role }: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.065, 0.2) }}
      whileHover={{ y: -5 }}
      className={cn("rounded-sm border border-line bg-white p-6 transition hover:border-brand-navy hover:shadow-[8px_8px_0_#f6bc23]", !compact && "sm:p-8")}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-sm border border-brand-navy bg-brand-gold text-brand-navy">
          {compact ? <span className="font-brand text-xl font-bold">{initials}</span> : <Icon aria-hidden size={26} />}
        </div>
        <div>
          <h3 className="text-xl font-bold leading-tight text-brand-navy sm:text-2xl">{name}</h3>
          <p className="mt-2 text-base font-bold uppercase text-brand-navy/65">{role}</p>
          <p className="mt-5 text-lg leading-8 text-ink-muted">{description}</p>
        </div>
      </div>
    </MotionArticle>
  );
}
