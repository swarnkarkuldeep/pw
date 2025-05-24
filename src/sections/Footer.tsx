import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="py-8 px-4 bg-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">KULDEEP SWARNKAR</h2>
          <p className="text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <p className="text-sm">Designed & Built with ♥</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;