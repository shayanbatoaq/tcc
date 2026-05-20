import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { PublicShell } from "@/components/public/PublicShell";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PublicShell>
      <PageHero eyebrow="Contact" title="Editorial, partnerships, and feature inquiries." copy="Reach the team for story reviews, corporate coverage, and publication partnerships." />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-3 lg:px-8">
        {[
          [Mail, "editorial@thecorporatecorner.pk", "Editorial and submissions"],
          [Phone, "+92 300 0000000", "Feature desk"],
          [MapPin, "Karachi, Lahore, Islamabad", "Pakistan coverage"],
        ].map(([Icon, title, copy]) => (
          <div key={title as string} className="border border-[#d8cfbd] bg-white p-7">
            <Icon className="mb-8 text-[#8a6a34]" />
            <h2 className="text-xl font-semibold">{title as string}</h2>
            <p className="mt-3 text-[#5b626f]">{copy as string}</p>
          </div>
        ))}
      </section>
    </PublicShell>
  );
}
