// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ email: "", message: "" });
//   };

//   return (
//     <div className="bg-black text-white px-4 py-20">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Contact Information
//         </h2>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
//       >
//         {/* Left - Contact Details */}
//         <div className="space-y-6 bg-black border rounded-xl p-8">
//           <div className="flex items-center gap-3 text-lg">
//             <FaEnvelope className="text-white" />
//             <span>maimuna.tabr@gmail.com</span>
//           </div>
//           <div className="flex items-center gap-3 text-lg">
//             <FaPhone className="text-white" />
//             <span>+8801736788394</span>
//           </div>
//           <div className="flex items-center gap-3 text-lg">
//             <FaGithub className="text-white" />
//             <a
//               href="https://github.com/maimuna-t-333"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:underline"
//             >
//               github.com/maimuna-t-333
//             </a>
//           </div>
//         </div>

//         {/* Right - Contact Form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="space-y-4 bg-black border p-8 rounded-xl"
//         >
//           <h3 className="text-2xl font-semibold mb-4">Send me a message</h3>
//           <div>
//             <label htmlFor="email" className="block mb-1 text-sm">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 "
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block mb-1 text-sm">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               required
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 "
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:border hover:text-white transition"
//           >
//             Send Message
//           </button>
//         </motion.form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ email: "", message: "" });
  };

  return (
    <div className="bg-black text-white px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Contact Information
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Contact Details */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 bg-black border rounded-xl p-8"
        >
          <div className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-white" />
            <span>maimuna.tabr@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaPhone className="text-white" />
            <span>+8801736788394</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaGithub className="text-white" />
            <a
              href="https://github.com/maimuna-t-333"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/maimuna-t-333
            </a>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4 bg-black border p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">Send me a message</h3>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:border hover:text-white transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;


