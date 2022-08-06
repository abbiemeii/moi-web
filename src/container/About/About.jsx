import Button from 'components/Button/Button';
import { images } from 'constants';
import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <img src={images.LineRight} alt="line" className="line-right" />
        <div className="about__content">
          <h1>HOANG PHUNG MY</h1>
          <h4>GRAPHIC DESIGNER & ILLUSTRATOR</h4>
          <p>
            Hi, I’m a Graphic Designer and Illustrator who aspires to create
            aesthetically pleasing arts/designs! I love exploring new things, I
            put my heart and soul into my works and I am the most fun to work
            with xD
          </p>
        </div>
        <div className="about__img">
          <img src={images.Moi1} alt="moi" />
        </div>
        <img src={images.LineLeft} alt="line" className="line-left" />
      </div>
    </div>
  );
};

export default About;
