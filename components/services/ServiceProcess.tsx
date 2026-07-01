"use client";

import React from "react";

interface Step {
  title: string;
  desc: string;
}

interface ServiceProcessProps {
  serviceName?: string;
  orbitLogos?: string[];
  steps: Step[];
}

const TechOrbit: React.FC<{ logos?: string[] }> = ({ logos = [] }) => {
  const defaultLogos = [
    "devicon-nextjs-original text-white",
    "devicon-typescript-plain text-blue-400",
    "fab fa-react text-cyan-400",
    "fab fa-node-js text-green-400",
    "fab fa-php text-indigo-400",
    "laravel-custom-svg",
    "fab fa-js text-yellow-400",
    "fab fa-python text-blue-500",
    "fab fa-aws text-orange-400",
    "fab fa-docker text-sky-400",
    "fas fa-database text-emerald-400",
    "fab fa-git-alt text-orange-600",
  ];

  const finalLogos = logos.length >= 12 ? logos : defaultLogos;

  return (
    <div className="relative w-full max-w-[500px] h-[340px] md:h-[500px] flex items-center justify-center mx-auto mb-8 md:mb-12 select-none overflow-visible">
      {/* Tailwind Extended Utility Styles Injection */}
      <style>{`
        @keyframes orbit-spin-normal {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-orbit-normal { animation: orbit-spin-normal var(--duration, 20s) linear infinite; }
        .animate-orbit-reverse { animation: orbit-spin-reverse var(--duration, 20s) linear infinite; }
        .icon-box {
          position: absolute;
          transform: translate(-50%, -50%);
          background-color: #0f172a;
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 0.75rem;
          padding: 0.65rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
        }
      `}</style>

      {/* Center Glow Core */}
      <div className="absolute w-24 h-24 bg-blue-500 rounded-full blur-[60px] opacity-40 animate-pulse"></div>
      <div className="z-10 bg-slate-950 border border-blue-400/40 p-5 rounded-full shadow-[0_0_40px_rgba(56,189,248,0.3)]">
        <i className="fas fa-atom text-4xl text-blue-400 animate-[spin_10s_linear_infinite]"></i>
      </div>

      {/* ----------------- Ring 1: Inner (170px) ----------------- */}
      <div
        className="absolute rounded-full border border-dashed border-blue-400/30 animate-orbit-normal"
        style={
          {
            width: "170px",
            height: "170px",
            "--duration": "15s",
          } as React.CSSProperties
        }
      >
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "0%",
              left: "50%",
              "--duration": "15s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[0]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "100%",
              left: "50%",
              "--duration": "15s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[1]} text-xl`}></i>
        </div>
      </div>

      {/* ----------------- Ring 2: Middle (300px) ----------------- */}
      <div
        className="absolute rounded-full border border-dashed border-purple-400/25 animate-orbit-reverse"
        style={
          {
            width: "300px",
            height: "300px",
            "--duration": "25s",
          } as React.CSSProperties
        }
      >
        <div
          className="icon-box animate-orbit-normal"
          style={
            {
              top: "0%",
              left: "50%",
              "--duration": "25s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[2]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-normal"
          style={
            {
              top: "100%",
              left: "50%",
              "--duration": "25s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[3]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-normal"
          style={
            {
              top: "50%",
              left: "0%",
              "--duration": "25s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[4]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-normal"
          style={
            {
              top: "50%",
              left: "100%",
              "--duration": "25s",
            } as React.CSSProperties
          }
        >
          {finalLogos[5] === "laravel-custom-svg" ? (
            <svg
              className="w-6 h-6 text-red-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.127 21.651l-4.04-2.316c-.675-.386-1.087-1.096-1.087-1.87v-4.632c0-.774.412-1.484 1.087-1.87l4.04-2.316c.677-.388 1.503-.388 2.18 0l4.04 2.316c.675.386 1.087 1.096 1.087 1.87v4.632c0 .774-.412 1.484-1.087 1.87l-4.04 2.316c-.677.388-1.503.388-2.18 0l-4.04-2.316c.675-.386 1.087-1.096 1.087-1.87v-4.632c0-.774-.412-1.484-1.087-1.87zm0-9.264l-4.04-2.316c-.677-.388-1.503-.388-2.18 0l-4.04 2.316c.675.386-1.087 1.096-1.087 1.87v4.632c0 .774.412 1.484 1.087 1.87l4.04 2.316c.677.388 1.503.388 2.18 0l4.04-2.316c.675-.386 1.087-1.096 1.087-1.87V7.625c0-.774-.412-1.484-1.087-1.87z" />
            </svg>
          ) : (
            <i className={`${finalLogos[5]} text-xl`}></i>
          )}
        </div>
      </div>

      {/* ----------------- Ring 3: Outer (440px) ----------------- */}
      <div
        className="absolute rounded-full border border-dashed border-cyan-400/15 animate-orbit-normal hidden md:block"
        style={
          {
            width: "440px",
            height: "440px",
            "--duration": "40s",
          } as React.CSSProperties
        }
      >
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "0%",
              left: "50%",
              "--duration": "40s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[6]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "25%",
              left: "93.3%",
              "--duration": "40s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[7]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "75%",
              left: "93.3%",
              "--duration": "40s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[8]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "100%",
              left: "50%",
              "--duration": "40s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[9]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "75%",
              left: "6.7%",
              "--duration": "40s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[10]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "25%",
              left: "6.7%",
              "--duration": "40s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[11]} text-xl`}></i>
        </div>
      </div>

      {/* Mobile view optimization for Outer Ring */}
      <div
        className="absolute rounded-full border border-dashed border-cyan-400/15 animate-orbit-normal block md:hidden"
        style={
          {
            width: "330px",
            height: "330px",
            "--duration": "40s",
          } as React.CSSProperties
        }
      >
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "0%",
              left: "50%",
              "--duration": "40s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[6]} text-xl`}></i>
        </div>
        <div
          className="icon-box animate-orbit-reverse"
          style={
            {
              top: "100%",
              left: "50%",
              "--duration": "40s",
            } as React.CSSProperties
          }
        >
          <i className={`${finalLogos[9]} text-xl`}></i>
        </div>
      </div>
    </div>
  );
};

const ServiceProcess: React.FC<ServiceProcessProps> = ({
  orbitLogos,
  steps,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="flex items-center gap-2 mb-8 pl-4 md:pl-0">
        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
        <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
          Our Process
        </span>
      </div>

      <div className="bg-[#020617] text-white p-8 md:p-12 lg:p-16 rounded-[40px] overflow-hidden border border-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="w-full text-center">
          <TechOrbit logos={orbitLogos} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-8 bg-slate-900/40 border border-slate-800/80 rounded-[24px] hover:border-blue-500/30 hover:bg-slate-900/70 transition-all duration-300 text-left flex flex-col justify-between min-h-[180px]"
              >
                <span className="absolute top-4 right-6 text-4xl md:text-5xl font-extrabold text-white/5 group-hover:text-blue-500/10 transition-colors font-sans select-none">
                  0{index + 1}
                </span>

                <div className="relative z-10 mt-2">
                  <h3 className="text-lg font-bold text-slate-100 mb-2.5 group-hover:text-blue-400 transition-colors font-sans pt-8">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-normal font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
