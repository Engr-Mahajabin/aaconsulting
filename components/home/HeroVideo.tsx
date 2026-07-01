"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroVideo = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center py-20">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/home/hero-poster.png"
          className="h-full w-full object-cover pointer-events-none opacity-80"
        >
          <source src="/images/home/hero_video1.webm" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Learn from the Past,
            <br />
            Plan for the Future,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Holding at a Higher Standard.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-10 text-zinc-300 max-w-2xl font-sans leading-relaxed text-center mx-auto">
            20+ years of Global Experience in IT Consulting and Application
            Development, your Strategic Partner from Implementation to Long-term
            Support.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center w-full">
            <Link href="/about" className="inline-block">
              <button className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white shadow-lg shadow-blue-900/20 active:scale-95 duration-200 px-8 py-3.5 rounded-xl font-medium transition-all cursor-pointer">
                Learn More
              </button>
            </Link>

            <Link href="/contact" className="inline-block">
              <button className="border border-white/80 hover:bg-white hover:text-black hover:border-white active:scale-95 duration-200 px-8 py-3.5 rounded-xl font-medium transition-all cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroVideo;
