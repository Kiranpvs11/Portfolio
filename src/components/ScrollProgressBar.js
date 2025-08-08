// src/components/ScrollProgressBar.js
import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[56px] left-0 w-full h-[4px] bg-transparent z-50">
      <div
        className="bg-red-500 h-full transition-all duration-200 ease-in-out"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
