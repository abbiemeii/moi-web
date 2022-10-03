import {
  About,
  Background,
  Contact,
  Header,
  Project,
  Skill,
  Experience,
} from 'container';
import React, { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import './index.scss';

function App() {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
    },
    titleText: {
      height: 150,
      width: 150,
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
    },
  };

  const textTitleEnter = () => setCursorVariant('titleText');
  const textEnter = () => setCursorVariant('text');
  const skillEnter = () => setCursorVariant('skill');
  const textLeave = () => setCursorVariant('default');

  return (
    <div className="App">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>

      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <About
              mousePosition={mousePosition}
              textEnter={() => textEnter()}
              textTitleEnter={() => textTitleEnter()}
              textLeave={() => textLeave()}
            />
          }
        />
        <Route
          path="/background"
          element={
            <Background
              mousePosition={mousePosition}
              textEnter={() => textEnter()}
              textTitleEnter={() => textTitleEnter()}
              textLeave={() => textLeave()}
            />
          }
        />
        <Route
          path="/experience"
          element={
            <Experience
              mousePosition={mousePosition}
              textEnter={() => textEnter()}
              textTitleEnter={() => textTitleEnter()}
              textLeave={() => textLeave()}
            />
          }
        />
        <Route
          path="/skills"
          element={
            <Skill
              mousePosition={mousePosition}
              textEnter={() => textEnter()}
              textTitleEnter={() => textTitleEnter()}
              textLeave={() => textLeave()}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Project
              mousePosition={mousePosition}
              textEnter={() => textEnter()}
              textTitleEnter={() => textTitleEnter()}
              textLeave={() => textLeave()}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              mousePosition={mousePosition}
              textEnter={() => textEnter()}
              textTitleEnter={() => textTitleEnter()}
              textLeave={() => textLeave()}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
