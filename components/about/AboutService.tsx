"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

const AboutService = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16 md:mb-20">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 select-none">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Industries we serve
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-[1.15] tracking-tight">
            For our Client's Specific Industry,{" "}
            <br className="hidden md:block" />
            we deliver them with high end
            <span className="text-blue-600">
              {" "}
              Digital Technology Solutions.
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl border-l-4 border-slate-200 pl-4">
            We just not only provide solutions and services; we partner with our
            Client's for their success within their budgets. Our architectural
            and implementation approach to ensure that our Client's business
            gets a state of the art solution that is aligned with their business
            and challenges.
          </p>
        </div>

        <div className="w-full lg:w-auto pt-4 lg:pt-0">
          <Link href="/contact" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-900 to-blue-600 text-white px-7 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 whitespace-nowrap text-sm group">
              <span>Talk to a consultant</span>
              <ArrowUpRight className="w-5 h-5 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {services.map((service) => {
          const IconComponent = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col items-start gap-6 relative overflow-hidden group"
            >
              <div className="w-14 h-14 bg-blue-50/70 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                <IconComponent className="w-6 h-6" />
              </div>

              <div className="space-y-3 relative z-10">
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <Link
                href={service.link}
                className="flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-wider mt-auto pt-4 relative z-10 group/link"
              >
                <span>Explore More</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>

              <div className="absolute -bottom-8 -right-8 opacity-[0.02] text-slate-900 group-hover:text-blue-600 group-hover:opacity-[0.04] transition-all duration-700 pointer-events-none select-none">
                <IconComponent size={160} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="flex justify-center mt-12 md:mt-16"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Link href="/services">
          <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap text-sm">
            <span>View All Services</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutService;
