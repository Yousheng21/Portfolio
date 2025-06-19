import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer-wrapper">
        <div className="links-bar">
          <a href="#" className="logo">
            adamkeyes
          </a>
          <nav className="visually-hidden" aria-label="Footer Navigation">
            <a href="#">Home</a>
            <a href="#about-me">About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact-me">Contact me</a>
          </nav>
          <h2 className="visually-hidden">Find me online</h2>

          <div className="social-links">
            <a
              href="https://github.com/"
              className="social-link"
              target="_blank"
            >
              <span className="visually-hidden">go to my Github</span>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <title>Github</title>
                <use href="#iconGithub"></use>
              </svg>
            </a>
            <a
              href="https://www.frontendmentor.io/"
              className="social-link"
              target="_blank"
            >
              <span className="visually-hidden">go to my Frontend Mentor</span>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <title>Frontend Mentor</title>
                <use href="#iconFrontendmentor"></use>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              className="social-link"
              target="_blank"
            >
              <span className="visually-hidden">go to my Linkedin</span>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <title>Linkedin</title>
                <use href="#iconLinkedin"></use>
              </svg>
            </a>
            <a
              href="https://twitter.com/"
              className="social-link"
              target="_blank"
            >
              <span className="visually-hidden">go to my X</span>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <title>X</title>
                <use href="#iconX"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
