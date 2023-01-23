import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";

// Animation
import { HomeAnimation } from "./Pages/Home/HomeAnimation";

// Components

// Pages
import { NavHome } from "./Components/NavigationBarAdder";
import { NavContact } from "./Components/NavigationBarAdder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeAnimation />

        <Routes>
          <Route path="/" element={<NavHome />} />
          <Route path="/contact" element={<NavContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
