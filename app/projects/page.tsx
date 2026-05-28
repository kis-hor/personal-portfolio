import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { ProjectsGrid } from "@/sections/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Kishor Bahadur Gharti Chhetri.",
};

export default function ProjectsPage() {
  return (
    <SectionWrapper title="Projects" description="Production-oriented work and experiments.">
      <ProjectsGrid />
    </SectionWrapper>
  );
}
