import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import MeetPeople from './components/MeetPeople';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FlowArt, { FlowSection } from './components/story-scroll';

function App() {
  useEffect(() => {
    // Initialize dark mode based on local storage or system preference
    const isDark = localStorage.getItem('theme') !== 'light';
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-200 transition-colors duration-500">
      <Navbar />
      <FlowArt aria-label="Company Portfolio">
        <FlowSection className="bg-[#030712]" innerClassName="p-0">
          <Hero />
        </FlowSection>
        <FlowSection className="bg-[#030712]" innerClassName="p-0">
          <About />
        </FlowSection>
        <FlowSection className="bg-[#030712]" innerClassName="p-0">
          <Services />
        </FlowSection>
        <FlowSection className="bg-[#030712]" innerClassName="p-0">
          <Projects />
        </FlowSection>
        <FlowSection className="bg-[#030712]" innerClassName="p-0">
          <TechStack />
        </FlowSection>
        <FlowSection className="bg-[#030712]" innerClassName="p-0">
          <MeetPeople />
        </FlowSection>
        <FlowSection className="bg-[#030712]" innerClassName="p-0">
          <WhyChooseUs />
        </FlowSection>
        <FlowSection className="bg-[#030712]" innerClassName="p-0">
          <Testimonials />
        </FlowSection>
        <FlowSection className="bg-[#030712]" innerClassName="p-0">
          <Contact />
        </FlowSection>
      </FlowArt>
      <Footer />
    </div>
  );
}

export default App;
