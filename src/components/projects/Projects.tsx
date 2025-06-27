import React from "react";
import "./projects.css";
import { data, projectTitleVariants, projectVariants } from "./constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="projects"
      className="projects"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="wrapper projects-wrapper">
        <motion.header
          variants={projectTitleVariants}
          className="projects-header"
        >
          <h2 className="heading heading-xl">{t("projects")}</h2>
        </motion.header>

        <div className="projects-list">
          {data.map((project) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="projects-item"
            >
              <picture className="project-thumb">
                <img
                  src={project.path}
                  alt="screenshot of design portfolio website project"
                  width="540"
                  style={{ height: "400px" }}
                />
              </picture>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  paddingBlock: "1.25rem 0.5rem",
                }}
              >
                <h3 className="heading heading-m project-title">
                  {project.title}
                </h3>
                <span> - </span>
                <p className="project-desc">{t(project.description)}</p>
              </div>

              <p className="project-tags">{project.tags.join(",  ")}</p>

              <div className="project-links">
                <a
                  href={project.links.project}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  {t("view_project")}
                </a>
                {project.links.code && (
                  <a href="https://github.com/" className="btn">
                    {t("view_code")}
                  </a>
                )}
                {project.links.projectMobile && (
                  <a
                    href={project.links.projectMobile}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    {t("view_mobile_project")}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
