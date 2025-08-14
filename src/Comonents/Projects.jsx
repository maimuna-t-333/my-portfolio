import ss2 from '../assets/project-2.1.PNG';
import ss3 from '../assets/project-1.1.PNG';
import ss4 from '../../src/assets/ss4.PNG';
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Blockwise",
    image: ss4,
    tech: ["React", "Firebase", "MongoDB", "Express.js"],
    description: "Choose your perfect apartment with our easy-to-use booking platform.",
    live: "https://blockwise-client.web.app/",
    github: "https://github.com/maimuna-t-333/blockwise-client",
    challenges: "Handling role-based access and secure bookings with real-time updates.",
    future: "Add AI-based recommendations and mobile app integration."
  },
  {
    name: "Food Sharing Platform",
    image: ss3,
    tech: ["React", "Firebase", "MongoDB", "Express.js"],
    description: "Connect with your community to share surplus food, reduce waste, and make meals go further.",
    live: "https://food-sharing-platform-client.web.app/",
    github: "https://github.com/maimuna-t-333/food-sharing-platform-client",
    challenges: "Managing real-time food requests and location-based sharing efficiently.",
    future: "Introduce automated notifications and donation tracking features."
  },
  {
    name: "HobbyHub",
    image: ss2,
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    description: "Discover, share, and grow your passions with a community of hobby enthusiasts.",
    live: "https://hobby-hub-4cfce.web.app/",
    github: "https://github.com/maimuna-t-333/hobby-hub-client",
    challenges: "Building a scalable community platform and handling user-generated content.",
    future: "Add gamification and hobby recommendation engine."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="bg-black text-white py-16 px-4">
      <h2 className="text-3xl text-center font-bold mb-10">Projects</h2>
      
      {/* Responsive Vertical Layout */}
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black border border-gray-700 p-4 rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm mb-2">{project.description}</p>
            <button
              onClick={() => setSelectedProject(project)}
              className="btn-outline border text-white px-4 py-2 rounded-md mt-2 w-full sm:w-auto hover:cursor-pointer"
            >
              View More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black  bg-opacity-70 flex justify-center items-center p-4 z-50">
          <div className="bg-black border text-white max-w-lg w-full rounded-lg p-6 relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <p className="mb-2"><strong>Tech Stack:</strong> {selectedProject.tech.join(", ")}</p>
            <p className="mb-2"><strong>Description:</strong> {selectedProject.description}</p>
            <p className="mb-2"><strong>Challenges Faced:</strong> {selectedProject.challenges}</p>
            <p className="mb-4"><strong>Future Plans:</strong> {selectedProject.future}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="border text-white px-4 py-2 rounded-md text-center">
                Live Demo
              </a>
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md text-center">
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;


