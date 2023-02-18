import React, { useState, useEffect, Component } from "react";

// Components
import TopToggle from "./TopToggle";
import { HomeAnimation } from "./HomeAnimation";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  const [showAbout, setShowAbout] = useState(true);
  const [animationHasMounted, setAnimationHasMounted] = useState(false);

  const switchPage = (page) => {
    page === "projects" ? setShowAbout(true) : setShowAbout(false);
  };

  useEffect(() => {
    setAnimationHasMounted(true);
  }, []);

  return (
    <div>
      {animationHasMounted ? null : (
        <HomeAnimation className="animation-container" />
      )}
      <TopToggle switchPage={switchPage} />
      {showAbout ? <About /> : <Projects />}
    </div>
  );
}
