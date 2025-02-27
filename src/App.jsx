
// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Articles from './components/Articles';
import WebContent from './components/WebContent';
import Footer from './components/Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CopywritingPortfolio from './components/CopyWritingPortfolio';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <main>
                  <Hero />
                  <About />
                  <div className="line" data-aos="fade-up">
                    <h5>Enough About me. Let's Dive into my work!</h5>
                  </div>
                  <Articles />
                  <WebContent />
                </main>
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
      <CopywritingPortfolio/>
      <Footer />
    </Router>
  );
}

export default App;
