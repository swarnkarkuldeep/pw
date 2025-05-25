import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-black text-gray-400 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'Whoomp, sans-serif', letterSpacing: '0.5em', fontSize: '2rem' }}>KULDEEP SWARNKAR</h2>
        <div className="h-px w-20 bg-gray-600 mx-auto my-4" style={{letterSpacing: '0.5em'}}></div>
        <p className="text-sm mb-3" style={{fontFamily: 'sans-serif', letterSpacing: '0.1em'}}>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;