
/* src/components/About.js */
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div 
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      data-aos="fade-up"
    >
      <div className="text">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <strong>Hi, I'm Ife.</strong> <br />
          A recent Law graduate and spontaneous writerrr!
          based in Lagos, Nigeria. I'm passionate about creative writing and dedicated to creating 
          impactful content. Through my work, I aim to deliver messages that resonate 
          and inspire. Join me on this journey as I share insights and create meaningful 
          pieces for everyone.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;