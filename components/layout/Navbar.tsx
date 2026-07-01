"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navbarContents } from "@/data/navbarContents";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 2xl:px-20 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 outline-none">
          <Image
            src="/logo.svg"
            alt="A & A Consulting"
            width={40}
            height={40}
            priority
            className="object-contain"
          />
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            A & A Consulting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center pl-20 gap-4 text-sm font-semibold text-gray-700 h-full">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors py-4 block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors py-4 block"
            >
              About Us
            </Link>
          </li>

          {Object.keys(navbarContents).map((key) => (
            <li
              key={key}
              className="relative group flex items-center gap-1 cursor-pointer py-4 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span className="group-hover:text-blue-600 transition-colors">
                {key}
              </span>
              <ChevronDown
                size={14}
                className="transition-transform duration-300 group-hover:rotate-180 group-hover:text-blue-600"
              />

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white shadow-2xl rounded-b-xl overflow-hidden z-50 border border-gray-100/50 pt-[3px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="absolute top-0 left-0 w-full h-[4px] bg-blue-500" />
                <div className="absolute -top-[4px] right-8 w-3 h-3 bg-blue-500 rotate-45" />

                <div className="bg-white">
                  {navbarContents[key as keyof typeof navbarContents].map(
                    (item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block px-4 py-3 text-[14px] font-semibold text-gray-900 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-100 last:border-none transition-all duration-150"
                      >
                        {item.title}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </li>
          ))}

          <li>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-colors py-4 block"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:flex px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-600 transition font-sm text-white items-center justify-center"
          >
            Let’s Discuss 👋
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-inner max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block font-semibold text-gray-700 py-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block font-semibold text-gray-700 py-1"
          >
            About Us
          </Link>

          {Object.keys(navbarContents).map((key) => (
            <div key={key} className="space-y-1.5 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {key}
              </div>
              <div className="space-y-1 pl-3 border-l-2 border-gray-100">
                {navbarContents[key as keyof typeof navbarContents].map(
                  (item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                    >
                      {item.title}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block font-semibold text-gray-700 py-1 border-t border-gray-50 pt-3"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
