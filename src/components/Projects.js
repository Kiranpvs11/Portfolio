import React from "react";
import { motion } from "framer-motion";

const projects = [

  {
    title: "ConnectX Platform",
    description: "A mobile-first restaurant operations app that streamlines workflows with order requests, timesheet tracking, maintenance logging, and event event management—all in one collaborative platform for real-time team communication.",
    link: "https://apps.apple.com/us/app/connectx101/id6745929518",
  },
  {
    title: "EasyRide – Smart Ride Demand Tracker",
    description: "Android app that listens to WhatsApp/SMS notifications for ride requests, triggers alerts for matched trips, and logs route, time, and frequency data to analyze and predict travel demand patterns.",
    //link: "https://medicalrecords.pspapp.online/form",
  },
  {
    title: "GoruMudhaa Restaurant App",
    description: "A food ordering system with admin control, user roles, and dynamic menus.",
    link: "https://pspapp.online/apps/gorumudha",
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
