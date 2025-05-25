import React, { useEffect } from 'react';
import Section from '../components/Section';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio: React.FC = () => {
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

  // Main container for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Stagger the animation of direct children
      }
    }
  };

  // Variants for the image column
  const imageColumnVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  // Variants for the vertical "PORTFOLIO" title
  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Variants for the links and the 'X' separator
  const linkItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section id="portfolio" className="min-h-screen flex items-center py-12 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Blobs */}
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

      <div className="container mx-auto px-4 h-full relative z-10">
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center min-h-[calc(100vh-8rem)]"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Empty column to push content to center (maintaining original layout intention) */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Column 1: Image - Order changed for mobile/tablet */}
          <motion.div
            className="md:col-span-5 relative overflow-hidden shadow-2xl flex items-center justify-center min-h-[300px] md:min-h-[600px] group order-first md:order-none" /* Added order-first for mobile */
            variants={imageColumnVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://i.pinimg.com/736x/8a/2c/ec/8a2cec5ee25bf116bffb180766e81dfb.jpg"
              alt="Portfolio"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay text on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
              <p className="text-white text-lg sm:text-xl font-semibold text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Explore my creative works
              </p>
            </div>
          </motion.div>

          {/* Column 2: Vertical Heading (hidden on smaller screens) */}
          <motion.div
            className="hidden md:flex md:col-span-2 items-center justify-center"
            variants={titleVariants}
          >
            <h2
              className="font-bold text-black tracking-wider leading-none"
              style={{
                fontSize: '15rem',
                fontFamily: 'Huitside, sans-serif',
                letterSpacing: '0.15em',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)'
              }}
            >
              PORTFOLIO
            </h2>
          </motion.div>

          {/* Mobile Heading (shown on smaller screens) */}
          <motion.div
            className="md:hidden text-center my-8" /* Adjusted margin for mobile */
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-5xl sm:text-6xl font-bold text-black tracking-wider" /* Smaller font size for mobile/tablet */
              style={{
                fontFamily: 'Huitside, sans-serif',
                letterSpacing: '0.15em'
              }}
            >
              PORTFOLIO
            </h2>
          </motion.div>

          {/* Column 3: Links */}
          <motion.div
            className="md:col-span-4 flex flex-col justify-center space-y-6 sm:space-y-8 py-4 px-4 sm:px-8" /* Adjusted padding and space-y for mobile */
            variants={containerVariants}
          >
            <motion.a
              href="https://portfolio.example.com" // Replace with your actual portfolio URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl sm:text-5xl md:text-7xl font-medium text-black text-center block w-full relative group whitespace-nowrap" /* Adjusted font size for mobile/tablet */
              variants={linkItemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative inline-block">
                Go to My Portfolio
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-black origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </span>
            </motion.a>

            <motion.div
              className="text-3xl sm:text-4xl text-black text-center my-2 w-full" /* Adjusted font size and margin for mobile/tablet */
              variants={linkItemVariants}
            >
              X
            </motion.div>

            <motion.a
              href="/resume.pdf" // Ensure this path is correct for your resume
              download
              className="text-4xl sm:text-5xl md:text-7xl font-medium text-black text-center block w-full relative group whitespace-nowrap" /* Adjusted font size for mobile/tablet */
              variants={linkItemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative inline-block">
                Download My Resume
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-black origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Portfolio;