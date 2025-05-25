import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row bg-[#EEF0DD] overflow-hidden">
      
      {/* Left Side - Heading */}
      <div className="w-full md:w-2/5 h-[40vh] md:h-screen flex items-center justify-center md:items-start md:justify-start px-6 sm:px-10 md:px-16 py-8 bg-[#EEF0DD]">
        <h1 
          className="text-[5rem] sm:text-[8rem] md:text-[20rem] font-black text-black leading-none tracking-widest text-center md:text-left"
          style={{ fontFamily: 'Huitside, sans-serif' }}
        >
          <span className="block -mb-4 sm:-mb-6 md:-mb-16">RE-</span>
          <span className="block -mt-4 sm:-mt-6 md:-mt-16">SUME</span>
        </h1>
      </div>

      {/* Right Side - Image and Overlay */}
      <div className="w-full md:w-3/5 h-[60vh] md:h-screen relative">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden">
          
          {/* Hero Image */}
          <img
            src="https://i.pinimg.com/736x/6e/dd/35/6edd353918d5fb7e699d9627143e1f06.jpg"
            alt="Kuldeep Swarnkar"
            className="w-full h-full object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
              style={{ fontFamily: '"Roboto Mono", monospace', color: '#EEF0DD' }}
            >
              Kuldeep Swarnkar
            </h2>
            <p 
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-full md:max-w-2xl"
              style={{ fontFamily: '"Roboto Mono", monospace', color: '#EEF0DD' }}
            >
              Caffeinated and code-obsessed. I design slick, user-friendly interfaces, 
              build responsive and dynamic websites, and wireframe like a pro. From 
              crafting intuitive user flows to training data models (NLP too), I blend 
              creativity with logic to bring digital ideas to life.
              <br className="hidden sm:block" /><br className="hidden sm:block" />
              <span>Oh, and I edit photos too - cuz every pixel counts.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
