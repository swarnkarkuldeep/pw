import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-12 bg-[#EEF0DD] relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="font-bold tracking-wider text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] leading-none"
            style={{ fontFamily: 'Huitside, sans-serif', letterSpacing: '0.2em' }}
          >
            ABOUT ME
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-4 px-4 md:pr-12 md:pl-12 self-center">
            <div>
              <p className="text-lg sm:text-xl md:text-2xl leading-tight" style={{ fontFamily: 'Whoomp' }}>
                Hey! I'm Kuldeep - a full-stack creative who blends design, development, and a touch of data magic to build digital experiences that don't just work - they wow. I specialize in UI/UX design, responsive web development, and wireframing user flows that actually make sense. Whether I'm sketching out concepts in Figma or coding pixel-perfect layouts, I'm all about bridging form and function.
              </p>

              <p className="text-lg sm:text-xl md:text-2xl leading-tight mt-4" style={{ fontFamily: 'Whoomp' }}>
                But I don't stop at the front end. I've got a thing for machine learning, and I love training data models - especially in Natural Language Processing - to build apps that understand and respond like humans. When I'm not coding or designing, I'm probably editing visuals to bring extra life to a project or experimenting with new tech to keep things fresh.
              </p>

              <p className="text-lg sm:text-xl md:text-2xl leading-tight mt-4" style={{ fontFamily: 'Whoomp' }}>
                I enjoy working on everything from sleek portfolio sites to data-driven tools and creative prototypes. Curious by nature and always learning, I aim to build things that are smart, beautiful, and actually useful.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-start px-4">
            <div className="w-full max-w-3xl">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/6e/dd/35/6edd353918d5fb7e699d9627143e1f06.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
