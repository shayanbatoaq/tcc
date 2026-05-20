import { submissions } from "@/lib/content";

export default function SubmissionsPage() {
  return (
    <section className="border border-[#d8dde5] bg-white p-5">
      <h2 className="text-2xl font-semibold">Submissions</h2>
      <div className="mt-5 grid gap-4">
        {submissions.map((submission) => (
          <div key={submission.id} className="border border-[#e5e8ee] p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#8a6a34]">{submission.storyType}</p>
                <h3 className="mt-2 text-xl font-semibold">{submission.company}</h3>
                <p className="mt-2 text-sm text-[#697386]">
                  {submission.name}, {submission.designation} · {submission.email}
                </p>
                <p className="mt-4 max-w-3xl leading-7 text-[#4f5866]">{submission.storySummary}</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-[#07111f] px-4 py-2 text-sm font-semibold text-white">Convert to draft</button>
                <button className="border border-[#d8dde5] px-4 py-2 text-sm">Approve</button>
                <button className="border border-[#d8dde5] px-4 py-2 text-sm">Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
