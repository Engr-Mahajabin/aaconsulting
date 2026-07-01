"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  ArrowUpRight,
  BarChart3,
  Zap,
} from "lucide-react";
import Link from "next/link";

const AboutCompany = () => {
  const floatingEffect = (duration: number) => ({
    y: [0, -15, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  });

  const features = [
    {
      title: "Innovative IT Solutions",
      desc: "Custom application development to solve complex business challenges.",
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Cyber Security & Strategy",
      desc: "Ensuring enterprise infrastructure is secure and future-ready.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Strategic IT Consulting",
      desc: "Aligning your business goals with the latest technology.",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Application Modernization",
      desc: "Transforming systems into high-performance, modern digital platforms.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <section className="py-10 px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Our Company
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Driving Innovation & Digital Security for over{" "}
              <span className="text-blue-600">20 years.</span>
              <br />
              Your vision, our expertise.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl border-l-4 border-gray-300 pl-4">
              A&A Consulting Technology is a global powerhouse in full-service
              IT solutions, strategically operating from{" "}
              <span className="font-medium text-slate-800">
                Baltimore, Dhaka, and Dubai
              </span>
              . With over{" "}
              <span className="font-semibold text-blue-600">two decades</span>{" "}
              of industry excellence, we bridge the gap between complex
              technical challenges and innovative business success. Our
              multi-disciplinary team of seasoned Architects, Developers, and
              Engineers doesn't just deliver products—we architect long-term
              digital transformations. From{" "}
              <span className="italic">End-to-End Cyber Security</span> to{" "}
              <span className="italic">Specialized HIMS</span>, we stand by our
              clients through every stage of the technology lifecycle, ensuring
              your business remains resilient, secure, and ahead of the curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="p-2 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/contact">
            <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
              <span>Contact With Us</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>

        <div className="relative h-[500px] w-full flex items-center justify-center">
          <motion.div
            animate={floatingEffect(5) as any}
            className="relative z-10 w-3/4 aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-blue-900/10 z-10" />
            <img
              src="/images/about/middle-img.jpg"
              alt="Team working"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            animate={floatingEffect(4)}
            className="absolute top-0 left-4 w-32 h-32 rounded-lg overflow-hidden shadow-lg z-0 opacity-80"
          >
            <img
              src="/images/about/img-1.png"
              alt="Office Life"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={floatingEffect(6)}
            className="absolute -top-10 right-10 w-32 h-32 rounded-lg overflow-hidden shadow-lg z-0 opacity-60"
          >
            <img
              src="/images/about/img-2.png"
              alt="Consulting"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={floatingEffect(7)}
            className="absolute bottom-4 left-10 w-40 h-28 rounded-lg overflow-hidden shadow-lg z-20"
          >
            <img
              src="/images/about/img-3.png"
              alt="Development"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={floatingEffect(5.5)}
            className="absolute -bottom-10 right-4 w-36 h-36 rounded-lg overflow-hidden shadow-lg z-0 opacity-70"
          >
            <img
              src="/images/about/img-4.png"
              alt="Tech Solutions"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
