import React from "react";

function Projects() {
  // Example project data
  const projectData = [
    {
      name: "Project 1",
      description: "A brief description of Project 1.",
      technologies: "React, Tailwind CSS, Node.js",
      link: "https://example.com/project1",
    },
    {
      name: "Project 2",
      description: "A brief description of Project 2.",
      technologies: "React, Express, MongoDB",
      link: "https://example.com/project2",
    },
    {
      name: "Project 3",
      description: "A brief description of Project 3.",
      technologies: "Vue.js, Vuetify, Firebase",
      link: "https://example.com/project3",
    },
    {
      name: "Project 4",
      description: "A brief description of Project 4.",
      technologies: "Angular, TypeScript, Bootstrap",
      link: "https://example.com/project4",
    },
    {
      name: "Project 5",
      description: "A brief description of Project 5.",
      technologies: "Next.js, Tailwind CSS, Prisma",
      link: "https://example.com/project5",
    },
    {
      name: "Project 6",
      description: "A brief description of Project 6.",
      technologies: "React, Redux, Firebase",
      link: "https://example.com/project6",
    },
  ];

  return (
    <div className="bg-[#181818] text-white py-12 w-full h-auto  md:h-screen">
      <h2 className="text-4xl font-semibold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <p className="text-gray-500 mb-4">
              <strong>Technologies Used:</strong> {project.technologies}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              View Live Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
