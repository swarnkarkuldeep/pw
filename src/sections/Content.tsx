import React from 'react';
import { motion } from 'framer-motion';

const Content: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Vertical Heading */}
          <div className="md:w-1/6">
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-[#EEF0DD] -rotate-90 origin-left whitespace-nowrap h-0 md:h-auto md:mt-32"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              CONTENT
            </motion.h2>
          </div>
          
          {/* Image */}
          <div className="md:w-2/5">
            <motion.div 
              className="relative aspect-[3/4] bg-gray-100 overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Your Image Here</span>
              </div>
            </motion.div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Huitside, sans-serif' }}>
                Section Title
              </h3>
              <div className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: '"Roboto Mono", monospace' }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className="mt-6 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
