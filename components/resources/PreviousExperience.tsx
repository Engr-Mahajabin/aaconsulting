// src/components/resources/PreviousExperience.tsx
"use client";

import React, { useState } from "react";
import { clientLogos, ClientLogo } from "@/data/clientsData";

export default function PreviousExperience() {
  const [activeTab, setActiveTab] = useState<string>("All");

  // ডাইনামিক ইন্ডাস্ট্রি ক্যাটাগরি লিস্ট
  const industries: string[] = [
    "All",
    "Aviation",
    "Retail & Commerce",
    "Financial",
    "Federal Government",
    "Health Care",
    "Insurance",
    "Gaming",
    "Transportation",
    "Technology",
    "Automotive",
    "Educational Institutions",
    "Sports",
    "Oil and Gas",
    "Hospitality",
    "State and Local Government",
  ];

  // ফিল্টার লজিক
  const filteredExperience: ClientLogo[] =
    activeTab === "All"
      ? clientLogos
      : clientLogos.filter((item: ClientLogo) => item.industry === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ক্যাটাগরি ফিল্টার ট্যাব বাটন */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {industries.map((industry: string) => (
          <button
            key={industry}
            onClick={() => setActiveTab(industry)}
            className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
              activeTab === industry
                ? "bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* লোগো শোকেস কন্টেইনার */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        {/* সেকশন সাব-টাইটেল */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {activeTab === "All"
              ? "Our Past Performance & Experience"
              : `${activeTab} Sector Track Record`}
          </p>
        </div>

        {/* লোগো গ্রিড */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {filteredExperience.map((item: ClientLogo) => (
            <div
              key={item.id}
              className="w-full flex justify-center items-center p-4 h-20 group"
              title={item.name}
            >
              <img
                src={item.img}
                alt={item.name}
                className="max-h-12 max-w-[140px] object-contain transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

        {/* সেফটি নেট */}
        {filteredExperience.length === 0 && (
          <div className="text-center py-8 text-slate-400">
            No previous experience recorded in this category.
          </div>
        )}
      </div>
    </div>
  );
}
