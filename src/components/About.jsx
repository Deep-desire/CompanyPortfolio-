import { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Target,
  Eye,
  Globe,
  Users,
  Shield,
  Lightbulb
} from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

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

      // Value cards animate smoothly with the parent about-panel-left
    }, sectionRef);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);


  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;

    // Rotate values based on distance from center
    const rotateX = -(y - centerY) / 6;
    const rotateY = (x - centerX) / 6;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;

    const shine = card.querySelector('.card-shine');
    if (shine) {
      shine.style.left = `${x}px`;
      shine.style.top = `${y}px`;
      shine.style.opacity = '1';
    }
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    const shine = card.querySelector('.card-shine');
    if (shine) {
      shine.style.opacity = '0';
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f8f2ff] dark:bg-[#030208] px-4 md:px-6 pt-12 pb-12 transition-colors duration-500 select-none flex flex-col justify-center gap-8"
    >
      {/* Background glow and animations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,78,203,0.14),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(91,44,255,0.16),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,78,203,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(91,44,255,0.1),transparent_45%)]" />


      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-6 lg:grid-cols-[0.43fr_0.57fr] items-stretch">

        {/* Left Div — Company Overview Panel */}
        <div className="about-panel-left relative rounded-[40px] border border-white/80 dark:border-white/10 bg-white/65 dark:bg-[#120c24]/50 p-6 md:p-9 shadow-[0_30px_90px_rgba(91,44,255,0.12)] dark:shadow-[0_30px_90px_rgba(168,85,247,0.06)] backdrop-blur-2xl flex flex-col justify-between overflow-hidden">

          <div className="space-y-6">
            {/* Logo and Brand Title */}
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="DesireInfoWeb Logo" className="w-14 h-14 object-contain filter drop-shadow-sm" />
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
                { title: "Client Success First", icon: <Users className="w-5 h-5" /> },
                { title: "Innovation Always", icon: <Lightbulb className="w-5 h-5" /> },
                { title: "Integrity & Excellence", icon: <Shield className="w-5 h-5" /> },
                { title: "Global Mindset Local Impact", icon: <Globe className="w-5 h-5" /> }
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="value-card rounded-3xl p-4 bg-white/80 dark:bg-[#1a0f30]/60 border border-purple-200/80 dark:border-purple-900/40 shadow-xs text-center flex flex-col items-center justify-center gap-2 hover:scale-[1.05] hover:shadow-md transition-all duration-200 cursor-pointer group relative overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="card-shine absolute -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] opacity-0 pointer-events-none transition-opacity duration-300 z-0" />

                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 z-10 transition-all duration-300" style={{ transform: 'translateZ(25px)' }}>
                    {val.icon}
                  </div>
                  <h5 className="text-[10px] md:text-xs font-black text-[#2e1065] dark:text-purple-200 leading-tight z-10" style={{ transform: 'translateZ(15px)' }}>{val.title}</h5>
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
            {/* Header: Title & Subtitle + 25+ Countries Card */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-[#2e1065] dark:text-slate-100 tracking-tight leading-none">
                  Our Global <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">Presence</span>
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1.5">Delivering Excellence. Worldwide.</p>
              </div>
              {/* 25+ Countries Served floating glass card */}
              <div className="flex-shrink-0 bg-white/70 dark:bg-slate-950/75 border border-white/90 dark:border-white/10 shadow-[0_8px_32px_rgba(91,44,255,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md rounded-2xl px-4 py-2 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
                  <Globe className="w-4 h-4 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#2e1065] dark:text-white leading-none">25+</div>
                  <div className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Glowing 3D World Map Canvas */}
            <div className="relative w-full h-[400px] md:h-[480px] lg:h-[510px] bg-purple-500/[0.01] dark:bg-purple-900/[0.01] rounded-3xl border border-slate-200/5 select-none overflow-hidden">
              <ThreeDMap isDarkMode={isDarkMode} />


              {/* Map Legend */}
              <div className="absolute bottom-3 left-3 bg-white/70 dark:bg-slate-950/75 border border-white/80 dark:border-white/5 shadow-md backdrop-blur-md rounded-2xl p-3 z-30">
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

          {/* Stats Cards at Bottom of Right Panel */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 border-t border-slate-200/10 mt-6 z-10">
            {[
              {
                end: 1200,
                label: "Projects Delivered",
                icon: (
                  <svg viewBox="0 0 100 100" className="w-16 h-16 animate-float-slow overflow-visible pointer-events-none">
                    <defs>
                      <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fca5a5" />
                        <stop offset="100%" stopColor="#f43f5e" />
                      </linearGradient>
                      <linearGradient id="cubeLeft" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#be123c" />
                        <stop offset="100%" stopColor="#e11d48" />
                      </linearGradient>
                      <linearGradient id="cubeRight" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#f43f5e" />
                        <stop offset="100%" stopColor="#fb7185" />
                      </linearGradient>
                    </defs>
                    <g transform="translate(10, 5)">
                      <g transform="translate(0, 30)">
                        <polygon points="40,20 65,30 40,40 15,30" fill="url(#cubeTop)" opacity="0.8" />
                        <polygon points="15,30 40,40 40,65 15,55" fill="url(#cubeLeft)" opacity="0.8" />
                        <polygon points="40,40 65,30 65,55 40,65" fill="url(#cubeRight)" opacity="0.8" />
                      </g>
                      <g transform="translate(0, 5) scale(0.9)">
                        <polygon points="40,20 65,30 40,40 15,30" fill="url(#cubeTop)" />
                        <polygon points="15,30 40,40 40,65 15,55" fill="url(#cubeLeft)" />
                        <polygon points="40,40 65,30 65,55 40,65" fill="url(#cubeRight)" />
                        <line x1="40" y1="40" x2="40" y2="65" stroke="#ffe4e6" strokeWidth="1" opacity="0.5" />
                      </g>
                    </g>
                  </svg>
                )
              },
              {
                end: 250,
                label: "Happy Clients",
                icon: (
                  <svg viewBox="0 0 100 100" className="w-16 h-16 animate-pulse-slow overflow-visible pointer-events-none">
                    <defs>
                      <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                      <linearGradient id="sphereGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#e9d5ff" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    <ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="url(#orbitGrad)" strokeWidth="2.5" transform="rotate(-30, 50, 50)" opacity="0.7" />
                    <ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="url(#orbitGrad)" strokeWidth="1.5" transform="rotate(30, 50, 50)" opacity="0.7" />
                    <circle cx="50" cy="50" r="16" fill="url(#sphereGrad)" filter="drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))" />
                    <circle cx="75" cy="35" r="4" fill="#fb7185" />
                    <circle cx="25" cy="65" r="4" fill="#38bdf8" />
                  </svg>
                )
              },
              {
                end: 25,
                label: "Countries Served",
                icon: (
                  <svg viewBox="0 0 100 100" className="w-16 h-16 animate-spin-slow overflow-visible pointer-events-none">
                    <defs>
                      <linearGradient id="globeGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0369a1" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="32" fill="none" stroke="url(#globeGrad)" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.4" />
                    <ellipse cx="50" cy="50" rx="32" ry="10" fill="none" stroke="url(#globeGrad)" strokeWidth="2" />
                    <ellipse cx="50" cy="50" rx="32" ry="22" fill="none" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.6" />
                    <ellipse cx="50" cy="50" rx="10" ry="32" fill="none" stroke="url(#globeGrad)" strokeWidth="2" />
                    <ellipse cx="50" cy="50" rx="22" ry="32" fill="none" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.6" />
                    <circle cx="50" cy="18" r="3" fill="#f43f5e" />
                    <circle cx="68" cy="34" r="2.5" fill="#10b981" />
                    <circle cx="32" cy="66" r="2.5" fill="#fbbf24" />
                  </svg>
                )
              },
              {
                end: 10,
                label: "Years of Experience",
                icon: (
                  <svg viewBox="0 0 100 100" className="w-16 h-16 animate-float-slow overflow-visible pointer-events-none">
                    <defs>
                      <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                    <path d="M50,15 L60,40 L85,40 L65,55 L75,80 L50,65 L25,80 L35,55 L15,40 L40,40 Z" fill="url(#starGrad)" filter="drop-shadow(0 4px 10px rgba(245,158,11,0.3))" transform="scale(0.85) translate(8, 8)" />
                    <path d="M50,15 L60,40 L85,40 L65,55 L75,80 L50,65 L25,80 L35,55 L15,40 L40,40 Z" fill="none" stroke="#fff" strokeWidth="1.5" transform="scale(0.7) translate(21, 21)" opacity="0.6" />
                    <circle cx="50" cy="50" r="6" fill="#fff" filter="drop-shadow(0 0 5px #fbbf24)" />
                  </svg>
                )
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glassmorphic-card rounded-3xl p-6 md:p-7 border border-white/60 dark:border-white/10 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="card-shine absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,transparent_70%)] opacity-0 pointer-events-none transition-opacity duration-300 z-0" />

                <div
                  className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center z-10 transition-all duration-500 group-hover:scale-110"
                  style={{ transform: 'translateZ(45px)' }}
                >
                  {stat.icon}
                </div>
                <div className="z-10 flex flex-col items-center gap-1.5 select-none" style={{ transform: 'translateZ(25px)' }}>
                  <div className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 dark:from-purple-300 dark:via-pink-300 dark:to-indigo-300 tracking-tight leading-none">
                    <CountUp end={stat.end} suffix="+" />
                  </div>
                  <div className="text-[9px] md:text-[10px] lg:text-[11px] font-black text-slate-500 dark:text-purple-200/80 uppercase tracking-widest leading-normal whitespace-normal w-full" style={{ transform: 'translateZ(15px)' }}>
                    {stat.label}
                  </div>
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

// ==========================================
// 3D Extruded World Map & Components
// ==========================================

const MAP_WIDTH_HALF = 5.5;
const MAP_HEIGHT_HALF = 2.75;

// Miller Cylindrical Projection to resolve stretching/squashing
const projectCoords = (lon, lat) => {
  const x = (lon / 180) * MAP_WIDTH_HALF;
  const clampedLat = Math.max(-80, Math.min(85, lat));
  const latRad = (clampedLat * Math.PI) / 180;
  const yVal = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * latRad));
  const z = -(yVal / 2.0) * MAP_HEIGHT_HALF;
  return [x, 0.38, z];
};

const createShapes = (coordinates) => {
  if (coordinates.length === 0) return [];
  const shapesList = [];
  const exteriorRing = coordinates[0];
  const shape = new THREE.Shape();

  const project2D = (lon, lat) => {
    const x = (lon / 180) * MAP_WIDTH_HALF;
    const clampedLat = Math.max(-80, Math.min(85, lat));
    const latRad = (clampedLat * Math.PI) / 180;
    const yVal = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * latRad));
    const y = (yVal / 2.0) * MAP_HEIGHT_HALF;
    return [x, y];
  };

  const [x0, y0] = project2D(exteriorRing[0][0], exteriorRing[0][1]);
  shape.moveTo(x0, y0);
  for (let i = 1; i < exteriorRing.length; i++) {
    const [x, y] = project2D(exteriorRing[i][0], exteriorRing[i][1]);
    shape.lineTo(x, y);
  }

  for (let h = 1; h < coordinates.length; h++) {
    const holeRing = coordinates[h];
    const holePath = new THREE.Path();
    const [hx0, hy0] = project2D(holeRing[0][0], holeRing[0][1]);
    holePath.moveTo(hx0, hy0);
    for (let i = 1; i < holeRing.length; i++) {
      const [hx, hy] = project2D(holeRing[i][0], holeRing[i][1]);
      holePath.lineTo(hx, hy);
    }
    shape.holes.push(holePath);
  }

  shapesList.push(shape);
  return shapesList;
};

function BorderLines({ shape, isDarkMode }) {
  const { topGeometries, bottomGeometries } = useMemo(() => {
    const topGeoms = [];
    const bottomGeoms = [];

    // Main boundary
    const points = shape.getPoints();
    if (points.length > 0) {
      const topV3 = points.map(p => new THREE.Vector3(p.x, p.y, 0.36)); // slightly above depth = 0.35
      const bottomV3 = points.map(p => new THREE.Vector3(p.x, p.y, -0.01)); // base boundary
      topGeoms.push(new THREE.BufferGeometry().setFromPoints(topV3));
      bottomGeoms.push(new THREE.BufferGeometry().setFromPoints(bottomV3));
    }

    // Hole boundaries
    shape.holes.forEach(hole => {
      const hPoints = hole.getPoints();
      if (hPoints.length > 0) {
        const topH = hPoints.map(p => new THREE.Vector3(p.x, p.y, 0.36));
        const bottomH = hPoints.map(p => new THREE.Vector3(p.x, p.y, -0.01));
        topGeoms.push(new THREE.BufferGeometry().setFromPoints(topH));
        bottomGeoms.push(new THREE.BufferGeometry().setFromPoints(bottomH));
      }
    });

    return { topGeometries: topGeoms, bottomGeometries: bottomGeoms };
  }, [shape]);

  return (
    <group>
      {/* Top glowing neon border */}
      {topGeometries.map((geom, idx) => (
        <lineLoop key={`top-${idx}`} geometry={geom}>
          <lineBasicMaterial color={isDarkMode ? "#c084fc" : "#db2777"} transparent opacity={0.9} />
        </lineLoop>
      ))}

      {/* Bottom base border */}
      {bottomGeometries.map((geom, idx) => (
        <lineLoop key={`bottom-${idx}`} geometry={geom}>
          <lineBasicMaterial color={isDarkMode ? "#4b2b9c" : "#dfc1ff"} transparent opacity={0.4} />
        </lineLoop>
      ))}
    </group>
  );
}

function ContinentMesh({ shapes, isDarkMode }) {
  const extrudeSettings = useMemo(() => ({
    depth: 0.35,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.02,
    bevelThickness: 0.02,
  }), []);

  // Dynamic canvas texture creating a glowing dot-grid texture on the continents
  const gridTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Base transparent/dark color
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 128, 128);

    // Sub-grid lines
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, 128, 128);

    // Central glowing dot
    ctx.fillStyle = 'rgba(192, 132, 252, 0.85)';
    ctx.beginPath();
    ctx.arc(64, 64, 2.5, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(16, 16);
    return texture;
  }, []);

  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      {shapes.map((shape, idx) => (
        <group key={idx}>
          <mesh>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshPhysicalMaterial
              color={isDarkMode ? "#221147" : "#7c3aed"}
              emissive={isDarkMode ? "#581c87" : "#c084fc"}
              emissiveMap={gridTexture}
              emissiveIntensity={isDarkMode ? 1.6 : 1.3}
              roughness={0.12}
              metalness={0.2}
              transmission={0.7}
              thickness={1.1}
              ior={1.6}
              clearcoat={1.0}
              clearcoatRoughness={0.05}
              transparent={true}
              opacity={isDarkMode ? 0.85 : 0.9}
            />
          </mesh>
          <BorderLines shape={shape} isDarkMode={isDarkMode} />
        </group>
      ))}
    </group>
  );
}

