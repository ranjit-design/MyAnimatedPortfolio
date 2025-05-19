import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "My Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* LOGO */}
        <a href="#home" className="text-4xl font-bold italic text-white">
          Portfolio
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-8 h-8 text-white" />
          ) : (
            <FiMenu className="w-8 h-8 text-white" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-gray-300 text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-green-400"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16"
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="w-8 h-8" />
          </button>

          {/* Mobile Navigation Links */}
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-lg text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
