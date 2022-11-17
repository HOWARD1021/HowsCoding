import React from "react";
import classes from "./Introduce.module.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    // x: "-100vw",
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const baseVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Introduce() {
  return (
    <>
      <motion.div
        className={classes.Introduce}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Hi My Name is Howard
        <motion.div className={classes.Introducecontent} variants={baseVariants}>
           I'm currently based in Taiwan , working as a
          Frontend-end Engineer 
        </motion.div>
      </motion.div>
    </>
  );
}

export default Introduce;