function BaseRing({ isHQ }) {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = (clock.getElapsedTime() * 0.7) % 1.0;
      const scale = 1.0 + t * 4.0;
      const opacity = 0.9 * (1.0 - t);
      meshRef.current.scale.set(scale, scale, 1);
      meshRef.current.material.opacity = opacity;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.07, 0.1, 24]} />
      <meshBasicMaterial color={isHQ ? "#fbbf24" : "#d8b4fe"} transparent />
    </mesh>
  );
}

function LightBeam({ isHQ, height = 1.8 }) {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      const scaleVal = 1.0 + Math.sin(t * 4.0) * 0.08;
      const opacVal = 0.22 + Math.sin(t * 2.5) * 0.04;
      meshRef.current.scale.set(scaleVal, 1, scaleVal);
      meshRef.current.material.opacity = opacVal;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, height / 2, 0]}>
      <cylinderGeometry args={[0.005, 0.05, height, 16, 1, true]} />
      <meshBasicMaterial
        color={isHQ ? "#fbbf24" : "#c084fc"}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function LocationPin({ loc }) {
  const [x, y, z] = loc.position;
  const height = loc.height || 1.8;
  const gradId = `pinGrad-${loc.country.replace(/\s+/g, '-')}`;
  return (
    <group position={[x, y, z]}>
      {/* Small base marker ring */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 0.1, 24]} />
        <meshBasicMaterial color={loc.isHQ ? "#f59e0b" : "#a855f7"} transparent opacity={0.8} />
      </mesh>

      <BaseRing isHQ={loc.isHQ} />
      <LightBeam isHQ={loc.isHQ} height={height} />

      {/* Spot glowing sphere at base */}
      <mesh position={[0, 0.02, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={loc.isHQ ? "#fbbf24" : "#e9d5ff"} />
      </mesh>

      {/* Point light to cast realistic lighting on surrounding continent surface */}
      <pointLight position={[0, 0.05, 0]} distance={1.5} intensity={2.0} color={loc.isHQ ? "#fbbf24" : "#c084fc"} />

      {/* Glassmorphic card */}
      <Html
        position={[0, height, 0]}
        center
        distanceFactor={7}
        zIndexRange={[10, 50]}
      >
        <div className="flex flex-col items-center select-none pointer-events-none group/pin relative">
          <div className="flex items-center gap-2.5 bg-white/45 dark:bg-[#120a2d]/45 border border-white/60 dark:border-white/10 shadow-[0_8px_32px_rgba(91,44,255,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md rounded-[20px] p-2 pr-3.5 whitespace-nowrap transform group-hover/pin:scale-105 transition-all duration-300">
            {/* Glowing pin icon wrapper */}
            <div className="w-8 h-8 rounded-xl bg-white/90 dark:bg-slate-900/80 flex items-center justify-center shadow-xs">
              <svg className="w-4.5 h-4.5 filter drop-shadow-xs" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill={`url(#${gradId})`} />
                <defs>
                  <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={loc.isHQ ? "#f59e0b" : "#a855f7"} />
                    <stop offset="100%" stopColor={loc.isHQ ? "#d97706" : "#6366f1"} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Text contents */}
            <div className="flex flex-col text-left">
              <div className="text-[10px] font-black text-[#2e1065] dark:text-white tracking-wide uppercase leading-tight">{loc.country}</div>
              <div className="text-[9px] font-bold text-slate-700 dark:text-purple-200/80 leading-snug">{loc.city}</div>
              <div className="text-[7px] font-black text-slate-400 dark:text-purple-300/40 uppercase tracking-widest leading-none mt-0.5">{loc.office}</div>
            </div>
          </div>
          <div className="w-1.5 h-1.5 bg-white/45 dark:bg-[#120a2d]/45 border-r border-b border-white/60 dark:border-white/10 rotate-45 -mt-[4px] backdrop-blur-md" />
        </div>
      </Html>
    </group>
  );
}

