import { motion } from "framer-motion";
import React, { CSSProperties, FC } from "react";
import "./loader.css";

interface IProps {
  style?: CSSProperties;
}

export const Loader: FC<IProps> = ({ style }) => {
  return (
    // <div className="spinner-wrapper">
    <motion.div
      className="spinner"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      }}
      style={style}
    />
    // </div>
  );
};
