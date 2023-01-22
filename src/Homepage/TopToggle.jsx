import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

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

const ToggleButton = styled.button`
  padding: 10px 20px;
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
  width: ${(props) => (props.isAboutActive ? "100%" : "0")};
  height: 3px;
  background-color: white;
  transition: all 0.2s ease;
`;

const TopToggle = () => {
  const [currentView, setCurrentView] = useState("about");
  const [isAboutActive, setIsAboutActive] = useState(true);

  return (
    <div className="toggle-switch">
      <ToggleButton
        isActive={isAboutActive}
        className={`toggle-switch__option ${
          currentView === "about" ? "active" : ""
        }`}
        onClick={() => {
          setCurrentView("about");
          setIsAboutActive(true);
        }}
      >
        About
      </ToggleButton>
      <ToggleButton
        isActive={!isAboutActive}
        className={`toggle-switch__option ${
          currentView === "projects" ? "active" : ""
        }`}
        onClick={() => {
          setCurrentView("projects");
          setIsAboutActive(false);
        }}
      >
        Projects
      </ToggleButton>
      <LineUnder isAboutActive={isAboutActive} />
    </div>
  );
};

export default TopToggle;
