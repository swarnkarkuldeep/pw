import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Leading the frontend development team, architecting scalable solutions, and implementing cutting-edge technologies to create exceptional user experiences."
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Creative Solutions",
    period: "2018 - 2021",
    description: "Designed intuitive interfaces and user experiences for web and mobile applications, collaborated with cross-functional teams to deliver cohesive digital products."
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Digital Crafters",
    period: "2016 - 2018",
    description: "Developed responsive websites and web applications, implemented modern frontend frameworks, and collaborated with designers to translate mockups into functional interfaces."
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-5 h-screen md:h-[80vh] relative">
        <Parallax speed={0.1} className="h-full">
          <img 
            src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Experience" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </Parallax>
      </div>
      
      <div className="md:col-span-7 p-8 md:p-16">
        <motion.h2 
          className="section-heading mb-12"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          02 - EXPERIENCE
        </motion.h2>

        <div className="space-y-16">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              className="experience-item"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: exp.id * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-4">{exp.role}</h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h4 className="text-2xl md:text-3xl">{exp.company}</h4>
                <span className="text-xl mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-xl leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;