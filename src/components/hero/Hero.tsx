import React from "react";

import pdfFile from "../../assets/resume.pdf";

import "./hero.css";

export const Hero = () => {
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
          <a href={pdfFile} className="btn-link" target="_blank" rel="noreferrer">
            Download resume .pdf
          </a>
        </div>
      </div>
    </section>
  );
};
