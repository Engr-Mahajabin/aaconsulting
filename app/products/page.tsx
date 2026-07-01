import React from "react";
import { projectsData } from "@/data/projectsData";
import ProjectsList from "@/components/products/ProjectsList";
import HeroSection from "@/components/shared/HeroSection";

export const metadata = {
  title: "All Products & Case Studies",
};

export default function ProjectsPage() {
  const allProjects = projectsData;

  return (
    <main className="bg-[#F1F3F5] min-h-screen">
      {/* Hero section */}
      <HeroSection
        titleLine1="All of our Projects"
        subtitle="Every project had a business reason behind it. Explore our official products, software solutions, and comprehensive enterprise case studies."
      />

      {/* Products List */}
      <section className="pt-20 pb-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ProjectsList allProjects={allProjects} />
        </div>
      </section>
    </main>
  );
}
