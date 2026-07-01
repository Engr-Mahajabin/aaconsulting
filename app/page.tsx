import AboutService from "@/components/about/AboutService";
import CounterSection from "@/components/about/CounterSection";
import About from "@/components/home/About";
import AffiliationSection from "@/components/home/AffiliationsSection";
import ClientSection from "@/components/home/ClientSection";
import Faq from "@/components/home/Faq";
import FeatureSection from "@/components/home/FeatureSection";
import HeroImage from "@/components/home/HeroImage";
import HeroVideo from "@/components/home/HeroVideo";
import HomeProject from "@/components/home/HomeProject";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <main className="max-w-[2480px] bg-[#F1F3F5]">
      {/* <HeroImage /> */}
      <HeroVideo />
      <AffiliationSection />
      <section className="max-w-7xl mx-auto px-10 py-5">
        <About />
      </section>
      <AboutService />
      <HomeProject />
      <FeatureSection />
      <CounterSection />
      <section className="max-w-7xl mx-auto px-10 py-5">
        <ClientSection />
      </section>
      <Testimonial />
      <section className="w-full bg-white">
        <Faq />
      </section>
    </main>
  );
}

// bg-[#030924]
