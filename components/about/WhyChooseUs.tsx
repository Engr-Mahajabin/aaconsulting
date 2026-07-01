// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";
// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";

// const WhyChooseUs = () => {
//   const features = [
//     "Expert IT Consulting & Strategy",
//     "End-to-End Cyber Security",
//     "Advanced AI & Automation Solutions",
//     "Modern Web & Mobile App Development",
//   ];

//   const fadeInRight = {
//     initial: { opacity: 0, x: 50 },
//     whileInView: { opacity: 1, x: 0 },
//     transition: { duration: 0.8 },
//   };

//   return (
//     <section className="py-10 px-6 md:px-10 lg:px-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
//         <div className="w-full md:w-1/2 relative h-[450px] flex items-center justify-center">
//           <motion.div
//             animate={{ y: [0, -15, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl"
//           >
//             <Image
//               src="/images/about/working.webp"
//               alt="A&A Consulting Team"
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-blue-900/10" />
//           </motion.div>

//           <motion.div
//             animate={{ y: [0, 15, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl z-0"
//           />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full md:w-1/2 flex flex-col gap-8 order-1 md:order-2"
//         >
//           <div className="space-y-4">
//             <div className="flex items-center gap-2">
//               <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
//                 Why Choose Us
//               </span>
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
//               Delivering Custom IT Solutions & <br />
//               <span className="text-blue-600">Strategic Consulting</span>
//             </h2>
//             <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-gray-300 pl-4">
//               We bridge the gap between complex technical challenges and
//               innovative business success, providing end-to-end digital
//               transformation tailored to your vision.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {features.map((item, index) => (
//               <div key={index} className="flex items-center gap-3 group">
//                 <div className="p-1.5 bg-blue-50 rounded-lg transition-all duration-300">
//                   <FaCheckCircle className="text-blue-500 text-sm" />
//                 </div>
//                 <span className="text-sm font-bold text-slate-800 transition-colors">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <Link href="/services">
//             <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 w-fit">
//               <span>See More Details</span>
//               <ArrowUpRight className="w-5 h-5" />
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const WhyChooseUs = () => {
  const features = [
    "Expert IT Consulting & Strategy",
    "End-to-End Cyber Security",
    "Advanced AI & Automation Solutions",
    "Modern Web & Mobile App Development",
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-transparent overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side */}
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] w-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full h-full rounded-[32px] overflow-hidden shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)]"
          >
            <Image
              src="/images/about/working.webp"
              alt="A&A Consulting Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-950/10" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl z-0"
          />
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
              Delivering Custom IT Solutions & <br />
              <span className="text-blue-600">Strategic Consulting</span>
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed border-l-4 border-blue-600/30 pl-4 font-light">
              We bridge the gap between complex technical challenges and
              innovative business success, providing end-to-end digital
              transformation tailored to your vision.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-xl transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white shrink-0 shadow-xs">
                  <FaCheckCircle className="text-sm transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Link href="/services">
              <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 py-3.5 rounded-xl font-medium shadow-md shadow-blue-900/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 flex items-center justify-center gap-2 w-fit group active:scale-95 cursor-pointer">
                <span>See More Details</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
