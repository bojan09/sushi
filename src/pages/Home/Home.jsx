import "./Home.css";

import React from "react";

// animate on screen library
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

// assets
import sushi from "../../assets/sushi-1.png";
import play_circle from "../../assets/play-circle.svg";
import user from "../../assets/user.png";

const Home = () => {
  return (
    <div className="hero">
      {/* Image container */}
      <div className="hero-image">
        <img src={sushi} alt="sushi" data-aos="fade-up" />
        <h2 data-aos="fade-up">
          日 <br />
          本 <br />食
        </h2>

        <div className="hero-image__overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-content-info" data-aos="fade-left">
          <h1>Feel the taste of Japanese food</h1>
          <p>
            Feel the taste of the most popular Japanese food from anywhere and
            anytime.
          </p>

          <div className="hero-content__buttons">
            <button className="hero-content__order-button">Order Now</button>
            <button className="hero-content__play-button">
              <img src={play_circle} alt="play" />
              How to Order
            </button>
          </div>
        </div>

        <div className="hero-content__testimonial" data-aos="fade-up">
          <div className="hero-content__customer flex-center">
            <h4>
              24<span>k+</span>
            </h4>
            <p>Happy Customers</p>
          </div>

          <div className="hero-content__review">
            <img src={user} alt="user" />
            <p>
              "This is the best Japanese food delivery service that ever
              existed."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
