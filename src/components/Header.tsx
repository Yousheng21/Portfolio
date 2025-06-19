import React from "react";
import "./header.css";
import { LanguageSwitcher } from "../ui/SwitchLng";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="wrapper header-wrapper">
        <div className="links-bar">
          <h1 aria-label="Adam Keyes">
            <span className="sub-status">{t("status")}: </span>
            <span className="status">in search remote or office work</span>
          </h1>

          <div className="social-links">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
