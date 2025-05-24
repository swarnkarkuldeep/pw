import React from 'react';
import { MenuProps } from '../types';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
  { id: 'hero', label: 'RESUME' },
  { id: 'about', label: '01 - ABOUT ME' },
  { id: 'experience', label: '02 - EXPERIENCE' },
  { id: 'education', label: '03 - EDUCATION/INSTITUTION' },
  { id: 'skills', label: '04 - TECHNICAL SKILLS' },
  { id: 'portfolio', label: '05 - PORTFOLIO' },
  { id: 'contact', label: '06 - CONTACT' },
];

const Menu: React.FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  const handleMenuItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toggleMenu();
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <>
      <button 
        className={`fixed top-8 right-8 z-[100] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
          isOpen 
            ? 'bg-black text-white' 
            : 'bg-[#EEF0DD] text-black hover:bg-[#e0e2cf] shadow-md'
        }`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      >
        {isOpen ? (
          <X size={28} className="transition-opacity duration-300" />
        ) : (
          <MenuIcon size={28} className="transition-opacity duration-300" />
        )}
      </button>

      <motion.div 
        className="fixed inset-0 bg-[#EEF0DD] z-[99] flex items-center justify-center px-4 py-20 overflow-y-auto"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="w-full max-w-4xl mx-auto">
          <ul className="space-y-2 md:space-y-4">
            {menuItems.map((item, i) => (
              <motion.li 
                key={item.id}
                custom={i}
                variants={itemVariants}
                className="group relative overflow-hidden"
                onClick={() => handleMenuItemClick(item.id)}
              >
                <div className="relative z-10 px-4 py-3 md:py-4 cursor-pointer">
                  <span className="text-3xl md:text-6xl font-bold text-black group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;