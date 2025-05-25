import React from 'react';
import Section from '../components/Section';

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    period: "2023 - Present",
    description: "Developed responsive and interactive web applications using HTML, CSS. Collaborated with UI/UX designers and backend developers to integrate front-end components with backend services, ensuring cohesive and functional end-to-end solutions."
  },
  {
    id: 2,
    role: "UI/UX Designer",
    period: "2022 - Present",
    description: "Created visually appealing and functional interfaces for web and mobile applications, focusing on enhancing user interaction and satisfaction. Worked closely with cross-functional teams, including developers and product managers, to ensure seamless integration of design elements and alignment with business objectives. Has professional knowledge in Figma and Adobe XD."
  },
  {
    id: 3,
    role: "Web Developer",
    period: "2020 - Present",
    description: "Worked on photo and video editing projects for small YouTubers and social media influencers. Also did graphic, logo, and print designing along with content writing."
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="min-h-screen py-12 bg-[#EEF0DD] relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className="text-[10rem] md:text-[12rem] font-bold tracking-widest leading-none mb-12"
          style={{ fontFamily: 'Huitside, sans-serif' }}
        >
          EXPERIENCE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/6e/dd/35/6edd353918d5fb7e699d9627143e1f06.jpg"
                alt="Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Experience List */}
          <div className="md:col-span-2 space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="experience-item"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-3xl md:text-4xl font-bold">{exp.role}</h3>
                  <span className="text-2xl md:text-3xl ml-4">{exp.period}</span>
                </div>
                <p className="text-lg leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
