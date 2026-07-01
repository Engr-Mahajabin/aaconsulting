import React from "react";
import ResourceHeroSection from "@/components/shared/HeroSection";
import Certificates from "@/components/resources/Certificates";

export const metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      {/* Reusable Hero Section */}
      <ResourceHeroSection
        titleLine2="Our Professional Certifications"
        subtitle="Explore our industry-recognized credentials, specialized technical expertise, and verified competencies across leading technology platforms."
      />

      {/* Main content */}
      <Certificates />
    </div>
  );
}
