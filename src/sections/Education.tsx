import React from 'react';
import Section from '../components/Section';

const Education: React.FC = () => {
  return (
    <Section id="education" className="min-h-screen py-12 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full mt-16 md:mt-24 mb-16 md:mb-24">
          {/* First Column - Vertical Title */}
          <div className="md:col-span-1 flex items-start justify-center">
            <h2 
              className="text-7xl md:text-8xl font-bold tracking-wider vertical-text"
              style={{ 
                fontFamily: 'Huitside, sans-serif', 
                letterSpacing: '0.15em', 
                fontSize: '12rem',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)'
              }}
            >
              EDUCATION
            </h2>
          </div>
          
          {/* Second Column - Education Details */}
          <div className="md:col-span-5 space-y-12 pr-8">
            <div 
              className="education-item"
              style={{ marginLeft: '4rem', marginTop: '30vh' }}
            >
              <h3 className="text-5xl md:text-6xl font-bold mb-2 tracking-wider">Bachelor of Technology</h3>
              <h4 className="text-3xl md:text-4xl mb-1 font-medium">SRM University Andhra Pradesh</h4>
              <h4 className="text-3xl md:text-4xl mb-2 font-medium">Computer Science</h4>
              <p className="text-3xl mb-4">2023 - 2027</p>
              <p className="text-2xl leading-tight">CURRENTLY NAVIGATING THE WILD WORLD OF COMPUTER SCIENCE, FROM BUILDING BEAUTIFUL UIS TO TEACHING MACHINES HOW TO READ.</p>
            </div>
          </div>
          
          {/* Third Column - Image */}
          <div className="md:col-span-6 h-full">
            <div className="relative w-full h-full min-h-[500px]">
              <img 
                src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg" 
                alt="Education" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;