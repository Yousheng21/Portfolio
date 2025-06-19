import React from "react";
import "./skills.css";
import { data } from "./constants";

export const Skills = () => {
  return (
    <section id="skills" className="skills bg-img-after bg-img-rings">
      <div className="wrapper skills-wrapper">
        <div className="skills-title">
          <h1>Skills</h1>
          <span>Технологии, с которыми я знаком, и работаю по сей день</span>
        </div>
        <ul className="skills-list">
          {data.map((skill) => (
            <li className="skills-item">
              {skill.img}
              <p className="sub-heading">{skill.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
