import "./Home.css";

import React from "react";
import AOS from "aos";
AOS.init();

// assets
import sushi from "../../assets/sushi-1.png";
import play_circle from "../../assets/play-circle.svg";
import user from "../../assets/user.png";

const Home = () => {
  return (
    <div className="home">
      {/* Image container */}
      <div className="home-img">
        <img src={sushi} alt="sushi" />

        <h2>
          日 <br />
          本 <br /> 食
        </h2>

        <div class="home-img__overlay"></div>
      </div>
      {/* Content - container */}
      <div className="home-content">
        <div className="home-content__info">
          <h1>Feel the taste of Japanese cousine </h1>
          <p>
            Feel the taste of the most popular Japanese food from anywhere at
            any time.
          </p>

          <div className="home-content__buttons">
            <button className="home-content__order-button">How to Order</button>
            <button className="home-content__play-button">
              <img src={play_circle} alt="play" />
              Play video
            </button>
          </div>
        </div>

        <div className="home-content__testimonial">
          <div className="home-content__customer flex-center">
            <h4>
              24 <span>4k+</span>
            </h4>
          </div>
          <p>Happy customers</p>
          <div className="home-content__review">
            <img src={user} alt="user" />
            <p>"This is the best Japanese food delivery service, I've tried.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
