import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import WorkTogether from "@/components/services/WorkTogether";
import { staffAugmentationBentoData } from "@/data/staffAugmentationBentoData";
import ServiceBentoGrid from "@/components/services/ServiceBentoGrid";
// import HomeProject from "@/components/home/HomeProject";
import Testimonial from "@/components/home/Testimonial";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFaq from "@/components/services/ServiceFaq";

export const metadata = {
  title: "Staff-Augmentation Services",
};

const StaffAugmentationServicePage = () => {
  const staffAugmentationLogos = [
    "fas fa-users text-blue-400", // Ring 1 - Top
    "fas fa-user-tie text-indigo-400", // Ring 1 - Bottom
    "fas fa-handshake text-emerald-400", // Ring 2 - Top
    "fab fa-slack text-purple-400", // Ring 2 - Bottom
    "fab fa-jira text-blue-500", // Ring 2 - Left
    "fab fa-github text-white", // Ring 2 - Right
    "fas fa-laptop-house text-cyan-400", // Ring 3 - 0% (Top)
    "fas fa-briefcase text-amber-500", // Ring 3 - 25%
    "fas fa-file-contract text-teal-400", // Ring 3 - 75%
    "fas fa-clock text-orange-400", // Ring 3 - 100% (Bottom)
    "fas fa-id-card text-sky-400", // Ring 3 - Mobile Optimize 1
    "fas fa-chart-line text-pink-400", // Ring 3 - Mobile Optimize 2
  ];

  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      <HeroSection
        titleLine1="Scale Your Tech Team"
        titleLine2="With On-Demand Expert Talents"
        subtitle="Bridge your skill gaps instantly with our pre-vetted, elite software engineers and designers. No hiring liabilities, no overhead overheads—just top-tier professionals integrating seamlessly into your existing team workflows."
      />

      <ServiceDetailSection
        tag="Staff Augmentation"
        title="We Provide the Right Talent to Accelerate Your Product Roadmap"
        description="Stop losing months in recruitment cycles. Whether you need a single specialized full-stack developer or an entire agile product squad, we supply high-performing tech talent that aligns with your culture and sprints instantly."
        imageSrc="/images/services/staff-about.png"
        imageAlt="Team collaboration and agile developers working together"
        imagePosition="left"
      />

      <ServiceBentoGrid
        tag="Team Scaling Options"
        mainTitle="Hire Top 3% Pre-Vetted Tech Experts Tailored to Your Stack"
        items={staffAugmentationBentoData}
      />

      <Testimonial />

      <ServiceProcess
        serviceName="Talent Matching Process"
        orbitLogos={staffAugmentationLogos}
        steps={[
          {
            title: "Requirement Gathering",
            desc: "We analyze your project's current tech stack, team culture, sprint velocity, and the exact seniority required for the role.",
          },
          {
            title: "Curated Talent Matching",
            desc: "Within 48 hours, we provide a shortlisted pool of pre-vetted engineers who are technically evaluated for your specific needs.",
          },
          {
            title: "Seamless Onboarding",
            desc: "We manage contracts, legal compliances, and IT setups. The selected talents join your Slack, Jira, and GitHub from day one.",
          },
          {
            title: "Sustained Management & Support",
            desc: "We assign a dedicated account manager to monitor performance, satisfaction, and ensure zero attrition blockages in your sprints.",
          },
        ]}
      />

      {/* FAQ */}
      <div className="bg-white">
        <ServiceFaq service={["staff"]} />
      </div>

      <WorkTogether />
    </div>
  );
};

export default StaffAugmentationServicePage;
