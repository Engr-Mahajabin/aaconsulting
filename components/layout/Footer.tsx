"use client";

import Link from "next/link";

import Image from "next/image";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className="w-full pt-12 pb-8 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/home/9019808.jpg')`,
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[2px] bg-slate-950/20 z-0" />

      <div className="w-full max-w-6xl mx-auto relative z-10 text-white">
        {/* Top CTA & Socials Section */}

        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 border-b border-white/20 pb-12 gap-8">
          <div className="flex gap-6 justify-start order-3 lg:order-1">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/AnAConsultingLtd?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaFacebook
                size={20}
                className="text-zinc-200 hover:text-blue-400 cursor-pointer transition-all"
              />
            </a>

            {/* Linkedin */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaLinkedin
                size={20}
                className="text-zinc-200 hover:text-blue-400 cursor-pointer transition-all"
              />
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <BsTwitter
                size={20}
                className="text-zinc-200 hover:text-blue-400 cursor-pointer transition-all"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <BsInstagram
                size={20}
                className="text-zinc-200 hover:text-blue-400 cursor-pointer transition-all"
              />
            </a>

            {/* Youtube */}
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaYoutube
                size={20}
                className="text-zinc-200 hover:text-blue-400 cursor-pointer transition-all"
              />
            </a>
          </div>

          <div className="text-center lg:text-right flex-1 order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Ready to Transform Your Business?
            </h2>

            <p className="text-zinc-300 text-sm mt-1">
              Let's build next-generation enterprise solutions together.
            </p>
          </div>

          <div className="flex w-full md:w-auto max-w-md order-2 lg:order-3 justify-center lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-blue-600/20 group"
            >
              <span>Book a Free Consultation</span>

              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* MAIN WHITE CARD  */}

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-zinc-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Column 1: About & Info */}

          <div className="space-y-5">
            <Link
              href="/"
              className="flex items-center gap-2 outline-none group w-max"
            >
              <Image
                src="/logo.svg"
                alt="A & A Consulting Logo"
                width={40}
                height={40}
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                A & A Consulting
              </span>
            </Link>

            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              Delivering next-generation IT solutions with a core focus on
              advanced application development and end-to-end cyber security.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex gap-3.5 items-start">
                <MapPin className="text-blue-600 shrink-0 mt-0.5" size={18} />

                <p className="text-zinc-600 text-sm leading-snug">
                  Baltimore, Maryland, USA <br /> Baridhara, Dhaka-1212, BD
                </p>
              </div>

              <div className="flex gap-3.5 items-start">
                <Phone className="text-blue-600 shrink-0" size={18} />

                <p className="text-slate-800 font-semibold text-sm">
                  +1 443 253 0203(USA) <br /> +8802 2266 16261(BD)
                </p>
              </div>

              <div className="flex gap-3.5 items-center">
                <Mail className="text-blue-600 shrink-0" size={18} />

                <p className="text-zinc-600 text-sm hover:text-blue-600 transition-colors">
                  info@aaconsultingtech.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-slate-50/60 p-5 md:p-6 rounded-3xl border border-slate-100">
            <div className="p-3 bg-white rounded-xl shadow-xs shrink-0 text-blue-600">
              <Clock size={20} />
            </div>

            <div className="w-full">
              <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">
                Opening Hours
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center border-b border-zinc-200/60 pb-2">
                  <span className="font-semibold text-zinc-700">
                    USA{" "}
                    <span className="text-[10px] font-normal text-zinc-400">
                      (EST)
                    </span>
                  </span>

                  <div className="text-right">
                    <p className="text-zinc-400 text-[11px] font-medium">
                      Mon - Fri
                    </p>

                    <p className="text-blue-600 font-bold text-xs">
                      9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-1">
                  <span className="font-semibold text-zinc-700">
                    BD{" "}
                    <span className="text-[10px] font-normal text-zinc-400">
                      (BST)
                    </span>
                  </span>

                  <div className="text-right">
                    <p className="text-zinc-400 text-[11px] font-medium">
                      Sat - Thu
                    </p>

                    <p className="text-blue-600 font-bold text-xs">
                      10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <p className="text-[10px] text-amber-600 bg-amber-50 font-medium px-2.5 py-1 rounded-md inline-block mt-2">
                  Closed: Fri (BD) & Weekends (USA)
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-6">
            <h3 className="text-lg font-bold text-slate-900 mb-5 tracking-tight">
              Quick Links
            </h3>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {["Home", "About", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace("'", "").replace(" ", "-")}`}
                    className="flex items-center gap-1.5 group text-zinc-500 hover:text-blue-600 transition-colors py-0.5"
                  >
                    <ChevronRight
                      size={14}
                      className="text-zinc-300 group-hover:text-blue-500 transition-colors shrink-0"
                    />

                    <span className="text-sm font-normal">{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center text-white text-xs border-t border-white/20 pt-8 mb-4">
          <p className="font-light text-zinc-300">
            Copyright © 2026{" "}
            <span className="font-semibold text-blue-400">
              A & A Consulting Technology
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
