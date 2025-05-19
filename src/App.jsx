import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,

    });
  },[])
  return (
    <main className='bg-gray-950'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      

    </main>
  );
};

export default App;
