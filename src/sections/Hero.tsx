import React, { useEffect } from 'react';
import { staggerChildren } from '../utils/animations';

const Hero: React.FC = () => {
  useEffect(() => {
    // Add staggered animation to the hero content
    staggerChildren('.hero-content > *', 0.2);
  }, []);

  return (
    <section className="relative min-h-dvh flex flex-col md:flex-row bg-[#EEF0DD] overflow-hidden">
      {/* Left Side - Heading with animations */}
      <div className="w-full md:w-2/5 h-[50vh] md:h-dvh flex items-center justify-center md:items-start md:justify-start px-6 sm:px-10 md:px-16 py-8 bg-[#EEF0DD] overflow-hidden">
        <div className="hero-content w-full">
          <h1 
            className="text-[4.5rem] sm:text-[7rem] md:text-[15rem] lg:text-[20rem] font-black text-black leading-none tracking-widest text-center md:text-left"
            style={{ fontFamily: 'Huitside, sans-serif' }}
          >
            <span className="block -mb-2 sm:-mb-4 md:-mb-8 lg:-mb-16 animate-fade-up" style={{ animationDelay: '0.1s' }}>RE-</span>
            <span className="block -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>SUME</span>
          </h1>
          
          {/* Animated Scroll Indicator */}
          <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center p-1 animate-bounce-slow">
              <div className="w-1 h-2 bg-black rounded-full animate-scroll-dot"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image and Overlay with animations */}
      <div className="w-full md:w-3/5 h-[50vh] md:h-dvh relative group">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse animate-float"></div>
          
          {/* Hero Image with hover effect */}
          <div className="w-full h-full overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/6e/dd/35/6edd353918d5fb7e699d9627143e1f06.jpg"
              alt="Kuldeep Swarnkar"
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Overlay Content with staggered animations */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
            <div className="space-y-3 md:space-y-4">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold transform transition-all duration-700 hover:translate-x-2 hover:scale-105 inline-block"
                style={{ 
                  fontFamily: '"Roboto Mono", monospace', 
                  color: '#EEF0DD',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Kuldeep Swarnkar
                <span className="inline-block w-2 h-8 ml-2 bg-[#EEF0DD] animate-pulse"></span>
              </h2>
              
              <div className="space-y-2">
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed max-w-full md:max-w-2xl opacity-0 animate-fade-up"
                  style={{ 
                    fontFamily: '"Roboto Mono", monospace', 
                    color: '#EEF0DD',
                    animationDelay: '0.3s',
                    animationFillMode: 'forwards',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  Caffeinated and code-obsessed. I design slick, user-friendly interfaces, 
                  build responsive and dynamic websites, and wireframe like a pro.
                </p>
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed max-w-full md:max-w-2xl opacity-0 animate-fade-up"
                  style={{ 
                    fontFamily: '"Roboto Mono", monospace', 
                    color: '#EEF0DD',
                    animationDelay: '0.4s',
                    animationFillMode: 'forwards',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  From crafting intuitive user flows to training data models (NLP too), I blend 
                  creativity with logic to bring digital ideas to life.
                </p>
                <p 
                  className="text-sm sm:text-base md:text-lg leading-relaxed max-w-full md:max-w-2xl opacity-0 animate-fade-up inline-block bg-black/30 px-2 py-1 rounded"
                  style={{ 
                    fontFamily: '"Roboto Mono", monospace', 
                    color: '#EEF0DD',
                    animationDelay: '0.5s',
                    animationFillMode: 'forwards',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  Oh, and I edit photos too - cuz every pixel counts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
