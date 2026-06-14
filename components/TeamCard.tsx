import type { LucideIcon } from "lucide-react";
import { UserRound } from "lucide-react";

type TeamCardProps = {
  Icon?: LucideIcon;
  name: string;
  paragraphs?: string[];
  role: string;
  summary?: string;
};

export function TeamCard({ Icon = UserRound, name, paragraphs, role, summary }: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="border border-line bg-white p-5 transition hover:border-brand-navy/35 hover:shadow-[8px_8px_0_#F0CB30] sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex size-16 shrink-0 items-center justify-center border border-brand-navy bg-brand-yellow text-brand-navy">
          {paragraphs ? <Icon aria-hidden size={26} /> : <span className="font-brand text-xl font-bold">{initials}</span>}
        </div>
        <div>
          <h3 className="font-brand text-2xl font-bold leading-tight text-brand-navy">{name}</h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-navy/60">{role}</p>
          {summary ? <p className="mt-5 leading-7 text-ink-soft">{summary}</p> : null}
          {paragraphs ? (
            <div className="mt-5 space-y-4 leading-8 text-ink-soft">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
