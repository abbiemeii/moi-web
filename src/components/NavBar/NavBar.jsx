import React, { useState } from 'react';

import './NavBar.scss';
import { HiX } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { images } from 'constants';
import { Link, NavLink } from 'react-router-dom';

const headerMenu = [
  { name: 'About me', path: '/' },
  { name: 'My background', path: '/background' },
  { name: 'Experience', path: '/experience' },
  { name: 'My skills', path: '/skills' },
  { name: 'My projects', path: '/projects' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: '-100%',
    },
  };

  return (
    <div className="header__navbar">
      <div className="header__navbar-logo">
        <Link to="/" className="box">
          <img src={images.Logo} alt="logo" loading="lazy" />
          <img
            src={images.LogoGradient}
            alt="logo"
            className="image-hover"
            loading="lazy"
          />
        </Link>
      </div>
      <ul className="header__navbar-links">
        {headerMenu.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="header__navbar-tool">
        <form action="">
          {/* <input type="search" required />
          <img
            src={images.SearchGradient}
            alt="search"
            className="search-button"
            loading="lazy"
          /> */}
        </form>

        <Link to="/contact" className="box">
          <img src={images.Contact} alt="contact-icon" loading="lazy" />
          <img
            src={images.ContactGradient}
            className="image-hover"
            alt="contact-icon"
            loading="lazy"
          />
        </Link>
        <div className="header__navbar-menu">
          <GiHamburgerMenu onClick={() => setIsOpen(true)} />
          {isOpen && (
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={variants}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setIsOpen(false)} />
              <ul>
                {headerMenu.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.path} onClick={() => setIsOpen(false)}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
