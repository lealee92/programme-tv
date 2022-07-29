import React from "react";
import Programme from "../components/Programme.js";
import Logo from "../components/Logo.js";
import Data from "../assets/data.json";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Logo />
      {Data.map((item) => {
        return <Programme key={item.index} item={item} />;
      })}
    </div>
  );
}

export default App;
