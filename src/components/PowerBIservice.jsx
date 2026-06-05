import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import CountUpRaw from 'react-countup';
const CountUp = typeof CountUpRaw === 'function' ? CountUpRaw : (CountUpRaw.default || CountUpRaw);
import {
  Database,
  Cloud,
  BarChart3,
  LineChart as LineIcon,
  PieChart as PieIcon,
  Shield,
  Users,
  Globe,
  Server,
  Cpu,
  Zap,
  Workflow,
  Settings,
  Mail,
  Phone,
  ArrowRight,
  FileSpreadsheet,
  FolderOpen,
  Activity,
  Cable,
  Files,
  TrendingUp,
  DollarSign,
  Briefcase,
  Layers,
  Award,
  CheckCircle,
  Menu,
  ChevronRight,
  Monitor,
  Heart
} from 'lucide-react';

// Microsoft solutions partner square icon svg
const MicrosoftIcon = (props) => (
  <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="11" height="11" fill="#f25022" />
    <rect x="12" width="11" height="11" fill="#7fba00" />
    <rect y="12" width="11" height="11" fill="#00a4ef" />
    <rect x="12" y="12" width="11" height="11" fill="#ffb900" />
  </svg>
);

// Custom Brand SVG Icons matching Image 4
const ExcelIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 mb-0.5" {...props}>
    <rect x="2" y="6" width="18" height="20" rx="2" fill="#107C41" />
    <rect x="12" y="10" width="18" height="12" rx="2" fill="#21A366" />
    <path d="M7 11l5 5m0-5l-5 5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 13h10M16 16h10M16 19h10" stroke="#fff" strokeWidth="1.5" />
  </svg>
);

const SQLServerIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 mb-0.5" {...props}>
    <path d="M16 4C7.16 4 4 6.69 4 10v12c0 3.31 3.16 6 12 6s12-2.69 12-6V10c0-3.31-3.16-6-12-6z" fill="#7a55a5" />
    <path d="M16 12c-8.84 0-12-2.69-12-6s3.16-6 12-6 12 2.69 12 6-3.16 6-12 6z" fill="#b095d3" />
    <path d="M28 16c0 3.31-3.16 6-12 6S4 19.31 4 16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 22c0 3.31-3.16 6-12 6S4 25.31 4 22" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AzureIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 mb-0.5" {...props}>
    <path d="M19.18 5L28 21.6H11.23L16 27h11.5L28 21.6 19.18 5z" fill="#0078d4" />
    <path d="M4 27h12.5l7-13.4H11.23L4 27z" fill="#50e4ff" />
  </svg>
);

const SharePointIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 mb-0.5" {...props}>
    <circle cx="16" cy="16" r="14" fill="#0078d4" />
    <path d="M16 6a10 10 0 00-10 10h20a10 10 0 00-10-10z" fill="#107c41" />
    <text x="16" y="24" fontSize="12" fontWeight="bold" fill="#fff" textAnchor="middle">S</text>
  </svg>
);

const DynamicsIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 mb-0.5" {...props}>
    <path d="M4 4l6 4 18 16-6 4L4 4z" fill="#5e17eb" />
    <path d="M10 8l12 12-6 8L4 20l6-12z" fill="#8b5cf6" opacity="0.8" />
  </svg>
);

const SalesforceIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 mb-0.5" {...props}>
    <path d="M25.3 13.8a6.5 6.5 0 00-12.2-2.3 8 8 0 00-4.6 14.5h16.8a6.5 6.5 0 000-12.2z" fill="#00a1e0" />
    <path d="M13.1 11.5a6.5 6.5 0 0012.2 2.3 6.5 6.5 0 01-12.2-2.3z" fill="#005fb2" opacity="0.15" />
  </svg>
);

const APIIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 mb-0.5" {...props}>
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1" />
    <circle cx="16" cy="16" r="4" fill="#8b5cf6" />
    <circle cx="8" cy="8" r="3" fill="#ec4899" />
    <circle cx="24" cy="8" r="3" fill="#3b82f6" />
    <circle cx="16" cy="24" r="3" fill="#10b981" />
    <line x1="8" y1="8" x2="13" y2="13" stroke="#8b5cf6" strokeWidth="1.5" />
    <line x1="24" y1="8" x2="19" y2="13" stroke="#8b5cf6" strokeWidth="1.5" />
    <line x1="16" y1="24" x2="16" y2="20" stroke="#8b5cf6" strokeWidth="1.5" />
  </svg>
);

const WebIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="2" className="w-5 h-5 mb-0.5" {...props}>
    <circle cx="16" cy="16" r="12" fill="#eff6ff" />
    <path d="M4 16h24M16 4v24M6 10h20M6 22h20" stroke="#3b82f6" strokeWidth="1.5" />
  </svg>
);

const FilesIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 mb-0.5" {...props}>
    <path d="M6 4h12l8 8v16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#4f46e5" />
    <path d="M18 4v8h8L18 4z" fill="#818cf8" opacity="0.6" />
    <path d="M8 14h16M8 18h16M8 22h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);





// ─── POWER BI SERVICE LANDING PAGE COMPONENT ─────────────────────────────────
const PowerBIservice = () => {
  // Navigation active tab mock
  const [activeTab, setActiveTab] = useState('Overview');
  // GSAP data pipeline steps pulse index
  const [pipelinePulse, setPipelinePulse] = useState(0);

  // References for pipeline dots and container
  const pipelineContainerRef = useRef(null);
  const dotRef = useRef(null);
  const stepsRefs = useRef([]);

  // Data for charts
  const trendData = useMemo(() => [
    { name: 'Jan', Revenue: 15, Budget: 14 },
    { name: 'Feb', Revenue: 18, Budget: 15 },
    { name: 'Mar', Revenue: 22, Budget: 17 },
    { name: 'Apr', Revenue: 26, Budget: 19 },
    { name: 'May', Revenue: 28, Budget: 21 },
    { name: 'Jun', Revenue: 34, Budget: 23 },
    { name: 'Jul', Revenue: 38, Budget: 25 },
    { name: 'Aug', Revenue: 40, Budget: 28 },
    { name: 'Sep', Revenue: 43, Budget: 30 },
    { name: 'Oct', Revenue: 47, Budget: 32 },
    { name: 'Nov', Revenue: 50, Budget: 34 },
    { name: 'Dec', Revenue: 52.63, Budget: 38 }
  ], []);

  const donutData = useMemo(() => [
    { name: 'Enterprise', value: 47, color: '#5b2cff' },
    { name: 'SMB', value: 19, color: '#ec4899' },
    { name: 'Mid Market', value: 28, color: '#f59e0b' },
    { name: 'Other', value: 6, color: '#06b6d4' }
  ], []);

  const channelData = useMemo(() => [
    { name: 'Online', Revenue: 24, Profit: 12 },
    { name: 'Retail', Revenue: 16, Profit: 6 },
    { name: 'Partner', Revenue: 10, Profit: 4 },
    { name: 'Direct', Revenue: 8, Profit: 3 }
  ], []);

  const monthlyPerfData = useMemo(() => [
    { name: 'Jan', Revenue: 12, Profit: 4 },
    { name: 'Feb', Revenue: 14, Profit: 5 },
    { name: 'Mar', Revenue: 18, Profit: 7 },
    { name: 'Apr', Revenue: 20, Profit: 8 },
    { name: 'May', Revenue: 22, Profit: 9 },
    { name: 'Jun', Revenue: 28, Profit: 12 },
    { name: 'Jul', Revenue: 30, Profit: 13 },
    { name: 'Aug', Revenue: 32, Profit: 14 },
    { name: 'Sep', Revenue: 34, Profit: 15 },
    { name: 'Oct', Revenue: 38, Profit: 17 },
    { name: 'Nov', Revenue: 42, Profit: 19 },
    { name: 'Dec', Revenue: 48, Profit: 22 }
  ], []);

  const productsData = useMemo(() => [
    { name: 'Product A', value: 2.36, pct: 100 },
    { name: 'Product B', value: 1.98, pct: 84 },
    { name: 'Product C', value: 1.45, pct: 61 },
    { name: 'Product D', value: 1.10, pct: 47 },
    { name: 'Product E', value: 0.87, pct: 37 }
  ], []);

  // Sparkline data for floating KPI panel
  const sparklineData1 = [{ v: 4.1 }, { v: 4.3 }, { v: 4.5 }, { v: 4.4 }, { v: 4.6 }, { v: 4.82 }];
  const sparklineData2 = [{ v: 3050 }, { v: 3100 }, { v: 2950 }, { v: 3180 }, { v: 3220 }, { v: 3256 }];
  const sparklineData3 = [{ v: 11200 }, { v: 11600 }, { v: 11900 }, { v: 12200 }, { v: 12400 }, { v: 12650 }];
  const sparklineData4 = [{ v: 220 }, { v: 235 }, { v: 242 }, { v: 250 }, { v: 260 }, { v: 268 }];

  // Setup GSAP pipeline dot animation
  useEffect(() => {
    if (!dotRef.current) return;

    const xPositions = [8, 30.5, 53, 75.5, 98]; // Percent positions along the line
    const tl = gsap.timeline({ repeat: -1 });

    xPositions.forEach((pos, index) => {
      if (index === 0) {
        tl.set(dotRef.current, { left: `${xPositions[0]}%`, opacity: 1 });
      } else {
        tl.to(dotRef.current, {
          left: `${pos}%`,
          duration: 1.4,
          ease: "power2.inOut",
          onStart: () => {
            // Pulse previous element
          },
          onComplete: () => {
            // Set active pulse step in React state
            setPipelinePulse(index);

            // Animate target node pulse with GSAP
            if (stepsRefs.current[index]) {
              gsap.fromTo(stepsRefs.current[index],
                { scale: 1, boxShadow: '0 0 0px rgba(139, 92, 246, 0)' },
                { scale: 1.18, boxShadow: '0 0 15px rgba(139, 92, 246, 0.7)', duration: 0.35, yoyo: true, repeat: 1 }
              );
            }
          }
        });
      }
    });

    tl.to(dotRef.current, { opacity: 0, duration: 0.3 });
    tl.delay(0.6);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="powerbi-page-container relative min-h-screen text-slate-900 pb-16 pt-3 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f7f3ff 0%, #efe7ff 45%, #ffffff 100%)' }}>
      
      {/* Custom Styles */}
      <style>{`
        .powerbi-page-container, .powerbi-page-container * {
          font-family: "Inter", "Sora", "Plus Jakarta Sans", sans-serif !important;
        }
        .powerbi-glass-card {
          background: rgba(255, 255, 255, 0.46);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border: 1px solid rgba(255, 255, 255, 0.48);
          border-radius: 16px;
          box-shadow:
            0 24px 80px rgba(91, 44, 255, 0.11),
            inset 0 1px 0 rgba(255, 255, 255, 0.75);
        }
        .powerbi-glass-card-dark {
          background: rgba(23, 16, 77, 0.78);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 
            0 30px 90px rgba(17, 11, 63, 0.45),
            inset 0 1px 0.5px rgba(255, 255, 255, 0.15);
        }
        .glow-pulse {
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
          animation: pulseGlow 2.5s infinite alternate;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 10px rgba(139, 92, 246, 0.25); }
          100% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.55); }
        }
        .pipeline-gradient-line {
          background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%);
        }
        .text-gradient-purple-orange {
          background: linear-gradient(135deg, #7c3aed 0%, #ea580c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .neon-border-glow {
          border: 1.5px solid rgba(122, 92, 255, 0.6);
          box-shadow: 0 0 12px rgba(122, 92, 255, 0.3);
        }
      `}</style>

      {/* Futuristic Background Blur Lighting Effects */}
      <div className="absolute top-10 left-10 w-[45rem] h-[45rem] bg-purple-300/35 rounded-full filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[50rem] h-[50rem] bg-indigo-300/30 rounded-full filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[40rem] h-[40rem] bg-pink-200/25 rounded-full filter blur-[90px] pointer-events-none -z-10" />

      {/* CONTAINER CONTAINER */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* ── SECTION A: HEADER AREA ─────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col xl:flex-row items-center justify-between gap-4 border-b border-purple-100/50 pb-3"
        >
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 self-start">
            <img src="/logo.png" alt="DesireInfoWeb Logo" className="h-9 w-auto object-contain" />
            <div>
              <span className="text-xl font-black tracking-tight text-indigo-950 flex items-center leading-none">
                DesireInfoWeb
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-purple-600 block mt-0.5 leading-none">
                Your Extended Technology Partner
              </span>
            </div>
          </div>

          {/* Top-center: Horizontal stats bar */}
          <div className="flex-1 max-w-[700px] w-full powerbi-glass-card border border-white/60 px-3 py-1.5 shadow-md">
            <div className="grid grid-cols-6 gap-1 divide-x divide-purple-100 text-center">
              {[
                { label: 'Projects', value: 200, suffix: '+', icon: Briefcase },
                { label: 'Models', value: 150, suffix: '+', icon: Layers },
                { label: 'Dashboards', value: 100, suffix: '+', icon: BarChart3 },
                { label: 'Experts', value: 50, suffix: '+', icon: Users },
                { label: 'Industries', value: 10, suffix: '+', icon: Globe },
                { label: 'Accuracy', value: 99.9, suffix: '%', icon: Award, decimals: 1 }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center px-0.5">
                  <div className="flex items-center gap-0.5 text-purple-600 font-extrabold text-[11px]">
                    <stat.icon className="w-3 h-3" />
                    <CountUp end={stat.value} duration={3} delay={0.2} decimals={stat.decimals || 0} />
                    <span>{stat.suffix}</span>
                  </div>
                  <span className="text-[7px] font-semibold text-slate-500 uppercase tracking-tight block mt-0 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top-right: Microsoft Solutions Partner card */}
          <div className="w-[180px] rounded-xl bg-white/70 backdrop-blur-md border border-purple-100/80 px-3 py-1.5 flex items-center gap-2 shadow-sm hover:shadow-md transition-all self-end xl:self-auto">
            <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 shadow-inner">
              <MicrosoftIcon className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">Microsoft</div>
              <div className="text-[10px] font-black text-indigo-950 leading-tight">Solutions Partner</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[7px] font-extrabold bg-blue-50 text-blue-700 px-1 rounded border border-blue-100">Data & AI</span>
                <span className="text-[7px] font-extrabold bg-purple-50 text-purple-700 px-1 rounded border border-purple-100">Azure</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAIN HERO CONTENT & VISUAL SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
          
          {/* ── SECTION B: LEFT HERO CONTENT ───────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-2 text-left"
          >
            <div className="space-y-1">
              <h1 className="text-[17px] font-black text-indigo-950 tracking-tight leading-tight">
                Power BI & <br />
                <span className="text-gradient-purple-orange">Analytics Solutions</span>
              </h1>
              <h3 className="text-[10px] font-black bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mt-0 leading-tight">
                Transform Data Into Actionable Insights.
              </h3>
              <div className="flex items-center gap-1 mt-0">
                <div className="h-[1.5px] w-5 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-amber-400 text-[7px] font-black">✦</span>
              </div>
              <p className="text-slate-600 text-[8px] leading-relaxed max-w-lg mt-1">
                We help you connect, visualize, and analyze data with Power BI to drive intelligent decisions, improve performance, and accelerate growth.
              </p>
            </div>

            {/* Vertical glass cards stack */}
            <div className="space-y-1 pt-0.5">
              {[
                { 
                  title: 'Interactive Dashboards', 
                  desc: 'Beautiful, interactive dashboards that provide real-time insights at a glance.',
                  icon: BarChart3,
                  color: '#8b5cf6'
                },
                { 
                  title: 'Advanced Analytics', 
                  desc: 'Leverage AI, DAX, and advanced analytics to uncover trends and predict outcomes.',
                  icon: LineIcon,
                  color: '#ec4899'
                },
                { 
                  title: 'Data Integration', 
                  desc: 'Seamlessly connect to multiple data sources and build unified datasets.',
                  icon: Cable,
                  color: '#3b82f6'
                },
                { 
                  title: 'Real-Time Insights', 
                  desc: 'Monitor KPIs and metrics in real-time to make faster, data-driven decisions.',
                  icon: Zap,
                  color: '#f59e0b'
                },
                { 
                  title: 'Secure & Scalable', 
                  desc: 'Enterprise-grade security with role-based access and scalable data models.',
                  icon: Shield,
                  color: '#10b981'
                }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -1.5, scale: 1.01 }}
                  className="bg-white/45 backdrop-blur-md border border-white/50 p-2 flex gap-2.5 transition-all duration-300 rounded-xl shadow-sm hover:bg-white/60 cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm border" style={{ backgroundColor: `${card.color}15`, borderColor: `${card.color}25` }}>
                    <card.icon className="w-4 h-4" style={{ color: card.color }} />
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <h4 className="text-[9.5px] font-black text-indigo-950 leading-tight mb-0.5">{card.title}</h4>
                    <p className="text-[7.5px] font-bold text-slate-500 leading-tight">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── SECTION C: MIDDLE DATA SOURCE & PIPELINE AREA ──────────────────── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-3"
          >
            {/* Data Sources Card */}
            <div className="powerbi-glass-card border border-white/60 p-2 shadow-md">
              <h3 className="text-[10px] font-black text-indigo-950 text-center mb-2">
                Data Sources
              </h3>
              
              {/* Grid of 9 tiles */}
              <div className="grid grid-cols-3 gap-1">
                {[
                  { name: 'Excel', component: ExcelIcon },
                  { name: 'SQL Server', component: SQLServerIcon },
                  { name: 'Azure', component: AzureIcon },
                  { name: 'SharePoint', component: SharePointIcon },
                  { name: 'Dynamics 365', component: DynamicsIcon },
                  { name: 'Salesforce', component: SalesforceIcon },
                  { name: 'API', component: APIIcon },
                  { name: 'Web', component: WebIcon },
                  { name: 'Files Platform', component: FilesIcon }
                ].map((tile, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.04 }}
                    className="bg-white/80 border border-purple-100 rounded-md p-1 flex flex-col items-center justify-center shadow-sm cursor-default hover:bg-purple-50/50"
                  >
                    <tile.component />
                    <span className="text-[6.5px] font-black text-slate-700 tracking-tight block truncate w-full text-center mt-0.5">
                      {tile.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data Pipeline Card */}
            <div className="powerbi-glass-card border border-white/60 p-2 shadow-md relative overflow-hidden">
              <h3 className="text-[9px] font-black text-indigo-950 text-left mb-1 flex items-center gap-1">
                <Workflow className="w-3 h-3 text-purple-600" />
                Data Pipeline
              </h3>
              <div ref={pipelineContainerRef} className="relative w-full py-2 flex justify-between items-center z-10">
                <div className="absolute left-2 right-2 h-[1px] bg-purple-100 top-[22px] rounded-full overflow-hidden">
                  <div className="h-full pipeline-gradient-line w-full opacity-60" />
                </div>
                <div ref={dotRef} className="absolute w-1.5 h-1.5 bg-amber-500 rounded-full top-[19px] z-20 pointer-events-none" style={{ left: '8%' }} />
                {[
                  { name: 'Connect', icon: Cable },
                  { name: 'Collect', icon: Server },
                  { name: 'Transform', icon: Cpu },
                  { name: 'Model', icon: Layers },
                  { name: 'Visualize', icon: BarChart3 }
                ].map((step, idx) => (
                  <div key={idx} ref={el => stepsRefs.current[idx] = el} className="relative flex flex-col items-center z-10">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${pipelinePulse === idx ? 'bg-purple-600 text-white shadow-lg ring-1 ring-purple-200' : 'bg-white border border-purple-200 text-purple-600'}`}>
                      <step.icon className="w-2 h-2" />
                    </div>
                    <span className="text-[5.5px] font-extrabold mt-0.5 text-slate-600 text-center uppercase tracking-tighter">{step.name}</span>
                  </div>
                ))}
              </div>
            </div>


          </motion.div>

          {/* ── SECTION D: EXECUTIVE OVERVIEW DASHBOARD AREA ──────────────────── */}
          <div className="lg:col-span-8 relative">
            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: 3, rotateX: 1 }}
              animate={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 45, damping: 15, delay: 0.4 }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.002 }}
              className="w-full rounded-[16px] overflow-hidden powerbi-glass-card-dark text-white text-left select-none relative z-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-[#0f0a35]/90 border-b border-white/10 px-4 py-2 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 mr-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 block" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500 block" />
                    <span className="w-2 h-2 rounded-full bg-green-500 block" />
                  </div>
                  <span className="text-[10px] font-black tracking-wider uppercase text-purple-300">Desire BI Engine</span>
                </div>
              </div>

              <div className="flex min-h-[500px]">
                <div className="w-[60px] bg-[#0c082b]/80 border-r border-white/5 flex flex-col items-center py-2 shrink-0">
                  <div className="w-full space-y-1">
                    {[
                      { name: 'Overview', icon: BarChart3 },
                      { name: 'Finance', icon: DollarSign },
                      { name: 'Sales', icon: LineIcon },
                      { name: 'Marketing', icon: Zap },
                      { name: 'Customers', icon: Users },
                      { name: 'Products', icon: Layers }
                    ].map((item, idx) => {
                      const isActive = activeTab === item.name;
                      return (
                        <button key={idx} onClick={() => setActiveTab(item.name)} className={`w-full flex flex-col items-center py-1.5 transition-colors ${isActive ? 'text-purple-400 bg-white/5' : 'text-slate-400'}`}>
                          <item.icon className="w-3.5 h-3.5" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex-1 p-3 space-y-3 overflow-y-auto">
                  <div className="flex items-center justify-between pb-0.5">
                    <h2 className="text-sm font-black text-white">Executive Overview</h2>
                    <span className="text-[8px] text-slate-400 font-semibold bg-white/5 px-2 py-0.5 rounded-lg">Jan 01 - Dec 31, 2026</span>
                  </div>

                  <div className="grid grid-cols-5 gap-1.5">
                    {[
                      { label: 'Revenue', val: '52.63M', color: 'emerald' },
                      { label: 'Gross Profit', val: '18.75M', color: 'emerald' },
                      { label: 'Net Profit', val: '7.36M', color: 'emerald' },
                      { label: 'EBITDA', val: '10.21M', color: 'emerald' },
                      { label: 'Customers', val: '24,563', color: 'emerald' }
                    ].map((kpi, idx) => (
                      <div key={idx} className="bg-[#120a3d] border border-purple-900/40 rounded-lg p-2">
                        <span className="text-[7px] font-bold text-purple-300 uppercase">{kpi.label}</span>
                        <div className="text-[11px] font-black text-white mt-0.5">{kpi.val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-2.5">
                    <div className="flex flex-col gap-2.5">
                      <div className="bg-[#120a3d] border border-purple-900/40 rounded-xl p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-white uppercase mb-2">Revenue Trend</span>
                        <div className="w-full h-28">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={trendData} margin={{ top: 5, right: 5, left: -28, bottom: 5 }}>
                              <CartesianGrid stroke="#1e1853" strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="name" stroke="#5f569b" fontSize={7} tickLine={false} />
                              <YAxis stroke="#5f569b" fontSize={7} tickLine={false} />
                              <Tooltip contentStyle={{ backgroundColor: '#0c082b', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: 8, fontSize: 9 }} />
                              <Line type="monotone" dataKey="Revenue" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 1.5 }} />
                              <Line type="monotone" dataKey="Budget" stroke="#ea580c" strokeWidth={1} strokeDasharray="4 4" dot={false} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div className="bg-[#120a3d] border border-purple-900/40 rounded-xl p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-white uppercase mb-1">Customer Distribution</span>
                        <div className="w-full h-24 flex items-center justify-center relative">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie data={donutData} cx="50%" cy="50%" innerRadius={22} outerRadius={32} paddingAngle={3} dataKey="value">
                                {donutData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <div className="bg-[#120a3d] border border-purple-900/40 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden">
                        <span className="text-[10px] font-bold text-white uppercase mb-0.5">Sales By Region</span>
                        <div className="w-full h-28 my-0.5 relative flex items-center justify-center">
                          <svg viewBox="0 0 400 220" className="w-full h-full text-purple-700/30 opacity-70">
                            <path d="M50,40 C70,35 110,40 120,60 C125,70 100,90 90,95 C75,100 60,90 55,80 Z" fill="currentColor" />
                            <path d="M95,100 C110,110 115,130 110,160 C100,180 90,190 85,195 C80,180 75,150 80,130 Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-[#120a3d] border border-purple-900/40 rounded-xl p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-white uppercase mb-2">Channel Performance</span>
                        <div className="w-full h-24">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={channelData} margin={{ top: 5, right: 5, left: -28, bottom: 5 }}>
                              <CartesianGrid stroke="#1e1853" strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="name" stroke="#5f569b" fontSize={7} tickLine={false} />
                              <YAxis stroke="#5f569b" fontSize={7} tickLine={false} />
                              <Bar dataKey="Revenue" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <div className="bg-[#120a3d] border border-purple-900/40 rounded-xl p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-white uppercase mb-2">Top Products</span>
                        <div className="space-y-1.5">
                          {productsData.map((prod, idx) => (
                            <div key={idx} className="space-y-0.5">
                              <div className="flex justify-between text-[7.5px] font-extrabold text-slate-300">
                                <span>{prod.name}</span>
                                <span>${prod.value}M</span>
                              </div>
                              <div className="w-full h-0.5 bg-[#0f072c] rounded-full overflow-hidden">
                                <motion.div animate={{ width: `${prod.pct}%` }} className="h-full bg-purple-500 rounded-full" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-[#120a3d] border border-purple-900/40 rounded-xl p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-white uppercase mb-2">Monthly Performance</span>
                        <div className="w-full h-24">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={monthlyPerfData} margin={{ top: 5, right: 5, left: -28, bottom: 5 }}>
                              <CartesianGrid stroke="#1e1853" strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="name" stroke="#5f569b" fontSize={6} tickLine={false} />
                              <YAxis stroke="#5f569b" fontSize={6} tickLine={false} />
                              <Bar dataKey="Revenue" fill="#8b5cf6" radius={[1, 1, 0, 0]} />
                              <Bar dataKey="Profit" fill="#ec4899" radius={[1, 1, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating KPI Summary */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 35, damping: 12, delay: 0.9 }}
              className="absolute -right-6 top-24 w-[160px] powerbi-glass-card border border-white/60 p-2 shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center justify-between mb-1.5 border-b border-purple-100 pb-1">
                <span className="text-[9px] font-black text-indigo-950 uppercase tracking-wider">KPI Summary</span>
              </div>
              <div className="space-y-2 text-left">
                {[
                  { label: 'Conversion', val: '4.82%', color: '#10b981' },
                  { label: 'Deal Size', val: '$3,256', color: '#8b5cf6' },
                  { label: 'Cust. LTV', val: '$12,650', color: '#ec4899' },
                  { label: 'ROI Rate', val: '268%', color: '#f59e0b' }
                ].map((kpi, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-[7px] font-extrabold text-slate-500 uppercase">{kpi.label}</span>
                    <span className="text-[8px] font-black text-indigo-950">{kpi.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM FEATURE CARDS */}
        <div className="pt-2">
          <div className="powerbi-glass-card p-3.5 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-purple-100/60">
              {[
                { 
                  title: 'Data Modeling', 
                  desc: 'Powerful data models with relationships and DAX.', 
                  icon: Layers 
                },
                { 
                  title: 'AI Insights', 
                  desc: 'AI-powered insights and automated analytics.', 
                  icon: Cpu 
                },
                { 
                  title: 'Custom Visuals', 
                  desc: 'Rich, custom visuals for deeper storytelling.', 
                  icon: BarChart3 
                },
                { 
                  title: 'Mobile Access', 
                  desc: 'Access dashboards anytime, anywhere on any device.', 
                  icon: Monitor 
                },
                { 
                  title: 'Collaboration', 
                  desc: 'Share insights and collaborate securely across teams.', 
                  icon: Users 
                }
              ].map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4 py-2 md:py-0">
                  <div className="flex justify-center mb-2">
                    <div className="w-9 h-9 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center shadow-inner border border-purple-500/10 hover:scale-105 transition-all">
                      <feat.icon className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <h4 className="text-[9.5px] font-black text-purple-800 tracking-tight leading-none mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-[7.5px] font-bold text-slate-500 max-w-[160px] mx-auto leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div className="flex justify-center pt-3 pb-1">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white font-bold text-[10px] rounded-full shadow-lg flex items-center gap-2 hover:shadow-purple-500/25 transition-all cursor-pointer"
          >
            <span>Unlock the Power of Your Data with Power BI & Analytics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>


      </div>
    </div>
  );
};

export default PowerBIservice;
