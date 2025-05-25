import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row bg-[#EEF0DD] overflow-hidden">
      {/* Left Side - Horizontal Heading */}
      <div className="w-full md:w-2/5 h-1/2 md:h-screen flex items-start justify-start p-8 md:p-16 bg-[#EEF0DD]">
        <h1 
          className="text-[12rem] md:text-[20rem] font-black text-black leading-none tracking-widest"
          style={{ fontFamily: 'Huitside, sans-serif' }}
        >
          <span className="block -mb-10 md:-mb-16">RE-</span>
          <span className="block -mt-10 md:-mt-16">SUME</span>
        </h1>
      </div>

      {/* Right Side - Large Rectangle Image */}
      <div className="w-full md:w-3/5 h-1/2 md:h-screen relative">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {/* Hero Image */}
          <img
            src="https://i.pinimg.com/736x/6e/dd/35/6edd353918d5fb7e699d9627143e1f06.jpg"
            alt="Kuldeep Swarnkar"
            className="w-full h-full object-cover"
          />
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Roboto Mono", monospace', color: '#EEF0DD' }}>Kuldeep Swarnkar</h2>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ fontFamily: '"Roboto Mono", monospace', color: '#EEF0DD' }}>
              Caffeinated and code-obsessed. I design slick, user-friendly interfaces, 
              build responsive and dynamic websites, and wireframe like a pro. From 
              crafting intuitive user flows to training data models (NLP too), I blend 
              creativity with logic to bring digital ideas to life.
              <br /><br />
              <span>Oh, and I edit photos too - cuz every pixel counts.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;