import AboutCompany from "@/components/about/AboutCompany";
import AboutService from "@/components/about/AboutService";
import CounterSection from "@/components/about/CounterSection";
import FounderSection from "@/components/about/FounderSection";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import Stats from "@/components/about/Stats";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Faq from "@/components/home/Faq";
import Testimonial from "@/components/home/Testimonial";
import HeroSection from "@/components/shared/HeroSection";
import React from "react";

export const metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <>
      <main className="bg-[#F1F3F5]">
        <HeroSection
          titleLine1="About Our Identity"
          subtitle="Learn more about our journey, our leadership, and our commitment to driving innovation and enterprise-grade technological solutions."
        />
        <AboutCompany />
        <Stats />
        <FounderSection />
        <MissionVisionValues />
        <AboutService />
        <WhyChooseUs />
        <CounterSection />
        <Testimonial />
        <section className="w-full bg-white">
          <Faq />
        </section>{" "}
      </main>
    </>
  );
};

export default page;
