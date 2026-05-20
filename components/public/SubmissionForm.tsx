"use client";

import { Send } from "lucide-react";
import { MotionDiv } from "@/components/public/Motion";

export function SubmissionForm() {
  return (
    <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="border border-[#d8cfbd] bg-white p-5 md:p-8">
      <form className="grid gap-4">
        {[
          ["name", "Your name"],
          ["company", "Company"],
          ["designation", "Designation"],
          ["email", "Email"],
          ["phone", "Phone"],
          ["storyType", "Story type"],
        ].map(([id, label]) => (
          <label key={id} className="grid gap-2 text-sm font-medium text-[#2d3440]">
            {label}
            <input className="border border-[#d8cfbd] bg-[#fbfaf7] px-4 py-3 outline-none focus:border-[#c9a96a]" name={id} />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-medium text-[#2d3440]">
          Story summary
          <textarea className="min-h-36 border border-[#d8cfbd] bg-[#fbfaf7] px-4 py-3 outline-none focus:border-[#c9a96a]" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#2d3440]">
          Supporting links
          <input className="border border-[#d8cfbd] bg-[#fbfaf7] px-4 py-3 outline-none focus:border-[#c9a96a]" />
        </label>
        <button type="button" className="mt-3 inline-flex items-center justify-center gap-2 bg-[#07111f] px-5 py-3 font-semibold text-white">
          <Send size={17} />
          Submit for Editorial Review
        </button>
      </form>
    </MotionDiv>
  );
}
