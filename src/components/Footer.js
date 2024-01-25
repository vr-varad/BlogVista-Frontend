// Footer.js

import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import {Mode} from '../UserContext'

const Footer = () => {
  const {mode} = useContext(Mode)
  return (
    <footer className={mode?'darkMode darkModeLink footer':'lightMode lightModeLink footer'}>
      <div className="footer-options">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <a href="#about">About Me</a>
      </div>
      <div className="subscribe">
        <input type="email" placeholder="Subscribe to newsletter" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
