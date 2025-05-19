import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import imghero from "/imghero.png";

export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j3yh9uk", // your actual service ID
        "template_ewsqk29", // your actual template ID
        form.current,
        "4SLsQih3I61JpyQrF" // your actual public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Message failed to send. Please try again later.");
        }
      );
  };

  return (
    <main id="contact" className="min-h-screen">
      <section
        data-aos="fade-up"
        data-aos-delay="300"
        className="container mx-auto px-4 py-24 flex items-center justify-center min-h-screen"
      >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-6xl w-full relative overflow-hidden">
        <aside className="w-full md:w-1/2 relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-gray-900/30 backdrop-blur-sm"></div>
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] 
            sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] 
            shadow-[0_0_70px_rgba(182,0,182,0.7)] rounded-full"
          ></div>
          <img
            src={imghero}
            alt="Contact illustration"
            className="h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative"
          />
        </aside>

        {/* Contact Form */}
        <section className="p-8 w-full md:w-1/2 backdrop-blur-sm rounded-lg">
          <header className="mb-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact <span className="text-purple-400">Me</span>
            </h2>
            <p className="text-gray-400">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </header>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              ></textarea>
            </div>

            {/* Hidden time field */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] 
              hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg"
            >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  </main>
  );
}
