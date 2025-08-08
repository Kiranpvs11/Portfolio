import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Education from "./components/Education";

// src/App.js
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollProgressBar />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
