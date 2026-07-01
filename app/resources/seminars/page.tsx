import ResourceHeroSection from "@/components/shared/HeroSection";
import Seminars from "@/components/resources/Seminars";

export const metadata = {
  title: "Seminars",
};

export default function Page() {
  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      {/* Hero Section */}
      <ResourceHeroSection
        titleLine1="Knowledge Hub"
        titleLine2="Publications & Seminars"
        subtitle="Explore our official research publications, digital security seminars, and collaborative tech events reshaping the cybersecurity landscape."
      />

      {/* Main content */}
      <main className="py-8">
        <Seminars />
      </main>
    </div>
  );
}
