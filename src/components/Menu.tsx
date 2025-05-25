import React from 'react';
import { MenuProps } from '../types';
import { Menu as MenuIcon, X } from 'lucide-react';


const menuItems = [
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

      <div 
        className={`fixed inset-0 bg-[#EEF0DD] z-[99] flex items-center justify-center px-4 py-20 overflow-y-auto transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <ul className="space-y-2 md:space-y-4 flex-1">
            {menuItems.map((item, i) => (
              <li 
                key={item.id}
                className="group relative overflow-hidden"
                onClick={() => handleMenuItemClick(item.id)}
              >
                <div className="relative z-10 px-4 py-3 md:py-4 cursor-pointer">
                  <span className="text-3xl md:text-6xl font-bold text-black group-hover:text-[#EEF0DD] transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
              </li>
            ))}
          </ul>
          {/* Image on the right side */}
          <div className="mt-8 md:mt-0 md:ml-12 flex-shrink-0">
            <img
              src="https://i.pinimg.com/736x/7a/42/cf/7a42cf16bf68400c4dbde2f4d9dbc96e.jpg"
              alt="Menu Side"
              className="w-60 h-[40rem] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;