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
    description: "Официальный сайт строительной компании Догма",
    path: "/images/dogma.gif",
    tags: ["React", "Typescript", "NextJS"],
    links: { project: "https://dogma.ru/", code: "" },
  },
  {
    title: "DogmaTime",
    description: "Платформа для организации работы компании",
    path: "/images/dogmatime.gif",
    tags: ["React", "React Native", "Typescript", "Redux"],
    links: { project: "https://app.dogmatime.ru/", code: "" },
  },
  {
    title: "Metalgo",
    description: "Сайт для продажи и расчета цены любых видов металла",
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
