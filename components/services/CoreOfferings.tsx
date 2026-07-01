"use client";

import React from "react";
import { motion } from "framer-motion";

interface OfferingItem {
  id: string;
  title: string;
  description: string;
}

const offeringsData: OfferingItem[] = [
  {
    id: "01",
    title: "Website Design",
    description:
      "Crafting beautiful, high-converting digital interfaces tailored to your brand personality.",
  },
  {
    id: "02",
    title: "Branding",
    description:
      "Building cohesive visual identities, logos, and design systems that stand out in the market.",
  },
  {
    id: "03",
    title: "UX/UI",
    description:
      "User-centric wireframing and prototyping focused on seamless, intuitive human experiences.",
  },
  {
    id: "04",
    title: "Motion Design",
    description:
      "Bring your brand to life with stunning motion graphics and UI animations that enhance storytelling, engagement, and user experience.",
  },
  {
    id: "05",
    title: "SEO",
    description:
      "Optimizing your web architecture and contents to rank higher on major search engine results.",
  },
  {
    id: "06",
    title: "Content Creation",
    description:
      "Developing compelling digital assets, copy, and visuals aligned with your business solutions.",
  },
  {
    id: "07",
    title: "Landing Page",
    description:
      "High-performance standalone pages engineered purely to capture leads and drive conversion.",
  },
  {
    id: "08",
    title: "Webflow Development",
    description:
      "Translating pixel-perfect designs into clean, powerful, and easily manageable Webflow platforms.",
  },
];

export default function CoreOfferings() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* মেইন হোয়াইট কন্টেইনার বক্স */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-slate-100">
        {/* হেডার সেকশন */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16 gap-4">
          <div className="flex items-center gap-2 select-none">
            <span className="w-2.5 h-2.5 bg-slate-900 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight max-w-xl md:text-right">
            Our Core Offerings
          </h2>
        </div>

        {/* কার্ড গ্রিড (১ কলাম থেকে শুরু করে লার্জ স্ক্রিনে ৪ কলাম) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offeringsData.map((item, index) => {
            // জোড় ও বিজোড় ইনডেক্স অনুযায়ী রোটেট ডিরেকশন আলাদা করার জন্য (-২ বা +২ ডিগ্রি)
            const rotateDegree = index % 2 === 0 ? -2 : 2;

            return (
              <motion.div
                key={item.id}
                className="bg-[#E9ECEF]/60 text-slate-900 rounded-2xl p-6 h-56 flex flex-col justify-between cursor-pointer relative overflow-hidden group select-none border border-transparent"
                whileHover={{
                  backgroundColor: "#1E293B", // স্লেট-৯০০ ব্যাকগ্রাউন্ড
                  color: "#FFFFFF",
                  rotate: rotateDegree, // ফ্রেমর মোশন দিয়ে স্মুথ রোটেশন
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                {/* মেইন কন্টেন্ট এরিয়া (টপ সেকশন) */}
                <div className="space-y-3 w-full">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-500 transition-colors duration-200">
                      {item.id}
                    </span>
                  </div>

                  {/* টাইটেল সবসময় উপরেই ফিক্সড থাকবে */}
                  <h4 className="text-lg font-bold tracking-tight transition-all duration-300 group-hover:text-white">
                    {item.title}
                  </h4>

                  {/* ডেসক্রিপশন: ডিফল্ট অবস্থায় ইনভিজিবল, হোভার করলে টাইটেলের ঠিক নিচে স্মুথলি ভেসে উঠবে */}
                  <p className="text-xs text-slate-300 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-in-out">
                    {item.description}
                  </p>
                </div>

                {/* বটম সেকশন: ফ্লেক্স লেআউটের স্পেসিং ঠিক রাখার জন্য empty div */}
                <div className="mt-auto"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
