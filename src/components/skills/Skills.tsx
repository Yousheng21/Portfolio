import React from "react";
import "./skills.css";
import { data, skillsTitleVariants, skillsVariants } from "./constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="skills"
      className="skills bg-img-after bg-img-rings"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="wrapper skills-wrapper">
        <motion.div variants={skillsTitleVariants} className="skills-title">
          <h1>{t("skills")}</h1>
          <span>{t("skills-description")}</span>
        </motion.div>
        <motion.ul variants={skillsVariants} className="skills-list">
          {data.map((skill) => (
            <li key={skill.title} className="skills-item">
              {skill.img}
              <p className="sub-heading">{skill.title}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};
