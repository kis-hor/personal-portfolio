import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { ServicesGrid } from "@/sections/services-grid";

export const metadata: Metadata = {
  title: "Services",
  description: "Services by Kishor Bahadur Gharti Chhetri across web development, e-commerce, SEO, and business systems.",
};

export default function ServicesPage() {
  return (
    <SectionWrapper title="Services" description="Solutions I provide to improve growth, operations, and digital performance.">
      <ServicesGrid />
    </SectionWrapper>
  );
}
