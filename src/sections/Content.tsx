import React from 'react';
import { motion } from 'framer-motion';

const Content: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-12 bg-[#EEF0DD] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Content and Image Container */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="md:w-1/2 flex items-center">
                <motion.div 
                  className="relative aspect-[4/5] bg-gray-100 overflow-hidden "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="https://i.pinimg.com/736x/7a/42/cf/7a42cf16bf68400c4dbde2f4d9dbc96e.jpg"
                    alt="Kuldeep Swarnkar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="md:w-1/2">
                <div className="py-8 pl-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <nav className="space-y-10">
                    <div>
                      <a 
                        href="#about" 
                        className="text-6xl md:text-7xl font-bold hover:text-gray-700 transition-colors duration-300 block mb-8 tracking-wider"
                        style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.05em' }}
                      >
                        01. About Me
                      </a>
                    </div>
                    <div>
                      <a 
                        href="#experience" 
                        className="text-6xl md:text-7xl font-bold hover:text-gray-700 transition-colors duration-300 block mb-8 tracking-wider"
                        style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.05em' }}
                      >
                        02. Experience
                      </a>
                    </div>
                    <div>
                      <a 
                        href="#education" 
                        className="text-6xl md:text-7xl font-bold hover:text-gray-700 transition-colors duration-300 block mb-8 tracking-wider"
                        style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.05em' }}
                      >
                        03. Education
                      </a>
                    </div>
                    <div>
                      <a 
                        href="#skills" 
                        className="text-6xl md:text-7xl font-bold hover:text-gray-700 transition-colors duration-300 block mb-8 tracking-wider"
                        style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.05em' }}
                      >
                        04. Technical Skills
                      </a>
                    </div>
                    <div>
                      <a 
                        href="#portfolio" 
                        className="text-6xl md:text-7xl font-bold hover:text-gray-700 transition-colors duration-300 block mb-8 tracking-wider"
                        style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.05em' }}
                      >
                        05. Portfolio
                      </a>
                    </div>
                    <div>
                      <a 
                        href="#contact" 
                        className="text-6xl md:text-7xl font-bold hover:text-gray-700 transition-colors duration-300 block mb-8 tracking-wider"
                        style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.05em' }}
                      >
                        06. Contact
                      </a>
                    </div>
                  </nav>
                </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* Vertical Heading - Right Side */}
          <div className="hidden md:flex items-center justify-center h-full absolute right-14 top-1/2 -translate-y-1/2 w-32">
            <h2 
              className="text-6xl font-black text-black"
              style={{
                transform: 'rotate(-90deg)',
                transformOrigin: 'center',
                whiteSpace: 'nowrap',
                position: 'absolute',
                width: 'max-content',
                fontSize: '18rem',
                letterSpacing: '0.1em',
              }}
            >
              CONTENTS
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
