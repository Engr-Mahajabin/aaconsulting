"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { clientLogos } from "@/data/clientsData";

const ClientSection = () => {
  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-white py-10 px-10 rounded-[40px] max-w-[1400px] mx-auto my-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,2.5fr] gap-10 md:gap-16 items-start mb-16">
        <div className="flex items-center gap-4">
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Who we work with
          </h2>
        </div>

        <div className="text-2xl md:text-3xl leading-tight font-normal text-slate-800 tracking-tight">
          We typically work with{" "}
          <span className="text-slate-400">Renowned Global Establishments</span>
          , leveraging our 20+ years of industry experience, and{" "}
          <span className="text-slate-400">Complex Organizations</span>{" "}
          requiring strategic planning and complete life-cycle support from our
          world-class architects.
        </div>
      </div>

      <div className="">
        <h3 className="text-center text-[10px] font-bold uppercase text-slate-900 tracking-[0.3em] mb-12">
          OUR CLIENTS
        </h3>

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            className="flex gap-20 md:gap-32 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 300,
              repeat: Infinity,
            }}
          >
            {doubledLogos.map((logo, index) => (
              <a
                key={`${logo.id}-${index}`}
                href={(logo as any).url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="h-10 md:h-12 w-auto object-contain px-2"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
