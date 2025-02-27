import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profileImage from '../../public/image.jpg';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create circles
    const circles = Array(15).fill().map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 15 + 5,
      dx: (Math.random() - 0.5) * 1,
      dy: (Math.random() - 0.5) * 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: `rgba(155, 89, 182, ${Math.random() * 0.3 + 0.1})`,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw circles
      circles.forEach(circle => {
        // Update position
        circle.x += circle.dx;
        circle.y += circle.dy;
        
        // Bounce off edges
        if (circle.x < 0 || circle.x > canvas.width) circle.dx *= -1;
        if (circle.y < 0 || circle.y > canvas.height) circle.dy *= -1;
        
        // Draw circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      
      <motion.div 
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', delay: 0.2 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Welcome!
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Hey there,
            You have just earned your eyes a moment of wonders by showing interest in checking out my works. 
            This is where you find interesting pieces of words strung together by me, to make great content.
            Excited for what's below? Take a scroll and be wowed.
          </motion.p>
          <motion.a 
            href="mailto:example@email.com"
            whileHover={{ scale: 1.05, backgroundColor: '#8e44ad' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        className="hero-image"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', delay: 0.4 }}
      >
        <motion.div
          className="image-container"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <img src={profileImage} alt="Profile" />
          <div className="image-overlay"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;