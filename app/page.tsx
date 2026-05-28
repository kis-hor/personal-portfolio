import { SectionWrapper } from "@/components/section-wrapper";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsGrid } from "@/sections/projects-grid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionWrapper title="Featured Projects" description="A selection of practical builds across web, e-commerce, and AI.">
        <ProjectsGrid />
      </SectionWrapper>
    </>
  );
}
