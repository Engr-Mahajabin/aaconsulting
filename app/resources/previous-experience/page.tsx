import React from "react";
import ResourceHeroSection from "@/components/shared/HeroSection";
import PreviousExperience from "@/components/resources/PreviousExperience";

export const metadata = {
  title: "Previous Experience",
};

export default function PreviousExperiencePage() {
  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      {/* Hero Section */}
      <ResourceHeroSection
        titleLine2="Our Previous Experience"
        subtitle="Explore our extensive history of delivering engineering, consulting, and technological solutions across 70+ premier organizations and core industry sectors."
      />

      {/* Main Content */}
      <PreviousExperience />
    </div>
  );
}
