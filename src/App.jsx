import { Component, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Components
import { NavigationBar } from "./Components/NavigationBar";

// Pages
import {
  NavContact,
  NavAbout,
  NavProjects,
} from "./Components/NavigationBarAdder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavAbout />} />
          <Route path="/about" element={<NavAbout />} />
          <Route path="/projects" element={<NavProjects />} />
          <Route path="/contact" element={<NavContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
