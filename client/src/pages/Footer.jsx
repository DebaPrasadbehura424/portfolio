import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center space-x-6">
          <div className="text-3xl hover:text-gray-400">
            <FaFacebook />
          </div>
          <div className="text-3xl hover:text-gray-400">
            <FaTwitter />
          </div>
          <div className="text-3xl hover:text-gray-400">
            <FaLinkedin />
          </div>
          <div className="text-3xl hover:text-gray-400">
            <FaGithub />
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
