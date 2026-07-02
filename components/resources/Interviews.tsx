"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface InterviewItem {
  id: number;
  title: string;
  topic: string;
  episode?: string;
  videoSrc: string;
}

const interviewsData: InterviewItem[] = [
  {
    id: 1,
    title:
      "Discussion on Cybersecurity with Bangladesh News 24 SCI TEC@24 Program",
    topic: "Importance of public awareness in cyber security",
    videoSrc: "/videos/interview-1.mp4",
  },
  {
    id: 2,
    title: "Discussion on Cyber Security in Financial and Health Institutions",
    topic: "Discussion in the field of Cybersecurity on the Financial Sector",
    episode: "Episode: 01",
    videoSrc: "/videos/interview-2.mp4",
  },
  {
    id: 3,
    title: "Discussion on Cyber Security in Financial and Health Institutions",
    topic:
      "Discussion in the field of Cybersecurity on the Healthcare Industry",
    episode: "Episode: 02",
    videoSrc: "/videos/interview-3.mp4",
  },
];

export default function Interviews() {
  const [selectedVideo, setSelectedVideo] = useState<InterviewItem | null>(
    null,
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {interviewsData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedVideo(item)}
            className="flex flex-col bg-transparent group cursor-pointer"
          >
            {/* Video topic header */}
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 border border-blue-200 bg-blue-50/50 px-3 py-1 rounded-full w-fit">
              {item.topic}
            </span>

            {/* Video container */}
            <div className="relative w-full aspect-video bg-slate-900 border border-slate-200 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
              <Image
                src={item.videoSrc}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-w-7xl) 33vw"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 bg-slate-950/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 group-hover:bg-blue-600 text-slate-900 group-hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform scale-95 group-hover:scale-100">
                  <Play size={24} className="fill-current ml-1" />
                </div>
              </div>
            </div>

            {/* Video title */}
            <h3 className="text-base font-bold text-slate-900 mt-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              {item.title}
            </h3>
            {item.episode && (
              <p className="text-sm font-medium text-slate-500 mt-1">
                {item.episode}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* Modal header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-white">
                <div className="flex flex-col gap-0.5 max-w-[90%]">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {selectedVideo.topic}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 line-clamp-1">
                    {selectedVideo.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-6 bg-slate-950 flex flex-col items-center justify-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                  <video
                    src={selectedVideo.videoSrc}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
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
