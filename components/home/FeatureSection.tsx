"use client";
import React from "react";
import { motion } from "framer-motion";
import { Gem, Truck, Users, Headset } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      id: "excellence",
      title: "We Deliver Excellence",
      desc: "A&A Consulting provides best-of-breed IT solutions, specialized in Application Development and End-to-End Cyber Security to hold your business to a higher standard.",
      icon: <Gem className="w-10 h-10" />,
    },
    {
      id: "deliveries",
      title: "Deliveries & Collection",
      desc: "We ensure fast executions and strategic technology integration, delivering complete life-cycle support for infrastructure, storage, and architecture needs.",
      icon: <Truck className="w-10 h-10" />,
    },
    {
      id: "team",
      title: "Expert Team",
      desc: "Our team consists of experienced Architects, Developers, and Engineers with over 20 years of expertise providing solutions for renowned global establishments.",
      icon: <Users className="w-10 h-10" />,
    },
    {
      id: "support",
      title: "24/7 We Work",
      desc: "As a customer-oriented IT firm, we stay with you as long as you need assistance, providing continuous guide and support after acquiring our products and services.",
      icon: <Headset className="w-10 h-10" />,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12 pb-16 lg:pb-36 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`relative group p-8 md:p-10 rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.01)]
            transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] hover:border-blue-500/30 flex flex-col items-center text-center
            ${index % 2 !== 0 ? "lg:translate-y-16" : ""}`}
          >
            <div className="mb-6 p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              {item.icon}
            </div>

            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold mb-4 leading-tight tracking-tight">
              {item.title}
            </h3>

            <p className="text-slate-500 text-sm leading-[1.7] mb-8 font-light font-sans">
              {item.desc}
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-auto px-8 py-2.5 rounded-full text-white text-sm font-medium tracking-wide bg-gradient-to-r from-blue-900 to-blue-600 
              shadow-[0_4px_15px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.45)] transition-all duration-300 active:scale-95"
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
