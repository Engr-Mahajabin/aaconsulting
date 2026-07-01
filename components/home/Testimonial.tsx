"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonial } from "@/data/testimonial";

const Testimonial = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex items-center gap-2 mb-10 select-none">
        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
        <span className="text-sm font-bold uppercase tracking-widest text-zinc-800">
          testimonials
        </span>
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
          el: ".custom-progress-container",
          type: "progressbar",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative !pb-14 md:!pb-20"
      >
        {testimonial.map((item) => (
          <SwiperSlide key={item.id || item.name}>
            {" "}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] h-full min-h-[380px] md:min-h-[400px] flex flex-col justify-between group transition-all duration-300">
              <blockquote className="text-zinc-700 text-base md:text-[17px] leading-[1.65] font-normal font-sans">
                {item.text}
              </blockquote>

              {/* Footer of Card */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-50">
                <div className="flex items-center gap-4">
                  {/* User Initials Circle */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base md:text-lg select-none shrink-0">
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="font-bold text-zinc-900 text-base md:text-lg leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs md:text-sm text-zinc-500 font-medium mt-0.5">
                      {item.designation}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Icon */}
                <a
                  href={(item as any).linkedinUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 border border-zinc-100 rounded-full flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-100 transition-all duration-300 shrink-0"
                  aria-label={`${item.name}'s LinkedIn Profile`}
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row items-center justify-between gap-6 z-20 pointer-events-none px-1">
          <div className="w-full sm:w-[70%] lg:w-[78%] h-[2px] bg-zinc-100 relative rounded-full overflow-hidden hidden sm:block">
            <div className="custom-progress-container swiper-pagination-progressbar !bg-blue-600"></div>
          </div>

          <div className="flex gap-3 pointer-events-auto ml-auto sm:ml-0">
            <button
              className="prev-btn w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-zinc-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 active:scale-95 cursor-pointer text-zinc-700"
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              className="next-btn w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-zinc-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 active:scale-95 cursor-pointer text-zinc-700"
              aria-label="Next slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonial;
