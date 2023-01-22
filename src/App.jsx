import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Components
import TopToggle from "./Homepage/TopToggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TopToggle />
    </div>
  );
}

export default App;
