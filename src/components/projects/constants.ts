import { Variants } from "framer-motion";

interface IData {
  title: string;
  description: string;
  path: string;
  tags: Array<string>;
  links: {
    project: string;
    code?: string;
  };
}

export const data: IData[] = [
  {
    title: "Dogma",
    description: "projects_description.dogma",
    path: "/images/dogma.gif",
    tags: ["React", "Typescript", "NextJS"],
    links: { project: "https://dogma.ru/", code: "" },
  },
  {
    title: "DogmaTime",
    description: "projects_description.dogmatime",
    path: "/images/dogmatime.gif",
    tags: ["React", "React Native", "Typescript", "Redux"],
    links: { project: "https://app.dogmatime.ru/", code: "" },
  },
  {
    title: "Metalgo",
    description: "projects_description.metalgo",
    path: "/images/metalgo.gif",
    tags: ["React", "Typescript", "NextJS"],
    links: { project: "https://metalgo.biz/", code: "" },
  },
];

export const projectVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const projectTitleVariants: Variants = {
  offscreen: {
    x: -1000,
  },
  onscreen: {
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
