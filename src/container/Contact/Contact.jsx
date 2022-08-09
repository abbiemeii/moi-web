import { images } from 'constants';
import React from 'react';
import './Contact.scss';
import { motion } from 'framer-motion';

const Contact = ({ textEnter, textTitleEnter, textLeave }) => {
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
    <div className="contact">
      <div className="container">
        <div className="contact__content">
          <motion.h1
            className="title"
            initial="hidden"
            animate="title"
            variants={variants}
            onMouseEnter={textTitleEnter}
            onMouseLeave={textLeave}
          >
            CONTACT ME
          </motion.h1>
          <div className="contact__content-wrap">
            <motion.div
              initial="hidden"
              animate="item1"
              variants={variants}
              className="contact__content-item"
            >
              <div className="image box">
                <img src={images.Email} alt="email" loading="lazy" />
                <img
                  src={images.EmailGradient}
                  className="image-hover"
                  alt="email"
                  loading="lazy"
                />
              </div>
              <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                hoangphungmy@gmail.com
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="item2"
              variants={variants}
              className="contact__content-item"
            >
              <div className="image box">
                <img src={images.Phone} alt="phone" loading="lazy" />
                <img
                  src={images.PhoneGradient}
                  className="image-hover"
                  alt="phone"
                  loading="lazy"
                />
              </div>
              <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                0927 600 609
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="item3"
              variants={variants}
              className="contact__content-item"
            >
              <div className="image box">
                <img src={images.Behance} alt="behance" loading="lazy" />
                <img
                  src={images.BehanceGradient}
                  className="image-hover"
                  alt="behance"
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.behance.net/myhoang3"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                www.behance.net/myhoang3
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="item4"
          variants={variants}
          className="contact__tks"
        >
          <img src={images.Dot4} alt="dot" loading="lazy" />
          <p>Thank you</p>
          <img src={images.Dot5} alt="dot" loading="lazy" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
