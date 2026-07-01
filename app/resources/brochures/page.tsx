import React from "react";
import ResourceHeroSection from "@/components/shared/HeroSection";
import Brochures from "@/components/resources/Brochures";

export const metadata = {
  title: "Company Brochures",
};

export default function BrochuresPage() {
  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      {/* Resuable Hero Section */}
      <ResourceHeroSection
        titleLine2="Explore & Download Our Brochures"
        subtitle="Discover our comprehensive services, corporate capabilities, and
            technology stacks by downloading our official documents"
      />
      {/* Main content */}
      <Brochures />
    </div>
  );
}
