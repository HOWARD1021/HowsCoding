import React, { useEffect, useState, useRef } from "react";
import classes from "./Work.module.scss";
import image from "../../asset/image";
import { motion } from "framer-motion";

const buttonVariable = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      yoyo: 6,
    },
  },
};

function MyWork() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className={classes.workTitle}>
      <motion.div
        ref={carousel}
        className={classes.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={classes.innerCarousel}
        >
          {image.map((item, index) => {
            return (
              <motion.div
                variants={buttonVariable}
                whileHover="hover"
                key={index}
                className={classes.item}
              >
                <a href={item.href} target="_blank" rel="noreferrer">
                  <img src={item.image} alt="" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MyWork;
