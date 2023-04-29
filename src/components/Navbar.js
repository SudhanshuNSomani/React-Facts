import React from "react";
import reactLogo from "../images/react-icon-small.png";
import "../style.css";

export default function () {
  return (
    <nav>
      <div className="logo">
        <img src={reactLogo} />
        <h1>ReactFacts</h1>
      </div>

      <p>My First React Project </p>
    </nav>
  );
}
