"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { partnersData } from "@/data/partnersData";
import { affiliations } from "@/data/affiliations";

interface PartnerItem {
  id: number;
  name: string;
  logo?: string;
  img?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Partners: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section 1: Affiliations */}
        <section className="flex flex-col items-center">
          <div className="text-slate-900 px-6 py-2 mb-12 text-xl font-bold text-center hover:text-blue-600 transition-colors duration-200">
            Meet Our Affiliations
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl justify-center items-center"
          >
            {affiliations.map((item: PartnerItem) => {
              const imageSrc = item.img || item.logo || "";
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-4 flex items-center justify-center h-24 w-full shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                >
                  {/* Next.js Image with layout fill style */}
                  <Image
                    src={imageSrc}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-contain p-4"
                    priority={item.id <= 4}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Section 2: Partners */}
        <section className="flex flex-col items-center">
          <div className="text-slate-900 px-6 py-2 mb-12 text-xl font-bold text-center hover:text-blue-600 transition-colors duration-200">
            Meet Our Partners
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl justify-center items-center"
          >
            {partnersData.map((item: PartnerItem) => {
              const imageSrc = item.logo || item.img || "";
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-4 flex items-center justify-center h-24 w-full shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                >
                  <Image
                    src={imageSrc}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-contain p-4"
                    priority={item.id <= 4}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Partners;
