import React from 'react';
import Section from '../components/Section';

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
    <Section id="skills" className="relative bg-white py-12 md:py-0">
      <div className="container mx-auto h-full px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-8 md:gap-0">
          {/* Left Column - I KNOW and Skills */}
          <div className="md:col-span-4 flex flex-col justify-center p-4 md:p-12">
            <div className="w-full">
              {/* Mobile/Tablet Title */}
              <h2 
                className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 md:mb-12 text-center md:text-left whitespace-nowrap" 
                style={{ 
                  fontFamily: 'Huitside, sans-serif', 
                  lineHeight: '1', 
                  letterSpacing: '0.05em',
                  fontSize: 'clamp(3rem, 10vw, 15rem)' 
                }}
              >
                I KNOW
              </h2>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-0">
                <div className="md:pr-8 space-y-2 md:space-y-4 text-center sm:text-right">
                  {leftSkills.map((skill, index) => (
                    <div 
                      key={`left-${index}`} 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="md:pl-8 space-y-2 md:space-y-4 text-center sm:text-left">
                  {rightSkills.map((skill, index) => (
                    <div 
                      key={`right-${index}`} 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image - Wider */}
          <div className="md:col-span-8 h-full order-first md:order-none">
            <div className="relative w-full h-full min-h-[30vh] sm:min-h-[40vh] md:min-h-[45vh]">
              <img 
                src="https://i.pinimg.com/736x/f4/4d/7f/f44d7ffb695293e5c12eea03de392ffc.jpg" 
                alt="Technical Skills" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Right Title - TECHNICAL SKILLS */}
        <div className="hidden md:block absolute bottom-0 right-0 pr-8 pb-4 text-right">
          <h2 
            className="font-bold text-black"
            style={{
              fontSize: '15rem',
              fontFamily: 'Huitside, sans-serif',
              lineHeight: '1',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap'
            }}
          >
            TECHNICAL SKILLS
          </h2>
        </div>

        {/* Mobile/Tablet TECHNICAL SKILLS Title */}
        <div className="md:hidden mt-8 text-center">
          <h2 
            className="font-bold text-black text-4xl sm:text-5xl"
            style={{
              fontFamily: 'Huitside, sans-serif',
              lineHeight: '1',
              letterSpacing: '0.05em'
            }}
          >
            TECHNICAL SKILLS
          </h2>
        </div>
      </div>
    </Section>
  );
};

export default Skills;