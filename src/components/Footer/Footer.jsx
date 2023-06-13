import "./Footer.css";

import React from "react";

// assets
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="footer flex-between">
      <h3 className="footer__logo">Sushi</h3>
      <ul className="footer__nav">
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#food">Food</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
      </ul>
      <ul className="footer__social">
        <li className="flex-center">
          <img src={facebook} alt="facebook" />
        </li>
        <li className="flex-center">
          <img src={instagram} alt="instagram" />
        </li>
        <li className="flex-center">
          <img src={twitter} alt="twitter" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
