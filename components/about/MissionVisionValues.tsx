"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ValueItem {
  id: string;
  title: string;
  description: string;
}

const MissionVisionValues = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const valuesData: ValueItem[] = [
    {
      id: "01",
      title: "Trust & Transparency",
      description:
        "Trust forms the bedrock of our global relationships. We prioritize transparency, reliability, and technical integrity in all our architecture designs and client interactions.",
    },
    {
      id: "02",
      title: "Clear Communication",
      description:
        "Effective communication is key to solving complex cloud and data challenges. We believe in clear, concise messaging to ensure stakeholders and engineering teams stay aligned.",
    },
    {
      id: "03",
      title: "Absolute Integrity",
      description:
        "We hold our work to the highest standards. Our commitment to integrity drives our security assessments, ensuring fully compliant systems that protect your business foundation.",
    },
    {
      id: "04",
      title: "Building Lasting Relationships",
      description:
        "Through robust engineering, reliable data protection, and continuous support, we ensure that every deployment fosters a long-term, successful, and rewarding partnership.",
    },
  ];

  return (
    <section className="py-10 text-slate-900">
      <div className="max-w-7xl mx-auto px-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-start pb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:col-span-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Our Mission
            </span>
          </div>

          <div className="md:col-span-9">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight max-w-4xl">
              To engineer secure, high-performance digital solutions and provide
              a resilient global technology architecture for every partner we
              work with.
            </h2>
          </div>
        </motion.div>

        <div className="mt-16 space-y-8">
          <motion.div
            className="max-w-7xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          ></motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/60 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Our values and commitments
              </span>
            </div>
            {valuesData.map((item: ValueItem, index: number) => (
              <div
                key={item.id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 items-start ${
                  index === 0
                    ? "pb-8"
                    : index === valuesData.length - 1
                      ? "pt-4"
                      : "py-4"
                }`}
              >
                <div className="md:col-span-4 flex items-start gap-4">
                  <span className="text-sm font-semibold text-zinc-500 ">
                    {item.id}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-900 tracking-tight">
                    {item.title}
                  </h4>
                </div>

                <div className="md:col-span-8">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
