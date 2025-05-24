import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" className="min-h-screen relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 h-full">
        <div className="md:col-span-1 flex items-center justify-center p-4">
          <motion.h2 
            className="vertical-text section-heading text-black"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            05 - PORTFOLIO
          </motion.h2>
        </div>
        
        <div className="md:col-span-4 relative">
          <Parallax speed={0.1} className="h-full">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Portfolio" 
              className="w-full h-screen object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-8">
              <motion.div 
                className="text-center max-w-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">MY WORK</h3>
                <p className="text-xl text-white mb-12">
                  Explore my complete portfolio showcasing a range of projects 
                  from web applications to interactive experiences and design systems.
                </p>
                
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
                  <a 
                    href="https://portfolio.example.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button bg-white text-black hover:bg-gray-200"
                  >
                    View Portfolio Website
                  </a>
                  <a 
                    href="/resume.pdf" 
                    download
                    className="button bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                  >
                    Download Resume
                  </a>
                </div>
              </motion.div>
            </div>
          </Parallax>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;