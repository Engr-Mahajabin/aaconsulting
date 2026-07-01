// src/components/shared/HeroSection.tsx
import React from "react";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  subtitle: string;
}

const HeroSection = ({
  titleLine1,
  titleLine2,
  subtitle,
}: HeroSectionProps) => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-950">
          {titleLine1}{" "}
          {titleLine2 && (
            <>
              <br /> {titleLine2}
            </>
          )}
        </h1>

        <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex justify-center pt-8">
          <button className="bg-gray-950 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
