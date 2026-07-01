import React from "react";
import ResourceHeroSection from "@/components/shared/HeroSection";
import Gallery from "@/components/resources/Gallery";

export const metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      {/* Reusable Hero Section */}
      <ResourceHeroSection
        titleLine2="Event Gallery"
        subtitle="Take a look at our footprints in major corporate events, national software expos, technology seminars, and global exhibitions."
      />

      {/* Main content */}
      <Gallery />
    </div>
  );
}
