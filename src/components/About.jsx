import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './About.css';

const About = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  // Animate when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const aboutTitle = "About Me";
  const titleLetters = Array.from(aboutTitle);
  
  // Skill data
  const skills = [
    { name: "Creative Writing", level: 95 },
    { name: "Legal Research", level: 85 },
    { name: "Content Creation", level: 90 },
    { name: "Storytelling", level: 92 }
  ];

  // Background pattern generation function
  const generatePattern = () => {
    const patternSvg = `
      <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 5L35 15H25L30 5Z" fill="#9b59b620" />
      </svg>
    `;
    return `url("data:image/svg+xml,${encodeURIComponent(patternSvg)}")`;
  };

  return (
    <section className="about-container" ref={sectionRef}>
      <div className="about-pattern-bg" style={{ backgroundImage: generatePattern() }}></div>
      
      <motion.div
        className="about-content"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
          }
        }}
      >
        <div className="about-header">
          <div className="about-title-container">
            {titleLetters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="about-title-letter"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          
          <motion.div 
            className="about-accent-line"
            variants={{
              hidden: { width: 0 },
              visible: { 
                width: "80px",
                transition: { delay: 0.5, duration: 0.8 }
              }
            }}
          ></motion.div>
        </div>
        
        <div className="about-body">
          <div className="about-main-content">
            <motion.div 
              className="about-bio"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.5, duration: 0.7 }
                }
              }}
            >
              <p className="about-intro"><span className="about-highlight">Hi, I'm Ife.</span></p>
              <p className="about-description">
                A recent Law graduate and spontaneous writer based in Lagos, Nigeria. I'm passionate about creative writing and dedicated to creating
                impactful content that resonates with readers on a deeper level.
              </p>
              <p className="about-philosophy">
                Through my work, I aim to deliver messages that inspire and create lasting impressions. 
                Join me on this journey as I share insights and create meaningful pieces that speak to the human experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="about-skills-container"
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.7, duration: 0.7 }
                }
              }}
            >
              <h3 className="skills-title">My Expertise</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div 
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.9 + (index * 0.2), duration: 1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="about-cta"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 1.3, duration: 0.5 }
              }
            }}
          >
            <div className="cta-accent"></div>
            <p>Looking for captivating content that tells your story?</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(155, 89, 182, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="about-floating-element about-element-1"
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { delay: 1.5, type: "spring", stiffness: 100 }
            }
          }}
        >
          <div className="floating-icon">✍️</div>
        </motion.div>
        
        <motion.div 
          className="about-floating-element about-element-2"
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { delay: 1.7, type: "spring", stiffness: 100 }
            }
          }}
        >
          <div className="floating-icon">📚</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;