function ArcParticle({ curve, speed, color, delay }) {
  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * speed + delay;

    if (meshRef1.current) {
      const t1 = time % 1.0;
      const pos1 = curve.getPointAt(t1);
      meshRef1.current.position.copy(pos1);
    }
    if (meshRef2.current) {
      const t2 = (time - 0.02) % 1.0;
      const pos2 = curve.getPointAt(t2 < 0 ? t2 + 1 : t2);
      meshRef2.current.position.copy(pos2);
    }
    if (meshRef3.current) {
      const t3 = (time - 0.04) % 1.0;
      const pos3 = curve.getPointAt(t3 < 0 ? t3 + 1 : t3);
      meshRef3.current.position.copy(pos3);
    }
  });

  return (
    <group>
      {/* Lead particle */}
      <mesh ref={meshRef1}>
        <sphereGeometry args={[0.038, 8, 8]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      {/* Trail 1 */}
      <mesh ref={meshRef2}>
        <sphereGeometry args={[0.026, 6, 6]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} toneMapped={false} />
      </mesh>
      {/* Trail 2 */}
      <mesh ref={meshRef3}>
        <sphereGeometry args={[0.015, 6, 6]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} toneMapped={false} />
      </mesh>
    </group>
  );
}

function ConnectionArc({ startPos, endPos, isDarkMode }) {
  const { curve, lineGeometry } = useMemo(() => {
    const start = new THREE.Vector3(startPos[0], 0.45, startPos[2]);
    const end = new THREE.Vector3(endPos[0], 0.45, endPos[2]);
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const dist = start.distanceTo(end);
    mid.y += dist * 0.25 + 0.1;
    const curveObj = new THREE.QuadraticBezierCurve3(start, mid, end);
    const pts = curveObj.getPoints(40);
    const geom = new THREE.BufferGeometry().setFromPoints(pts);
    return { curve: curveObj, lineGeometry: geom };
  }, [startPos, endPos]);

  return (
    <group>
      <line geometry={lineGeometry}>
        <lineBasicMaterial
          color={isDarkMode ? "#d8b4fe" : "#a855f7"}
          transparent
          opacity={0.5}
          linewidth={1.5}
        />
      </line>

      <ArcParticle curve={curve} speed={0.35} color={isDarkMode ? "#fca55f" : "#eab308"} delay={0} />
      <ArcParticle curve={curve} speed={0.35} color={isDarkMode ? "#fb7185" : "#ec4899"} delay={1.2} />
    </group>
  );
}

