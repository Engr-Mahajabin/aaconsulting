import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import ServiceDetailSection from "@/components/services/ServiceDetailSection";
import WorkTogether from "@/components/services/WorkTogether";
import { fullCybersecurityBentoData } from "@/data/cyberSecurityBentoData";
import ServiceBentoGrid from "@/components/services/ServiceBentoGrid";
// import HomeProject from "@/components/home/HomeProject";
import Testimonial from "@/components/home/Testimonial";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFaq from "@/components/services/ServiceFaq";

export const metadata = {
  title: "Cyber Security Services",
};

const CybersecurityServicePage = () => {
  const cybersecurityLogos = [
    "fas fa-shield-alt text-red-400", // Ring 1 - Top
    "fas fa-lock text-yellow-400", // Ring 1 - Bottom
    "fas fa-user-shield text-green-400", // Ring 2 - Top
    "fas fa-server text-indigo-400", // Ring 2 - Bottom
    "fas fa-network-wired text-blue-400", // Ring 2 - Left
    "fas fa-key text-amber-500", // Ring 2 - Right
    "fas fa-terminal text-purple-400", // Ring 3 - 0% (Top)
    "fas fa-bug text-orange-500", // Ring 3 - 25%
    "fas fa-eye text-cyan-400", // Ring 3 - 75%
    "fas fa-file-signature text-teal-400", // Ring 3 - 100% (Bottom)
    "fas fa-cloud text-sky-400", // Ring 3 - Mobile Optimization
    "fas fa-fingerprint text-emerald-400", // Ring 3 - Mobile Optimization
  ];

  return (
    <div className="bg-[#F1F3F5] min-h-screen">
      <HeroSection
        titleLine1="Fortifying Digital Assets"
        titleLine2="With End-to-End Cyber Security"
        subtitle="We safeguard your enterprise from evolving digital threats. From rigorous penetration testing and continuous vulnerability assessments to proactive threat hunting and compliance management—our expert defense systems keep your infrastructure bulletproof."
      />

      <ServiceDetailSection
        tag="Cybersecurity"
        title="We Mitigate Sophisticated Threats Before They Risk Your Operations"
        description="Standard firewalls aren't enough for today's threat landscape. We implement zero-trust architectures, advanced encryption standards, and continuous monitoring protocols to protect your sensitive data, giving your stakeholders absolute peace of mind."
        imageSrc="/images/services/cybersecurity-about.png"
        imageAlt="Cybersecurity security operations center and encryption view"
        imagePosition="left"
      />

      <ServiceBentoGrid
        tag="Security Services"
        mainTitle="Enterprise-Grade Defensive & Offensive Cyber Security Solutions"
        items={fullCybersecurityBentoData}
      />

      <Testimonial />

      <ServiceProcess
        serviceName="Cybersecurity & Threat Defense"
        orbitLogos={cybersecurityLogos}
        steps={[
          {
            title: "Assessment & Auditing",
            desc: "We initiate with deep architectural analysis, vulnerability scanning, and dark web exposure checks to accurately chart your existing attack surfaces.",
          },
          {
            title: "Penetration Testing",
            desc: "Our certified ethical hackers conduct simulated real-world attacks to identify hidden logical bugs, privilege escalations, and edge-case security cracks.",
          },
          {
            title: "Hardening & Integration",
            desc: "We remediate discovered flaws, set up strict access rules, deploy SIEM systems for real-time monitoring, and enforce a robust Zero-Trust security layout.",
          },
          {
            title: "24/7 Monitoring & Compliance",
            desc: "We deliver continuous threat hunting, proactive breach responses, and thorough compliance auditing to meet standard frameworks like ISO 27001, SOC 2, or HIPAA.",
          },
        ]}
      />

      <div className="bg-white">
        <ServiceFaq service={["cybersecurity"]} />
      </div>
      <WorkTogether />
    </div>
  );
};

export default CybersecurityServicePage;
