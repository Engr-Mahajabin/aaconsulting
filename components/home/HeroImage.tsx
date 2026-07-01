"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroImage = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home/hero_img.jpg"
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-20 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Learn from the Past,
            <br /> Plan for the Future,
            <br /> Holding at a Higher Standard.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            20+ years of global excellence in IT consulting and development.
            Your strategic partner from implementation to long-term support
          </p>
          <div className="flex gap-4">
            <Link href="/about">
              <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-md duration-300  px-8 py-3 rounded-md font-medium transition">
                Learn More
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-medium transition">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroImage;
