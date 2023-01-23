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

const circleToSquare = keyframes`
  from {
    border-radius: 70%;
  }
  to {
    border-radius: 0%;
  }
`;

const Navbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  width: 100vw;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.img`
  height: 50%;
`;

const Hamburger = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 30px;
  height: 30px;
  margin-right: 5vw;
  gap: 1px;

  &:hover {
    cursor: pointer;
    animation: ${rotate} 0.2s linear forwards;
  }
  &:hover > .circle {
    cursor: pointer;
    animation: ${circleToSquare} 0.2s ease-out forwards;
  }
  &:focus {
    animation: ${rotate} 0.2s linear reverse;
  }
  &:focus > .circle {
    animation: ${circleToSquare} 0.2s ease-out forwards reverse;
  }
`;

const Circle = styled.div`
  background-color: #fff;
  border-radius: ${(props) => (props.hover ? "0%" : "70%")};
`;

export const NavigationBar = () => {
  return (
    <Navbar>
      <Logo src="./logo.png"></Logo>
      <Hamburger>
        <Circle className="circle" />
        <Circle className="circle" />
        <Circle className="circle" />
        <Circle className="circle" />
        <Circle className="circle" />
        <Circle className="circle" />
        <Circle className="circle" />
        <Circle className="circle" />
        <Circle className="circle" />
        <Circle className="circle" />
      </Hamburger>
    </Navbar>
  );
};
