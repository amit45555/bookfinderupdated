import React from "react";
import "./index.css";
function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing the best services
        to our users. Our team is passionate about delivering high-quality
        content and exceptional user experience.
      </p>
      <p>
        Our mission is to create a platform that connects people and provides
        valuable resources to help them achieve their goals.
      </p>
      <img
        src="https://via.placeholder.com/400"
        alt="About us"
        className="about-image"
      />
    </div>
  );
}

export default About;
