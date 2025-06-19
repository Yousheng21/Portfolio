import React from "react";
import "./hero.css";

export const About = () => {
  return (
    <section id="about-me" className="hero bg-img-after bg-img-rings">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h3 className="heading heading-xl hero-headline">
            <span>Nice to </span>meet you! I'm <span>Adam Keyes</span>.
          </h3>

          <p className="sub-heading hero-caption">
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <a href="#contact-me" className="btn">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};
