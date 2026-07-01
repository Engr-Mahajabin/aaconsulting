import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import WorkTogether from "@/components/services/WorkTogether";
import { fullCloudServicesBentoData } from "@/data/cloudServiceBentoData";
import ServiceBentoGrid from "@/components/services/ServiceBentoGrid";
// import HomeProject from "@/components/home/HomeProject";
import Testimonial from "@/components/home/Testimonial";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFaq from "@/components/services/ServiceFaq";

export const metadata = {
  title: "Cloud Services",
};

const CloudServicesPage = () => {
  const cloudServicesLogos = [
    "fab fa-aws text-orange-400", // Ring 1 - Top
    "fab fa-docker text-sky-400", // Ring 1 - Bottom
    "fas fa-cloud text-blue-400", // Ring 2 - Top
    "fas fa-server text-indigo-400", // Ring 2 - Bottom
    "fab fa-google text-red-400", // Ring 2 - Left
    "fas fa-database text-emerald-400", // Ring 2 - Right
    "fas fa-infinity text-purple-400", // Ring 3 - 0% (Top)
    "fas fa-network-wired text-cyan-400", // Ring 3 - 25%
    "fas fa-shield-alt text-teal-400", // Ring 3 - 75%
    "fas fa-terminal text-green-400", // Ring 3 - 100% (Bottom)
    "fab fa-linux text-yellow-500", // Ring 3 - Mobile Optimize 1
    "fas fa-cubes text-pink-400", // Ring 3 - Mobile Optimize 2 (Kubernetes)
  ];

  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      <HeroSection
        titleLine1="Architecting Scalable Clouds"
        titleLine2="For Infinite Enterprise Growth"
        subtitle="Migrate, optimize, and scale with absolute confidence. From designing high-availability hybrid structures and automated DevOps pipelines to continuous serverless management—our cloud solutions maximize performance while slashing overhead costs."
      />

      {/* Detailed Service Explanation Section */}
      <ServiceDetailSection
        tag="Cloud Services"
        title="We Transition Your Legacy Infrastructure into Modern Cloud Architectures"
        description="A simple server lift-and-shift is never enough. We re-engineer and optimize cloud deployments utilizing infrastructure-as-code, advanced containerized security, and intelligent resource scaling to guarantee high availability and zero downtime."
        imageSrc="/images/services/cloud-about.png"
        imageAlt="Cloud multi-tenant servers and containerized cluster orchestration view"
        imagePosition="left"
      />

      <ServiceBentoGrid
        tag="Cloud Infrastructure"
        mainTitle="Next-Generation Cloud Engineering, Migration & DevSecOps Solutions"
        items={fullCloudServicesBentoData}
      />

      <Testimonial />

      <ServiceProcess
        serviceName="Cloud Architecture & Deployment Flow"
        orbitLogos={cloudServicesLogos}
        steps={[
          {
            title: "Cloud Readiness & Audit",
            desc: "We thoroughly evaluate your current on-premise workloads, data structures, and monthly compute costs to draft a highly efficient migration and TCO optimization strategy.",
          },
          {
            title: "Architecture Blueprinting",
            desc: "Our certified solutions architects map out a secure, multi-region environment using automated Infrastructure as Code (IaC) like Terraform, ensuring flawless scale capabilities.",
          },
          {
            title: "Data Migration & Transition",
            desc: "We securely move applications and database structures with zero-loss pipelines, active synchronization techniques, and zero disruption to your running business processes.",
          },
          {
            title: "DevSecOps & Managed Guardrails",
            desc: "We round up by implementing CI/CD deployment automation, deep logging and cloud SIEM visibility, continuous monitoring, and automated resource budget limits.",
          },
        ]}
      />

      {/* FAQ */}
      <div className="bg-white">
        <ServiceFaq service={["cloud"]} />
      </div>
      <WorkTogether />
    </div>
  );
};

export default CloudServicesPage;
