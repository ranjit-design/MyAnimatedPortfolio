import React from "react";
import Navbar from "./Navbar";
import imghero from "/imghero.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import ranjit from "/ranjit.png";
import instagram from "/instagram.png";
import facebook from "/facebook.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] md:min-h-screen flex flex-col items-center">
      {/* Decorative gradient blob */}
      <div
        className="absolute right-0 sm:right-10 -top-20 sm:top-24 w-64 sm:w-96 lg:w-[450px] h-64 sm:h-96 lg:h-[550px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] rotate-45 rounded-3xl -z-10"
      />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-8 lg:px-24 xl:px-52 pb-12 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        {/* Text */}
        <section
          className="w-full md:w-1/2 text-center md:text-left md:pr-12 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Small decorative circle */}
          <div className="absolute -z-10 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 -top-5 -left-12"></div>

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Ranjit Chaudhary
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#c744ec] mb-6">
              Frontend Developer
            </h2>
          </header>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-prose mx-auto md:mx-0">
            I’m Ranjit Chaudhary, a passionate and detail-oriented Frontend Developer dedicated to crafting clean, responsive, and user-friendly web interfaces with React.js &amp; Tailwind CSS.
          </p>

          {/* Social icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <a href="https://github.com/ranjit-design" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="w-10 h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/ranjit-chaudhary-043969362/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/ranjit.rkusmi/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="w-10 h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/ranjit_kanxa/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-10 h-10 hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>

        {/* Image */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <img
            src={ranjit}
            alt="Ranjit Chaudhary"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[485px] lg:h-[485px] object-cover rounded-full shadow-2xl border-4 border-purple-500/20"
          />
        </figure>
      </main>
    </div>
  );
}