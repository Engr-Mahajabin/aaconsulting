import Interviews from "@/components/resources/Interviews";
import ResourceHeroSection from "@/components/shared/HeroSection";

export const metadata = {
  title: "Media Interviews",
};

export default function Page() {
  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      {/* Resuable Hero Section */}
      <ResourceHeroSection
        titleLine1="Media & Interviews"
        titleLine2="CEO's Interviews & Insights"
        subtitle="Watch our CEO's latest media appearances, panel discussions, and expert insights on global cybersecurity frameworks and tech consulting."
      />

      {/* Main content */}
      <main className="py-8">
        <Interviews />
      </main>
    </div>
  );
}
