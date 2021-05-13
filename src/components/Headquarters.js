import React from "react";
import "./Headquarters.css";

export default function Headquarters({
  headquarters: { img, country, street, city, PC, number },
}) {
  return (
    <div className="location">
      <img src={img} alt="country illustration" />
      <h1 className="country">{country}</h1>
      <div className="address">
        <p>{street}</p>
        <p>{city}</p>
        <p>{PC}</p>
        <p>{number}</p>
      </div>
    </div>
  );
}
