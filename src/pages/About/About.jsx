import "./About.css";

import React from "react";

// assets
import sushi_3 from "../../assets/sushi-3.png";
import sushi_2 from "../../assets/sushi-2.png";
import arrow_up from "../../assets/arrow-up-right.svg";

const About = () => {
  return (
    <div className="about-us" id="about">
      <div className="about-us__image">
        <div className="about-us__image-sushi_3">
          <img src={sushi_3} alt="sushi" />
        </div>

        <button className="about-us__button">
          Learn more
          <img src={arrow_up} alt="learn more" />
        </button>

        <div className="about-us__image-sushi_2">
          <img src={sushi_2} alt="sushi" />
        </div>
      </div>

      <div className="about-us__content">
        <p class="sushi__subtitle">About Us / 私たちに関しては</p>
        <h3 class="sushi__title">
          Our mission is to bring true Japanese flavours to you.
        </h3>
        <p class="sushi__description">
          We will continue to provide the experience of Omotenashi, the Japanese
          mindset of hospitality, with our shopping and dining for our
          customers.
        </p>
      </div>
    </div>
  );
};

export default About;
