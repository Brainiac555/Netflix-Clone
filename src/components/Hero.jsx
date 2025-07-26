import React, { useState } from "react";
import bgImg from "../Images/Netflix-homepage.jpg";
import { ChevronRight } from "lucide-react"; // Optional icon package

const Hero = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative">
      <section className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url(${bgImg})`,
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 bg-transparent bg-opacity-60 p-6 rounded min-w-xs md:max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-xs sm:max-w-xs md:max-w-2xl">
            Unlimited <span className="block md:inline">movies, TV</span> <span className="block md:inline">shows, and more</span>
          </h1>
          <p className="text-lg mb-4">Starts at ₦2,500. Cancel anytime.</p>
          <p className="text-sm mb-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="flex flex-col md:flex-row gap-4 min-w-xs max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Email address"
              value={query}
              onChange={handleChange}
              className="md:min-w-70  px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white-600 text-white"
            />
            <div className="flex justify-center md:justify-start">
  <button className="w-52 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 h-14 px-8 text-lg font-semibold text-white rounded-md">
    Get Started
    <ChevronRight className="ml-2 w-5 h-5" />
  </button>
</div>

          </div>
        </div>

        {/* Slim & Smooth Downward SVG Curve */}
        {/* <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              fill="#e50914"
              d="M0,0 C480,120 960,120 1440,0 L1440,120 L10,120 Z"
            />
          </svg>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
