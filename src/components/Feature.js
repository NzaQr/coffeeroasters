import React from "react";
import "./Feature.css";

export default function Features({ feature: { img, title, description } }) {
  return (
    <div className="feature-container">
      <img className="feature-logo" src={img} alt="bean logo"></img>
      <div>
        <h2 className="feature-title">{title}</h2>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}
