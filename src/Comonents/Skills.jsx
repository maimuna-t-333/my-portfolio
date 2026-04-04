import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiC, SiDaisyui } from "react-icons/si";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { icon: <FaHtml5 size={36} color="#E34F26" />, name: "HTML5" },
      { icon: <FaCss3Alt size={36} color="#1572B6" />, name: "CSS3" },
      { icon: <SiJavascript size={36} color="#F7DF1E" />, name: "JavaScript" },
      { icon: <FaReact size={36} color="#61DAFB" />, name: "React" },
      { icon: <SiTailwindcss size={36} color="#38B2AC" />, name: "Tailwind CSS" },
      { icon: <SiDaisyui size={36} color="#FF69B4" />, name: "DaisyUI" },
      
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { icon: <FaNodeJs size={36} color="#339933" />, name: "Node.js" },
      { icon: <SiExpress size={36} color="#ffffff" />, name: "Express.js" },
      { icon: <SiMongodb size={36} color="#47A248" />, name: "MongoDB" },
      { icon: <SiFirebase size={36} color="#FFCA28" />, name: "Firebase" },
    ],
  },
  {
    category: "Other",
    skills: [
      { icon: <SiC size={36} color="#A8B9CC" />, name: "C" },
      { icon: <FaFigma size={36} color="#F24E1E" />, name: "Figma" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
        <p className="text-center text-gray-400 mb-12">Technologies I work with</p>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">
                {group.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {group.skills.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.15, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900 hover:bg-zinc-800 transition"
                  >
                    {tech.icon}
                    <span className="text-xs text-gray-300 text-center leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;