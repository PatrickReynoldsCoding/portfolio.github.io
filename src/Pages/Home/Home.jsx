import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "./Home.css";
// Components
import TopToggle from "./TopToggle";

// const AnimationContainer = styled(HomeAnimation)`
//   z-index: -1;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
// `;

export default function Home() {
  return (
    <div>
      {/* <HomeAnimation className="animation-container" /> */}
      {/* <AnimationContainer /> */}
      <TopToggle />
    </div>
  );
}
