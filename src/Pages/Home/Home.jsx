import React, { useState, useEffect, Component } from "react";
import styled from "styled-components";

// Components
import HomeTopToggle from "./HomeTopToggle";
import { HomeAnimation } from "./HomeAnimation";
import About from "./About/About";
import Projects from "./Projects/Projects";

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
      <HomeTopToggle switchPage={switchPage} />
      {showAbout ? <About /> : <Projects />}
    </div>
  );
}
