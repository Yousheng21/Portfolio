import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

import pdfFile from "../../assets/resume.pdf";
import "./hero.css";

export const Hero = () => {
  const { t } = useTranslation();

  const [text] = useTypewriter({
    words: [
      t("my_tagline.one"),
      t("my_tagline.two"),
      t("my_tagline.three"),
      t("my_tagline.four"),
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="about-me" className="hero bg-img-after bg-img-rings">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h3 className="heading heading-xl hero-headline">
            <span>{t("hello")}</span> <span>{t("my_name")}</span>.
          </h3>

          <p className="sub-heading hero-caption">{t("my_description")}</p>
          <span className="hero-info">
            {text}
            <Cursor cursorColor="var(--accent-color)" />
          </span>
          <a href="#contact-me" className="btn">
            {t("contact_me")}
          </a>
          <a
            href={pdfFile}
            className="btn-link"
            target="_blank"
            rel="noreferrer"
          >
            {t("download_resume")}
          </a>
          <a
            href={"https://disk.yandex.ru/d/ZwNuzSlHFo1xxw"}
            className="btn-link"
            target="_blank"
            rel="noreferrer"
          >
            {t("examples_code")}
          </a>
        </div>
      </div>
    </section>
  );
};