function ConnectionArcs({ locations, hqCoords, isDarkMode }) {
  const branches = useMemo(() => {
    return locations.filter(loc => !loc.isHQ);
  }, [locations]);

  return (
    <group>
      {branches.map((loc, idx) => (
        <ConnectionArc
          key={idx}
          startPos={hqCoords}
          endPos={loc.position}
          isDarkMode={isDarkMode}
        />
      ))}
    </group>
  );
}

function MapScene({ shapes, locations, hqCoords, isDarkMode }) {
  const sceneRef = useRef();

  return (
    <group ref={sceneRef} rotation={[-Math.PI / 6.5, 0, 0]} position={[-0.8, -0.4, 0.2]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[16, 8]} />
        <meshBasicMaterial
          color={isDarkMode ? "#0d0a21" : "#faf5ff"}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* High tech subdiv 24 grid helper */}
      <gridHelper args={[12, 24, isDarkMode ? "#581c87" : "#d8b4fe", isDarkMode ? "#1e153f" : "#f5f3ff"]} position={[0, -0.01, 0]} />

      <ContinentMesh shapes={shapes} isDarkMode={isDarkMode} />

      <ConnectionArcs locations={locations} hqCoords={hqCoords} isDarkMode={isDarkMode} />

      {locations.map((loc, idx) => (
        <LocationPin key={idx} loc={loc} isDarkMode={isDarkMode} />
      ))}
    </group>
  );
}

