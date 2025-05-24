import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <Section id="education" className="min-h-screen relative overflow-hidden">
      <motion.h2 
        className="section-heading absolute top-4 left-4 z-10 text-white mix-blend-difference"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        03 - EDUCATION/INSTITUTION
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 h-full">
        <div className="md:col-span-3 relative h-screen">
          <Parallax speed={0.1} className="h-full">
            <img 
              src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Education" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </Parallax>
        </div>
        
        <div className="p-4 md:p-8 flex flex-col justify-center bg-white bg-opacity-90 z-10">
          <Parallax speed={0.05}>
            <div className="space-y-12">
              <motion.div 
                className="education-item"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Master of Computer Science</h3>
                <h4 className="text-xl mb-2">Stanford University</h4>
                <p className="text-lg mb-4">2014 - 2016</p>
                <p className="text-base">Specialized in Human-Computer Interaction and Artificial Intelligence. Graduated with distinction.</p>
              </motion.div>
              
              <motion.div 
                className="education-item"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Bachelor of Design</h3>
                <h4 className="text-xl mb-2">Rhode Island School of Design</h4>
                <p className="text-lg mb-4">2010 - 2014</p>
                <p className="text-base">Focused on Digital Media and Interface Design. Senior thesis on interactive narratives in digital spaces.</p>
              </motion.div>
            </div>
          </Parallax>
        </div>
      </div>
    </Section>
  );
};

export default Education;