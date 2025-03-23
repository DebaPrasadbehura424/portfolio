import React from "react";
import img1 from "../images/img1.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gray-50 font-sans py-16">
      <main className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Introduction */}
        <section>
          <h2 className="text-4xl font-semibold text-[#181818] leading-tight mb-6">
            Hi, I'm DebaPrasad!
          </h2>
          <p className="text-[#181818] text-lg mt-4 leading-relaxed">
            I am a passionate and skilled developer with expertise in modern web
            technologies, backend development, and creative design. My strong
            problem-solving abilities and attention to detail ensure the
            delivery of efficient and maintainable code.
          </p>
          <p className="text-[#181818] text-lg mt-4 leading-relaxed">
            Whether it's building full-stack applications, optimizing backend
            systems, or crafting intuitive user experiences, I am dedicated to
            delivering robust and scalable solutions.
          </p>

          {/* Hire Me Button */}
          <div className="mt-8">
            <NavLink
              to="/contactus"
              className="inline-block bg-black text-white py-3 px-6 rounded-lg text-xl hover:bg-gray-800 transition duration-300"
            >
              Hire me
            </NavLink>
          </div>
        </section>

        {/* Right Section: Image */}
        <section className="flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 lg:w-120 lg:h-120">
            <img
              src={img1}
              alt="DebaPrasad Behura"
              className="rounded-xl w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
