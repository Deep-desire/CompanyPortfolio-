import { useEffect, useState } from 'react';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AIservice from './components/AIservice';
import PowerPlatformService from './components/powerplatformservice';
import Dynamicservice from './components/Dynamicservice';
import Sharepointservice from './components/Sharepointservice';
import Azureservice from './components/Azureservice';
import WebAndMobile from './components/Web&mobileservice';
import PowerBI from './components/PowerBIservice';
import SEOservice from './components/SEOservice';
import AIExpertise from './components/AIExpertise';
import Products from './components/Products';
import PMP from './components/PMP';
import LMS from './components/LMS';
import AMS from './components/AMS';
import OrganizationChart from './components/OrganizationChart';
import EmployeeDirectory from './components/EmployeeDirectory';
import NewJoineePlatform from './components/NewJoineePlatform';
import IndustriesClient from './components/Industries&Client';
import Engagement from './components/Engagement';
import DevelopmentTeam from './components/DevelopmentTeam';
import DeliveryModel from './components/DeliveryModel';
import BusinessChallenges from './components/BusinessChallenges';
import SANAS from './components/SANAS';
import EnterpriseMining from './components/EnterpriseMining';
import WhyChooseUs from './components/WhyChooseUs';
import Connect from './components/Connect';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import MeetPeople from './components/MeetPeople';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [, setActiveHeroIndex] = useState(0);

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
        <Sharepointservice />
        <Azureservice />
        <WebAndMobile />
        <PowerBI />
        <SEOservice />
        <AIExpertise />
        <Products />
        <PMP />
        <LMS />
        <AMS />
        <OrganizationChart />
        <EmployeeDirectory />
        <NewJoineePlatform />
        <IndustriesClient />
        <Engagement />
        <DevelopmentTeam />
        <DeliveryModel />
        <BusinessChallenges />
        <SANAS />
        <EnterpriseMining />
        <WhyChooseUs />
        <Connect />
        <Projects />
        <TechStack />
        <MeetPeople />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
