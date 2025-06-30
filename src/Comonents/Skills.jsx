import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiC } from "react-icons/si";

const techIcons = [
  { icon: <SiC size={40} color="#A8B9CC" />, name: "C" },
  { icon: <FaHtml5 size={40} color="#E34F26" />, name: "HTML" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS" },
  { icon: <SiJavascript size={40} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaReact size={40} color="#61DAFB" />, name: "React" },
  { icon: <SiTailwindcss size={40} color="#38B2AC" />, name: "Tailwind CSS" },
  { icon: <SiTailwindcss size={40} color="#38B2AC" />, name: "DaisyUI" },
  { icon: <FaNodeJs size={40} color="#339933" />, name: "Node.js" },
  { icon: <SiExpress size={40} color="#ffffff" />, name: "Express.js" },
  { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
  { icon: <SiFirebase size={40} color="#FFCA28" />, name: "Firebase" },
  { icon: <FaFigma size={40} color="#F24E1E" />, name: "Figma" },
];

const Skills = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl  font-bold mb-8  text-center pb-1">
          My Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-5xl mx-auto mt-8">
          {techIcons.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center"
            >
              {tech.icon}
              <span className="text-xs text-white mt-4">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
