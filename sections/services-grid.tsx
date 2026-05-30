import { Card } from "@/components/card";
import { AnimatedReveal } from "@/components/animated-reveal";
import { services } from "@/lib/site-data";

export function ServicesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {services.map((service, idx) => (
        <AnimatedReveal key={service.title} delay={idx * 0.05}>
          <Card className="h-full">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">What I Deliver</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </AnimatedReveal>
      ))}
    </div>
  );
}
