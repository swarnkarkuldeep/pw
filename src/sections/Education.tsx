import React from 'react';
import Section from '../components/Section';

const Education: React.FC = () => {
  return (
    <Section id="education" className="min-h-screen py-12 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full mt-8 md:mt-24 mb-8 md:mb-24">
          {/* First Column - Vertical Title (Hidden on mobile, shown on md+) */}
          <div className="hidden md:flex md:col-span-1 items-start justify-center">
            <h2 
              className="text-7xl md:text-8xl font-bold tracking-wider"
              style={{ 
                fontFamily: 'Huitside, sans-serif', 
                letterSpacing: '0.15em', 
                fontSize: '12rem',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                lineHeight: '0.9'
              }}
            >
              EDUCATION
            </h2>
          </div>
          
          {/* Mobile Title (Shown only on mobile) */}
          <div className="md:hidden mb-8">
            <h2 
              className="text-6xl font-bold tracking-wider text-center"
              style={{ 
                fontFamily: 'Huitside, sans-serif', 
                letterSpacing: '0.15em'
              }}
            >
              EDUCATION
            </h2>
          </div>
          
          {/* Second Column - Education Details (Shifted right with ml-8 on desktop) */}
          <div className="md:col-span-5 md:pr-8 md:ml-8 flex items-center">
            <div 
              className="w-full"
            >
              <h3 className="text-4xl md:text-6xl font-bold mb-2 tracking-wider">
                Bachelor of Technology
              </h3>
              <h4 className="text-2xl md:text-4xl mb-1 font-medium">
                SRM University Andhra Pradesh
              </h4>
              <h4 className="text-2xl md:text-4xl mb-2 font-medium">
                Computer Science
              </h4>
              <p className="text-xl md:text-3xl mb-4">
                2023 - 2027
              </p>
              <p className="text-lg md:text-2xl leading-tight">
                CURRENTLY NAVIGATING THE WILD WORLD OF COMPUTER SCIENCE, FROM BUILDING BEAUTIFUL UIS TO TEACHING MACHINES HOW TO READ.
              </p>
            </div>
          </div>
          
          {/* Third Column - Image */}
          <div className="md:col-span-6 h-full">
            <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
              <img 
                src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg" 
                alt="Education" 
                className="w-full h-full object-cover shadow-lg md:shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;