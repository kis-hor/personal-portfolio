import Image from "next/image";
import { Card } from "@/components/card";
import { AnimatedReveal } from "@/components/animated-reveal";
import { projects } from "@/lib/site-data";

export function ProjectsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <AnimatedReveal key={project.title} delay={idx * 0.05}>
          <Card className="h-full">
            {project.screenshots?.length ? (
              <div className="mb-4 grid gap-2">
                {project.screenshots.slice(0, 2).map((shot, shotIdx) => (
                  <div key={`${project.title}-${shotIdx}`} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                    <Image
                      src={shot}
                      alt={`${project.title} screenshot ${shotIdx + 1}`}
                      width={1200}
                      height={700}
                      className="h-40 w-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            ) : null}
            {project.logo ? (
              <div className="mb-4 overflow-hidden rounded-xl border border-[var(--border)] bg-white/95 p-3">
                <Image src={project.logo} alt={`${project.title} logo`} width={280} height={96} className="h-14 w-auto object-contain" />
              </div>
            ) : null}
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
            {project.impact ? <p className="mt-3 text-sm font-medium leading-relaxed text-[var(--accent)]">Impact: {project.impact}</p> : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-[var(--chip)] px-2.5 py-1 text-xs text-[var(--muted)]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 text-sm">
              {project.githubUrl ? (
                <a className="text-[var(--primary)] hover:underline" href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}
              {project.liveUrl ? (
                <a className="text-[var(--accent)] hover:underline" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : null}
            </div>
          </Card>
        </AnimatedReveal>
      ))}
    </div>
  );
}
