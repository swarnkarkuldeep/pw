import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';

const leftSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "PHP",
  "React",
  "Angular",
  "Vite",
  "Node.js"
];

const rightSkills = [
  "Python",
  "C",
  "C++",
  "Java",
  "SQL"
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="relative overflow-hidden bg-white">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full">
          {/* Left Column - I KNOW and Skills */}
          <div className="md:col-span-4 flex flex-col justify-center p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-bold mb-12 whitespace-nowrap" style={{ fontFamily: 'Huitside, sans-serif', lineHeight: '1', letterSpacing: '0.05em', fontSize: '15rem' }}>
                I KNOW
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="pr-8 space-y-4 text-right">
                  {leftSkills.map((skill, index) => (
                    <div key={`left-${index}`} className="text-3xl md:text-4xl">
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="pl-8 space-y-4 text-left">
                  {rightSkills.map((skill, index) => (
                    <div key={`right-${index}`} className="text-3xl md:text-4xl">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Image - Wider */}
          <div className="md:col-span-8 h-full">
            <motion.div
              className="relative w-full h-full min-h-[30vh] md:min-h-[45vh]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://i.pinimg.com/736x/f4/4d/7f/f44d7ffb695293e5c12eea03de392ffc.jpg" 
                alt="Technical Skills" 
                className="w-full h-full object-cover hover:brightness-100"
                onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 pr-8 pb-4 text-right">
          <motion.h2 
            className="font-bold text-black opacity-30"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: '15rem', 
              fontFamily: 'Huitside, sans-serif', 
              lineHeight: '0.9', 
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap'
            }}
          >
            TECHNICAL SKILLS
          </motion.h2>
        </div>
      </div>
    </Section>
  );
};

export default Skills;