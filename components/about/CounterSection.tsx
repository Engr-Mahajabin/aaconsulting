"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Briefcase, Trophy, UserCheck } from "lucide-react";

const stats = [
  {
    number: 100,
    suffix: "+",
    label: "Project Completed",
    icon: <Briefcase className="w-10 h-10 text-white/30" />,
  },
  {
    number: 90,
    suffix: "+",
    label: "Satisfied Clients",
    icon: <Users className="w-10 h-10 text-white/30" />,
  },
  {
    number: 8,
    suffix: "+",
    label: "Company Award",
    icon: <Trophy className="w-10 h-10 text-white/30" />,
  },
  {
    number: 75,
    suffix: "+",
    label: "Repeat Customers",
    icon: <UserCheck className="w-10 h-10 text-white/30" />,
  },
];

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-r from-blue-900 to-blue-600 py-20 px-6 md:px-10 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="transform group-hover:scale-110 group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>

              <div className="text-4xl md:text-6xl font-black text-white/80 tracking-tighter">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={3}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>

              <p className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex flex-col">
        <div className="h-[2px] bg-gray-200 w-full"></div>
        <div className="h-[1.5px] bg-gray-200 w-full mt-1.5"></div>
        <div className="h-[1px] bg-gray-200 w-full mt-1.5"></div>
      </div>
    </section>
  );
};

export default CounterSection;
