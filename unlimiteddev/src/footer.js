// src/components/Footer.js
import React, { useContext } from 'react';
import { Theme } from './theme';
import './Footer.css';

const Footer = () => {
  const { theme } = useContext(Theme);

  return (
    <footer className={`footer ${theme}`}>
      <div className="social-icons">
        <div className="social-icon">
          <i className="fab fa-github"></i>
          <span>Joe Jassy</span>
        </div>
        <div className="social-icon">
          <i className="fab fa-linkedin"></i>
          <span>Joe Jassy </span>
        </div>
        <div className="social-icon">
          <i className="fab fa-twitter"></i>
          <span>@joejassy</span>
        </div>
        <div className="social-icon">
          <i className="fab fa-telegram"></i>
          <span>user2121</span>
        </div>
        <div className="social-icon">
          <i className="fas fa-envelope"></i>
          <span>joejassyio@gmail.com</span>
        </div>
      </div>
      <div className="footer-text">
        &copy; 2024 Unlimited Developer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
