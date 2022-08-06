import { images } from 'constants';
import React from 'react';

import './Background.scss';

const Background = () => {
  return (
    <div>
      {' '}
      <div className="background">
        <div className="container">
          <img src={images.LineRight} alt="line" className="line-right" />
          <div className="background__img">
            <img src={images.Moi2} alt="moi" />
          </div>
          <div className="background__content">
            <h1>EDUCATION</h1>
            <div className="bacground__content-wrap">
              <div className="bacground__content-item">
                <div className="time">
                  <span>MAY 2021</span>
                </div>
                <img src={images.Dot1} alt="dot" />
                <p>
                  Started my journey as a multimedia student at Arena
                  Multimedia.
                </p>
              </div>
              <div className="bacground__content-item">
                <div className="time">
                  <span>MARCH 2022</span>
                </div>
                <img src={images.Dot2} alt="dot" />
                <div className="march">
                  <p>
                    Graduated the first semester - Graphic Design with top
                    score.
                  </p>
                  <p>
                    See the detail of my final project{' '}
                    <span>[Meraki Ink Studio]</span> on my Behance xD
                  </p>
                </div>
              </div>
              <div className="bacground__content-item">
                <div className="time new">
                  <span>AUGUST 2022</span>
                </div>
                <img src={images.Dot3} alt="dot" />
                <p>On my way to finish semester II - UIUX</p>
              </div>
            </div>
          </div>

          <img src={images.LineLeft} alt="line" className="line-left" />
        </div>
      </div>
    </div>
  );
};

export default Background;
