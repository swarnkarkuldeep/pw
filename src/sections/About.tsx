import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../components/Section';

const About: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <Section id="about" className="min-h-screen flex items-center py-12 bg-[#EEF0DD] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-black/10 mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-black/5 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        {/* Heading */}
        <motion.div 
          className="text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-bold tracking-wider text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] leading-none"
            style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.2em' }}
          >
            ABOUT ME
          </h2>
          <div className="w-32 h-1 bg-black mx-auto mt-4"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Left Column - Description */}
          <motion.div 
            className="space-y-6 px-4 md:pr-12 md:pl-12 self-center"
          >
            <motion.div variants={item} className="relative group">
              <div className="absolute -left-8 top-0 h-full w-1 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
              <p className="text-lg sm:text-xl md:text-2xl leading-tight pl-4" style={{ fontFamily: 'Whoomp' }}>
                Hey! I'm Kuldeep - a full-stack creative who blends design, development, and a touch of data magic to build digital experiences that don't just work - they wow. I specialize in UI/UX design, responsive web development, and wireframing user flows that actually make sense.
              </p>
            </motion.div>

            <motion.div variants={item} className="relative group">
              <div className="absolute -left-8 top-0 h-full w-1 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
              <p className="text-lg sm:text-xl md:text-2xl leading-tight pl-4" style={{ fontFamily: 'Whoomp' }}>
                With expertise in modern web technologies like React, TypeScript, and Node.js, I craft seamless digital experiences. My design-first approach ensures that every project is not just functional but also visually compelling and user-friendly.
              </p>
            </motion.div>

            <motion.div variants={item} className="relative group">
              <div className="absolute -left-8 top-0 h-full w-1 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
              <p className="text-lg sm:text-xl md:text-2xl leading-tight pl-4" style={{ fontFamily: 'Whoomp' }}>
                But I don't stop at the front end. I've got a thing for machine learning, and I love training data models - especially in Natural Language Processing - to build apps that understand and respond like humans. When I'm not coding or designing, I'm probably editing visuals to bring extra life to a project.
              </p>
            </motion.div>

            <motion.div variants={item} className="relative group">
              <div className="absolute -left-8 top-0 h-full w-1 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
              <p className="text-lg sm:text-xl md:text-2xl leading-tight pl-4" style={{ fontFamily: 'Whoomp' }}>
                I enjoy working on everything from sleek portfolio sites to data-driven tools and creative prototypes. Curious by nature and always learning, I aim to build things that are smart, beautiful, and actually useful.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="flex justify-center items-start px-4"
            variants={item}
          >
            <div className="w-full max-w-3xl relative group">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-2xl">
                <motion.img
                  src="https://i.pinimg.com/736x/6e/dd/35/6edd353918d5fb7e699d9627143e1f06.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Always learning, always creating
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-t-2 border-l-2 border-black/20 group-hover:border-black/40 transition-colors duration-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;