import React, { useEffect, useRef } from 'react';
import Section from '../components/Section';
import { useInView } from 'framer-motion';
import { staggerChildren } from '../utils/animations';

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    period: "2023 - Present",
    description: "Developed responsive and interactive web applications using HTML, CSS. Collaborated with UI/UX designers and backend developers to integrate front-end components with backend services, ensuring cohesive and functional end-to-end solutions."
  },
  {
    id: 2,
    role: "UI/UX Designer",
    period: "2022 - Present",
    description: "Created visually appealing and functional interfaces for web and mobile applications, focusing on enhancing user interaction and satisfaction. Worked closely with cross-functional teams, including developers and product managers, to ensure seamless integration of design elements and alignment with business objectives. Has professional knowledge in Figma and Adobe XD."
  },
  {
    id: 3,
    role: "Web Developer",
    period: "2020 - Present",
    description: "Worked on photo and video editing projects for small YouTubers and social media influencers. Also did graphic, logo, and print designing along with content writing."
  }
];

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      staggerChildren('.experience-item', 0.2);
    }
  }, [isInView]);

  return (
    <Section 
      id="experience" 
      className="min-h-screen py-20 bg-[#EEF0DD] relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="mb-20">
          <h2
            className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] font-bold tracking-widest leading-none text-center md:text-left transform transition-all duration-1000"
            style={{ 
              fontFamily: 'Huitside, sans-serif',
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            EXPERIENCE
          </h2>
          <div 
            className="h-1.5 bg-black/20 mt-4 transform origin-left transition-all duration-1000"
            style={{
              width: isInView ? '100%' : '0%',
              opacity: isInView ? 1 : 0
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="lg:col-span-1 px-4 lg:sticky lg:top-24">
            <div 
              className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl transform transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] hover:rotate-1"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0)' : 'translateX(-30px)'
              }}
            >
              <img
                src="https://i.pinimg.com/736x/6e/dd/35/6edd353918d5fb7e699d9627143e1f06.jpg"
                alt="Experience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Kuldeep Swarnkar</h3>
                  <p className="text-sm opacity-90">Frontend Developer & Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience List */}
          <div className="lg:col-span-2 space-y-12 px-4 lg:px-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="experience-item opacity-0 transform translate-y-8"
                style={{
                  animation: isInView ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` : 'none'
                }}
              >
                <div className="group relative">
                  <div className="absolute -left-8 top-0 h-full w-1 bg-black/10 group-hover:bg-[#EEF0DD] transition-colors duration-300"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4 gap-2 sm:gap-4">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider group-hover:text-black/80 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <span className="text-xl sm:text-2xl md:text-3xl text-gray-600 group-hover:text-black/70 transition-colors duration-300">
                      {exp.period}
                    </span>
                  </div>
                  <div className="pl-2">
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {exp.description}
                    </p>
                  </div>
                  <div className="absolute -left-8 top-0 h-2 w-2 rounded-full bg-black/30 group-hover:bg-[#EEF0DD] transition-all duration-300 group-hover:scale-150"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;