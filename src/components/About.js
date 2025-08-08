// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 leading-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I'm a passionate developer focused on building intuitive and modern web experiences.
          I love turning ideas into real-world, interactive applications using technologies like
          React, Tailwind, and backend APIs. Outside of coding, I enjoy learning about design,
          exploring AI, and mentoring other developers.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
