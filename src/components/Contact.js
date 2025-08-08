import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Want to collaborate or hire? Drop me an email below 👇
        </motion.p>

       {/* Email */}
        <motion.p
          className="flex items-center justify-center gap-2 text-lg text-gray-800 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MdEmail size={20} className="text-gray-700" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=panga.kiransai1999@gmail.com"
            className="text-blue-600 hover:underline"
          >
            panga.kiransai1999@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
