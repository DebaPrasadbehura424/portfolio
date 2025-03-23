import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and cross icons
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#181818] text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-semibold">@Dev</div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <div
            className="block text-lg hover:text-gray-400"
            onClick={toggleMenu}
          >
            <NavLink to="/">Home</NavLink>
          </div>
          <div
            className="block text-lg hover:text-gray-400"
            onClick={toggleMenu}
          >
            <NavLink to="/projects">Projects</NavLink>
          </div>
          <div
            className="block text-lg hover:text-gray-400"
            onClick={toggleMenu}
          >
            <NavLink to="/contactus">Contact Us</NavLink>
          </div>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="md:hidden flex items-center">
          {/* Hamburger Icon */}
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } mt-4 space-y-4`}
      >
        <div className="block text-lg hover:text-gray-400" onClick={toggleMenu}>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="block text-lg hover:text-gray-400" onClick={toggleMenu}>
          <NavLink to="/projects">Projects</NavLink>
        </div>
        <div className="block text-lg hover:text-gray-400" onClick={toggleMenu}>
          <NavLink to="/contactus">Contact Us</NavLink>
        </div>

        {/* Close Menu Icon */}
        <div className="flex justify-end mt-4">
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
