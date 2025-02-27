import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContentSection.css';

// Sample article data - replace with your actual articles
const articleData = [
  {
    id: 'article1',
    title: 'Why Business Stagnancy Is Prominent In Nigeria',
    content: `
      <p>
        Do you know that 63% of businesses in Nigeria are established without a clear vision? Fueled by the curiosity to know why, the team at Wildfire.ng (also known as The Ambitious WildGoGetters) embarked on a 'Brand Scrutiny Tour' to evaluate businesses thoroughly.
        <br /><br />
        During this tour, it became glaringly obvious that many business owners in Nigeria operate with an "Omo, I just wan make money abeg. Nothing concern me abeg" mindset. Their focus is solely on the hustle—no long-term vision, just a drive to meet immediate needs, without the full grasp of the market size in which they play.
        <br /><br />
        For some, it's about survival—keeping the lights on, paying the bills, and calling it a day; a cycle of doing just enough, without pushing for the kind of progress that builds a lasting legacy.
        <br /><br />
        If you feel attacked, it is time to RETHINK YOUR STRATEGY and ask yourself: <i>Am I really running a business, or just keeping up a hustle?</i>
        <br /><br />
        In a world where your survival as a business owner depends solely on your wits, ability to adapt and most importantly to deliver, there is a need to set yourself apart with strategies that speak volumes, solutions that drive results, and a brand identity that sticks.
        <br /><br />
        Ayo Obadina, the CEO of Wildfire says in his speech during a business summit, "Busyness does not mean Business". He further emphasized: 
        "Real business growth goes beyond just maintaining the status quo or paying the bills – it is about expanding your reach, improving your processes, and adapting to new market demands."
        <br /><br />
        Bill Gates, for instance, built Microsoft not just by creating great software, but by continuously pushing for more—more innovation, more reach, and more impact. He didn't stop there because he had made enough money, he continued because he knew there was MORE. Having this mindset means seeking more possibilities, finding new ways to solve problems, and looking beyond the present—which is key to staying relevant and thriving.
        <br /><br />
        Interestingly, it is never too late to take that step towards redefining your business and positioning its legacy as a powerhouse in your industry.
        "How?", you may ask yourself. This is where Wildfire.ng comes in!
        <br /><br />
        ABOUT WILDFIRE
        <br />
        Wildfire is a 360 solutions agency dedicated to helping ambitious ordinary brands. We are not here to offer quick/surface-level fixes to your business; we are a partner-like firm that sticks to our clients as though we are stakeholders. We start with you, grow with you, and win with you— this is our Promise.
        <br /><br />
        However, if you want to be a part of the 1,000 businesses we aim to have transformed by 2030, send a message to <i>info@wildfire.ng</i> and experience real business growth through the professionalism of a global standard agency, with the flexibility and affordability of freelancers.
      </p>
    `
  },
  // Add more articles as needed
];

const Articles = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setIsScrolling(true);
      
      // Debounce scrolling state
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle article expansion
  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
    <section className="content-section" id="articles">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title">
          <span className="title-accent">Articles</span>
          <motion.span 
            className="title-underline"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.span>
        </h2>
        <p className="section-subtitle">Insights that ignite growth and transform businesses</p>
      </motion.div>

      <div className="writing-list">
        {articleData.map((article, index) => (
          <motion.div 
            key={article.id}
            className={`writing-card ${expandedArticle === article.id ? 'expanded' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-tag">Featured</div>
            
            <motion.div 
              className="writing-card-inner"
              animate={{ 
                scale: isScrolling ? 0.98 : 1,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="article-title">{article.title}</h3>
              
              <div className="article-meta">
                <span className="article-date">Published by Wildfire • February 2025</span>
                <span className="article-category">Business Strategy</span>
              </div>
              
              <input 
                type="checkbox" 
                className="read-more-checkbox" 
                id={article.id} 
                checked={expandedArticle === article.id}
                onChange={() => {}}
              />
              
              <div className="writing-content">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
              
              <div className="article-actions">
                <button 
                  className="read-more-button"
                  onClick={() => toggleArticle(article.id)}
                >
                  <span className="button-text">
                    {expandedArticle === article.id ? "Read Less" : "Read More"}
                  </span>
                  <span className="button-icon">
                    {expandedArticle === article.id ? "↑" : "↓"}
                  </span>
                </button>
                
                <motion.div 
                  className="share-container"
                  whileHover={{ scale: 1.05 }}
                >
                  <button className="share-button">
                    <span className="share-icon">⟱</span>
                    <span className="share-text">Share</span>
                  </button>
                  <div className="share-options">
                    <a href="#" className="share-option">LinkedIn</a>
                    <a href="#" className="share-option">Twitter</a>
                    <a href="#" className="share-option">Copy Link</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="articles-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          className="see-more"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <a 
            href="https://drive.google.com/drive/folders/1AvjGvWpTVBzWTOEfCWo7Qz4PkkEAO0O1" 
            target="_blank"
            rel="noopener noreferrer"
            className="see-more-button"
          >
            <span className="button-text">Explore More Articles</span>
            <span className="button-icon">→</span>
          </a>
        </motion.div>
        
        <div className="newsletter-signup">
          <h4>Stay Updated</h4>
          <p>Get our latest articles delivered straight to your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Articles;