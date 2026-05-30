import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/button";
import { HeroSection } from "@/sections/hero-section";
import { HomeProjectsOverview } from "@/sections/home-projects-overview";
import { ServicesGrid } from "@/sections/services-grid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionWrapper title="Top Projects" description="A quick snapshot of my strongest development and CMS project work.">
        <HomeProjectsOverview />
        <div className="mt-8">
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </SectionWrapper>
      <SectionWrapper title="Services" description="What I can help you build, optimize, and scale.">
        <ServicesGrid />
        <div className="mt-8">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
