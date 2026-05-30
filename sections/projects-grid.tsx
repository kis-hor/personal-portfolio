import Image from "next/image";
import { Card } from "@/components/card";
import { AnimatedReveal } from "@/components/animated-reveal";
import { projects } from "@/lib/site-data";

function ProjectSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: typeof projects;
}) {
  return (
    <section>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
          <p className="text-sm text-[var(--muted)]">{description}</p>
        </div>
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          {items.length} projects
        </span>
      </div>

      <div className="space-y-5">
        {items.map((project, idx) => {
          const primaryUrl = project.liveUrl ?? project.githubUrl;
          const preview = project.screenshots?.[0] ?? project.logo;

          return (
            <AnimatedReveal key={project.title} delay={idx * 0.04}>
              <Card className="p-0">
                <article className="grid overflow-hidden md:grid-cols-[1fr_1.2fr]">
                  <div className="border-b border-[var(--border)] md:border-b-0 md:border-r">
                    {preview ? (
                      <Image src={preview} alt={`${project.title} preview`} width={1200} height={700} className="aspect-video h-full w-full object-cover object-top" />
                    ) : (
                      <div className="flex h-full min-h-52 items-center justify-center bg-[var(--chip)] text-sm text-[var(--muted)]">Preview coming soon</div>
                    )}
                  </div>

                  <div className="p-5 md:p-6">
                    {project.logo ? (
                      <div className="mb-3 inline-flex overflow-hidden rounded-lg border border-[var(--border)] bg-white/95 p-2">
                        <Image src={project.logo} alt={`${project.title} logo`} width={160} height={48} className="h-9 w-auto object-contain" />
                      </div>
                    ) : null}

                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>

                    {project.overviewPoints?.length ? (
                      <div className="mt-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">Key Work</p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                          {project.overviewPoints.slice(0, 3).map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {project.impactPoints?.length ? (
                      <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--chip)]/40 p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">Impact Created</p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--foreground)]">
                          {project.impactPoints.slice(0, 3).map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="rounded-full bg-[var(--chip)] px-2.5 py-1 text-xs text-[var(--muted)]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-4 text-sm">
                      {primaryUrl ? (
                        <a className="font-medium text-[var(--primary)] hover:underline" href={primaryUrl} target="_blank" rel="noreferrer">
                          View Project
                        </a>
                      ) : null}
                      {project.githubUrl ? (
                        <a className="text-[var(--muted)] hover:text-[var(--foreground)] hover:underline" href={project.githubUrl} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      ) : null}
                      {project.liveUrl ? (
                        <a className="text-[var(--muted)] hover:text-[var(--foreground)] hover:underline" href={project.liveUrl} target="_blank" rel="noreferrer">
                          Live Site
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Card>
            </AnimatedReveal>
          );
        })}
      </div>
    </section>
  );
}

type ProjectsGridProps = {
  limit?: number;
};

export function ProjectsGrid({ limit }: ProjectsGridProps) {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;
  const devProjects = visibleProjects.filter((project) => project.category === "dev");
  const cmsProjects = visibleProjects.filter((project) => project.category === "cms");

  return (
    <div className="space-y-10">
      <ProjectSection
        title="Development Projects"
        description="Custom systems, automation, and product engineering work."
        items={devProjects}
      />
      <ProjectSection
        title="CMS & E-commerce Projects"
        description="Storefront optimization, SEO implementation, and conversion-focused execution."
        items={cmsProjects}
      />
    </div>
  );
}
