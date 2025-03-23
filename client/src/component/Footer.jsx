import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing React Icons
import { NavLink } from "react-router-dom"; // Importing NavLink for navigation

function Footer() {
  return (
    <div className="bg-[#181818] text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Media Links with Icons */}
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <NavLink
              to="/home"
              className="text-white hover:text-blue-500 transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="text-white hover:text-blue-500 transition-colors"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-blue-500 transition-colors"
            >
              About
            </NavLink>
          </div>

          {/* Copyright Information */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          {/* Contact Email */}
          <p className="text-sm text-gray-400">
            <a
              href="mailto:your.email@example.com"
              className="text-white hover:text-blue-500 transition-colors"
            >
              debaprasadbehura89@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
