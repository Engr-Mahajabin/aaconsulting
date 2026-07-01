// src/app/services/page.tsx
import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import CoreOfferings from "@/components/services/CoreOfferings";
//import ServicesList from "@/components/services/ServicesList";

export const metadata = {
  title: "Our Services & Expertise",
  description:
    "Explore the wide range of digital technology solutions and engineering services we deliver.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#F1F3F5] min-h-screen">
      {/* Global Hero section */}
      <HeroSection
        titleLine1="Explore Our Services"
        subtitle="We deliver high-end digital technology solutions tailored to your specific industry challenges and budget."
      />

      {/* Main Services Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto">
          <CoreOfferings />
        </div>
      </section>
    </main>
  );
}
