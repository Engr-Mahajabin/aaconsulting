"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/data/faqData";

const Faq = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className=" w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Left Side */}
        <div className="w-full lg:w-[35%] lg:top-24 pl-2 md:pl-0 select-none">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-[#0F172A] leading-[1.15] font-sans tracking-tight">
            Frequently <br className="hidden lg:block" /> Asked Questions
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full space-y-1">
          {faqData.map((item, index) => {
            const serialNumber = String(index + 1).padStart(2, "0");
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`transition-all duration-300 px-4 md:px-8 py-5 border-b ${
                  isOpen
                    ? "bg-[#F1F3F5] rounded-[20px] border-b-transparent"
                    : "bg-transparent border-b-zinc-200 hover:border-zinc-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between group py-2 cursor-pointer"
                >
                  <div className="flex items-center gap-6 md:gap-12 text-left flex-1 pr-4">
                    <span className="text-xs font-semibold text-zinc-500 tabular-nums min-w-[24px]">
                      {serialNumber}
                    </span>

                    <span
                      className={`text-[17px] md:text-lg lg:text-[20px] font-medium tracking-tight font-sans transition-colors ${
                        isOpen ? "text-slate-900" : "text-slate-800"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-black text-white"
                        : "bg-zinc-100 text-zinc-600 group-hover:bg-zinc-200"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} className="stroke-[2.5]" />
                    ) : (
                      <Plus size={18} className="stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Smooth Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.25, ease: "easeInOut" },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[48px] md:pl-[72px] pr-2 md:pr-12 pt-2 pb-4">
                        <p className="text-slate-600 leading-relaxed text-[13px] md:text-sm font-sans font-normal max-w-3xl">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
