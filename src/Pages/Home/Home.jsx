import React, { useState, Component } from "react";
import styled from "styled-components";

// Components
import TopToggle from "./TopToggle";
import { HomeAnimation } from "./HomeAnimation";
import About from "./About";

export default function Home() {
  const [isAboutActive, setIsAboutActive] = useState(true);
  return (
    <div>
      <HomeAnimation className="animation-container" />
      <TopToggle />
      {isAboutActive ? <About /> : <Projects />}
    </div>
  );
}
