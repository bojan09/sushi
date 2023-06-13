import "./Menu.css";

import React from "react";

// assets
import sushi_6 from "../../assets/sushi-6.png";
import sushi_7 from "../../assets/sushi-7.png";
import sushi_8 from "../../assets/sushi-8.png";
import sushi_9 from "../../assets/sushi-9.png";
import sushi_10 from "../../assets/sushi-10.png";
import sushi_11 from "../../assets/sushi-11.png";
import sushi_12 from "../../assets/sushi-12.png";
import arrow_right from "../../assets/arrow-right.svg";
import star_img from "../../assets/star.svg";

const Menu = () => {
  return (
    <div className="popular-foods" id="menu">
      <h2 class="popular-foods__title">Popular Food / 人気</h2>
      <div className="popular-foods__filters sushi__hide-scrollbar">
        <button class="popular-foods__filter-btn active">All</button>
        <button class="popular-foods__filter-btn">
          <img src={sushi_9} alt="sushi 9" />
          Sushi
        </button>
        <button class="popular-foods__filter-btn">
          <img src={sushi_8} alt="sushi 8" />
          Ramen
        </button>
        <button class="popular-foods__filter-btn">
          <img src={sushi_7} alt="sushi 7" />
          Udon
        </button>
        <button class="popular-foods__filter-btn">
          <img src={sushi_6} alt="sushi 6" />
          Danggo
        </button>
        <button class="popular-foods__filter-btn">All</button>
      </div>

      <div className="popular-foods__catalogue">
        {/* Popular foods - Card __ 1 */}
        <article class="popular-foods__card">
          <img
            class="popular-foods__card-image"
            src={sushi_12}
            alt="sushi-12"
          />
          <h4 class="popular-foods__card-title">Chezu Sushi</h4>

          <div class="popular-foods__card-details flex-between">
            <div class="popular-foods__card-rating">
              <img src={star_img} alt="star" />
              <p>4.9</p>
            </div>

            <p class="popular-foods__card-price">$21.00</p>
          </div>
        </article>

        {/* Popular foods - Card __ 2 */}
        <article class="popular-foods__card active-card">
          <img
            class="popular-foods__card-image"
            src={sushi_11}
            alt="sushi-11"
          />
          <h4 class="popular-foods__card-title">Original Sushi</h4>

          <div class="popular-foods__card-details flex-between">
            <div class="popular-foods__card-rating">
              <img src={star_img} alt="star" />
              <p>5.0</p>
            </div>

            <p class="popular-foods__card-price">$19.00</p>
          </div>
        </article>

        <article class="popular-foods__card">
          <img
            class="popular-foods__card-image"
            src={sushi_10}
            alt="sushi-10"
          />
          <h4 class="popular-foods__card-title">Ramen Legendo</h4>

          <div class="popular-foods__card-details flex-between">
            <div class="popular-foods__card-rating">
              <img src={star_img} alt="star" />
              <p>4.7</p>
            </div>

            <p class="popular-foods__card-price">$13.00</p>
          </div>
        </article>
      </div>

      <button className="popular-foods__button">
        Explore food
        <img src={arrow_right} alt="arrow-right" />
      </button>
    </div>
  );
};

export default Menu;
