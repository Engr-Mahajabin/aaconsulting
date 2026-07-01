import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import WorkTogether from "@/components/services/WorkTogether";
import { fullConsultingBentoData } from "@/data/consultingServiceBentoData";
import ServiceBentoGrid from "@/components/services/ServiceBentoGrid";
// import HomeProject from "@/components/home/HomeProject";
import Testimonial from "@/components/home/Testimonial";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFaq from "@/components/services/ServiceFaq";

export const metadata = {
  title: "Consulting Services",
};

const ITConsultingPage = () => {
  const consultingLogos = [
    "fas fa-lightbulb text-yellow-400", // Ring 1 - Top
    "fas fa-project-diagram text-indigo-400", // Ring 1 - Bottom
    "fas fa-chart-bar text-teal-400", // Ring 2 - Top
    "fas fa-shield-alt text-red-400", // Ring 2 - Bottom
    "fas fa-comments text-cyan-400", // Ring 2 - Left
    "fas fa-cogs text-slate-400", // Ring 2 - Right
    "fas fa-map-signs text-amber-500", // Ring 3 - 0% (Top)
    "fas fa-chess text-purple-400", // Ring 3 - 25%
    "fas fa-file-alt text-blue-400", // Ring 3 - 75%
    "fas fa-user-check text-green-400", // Ring 3 - 100% (Bottom)
    "fas fa-money-bill-wave text-emerald-400", // Ring 3 - Mobile Optimize 1
    "fas fa-globe text-sky-400", // Ring 3 - Mobile Optimize 2
  ];

  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      <HeroSection
        titleLine1="Strategic IT Consulting"
        titleLine2="Driving Digital Transformation"
        subtitle="Align your technology strategy with your business goals. We provide expert advisory services, enterprise architecture design, and technology roadmaps to help you optimize operations, reduce risks, and scale efficiently."
      />

      {/* Detailed Service Explanation Section */}
      <ServiceDetailSection
        tag="IT Consulting"
        title="We Help You Navigate Complex Technology Decisions"
        description="Technology should drive growth, not bottlenecks. Our seasoned consultants analyze your current ecosystem, identify technical debt, and architect blueprint models that align perfectly with your long-term business objectives."
        imageSrc="/images/services/consulting-about.png"
        imageAlt="Business consultants analyzing enterprise architecture and tech stack roadmaps"
        imagePosition="left"
      />

      <ServiceBentoGrid
        tag="Consulting Services"
        mainTitle="Enterprise Advisory, Technology Strategy & Architecture Blueprints"
        items={fullConsultingBentoData}
      />

      <Testimonial />

      <ServiceProcess
        serviceName="Consulting & Advisory Process Flow"
        orbitLogos={consultingLogos}
        steps={[
          {
            title: "Discovery & Infrastructure Audit",
            desc: "We dive deep into your current workflows, legacy software stacks, and pain points to establish a transparent baseline of your entire technical footprint.",
          },
          {
            title: "Strategic Roadmap Design",
            desc: "We draft a comprehensive, step-by-step technological blueprint and investment roadmap, ensuring all solutions perfectly backup your operational goals.",
          },
          {
            title: "Vendor & Tech Evaluation",
            desc: "We assist in choosing the ideal tools, modern frameworks, and third-party vendors, running unbiased POCs (Proof of Concepts) to de-risk your investments.",
          },
          {
            title: "Governance & Change Management",
            desc: "We establish clean implementation protocols, compliance guardrails, and structured training guidelines to ensure your teams adopt new systems seamlessly.",
          },
        ]}
      />

      {/* FAQ */}
      <div className="bg-white">
        <ServiceFaq service={["consulting"]} />
      </div>
      <WorkTogether />
    </div>
  );
};

export default ITConsultingPage;
