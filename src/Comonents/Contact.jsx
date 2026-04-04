import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";


const FORMSPREE_ID = "xvzvbwdl";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-black text-white px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
        <p className="text-center text-gray-400 mb-12">
     
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left — Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 bg-zinc-900 border border-zinc-700 rounded-xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <a href="mailto:maimuna.tabr@gmail.com" className="flex items-center gap-3 text-base hover:text-gray-300 transition">
            <FaEnvelope className="text-white shrink-0" />
            <span>maimuna.tabr@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 text-base">
            <FaPhone className="text-white shrink-0" />
            <span>+880 1736 788394</span>
          </div>
          <a
            href="https://github.com/maimuna-t-333"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base hover:text-gray-300 transition"
          >
            <FaGithub className="text-white shrink-0" />
            <span>github.com/maimuna-t-333</span>
          </a>
          <a
            href="https://www.linkedin.com/in/maimunah-tabassum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base hover:text-gray-300 transition"
          >
            <FaLinkedin className="text-white shrink-0" />
            <span>linkedin.com/in/maimunah-tabassum</span>
          </a>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4 bg-zinc-900 border border-zinc-700 p-8 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-4">Send a message</h3>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-400">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write here..."
              className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition resize-none"
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              ✗ Something went wrong. Please email me directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
