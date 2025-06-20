import React from "react";
import "./footer.css";

import { ReactComponent as SvgTelegram } from "../../assets/telegram.svg";
import { ReactComponent as SvgGithub } from "../../assets/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer-wrapper">
        <div className="links-bar">
          <a href="#" className="logo">
            Vladimir Ermachenkov
          </a>

          <div className="social-links">
            <a
              href="https://github.com/Yousheng21"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <SvgGithub width={12} height={12} title="Github" />
            </a>
            <a
              href="https://t.me/v_ermachenkov"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <SvgTelegram width={24} height={24} title="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
