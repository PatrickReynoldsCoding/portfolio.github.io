import React, { useState, Component } from "react";
import styled from "styled-components";

// Components
import TopToggle from "./TopToggle";
import { HomeAnimation } from "./HomeAnimation";
import About from "./About";

export default function Home() {
  const [showAbout, setShowAbout] = useState(true);
  return (
    <div>
      <HomeAnimation className="animation-container" />
      <TopToggle onToggle={() => setShowAbout(!showAbout)} />
      {showAbout ? <About /> : <Projects />}
    </div>
  );
}
