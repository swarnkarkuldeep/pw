import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    { id: 1, label: "GitHub", url: "https://github.com/username" },
    { id: 2, label: "LinkedIn", url: "https://linkedin.com/in/username" },
  ];

  return (
    <Section id="contact" className="min-h-screen relative overflow-hidden">
      <motion.h2 
        className="section-heading absolute top-4 left-4 z-10 text-black mix-blend-difference"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        06 - CONTACT
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 h-screen">
        {/* Top Left: GET IN */}
        <motion.div 
          className="flex items-center justify-center p-8 md:p-12 md:col-span-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-7xl md:text-9xl font-bold" style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.05em', fontSize: '15rem' }}>GET IN</h3>
        </motion.div>
        
        {/* Top Right: Image */}
        <div className="relative h-64 md:h-auto mt-8 mr-8 md:col-span-8 lg:mr-16 lg:mt-12">
          <Parallax speed={0.1} className="h-full">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Contact" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </Parallax>
        </div>
        
        {/* Bottom Left: Contact Details */}
        <div className="p-8 md:p-12 flex flex-col justify-center md:col-span-4 md:pl-24">
          <Parallax speed={0.05}>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-6" size={32} />
                <a href="mailto:kuldeepswarnkar14@gmail.com" className="text-2xl hover:underline tracking-wider">kuldeepswarnkar14@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-6" size={32} />
                <a href="tel:+919462132274" className="text-2xl hover:underline tracking-wider">+91 9462132274</a>
              </div>
              
              <div className="mt-6">
                <h4 className="text-3xl font-bold mb-4 tracking-widest">CONNECT</h4>
                <div className="flex space-x-6">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:underline tracking-wider"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Parallax>
        </div>
        
        {/* Bottom Right: TOUCH */}
        <div className="flex items-center justify-center p-8 md:p-12 md:col-span-8">
          <motion.h3 
            className="text-7xl md:text-9xl font-bold"
            style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.05em', fontSize: '15rem' }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            TOUCH
          </motion.h3>
        </div>
      </div>
    </Section>
  );
};

export default Contact;