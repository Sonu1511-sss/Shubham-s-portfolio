import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
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
      <div className="flex gap-4 mt-8">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-purple-500 to-orange-500 text-white py-2 px-6 rounded-full font-bold hover:opacity-90 transition"
        >
          Connect with me
        </Link>
        <Link
          to="https://drive.google.com/file/d/10a6p-6AXARzCgvfaysNQijj0JDCuMpmy/view"
          className="border-2 border-white text-white py-2 px-6 rounded-full font-bold hover:bg-white hover:text-black transition"
        >
          My resume
        </Link>
      </div>
    </div>
  );
}

export default Hero;
