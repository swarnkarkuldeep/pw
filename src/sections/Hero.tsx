import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
      <div className="flex flex-col justify-center p-8 md:p-16">
        <motion.h1 
          className="mega-text text-black"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        >
          RE<br/>SUME
        </motion.h1>

        <motion.div 
          className="max-w-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          <h2 className="text-5xl font-bold mb-6">KULDEEP SWARNKAR</h2>
          <p className="text-xl leading-relaxed">
            Caffeinated and code-obsessed — I design slick, user-friendly interfaces, 
            build responsive and dynamic websites, and wireframe like a pro. 
            From crafting intuitive user flows to training data models, 
            I blend creativity with logic to bring digital ideas to life.
          </p>
        </motion.div>
      </div>

      <div className="relative h-full">
        <img 
          src="https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Background" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#EEF0DD] mix-blend-screen"></div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="text-center">
          <p className="text-sm mb-4">SCROLL DOWN</p>
          <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-t-[55px] border-l-transparent border-r-transparent border-t-black"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;