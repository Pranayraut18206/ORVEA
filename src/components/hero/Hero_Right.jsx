import React from "react";
import Orange_Button from "../common/Orange_Button";


const Hero_Right = () => {
  return (
    <div className="hero-right-container">

      {/* RIGHT */}
      <div className="hero-right-box">

        <h1 className="hero-title">
          Rethink <br />
          Decaf
        </h1>

        <div className="hero-review-section">

          <p className="hero-review-text">
            "The best decaf I've ever tasted"
          </p>

          <p className="hero-rating">
            <span className="hero-stars">
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </span>
            &nbsp;4.8/5
          </p>

        </div>

        <div className="hero-button-wrapper">
          <Orange_Button text="TRY A WELCOME PACK" />
        </div>

      </div>
    </div>
  );
};

export default Hero_Right;
