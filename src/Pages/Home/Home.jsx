import React, { useState, Component } from "react";
import styled from "styled-components";

// Components
import TopToggle from "./TopToggle";
import { HomeAnimation } from "./HomeAnimation";
import About from "./About";
import Projects from "./Projects";
import BugFix from "./BugFix";

export default function Home() {
  const [showAbout, setShowAbout] = useState(true);

  const switchPage = (page) => {
    console.log(page);
  };
  return (
    <div>
      <HomeAnimation className="animation-container" />
      <TopToggle switchPage={switchPage} />
      {showAbout ? <About /> : <Projects />}
    </div>
  );
}
