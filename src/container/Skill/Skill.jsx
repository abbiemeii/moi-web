import { images } from 'constants';
import React from 'react';
import './Skill.scss';
import { motion } from 'framer-motion';

const Skill = ({ textTitleEnter, textEnter, textLeave }) => {
  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    title: {
      scale: [1, 1.3, 1],
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
    item1: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
    item2: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    item3: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    item4: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.4,
      },
    },
  };

  return (
    <div className="skill">
      <div className="container">
        <motion.h1
          className="title"
          initial="hidden"
          animate="title"
          variants={variants}
          onMouseEnter={textTitleEnter}
          onMouseLeave={textLeave}
        >
          WHAT I CAN OFFER
        </motion.h1>
        <div className="skill__content">
          <motion.div
            className="skill__content-item"
            initial="hidden"
            animate="item1"
            variants={variants}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <div className="img">
              <img src={images.Skill1} alt="skill" loading="lazy" />
            </div>
            <div className="name pink">
              <span>Brand Identity</span>
            </div>
          </motion.div>
          <motion.div
            className="skill__content-item"
            initial="hidden"
            animate="item2"
            variants={variants}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <div className="img">
              <img src={images.Skill2} alt="skill" loading="lazy" />
            </div>
            <div className="name aqua">
              <span>Graphic Design</span>
            </div>
          </motion.div>
          <motion.div
            className="skill__content-item"
            initial="hidden"
            animate="item3"
            variants={variants}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <div className="img">
              <img src={images.Skill3} alt="skill" loading="lazy" />
            </div>
            <div className="name pink">
              <span>Illustration</span>
            </div>
          </motion.div>
          <motion.div
            className="skill__content-item"
            initial="hidden"
            animate="item4"
            variants={variants}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <div className="img">
              <img src={images.Skill4} alt="skill" loading="lazy" />
            </div>
            <div className="name aqua">
              <span>Photography</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
