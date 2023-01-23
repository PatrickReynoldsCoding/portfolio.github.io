import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// Animations
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const Navbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  width: 85vw;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Hamburger = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
    animation: ${rotate} 0.2s linear;
  }
`;

const Circle = styled.div`
  background-color: #fff;
  border-radius: ${(props) => (props.hover ? "0%" : "70%")};

  &:hover {
    cursor: pointer;
    animation: all 0.2s linear ease-in-out;
  }
`;

export const NavigationBar = () => {
  const [isHoverOn, setIsHoverOn] = useState(false);
  return (
    <Navbar>
      <Logo>Patrick Reynolds</Logo>
      <Hamburger
        onMouseEnter={() => setIsHoverOn(true)}
        onMouseLeave={() => setIsHoverOn(false)}
      >
        <Circle hover={isHoverOn} />
        <Circle hover={isHoverOn} />
        <Circle hover={isHoverOn} />
        <Circle hover={isHoverOn} />
        <Circle hover={isHoverOn} />
        <Circle hover={isHoverOn} />
        <Circle hover={isHoverOn} />
        <Circle hover={isHoverOn} />
        <Circle hover={isHoverOn} />
        <Circle hover={isHoverOn} />
      </Hamburger>
    </Navbar>
  );
};
