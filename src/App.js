import { About, Background, Contact, Header, Project, Skill } from 'container';
import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/background" element={<Background />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
