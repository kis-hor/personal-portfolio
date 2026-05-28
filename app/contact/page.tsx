import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for Kishor Bahadur Gharti Chhetri.",
};

export default function ContactPage() {
  return (
    <SectionWrapper title="Contact" description="Let&apos;s connect for projects, collaboration, or opportunities.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a className="text-[var(--primary)] hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
          <p>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a className="text-[var(--primary)] hover:underline" href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
              {siteConfig.linkedIn}
            </a>
          </p>
          <p>
            <span className="font-medium">GitHub:</span>{" "}
            <a className="text-[var(--primary)] hover:underline" href={siteConfig.github} target="_blank" rel="noreferrer">
              {siteConfig.github}
            </a>
          </p>
          <p>
            <span className="font-medium">Upwork:</span>{" "}
            <a className="text-[var(--primary)] hover:underline" href={siteConfig.upwork} target="_blank" rel="noreferrer">
              {siteConfig.upwork}
            </a>
          </p>
        </div>

        <form className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 outline-none ring-[var(--primary)] focus:ring-1"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 outline-none ring-[var(--primary)] focus:ring-1"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 outline-none ring-[var(--primary)] focus:ring-1"
          />
          <button
            type="submit"
            className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
