import "./Navbar.css";

import React from "react";

// assets
import search from "../../assets/search.svg";
import menu from "../../assets/menu.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="header__nav">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            Sushi
          </Link>
          <div class="header__logo-overlay"></div>
        </div>

        <ul className="header__menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/food">Food</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <img src={search} alt="search" />
          </li>
        </ul>

        {/* Mobile Navbar */}
        <ul className="header__menu-mobile">
          <li>
            <img src={menu} alt="menu" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
