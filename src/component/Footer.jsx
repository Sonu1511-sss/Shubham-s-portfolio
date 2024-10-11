import React from 'react';
import { DiGithub } from 'react-icons/di';
import { IoLogoInstagram } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Branding Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-purple-500">Shubham's Portfolio</h1>
            <p className="text-gray-400 mt-2">Passionate Full Stack Developer skilled in building dynamic web <br /> applications. Committed to delivering high-quality solutions that <br />enhance user experience..</p>
          </div>
          {/* Social Media Links Section */}
          <div>
            <h2 className="text-lg font-semibold text-purple-500">Follow Me</h2>
            <ul className="flex space-x-4 mt-2">
              <li>
                <a href="https://www.linkedin.com/in/shubham-uprade-092542278" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition duration-300">
                  <span role="img" aria-label="LinkedIn">🔗</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Sonu1511-sss" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition duration-300">
                  <span role="img" aria-label="GitHub"><DiGithub className='text-2xl'/></span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/itz_sonu_.1511" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition duration-300">
                  <span role="img" aria-label="Twitter"><IoLogoInstagram className='text-2xl' /></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Shubham Uprade. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
