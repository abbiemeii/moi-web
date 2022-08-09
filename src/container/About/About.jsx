import { images } from 'constants';
import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';

const About = ({ textEnter, textTitleEnter, textLeave }) => {
  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    title: {
      scale: [1, 1.3, 1],
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    visible2: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 2,
      },
    },
    visible3: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 2.2,
      },
    },
    image: {
      scale: [1, 1.2, 1],
      rotate: [10, -10, 0],
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <div className="about">
      <div className="container">
        <img src={images.LineRight} alt="line" className="line-right" />
        <div className="about__content">
          <motion.h1
            initial="hidden"
            animate="title"
            variants={variants}
            onMouseEnter={textTitleEnter}
            onMouseLeave={textLeave}
          >
            HOANG PHUNG MY
          </motion.h1>

          <motion.h4 initial="hidden" animate="visible2" variants={variants}>
            GRAPHIC DESIGNER & ILLUSTRATOR
          </motion.h4>
          <motion.p
            initial="hidden"
            animate="visible3"
            variants={variants}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Hi, I’m a Graphic Designer and Illustrator who aspires to create
            aesthetically pleasing arts/designs! I love exploring new things, I
            put my heart and soul into my works and I am the most fun to work
            with xD
          </motion.p>
        </div>
        <div className="about__img">
          <motion.img
            initial="hidden"
            animate="image"
            variants={variants}
            src={images.Moi1}
            alt="moi"
          />
        </div>
        <img src={images.LineLeft} alt="line" className="line-left" />
      </div>
    </div>
  );
};

export default About;
