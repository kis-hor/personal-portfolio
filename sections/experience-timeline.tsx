import { AnimatedReveal } from "@/components/animated-reveal";
import { experience } from "@/lib/site-data";

export function ExperienceTimeline() {
  return (
    <div className="relative space-y-8 border-l border-[var(--border)] pl-6">
      {experience.map((item, idx) => (
        <AnimatedReveal key={`${item.role}-${item.company}-${item.period}`} delay={idx * 0.1}>
          <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-[var(--accent)]" />
            <p className="text-sm text-[var(--muted)]">{item.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{item.role}</h3>
            <p className="text-sm text-[var(--muted)]">
              {item.company} | {item.location}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>• {responsibility}</li>
              ))}
            </ul>
          </div>
        </AnimatedReveal>
      ))}
    </div>
  );
}
