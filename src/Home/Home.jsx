import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import img from '../../src/assets/Maimunah Tabassum.png'
import Banner from '../assets/Pages/Banner';
import { div } from 'framer-motion/client';
import Aboutme from '../assets/Pages/Aboutme';
import Footer from '../Comonents/Footer';
import Skills from '../Comonents/Skills';
import Education from '../Comonents/Education';
import Contact from '../Comonents/Contact';

const navLinks = [
    { name: 'About Me', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Education', path: 'education' },
    { name: 'Contact', path: 'contact' },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.20,
        },
    },
};

const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Home = () => {

    return (
        <>
            <div className="bg-black w-full h-16 flex items-center justify-end pr-16">
                <div className="flex justify-between gap-210">
                    <div>
                        <img className="h-16 w-16 rounded-full" src={img} alt="" />
                    </div>
                    <div>
                        <motion.div
                            className="flex gap-6 text-[18px] mt-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                        >
                            {navLinks.map((link) => (
                                <motion.div key={link.path} variants={itemVariants}>
                                    <Link
                                        to={link.path}
                                        className="relative group overflow-hidden"
                                    >
                                        <span className="text-white transition duration-300 group-hover:text-white group-hover:drop-shadow-md">
                                            {link.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <Banner />
            <Aboutme/>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );

};

export default Home;
