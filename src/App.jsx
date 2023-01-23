import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Components
import { NavigationBar } from "./Components/NavigationBar";
import TopToggle from "./Homepage/Components/TopToggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavigationBar />
      <TopToggle />
    </div>
  );
}

export default App;
