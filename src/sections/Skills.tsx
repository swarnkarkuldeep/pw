import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 1,
    category: "Design",
    skills: ["UI/UX Design", "Interaction Design", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    id: 2,
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "GSAP Animation"]
  },
  {
    id: 3,
    category: "Tools",
    skills: ["Figma", "Adobe Creative Suite", "Git", "VS Code", "Webpack"]
  },
  {
    id: 4,
    category: "Other",
    skills: ["Responsive Design", "Web Performance", "Accessibility", "SEO", "Technical Writing"]
  }
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="min-h-screen relative overflow-hidden">
      <motion.h2 
        className="section-heading absolute top-4 left-4 z-10 text-white mix-blend-difference"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        04 - TECHNICAL SKILLS
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="p-4 md:p-12 flex flex-col justify-center order-2 md:order-1">
          <Parallax speed={0.05}>
            <div className="mt-24 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category) => (
                <motion.div 
                  key={category.id}
                  className="skill-category"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: category.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, index) => (
                      <li key={index} className="text-lg flex items-center">
                        <span className="w-2 h-2 bg-black inline-block mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Parallax>
        </div>
        
        <div className="relative h-screen md:h-auto order-1 md:order-2">
          <Parallax speed={0.1} className="h-full">
            <img 
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Skills" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </Parallax>
        </div>
      </div>
    </Section>
  );
};

export default Skills;