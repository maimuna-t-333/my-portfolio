import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa"; // Icon for work experience

const Experience = () => {
    return (
        <div className="bg-black text-white py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl text-center font-bold mb-10 pb-1">
                    Experience
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center border rounded-lg p-6 shadow-lg"
                >
                    <div className="text-white text-5xl mb-4 md:mb-0 md:mr-6">
                        <FaLaptopCode />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold">
                            MERN Stack Developer Intern
                        </h3>
                        <p className="text-white font-semibold my-3">
                            Xynerotech Solutions
                        </p>
                        <p className="text-gray-400 text-sm">Aug 2025 – Present </p>
                        <p className="text-white mt-3">
                            Currently working on building and maintaining full-stack web applications using
                            MongoDB, Express.js, React, and Node.js. Contributing to both
                            frontend and backend features, collaborating with the team, and
                            delivering quality code for real-world client projects.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Experience;

