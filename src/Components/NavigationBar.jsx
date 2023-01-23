import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
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
  border-radius: 50%;
`;

export const NavigationBar = () => (
  <Navbar>
    <Logo>My App</Logo>
    <Hamburger>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Hamburger>
  </Navbar>
);
