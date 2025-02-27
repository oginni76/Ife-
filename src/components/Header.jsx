
/* src/components/Header.js */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <nav>
        <motion.span 
          whileHover={{ scale: 1.1, color: '#9b59b6' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <b><i>Ifeoluwa.K</i></b>
        </motion.span>
        <motion.a 
          href="mailto:example@email.com"
          whileHover={{ scale: 1.05, backgroundColor: '#8e44ad', color: 'white' }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Header;