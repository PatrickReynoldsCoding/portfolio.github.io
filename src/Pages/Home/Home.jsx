import React, { Component } from "react";

// Components
import TopToggle from "./TopToggle";
import { HomeAnimation } from "./HomeAnimation";

export default function Home() {
  return (
    <div>
      <HomeAnimation className="animation-container" />
      <TopToggle />
    </div>
  );
}
