import React from "react";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { SiFirebase } from "react-icons/si";

const Banner = () => {
    return (
        <div className="bg-black w-full min-h-min py-30">
            <div className="max-w-3xl mx-auto text-center px-4">
                <h1 className="text-4xl font-bold text-white">Maimunah Tabassum</h1>
                <h3 className="text-2xl text-white mt-2">Frontend Developer</h3>
                <p className="text-gray-300 mt-4 text-base">
                    Passionate about crafting beautiful and responsive web experiences. I love transforming ideas into interactive and user-friendly interfaces.
                </p>

                {/* Tech icons */}
                <div className="flex justify-center gap-8 mt-6 text-4xl text-white">
                    <motion.div
                        whileHover={{ scale: 1.2, color: "#f7df1e" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaJsSquare title="JavaScript" />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2, color: "#61dafb" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaReact title="React" />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2, color: "#4DB33D" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <SiMongodb title="MongoDB" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2, color: "#FFCA28" }} // Firebase yellow
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <SiFirebase title="Firebase" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


