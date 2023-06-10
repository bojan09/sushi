import "./Navbar.css";

import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="logo">
        Sushi
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/food">Food</Link>
        <Link to="/services">Services</Link>
      </nav>
    </div>
  );
};

export default Navbar;
