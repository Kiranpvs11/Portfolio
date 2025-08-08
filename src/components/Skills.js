// src/components/Skills.js
import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript", "React.js", "Next.js", "Node.js", "Express.js",
    "Spring Boot", "MongoDB", "MySQL", "HTML", "CSS",
    "Git", "AWS", "Docker", "Jenkins", "Python", "Java", "C++"
  ];

  return (
    <section id="skills" className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8 text-center">
        SKILLS
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 text-center py-3 px-4 rounded-md shadow-sm hover:shadow-md transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
