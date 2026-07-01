import React from "react";

interface ServiceDetailSectionProps {
  tag?: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

const ServiceDetailSection: React.FC<ServiceDetailSectionProps> = ({
  tag = "Web Design",
  title,
  description,
  buttonText = "Let’s talk 👋",
  onButtonClick,
  imageSrc,
  imageAlt = "Service visual",
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <section className="bg-white rounded-[40px] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start items-center p-8 md:p-12 lg:p-16 gap-8 md:gap-12 w-full">
        {/* Left Side: Tag + Image */}
        <div className="space-y-6 w-full flex flex-col items-center md:items-start">
          {/* Tag Block */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
              {tag}
            </span>
          </div>

          {/* Image Container */}
          <div className="w-full max-w-[450px] md:max-w-full mx-auto md:mx-0">
            <div className="w-full overflow-hidden rounded-3xl border border-zinc-50 shadow-sm">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover aspect-video md:aspect-auto max-h-[350px] rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Title + Description + Button */}
        <div className="space-y-6 w-full flex flex-col md:items-start md:text-left">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-slate-800 font-sans">
            {title}
          </h2>

          {/* Description & Button Wrapper */}
          <div className="space-y-6 flex flex-col items-center md:items-start w-full">
            <p className="text-md text-slate-600 leading-relaxed font-sans w-full">
              {description}
            </p>

            {/* Button Container - চট করে ফিক্স করার মূল জায়গা */}
            {buttonText && (
              <button
                onClick={onButtonClick}
                // এখানে 'w-fit' এবং 'self-start' যোগ করা হয়েছে যাতে ছোট স্ক্রিনেও বাটন শুধু তার টেক্সটের সমান সাইজ নেয় এবং বামে থাকে
                className="w-fit self-start bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg flex gap-2 whitespace-nowrap text-sm items-center"
              >
                <span>{buttonText}</span>
                <span className="text-white text-lg leading-none">→</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailSection;