export function ThreeDMap({ isDarkMode }) {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/ne_110m_land.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load GeoJSON map: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error loading GeoJSON map:", err));
  }, []);

  const shapes = useMemo(() => {
    if (!geoData) return [];
    const allShapes = [];

    const isAntarctica = (coords) => {
      const exterior = coords[0];
      if (!exterior || exterior.length === 0) return false;
      let latSum = 0;
      for (let i = 0; i < exterior.length; i++) {
        latSum += exterior[i][1];
      }
      const avgLat = latSum / exterior.length;
      return avgLat < -60;
    };

    geoData.features.forEach((feature) => {
      const { geometry } = feature;
      if (!geometry) return;

      if (geometry.type === 'Polygon') {
        if (isAntarctica(geometry.coordinates)) return;
        allShapes.push(...createShapes(geometry.coordinates));
      } else if (geometry.type === 'MultiPolygon') {
        geometry.coordinates.forEach((coords) => {
          if (isAntarctica(coords)) return;
          allShapes.push(...createShapes(coords));
        });
      }
    });

    return allShapes;
  }, [geoData]);

  const locationsWith3D = useMemo(() => {
    const data = [
      { country: "Canada", city: "Toronto, ON", office: "Office", lon: -79.38, lat: 43.65, height: 2.5, isHQ: false },
      { country: "USA", city: "New York, NY", office: "Office", lon: -74.01, lat: 40.71, height: 1.4, isHQ: false },
      { country: "Europe", city: "London, UK", office: "Office", lon: -0.13, lat: 51.51, isHQ: false },
      { country: "India", city: "Ahmedabad (HQ)", office: "Mumbai | Pune Offices", lon: 72.57, lat: 23.02, isHQ: true },
      { country: "South Africa", city: "Cape Town", office: "Office", lon: 18.42, lat: -33.92, height: 1.2, isHQ: false },
      { country: "Australia", city: "Melbourne", office: "Office", lon: 144.96, lat: -37.81, isHQ: false }
    ];
    return data.map(loc => {
      const [x, y, z] = projectCoords(loc.lon, loc.lat);
      return { ...loc, position: [x, y, z] };
    });
  }, []);

  const hqLoc = locationsWith3D.find(l => l.isHQ);
  const hqCoords = hqLoc ? hqLoc.position : [0, 0, 0];

  if (!geoData || shapes.length === 0) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-black text-slate-400 uppercase tracking-widest animate-pulse">Initializing 3D World...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 8.0, 2.0], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDarkMode ? 0.7 : 1.2} />
        <directionalLight position={[5, 12, 6]} intensity={isDarkMode ? 1.0 : 1.5} />
        <pointLight position={[-6, 8, -6]} intensity={isDarkMode ? 0.4 : 0.8} color="#a855f7" />

        <MapScene
          shapes={shapes}
          locations={locationsWith3D}
          hqCoords={hqCoords}
          isDarkMode={isDarkMode}
        />
      </Canvas>
    </div>
  );
}

