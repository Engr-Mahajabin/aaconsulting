"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryData, GalleryEvent } from "@/data/galleryData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Gallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 md:px-12 font-sans selection:bg-sky-500 selection:text-white">
      <div className="space-y-20">
        {galleryData.map((event: GalleryEvent) => (
          <section key={event.id} className="space-y-8">
            {/* Event Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b132a] text-center tracking-wide">
              {event.title}
            </h2>

            {/* Images Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
            >
              {event.images.map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-200 p-1.5"
                >
                  <div className="relative w-full h-full bg-slate-50 rounded-md overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={`${event.title} - ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
