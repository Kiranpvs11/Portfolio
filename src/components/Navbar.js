import React from "react";
import { Link } from "react-scroll";



const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Venkatasaikiran Panga</h1>
        <div className="space-x-6">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">Home</Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link>
          <Link to="education" smooth={true} duration={500} className="cursor-pointer">Education</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
