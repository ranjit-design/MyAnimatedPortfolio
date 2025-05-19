import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Handle scroll for navbar background
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900/80'
      }`}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <a 
            href="#home" 
            className="text-3xl sm:text-4xl font-bold italic text-white hover:text-purple-300 transition-colors"
            onClick={closeMobileMenu}
          >
            Portfolio
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-8 h-8" aria-hidden="true" />
            ) : (
              <FiMenu className="w-8 h-8" aria-hidden="true" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NavbarLinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
                onClick={() => window.innerWidth < 768 && closeMobileMenu()}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="w-full max-w-xs text-center text-2xl font-medium text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      
      {/* Backdrop Blur Effect */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}
