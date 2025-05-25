import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { initScrollAnimations, staggerChildren } from './utils/animations';
import Menu from './components/Menu';
import Hero from './sections/Hero';
import About from './sections/About';
import Content from './sections/Content';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add staggered animations to lists
    staggerChildren('.stagger-children', 0.1);
    
    // Set mounted state for initial animation
    const timeout = setTimeout(() => setIsMounted(true), 100);
    
    return () => clearTimeout(timeout);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  const sections = [
    { id: 'hero', component: <Hero key="hero" /> },
    { id: 'content', component: <Content key="content" /> },
    { id: 'about', component: <About key="about" /> },
    { id: 'experience', component: <Experience key="experience" /> },
    { id: 'education', component: <Education key="education" /> },
    { id: 'skills', component: <Skills key="skills" /> },
    { id: 'portfolio', component: <Portfolio key="portfolio" /> },
    { id: 'contact', component: <Contact key="contact" /> },
  ];

  return (
    <div className={`relative transition-opacity duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Menu Button and Overlay */}
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
      
      {/* Main Content */}
      <main>
        <TransitionGroup component={null}>
          {sections.map(({ id, component }) => (
            <CSSTransition
              key={id}
              classNames="section"
              timeout={600}
              appear={true}
              in={isMounted}
            >
              <div className="reveal">
                {component}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <Footer />
      </main>
    </div>
  );
}

export default App;