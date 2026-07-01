"use client";
import React from "react";
import Image from "next/image";
import { affiliations } from "@/data/affiliations";

const AffiliationSection = () => {
  return (
    <section className="bg-slate-50/50 py-10 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-[14px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-10">
          WE ARE ASSOCIATED WITH
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-8">
          {affiliations.map((item) => (
            <div key={item.id} className="group transition-all duration-300">
              <Image
                src={item.img}
                alt={`${item.name} Logo`}
                width={130}
                height={40}
                priority={true}
                className="h-8 md:h-9 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationSection;
