import { images } from 'constants';
import React from 'react';
import { motion } from 'framer-motion';

import './Background.scss';

const Background = ({ textEnter, textTitleEnter, textLeave }) => {
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
    image: {
      scale: [1, 1.2, 1],
      rotate: [10, -10, 0],
      opacity: 1,
      transition: {
        delay: 1.6,
      },
    },
  };

  return (
    <div className="background">
      <div className="container">
        <img
          src={images.LineRight}
          alt="line"
          className="line-right"
          loading="lazy"
        />
        <div className="background__img">
          <motion.img
            src={images.Moi2}
            alt="moi"
            initial="hidden"
            animate="image"
            variants={variants}
          />
        </div>
        <div className="background__content">
          <motion.h1
            className="title"
            initial="hidden"
            animate="title"
            variants={variants}
            onMouseEnter={textTitleEnter}
            onMouseLeave={textLeave}
          >
            EDUCATION
          </motion.h1>
          <div className="bacground__content-wrap">
            <motion.div
              className="bacground__content-item"
              initial="hidden"
              animate="visible2"
              variants={variants}
            >
              <div className="time">
                <span>MAY 2021</span>
              </div>
              <img src={images.Dot1} alt="dot" loading="lazy" />
              <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Started my journey as a multimedia student at Arena Multimedia.
              </p>
            </motion.div>
            <motion.div
              className="bacground__content-item"
              initial="hidden"
              animate="visible3"
              variants={variants}
            >
              <div className="time">
                <span>MARCH 2022</span>
              </div>
              <img src={images.Dot2} alt="dot" loading="lazy" />
              <div className="march">
                <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  Graduated the first semester - Graphic Design with top score.
                </p>
                <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  See the detail of my final project{' '}
                  <span>[Meraki Ink Studio]</span> on my Behance xD
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bacground__content-item"
              initial="hidden"
              animate="visible4"
              variants={variants}
            >
              <div className="time new">
                <span>AUGUST 2022</span>
              </div>
              <img src={images.Dot3} alt="dot" loading="lazy" />
              <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                On my way to finish semester II - UIUX
              </p>
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

export default Background;
