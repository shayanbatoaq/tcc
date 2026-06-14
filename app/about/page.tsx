import type { Metadata } from "next";
import { Award, BookOpenCheck, Building2, MessagesSquare, PenTool, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { ValueCard } from "@/components/ValueCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Corporate Lens, a corporate storytelling and editorial platform focused on Pakistan's business ecosystem.",
};

const purposes = [
  {
    title: "Document Journeys",
    copy: "To document meaningful corporate journeys with context and care.",
    Icon: BookOpenCheck,
  },
  {
    title: "Elevate Voices",
    copy: "To elevate credible business voices across Pakistan's corporate landscape.",
    Icon: UsersRound,
  },
  {
    title: "Create Narratives",
    copy: "To create polished corporate narratives that feel clear and considered.",
    Icon: PenTool,
  },
  {
    title: "Strengthen Understanding",
    copy: "To strengthen public understanding of Pakistan's business ecosystem.",
    Icon: Building2,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="section-shell">
          <div>
            <p className="font-brand text-xs font-bold uppercase tracking-[0.28em] text-brand-navy/65">
              About the platform
            </p>
            <h1 className="font-brand mt-5 max-w-5xl text-5xl font-bold leading-tight text-brand-navy sm:text-6xl">
              About The Corporate Lens
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
              The Corporate Lens exists to present corporate stories with depth, credibility, and editorial precision.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader eyebrow="Who we are" title="A platform for leadership visibility and business narratives." />
        <div className="space-y-6 text-lg leading-9 text-ink-soft">
          <p>
            The Corporate Lens focuses on corporate storytelling, leadership visibility, media credibility, and
            strategic business narratives in Pakistan. It brings editorial discipline to stories that shape how
            companies, institutions, and decision-makers are understood.
          </p>
          <p>
            The platform is designed to go beyond surface-level coverage. It highlights the people, decisions,
            institutions, and communication choices that influence business perception and public understanding.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Our purpose"
            title="Built to make corporate stories more meaningful."
            copy="Every feature, profile, and collaboration is shaped around relevance, polish, and credibility."
            className="max-w-3xl"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {purposes.map((item) => (
              <ValueCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Team profiles"
            title="Editorial and communication leadership."
            copy="The Corporate Lens is shaped by people who understand newsrooms, institutions, and the discipline required to communicate with credibility."
          />
          <div className="border-l-4 border-brand-yellow pl-6 text-base leading-8 text-ink-soft">
            A lean leadership group gives the platform its editorial judgment, operational discipline, and strategic
            communication perspective.
          </div>
        </div>

        <div className="space-y-5">
          <TeamCard
            name="Haroon Khalid"
            role="Editorial Lead / Senior Journalist"
            Icon={Award}
            paragraphs={[
              "Haroon Khalid is a seasoned journalist and editorial professional with extensive experience across leading Pakistani media organizations, including Dawn, Tribune 24/7, and Indus News. His career spans newsroom roles from sub-editor to senior editorial leadership, including News Editor and Executive Producer.",
              "He brings strong command over content selection, editing, newsroom supervision, and editorial decision-making across print, digital, and broadcast platforms. With an M.A. in Mass Communication, an M.A. in International Relations from the University of Karachi, and a BCS from FAST Institute, Haroon combines academic depth with practical newsroom fluency in English and Urdu.",
            ]}
          />
          <TeamCard
            name="Sabeehul-Wara Fasihi"
            role="Controller News / Editorial Operations"
            Icon={BookOpenCheck}
            paragraphs={[
              "Sabeehul-Wara Fasihi is an experienced media professional with more than a decade of work in news editing, reporting, and newsroom management. He currently serves as Controller News at News 14 and has worked with major media organizations including Bol Network, Express News, ARY News, Geo News, and News One.",
              "His strengths include editorial decision-making, content supervision, assignment planning, and coordination with key stakeholders. With a Master's degree in Mass Communication, ongoing M.Phil work in Humanities, and fluency in systems such as ENPS and OCTOPUS, Sabeehul brings operational clarity to modern journalism.",
            ]}
          />
          <TeamCard
            name="Tariq Habib"
            role="Marketing & Corporate Communications Strategist"
            Icon={MessagesSquare}
            paragraphs={[
              "Tariq Habib is a seasoned marketing and corporate communications professional with more than 20 years of cross-sector experience across corporate, media, academia, and non-profit environments. His expertise spans brand building, media relations, digital strategy, stakeholder engagement, and narrative development.",
              "His work has been associated with organizations including The News International, GEO News, The Aga Khan University, Pak-Qatar Group, and Central Depository Company. Known for editorial acumen and strategic execution, Tariq has led integrated communication, branding, event, and content initiatives while contributing to publications such as Dawn, The News International, and Jang.",
            ]}
          />
        </div>
      </section>
    </>
  );
}
