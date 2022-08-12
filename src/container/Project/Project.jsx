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
        <img
          src={images.LineRight}
          alt="line"
          className="line-right"
          loading="lazy"
        />
        <div className="project__content">
          <motion.div
            initial="hidden"
            animate="title"
            variants={variants}
            className="project__title"
          >
            <img src={images.Dot3} alt="dot" loading="lazy" />
            <h1
              className="title"
              onMouseEnter={textTitleEnter}
              onMouseLeave={textLeave}
            >
              WHAT I ACHIEVED
            </h1>
            <img src={images.Line1} alt="line" loading="lazy" />
          </motion.div>
          <div className="project__wrap">
            <div className="project__wrap-left">
              <motion.a
                href="https://www.behance.net/gallery/128077319/Photo-Manipulation"
                initial="hidden"
                animate="item1"
                variants={variants}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project1} alt="project" loading="lazy" />
                </div>
                <div className="name">
                  <span>Top 1</span>
                  <span>in photo manipulation class</span>
                </div>
              </motion.a>
              <motion.a
                href="https://www.behance.net/gallery/135002563/Saigon-through-35mm"
                initial="hidden"
                animate="item2"
                variants={variants}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project2} alt="project" loading="lazy" />
                </div>
                <div className="name">
                  <span>Top 1</span>
                  <span>in photography class</span>
                </div>
              </motion.a>
              <motion.a
                href="https://www.behance.net/gallery/126235925/Digital-Illustration"
                initial="hidden"
                animate="item3"
                variants={variants}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project3} alt="project" loading="lazy" />
                </div>
                <div className="name">
                  <span>Top 1</span>
                  <span>in illustration class</span>
                </div>
              </motion.a>
              <motion.a
                href="https://www.behance.net/gallery/137968877/BRAND-IDENTITY-Meraki-Tattoo-Studio"
                initial="hidden"
                animate="item5"
                variants={variants}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project5} alt="project" loading="lazy" />
                </div>
                <div className="name">
                  <span>Leader and Top 1</span>
                  <span>
                    in final project: Brand Identity - Meraki Ink Studio
                  </span>
                </div>
                <motion.div
                  initial="hidden"
                  animate="item6"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  variants={variants}
                  className="more"
                >
                  <img src={images.Line2} alt="more" loading="lazy" />
                  <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    and many other projects which you can find on my Behance
                  </p>
                  <img src={images.Dot1} alt="dot" loading="lazy" />
                </motion.div>
              </motion.a>
            </div>
            <div className="project__wrap-right">
              <motion.a
                href="https://www.behance.net/gallery/147888083/Ve-nghe-yeu-ke-Book-Illustration"
                initial="hidden"
                animate="item4"
                variants={variants}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="project__wrap-item"
              >
                <div className="img">
                  <img src={images.Project4} alt="project" loading="lazy" />
                </div>
                <div className="name">
                  <span>Illustrator of </span>
                  <span>Ve, Nge, Yeu, Ke book (2022)</span>
                </div>
              </motion.a>
            </div>
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

export default Project;
