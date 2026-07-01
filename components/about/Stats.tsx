// "use client";

// import React from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// const stats = [
//   { number: 80, label: "Business Success", suffix: "%" },
//   { number: 90, label: "Project Handover", suffix: "%" },
//   { number: 88, label: "Happy Clients", suffix: "%" },
// ];

// const Stats = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section
//       ref={ref}
//       className="min-h-[20vh] flex items-center justify-center py-10 px-6"
//     >
//       <div className="container mx-auto px-6 md:px-16 lg:px-24">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 justify-items-center">
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col space-y-4 group cursor-pointer w-full md:max-w-none text-center md:text-left"
//             >
//               <h2
//                 className="text-4xl md:text-5xl font-black tracking-tighter leading-none transition-all duration-500 text-transparent"
//                 style={{
//                   WebkitTextStroke: "2px #032c69",
//                 }}
//               >
//                 <span
//                   className="transition-all duration-500 inline-block
//                              group-hover:bg-gradient-to-r group-hover:from-[#032c69] group-hover:to-[#1256ea]
//                              group-hover:bg-clip-text group-hover:text-transparent
//                              group-hover:[WebkitTextStroke:0px]"
//                 >
//                   {inView ? (
//                     <CountUp
//                       start={0}
//                       end={item.number}
//                       duration={3}
//                       suffix={item.suffix}
//                     />
//                   ) : (
//                     "0%"
//                   )}
//                 </span>
//               </h2>

//               <p className="text-xl font-bold text-[#0A1A44] ml-1 transition-colors duration-300">
//                 {item.label}
//               </p>

//               <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to-r from-[#032c69] to-[#1256ea] transition-all duration-[3000ms] ease-out origin-left"
//                   style={{ width: inView ? `${item.number}%` : "0%" }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;

"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 80, label: "Business Success", suffix: "%" },
  { number: 90, label: "Project Handover", suffix: "%" },
  { number: 88, label: "Happy Clients", suffix: "%" },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="w-full py-12 md:py-20 bg-transparent select-none px-6"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="flex flex-col space-y-4 group cursor-pointer w-full text-left"
            >
              <h2
                className="text-5xl md:text-6xl font-black tracking-tighter leading-none transition-all duration-500 text-transparent select-none"
                style={{
                  WebkitTextStroke: "2px #032c69",
                }}
              >
                <span
                  className="transition-all duration-500 inline-block
                             group-hover:bg-gradient-to-r group-hover:from-[#032c69] group-hover:to-[#1256ea] 
                             group-hover:bg-clip-text group-hover:text-transparent 
                             group-hover:[WebkitTextStroke:0px]"
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2.5}
                      suffix={item.suffix}
                    />
                  ) : (
                    `0${item.suffix}`
                  )}
                </span>
              </h2>

              <p className="text-base md:text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                {item.label}
              </p>

              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#032c69] to-[#1256ea] transition-all duration-[2500ms] ease-out origin-left"
                  style={{
                    width: inView ? `${item.number}%` : "0%",
                    willChange: "width",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
