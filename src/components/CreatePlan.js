import React, { useState } from "react";
import data from "./Data";
import "./CreatePlan.css";

export default function CreatePlan() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {data[4].createPlan.map((item) => (
        <div id={item.id} key={item.id}>
          <div className="question-container">
            <h1 className="question">{item.title}</h1>
          </div>
          {item.options.map((option) => (
            <>
              <div
                key={option.sub_id}
                onClick={() => {
                  setSelected(option);
                }}
                className={` ${
                  selected === option
                    ? "option-container-selected"
                    : "option-container"
                }`}
              >
                <h1 className="option-title">{option.optionTitle}</h1>
                <p className="option-description">{option.description}</p>
              </div>
            </>
          ))}
        </div>
      ))}
    </>
  );
}
