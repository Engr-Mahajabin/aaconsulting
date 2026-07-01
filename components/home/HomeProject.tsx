"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

const HomeProject = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="py-10 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Selected Work
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              Companies that closed the{" "}
              <span className="text-blue-600">perception gap</span>{" "}
              <br className="hidden md:block" />
              and what changed.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl border-l-4 border-gray-300 pl-4">
              We don’t just build software; we engineer measurable business
              impact. Our results-first approach bridges the gap between complex
              technical architecture and real-world commercial success.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap text-sm">
                <span>Got a project in mind?</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-slate-200/60 space-y-12 md:space-y-16">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <div
                  className={`lg:col-span-5 space-y-6 ${!isEven ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    {project.tag}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-1">
                        <div className="text-[15px] font-bold text-slate-900 tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/products/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 group transition-colors duration-200"
                    >
                      Explore
                      <ArrowUpRight className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 shadow-sm aspect-[16/10] group">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="/products">
              <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap text-sm">
                <span>View All Projects</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeProject;
