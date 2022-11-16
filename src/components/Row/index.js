import React, { useEffect, useState, useRef } from "react";
import classes from "./Row.module.scss";
import image from "../../asset/image";
import { motion } from "framer-motion";

const buttonVariable = {
  hover: {
    scale: 1.1,
  },
};

function Row() {
  const rowRef = useRef();
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="md:space-y-24  mt-40">
      <div className="mt-25 h-40 space-y-0.5 md:space-y-2 px-32">
        <div className="group relative md:-ml-2">
          <button
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              variants={buttonVariable}

            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </motion.svg>
          </button>
          <div
            className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
            ref={rowRef}
          >
            {image.map((item, index) => {
              return (
                <motion.div
                whileHover="hover"
                variants={buttonVariable}
                  key={index}
                  className={classes.item}
                >
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <img src={item.image} alt="" />
                  </a>
                </motion.div>
              );
            })}
          </div>
          <button
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick("right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Row;
