"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, FileText, Video, ArrowUpRight } from "lucide-react";

interface SeminarsItem {
  id: number;
  title: string;
  category: string;
  description: string;
  type: "video" | "image";
  mediaSrc: string;
  thumbnailSrc: string;
}

const seminarsData: SeminarsItem[] = [
  {
    id: 1,
    title:
      "Seminar on Cybersecurity awareness and policy guidelines in Bangladesh.",
    category: "Importance of Cyber Security",
    description:
      "An essential session focused on establishing nationwide digital asset protection frameworks, analyzing localized threats, and developing strategic policy guidelines for corporate compliance.",
    type: "video",
    mediaSrc: "/videos/seminar-1.mp4",
    thumbnailSrc: "/images/publications/seminar-1.jpg",
  },
  {
    id: 2,
    title: "Announcing that DCS & SMWFC for working together.",
    category: "Cyber Security & Tools",
    description:
      "A major collaborative announcement focusing on strategic defense integration, upcoming cybersecurity toolkits, and joined capability development to safeguard digital infrastructure.",
    type: "video",
    mediaSrc: "/videos/seminar-2.mp4",
    thumbnailSrc: "/images/publications/seminar-2.jpg",
  },
  {
    id: 3,
    title:
      "Discussion on how to improve Cyber Security Posture for your Organization by Making Framework Efficient...",
    category: "Cyber Security Trends And Career",
    description:
      "An industrial expert panel discussing methodologies to mature corporate defensive lines, efficient blueprint deployment, and expanding global job landscapes in cybersecurity.",
    type: "image",
    mediaSrc: "/images/publications/post-1-full.jpg",
    thumbnailSrc: "/images/publications/post-1.jpg",
  },
  {
    id: 4,
    title: "A Session to learn how to secure the enterprise system.",
    category: "Enterprise System",
    description:
      "Practical technical session highlighting server-side protections, zero-trust configurations, and modern network architectures required to safely operate enterprise applications.",
    type: "image",
    mediaSrc: "/images/publications/post-2-full.jpg",
    thumbnailSrc: "/images/publications/post-2.jpg",
  },
  {
    id: 5,
    title:
      "BASIS Standing Committee on Digital Security organize an Awareness Seminar on 'Endpoint Security'.",
    category: "Endpoint Security",
    description:
      "A high-profile seminar addressing client-side vulnerabilities, device control policies, and proactive containment of threat vectors targeting endpoint infrastructure.",
    type: "image",
    mediaSrc: "/images/publications/post-3-full.jpg",
    thumbnailSrc: "/images/publications/post-3.jpg",
  },
  {
    id: 6,
    title:
      "First meeting of the BASIS Standing Committee on Digital Security was held at BASIS Boardroom.",
    category: "Digital Security",
    description:
      "Official inaugural discussion covering future event roadmaps, structural goal setup, and collaborative planning for enhancing the national cyber resilience sector.",
    type: "image",
    mediaSrc: "/images/publications/meeting-1-full.jpg",
    thumbnailSrc: "/images/publications/meeting-1.jpg",
  },
];

export default function Seminars() {
  const [selectedItem, setSelectedItem] = useState<SeminarsItem | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 space-y-24 lg:space-y-32">
      {seminarsData.map((item, index) => {
        // জোড় ইনডেক্স হলে টেক্সট বামে-মিডিয়া ডানে, বিজোড় হলে মিডিয়া বামে-টেক্সট ডানে
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col lg:items-center gap-10 lg:gap-16 ${
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* ১. টেক্সট সাইড (আপনার আপলোড করা ইমেজের মত হুবহু স্ট্রাকচার) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {/* ছোট ডট ক্যাটাগরি */}
              <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-blue-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                {item.category}
              </div>

              {/* বড় বোল্ড টাইটেল */}
              <h2 className="text-2xl lg:text-3xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                {item.title}
              </h2>

              {/* বিস্তারিত ডেসক্রিপশন */}
              <p className="text-slate-500 text-sm lg:text-base leading-relaxed mb-6 max-w-xl">
                {item.description}
              </p>

              {/* অ্যাকশন বাটন / এক্সপ্লোর লিঙ্ক */}
              <button
                onClick={() => setSelectedItem(item)}
                className="group/link flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors w-fit pt-2"
              >
                {item.type === "video"
                  ? "Watch Session"
                  : "Explore Publication"}
                <ArrowUpRight
                  size={16}
                  className="transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </button>
            </div>

            {/* ২. মিডিয়া সাইড (ইমেজ বা ভিডিও থাম্বনেইল কন্টেইনার) */}
            <div className="w-full lg:w-1/2">
              <div
                onClick={() => setSelectedItem(item)}
                className="relative w-full aspect-[16/10] bg-slate-100 border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex items-center justify-center"
              >
                <Image
                  src={item.thumbnailSrc}
                  alt={item.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.01]"
                  sizes="(max-w-6xl) 50vw"
                />

                {/* আধুনিক ওভারলে এবং কন্ট্রোল আইকন */}
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/20 transition-colors duration-300 flex items-center justify-center">
                  {item.type === "video" ? (
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transform scale-95 group-hover:scale-100 transition-all duration-300">
                      <Play size={24} className="fill-current ml-1" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full flex items-center justify-center shadow-md transform opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                      <FileText size={18} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* ৩. মাল্টি-মিডিয়া লাইটবক্স মডাল (ক্লিক করলে ফুল ভিউ) */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-white">
                <div className="flex flex-col gap-0.5 max-w-[90%]">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-base font-bold text-slate-900 line-clamp-1">
                    {selectedItem.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 bg-slate-950 flex justify-center items-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center">
                  {selectedItem.type === "video" ? (
                    <video
                      src={selectedItem.mediaSrc}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Image
                      src={selectedItem.mediaSrc}
                      alt={selectedItem.title}
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
