import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import ss2 from "../assets/project-2.1.PNG";
import ss3 from "../assets/project-1.1.PNG";
import ss4 from "../assets/ss4.PNG";
import ss1 from "../assets/Teaam1.PNG";

const techColors = {
  React: "bg-cyan-900 text-cyan-300",
  Firebase: "bg-yellow-900 text-yellow-300",
  MongoDB: "bg-green-900 text-green-300",
  "Express.js": "bg-gray-700 text-gray-300",
  "Node.js": "bg-green-800 text-green-200",
};

const defaultColor = "bg-zinc-700 text-zinc-300";

const projects = [
  {
    name: "SmartShop",
    image: ss1,
    tech: ["Next", "Next Auth", "MongoDB", "Express.js"],
    description:
      "A full-featured e-commerce platform built as a team project, with product listings, cart management, and secure authentication using Next Auth.",
    live: "https://smartshop-indol.vercel.app/",
    github: "https://github.com/NazmulhaqueD/smart-shop",
    challenges:
      "Coordinating team workflows with Git, integrating Next Auth with MongoDB, and managing shared state across the cart and checkout flow.",
    future:
      "Convert into a mobile app so users can shop on the go with a native experience."
  },
  {
    name: "Blockwise",
    image: ss4,
    tech: ["React", "Firebase", "MongoDB", "Express.js"],
    description:
      "Choose your perfect apartment with our easy-to-use booking platform.",
    live: "https://blockwise-client.web.app/",
    github: "https://github.com/maimuna-t-333/blockwise-client",
    challenges:
      "Handling role-based access and secure bookings with real-time updates.",
    future:
      "Add AI-based recommendations and mobile app integration.",
  },
  {
    name: "Food Sharing Platform",
    image: ss3,
    tech: ["React", "Firebase", "MongoDB", "Express.js"],
    description:
      "Connect with your community to share surplus food, reduce waste, and make meals go further.",
    live: "https://food-sharing-platform-client.web.app/",
    github:
      "https://github.com/maimuna-t-333/food-sharing-platform-client",
    challenges:
      "Managing real-time food requests and location-based sharing efficiently.",
    future:
      "Introduce automated notifications and donation tracking features.",
  },
  {
    name: "HobbyHub",
    image: ss2,
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    description:
      "Discover, share, and grow your passions with a community of hobby enthusiasts.",
    live: "https://hobby-hub-4cfce.web.app/",
    github: "https://github.com/maimuna-t-333/hobby-hub-client",
    challenges:
      "Building a scalable community platform and handling user-generated content.",
    future: "Add gamification and hobby recommendation engine.",
  },
];

const TechBadge = ({ label }) => (
  <span
    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
      techColors[label] || defaultColor
    }`}
  >
    {label}
  </span>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <div id="projects" className="bg-black text-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl text-center font-bold mb-10">Projects</h2>

      </motion.div>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-lg hover:border-zinc-500 transition"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-zinc-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:border-white transition"
                >
                  <FaGithub size={14} /> GitHub
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-gray-400 px-4 py-2 rounded-lg text-sm hover:text-white transition border border-zinc-700 hover:border-zinc-500"
                >
                  Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)" }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-zinc-900 border border-zinc-700 text-white max-w-lg w-full rounded-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <FaTimes size={18} />
            </button>

            <h3 className="text-2xl font-bold mb-1">{selectedProject.name}</h3>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <div className="space-y-3 text-sm text-gray-300">
              <p><span className="text-white font-medium">Description: </span>{selectedProject.description}</p>
              <p><span className="text-white font-medium">Challenges: </span>{selectedProject.challenges}</p>
              <p><span className="text-white font-medium">Future Plans: </span>{selectedProject.future}</p>
            </div>

            <div className="flex gap-3 mt-5">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
              >
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:border-white transition"
              >
                <FaGithub size={14} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;