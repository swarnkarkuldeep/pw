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
        className={`menu-button ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X size={30} />
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </button>

      <motion.div 
        className="fixed inset-0 bg-[#EEF0DD] z-50 flex items-center justify-center"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="container mx-auto">
          <ul className="flex flex-col space-y-6 md:space-y-12">
            {menuItems.map((item, i) => (
              <motion.li 
                key={item.id}
                custom={i}
                variants={itemVariants}
                className="text-4xl md:text-7xl font-bold cursor-pointer hover:text-gray-700 transition-colors"
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;