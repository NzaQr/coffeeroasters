import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="create-plan-card">
        <div className="create-plan-content__container">
          <h1 className="create-plan-card__title">Great coffee made simple.</h1>
          <p className="create-plan-card__text">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.{" "}
          </p>
          <Link to="/create" className="create-plan-card__button">
            Create your plan
          </Link>
        </div>
      </div>
    </>
  );
}
