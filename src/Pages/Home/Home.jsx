import React, { Component } from "react";
import styled from "styled-components";

// Components
import TopToggle from "./TopToggle";
import { HomeAnimation } from "./HomeAnimation";
import About from "./about";

export default function Home() {
  return (
    <div>
      <HomeAnimation className="animation-container" />
      <TopToggle />
      <About />
    </div>
  );
}
