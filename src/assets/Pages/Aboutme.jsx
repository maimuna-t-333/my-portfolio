import React from 'react';
import { motion } from "framer-motion";

const Aboutme = () => {
    return (
        <div className='bg-black text-white py-16 '>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-3xl text-center font-bold mb-4  border-white pb-1">
                    About Me
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed text-center mx-30 space-y-6">
                    Hello! I'm <span class="font-semibold ">Maimunah Tabassum</span>, a passionate Frontend Developer with a strong focus on writing clean, efficient, and maintainable code. I specialize in building dynamic and responsive web applications using modern JavaScript frameworks like React. I enjoy transforming complex problems into elegant, user-friendly solutions. Whether it's implementing REST APIs, optimizing performance, or designing intuitive interfaces, I am committed to delivering high-quality code that meets both user needs and business goals. I am constantly exploring new technologies such as Mongodb, express.js to stay ahead in the rapidly evolving web development landscape. Collaboration and continuous learning are at the heart of my approach—I love working with cross-functional teams and contributing to open-source projects whenever possible. My ultimate goal is to create digital experiences that are not only visually appealing but also performant and accessible to everyone.


                </p>
            </motion.div>

        </div >
    );
};

export default Aboutme;