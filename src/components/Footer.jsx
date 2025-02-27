import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">
          <span className="name-highlight">Ifeoluwa</span>
        </div>
        <a href="mailto:your.email@example.com" className="mail-btn">
          <span className="mail-icon">✉</span>
          Mail Me
        </a>
        <div className="footer-date">
          © {currentYear}
        </div>
      </div>
    </footer>
  );
};

export default Footer;