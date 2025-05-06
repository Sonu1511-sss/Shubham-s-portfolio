import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center sm:justify-evenly justify-between py-5 px-4 bg-black text-white font-medium">
      {/* Logo */}
      <h1 className="font-bold text-2xl cursor-pointer">
        <a href="/" className="flex items-center">
         <img src="assids\Shubham's.png" alt="" className="h-24 w-40" />
        </a>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-8 text-sm items-center">
        <NavLink to="/" className="hover:text-purple-600">Home</NavLink>
        <NavLink to="/about" className="hover:text-purple-600">About Me</NavLink>
        <NavLink to="/experience" className="hover:text-purple-600">Experience</NavLink>
        <NavLink to="/Servise" className="hover:text-purple-600">Services</NavLink>
        <NavLink to="/portfolio" className="hover:text-purple-600">Portfolio</NavLink>
        <NavLink to="/contact" className="relative hover:text-purple-600">Contact</NavLink>
      </ul>

      {/* Connect Button */}
      <Link
        to="/contact"
        className="hidden sm:inline-block bg-gradient-to-r from-purple-500 to-orange-500 py-2 px-4 rounded-full text-white font-bold hover:opacity-90 transition"
      >
        Connect With Me
      </Link>

      {/* Mobile Menu Button */}
      <MdMenu
        onClick={() => setVisible(true)}
        className="text-2xl font-bold cursor-pointer sm:hidden"
      />

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white text-black transition-all duration-300 z-10 ${
          visible ? "w-screen h-screen" : "w-0 h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col text-gray-200 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer bg-black text-white"
          >
            <RiArrowDropLeftLine className="text-2xl font-bold rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="p-4 hover:bg-purple-500 hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="p-4 hover:bg-purple-500 hover:text-white"
          >
            About Me
          </NavLink>
          <NavLink
            to="/experience"
            onClick={() => setVisible(false)}
            className="p-4 hover:bg-purple-500 hover:text-white"
          >
            Experience
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setVisible(false)}
            className="p-4 hover:bg-purple-500 hover:text-white"
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            onClick={() => setVisible(false)}
            className="p-4 hover:bg-purple-500 hover:text-white"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="p-4 hover:bg-purple-500 hover:text-white"
          >
            Contact
          </NavLink>
          <Link
            to="/contact"
            onClick={() => setVisible(false)}
            className="m-4 p-4 bg-gradient-to-r from-purple-500 to-orange-500 text-white text-center rounded-full font-bold"
          >
            Connect With Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
