// app/services/development/page.tsx
import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import WorkTogether from "@/components/services/WorkTogether";
import { fullDevelopmentBentoData } from "@/data/servicesBentoData";
import ServiceBentoGrid from "@/components/services/ServiceBentoGrid";
import HomeProject from "@/components/home/HomeProject";
import Testimonial from "@/components/home/Testimonial";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFaq from "@/components/services/ServiceFaq";

export const metadata = {
  title: "Development Services",
};

const DevelopmentServicePage = () => {
  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      <HeroSection
        titleLine1="Engineering Scalable Software"
        titleLine2="From Concept to Enterprise Reality"
        subtitle="We build robust, high-performance digital architectures tailored for growth. From complex web applications and custom SaaS platforms to enterprise systems and native mobile apps—our end-to-end development brings your vision to life."
      />

      {/* Detailed Service Explanation Section */}
      <ServiceDetailSection
        tag="Development"
        title="We Transform Complex Specifications Into Functional Reality"
        description="Your core product needs more than a standard template. We write clean, resilient, enterprise-grade code that prioritizes speed, security, and absolute maintainability, giving your business a bulletproof foundation to scale from."
        imageSrc="/images/services/development-about.png"
        imageAlt="Development architecture and interface view"
        imagePosition="left"
      />
      <ServiceBentoGrid
        tag="Development Services"
        mainTitle="Software Engineering - Enterprise & Full-Stack Development Solutions"
        items={fullDevelopmentBentoData}
      />
      <HomeProject />
      <Testimonial />
      <ServiceProcess
        serviceName="Software & Web Engineering"
        orbitLogos={[
          "fab fa-react", // Ring 1 (Inner)
          "fab fa-node-js", // Ring 1 (Inner)
          "fab fa-js", // Ring 2 (Middle)
          "fab fa-python", // Ring 2 (Middle)
          "fab fa-aws", // Ring 2 (Middle)
          "fab fa-docker", // Ring 3 (Outer)
          "fas fa-database", // Ring 3 (Outer)
          "fab fa-git-alt", // Ring 3 (Outer)
        ]}
        steps={[
          {
            title: "Discovery & Strategy",
            desc: "We begin by analyzing your business vision, user personas, and compliance needs to create a bulletproof product architecture and risk-reduced roadmap.",
          },
          {
            title: "High-Fidelity Prototyping",
            desc: "Before extensive coding, we validate user journeys through high-fidelity interactive UI/UX designs and functional MVPs to ensure alignment.",
          },
          {
            title: "Agile Full-Stack Engineering",
            desc: "Our teams build with clean architecture, strict version control, and modern tech stacks, implementing CI/CD automation for faster and highly secure releases.",
          },
          {
            title: "QA, Launch & Scale",
            desc: "Following rigorous testing, we ensure zero-downtime deployment. Post-launch, we provide continuous optimization and SLA-driven 24/7 technical support.",
          },
        ]}
      />
      <div className="bg-white">
        <ServiceFaq service={["enterprise", "saas", "website", "app"]} />
      </div>
      <WorkTogether />
    </div>
  );
};

export default DevelopmentServicePage;
