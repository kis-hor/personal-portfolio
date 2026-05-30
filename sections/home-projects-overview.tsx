import Image from "next/image";
import { projects } from "@/lib/site-data";

function ProjectOverviewGroup({ title, items, badge }: { title: string; items: typeof projects; badge: string }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          {badge}
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((project) => {
          const preview = project.screenshots?.[0] ?? project.logo;
          const primaryUrl = project.liveUrl ?? project.githubUrl;

          return (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              {preview ? (
                <div className="border-b border-[var(--border)]">
                  <Image src={preview} alt={`${project.title} preview`} width={1200} height={700} className="aspect-video w-full object-cover object-top" />
                </div>
              ) : null}
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-[var(--chip)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--primary)]">
                    {project.category}
                  </span>
                  <h4 className="text-base font-semibold">{project.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{project.shortDescription ?? project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full bg-[var(--chip)] px-2.5 py-1 text-xs text-[var(--muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
                {primaryUrl ? (
                  <div className="mt-4">
                    <a href={primaryUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-[var(--primary)] hover:underline">
                      View Project
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function HomeProjectsOverview() {
  const devProjects = projects.filter((project) => project.category === "dev").slice(0, 4);
  const cmsProjects = projects.filter((project) => project.category === "cms").slice(0, 4);

  return (
    <div className="space-y-10">
      <ProjectOverviewGroup title="Dev Projects" items={devProjects} badge="Product Engineering" />
      <ProjectOverviewGroup title="CMS Projects" items={cmsProjects} badge="E-commerce Growth" />
    </div>
  );
}
