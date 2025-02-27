import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profileImage from '../../public/image.jpg';
// import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const canvasRef = useRef(null);
//   const navigate = useNavigate();
  
  // Animated particles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Define particles
    const particlesArray = [];
    const colors = ['#9b59b6', '#8e44ad', '#6c3483', '#a569bd', '#c39bd3'];
    
    // Create 40 particles
    for (let i = 0; i < 40; i++) {
      const size = Math.random() * 6 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const directionX = Math.random() * 0.6 - 0.3;
      const directionY = Math.random() * 0.6 - 0.3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.5 + 0.1;
      
      particlesArray.push({
        x, y, directionX, directionY, size, color, opacity
      });
    }

    // Draw and update particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba');
        ctx.fill();
        
        // Update position
        p.x += p.directionX;
        p.y += p.directionY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.directionX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.directionY *= -1;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const titleText = "Creative Vision. Limitless Innovation.";
  const letters = Array.from(titleText);

  return (
    <section className="hero-container">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      
      <div className="hero-content-wrapper">
        <div className="hero-left-container">
          <div className="hero-title-section">
            <h2 className="hero-subtitle">Welcome to my world</h2>
            <div className="hero-title">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className={letter === " " ? "hero-space" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="hero-divider"></div>
          </div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Hey there,
            You have just earned your eyes a moment of wonders by showing interest in checking out my works. This is where you find interesting pieces of words strung together by me, to make great content.
            Excited for what's below? Take a scroll and be wowed.
            {/* Transforming ideas into captivating digital experiences. 
            Explore my portfolio of creative work and discover how together
            we can bring your vision to life. */}
          </motion.p>
          
          <div className="hero-actions">
            <motion.button 
              className="hero-btn primary-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(155, 89, 182, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
            <a href="/" target='_blank'>View Portfolio</a>
            </motion.button>
            
            <motion.button 
              className="hero-btn secondary-btn"
              href="mailto:kunyeifeoluwa@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
                <a href="mailto:kunyeifeoluwa@gmail.com">Let's Connect</a>
            </motion.button>
          </div>
        </div>
        
        <motion.div 
          className="hero-right-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
        >
          <div className="profile-image-container">
            <div className="image-frame"></div>
            <div className="image-wrapper">
              <img src={profileImage} alt="Profile" />
              <div className="image-overlay"></div>
            </div>
            <div className="image-dots"></div>
          </div>
          
          <motion.div 
            className="experience-badge"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
          >
            <span className="exp-number">2+</span>
            <span className="exp-text">Years Experience</span>
          </motion.div>
          
          <motion.div 
            className="skill-badge"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
          >
            <span className="skill-icon">✨</span>
            <span className="skill-text">Creative Writer</span>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <motion.div 
          className="scroll-icon"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#9b59b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        {/* <span>Scroll to explore</span> */}
      </div>
    </section>
  );
};

export default Hero;