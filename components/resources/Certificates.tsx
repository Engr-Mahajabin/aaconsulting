"use client";

import React from "react";
import { motion } from "framer-motion";
import { certificatesData } from "@/data/certificatesData";

// ১. টাইপ ডেফিনিশন
interface Certificate {
  id: number;
  category: string;
  title: string;
  image: string;
}

// Framer Motion Variants for Grid Container and Cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // একটির পর আরেকটি কার্ড সুন্দরভাবে সিকোয়েন্সে আসবে
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Certificates: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 md:px-12 font-sans selection:bg-sky-500 selection:text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {certificatesData.map((cert: Certificate) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Category Heading */}
            <h3 className="text-xl font-bold text-[#0b132a] mb-5 tracking-wide text-center group-hover:text-sky-600 transition-colors duration-300">
              {cert.category}
            </h3>

            {/* Image Box with Hover Zoom & Glow Effect */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full overflow-hidden rounded-lg border border-slate-100 shadow-md group-hover:shadow-2xl group-hover:border-sky-100 transition-all duration-300 bg-white p-2"
            >
              <div className="overflow-hidden rounded-md bg-slate-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificates;
