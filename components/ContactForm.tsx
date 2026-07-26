"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/Button";

const fieldClass =
  "min-h-12 rounded-sm border border-line bg-white px-4 py-3 text-lg text-brand-navy outline-none transition placeholder:text-brand-navy/42 focus:border-brand-navy focus:shadow-[4px_4px_0_#F5B800]";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 font-bold text-brand-navy">
          Name
          <input className={fieldClass} name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label className="grid gap-2 font-bold text-brand-navy">
          Email
          <input className={fieldClass} name="email" type="email" autoComplete="email" required placeholder="name@company.com" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 font-bold text-brand-navy">
          Company
          <input className={fieldClass} name="company" type="text" autoComplete="organization" placeholder="Organization" />
        </label>
        <label className="grid gap-2 font-bold text-brand-navy">
          Inquiry Type
          <select className={fieldClass} name="inquiry" defaultValue="feature">
            <option value="feature">Get featured</option>
            <option value="interview">Executive interview</option>
            <option value="editorial">Editorial collaboration</option>
            <option value="general">General inquiry</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 font-bold text-brand-navy">
        Message
        <textarea
          className={`${fieldClass} min-h-40 resize-y`}
          name="message"
          required
          placeholder="Tell us the story, announcement, or leadership profile you want to discuss."
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit">
          Send Inquiry <Send aria-hidden size={18} />
        </Button>
        <p aria-live="polite" className="text-base font-semibold text-brand-navy/70">
          {sent ? "Thank you. Your inquiry is ready for the editorial team to review." : "We review every inquiry with editorial discretion."}
        </p>
      </div>
    </form>
  );
}
