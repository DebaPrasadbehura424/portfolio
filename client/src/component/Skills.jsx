import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaFigma,
  FaPaintBrush,
  FaServer,
  FaPython,
  FaCogs,
} from "react-icons/fa";

function Skills(props) {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#181818] text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaHtml5 className="text-orange-500 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              HTML5
            </h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaCss3Alt className="text-blue-500 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              CSS3
            </h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaJsSquare className="text-yellow-500 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              JavaScript
            </h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaReact className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              React
            </h3>
          </div>

          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaNodeJs className="text-green-500 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              Node.js
            </h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaDatabase className="text-orange-600 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              MongoDB
            </h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaServer className="text-gray-700 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              MySQL
            </h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaServer className="text-purple-500 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              Hibernate
            </h3>
          </div>

          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaJava className="text-red-600 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              Java
            </h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaPython className="text-blue-500 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              Python
            </h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaCogs className="text-gray-800 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              C++
            </h3>
          </div>

          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaFigma className="text-blue-700 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              Figma
            </h3>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300">
            <FaPaintBrush className="text-pink-500 text-3xl mx-auto mb-4" />
            <h3 className="text-[12px] font-semibold text-[#181818] text-center">
              UI/UX Design
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
