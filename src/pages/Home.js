import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import data from "../components/Data";
import Collection from "../components/Collection";
import Features from "../components/Features";

export default function Home() {
  const ourColecction = data[0].collectionData.map((item) => (
    <Collection key={item.name} collection={item} />
  ));

  const features = data[1].featuresData.map((item) => (
    <Features key={item.title} feature={item} />
  ));

  return (
    <>
      <div className="create-plan-card">
        <div className="create-plan-content__container">
          <h1 className="create-plan-card__title">Great coffee made simple.</h1>
          <p className="create-plan-card__text">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to="/create" className="create-plan-card__button">
            Create your plan
          </Link>
        </div>
      </div>
      <h1 className="collection-title">our collection</h1>
      {ourColecction}
      <div className="features">
        <h1 className="features-title">Why choose us?</h1>
        <p className="features-text">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        {features}
      </div>
    </>
  );
}
