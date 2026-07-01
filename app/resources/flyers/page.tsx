import React from "react";
import Flyers from "@/components/resources/Flyers";
import ResourceHeroSection from "@/components/shared/HeroSection";

export const metadata = {
  title: "Company Flyers", 
};

export default function FlyersPage() {
  return (
    <div className="w-full bg-[#F1F3F5] min-h-screen">
      {/* Hero Section*/}
      <ResourceHeroSection
        titleLine1="Cyber Security Flyers"
        subtitle="Explore and download our official cybersecurity awareness and corporate compliance flyers."
      />

      {/* Main content */}
      <Flyers />
    </div>
  );
}
