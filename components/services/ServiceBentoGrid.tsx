"use client";

import React from "react";
import { BentoItem } from "@/data/servicesBentoData";

interface ServiceBentoGridProps {
  tag: string;
  mainTitle: string;
  items: BentoItem[];
}

const ServiceBentoGrid: React.FC<ServiceBentoGridProps> = ({
  tag,
  mainTitle,
  items,
}) => {
  const getDynamicColSpan = (index: number, totalItems: number) => {
    if (totalItems === 6) {
      if (index === 0) return "lg:col-span-6";
      if (index === 1 || index === 2) return "lg:col-span-3";
      return "lg:col-span-4";
    }
    return "lg:col-span-4";
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <section className="bg-white rounded-[40px] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 lg:p-16 space-y-12 relative overflow-hidden w-full">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-purple-50/30 rounded-full blur-[90px] pointer-events-none z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-4 relative z-10">
          <div className="lg:col-span-5 flex items-center gap-2 pt-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
              {tag}
            </span>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.15] text-black font-sans">
              {mainTitle}
            </h2>
          </div>
        </div>

        {/* Bento Grid Sub-cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 relative z-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-full group relative overflow-hidden bg-[#F8FAFC]/70 backdrop-blur-sm border border-zinc-200/50 rounded-[24px] p-6 md:p-8 flex flex-col justify-start min-h-[380px] md:min-h-[400px] transition-all duration-300 hover:bg-white hover:border-blue-500/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] ${getDynamicColSpan(
                index,
                items.length,
              )}`}
            >
              {/* Card Top: Number */}
              <div className="flex justify-between items-center relative z-10 mb-4">
                <span className="text-zinc-400 text-xs font-mono tracking-wider bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-zinc-200/60 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                  {item.number}
                </span>
              </div>

              {/* Card Middle */}
              <div className="w-full mb-6 flex items-center justify-center relative overflow-hidden rounded-xl h-[180px] min-h-[180px] bg-zinc-900/5 border border-zinc-100/60 shadow-[inset_0_2px_8px_rgba(0,0,0,0.01)] flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/90 via-transparent to-transparent z-10 group-hover:from-white/90 transition-all" />
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
              </div>

              {/* Card Bottom */}
              <div className="flex-grow flex flex-col space-y-2 relative z-10">
                {/* Title (No-clamp) */}
                <h3 className="text-xl font-bold text-slate-800 font-sans transition-colors group-hover:text-black whitespace-normal break-words leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-sans transition-colors whitespace-normal break-words">
                  {item.description}
                </p>
              </div>

              {/* Subtle Light Flare Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceBentoGrid;
