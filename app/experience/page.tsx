import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { ExperienceTimeline } from "@/sections/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Kishor Bahadur Gharti Chhetri.",
};

export default function ExperiencePage() {
  return (
    <SectionWrapper title="Experience" description="Professional responsibilities and impact.">
      <ExperienceTimeline />
    </SectionWrapper>
  );
}
