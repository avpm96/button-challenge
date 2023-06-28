import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
//proyecto
function App() {
  const [isButton, setButton] = useState(true);
  function handleClick() {
    setButton(!isButton);
  }
  return (
    <>
      <div>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Button Challenge </h1>
      <h2>Andrea Perez </h2>
      <p className="read-the-docs">
        Click on the Button to switch from ON to OFF
      </p>
      <div className="card">
        <button onClick={handleClick}>
          <span>{isButton ? "ON" : "OFF"}</span>
        </button>
      </div>
    </>
  );
}

export default App;
