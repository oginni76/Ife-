
/* src/components/WebContent.js */
import React from 'react';
import { motion } from 'framer-motion';
import './ContentSection.css';

const WebContent = () => {
  return (
    <section className="content-section" id="web-content" data-aos="fade-up">
      <h2 className="section-title">Web Content</h2>
      <div className="writing-list">
        <motion.div 
          className="writing-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Web Content 1</h3>
          <input type="checkbox" className="read-more-checkbox" id="web1" />
          <div className="writing-content">
            <p>
              Need a landing page that converts? Here's a sample: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. More space means more impact for your web copy, and this goes on to showcase the full potential of your writing.
            </p>
          </div>
          <label htmlFor="web1" className="read-more-label"></label>
        </motion.div>
        
        <motion.div 
          className="writing-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Web Content 2</h3>
          <input type="checkbox" className="read-more-checkbox" id="web2" />
          <div className="writing-content">
            <p>
              Boost your online presence with compelling blog posts like this: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. This extends further to give readers a full taste of your skills.
            </p>
          </div>
          <label htmlFor="web2" className="read-more-label"></label>
        </motion.div>
        
        <motion.div 
          className="writing-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Web Content 3</h3>
          <input type="checkbox" className="read-more-checkbox" id="web3" />
          <div className="writing-content">
            <p>
              Product descriptions that sell: Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Keep going to show off your versatility in web writing styles!
            </p>
          </div>
          <label htmlFor="web3" className="read-more-label"></label>
        </motion.div>
      </div>
      <div className="see-more">
        <motion.a 
          href="#" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: '#8e44ad' }}
          whileTap={{ scale: 0.95 }}
        >
          See More
        </motion.a>
      </div>
    </section>
  );
};

export default WebContent;
