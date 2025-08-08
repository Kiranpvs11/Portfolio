// src/components/Education.js
import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-gray-100 py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-8 text-center">
        EDUCATION
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
            Master of Science in Computer and Information Science
          </h3>
          <p className="text-gray-600">Southern Arkansas Univeristy, Magnolia -  Jan 2023 to Aug 2024.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
            Bachelor of Technology in Electronics and Communication Engineering
          </h3>
          <p className="text-gray-600">Griet, Hyderabad, India - 2016 to 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
