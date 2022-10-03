import { images } from 'constants';
import React from 'react';
import { motion } from 'framer-motion';

import './Experience.scss';

const Experience = ({ textEnter, textTitleEnter, textLeave }) => {
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
    visible2: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    visible3: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    visible4: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.4,
      },
    },
  };

  return (
    <div className="experience">
      <div className="container">
        <img
          src={images.LineRight}
          alt="line"
          className="line-right"
          loading="lazy"
        />

        <div className="experience__content">
          <motion.h1
            className="title"
            initial="hidden"
            animate="title"
            variants={variants}
            onMouseEnter={textTitleEnter}
            onMouseLeave={textLeave}
          >
            EXPERIENCE
          </motion.h1>
          <div className="experience__content-wrap">
            <motion.div
              className="experience__content-item"
              initial="hidden"
              animate="visible2"
              variants={variants}
            >
              <div className="time">
                <span>10.2021 - 12.2021</span>
              </div>
              <img src={images.Dot1} alt="dot" loading="lazy" />
              <div className="text">
                <h6 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  INTERN - 9 SOUL
                </h6>
                <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  In charge of designing branding materials (POSM, packaging,
                  logo..)
                </p>
                <p> Illustrator of Ve, Nge, Yeu, Ke book</p>
              </div>
            </motion.div>
            <motion.div
              className="experience__content-item"
              initial="hidden"
              animate="visible3"
              variants={variants}
            >
              <div className="time new">
                <span>3.2022</span>
              </div>
              <img src={images.Dot2} alt="dot" loading="lazy" />
              <div className="text">
                <h6 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  FREELANCER - TRADECOIN VIETNAM
                </h6>
                <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  In charge of designing marketing materials for TCVN website &
                  other social media sites
                </p>
                <p>
                  More at:
                  <a href="https://tcvn.community/"> https://tcvn.community/</a>
                </p>
              </div>
            </motion.div>
            <motion.div
              className="experience__content-item"
              initial="hidden"
              animate="visible4"
              variants={variants}
            >
              <div className="time new">
                <span>8.2022</span>
              </div>
              <img src={images.Dot3} alt="dot" loading="lazy" />
              <div className="text">
                <h6 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  FREELANCER - K+ VIETNAM
                </h6>
                <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  In charge of designing marketing materials (POSM, web banners,
                  app banners,..) for K+ channel
                </p>
                <p>
                  More at:
                  <a href="https://tcvn.community/">
                    <span> https://www.kplus.vn/#</span>
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <img
          src={images.LineLeft}
          alt="line"
          className="line-left"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Experience;
