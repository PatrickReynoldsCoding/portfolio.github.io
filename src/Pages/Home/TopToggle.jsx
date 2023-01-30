import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import "./home.css";

const bounceIn = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

const bounceOut = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.9);
  }
`;

const ToggleContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  min-width: 100vw;
  height: 100vh;
  align-items: flex-start;
  justify-content: center;
  width: auto;
  margin: 84px auto;
  z-index: 1;
`;
const ToggleButton = styled.button`
  padding: 10px 20px;
  width: 100px;
  border: none;
  outline: none;
  background-color: #333;
  color: #fff;

  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
  animation: ${(props) => (props.isActive ? bounceIn : bounceOut)} 0.5s;

  &.active {
    background-color: #ddd;
    color: #333;
  }

  &:hover {
    background-color: #bbb;
  }
`;

const LineUnder = styled.div`
  position: fixed;
  margin-left: ${(props) => (props.isAboutActive ? "-100px" : "100px")};
  width: 92px;
  height: 3px;
  bottom: 10px;
  margin-bottom: 10px;
  background-color: white;
  transition: margin-left 0.2s ease;
`;

const TopToggle = (props) => {
  const [currentView, setCurrentView] = useState("about");
  const [isAboutActive, setIsAboutActive] = useState(true);

  const handleClick = () => {
    setIsAboutActive(!isAboutActive);
    props.switchPage();
    currentView === "about"
      ? setCurrentView("projects")
      : setCurrentView("about");
  };

  return (
    <ToggleContainer>
      <ToggleButton
        isActive={isAboutActive}
        className={`toggle-switch__option ${
          currentView === "about" ? "active" : ""
        }`}
        onClick={handleClick}
      >
        About
      </ToggleButton>
      <ToggleButton
        isActive={!isAboutActive}
        className={`toggle-switch__option ${
          currentView === "projects" ? "active" : ""
        }`}
        onClick={handleClick}
      >
        Projects
      </ToggleButton>
      <LineUnder isAboutActive={isAboutActive} />
    </ToggleContainer>
  );
};

export default TopToggle;
