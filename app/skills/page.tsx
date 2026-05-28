import type { Metadata } from "next";
import { IconType } from "react-icons";
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPhp,
  SiPostman,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SectionWrapper } from "@/components/section-wrapper";
import { skillCategories } from "@/lib/site-data";

const skillIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  Laravel: SiLaravel,
  MySQL: SiMysql,
  WordPress: SiWordpress,
  Shopify: SiShopify,
  "OpenAI API basics": SiOpenai,
  "Git/GitHub": SiGithub,
  "VS Code": VscVscode,
  Postman: SiPostman,
  PrestaShop: SiShopify,
  "REST APIs": SiGit,
};

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skill set of Kishor Bahadur Gharti Chhetri.",
};

export default function SkillsPage() {
  return (
    <SectionWrapper title="Skills" description="Technologies and capabilities I use to deliver growth-focused products.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group) => (
          <article key={group.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <ul className="mt-3 space-y-2 text-[var(--muted)]">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill];
                return (
                  <li key={skill} className="flex items-center gap-2">
                    {Icon ? <Icon className="text-[var(--primary)]" /> : null}
                    <span>{skill}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
