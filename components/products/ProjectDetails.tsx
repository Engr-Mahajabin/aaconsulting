"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface Project {
  id: string | number;
  title: string;
  subtitle?: string;
  tag: string;
  description: string;
  imageUrl: string;
  duration?: string;
  client?: string;
  challenge?: string;
  liveUrl?: string;
  metrics: { value: string; label: string }[];
}

export default function ProjectDetails({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans antialiased pb-24">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10">
        <button
          onClick={() => router.push("/products")}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-sm aspect-[16/10]">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {project.tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              {project.subtitle || project.description.slice(0, 120) + "..."}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <hr className="border-slate-200" />
      </div>

      {/* About Project Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
          About the project
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Timeline
              </span>
              <span className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                {project.duration || "4 Weeks"}
              </span>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Client
              </span>
              <span className="text-base font-semibold text-slate-800 block mt-2">
                {project.client || "Official"}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              {project.description}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-tight">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      {project.challenge && (
        <>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <hr className="border-slate-200" />
          </div>
          <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  Challenges & Solution
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <hr className="border-slate-200" />
      </div>

      {/* Action / Live Link Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Ready to explore the live link?
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Check out the complete user journey and responsiveness live.
            </p>
          </div>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors shrink-0"
            >
              <span>Visit Live Site</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-sm font-medium text-slate-400 bg-slate-100 px-4 py-2 rounded-lg">
              Internal Corporate Product
            </span>
          )}
        </div>
      </section>
    </main>
  );
}
