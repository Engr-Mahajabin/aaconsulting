"use client";

import React from "react";
import Link from "next/link";

const WorkTogether = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:px-8">
      <div className="w-full bg-white border border-zinc-100 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-14 lg:p-16 space-y-6">
        {/* Top Section */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black block" />
          <span className="text-sm font-medium text-zinc-800 font-sans">
            What is next
          </span>
        </div>

        {/* Bottom Section: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
          {/* Left Column: Big Heading (Occupies 5 cols on large screens) */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-[46px] font-bold text-black tracking-tight leading-[1.1] font-sans">
              Let’s work together!
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-zinc-800 text-lg md:text-xl font-normal leading-relaxed font-sans">
              Let’s bring your vision to life and transform your ideas into a
              powerful, unforgettable brand that drives growth and success!
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {/* Gray Filled Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#E5E7EB]/70 hover:bg-[#E5E7EB] text-black font-medium px-6 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Schedule a call 👏
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
