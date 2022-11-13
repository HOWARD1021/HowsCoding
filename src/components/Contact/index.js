import React from "react";
import classes from './ContactMe.module.scss';
import { motion } from "framer-motion";

const containerVariants = {
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      mass:0.5,
      damping:8,
      when:"beforeChildren",
      staggerChildren:0.4
    }
  },
  exit:{
    x:'-100vw',
    transition:{
      ease:'easeInOut'
    }
  }
}
const baseVariants ={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}
function ContactMe() {
  return (
    <motion.div className={classes.workTitle} variants={containerVariants}
    initial="hidden" animate ='visible' exit='exit'>      
      <h1 >welcome ContactMe</h1>
      <motion.p variants={baseVariants}>HERE ARE MY contact method :</motion.p>
      <motion.div variants={baseVariants}>
        ms04626730@gmail.com
      {/* {['pizza','pizza','pizza','pizza'].map(topping => <div key={topping}>{topping}</div>)} */}
      </motion.div>
    </motion.div>
  );
}

export default ContactMe;
