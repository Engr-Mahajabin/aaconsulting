import Link from "next/link";

const About = () => (
  <div className="bg-white rounded-[40px] grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start items-start py-10 px-6 sm:px-10 gap-6 md:gap-12">
    {/* Left Side */}
    <div className="space-y-6 w-full flex flex-col items-center md:items-start">
      <div className="flex items-center gap-2 self-start md:self-auto">
        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
        <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
          Who we are
        </span>
      </div>

      <div className="bg-blue-100 p-4 md:p-6 rounded-3xl w-full max-w-[350px] mx-auto md:mx-0">
        <div className="w-full aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="space-y-6 w-full flex flex-col md:items-start md:text-left">
      <h2 className="text-2xl md:text-4xl font-bold leading-tight text-slate-800">
        We Build Secure Digital Foundations for our Clients for their Future.
      </h2>

      <div className="space-y-6 flex flex-col md:items-start">
        <p className="text-md text-slate-600 leading-relaxed">
          A & A Consulting Specializes in the high-end Cyber Security and
          Application Software Development Solutions. We don't just Provide
          Solutions We Recommend and Implement secure, scalable information
          technology infrastructure for our clients to ensure expansion for
          their future growth for their environment.
        </p>

        <Link href="/about">
          <button className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg flex gap-2 whitespace-nowrap">
            <span>About Us</span>
            <span className="text-white text-lg">→</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default About;
