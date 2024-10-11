import React, { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaCommentDots,
  FaUser,
  FaPhone,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Profile Picture */}
      <img
        src="./assids/Shubham.jpeg"
        alt="Shubham Upgrade"
        className="w-32 h-32 md:w-56 md:h-56 md:mt-10 mt-12 rounded-full object-cover border-4 border-white mb-10"
      />

      {/* Main Text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
          SHUBHAM UPRADE
        </span>
        <br /> Full stack developer based in{" "}
        <span className="text-orange-500">India</span>.
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-center max-w-xl text-gray-400">
        Full Stack Developer with expertise in React.js, Tailwind CSS, HTML,
        CSS, JavaScript, and Node.js. Proficient in the MERN stack and skilled
        in UI/UX design.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <a
          href="#contact"
          className="bg-gradient-to-r from-purple-500 to-orange-500 text-white py-2 px-6 rounded-full font-bold hover:opacity-90 transition"
        >
          Connect with me
        </a>
        <a
          href="https://drive.google.com/file/d/10a6p-6AXARzCgvfaysNQijj0JDCuMpmy/view"
          className="border-2 border-white text-white py-2 px-6 rounded-full font-bold hover:bg-white hover:text-black transition"
        >
          My resume
        </a>
      </div>

      {/* Expandable Social Media Menu */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center hidden md:flex">
        {/* Main Message Icon */}
        <button
          onClick={toggleMenu}
          className="bg-none p-4 rounded-full shadow-lg duration-300"
        >
          <FaMessage size={28} className="text-blue-500 hover:text-blue-500" />
        </button>

        {/* Expandable Icons (shown when isOpen is true) */}
        <div
          className={`flex flex-col items-center space-y-4 mt-4 transition-all duration-500 ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-0 translate-y-4"
          }`}
        >
          {/* Phone Icon (hidden on mobile) */}
          <a
            href="tel:9977413362"
            className=" bg-none text-green-500 p-4 rounded-full shadow-lg hover:text-green-500 transition-all duration-300"
          >
            <FaPhone size={28} />
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/9977413362"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-none text-green-500 p-4 rounded-full shadow-lg hover:text-green-500 transition-all duration-300"
          >
            <FaWhatsapp size={28} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/shubham-uprade-092542278"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-none text-blue-700 p-4 rounded-full shadow-lg hover:text-blue-700 transition-all duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
