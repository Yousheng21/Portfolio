import React from "react";
import "./header.css";
import { LanguageSwitcher } from "../swithLng/SwitchLng";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="wrapper header-wrapper">
        <div className="links-bar">
          <div aria-label="Adam Keyes">
            <span className="status"><b>{t("status")}:</b> {t("search_work")}</span>
          </div>

          <div className="social-links">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
