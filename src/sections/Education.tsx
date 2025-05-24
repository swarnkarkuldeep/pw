import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <Section id="education" className="min-h-screen py-12 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full mt-16 md:mt-24 mb-16 md:mb-24">
          {/* First Column - Vertical Title */}
          <div className="md:col-span-1 flex items-start justify-center">
            <motion.h2 
              className="text-7xl md:text-8xl font-bold tracking-wider vertical-text"
              style={{ 
                fontFamily: 'Huitside, sans-serif', 
                letterSpacing: '0.15em', 
                fontSize: '12rem',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)'
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              EDUCATION
            </motion.h2>
          </div>
          
          {/* Second Column - Education Details */}
          <div className="md:col-span-5 space-y-12 pr-8">
            <motion.div 
              className="education-item"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ marginLeft: '4rem', marginTop: '30vh' }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-wider">Bachelor of Technology</h3>
              <h4 className="text-2xl md:text-3xl mb-3 font-medium">SRM University Andhra Pradesh</h4>
              <h4 className="text-2xl md:text-3xl mb-4 font-medium">Computer Science</h4>
              <p className="text-2xl mb-6">2023 - 2027</p>
              <p className="text-xl leading-relaxed">CURRENTLY NAVIGATING THE WILD WORLD OF COMPUTER SCIENCE, FROM BUILDING BEAUTIFUL UIS TO TEACHING MACHINES HOW TO READ.</p>
            </motion.div>
          </div>
          
          {/* Third Column - Image */}
          <div className="md:col-span-6 h-full">
            <motion.div
              className="relative w-full h-full min-h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg" 
                alt="Education" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;