import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Target, 
  Eye, 
  Globe, 
  Award, 
  Users, 
  Briefcase, 
  Shield, 
  Lightbulb, 
  MapPin
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Custom CountUp Component that animates when visible
function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

const MAP_PATHS = {
  northAmerica: "M100,80 C110,60 130,40 160,35 C180,30 200,45 220,40 C240,35 250,20 260,30 C275,40 260,75 270,90 C280,105 295,100 280,115 C265,130 245,120 235,135 C220,150 200,180 190,195 C175,190 160,185 150,175 C140,165 110,160 100,140 C90,120 85,95 100,80 Z",
  southAmerica: "M190,195 C205,195 220,210 235,230 C250,250 255,280 240,320 C230,340 220,350 215,350 C210,340 215,310 205,290 C195,270 180,240 175,220 C175,210 185,200 190,195 Z",
  greenland: "M180,20 C205,25 215,45 190,55 C175,50 165,30 180,20 Z",
  africa: "M335,160 C360,150 380,155 405,165 C425,175 435,200 425,230 C415,260 400,290 385,310 C375,315 370,295 375,280 C360,255 340,240 335,220 C330,200 325,180 335,160 Z",
  eurasia: "M285,95 C295,75 320,65 340,55 C370,40 430,35 490,30 C540,35 570,40 580,60 C570,80 590,100 600,115 C590,135 565,150 550,140 C535,155 530,175 515,185 C510,175 495,170 480,185 C470,170 460,195 C450,180 440,165 420,165 C410,155 395,160 385,150 C365,155 355,145 345,145 C335,140 325,150 320,130 C305,135 295,115 285,95 Z",
  australia: "M535,250 C565,240 585,255 580,280 C565,295 540,285 535,250 Z",
  madagascar: "M435,265 C445,260 440,285 430,290 Z",
  japan: "M585,90 C590,95 585,110 580,115 Z",
  newZealand: "M595,300 C605,295 600,315 595,310 Z",
  uk: "M290,75 C295,70 290,85 285,85 Z"
};

