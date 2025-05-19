import React from "react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm rounded overflow-hidden shadow-lg group">
  <div className="absolute mt-1000 z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
  <div className="relative z-10"> {/* <- changed from absolute z-0 to relative z-10 */}

        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex bg-opacity-50 items-center justify-center bg-purple-800 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 cursor-pointer rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
    // List of projects
  const listProjects = [
    {
      image: project1,
      title: "Clock ",
      description: "Clock Project is to design and develop a functional and visually appealing digital clock that displays the current time in real-time. The project helps understand how time functions can be handled in programming and how to display dynamic content on screen.",
      link: "https://digitalclock555.netlify.app/",
    },
    {
      image: project2,
    title: "Google Gemini",
      description: "Google Gemini is a advanced AI models.It is designed to understand and generate content across multiple types of input, including text, code, images, audio, and video — making it one of the most powerful and versatile AI models to date.",
      link: "https://google-gemini-67cj.vercel.app/",
    },
    {
      image: project3,
      title: "TicTacToe",
      description: "Tic-Tac-Toe game project is to create a simple, interactive two-player game that helps players take turns marking Xs and Os in a 3×3 grid. The game reinforces core programming concepts such as conditional logic, loops, event handling, and game state management.",
      link: "https://tictac555.netlify.app/",
    },
  ];
  return (
    <main id="projects" className="pt-24 pb-16 px-4 min-h-screen">
      <section data-aos="fade-up" data-aos-delay="300" className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl text-white sm:text-5xl font-bold mb-4">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            I’ve worked on a range of personal and academic projects that showcase my frontend development skills. 
            From simple UI components to fully responsive websites and React applications, each project reflects my focus on clean design, 
            functionality, and user experience. These projects have helped me apply real-world problem-solving, improve my understanding of modern web technologies, and follow best practices in development and design.
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-7xl mx-auto"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
