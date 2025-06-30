// import React from "react";
// import { motion } from "framer-motion";

// const Education = () => {
//   return (
//     <div className="bg-black text-white py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="max-w-3xl mx-auto text-center"
//       >
//         <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow-500 inline-block pb-1">
//           Education
//         </h2>
//         <h3 className="text-xl font-semibold mt-4">
//           B.Sc in Computer Science and Engineering
//         </h3>
//         <p className="text-gray-300 mt-2">
//           Sylhet Engineering College
//         </p>
//         <p className="text-gray-400 mt-4 leading-relaxed">
//           I am currently pursuing my Bachelor of Science in Computer Science and Engineering at Sylhet Engineering College. My studies have deepened my understanding of software development, data structures, algorithms, and modern web technologies. I am passionate about applying this knowledge to build real-world projects and further develop my skills as a frontend developer.
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Education;


import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    return (
        <div className="bg-black text-white py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl text-center font-bold mb-10  pb-1">
                    Education
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center border rounded-lg p-6 shadow-lg"
                >
                    <div className="text-white text-5xl mb-4 md:mb-0 md:mr-6">
                        <FaGraduationCap />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold">
                            B.Sc in Computer Science and Engineering
                        </h3>
                        <p className="text-white font-semibold my-3">
                            Sylhet Engineering College
                        </p>
                        <p className="text-white mt-3">
                            Currently pursuing my Bachelor's degree in Computer Science and Engineering.
                            My coursework focuses on software development, data structures,
                            algorithms, and modern web technologies. I am dedicated to
                            applying this knowledge to build impactful digital solutions and
                            continually growing as a developer.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Education;

