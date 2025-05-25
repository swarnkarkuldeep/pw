import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" className="min-h-[100vh] flex items-center py-32">
      <div className="container mx-auto px-4 h-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch py-16">
          {/* Empty column to push content to center */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Column 1: Image */}
          <div className="md:col-span-5 relative overflow-hidden shadow-2xl flex items-center min-h-[600px] md:min-h-[700px]">
            <img
              src="https://i.pinimg.com/736x/8a/2c/ec/8a2cec5ee25bf116bffb180766e81dfb.jpg"
              alt="Portfolio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 2: Vertical Heading */}
          <div className="md:col-span-2 flex items-center justify-center">
            <h2 className="vertical-text text-8xl font-bold text-black tracking-wider" style={{fontSize: '15rem', fontFamily: 'Huitside, sans-serif', letterSpacing: '0.15em', writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
              PORTFOLIO
            </h2>
          </div>

          {/* Column 3: Links */}
          <div className="md:col-span-4 flex flex-col justify-center space-y-2 py-12 px-8">
            <motion.a
              href="https://portfolio.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl md:text-7xl font-medium text-black text-center block w-full relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative inline-block">
                Go to My Portfolio
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-black origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </span>
            </motion.a>
            
            <div className="text-4xl text-black text-center my-4 w-full">X</div>
            
            <motion.a
              href="/resume.pdf"
              download
              className="text-6xl md:text-7xl font-medium text-black text-center block w-full mt-12 relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative inline-block">
                Download My Resume
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-black origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
