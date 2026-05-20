import { PageHero } from "@/components/public/PageHero";
import { PublicShell } from "@/components/public/PublicShell";
import { SubmissionForm } from "@/components/public/SubmissionForm";

export const metadata = { title: "Submit Your Story" };

export default function SubmitStoryPage() {
  return (
    <PublicShell>
      <PageHero
        eyebrow="Submit Your Story"
        title="Share the essentials. Editorial will shape the rest."
        copy="Use this form for leadership journeys, corporate milestones, strategic announcements, brand stories, and event coverage."
      />
      <section className="mx-auto max-w-4xl px-5 py-20">
        <SubmissionForm />
      </section>
    </PublicShell>
  );
}
