import "./Navbar.css";

import React from "react";

// assets
import search from "../../assets/search.svg";
import menu from "../../assets/menu.svg";

// animate on screen library
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

const Navbar = () => {
  return (
    <div>
      <nav className="header__nav">
        <div className="header__logo">
          <a href="/#" className="header__logo-link" data-aos="fade-down">
            Sushi
          </a>
          <div className="header__logo-overlay"></div>
        </div>

        <ul className="header__menu" data-aos="fade-down">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#menu">Menu</a>
          </li>
          <li>
            <a href="/#food">Food</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <img src={search} alt="search" />
          </li>
        </ul>

        {/* Mobile Navbar */}
        <ul className="header__menu-mobile">
          <li>
            <img src={menu} alt="menu" data-aos="fade-down" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