export default function About() {
  const sectionRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect theme switches dynamically
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // GSAP Scroll Animations
    const ctx = gsap.context(() => {
      gsap.from('.about-panel-left', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        x: -50,
        opacity: 0,
        duration: 1.0,
        ease: 'power2.out'
      });

      gsap.from('.about-panel-right', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        x: 50,
        opacity: 0,
        duration: 1.0,
        ease: 'power2.out'
      });

      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.values-container',
          start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  const mapFill = isDarkMode ? "url(#mapGradDark)" : "url(#mapGradLight)";
  const mapStroke = isDarkMode ? "#c084fc" : "#8b5cf6";
  const extrusionFill = isDarkMode ? "#2e1065" : "#4c1d95";

  const locations = [
    { country: "Canada", city: "Toronto, ON", office: "Office", x: "21.5%", y: "29.7%", isHQ: false },
    { country: "USA", city: "New York, NY", office: "Office", x: "24.6%", y: "35.1%", isHQ: false },
    { country: "Europe", city: "London, UK", office: "Office", x: "49.2%", y: "25.6%", isHQ: false },
    { country: "India", city: "Ahmedabad (HQ)", office: "Mumbai | Pune Offices", x: "72.3%", y: "47.3%", isHQ: true },
    { country: "South Africa", city: "Cape Town", office: "Office", x: "60.8%", y: "77.0%", isHQ: false },
    { country: "Australia", city: "Melbourne", office: "Office", x: "89.2%", y: "77.0%", isHQ: false }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden bg-[#f8f2ff] dark:bg-[#030208] px-4 md:px-6 pt-16 pb-24 transition-colors duration-500 select-none flex flex-col justify-center gap-8"
    >
      {/* Background glow and animations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,78,203,0.14),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(91,44,255,0.16),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,78,203,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(91,44,255,0.1),transparent_45%)]" />


      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-6 lg:grid-cols-[0.43fr_0.57fr] items-stretch">
        
        {/* Left Div — Company Overview Panel */}
        <div className="about-panel-left relative rounded-[40px] border border-white/80 dark:border-white/10 bg-white/65 dark:bg-[#120c24]/50 p-6 md:p-9 shadow-[0_30px_90px_rgba(91,44,255,0.12)] dark:shadow-[0_30px_90px_rgba(168,85,247,0.06)] backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
          
          <div className="space-y-6">
            {/* Logo and Brand Title */}
            <div className="flex items-center gap-3">
              <img src="/image (2).png" alt="DesireInfoWeb Logo" className="w-14 h-14 object-contain filter drop-shadow-sm" />
              <div>
                <span className="block text-2xl md:text-3xl font-black text-[#2e1065] dark:text-white tracking-tight leading-none">DesireInfoWeb</span>
                <span className="block text-[10px] md:text-[11px] font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 uppercase tracking-widest mt-1.5 whitespace-nowrap">Your Extended Technology Partner</span>
              </div>
            </div>

            {/* Section Tag */}
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-5 bg-amber-500/50" />
              <span className="text-[10px] font-black text-amber-500 tracking-widest uppercase">Company Overview</span>
              <div className="h-[1px] w-5 bg-amber-500/50" />
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-black text-[#2e1065] dark:text-slate-100 tracking-tight leading-[1.2]">
              Building Intelligent <br />
              Solutions for a <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400">Better Future</span>
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-350 font-medium leading-relaxed">
              DesireInfoWeb is a global technology consulting and digital transformation partner. We help organizations modernize their businesses through Microsoft technologies, cloud innovation, AI, and intelligent automation—delivering measurable impact and sustainable growth.
            </p>

            {/* Tech strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                {
                  name: 'Microsoft 365',
                  icon: (
                    <div className="grid grid-cols-2 gap-0.5 w-[10px] h-[10px]">
                      <div className="bg-[#e04f5f] rounded-2xs" />
                      <div className="bg-[#00a6f0] rounded-2xs" />
                      <div className="bg-[#3da03d] rounded-2xs" />
                      <div className="bg-[#ffb900] rounded-2xs" />
                    </div>
                  )
                },
                {
                  name: 'SharePoint',
                  icon: (
                    <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" fill="currentColor" />
                    </svg>
                  )
                },
                {
                  name: 'Azure',
                  icon: (
                    <svg className="w-3 h-3 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 22h9l3-7 2-3 6 10z" />
                    </svg>
                  )
                },
                {
                  name: 'Power Platform',
                  icon: (
                    <svg className="w-3 h-3 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  )
                },
                {
                  name: 'Dynamics 365',
                  icon: (
                    <svg className="w-3 h-3 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  )
                },
                {
                  name: 'AI Solutions',
                  icon: (
                    <svg className="w-3 h-3 text-purple-500 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2v20M2 12h20M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                    </svg>
                  )
                }
              ].map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/40 dark:bg-slate-900/40 border border-white/50 dark:border-white/5 shadow-xs hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {tech.icon}
                  <span className="text-[9px] font-black text-slate-800 dark:text-slate-200 tracking-wider uppercase">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Mission Card */}
              <div className="group rounded-[28px] border border-white/85 dark:border-white/5 bg-white/60 dark:bg-slate-900/40 p-4 shadow-[0_8px_32px_rgba(91,44,255,0.05)] backdrop-blur-xl hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(91,44,255,0.08)] transition-all duration-300 flex gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 flex-shrink-0 flex items-center justify-center text-white shadow-[0_6px_20px_rgba(99,102,241,0.4)] relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0.5 rounded-full bg-white/10 backdrop-blur-xs opacity-50" />
                  <Target className="w-5 h-5 z-10" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#2e1065] dark:text-white uppercase tracking-wider">Our Mission</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mt-1 leading-normal">
                    To deliver innovative, scalable, and impactful technology solutions that transform businesses and create lasting value.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group rounded-[28px] border border-white/85 dark:border-white/5 bg-white/60 dark:bg-slate-900/40 p-4 shadow-[0_8px_32px_rgba(91,44,255,0.05)] backdrop-blur-xl hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(91,44,255,0.08)] transition-all duration-300 flex gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_6px_20px_rgba(244,63,94,0.4)] relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0.5 rounded-full bg-white/10 backdrop-blur-xs opacity-50" />
                  <Eye className="w-5 h-5 z-10" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#2e1065] dark:text-white uppercase tracking-wider">Our Vision</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold mt-1 leading-normal">
                    To be a globally trusted technology partner recognized for driving digital innovation and operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="values-container space-y-3 pt-6 border-t border-slate-200/10 mt-6 relative">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">What Drives Us</span>
              <div className="h-[1px] flex-1 bg-slate-200/10 mx-3" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { title: "Client Success First", desc: "Your goals drive us.", icon: <Users className="w-4 h-4" /> },
                { title: "Innovation Always", desc: "Pushing boundaries.", icon: <Lightbulb className="w-4 h-4" /> },
                { title: "Integrity & Excellence", desc: "Quality in every line.", icon: <Shield className="w-4 h-4" /> },
                { title: "Global Mindset Local Impact", desc: "Smarter remote teamwork.", icon: <Globe className="w-4 h-4" /> }
              ].map((val, idx) => (
                <div 
                  key={idx} 
                  className="value-card rounded-2xl p-2.5 bg-white/40 dark:bg-slate-900/30 border border-white/60 dark:border-white/5 shadow-xs text-center flex flex-col justify-between hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="w-6 h-6 mx-auto mb-1.5 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    {val.icon}
                  </div>
                  <h5 className="text-[9px] font-black text-slate-900 dark:text-slate-100 leading-tight">{val.title}</h5>
                  <p className="text-[8px] font-bold text-slate-500 dark:text-slate-400 mt-0.5 leading-none">{val.desc}</p>
                </div>
              ))}
            </div>

            {/* Small futuristic 3D City SVG at bottom left */}
            <div className="absolute -bottom-6 -left-6 pointer-events-none select-none opacity-45 dark:opacity-20 z-0">
              <svg viewBox="0 0 240 180" className="w-40 h-auto overflow-visible">
                <defs>
                  {/* Gradients for city buildings */}
                  <linearGradient id="cityBase" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.05)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
                  </linearGradient>
                  
                  {/* Purple Building */}
                  <linearGradient id="purpLight" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                  <linearGradient id="purpDark" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#7e22ce" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                  <linearGradient id="purpTop" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d8b4fe" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>

                  {/* Cyan Building */}
                  <linearGradient id="cyanLight" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <linearGradient id="cyanDark" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#0891b2" />
                    <stop offset="100%" stopColor="#0e7490" />
                  </linearGradient>
                  <linearGradient id="cyanTop" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#67e8f9" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>

                  {/* Rose Building */}
                  <linearGradient id="roseLight" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#fb7185" />
                  </linearGradient>
                  <linearGradient id="roseDark" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#be123c" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                  <linearGradient id="roseTop" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fca5a5" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>

                {/* Base isometric grid/rhombus */}
                <polygon points="120,130 200,165 120,200 40,165" fill="url(#cityBase)" stroke="rgba(168,85,247,0.15)" strokeWidth="1" />
                <polygon points="120,120 180,146 120,172 60,146" fill="none" stroke="rgba(168,85,247,0.1)" strokeWidth="0.5" strokeDasharray="3,3" />

                {/* Left Building (Purple) */}
                <g transform="translate(60, 100)">
                  {/* Left Face */}
                  <polygon points="0,30 20,40 20,90 0,80" fill="url(#purpDark)" />
                  {/* Right Face */}
                  <polygon points="20,40 40,30 40,80 20,90" fill="url(#purpLight)" />
                  {/* Top Face */}
                  <polygon points="0,30 20,20 40,30 20,40" fill="url(#purpTop)" />
                  {/* Glowing line window details */}
                  <line x1="10" y1="45" x2="10" y2="75" stroke="#fdf4ff" strokeWidth="0.7" strokeDasharray="2,4" opacity="0.8" />
                  <line x1="30" y1="45" x2="30" y2="75" stroke="#fdf4ff" strokeWidth="0.7" strokeDasharray="2,4" opacity="0.8" />
                </g>

                {/* Right Building (Rose) */}
                <g transform="translate(140, 110)">
                  {/* Left Face */}
                  <polygon points="0,25 15,32 15,75 0,68" fill="url(#roseDark)" />
                  {/* Right Face */}
                  <polygon points="15,32 30,25 30,68 15,75" fill="url(#roseLight)" />
                  {/* Top Face */}
                  <polygon points="0,25 15,18 30,25 15,32" fill="url(#roseTop)" />
                  {/* Windows */}
                  <line x1="7" y1="35" x2="7" y2="60" stroke="#ffe4e6" strokeWidth="0.6" strokeDasharray="1.5,3" opacity="0.85" />
                  <line x1="22" y1="35" x2="22" y2="60" stroke="#ffe4e6" strokeWidth="0.6" strokeDasharray="1.5,3" opacity="0.85" />
                </g>

                {/* Center Tall Building (Cyan) */}
                <g transform="translate(95, 60)">
                  {/* Left Face */}
                  <polygon points="0,35 25,48 25,120 0,107" fill="url(#cyanDark)" />
                  {/* Right Face */}
                  <polygon points="25,48 50,35 50,107 25,120" fill="url(#cyanLight)" />
                  {/* Top Face */}
                  <polygon points="0,35 25,22 50,35 25,48" fill="url(#cyanTop)" />
                  {/* Vertical Glowing Lines */}
                  <line x1="12" y1="52" x2="12" y2="102" stroke="#ecfeff" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.9" />
                  <line x1="38" y1="52" x2="38" y2="102" stroke="#ecfeff" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.9" />
                  {/* Extra antenna at top */}
                  <line x1="25" y1="22" x2="25" y2="5" stroke="#22d3ee" strokeWidth="1.2" />
                  <circle cx="25" cy="5" r="1.5" fill="#f43f5e" className="animate-pulse" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Div — Global Presence Panel */}
        <div className="about-panel-right relative rounded-[40px] border border-white/80 dark:border-white/10 bg-white/65 dark:bg-[#120c24]/50 p-6 md:p-9 shadow-[0_30px_90px_rgba(91,44,255,0.12)] dark:shadow-[0_30px_90px_rgba(168,85,247,0.06)] backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
          
          <div className="space-y-4">
            {/* Header: Title & Subtitle */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-[#2e1065] dark:text-slate-100 tracking-tight leading-none">
                  Our Global <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">Presence</span>
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1.5">Delivering Excellence. Worldwide.</p>
              </div>
            </div>

            {/* Glowing 2.5D World Map */}
            <div className="relative w-full overflow-x-auto scrollbar-hide bg-purple-500/[0.02] dark:bg-purple-900/[0.02] rounded-3xl border border-slate-200/5 py-2 select-none">
              <div className="relative min-w-[650px] md:min-w-0 w-full aspect-[650/370]">
                {/* 25+ Countries Served floating glass card */}
                <div className="absolute top-4 right-4 bg-white/70 dark:bg-slate-950/70 border border-white/90 dark:border-white/10 shadow-[0_8px_32px_rgba(91,44,255,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md rounded-2xl px-4 py-2 flex items-center gap-3 z-35 transition-all duration-300 hover:scale-105 pointer-events-auto">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
                  <Globe className="w-4 h-4 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#2e1065] dark:text-white leading-none">25+</div>
                  <div className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Countries Served</div>
                </div>
              </div>

              {/* Map SVG */}
              <svg viewBox="0 0 650 370" className="w-full h-full filter drop-shadow-[0_12px_24px_rgba(139,92,246,0.15)]">
                <defs>
                  {/* Map Shading Gradients */}
                  <linearGradient id="mapGradLight" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ebdffc" />
                    <stop offset="50%" stopColor="#cfb6f6" />
                    <stop offset="100%" stopColor="#b58cf2" />
                  </linearGradient>
                  <linearGradient id="mapGradDark" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#311956" />
                    <stop offset="50%" stopColor="#251242" />
                    <stop offset="100%" stopColor="#180a2c" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fb7185" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>

                  <style>{`
                    @keyframes mapDash {
                      to {
                        stroke-dashoffset: -40;
                      }
                    }
                    .connection-line {
                      stroke-dasharray: 6, 6;
                      animation: mapDash 3s linear infinite;
                    }
                  `}</style>
                </defs>

                {/* Grid Overlay */}
                <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none">
                  {/* Vertical lines */}
                  {Array.from({ length: 13 }).map((_, i) => (
                    <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="370" />
                  ))}
                  {/* Horizontal lines */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`h-${i}`} x1="0" y1={i * 50} x2="650" y2={i * 50} />
                  ))}
                </g>

                {/* Extruded 3D/2.5D layer */}
                <g fill={extrusionFill} opacity="0.3" transform="translate(0, 4.5)">
                  <path d={MAP_PATHS.northAmerica} />
                  <path d={MAP_PATHS.southAmerica} />
                  <path d={MAP_PATHS.greenland} />
                  <path d={MAP_PATHS.eurasia} />
                  <path d={MAP_PATHS.africa} />
                  <path d={MAP_PATHS.australia} />
                  <path d={MAP_PATHS.madagascar} />
                  <path d={MAP_PATHS.japan} />
                  <path d={MAP_PATHS.newZealand} />
                  <path d={MAP_PATHS.uk} />
                </g>

                {/* Foreground World Outlines */}
                <g fill={mapFill} stroke={mapStroke} strokeWidth="1.2" strokeLinejoin="round">
                  <path d={MAP_PATHS.northAmerica} className="transition-all duration-500 hover:opacity-90" />
                  <path d={MAP_PATHS.southAmerica} className="transition-all duration-500 hover:opacity-90" />
                  <path d={MAP_PATHS.greenland} className="transition-all duration-500 hover:opacity-90" />
                  <path d={MAP_PATHS.eurasia} className="transition-all duration-500 hover:opacity-90" />
                  <path d={MAP_PATHS.africa} className="transition-all duration-500 hover:opacity-90" />
                  <path d={MAP_PATHS.australia} className="transition-all duration-500 hover:opacity-90" />
                  <path d={MAP_PATHS.madagascar} className="transition-all duration-500 hover:opacity-90" />
                  <path d={MAP_PATHS.japan} className="transition-all duration-500 hover:opacity-90" />
                  <path d={MAP_PATHS.newZealand} className="transition-all duration-500 hover:opacity-90" />
                  <path d={MAP_PATHS.uk} className="transition-all duration-500 hover:opacity-90" />
                </g>

                {/* Animated Connection Arches from India (HQ) to other locations */}
                <g opacity="0.75">
                  {/* India (470, 175) to Canada (140, 110) */}
                  <path d="M 470,175 Q 305,80 140,110" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" className="connection-line" />
                  {/* India (470, 175) to USA (160, 130) */}
                  <path d="M 470,175 Q 315,100 160,130" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" className="connection-line" />
                  {/* India (470, 175) to Europe (320, 95) */}
                  <path d="M 470,175 Q 395,90 320,95" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" className="connection-line" />
                  {/* India (470, 175) to South Africa (395, 285) */}
                  <path d="M 470,175 Q 430,225 395,285" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" className="connection-line" />
                  {/* India (470, 175) to Australia (580, 285) */}
                  <path d="M 470,175 Q 525,225 580,285" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" className="connection-line" />
                </g>
              </svg>

              {/* HTML Absolute overlays for pins and location cards */}
              {locations.map((loc, idx) => (
                <div 
                  key={idx} 
                  style={{ left: loc.x, top: loc.y }} 
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-30"
                >
                  {/* Pulsing Pin */}
                  <div className="relative flex items-center justify-center cursor-pointer">
                    {loc.isHQ ? (
                      <>
                        <div className="absolute w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/30 animate-ping duration-1500" />
                        <div className="absolute w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/20 animate-ping duration-3000" />
                        <div className="w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow-[0_0_12px_rgba(245,158,11,0.85)] z-10 transition-transform duration-300 group-hover:scale-125" />
                      </>
                    ) : (
                      <>
                        <div className="absolute w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 animate-ping duration-1500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-600 dark:bg-purple-400 border-2 border-white dark:border-slate-900 shadow-[0_0_8px_rgba(168,85,247,0.7)] z-10 transition-transform duration-300 group-hover:scale-125" />
                      </>
                    )}
                  </div>

                  {/* Floating location card (always visible, floats slightly on hover) */}
                  <div 
                    className="
                      absolute transform -translate-x-1/2 -translate-y-[122%]
                      bg-white/80 dark:bg-slate-950/80
                      border border-white/95 dark:border-white/10
                      shadow-[0_8px_30px_rgba(91,44,255,0.14)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]
                      backdrop-blur-md rounded-2xl p-2 md:p-2.5 text-left min-w-[130px] md:min-w-[145px]
                      transition-all duration-300
                      hover:scale-105 group-hover:-translate-y-[126%]
                      z-40 pointer-events-auto
                      flex items-start gap-1.5 md:gap-2
                    "
                  >
                    <div className={`w-6 h-6 md:w-7 md:h-7 rounded-xl ${loc.isHQ ? 'bg-amber-500/10 text-amber-500 dark:text-amber-400' : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'} flex-shrink-0 flex items-center justify-center mt-0.5`}>
                      <MapPin className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[8px] md:text-[9px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">{loc.country}</div>
                      <div className="text-[9px] md:text-[10px] font-bold text-slate-900 dark:text-slate-100 mt-0.5">{loc.city}</div>
                      <div className="text-[8px] font-medium text-slate-450 dark:text-slate-450 mt-0.5 leading-none">{loc.office}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Legend (Bottom Left of Panel Map) */}
              <div className="absolute bottom-3 left-3 bg-white/70 dark:bg-slate-950/70 border border-white/80 dark:border-white/5 shadow-md backdrop-blur-md rounded-2xl p-3 z-30 pointer-events-auto">
                <h5 className="text-[8px] font-black text-slate-400 uppercase tracking-wider mb-2">Map Legend</h5>
                <div className="space-y-1.5 text-[8px] font-bold text-slate-700 dark:text-slate-350">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-white shadow-xs" />
                    <span>Headquarters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 border border-white shadow-xs" />
                    <span>Regional Offices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500 border border-white shadow-xs" />
                    <span>Delivery Centers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Stats Cards at Bottom of Right Panel */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/10 mt-6 z-10">
            {[
              { end: 1200, label: "Projects Delivered", icon: <Briefcase className="w-4 h-4" /> },
              { end: 250, label: "Happy Clients", icon: <Users className="w-4 h-4" /> },
              { end: 25, label: "Countries Served", icon: <Globe className="w-4 h-4" /> },
              { end: 10, label: "Years of Experience", icon: <Award className="w-4 h-4" /> }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="glassmorphic-card rounded-2xl p-3 border-white/70 dark:border-white/5 shadow-[0_8px_24px_rgba(91,44,255,0.06)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex-shrink-0 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-sm font-black text-[#2e1065] dark:text-white leading-none">
                    <CountUp end={stat.end} suffix="+" />
                  </div>
                  <div className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5 leading-snug">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Hinge / Binder Ring Hinge (Only visible on lg screens) */}
        <div className="pointer-events-none absolute left-[42.7%] top-8 hidden h-[88%] w-[2px] bg-gradient-to-b from-transparent via-[#8b5cf6]/40 to-transparent lg:block z-40">
          {/* Top binder ring loop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-4.5 h-18 rounded-full border-2 border-white/95 dark:border-white/10 bg-gradient-to-r from-purple-200 via-white to-purple-300 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 shadow-[0_4px_12px_rgba(139,92,246,0.35)] flex items-center justify-center overflow-hidden">
            <div className="w-[2px] h-[90%] bg-white/45 rounded-full absolute left-1" />
          </div>
          {/* Bottom binder ring loop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[68%] w-4.5 h-18 rounded-full border-2 border-white/95 dark:border-white/10 bg-gradient-to-r from-purple-200 via-white to-purple-300 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 shadow-[0_4px_12px_rgba(139,92,246,0.35)] flex items-center justify-center overflow-hidden">
            <div className="w-[2px] h-[90%] bg-white/45 rounded-full absolute left-1" />
          </div>
        </div>
      </div>


    </section>
  );
}
