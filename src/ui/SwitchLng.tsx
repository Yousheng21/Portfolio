import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./switchLng.css";

export const LanguageSwitcher = () => {
  const [switchCheckbox, setSwicthCheckbox] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = async (lang: "en" | "ru") => {
    await i18n.changeLanguage(lang);
    setSwicthCheckbox(!switchCheckbox);
  };

  return (
    <label htmlFor="switch" className="switch">
      <span className="switch-title">Langauage: </span>
      <input
        type="checkbox"
        id="switch"
        className="switch-input"
        onClick={() => changeLanguage(switchCheckbox ? "en" : "ru")}
        checked={switchCheckbox}
      />
      <span
        className="switch-control"
        data-lang-on="en"
        data-lang-off="ru"
      ></span>
    </label>
  );
};
