import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-lg font-semibold text-[var(--foreground)]">Let&apos;s build something meaningful.</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Open to freelance projects, collaborations, and full-time opportunities.</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Email Me
          </a>
          <Link
            href={siteConfig.linkedIn}
            target="_blank"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface)]"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface)]"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.upwork}
            target="_blank"
            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface)]"
          >
            Upwork
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-6 w-full max-w-6xl px-6 text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} Kishor Bahadur Gharti Chhetri. All rights reserved.
      </div>
    </footer>
  );
}
