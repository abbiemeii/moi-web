import { images } from 'constants';
import React from 'react';

import './Project.scss';
import { motion } from 'framer-motion';

const Project = ({ textEnter, textTitleEnter, textLeave }) => {
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
        delay: 1,
      },
    },
    item2: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    item3: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.4,
      },
    },
    item4: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.6,
      },
    },
    item5: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.8,
      },
    },
    item6: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 2,
      },
    },
  };

  return (
    <div className="project">
      <div className="container">
        <img src={images.LineRight} alt="line" className="line-right" />
        <div className="project__content">
          <motion.div
            initial="hidden"
            animate="title"
            variants={variants}
            className="project__title"
          >
            <img src={images.Dot3} alt="dot" />
            <h1
              className="title"
              onMouseEnter={textTitleEnter}
              onMouseLeave={textLeave}
            >
              WHAT I ACHIEVED
            </h1>
            <img src={images.Line1} alt="line" />
          </motion.div>
          <div className="project__wrap">
            <div className="project__wrap-left">
              <motion.div
                initial="hidden"
                animate="item1"
                variants={variants}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project1} alt="project" />
                </div>
                <div
                  className="name"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <span>Top 1</span>
                  <span>in photo manipulation class</span>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="item2"
                variants={variants}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project2} alt="project" />
                </div>
                <div
                  className="name"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <span>Top 1</span>
                  <span>in photography class</span>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="item3"
                variants={variants}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project3} alt="project" />
                </div>
                <div
                  className="name"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <span>Top 1</span>
                  <span>in illustration class</span>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="item5"
                variants={variants}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project5} alt="project" />
                </div>
                <div
                  className="name"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <span>Leader and Top 1</span>
                  <span>
                    in final project: Brand Identity - Meraki Ink Studio
                  </span>
                </div>
                <motion.div
                  initial="hidden"
                  animate="item6"
                  variants={variants}
                  className="more"
                >
                  <img src={images.Line2} alt="more" />
                  <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    and many other projects which you can find on my Behance
                  </p>
                  <img src={images.Dot1} alt="dot" />
                </motion.div>
              </motion.div>
            </div>
            <div className="project__wrap-right">
              <motion.div
                initial="hidden"
                animate="item4"
                variants={variants}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project4} alt="project" />
                </div>
                <div
                  className="name"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <span>Illustrator of </span>
                  <span>Ve, Nge, Yeu, Ke book (2022)</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <img src={images.LineLeft} alt="line" className="line-left" />
      </div>
    </div>
  );
};

export default Project;
