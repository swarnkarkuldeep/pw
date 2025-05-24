import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    period: "2023 - Present",
    description: "Developed responsive and interactive web applications using HTML, CSS. Collaborated with UI/UX designers and backend developers to integrate front-end components with backend services, ensuring cohesive and functional end-to-end solutions"
  },
  {
    id: 2,
    role: "UI/UX Designer",
    period: "2022 - Present",
    description: "Created visually appealing and functional interfaces for web and mobile applications, focusing on enhancing user interaction and satisfaction. Worked closely with cross-functional teams, including developers and product managers, to ensure seamless integration of design elements and alignment with business objectives. Has Professional Knowledge for Figma and Adobe XD"
  },
  {
    id: 3,
    role: "Web Developer",
    period: "2020 - Present",
    description: "Had numerous jobs for photo and video editing from small youtubers and social media influencers. Had multiple jobs for Graphic, Logo, print designing and content writing."
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="min-h-screen py-12 bg-[#EEF0DD] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading and Image */}
          <div className="space-y-2">
            <motion.h2 
              className="text-7xl md:text-8xl font-bold tracking-wider mb-2" 
              style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.15em', fontSize: '12rem' }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              EXPERIENCE
            </motion.h2>
            
            <motion.div
              className="relative w-full aspect-square overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://i.pinimg.com/736x/6e/dd/35/6edd353918d5fb7e699d9627143e1f06.jpg" 
                alt="Experience" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          {/* Right Column - Experience Content */}
          <div className="space-y-12 pl-12 pt-48">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                className="experience-item"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: exp.id * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-3xl md:text-4xl font-bold">{exp.role}</h3>
                  <span className="text-2xl md:text-3xl ml-4">{exp.period}</span>
                </div>
                <p className="text-lg leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;