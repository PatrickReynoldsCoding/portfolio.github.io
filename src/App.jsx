import { Component, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Components
import { NavigationBar } from "./Components/NavigationBar";

// Pages
import {
  NavHome,
  NavContact,
  NavProject,
} from "./Components/NavigationBarAdder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavHome />} />
          <Route path="/contact" element={<NavContact />} />
          <Route path="/project/:name" element={<NavProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
