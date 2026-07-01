"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { flyersData, FlyerItem } from "@/data/flyersData"; // পাথটি আপনার প্রজেক্ট অনুযায়ী চেক করে নিন

export default function Flyers() {
  const [selectedFlyer, setSelectedFlyer] = useState<FlyerItem | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* ১. ফ্লায়ার গ্রিড সেকশন */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {flyersData.map((flyer) => (
          <motion.div
            key={flyer.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedFlyer(flyer)}
            className="flex flex-col items-center bg-transparent group cursor-pointer"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-200">
              {flyer.title}
            </h3>

            <div className="relative w-full aspect-[3/4] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
              <Image
                src={flyer.imageSrc}
                alt={flyer.title}
                fill
                /* পরিবর্তন: object-cover বাদ দিয়ে object-contain এবং p-3 (padding) দেওয়া হয়েছে */
                className="object-contain object-center p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-w-7xl) 33vw"
              />

              {/* হোভার ওভারলে */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white text-slate-900 font-semibold px-5 py-2.5 rounded-xl shadow-md transition-transform duration-200 text-sm transform scale-95 group-hover:scale-100">
                  View Flyer
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ২. ক্লিন লাইটবক্স মডাল (নিচের বাটন ছাড়া) */}
      <AnimatePresence>
        {selectedFlyer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* ব্যাকড্রপ ওভারলে */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFlyer(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* মডাল বক্স */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
            >
              {/* মডাল হেডার */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-white">
                <h2 className="text-lg font-bold text-slate-900 line-clamp-1">
                  {selectedFlyer.title}
                </h2>
                <button
                  onClick={() => setSelectedFlyer(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* মডাল বডি - শুধু ফ্লায়ার ইমেজ */}
              <div className="p-6 overflow-y-auto bg-slate-50 flex flex-col items-center flex-grow">
                {/* ট্রিক: এই খালি ডিভটি হেডার বর্ডার এবং ইমেজের মাঝে ২৫ পিক্সেল গ্যাপ তৈরি করবেই */}
                <div className="w-full h-2 block shrink-0" />

                {/* ইমেজ কন্টেইনার - এখানে my-2 বা mt-2 দিয়ে সেফটি মার্জিন দেওয়া হয়েছে */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner mb-6 shrink-0">
                  <Image
                    src={selectedFlyer.imageSrc}
                    alt={selectedFlyer.title}
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
