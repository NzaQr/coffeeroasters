import React from "react";
import "./Collection.css";

export default function Collection({ collection: { img, name, description } }) {
  return (
    <div className="collection-container">
      <img className="coffee-logo" alt="coffee logo" src={img} />
      <div className="coffee-info">
        <h2 className="coffee-name">{name}</h2>
        <p className="coffee-description">{description}</p>
      </div>
    </div>
  );
}
