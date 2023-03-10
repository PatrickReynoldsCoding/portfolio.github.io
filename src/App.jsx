import { Component, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";

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
          <Route path="/project/:id" element={<NavProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
