import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <motion.div 
        className="md:col-span-7 p-8 md:p-16"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-heading mb-12">01 - ABOUT ME</h2>
        
        <div className="space-y-8">
          <p className="text-xl leading-relaxed">
            A creative technologist with a passion for merging design and functionality. 
            I specialize in crafting digital experiences that are both visually striking 
            and technically sound.
          </p>
          
          <p className="text-xl leading-relaxed">
            With a background in both design and development, I bridge the gap between 
            aesthetic vision and technical implementation, ensuring that beautiful designs 
            become fully functional digital products.
          </p>
          
          <p className="text-xl leading-relaxed">
            My approach combines strategic thinking with attention to detail, 
            resulting in work that not only looks impressive but also delivers on 
            business objectives and user needs.
          </p>
        </div>
      </motion.div>
      
      <div className="md:col-span-5 h-screen md:h-[80vh] relative overflow-hidden">
        <Parallax speed={0.1} className="h-full">
          <img 
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Portrait" 
            className="w-full h-full object-cover object-center"
          />
        </Parallax>
      </div>
    </Section>
  );
};

export default About;