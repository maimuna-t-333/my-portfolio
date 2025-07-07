import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import img from '../../src/assets/Maimunah Tabassum.png';
import Banner from '../assets/Pages/Banner';
import Aboutme from '../assets/Pages/Aboutme';
import Footer from '../Comonents/Footer';
import Skills from '../Comonents/Skills';
import Education from '../Comonents/Education';
import Contact from '../Comonents/Contact';
import Projects from '../Comonents/Projects';

const navLinks = [
    { name: 'About Me', path: 'about' },
    { name: 'Skills', path: 'skills' },
   
    { name: 'Education', path: 'education' },
     { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <header className="bg-black  w-full px-4 py-4 flex items-center justify-between sticky top-0 z-50">
                {/* Logo */}
                <div className="flex items-center gap-4  lg:mx-10">
                    <img className="h-20 w-20 rounded-full" src={img} alt="logo" />

                </div>

                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Nav Links (Desktop) */}
                <motion.div
                    className="hidden md:flex gap-6 text-[18px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {navLinks.map((link) => (
                        <motion.div key={link.path} variants={itemVariants}>
                            <Link
                                to={link.path}
                                className="text-white hover:text-gray-300 transition duration-300 mr-6"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black px-4 pt-2 pb-4 flex flex-wrap gap-4 justify-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-white text-base hover:text-gray-300 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}

            {/* Rest of the content */}
            <Banner />
            <Aboutme />
            <Skills />
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;

