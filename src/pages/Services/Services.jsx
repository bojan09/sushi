import "./Services.css";

import React from "react";

const Services = () => {
  return (
    <div className="subscription flex-center" id="services">
      <h2 data-aos="flip-down">
        Get offers stright <br />
        to your inbox
      </h2>
      <p data-aos="fade-up">Sign up for the Sushi newsletter</p>

      <div className="subscription__form" data-aos="fade-up">
        <input type="text" placeholder="Enter your email address" />
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Services;
