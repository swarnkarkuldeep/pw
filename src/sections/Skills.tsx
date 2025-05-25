import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';

const leftSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "PHP",
  "React",
  "Angular",
  "Vite",
  "Node.js"
];

const rightSkills = [
  "Python",
  "C",
  "C++",
  "Java",
  "SQL"
];

const Skills: React.FC = () => {
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
        staggerChildren: 0.1 // Stagger each child item's animation
      }
    }
  };

  // Variants for individual skill items
  const skillItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Variants for the "I KNOW" title
  const iKnowTitleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Variants for the large "TECHNICAL SKILLS" title
  const technicalSkillsTitleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3 // Delay slightly to appear after the main grid
      }
    }
  };

  // Variants for the image
  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section id="skills" className="relative bg-white py-12 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Blob/Circle in the background for subtle movement */}
      <motion.div
        className="absolute top-1/4 -right-20 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob z-0"
        initial={{ y: -50, x: 50, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 z-0"
        initial={{ y: 50, x: -50, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      ></motion.div>

      <div className="container mx-auto h-full px-4 sm:px-6 relative z-10"> {/* Ensure content is above decorative elements */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 h-full gap-8 md:gap-0"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - I KNOW and Skills */}
          <motion.div
            className="md:col-span-4 flex flex-col justify-center p-4 md:p-12"
            variants={containerVariants} // Use containerVariants here for staggering the title and skill columns
          >
            <div className="w-full">
              {/* Mobile/Tablet Title */}
              <motion.h2
                className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 md:mb-12 text-center md:text-left whitespace-nowrap text-black"
                style={{
                  fontFamily: 'Huitside, sans-serif',
                  lineHeight: '1',
                  letterSpacing: '0.05em',
                  fontSize: 'clamp(3rem, 10vw, 15rem)'
                }}
                variants={iKnowTitleVariants} // Animate the "I KNOW" title
              >
                I KNOW
              </motion.h2>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-0">
                <motion.div
                  className="md:pr-8 space-y-2 md:space-y-4 text-center sm:text-right"
                  variants={containerVariants} // Stagger individual skills within this column
                >
                  {leftSkills.map((skill, index) => (
                    <motion.div
                      key={`left-${index}`}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 cursor-pointer hover:text-black transition-colors duration-200" /* Increased text size */
                      variants={skillItemVariants} // Animate each skill
                      whileHover={{ scale: 1.05, originX: 'right' }} // Hover effect for left skills
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  className="md:pl-8 space-y-2 md:space-y-4 text-center sm:text-left"
                  variants={containerVariants} // Stagger individual skills within this column
                >
                  {rightSkills.map((skill, index) => (
                    <motion.div
                      key={`right-${index}`}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 cursor-pointer hover:text-black transition-colors duration-200" /* Increased text size */
                      variants={skillItemVariants} // Animate each skill
                      whileHover={{ scale: 1.05, originX: 'left' }} // Hover effect for right skills
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image - Wider */}
          <motion.div
            className="md:col-span-8 h-full order-first md:order-none flex items-center justify-center"
            variants={imageVariants} // Animate the image container
          >
            <motion.div
              className="relative w-full h-[30vh] sm:h-[40vh] md:h-full min-h-[300px] overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.01 }} // Subtle zoom on image container hover
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://i.pinimg.com/736x/f4/4d/7f/f44d7ffb695293e5c12eea03de392ffc.jpg"
                alt="Technical Skills"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // Image scales on hover
                loading="lazy"
              />
              {/* Subtle overlay for visual appeal and hover text */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Proficient in various technologies
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Right Title - TECHNICAL SKILLS */}
        <motion.div
          className="hidden md:block absolute bottom-0 right-0 pr-8 pb-4 text-right"
          variants={technicalSkillsTitleVariants} // Animate this title
        >
          <h2
            className="font-bold text-black"
            style={{
              fontSize: '15rem',
              fontFamily: 'Huitside, sans-serif',
              lineHeight: '1',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap'
            }}
          >
            TECHNICAL SKILLS
          </h2>
        </motion.div>

        {/* Mobile/Tablet TECHNICAL SKILLS Title */}
        <motion.div
          className="md:hidden mt-8 text-center"
          initial={{ opacity: 0, y: 50 }} // Animate mobile title from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2
            className="font-bold text-black text-4xl sm:text-5xl"
            style={{
              fontFamily: 'Huitside, sans-serif',
              lineHeight: '1',
              letterSpacing: '0.05em'
            }}
          >
            TECHNICAL SKILLS
          </h2>
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;