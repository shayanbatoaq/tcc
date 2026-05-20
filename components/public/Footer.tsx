import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#07111f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#eadfc8]">
            The Corporate Corner
          </div>
          <p className="max-w-md text-sm leading-7 text-white/64">
            Pakistan&apos;s premium corporate media platform for leadership stories, business influence,
            institutional milestones, and selective brand storytelling.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-white/66">
          <Link href="/categories">Categories</Link>
          <Link href="/get-featured">Get Featured</Link>
          <Link href="/submit-your-story">Submit Your Story</Link>
        </div>
        <div className="text-sm text-white/66">
          <p>editorial@thecorporatecorner.pk</p>
          <p className="mt-3">Karachi, Lahore, Islamabad</p>
          <p className="mt-8 text-xs uppercase tracking-[0.24em] text-white/38">
            Editorial. Selective. Corporate.
          </p>
        </div>
      </div>
    </footer>
  );
}
