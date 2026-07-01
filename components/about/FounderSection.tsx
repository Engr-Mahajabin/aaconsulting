"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const FounderSection = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 text-slate-900 overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE: SIMPLE PROFILE PICTURE WITH ORANGE/BLUE BORDER */}
          <motion.div
            className="lg:col-span-3 flex justify-center lg:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-blue-900 to-blue-600 shadow-2xl">
              <img
                src="/images/about/CEO.png"
                alt="Shahzeb I Husain"
                className="w-full h-full object-cover rounded-full border-4 border-[#0B132B]"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: CLEAN TEXT CONTENT */}
          <motion.div
            className="lg:col-span-9 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Title */}
            <h2 className="text-md font-bold uppercase text-blue-600 tracking-widest mb-6">
              From the Founder
            </h2>

            {/* Blockquote Style Core Message */}
            <div className="relative mb-6 border-l-2 border-blue-600 pl-4">
              <p className="text-lg text-slate-600 font-medium italic leading-relaxed">
                "My mission is to blend{" "}
                <span className="text-blue-600">proof-grade cybersecurity</span>{" "}
                and <span className="text-blue-600">enterprise software</span>{" "}
                with visionary creative — to unlock{" "}
                <span className="text-blue-600">
                  growth, trust, and long-term impact
                </span>{" "}
                for every client."
              </p>
            </div>

            {/* Detailed Body with Embedded Highlights */}
            <div className="space-y-4 text-slate-900 leading-relaxed text-sm">
              <p>
                Leading the engineering, creative, and cybersecurity teams with
                one unified goal: to deliver world-class results. At A&A
                Consulting Technology, we don’t just build software — we craft
                intelligent, secure, and scalable digital experiences that solve
                real business challenges.
              </p>
              <p>
                With over{" "}
                <span className="text-blue-600 font-semibold">
                  28 years of expertise
                </span>{" "}
                in the IT arena, including two decades specializing in{" "}
                <span className="text-blue-600 font-semibold">
                  Security Governance, Privacy, and Cyber Security
                </span>
                , my focus has always been on combining elite engineering with
                absolute protection. Having served in leadership roles at{" "}
                <span className="text-blue-600 font-semibold">
                  IBM Corporation (US)
                </span>{" "}
                and{" "}
                <span className="text-blue-600 font-semibold">
                  Ernst & Young (E&Y US)
                </span>
                , I bring global executive experience directly into our systems
                integration and cloud solutions.
              </p>
              <p>
                Today, our operations across the{" "}
                <span className="text-blue-600 font-semibold">
                  United States and Bangladesh
                </span>{" "}
                drive technological excellence by building resilient
                infrastructures under strict global compliances like{" "}
                <span className="text-blue-600 font-semibold">
                  NIST, GDPR, HIPAA, and PCI-DSS
                </span>
                . We lead our global team to deliver future-ready solutions that
                help businesses grow with confidence.
              </p>
            </div>

            {/* Credentials / Designation Footer */}
            <div className="mt-6 pt-4 border-t border-gray-400">
              <h4 className="text-lg font-bold text-slate-900 tracking-wide">
                Shahzeb I Husain
              </h4>
              <p className="text-sm text-slate-900">
                Founder & Managing Director, A&A Consulting and Datapark BD
                Limited
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
