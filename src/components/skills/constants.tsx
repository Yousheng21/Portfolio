import { ReactComponent as SvgJs } from "../../assets/JS.svg";
import { ReactComponent as SvgHtml } from "../../assets/html.svg";
import { ReactComponent as SvgCss } from "../../assets/css.svg";
import { ReactComponent as SvgNode } from "../../assets/Node.svg";
import { ReactComponent as SvgReact } from "../../assets/React.svg";
import { ReactComponent as SvgRedux } from "../../assets/Redux.svg";
import { ReactComponent as SvgTS } from "../../assets/TS.svg";
import { ReactComponent as SvgNext } from "../../assets/next.svg";
import { ReactComponent as SvgReactNative } from "../../assets/react-native.svg";
import { Variants } from "framer-motion";
import { JSX } from "react";

interface IData {
  title: string;
  img: JSX.Element;
}

export const data: IData[] = [
  { title: "HTML", img: <SvgHtml /> },
  { title: "Css", img: <SvgCss /> },
  { title: "ReactNative", img: <SvgReactNative /> },
  { title: "React", img: <SvgReact /> },
  { title: "Redux", img: <SvgRedux /> },
  { title: "Typescript", img: <SvgTS /> },
  { title: "JavaScript", img: <SvgJs /> },
  { title: "NextJS", img: <SvgNext /> },
  { title: "Node", img: <SvgNode /> },
];

export const skillsVariants: Variants = {
  offscreen: {
    y: 500,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "keyframes",
      duration: 0.8,
    },
  },
};

export const skillsTitleVariants: Variants = {
  offscreen: {
    y: -1000,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "keyframes",
      duration: 0.8,
    },
  },
};
