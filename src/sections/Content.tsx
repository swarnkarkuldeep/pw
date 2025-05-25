import React from 'react';

const Content: React.FC = () => {
  const navItems = [
    { text: 'About Me', id: 'about' },
    { text: 'Experience', id: 'experience' },
    { text: 'Education', id: 'education' },
    { text: 'Technical Skills', id: 'skills' },
    { text: 'Portfolio', id: 'portfolio' },
    { text: 'Contact', id: 'contact' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-12 bg-[#EEF0DD] relative">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full">
          {/* Content and Image Container */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full">
              {/* Image - Hidden on small mobile, shown on larger screens */}
              <div className="hidden sm:flex md:w-1/2 items-center justify-center h-full">
                <div className="relative aspect-[4/5] w-full max-w-md bg-gray-100 overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/7a/42/cf/7a42cf16bf68400c4dbde2f4d9dbc96e.jpg"
                    alt="Kuldeep Swarnkar"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-1/2 flex items-center">
                <div className="py-4 md:py-8 pl-0 md:pl-12 w-full">
                  <div className="w-full">
                    <nav className="space-y-6 md:space-y-10 w-full">
                      {navItems.map((item, index) => (
                        <div key={item.id} className="w-full">
                          <a 
                            href={`#${item.id}`} 
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold hover:text-gray-700 transition-colors duration-300 block mb-4 md:mb-8 tracking-wider w-full"
                            style={{ 
                              fontFamily: 'Huitside, sans-serif', 
                              letterSpacing: '0.05em',
                              lineHeight: '1.1'
                            }}
                          >
                            {`0${index + 1}. ${item.text}`}
                          </a>
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vertical Heading - Right Side (Hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-center h-full absolute right-14 top-1/2 -translate-y-1/2 w-32">
            <h2 
              className="font-black text-black"
              style={{
                transform: 'rotate(-90deg)',
                transformOrigin: 'center',
                whiteSpace: 'nowrap',
                position: 'absolute',
                width: 'max-content',
                fontSize: '15rem',
                letterSpacing: '0.1em',
                lineHeight: '0.9'
              }}
            >
              CONTENTS
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Content);