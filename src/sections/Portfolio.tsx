import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const fadeIn = (direction: 'left' | 'right' | 'up' | 'down', delay = 0) => {
  const variants = {
    initial: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
      },
    },
  };
  return variants;
};

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" className="min-h-[100vh] flex items-center py-32">
      <div className="container mx-auto px-4 h-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch py-16">
          {/* Empty column to push content to center */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Column 1: Image */}
          <motion.div
            className="md:col-span-5 relative overflow-hidden shadow-2xl flex items-center min-h-[600px] md:min-h-[700px]"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn('left')}
          >
            <img
              src="https://i.pinimg.com/736x/8a/2c/ec/8a2cec5ee25bf116bffb180766e81dfb.jpg"
              alt="Portfolio"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Column 2: Vertical Heading */}
          <motion.div
            className="md:col-span-2 flex items-center justify-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn('up', 0.2)}
          >
            <h2 className="vertical-text text-8xl font-bold text-black tracking-wider" style={{fontSize: '15rem', fontFamily: 'Huitside, sans-serif', letterSpacing: '0.15em', writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>
              PORTFOLIO
            </h2>
          </motion.div>

          {/* Column 3: Links */}
          <motion.div
            className="md:col-span-4 flex flex-col justify-center space-y-2 py-12 px-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn('up', 0.4)}
          >
            <a
              href="https://portfolio.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl md:text-7xl font-medium text-black hover:text-gray-600 transition-colors duration-200 text-center block w-full"
            >
              Go to My Portfolio
            </a>
            <div className="text-4xl text-black text-center my-4 w-full">OR</div>
            <a
              href="/resume.pdf"
              download
              className="text-6xl md:text-7xl font-medium text-black hover:text-gray-600 transition-colors duration-200 mt-12 text-center block w-full"
            >
              Download My Resume
            </a>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
