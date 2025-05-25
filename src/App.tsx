import { useState } from 'react';
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  return (
    <div className="relative">
      {/* Menu Button and Overlay */}
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Content />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;