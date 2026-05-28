import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "About",
  description: "Professional summary, education, and skills of Kishor Bahadur Gharti Chhetri.",
};

export default function AboutPage() {
  return (
    <SectionWrapper title="About" description="Professional background, education, and strengths.">
      <div className="space-y-4">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-semibold">Kishor GC</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Kathmandu, Bhangal | kishorbdrgc95@gmail.com | 9823581391 |{" "}
            <a
              href="https://www.linkedin.com/in/kishor-gc-74b380231/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--primary)] hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-semibold">Professional Summary</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            Full-Stack Web Developer and E-commerce Professional with 3+ years of experience building and maintaining
            internal web applications using PHP, MySQL, and modern web technologies. Experienced in developing
            data-driven systems such as production management tools, petty cash tracking systems, and operational
            dashboards. Strong background in e-commerce operations, including Shopify theme customization using Liquid,
            store optimization, technical SEO, digital marketing fundamentals, and API integrations across web
            platforms. Focused on improving business performance through automation, scalable web solutions, SEO
            optimization, and system integrations. Currently expanding expertise in Laravel, React, REST APIs, and
            AI-powered tools to build modern, production-ready applications and contribute to high-impact development
            teams.
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-semibold">Education</h3>
          <div className="mt-4 space-y-4 text-[var(--muted)]">
            <div>
              <p className="font-medium text-[var(--foreground)]">Islington College, Kamalpokhari</p>
              <p>BSc (Hons) Computing | 2025</p>
              <p className="mt-1 text-sm">
                Relevant Coursework: Fundamentals of Computing, Databases, Software Engineering, Logic and Problem
                Solving, Programming, Application Development, Artificial Intelligence
              </p>
            </div>
            <div>
              <p className="font-medium text-[var(--foreground)]">Glacier International School, Shantinagar, Kathmandu</p>
              <p>+2 High School in Science | 2022</p>
            </div>
            <div>
              <p className="font-medium text-[var(--foreground)]">Shambhavi School, Battisputtali, Kathmandu</p>
              <p>Till Grade 10 | 2019</p>
            </div>
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="text-lg font-semibold">Skills (Technical)</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              PHP (Core - Intermediate), MySQL (Intermediate), Laravel (Intermediate), JavaScript (Intermediate),
              HTML, CSS, Shopify (Intermediate - Liquid, theme customization), WordPress (Intermediate), Technical
              SEO (on-page optimization, meta structure, keyword research, internal linking, content optimization),
              E-commerce SEO and conversion optimization, Microsoft Excel (Advanced), Google Sheets (Advanced), data
              analysis and reporting, Git and GitHub (Basic-Intermediate), REST APIs (Basic), third-party API
              integrations (Shopify/web tools), OpenAI API (Basic), prompt engineering and AI-assisted workflows,
              VS Code, Postman.
            </p>
          </article>

          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="text-lg font-semibold">Languages & Interests</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Languages: Nepali (Native), English (Professional), Hindi (Conversational).
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Interests: Web application development, data analysis, system optimization, football, fitness.
            </p>
          </article>
        </div>
      </div>
    </SectionWrapper>
  );
}
