import React from 'react';
import Section from '../components/Section';
import Parallax from '../components/Parallax';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    { id: 1, icon: <Linkedin size={24} />, label: "LinkedIn", url: "https://linkedin.com/in/username" },
    { id: 2, icon: <Github size={24} />, label: "GitHub", url: "https://github.com/username" },
    { id: 3, icon: <Instagram size={24} />, label: "Instagram", url: "https://instagram.com/username" },
    { id: 4, icon: <MessageCircle size={24} />, label: "Discord", url: "https://discord.com/users/username" },
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="p-4 md:p-12 flex flex-col justify-center">
          <Parallax speed={0.05}>
            <div className="mt-24 md:mt-0 space-y-8">
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-5xl font-bold mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="mr-4" size={24} />
                    <a href="mailto:hello@example.com" className="text-xl hover:underline">hello@example.com</a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-4" size={24} />
                    <a href="tel:+1234567890" className="text-xl hover:underline">+1 (234) 567-890</a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-12"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-6">Connect on Social Media</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-lg hover:underline transition-transform hover:translate-x-1"
                    >
                      <span className="mr-2">{link.icon}</span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </Parallax>
        </div>
        
        <div className="relative h-screen md:h-auto">
          <Parallax speed={0.1} className="h-full">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Contact" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </Parallax>
        </div>
      </div>
    </Section>
  );
};

export default Contact;