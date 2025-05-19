import React, { useState } from "react";
import img_about from "/img_about.png";
import img_about1 from "/img_about1.png";
import img_about2 from "/img_about2.png";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section
        id="about"
        className="relative z-10 py-20 px-4 sm:px-8 lg:px-24 text-white flex items-center justify-center"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <figure
            data-aos="fade-right"
            data-aos-delay="500"
            className="flex flex-wrap justify-center gap-4 relative"
          >
            <img
              src={img_about1}
              alt="about picture 1"
              className="absolute -top-4 left-4 sm:-top-6 sm:left-6 z-20 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl shadow-lg object-cover"
            />
            <img
              src={img_about2}
              alt="about picture 2"
              className="relative z-20 w-32 h-40 sm:w-48 sm:h-56 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-lg shadow-lg object-cover"
            />
            <img
              src={img_about}
              alt="about picture"
              className="absolute -bottom-4 right-4 sm:right-8 translate-y-8 z-10 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl shadow-lg object-cover"
            />
          </figure>

          <article
            data-aos="fade-left"
            data-aos-delay="500"
            className="text-center lg:text-left relative mt-10 lg:mt-0 px-2 sm:px-4"
          >
            <header>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                About Me
              </h1>
            </header>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              I am a passionate frontend developer with a keen interest in
              creating beautiful and functional user interfaces. I have a strong
              foundation in HTML, CSS, JavaScript and React js and I am always eager to
              learn new technologies and improve my skills.
            </p>
            
          </article>
        </div>
      </section>

      {/* Modal */}
      {showMore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl max-w-lg w-full relative">
            <button
              onClick={() => setShowMore(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              &times;
            </button>
            
          </div>
        </div>
      )}
    </>
  );
}
