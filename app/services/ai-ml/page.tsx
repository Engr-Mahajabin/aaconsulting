import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import WorkTogether from "@/components/services/WorkTogether";
import { aiMlBentoData } from "@/data/aiMlBentoData";
import ServiceBentoGrid from "@/components/services/ServiceBentoGrid";
// import HomeProject from "@/components/home/HomeProject";
import Testimonial from "@/components/home/Testimonial";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFaq from "@/components/services/ServiceFaq";

export const metadata = {
  title: "AI-ML Services",
};

const AIMLServicePage = () => {
  const aiMlLogos = [
    "fab fa-python text-blue-500", // Ring 1 - Top
    "fas fa-brain text-purple-400", // Ring 1 - Bottom
    "fas fa-chart-pie text-pink-400", // Ring 2 - Top
    "fas fa-database text-emerald-400", // Ring 2 - Bottom
    "fas fa-microchip text-amber-400", // Ring 2 - Left
    "fas fa-infinity text-cyan-400", // Ring 2 - Right
    "fas fa-project-diagram text-indigo-400", // Ring 3 - 0% (Top)
    "fab fa-docker text-sky-400", // Ring 3 - 25%
    "fab fa-aws text-orange-400", // Ring 3 - 75%
    "fas fa-robot text-green-400", // Ring 3 - 100% (Bottom)
    "fas fa-search text-teal-400", // Ring 3 - Mobile Optimize 1
    "fas fa-network-wired text-blue-400", // Ring 3 - Mobile Optimize 2
  ];

  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      <HeroSection
        titleLine1="Intelligent AI & Machine"
        titleLine2="Learning Solutions for Tomorrow"
        subtitle="Empower your business with smart, data-driven automation. From custom generative AI applications and smart LLM fine-tuning to advanced predictive analytics—we build the intelligent engines that drive exponential growth."
      />

      <ServiceDetailSection
        tag="AI & Machine Learning"
        title="We Transform Raw Big Data Into Autopilot Business Intelligence"
        description="Standard systems process data, but our AI models understand it. We leverage cutting-edge machine learning algorithms, modern computer vision, and secure data processing architectures to deliver predictive insights, cut manual overheads, and bulletproof your scaling goals."
        imageSrc="/images/services/aiml-about.png"
        imageAlt="Artificial intelligence neural network illustration"
        imagePosition="left"
      />

      {/* Bento Grid */}
      <ServiceBentoGrid
        tag="AI-ML Solutions"
        mainTitle="Smart Engineering - Predictive Models, LLMs & Intelligent Automation"
        items={aiMlBentoData}
      />

      <Testimonial />

      <ServiceProcess
        serviceName="AI Model Development Process"
        orbitLogos={aiMlLogos}
        steps={[
          {
            title: "Data Assessment & Strategy",
            desc: "We analyze your existing business datasets, define core goals, map out security compliances, and architect a custom data pre-processing framework.",
          },
          {
            title: "Pipeline & Model Selection",
            desc: "Our engineers clean raw data and select optimal algorithms (or LLM baselines), training models with high-performance frameworks to guarantee precision.",
          },
          {
            title: "Testing & Hyperparameter Tuning",
            desc: "We rigorously test models against edge-cases, fine-tuning variables and configurations to eliminate bias, reduce latency, and ensure max accuracy.",
          },
          {
            title: "MLOps Deployment & Scale",
            desc: "We deploy models into scalable cloud environments with automated data loops, continuously optimizing performance with SLA-driven technical monitoring.",
          },
        ]}
      />

      {/* FAQ */}
      <div className="bg-white">
        <ServiceFaq service={["ai-ml"]} />
      </div>

      <WorkTogether />
    </div>
  );
};

export default AIMLServicePage;
