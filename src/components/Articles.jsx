import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContentSection.css';


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
  {
    id: 'article2',
    title: 'Are You Numbling to Startup Failure?: The Unseen Pitfalls Of "Visionless" Businesses in Nigeria',
    content: `
    <p>
        


“Aje o! Aje a wa!” <br />
This is a common saying amongst people of the Yoruba tribe that non-literally translates to “May you sell” or “May the gods of trade and prosperous sales show luck and kindness to you”. <br /><br />
The Nigerian business landscape is a fascinating paradox. More often than not, many business owners mistake mundane loyalty for long-term success; they operate on shaky ground, fueled by assumptions about attracting customers and basking in short-lived fame from trendy business practices. They mistake fleeting loyalty for long-term success, and mistake prayers for sound strategy. <br /><br /> 
 On any given weekend, you'll see throngs of hopeful entrepreneurs fervently praying for a miraculous business breakthrough at religious gatherings. In due course, they start to ask rhetorical questions like: <i> “Oh, why has God forsaken me?” “am I not praying enough?” “Or is God testing beyond my endurance?”</i>. <br /><br /> While faith undoubtedly plays a role, the <b>calculated and predictable approach</b> reigns supreme in achieving sustainable growth and fulfilment. <br /><br /><br />


<b> What truly defines a successful business?</b> <br /><br /> 
One of the most profound definitions describes it as “an establishment with the capacity to repeatedly and predictably service a growing demand for unique products and services”. Emphatically, the words <b>“predictability”</b> and <b>“repeatability”</b> outline the crucial role of <b>vision and strategy</b> in navigating the fierce competition of the Business terrain. <br />
The Nigerian business landscape is a brutal battleground. While only a few brands rise to become industry titans, the vast majority are locked in a desperate struggle for survival. This relentless fight for scraps leaves little room for innovation, vision, or building something truly remarkable. <br /><br />

<b>The Problem: Hunger, Not Vision, Drives Most Startups</b> <br /> <br />
Let's be honest. For many Nigerians, entrepreneurship isn't a passionate pursuit, it's a desperate scramble for survival. Empty stomachs don't breed brilliant ideas; they breed short-term thinking and a laser focus on making any money possible, <b>fast</b>. This approach might keep the lights on today, but unfortunately, it's a recipe for disaster tomorrow. <br /><br />
According to statistics, we have approximately 40 million SMEs and 39 million MSMEs in Nigeria. A survey was conducted asking 500 entrepreneurs why they decided to start their business and the vision they had in mind kicking off with the business. 70% of them said they started the business to be their own boss, 20% said they were out of job, while the rest 10% related it to skill and passion. <br />
This survey underscores the diverse “motivations” behind entrepreneurship in Nigeria, ranging from economic necessity to personal fulfilment and independence. <br /> <br />

<b>The Vicious Cycle of Visionless Businesses</b>
Let’s see the trajectory of a business lacking a clear vision in practical terms: <br />
Short-Termism: Blinded by the need for immediate cash, visionless businesses neglect long-term strategy. They sacrifice customer loyalty and brand differentiation for a quick buck. <br /><br />

<b>Lack of Purpose:</b> No clear "why" means no clear direction. Without a guiding purpose, businesses are rudderless ships, tossed around by market forces with no control over their destiny. <br /><br />

<b>Customer Disconnect:</b> When a brand has no vision or purpose, it's impossible to connect with customers on an emotional level. This leads to low engagement, high churn, and ultimately, failure to stand out in a crowded marketplace. <br /><br />

<b>What are the consequences?</b><br />
These visionless businesses are like cancer cells in the Nigerian economy. They stifle innovation, drag down industry standards, and create a race to the bottom. This "survival of the fittest" mentality ultimately hurts everyone.<br /><br />

<b>The Wake-Up Call: Rethinking the "Go-It-Alone" Myth </b> <br />
The traditional "bootstrap yourself to success" narrative falls flat in the harsh realities of the Nigerian market. For many, the path to success lies not in blind solopreneurship, but in collaboration.
<br /><br />
<b>The Ultimate Options For Escape Are:</b>
<b>Government Intervention:</b> The government needs to step up and create a more supportive ecosystem for startups. This includes access to funding, mentorship programs, and infrastructure development.

<br /><br />
<b>Strategic Partnerships:</b> Entrepreneurs need to embrace the power of collaboration. Partnering with established businesses or successful individuals within your chosen industry can provide invaluable guidance, mentorship, and access to resources. This collaborative approach can be the difference between surviving and thriving.
<br /><br />

<b>The Choice is Yours: Vision or Oblivion</b> <br />

The Nigerian business landscape is a land of stark contrasts. It can be a land of incredible opportunity and innovation, or it can be a graveyard of failed dreams and wasted potential. The choice is yours. Whether you succumb to the allure of short-term gains and become another statistic, or you choose to build a brand with a clear vision and a purpose that extends beyond mere survival.
The time for blind ambition is over. <i>The time for strategic vision is now.</i>
Don't let your business become another casualty in the Nigerian Startup Hunger Games. Moreso, it's natural to have doubts, especially as a beginner. Questions spark understanding and clarity fuels growth. With <b>WILDFIRE BUSINESS SOLUTIONS LTD</b> by your side, you can transform into a powerhouse in your industry. 
Ready to ignite your success? Connect with us today and let's fuel your journey together!

    </p>
    `

  },
  {
    id: 'article3',
    title: 'The Effects Of Parental Negligence On Children',
    content: `
    <p>
Neglect, most times, is the silent antagonist in a person’s story. It is not always loud or obvious; it hides in unmet needs, forgotten promises, or the absence of care where it is most needed. However, the effects of negligence are far from silent. What happens when the hands that are meant to nurture and protect us fail to do so? This article answers the question and also provides solutions to negligence.
What Is Negligence?
Negligence is simply the inability to provide adequate care, attention, or support when it is required. However, this article focuses on the negligence of parents on their children. Hence, the failure to meet their basic physical, emotional, educational, or medical needs is Neglect.

Although negligence is not always intentional, it is undeniable that it has profound consequences on children. In some cases, parents may not even realize this. The following are signs that tell you that you’re negligent:
9 Signs Of Parental Negligence
If you possess any of these, it shows that you are negligent:
Always unavailable:
Constantly being absent (physically or emotionally) whether due to work, distractions, or personal issues can leave children feeling neglected and unsupported.

Yelling at the children all the time:
If you frequently resort to yelling instead of calmly addressing situations, it can create an environment of fear and anxiety for the children.

Quick to raising your hands against them at the slightest chance:
Using physical punishment or resorting to violence in response to minor mistakes neglects a child’s need for positive guidance.

Always believing you are right and they are always wrong:
Dismissing your child's opinions or feelings without giving them a chance to express themselves creates a power imbalance and neglects their emotional needs.

Quick to judge and barely listen to them:
Constantly criticizing without understanding the child’s perspective can cause feelings of worthlessness, as children love to be heard and validated.

Never holds parent-child conversations with them.
Avoiding meaningful, open conversations with your child or failing to engage in discussions that help them process their thoughts and emotions can lead to isolation and confusion.

Always angry with them:
Exhibiting constant frustration or anger towards a child can undermine their sense of security and make them feel unloved or unwanted.
Lack of Affection or Emotional Support: 
Not offering physical affection like hugs, pecks, smiles, praises or emotional support when a child needs it can lead to a lack of self-worth and emotional insecurity.
Neglecting Basic Needs: 
Failing to ensure that a child’s basic needs are met, is a clear sign of neglect. These basic needs are tagged “The Bare Minimum”. They include food, clothing, shelter, and healthcare. 

Having recognized when you are failing to meet your children’s needs, it is necessary to understand that children may also display certain signs that indicate they are being neglected. While these signs vary depending on the child’s age, personality, and the type of neglect they are experiencing, some might be subtle, and others more obvious and troubling.

7 Signs That Shows A Child Is Neglected
Pay close attention to these behaviours in your children. If they exhibit any of these signs, it could mean they feel neglected:

Displaying fear or anxiety at your presence.
Appearing distant or emotionally closed off.
Preferring to confide in friends rather than you.
Rarely smiling or showing joy in your company.
Frequently seeking reasons to leave home and hesitating to return.
Avoiding eye contact or rejecting physical affection.
Exhibiting low self-esteem or a lack of self-confidence.

In conclusion, if you find yourself in these shoes, there are ways to make things right; it’s not rocket science. 

7 Ways To Correct Negligence 
Here are some practical steps you can take to correct the situation:
Communicate Openly:
Create a safe space where your child feels comfortable expressing their thoughts and feelings. Listen without judgment.
Spend Quality Time Together: 
Dedicate uninterrupted time to bond with your child through activities they enjoy or simple conversations.
Show Affection: 
Offer physical affection, such as hugs, or verbal affirmations that make your child feel loved and valued.
Be Patient and Understanding: 
Instead of reacting harshly, try to understand their perspective and respond with empathy.
Meet Their Basic Needs: 
Ensure your child has proper nutrition, clothing, education, and a safe environment to grow.
Apologize and Rebuild Trust: 
If your actions have hurt your child, acknowledge it and learn to apologize sincerely. This shows consistent effort to rebuild their trust.
Seek Support: 
If needed, consult a family counsellor or parenting expert to guide you in strengthening your relationship with your child.

</p>
    `
  }
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
                <span className="article-date">Written by Ifeoluwa</span>
                <span className="article-category">Writeups</span>
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
                  {/* <button className="share-button">
                    <span className="share-icon">⟱</span>
                    <span className="share-text">Share</span>
                  </button>
                  <div className="share-options">
                    <a href="#" className="share-option">LinkedIn</a>
                    <a href="#" className="share-option">Twitter</a>
                    <a href="#" className="share-option">Copy Link</a>
                  </div> */}
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