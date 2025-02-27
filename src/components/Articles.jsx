import React from 'react';
import { motion } from 'framer-motion';
import './ContentSection.css';

const Articles = () => {
  return (
    <section className="content-section" id="articles" data-aos="fade-up">
      <h2 className="section-title">Articles</h2>
      <div className="writing-list">
        <motion.div 
          className="writing-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h3>Why Business Stagnancy Is Prominent In Nigeria</h3>
          <input type="checkbox" className="read-more-checkbox" id="article1" />
          <div className="writing-content">
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
          </div>
          <label htmlFor="article1" className="read-more-label"></label>
        </motion.div>
      </div>
      <div className="see-more">
        <motion.a 
          href="https://drive.google.com/drive/folders/1AvjGvWpTVBzWTOEfCWo7Qz4PkkEAO0O1" 
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

export default Articles;