import React from "react";
import "./projects.css";

interface IData {
  title: string;
  path: string;
  tags: Array<string>;
  links: {
    project: string;
    code?: string;
  };
}

const data: IData[] = [
  {
    title: "Dogma",
    path: "/images/dogma.gif",
    tags: ["React", "Typescript", "NextJS"],
    links: { project: "", code: "" },
  },
  {
    title: "DogmaTime",
    path: "/images/dogmatime.gif",
    tags: ["React", "Typescript", "Redux"],
    links: { project: "", code: "" },
  },
  {
    title: "Metalgo",
    path: "/images/metalgo.gif",
    tags: ["React", "Typescript", "Next"],
    links: { project: "", code: "" },
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="wrapper projects-wrapper">
        <header className="projects-header">
          <h2 className="heading heading-xl">Projects</h2>
          <a href="#contact-me" className="btn">
            Contact me
          </a>
        </header>

        <div className="projects-list">
          {data.map((project) => (
            <div className="projects-item">
              <picture className="project-thumb">
                <img
                  src={project.path}
                  alt="screenshot of design portfolio website project"
                  width="540"
                  style={{ height: "400px" }}
                />
              </picture>

              <h3 className="heading heading-m project-title">
                {project.title}
              </h3>
              <p className="project-tags">
                {project.tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </p>

              <div className="project-links">
                <a
                  href={project.links.project}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  View project
                </a>
                {project.links.code && (
                  <a href="https://github.com/" className="btn">
                    View code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
