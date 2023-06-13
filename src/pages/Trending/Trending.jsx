import "./Trending.css";

import React from "react";

// assets
import check from "../../assets/check.svg";
import sushi_4 from "../../assets/sushi-4.png";
import sushi_5 from "../../assets/sushi-5.png";
import arrow_horizontal from "../../assets/arrow-horizontal.svg";
import arrow_vertical from "../../assets/arrow-vertical.svg";

// animate on screen library
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

const Trending = () => {
  return (
    <div className="trending" id="food">
      <div className="trending-sushi">
        <div className="trending__content" data-aos="fade-right">
          <p className="sushi__subtitle">What’s Trending / トレンド</p>

          <h3 className="sushi__title">Japanese Sushi</h3>
          <p className="sushi__description">
            Feel the taste of the most delicious Sushi here.
          </p>

          <ul className="trending__list flex-between">
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Make Sushi</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Oshizushi</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Uramaki Sushi</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Nigiri Sushi</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Temaki Sushi</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Inari Sushi</p>
            </li>
          </ul>
        </div>

        <div className="trending__image flex-center">
          <img src={sushi_5} alt="sushi-5" data-aos="fade-left" />

          <div className="trending__arrow trending__arrow-left">
            <img src={arrow_vertical} alt="arrow vertical" />
          </div>

          <div className="trending__arrow trending__arrow-bottom">
            <img src={arrow_horizontal} alt="arrow horizontal" />
          </div>
        </div>
      </div>

      <div className="trending__discover" data-aos="zoom-in">
        <p>Discover</p>
      </div>

      <div className="trending-drinks">
        <div className="trending__image flex-center">
          <img src={sushi_4} alt="sushi-4" data-aos="fade-right" />

          <div className="trending__arrow trending__arrow-top">
            <img src={arrow_horizontal} alt="arrow horizontal" />
          </div>

          <div className="trending__arrow trending__arrow-right">
            <img src={arrow_vertical} alt="arrow vertical" />
          </div>
        </div>

        <div className="trending__content" data-aos="fade-left">
          <p className="sushi__subtitle">What’s Trending / トレンド</p>

          <h3 className="sushi__title">Japanese Drinks</h3>
          <p className="sushi__description">
            Feel the taste of the most delicious Japense drinks here.
          </p>

          <ul className="trending__list flex-between">
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Oruncha</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Sakura Tea</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Aojiru</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Ofukucha</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Kombu-cha</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src={check} alt="check" />
              </div>
              <p>Mugicha</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trending;
