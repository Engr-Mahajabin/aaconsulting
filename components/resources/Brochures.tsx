"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ব্রোশিয়ার ডেটা অ্যারে
const brochuresData = [
  {
    id: 1,
    title: "A & A Consulting Brief Overview",
    description:
      "A quick snapshot of our core expertise, milestones, and how we empower global businesses with technology.",
    year: "Overview",
    downloadUrl: "/brochures/Brief_Overview.pdf",
  },
  {
    id: 2,
    title: "Corporate Brochure 2024",
    description:
      "Deep dive into our enterprise solutions, software engineering frameworks, and advanced cloud technologies.",
    year: "2024",
    downloadUrl: "/brochures/Corporate_Brochure.pdf",
  },
  {
    id: 3,
    title: "Corporate Brochure 2022",
    description:
      "Explore our foundational journey, past case studies, and legacy infrastructure development consulting.",
    year: "2022",
    downloadUrl: "/brochures/Corporate_Overview.pdf",
  },
];

export default function Brochures() {
  return (
    <div className="w-full">
      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* ৩. Brochures Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {brochuresData.map((brochure) => (
            <motion.div
              key={brochure.id}
              initial={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
              }}
              className="relative group bg-white border border-slate-100 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300"
            >
              {/* Card Header Info */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  {/* Badge */}
                  <span className="text-xs font-bold bg-slate-50 text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                    {brochure.year}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {brochure.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {brochure.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={brochure.downloadUrl}
                download
                className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm shadow-blue-500/10"
              >
                <span>Download PDF</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
