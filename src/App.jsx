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
  NavProjectPage,
} from "./Components/NavigationBarAdder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NavHome />} />
          <Route exact path="/contact" element={<NavContact />} />
          <Route path="/project" element={<NavProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
