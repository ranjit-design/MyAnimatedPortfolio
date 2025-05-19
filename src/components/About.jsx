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
        className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <figure
            data-aos="fade-right"
            data-aos-delay="500"
            className="flex flex-wrap justify-center gap-4 relative"
          >
            <div
              className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[500px] bg-gradient-to-1 
              from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 
              md:top-10 rounded-full"
            ></div>
            <img
              src={img_about1}
              alt="about picture 1"
              className="absolute -top-2 left-5 sm:left-10 transform -transform-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32
              rounded-3xl shadow-lg"
            />
            <img
              src={img_about2}
              alt="about picture 2"
              className="relative z-20 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg"
            />
            <img
              src={img_about}
              alt="about picture"
              className="absolute -bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32
              rounded-3xl shadow-lg"
            />
          </figure>

          <article
            data-aos="fade-left"
            data-aos-delay="500"
            className="text-center lg:text-left relative"
          >
            <div className="absolue z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
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
            <footer>
              <button
                onClick={() => setShowMore(true)}
                className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none 
                hover:bg-[#801b9c] cursor-pointer hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg"
              >
                Learn More
              </button>
            </footer>
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
            <h2 className="text-2xl font-semibold bg-[#d0b7d7] mb-4">More About Me</h2>
            <p className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-500">
              I specialize in building accessible, responsive web apps using React, Tailwind CSS, and modern frontend workflows.
            </p>
            <p className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-450">
              My toolkit includes Figma, Git, Vite, VS Code, and design systems that bring consistent UX.
            </p>
            <p className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              I'm currently learning backend integration and actively contributing to open-source projects.
              
            </p>
            <p className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-pink-900 to-green-400">
              <b>From Kailali, Nepal</b>
              <br />
              <b>Student of Patan Multiple Campus (Tribhuvan Univercity)</b>
              <br />
              <b>Program: BSc.CSIT</b>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
