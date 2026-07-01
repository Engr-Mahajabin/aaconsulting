import React from "react";
import ResourceHeroSection from "@/components/shared/HeroSection";
import Partners from "@/components/resources/Partners";

export const metadata = {
  title: "Partners",
};

export default function PartnersPage() {
  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      {/* Reusable Hero Section */}
      <ResourceHeroSection
        titleLine2="Our Strategic Partners & Affiliations"
        subtitle="We collaborate with global technology leaders and local professional bodies to deliver cutting-edge enterprise-grade solutions."
      />

      {/* Main content */}
      <Partners />
    </div>
  );
}
