import React from "react";
import classes from "./AboutMe.module.scss";
import TimeLine from "../TimeLine";
import Introduce from "../Introduce";

function AboutMe() {
  return (
    <>
      <div className={classes.workTitle}>
      <Introduce />
        <TimeLine />
      </div>
    </>
  );
}

export default AboutMe;
