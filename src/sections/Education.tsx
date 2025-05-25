import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';

const Education: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger animation when 10% of the component is in view
    triggerOnce: true // Animation plays only once
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Slightly reduced stagger for a snappier feel
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6, // Slightly reduced duration
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9, // Slightly faster title animation
        ease: "easeOut"
      }
    }
  };

  // New: Variants for the decorative line
  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5 // Appears after the main content starts
      }
    }
  };

  return (
    <Section id="education" className="min-h-screen py-12 bg-white relative flex items-center justify-center overflow-hidden">
      {/* Decorative Blob/Circle in the background for subtle movement */}
      <motion.div
        className="absolute top-1/4 -left-20 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob z-0"
        initial={{ y: -50, x: -50, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 z-0"
        initial={{ y: 50, x: 50, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      ></motion.div>

      <div className="container mx-auto px-4 md:px-6 h-full relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full items-center"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* First Column - Vertical Title (Hidden on mobile, shown on md+) */}
          <motion.div
            className="hidden md:flex md:col-span-1 items-center justify-center"
            variants={titleVariants}
          >
            <h2
              className="font-bold tracking-wider text-[12rem] leading-none text-black"
              style={{
                fontFamily: 'Huitside, sans-serif',
                letterSpacing: '0.15em',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              EDUCATION
            </h2>
          </motion.div>

          {/* Mobile Title (Shown only on mobile) */}
          <motion.div
            className="md:hidden mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-6xl font-bold tracking-wider text-black"
              style={{
                fontFamily: 'Huitside, sans-serif',
                letterSpacing: '0.15em'
              }}
            >
              EDUCATION
            </h2>
          </motion.div>

          {/* Second Column - Education Details */}
          <motion.div
            className="md:col-span-5 md:pr-8 md:ml-8 flex flex-col justify-center"
            variants={itemVariants}
          >
            <div className="w-full">
              <motion.h3 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-2 tracking-wider text-black">
                Bachelor of Technology
              </motion.h3>
              <motion.h4 variants={itemVariants} className="text-2xl md:text-4xl mb-1 font-medium text-gray-800">
                SRM University Andhra Pradesh
              </motion.h4>
              <motion.h4 variants={itemVariants} className="text-2xl md:text-4xl mb-2 font-medium text-gray-800">
                Computer Science
              </motion.h4>
              <motion.p variants={itemVariants} className="text-xl md:text-3xl mb-4 text-gray-700">
                2023 - 2027
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg md:text-2xl leading-tight text-gray-600">
                CURRENTLY NAVIGATING THE WILD WORLD OF COMPUTER SCIENCE, FROM BUILDING BEAUTIFUL UIS TO TEACHING MACHINES HOW TO READ.
              </motion.p>

              {/* New: Decorative line */}
              <motion.div
                className="w-full h-1 bg-black mt-8"
                variants={lineVariants}
              ></motion.div>
            </div>
          </motion.div>

          {/* Third Column - Image */}
          <motion.div
            className="md:col-span-6 h-full flex items-center justify-center"
            variants={imageVariants}
          >
            <motion.div
              className="relative w-full h-[300px] md:h-[500px] overflow-hidden shadow-lg md:shadow-2xl group"
              // Simplified whileHover: only a subtle scale, no rotate
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }} // Faster transition for a snappier feel
            >
              <img
                src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg"
                alt="Education"
                // Removed group-hover:scale-105 from here
                className="w-full h-full object-cover transition-transform duration-300" // Keep a slight transition for general smoothness
                loading="lazy"
              />
              {/* Subtle overlay for visual appeal */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  The pursuit of knowledge
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Education;