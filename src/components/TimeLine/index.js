import React from "react";
import classes from "./TimeLine.module.scss";
import { aboutMeType } from "../../types/aboutmeType";
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

function TimeLine() {
  return (
      <div className={classes.wrap}>
        <motion.ul
          className={classes.timeline}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {aboutMeType.map((item, index) => {
            return (
              <motion.li key={index}>
                <motion.div
                  variants={baseVariants}
                >
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
  );
}

export default TimeLine;
