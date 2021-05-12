import React from "react";
import "./Step.css";

export default function Step({ steps: { num, title, description } }) {
  return (
    <div className="step-container">
      <h1 className="step-number">{num}</h1>
      <h2 className="step-title">{title}</h2>
      <p className="step-description">{description}</p>
    </div>
  );
}
