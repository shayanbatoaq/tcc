import { MotionDiv } from "@/components/public/Motion";

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="premium-gradient text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c9a96a]">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{copy}</p>
        </MotionDiv>
      </div>
    </section>
  );
}
