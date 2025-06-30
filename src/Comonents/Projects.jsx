import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import ss1 from '../assets/ss-1.PNG';
import ss2 from '../assets/ss-2.PNG';
import ss3 from '../assets/ss-3.PNG';


// Example projects data
const projects = [
  {
    id: 1,
    title: "JobTrack Website",
    description: "An intuitive platform to track your job applications, organize resumes and cover letters, set reminders, and stay on top of your job search—all in one place.",
    image: ss1, 
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://auth-integration-fef4f.web.app/",
    githubLink: "https://github.com/maimuna-t-333/job-track-website1",
  },
  {
    id: 2,
    title: "Hobby Hub",
    description: "Discover, share, and grow your passions with a community of hobby enthusiasts.",
    image: ss2,
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://hobby-hub-4cfce.web.app/",
    githubLink: "https://github.com/maimuna-t-333/hobby-hub-client",
  },
  {
    id: 3,
    title: "Food Sharing Platform",
    description: "“Connect with your community to share surplus food, reduce waste, and make meals go further.",
    image: ss3,
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://food-sharing-platform-client.web.app/",
    githubLink: "https://github.com/maimuna-t-333/food-sharing-platform-client",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col md:flex-row bg-black border rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black border text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded hover:bg-gray-300 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded hover:bg-gray-300 transition"
                >
                  <FaGithub /> GitHub
                </a>
                <button
                  className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded hover:bg-gray-300 transition"
                  onClick={() => alert(`More details about: ${project.title}`)}
                >
                  <FaInfoCircle /> Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
