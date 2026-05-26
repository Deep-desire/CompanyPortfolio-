import { useEffect, useState } from 'react';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AIservice from './components/AIservice';
import PowerPlatformService from './components/powerplatformservice';
import Dynamicservice from './components/Dynamicservice';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import MeetPeople from './components/MeetPeople';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-200 transition-colors duration-500">
      {/* <Navbar activeHeroIndex={activeHeroIndex} /> */}
      <main>
        <Hero onSlideChange={setActiveHeroIndex} />
        <About />
        <Services />
        <AIservice />
        <PowerPlatformService />
        <Dynamicservice />
        <Projects />
        <TechStack />
        <MeetPeople />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
