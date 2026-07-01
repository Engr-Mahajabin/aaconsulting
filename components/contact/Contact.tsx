"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Contact() {
  const words = [
    "at right time",
    "efficiently",
    "with strategy",
    "transparently",
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Cal.com UI Setup
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const availableServices = [
    "Branding",
    "Website Design",
    "UI/UX",
    "Motion Design",
    "Landing page",
    "Content Creation",
    "Web Development",
  ];

  const budgetOptions = ["< $5k", "$5k - $10k", "$10k - $20k", "$20k+"];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interests: [] as string[],
    budget: "",
    projectDetails: "",
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const isSelected = prev.interests.includes(service);
      return {
        ...prev,
        interests: isSelected
          ? prev.interests.filter((i) => i !== service)
          : [...prev.interests, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xdavdzoq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Company: formData.company || "Not Provided",
          Email: formData.email,
          Phone: formData.phone || "Not Provided",
          "Interested Services":
            formData.interests.length > 0
              ? formData.interests.join(", ")
              : "None Selected",
          "Project Budget": formData.budget || "Not Specified",
          "Project Details": formData.projectDetails || "No details provided.",
        }),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          interests: [],
          budget: "",
          projectDetails: "",
        });
      } else {
        alert(
          "Oops! There was a problem submitting your form. Please try again.",
        );
      }
    } catch (error) {
      console.error("Formspree Error:", error);
      alert("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#EAEBED] min-h-screen py-16 px-6 md:px-12 lg:px-24 font-sans text-gray-950">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* HERO SECTION */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-normal tracking-tight flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
            <span className="text-gray-950">We communicate</span>

            <span className="inline-block font-semibold text-gray-900 overflow-hidden min-h-[1.2em] leading-tight">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </div>

        {/* CONTACT US BUTTON */}
        <div className="flex flex-col items-center justify-center gap-4 pt-4 pb-8">
          <span className="text-sm font-medium tracking-wide text-gray-400 uppercase">
            Contact Us
          </span>
          <motion.button
            whileHover={{ y: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-950 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-gray-800 transition shadow-md"
            onClick={() => {
              document
                .getElementById("calcom-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.button>
        </div>

        {/* SCHEDULE A CALL (CAL.COM) */}
        <section
          id="calcom-section"
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
        >
          <div className="lg:col-span-1 space-y-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-950 rounded-full"></div>
              <span className="text-xs uppercase tracking-widest font-medium text-gray-500">
                Schedule a call
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-tight">
              Want to discuss the project?
            </h2>
          </div>
          <div className="lg:col-span-2 w-full min-h-[550px] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
            <Cal
              calLink="https://cal.com/aaconsulting/30min"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "550px",
                overflow: "scroll",
              }}
              config={{ layout: "month_view" }}
            />
          </div>
        </section>

        {/* INTERACTIVE CONTACT FORM */}
        <section className="space-y-10 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1 flex items-center gap-2 pt-2">
              <div className="w-1.5 h-1.5 bg-gray-950 rounded-full"></div>
              <span className="text-xs font-medium text-gray-950 tracking-normal">
                Contact us
              </span>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-[36px] md:text-[44px] font-normal tracking-tight text-gray-950 leading-[1.15] max-w-2xl">
                The right partner at the right moment changes everything.
              </h2>
            </div>
          </div>

          <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.01)] border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <span className="text-xs border border-gray-200 rounded-full px-5 py-2 text-gray-400 font-normal tracking-wide">
                    Start a conversation
                  </span>
                </div>
                <h3 className="text-4xl md:text-[52px] font-normal tracking-tight text-gray-950 leading-[1.1]">
                  Tell us about your <br /> next stage.
                </h3>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="border-b border-gray-200 pb-2 focus-within:border-gray-900 transition-colors duration-200">
                      <label className="block text-xs font-semibold text-gray-950 tracking-wide mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Evan"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-transparent outline-none text-base text-gray-950 placeholder-gray-300 py-1"
                      />
                    </div>

                    <div className="border-b border-gray-200 pb-2 focus-within:border-gray-900 transition-colors duration-200">
                      <label className="block text-xs font-semibold text-gray-950 tracking-wide mb-3">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Microsoft"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-transparent outline-none text-base text-gray-950 placeholder-gray-300 py-1"
                      />
                    </div>

                    <div className="border-b border-gray-200 pb-2 focus-within:border-gray-900 transition-colors duration-200">
                      <label className="block text-xs font-semibold text-gray-950 tracking-wide mb-3">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="evan@microsoft.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent outline-none text-base text-gray-950 placeholder-gray-300 py-1"
                      />
                    </div>

                    <div className="border-b border-gray-200 pb-2 focus-within:border-gray-900 transition-colors duration-200">
                      <label className="block text-xs font-semibold text-gray-950 tracking-wide mb-3">
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-transparent outline-none text-base text-gray-950 placeholder-gray-300 py-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-semibold text-gray-950 tracking-wide">
                      I'm interested in...
                    </label>
                    <div className="flex flex-wrap gap-x-2 gap-y-3">
                      {availableServices.map((service) => {
                        const isSelected = formData.interests.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleServiceToggle(service)}
                            className={`px-5 py-2.5 rounded-full text-xs font-normal border transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-gray-950 border-gray-950 text-white font-medium"
                                : "bg-transparent border-gray-200 text-gray-800 hover:border-gray-400"
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-semibold text-gray-950 tracking-wide">
                      Project Budget (USD)
                    </label>
                    <div className="flex flex-wrap gap-x-2 gap-y-3">
                      {budgetOptions.map((option) => {
                        const isSelected = formData.budget === option;
                        return (
                          <button
                            type="button"
                            key={option}
                            onClick={() =>
                              setFormData({ ...formData, budget: option })
                            }
                            className={`px-6 py-2.5 rounded-full text-xs font-normal border transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-gray-950 border-gray-950 text-white font-medium"
                                : "bg-transparent border-gray-200 text-gray-800 hover:border-gray-400"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-2 focus-within:border-gray-900 transition-colors duration-200 pt-2">
                    <label className="block text-xs font-semibold text-gray-950 tracking-wide mb-3">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us something about it..."
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectDetails: e.target.value,
                        })
                      }
                      className="w-full bg-transparent outline-none text-base text-gray-950 placeholder-gray-300 py-1 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gray-950 hover:bg-gray-900 text-white rounded-full font-medium text-sm transition-all shadow-sm active:scale-[0.99] disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
