import { Variants } from "framer-motion";

export const contactLeftVariants: Variants = {
  offscreen: {
    x: -1000,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  },
};

export const contactRightVariants: Variants = {
  offscreen: {
    x: 1000,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  },
};
