import React, { useRef } from 'react';
import Section from '../components/Section';
import { Mail, Phone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    { id: 1, label: "GitHub", url: "https://github.com/username" },
    { id: 2, label: "LinkedIn", url: "https://linkedin.com/in/username" },
  ];

  return (
    <Section id="contact" className="min-h-screen relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-2 h-auto md:h-screen">
        
        {/* Mobile Heading: GET IN TOUCH */}
        <motion.div 
          className="md:hidden flex items-center justify-center py-8 col-span-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 
            className="text-5xl font-bold text-center"
            style={{ 
              fontFamily: 'Huitside, sans-serif',
              letterSpacing: '0.05em'
            }}
          >
            GET IN TOUCH
          </h3>
        </motion.div>

        {/* Desktop GET IN */}
        <motion.div 
          className="hidden md:flex items-center justify-center p-8 md:p-12 md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 
            className="text-9xl font-bold" 
            style={{ 
              fontFamily: 'Huitside, sans-serif', 
              letterSpacing: '0.05em', 
              fontSize: '15rem' 
            }}
          >
            GET IN
          </h3>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="relative h-64 md:h-auto mt-4 md:mt-0 md:col-span-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Contact" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="p-6 md:p-12 flex flex-col justify-center md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-6">
            <motion.div 
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Mail className="mr-4" size={28} />
              <a 
                href="mailto:kuldeepswarnkar14@gmail.com" 
                className="text-lg md:text-2xl hover:underline tracking-wide"
              >
                kuldeepswarnkar14@gmail.com
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Phone className="mr-4" size={28} />
              <a 
                href="tel:+919462132274" 
                className="text-lg md:text-2xl hover:underline tracking-wide"
              >
                +91 9462132274
              </a>
            </motion.div>

            <div className="mt-6">
              <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-widest">CONNECT</h4>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-2xl hover:underline tracking-wide"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Desktop TOUCH */}
        <motion.div 
          className="hidden md:flex items-center justify-center p-8 md:p-12 md:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 
            className="text-9xl font-bold"
            style={{ 
              fontFamily: 'Huitside, sans-serif', 
              letterSpacing: '0.05em', 
              fontSize: '15rem' 
            }}
          >
            TOUCH
          </h3>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
