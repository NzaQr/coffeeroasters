import React from "react";
import "./Plan.css";

export default function Plan() {
  return (
    <>
      <div className="create-plan-card">
        <div className="create-plan-content__container">
          <h1 className="create-plan-card__title">Create a plan</h1>
          <p className="create-plan-card__text">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </div>
      <div className="steps-create-plan">
        <div class="timeline-container">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div className="steps-component">
          <div className="step-container">
            <h1 className="step-number">01</h1>
            <h2 className="step-title-create-plan">Pick your coffee</h2>
            <p className="step-description-create-plan">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="step-container">
            <h1 className="step-number">02</h1>
            <h2 className="step-title-create-plan">Choose the frequency</h2>
            <p className="step-description-create-plan">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>

          <div className="step-container">
            <h1 className="step-number">03</h1>
            <h2 className="step-title-create-plan">Pick your coffee</h2>
            <p className="step-description-create-plan">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
