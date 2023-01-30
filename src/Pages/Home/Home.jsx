import React, { useState, Component } from "react";
import styled from "styled-components";

// Components
import TopToggle from "./TopToggle";
import { HomeAnimation } from "./HomeAnimation";
import About from "./About";

export default function Home() {
  return (
    <div>
      <About></About>
    </div>
  );
}
