// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        delay: 0.1
      }}
    >
      <nav>
        <motion.div 
          className="logo-wrapper"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div 
            className="logo-glow"
            animate={{ 
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1.2 : 1
            }}
          />
          <motion.span
            className="logo-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Ifeoluwa.K
          </motion.span>
        </motion.div>
        
        <motion.a
          className="cta-button"
          href="mailto:kunyeifeoluwa@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence>
            {scrolled ? (
              <motion.span
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Contact
              </motion.span>
            ) : (
              <motion.span
                key="hire"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Hire Me
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Header;