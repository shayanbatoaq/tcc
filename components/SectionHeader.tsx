import { MotionDiv } from "@/components/Motion";
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
    <MotionDiv
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow ? (
        <p className={cn("font-brand text-sm font-bold uppercase", dark ? "text-brand-gold" : "text-brand-navy/62")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("mt-4 text-2xl font-bold leading-[1.08] sm:text-5xl", dark ? "text-white" : "text-brand-navy")}>
        {title}
      </h2>
      {copy ? <p className={cn("mt-5 max-w-3xl text-lg leading-8 sm:text-xl", dark ? "text-white/72" : "text-ink-muted")}>{copy}</p> : null}
    </MotionDiv>
  );
}
