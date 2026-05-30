import Image from "next/image";
import { SiLaravel, SiNextdotjs, SiPhp, SiPrestashop, SiReact, SiShopify, SiTailwindcss, SiTypescript, SiWordpress } from "react-icons/si";
import { Button } from "@/components/button";
import { AnimatedReveal } from "@/components/animated-reveal";
import { siteConfig } from "@/lib/site-data";

const spotlightSkills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
];

const cmsSkills = [
  { name: "Shopify", icon: SiShopify },
  { name: "WordPress", icon: SiWordpress },
  { name: "PrestaShop", icon: SiPrestashop },
];

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-10 pt-16 md:grid-cols-[1.2fr_0.8fr] md:pb-16 md:pt-24">
      <div>
        <AnimatedReveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">Portfolio</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{siteConfig.name}</h1>
          <p className="mt-4 max-w-3xl text-lg text-[var(--muted)] md:text-xl">{siteConfig.title}</p>
          <p className="mt-6 max-w-2xl text-[var(--muted)]">
            I build growth-ready products across web, e-commerce, and AI with measurable outcomes in conversion, traffic,
            Core Web Vitals, and revenue-focused digital operations.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.07} className="mt-7 grid gap-3 sm:grid-cols-3">
          {siteConfig.highlights.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-2xl font-semibold text-[var(--primary)]">{metric.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[var(--muted)]">{metric.label}</p>
            </div>
          ))}
        </AnimatedReveal>

        <AnimatedReveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
          <Button href="/projects">View Projects</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
          <Button href={siteConfig.resume} variant="secondary" className="border-[var(--primary)] text-[var(--primary)]">
            Download Resume
          </Button>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15} className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-sm uppercase tracking-wide text-[var(--muted)]">Core Stack</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {spotlightSkills.map(({ name, icon: Icon }) => (
              <span key={name} className="inline-flex items-center gap-2 rounded-full bg-[var(--chip)] px-3 py-1.5 text-sm text-[var(--foreground)]">
                <Icon className="text-[var(--primary)]" />
                {name}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm uppercase tracking-wide text-[var(--muted)]">CMS</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {cmsSkills.map(({ name, icon: Icon }) => (
              <span key={name} className="inline-flex items-center gap-2 rounded-full bg-[var(--chip)] px-3 py-1.5 text-sm text-[var(--foreground)]">
                <Icon className="text-[var(--accent)]" />
                {name}
              </span>
            ))}
          </div>
        </AnimatedReveal>
      </div>

      <AnimatedReveal delay={0.15} className="mx-auto w-full max-w-sm">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-lg shadow-black/20">
          <Image
            src={siteConfig.heroImage}
            alt="Kishor Bahadur Gharti Chhetri"
            width={700}
            height={900}
            priority
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </AnimatedReveal>
    </section>
  );
}
