import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import WorkTogether from "@/components/services/WorkTogether";
import { fullITTrainingBentoData } from "@/data/ITTrainingBentoData";
import ServiceBentoGrid from "@/components/services/ServiceBentoGrid";
// import HomeProject from "@/components/home/HomeProject";
import Testimonial from "@/components/home/Testimonial";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFaq from "@/components/services/ServiceFaq";

export const metadata = {
  title: "IT Training Services",
};

const ITTrainingServicePage = () => {
  const itTrainingLogos = [
    "fab fa-js text-yellow-400", // Ring 1 - Top
    "fab fa-react text-cyan-400", // Ring 1 - Bottom
    "fab fa-node-js text-green-400", // Ring 2 - Top
    "fab fa-python text-blue-500", // Ring 2 - Bottom
    "fas fa-graduation-cap text-purple-400", // Ring 2 - Left
    "fas fa-code text-indigo-400", // Ring 2 - Right
    "fab fa-html5 text-orange-500", // Ring 3 - 0% (Top)
    "fab fa-css3-alt text-blue-600", // Ring 3 - 25%
    "fab fa-git-alt text-orange-600", // Ring 3 - 75%
    "fas fa-book-reader text-teal-400", // Ring 3 - 100% (Bottom)
    "fas fa-certificate text-amber-400", // Ring 3 - Mobile Optimize 1
    "fas fa-laptop-code text-sky-400", // Ring 3 - Mobile Optimize 2
  ];

  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      <HeroSection
        titleLine1="Empowering Teams With"
        titleLine2="Advanced Enterprise IT Training"
        subtitle="Bridge the skills gap and accelerate digital transformation. We deliver rigorous, hands-on corporate training and professional certification tracks designed to master modern tech stacks, infrastructure management, and secure software development."
      />

      <ServiceDetailSection
        tag="IT Training"
        title="We Build High-Performance Engineering Teams"
        description="Standard generic tutorials don't solve real-world production bottlenecks. Our curriculum focuses on project-driven architecture, deep technical deep-dives, and production-grade best practices, transforming your workforce into agile tech leaders."
        imageSrc="/images/services/training-about.png"
        imageAlt="Interactive live training session and cloud infrastructure console view"
        imagePosition="left"
      />

      <ServiceBentoGrid
        tag="Training Programs"
        mainTitle="Professional IT & Corporate Capability Development Solutions"
        items={fullITTrainingBentoData}
      />

      <Testimonial />

      <ServiceProcess
        serviceName="Training & Skills Development Flow"
        orbitLogos={itTrainingLogos}
        steps={[
          {
            title: "Skill Gap Analysis",
            desc: "We begin by assessing your team's current technical proficiency and project goals to build a fully customized, outcome-oriented learning blueprint.",
          },
          {
            title: "Hands-on Sandbox Labs",
            desc: "We move away from passive watching into active building with interactive sandbox environments, mimicking your actual production environment architectures.",
          },
          {
            title: "Mentorship & Code Reviews",
            desc: "Our industry-expert consultants guide engineers through real-time debugging, clean code practices, architectural design reviews, and hackathons.",
          },
          {
            title: "Certification & Evaluation",
            desc: "We conclude with comprehensive capstone projects and standard assessment tracking to officially validate the deployment-ready skills of your team.",
          },
        ]}
      />

      {/* FAQ */}
      <div className="bg-white">
        <ServiceFaq service={["training"]} />
      </div>

      <WorkTogether />
    </div>
  );
};

export default ITTrainingServicePage;
