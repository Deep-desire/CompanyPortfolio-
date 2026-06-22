import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Coins,
  Database,
  Globe,
  Handshake,
  Headphones,
  Mail,
  Phone,
  Puzzle,
  ShieldCheck,
  Sliders,
  Star,
  Target,
  Trophy,
  Users,
} from 'lucide-react';

const trustCards = [
  {
    icon: ShieldCheck,
    title: 'Microsoft-Certified Team',
    desc: 'with deep expertise across the full Microsoft stack',
    colorClass: 'em-tile-blue'
  },
  {
    icon: Headphones,
    title: 'Dedicated Point of Contact',
    desc: 'for every engagement — clear communication, no middlemen',
    colorClass: 'em-tile-purple'
  },
  {
    icon: Calendar,
    title: '10+ Years of IT Offshoring',
    desc: 'experience with a proven global delivery track record',
    colorClass: 'em-tile-pink'
  },
  {
    icon: Globe,
    title: 'Time zone-Friendly Delivery',
    desc: 'across India, Europe, USA, Canada, South Africa, and Australia',
    colorClass: 'em-tile-pinkred'
  },
  {
    icon: Coins,
    title: 'Cost-Effective Engagement',
    desc: 'significant development cost savings vs. in-house hiring',
    colorClass: 'em-tile-gold'
  },
  {
    icon: Handshake,
    title: 'Long-term Partnership Mindset',
    desc: 'we grow with your business, not just complete a task',
    colorClass: 'em-tile-orange'
  },
  {
    icon: Sliders,
    title: 'Flexible Models',
    desc: 'Fixed Cost, Dedicated, or Time & Material based on your need',
    colorClass: 'em-tile-purple'
  },
  {
    icon: Database,
    title: 'Strong Product Portfolio',
    desc: 'ready-to-deploy SharePoint solutions to accelerate delivery',
    colorClass: 'em-tile-purple2'
  },
  {
    icon: Puzzle,
    title: 'Seamless Integration',
    desc: 'our team plugs directly into your existing workflows and processes',
    colorClass: 'em-tile-pink2'
  },
  {
    icon: Target,
    title: 'Proven Success',
    desc: 'across 1200+ projects and 250+ satisfied clients in 25+ countries',
    colorClass: 'em-tile-pinkred2'
  }
];

const statCards = [
  { icon: Briefcase, value: '1200+', label: 'Projects Delivered Successfully', color: '#2563eb' },
  { icon: Users, value: '250+', label: 'Happy Clients Worldwide', color: '#db2777' },
  { icon: Globe, value: '25+', label: 'Countries Served', color: '#7c3aed' },
  { icon: Star, value: '98%', label: 'Client Satisfaction Rate', color: '#d97706' }
];

const stripItems = [
  { icon: ShieldCheck, title: 'Microsoft Solutions Partner', color: '#2563eb' },
  { icon: Trophy, title: '10+ Years of Excellence', color: '#f59e0b' },
  { icon: ShieldCheck, title: 'Secure & Compliant ISO 27001 Aligned', color: '#7c3aed' },
  { icon: Globe, title: 'Global Delivery Network', color: '#0ea5e9' },
  { icon: CheckCircle2, title: 'On-time Delivery Commitment', color: '#ec4899' },
  { icon: CheckCircle2, title: 'Quality Assured Processes', color: '#10b981' },
  { icon: Users, title: 'Skilled Experts On Demand', color: '#8b5cf6' },
  { icon: CheckCircle2, title: 'Built on Microsoft 365', color: '#0078d4' }
];

const countryTags = [
  { name: 'USA', flag: '🇺🇸', pos: 'usa' },
  { name: 'Canada', flag: '🇨🇦', pos: 'canada' },
  { name: 'Europe', flag: '🇪🇺', pos: 'europe' },
  { name: 'India', flag: '🇮🇳', pos: 'india' },
  { name: 'South Africa', flag: '🇿🇦', pos: 'safrica' },
  { name: 'Australia', flag: '🇦🇺', pos: 'australia' }
];

function GlassCard({ className = '', children, ...props }) {
  return <div className={`em-w-glass ${className}`} {...props}>{children}</div>;
}

function MicrosoftMark() {
  return <span className="em-ms-mark" aria-hidden="true"><i /><i /><i /><i /></span>;
}

function M365Mark() {
  return <span className="em-m365-mark" aria-hidden="true"><i /></span>;
}

function PartnerBadge({ type }) {
  return (
    <GlassCard className="em-w-partner">
      {type === 'microsoft' ? <MicrosoftMark /> : <M365Mark />}
      <span>{type === 'microsoft' ? 'Microsoft' : 'Built on'}<br />{type === 'microsoft' ? 'Solutions Partner' : 'Microsoft 365'}</span>
    </GlassCard>
  );
}

function LaurelSvg({ className = '', side = 'left' }) {
  const isRight = side === 'right';
  return (
    <svg className={`${className} ${isRight ? 'rotate-y-180' : ''}`} width="36" height="110" viewBox="0 0 36 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Curved golden stem */}
      <path d="M28 100C12 85 4 60 18 15" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

      {/* Branching leaf pairs pointing upwards */}
      {/* Leaf Pair 1 (Bottom) */}
      <path d="M25 90C18 89 15 82 20 78C25 74 29 81 25 90Z" fill="#F59E0B" />
      <path d="M30 83C25 78 28 71 33 73C38 75 35 83 30 83Z" fill="#F59E0B" />

      {/* Leaf Pair 2 */}
      <path d="M19 75C12 73 10 66 16 62C22 58 25 65 19 75Z" fill="#F59E0B" />
      <path d="M24 67C19 62 23 55 28 58C33 61 30 69 24 67Z" fill="#F59E0B" />

      {/* Leaf Pair 3 */}
      <path d="M15 58C9 55 8 48 14 44C20 40 22 47 15 58Z" fill="#F59E0B" />
      <path d="M21 50C16 45 20 38 25 41C30 44 27 52 21 50Z" fill="#F59E0B" />

      {/* Leaf Pair 4 */}
      <path d="M14 40C9 36 9 29 15 26C21 23 22 30 14 40Z" fill="#F59E0B" />
      <path d="M20 32C16 27 20 20 25 23C30 26 27 34 20 32Z" fill="#F59E0B" />

      {/* Tip Leaf */}
      <path d="M18 18C15 11 20 4 25 7C30 10 25 20 18 18Z" fill="#F59E0B" />
    </svg>
  );
}

function GlobalGlobe() {
  return (
    <div className="em-w-globe-container">
      {/* Decorative city skyline vector background */}
      <div className="em-w-skyline-bg" />

      {/* Visual Globe structure */}
      <div className="em-w-globe-orb">
        {/* Orbital rings */}
        <div className="em-w-orbit ring-1" />
        <div className="em-w-orbit ring-2" />

        {/* Rotating animated SVG map sphere */}
        <svg className="em-w-globe-svg" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sphereGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d946ef" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#7c3aed" stopOpacity="0.65" />
              <stop offset="85%" stopColor="#1e1b4b" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#080526" stopOpacity="1" />
            </radialGradient>
            <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#00bcf2" stopOpacity="0.45" />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Main globe sphere with radial gradient and drop-shadow */}
          <circle cx="150" cy="150" r="110" fill="url(#sphereGrad)" stroke="#ec4899" strokeWidth="2.5" strokeOpacity="0.8" filter="url(#neonGlow)" />

          {/* Latitude / longitude lines */}
          <ellipse cx="150" cy="150" rx="80" ry="110" stroke="url(#gridGrad)" strokeWidth="0.9" />
          <ellipse cx="150" cy="150" rx="45" ry="110" stroke="url(#gridGrad)" strokeWidth="0.9" />
          <line x1="150" y1="40" x2="150" y2="260" stroke="url(#gridGrad)" strokeWidth="0.9" />
          <line x1="40" y1="150" x2="260" y2="150" stroke="url(#gridGrad)" strokeWidth="0.9" />

          {/* Dotted paths & connection nodes */}
          <path d="M100 90 Q 130 120 180 100" stroke="#ec4899" strokeWidth="1.2" strokeDasharray="3 3" />
          <path d="M80 160 Q 130 150 170 200" stroke="#00bcf2" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M140 70 Q 190 140 200 170" stroke="#8b5cf6" strokeWidth="1.2" />

          {/* Shiny nodes */}
          <circle cx="100" cy="90" r="4" fill="#f59e0b" className="animate-pulse" />
          <circle cx="180" cy="100" r="3.5" fill="#ec4899" />
          <circle cx="80" cy="160" r="5" fill="#00bcf2" className="animate-pulse" />
          <circle cx="170" cy="200" r="3.5" fill="#10b981" />
          <circle cx="140" cy="70" r="3" fill="#7c3aed" />
          <circle cx="200" cy="170" r="4.5" fill="#fb923c" />
          <circle cx="220" cy="120" r="3.5" fill="#ffffff" />
        </svg>

        {/* 3D Glowing Pedestal Base */}
        <div className="em-w-pedestal">
          <div className="pedestal-bottom" />
          <div className="pedestal-middle" />
          <div className="pedestal-top" />
        </div>

        {/* Glow center security shield check badge */}
        <div className="em-w-shield-badge">
          <ShieldCheck size={28} className="shield-icon" />
        </div>
      </div>

      {/* Floating country tag pills around the globe */}
      {countryTags.map(({ name, flag, pos }) => (
        <div key={name} className={`em-w-country-pill ${pos}`}>
          <span className="flag">{flag}</span>
          <span className="name">{name}</span>
        </div>
      ))}
    </div>
  );
}

function TrophySvg() {
  return (
    <div className="em-w-trophy-wrapper">
      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="trophy-img">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E1" />
            <stop offset="25%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="75%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
          <linearGradient id="darkPedestal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>
        </defs>
        <circle cx="55" cy="55" r="45" fill="#a78bfa" fillOpacity="0.12" />
        <path d="M25 85C25 78 35 76 55 76C75 76 85 78 85 85H25Z" fill="url(#darkPedestal)" />
        <rect x="37" y="72" width="36" height="7" rx="2" fill="#1e1b4b" />
        <path d="M47 62H63V72H47V62Z" fill="url(#goldGrad)" />
        <path d="M32 30C32 56 46 62 55 62C64 62 78 56 78 30H32Z" fill="url(#goldGrad)" />
        <path d="M26 35C22 35 20 40 22 46C24 51 32 49 32 46" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M84 35C88 35 90 40 88 46C86 51 78 49 78 46" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" />
        <polygon points="55,36 58,43 66,44 60,49 62,56 55,52 48,56 50,49 44,44 52,43" fill="#FFF" opacity="0.9" />
      </svg>
      {/* Metallic pedestal base disk for 3D appearance */}
      <div className="trophy-base">
        <div className="t-base-bottom" />
        <div className="t-base-top" />
      </div>
    </div>
  );
}

function QRPlaceholder() {
  return (
    <span className="em-w-qr" aria-label="QR code placeholder">
      {Array.from({ length: 64 }).map((_, i) => <i key={i} />)}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="em-w-page" id="why-choose-us">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&display=swap');
        
        .em-w-page, .em-w-page * { box-sizing: border-box; }
        .em-w-page {
          --w-ink: #111066;
          --w-purple-bg: #efe7ff;
          --w-gradient-main: linear-gradient(135deg, #1b22c8 0%, #7c3aed 48%, #ec4899 100%);
          
          min-height: 100vh;
          overflow-x: hidden;
          overflow-y: visible;
          position: relative;
          isolation: isolate;
          padding: 24px clamp(14px, 2vw, 40px) 24px;
          color: var(--w-ink);
          font-family: "Inter", "Plus Jakarta Sans", "Manrope", system-ui, sans-serif;
          background: radial-gradient(circle at 10% 20%, rgba(124, 58, 237, 0.08), transparent 30%),
                      radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.06), transparent 30%),
                      linear-gradient(135deg, #fbfaff, #f7f2ff 50%, #fffbfd);
        }
        
        .em-w-page:before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(90deg, rgba(109, 40, 217, 0.035) 1px, transparent 1px),
                      linear-gradient(0deg, rgba(109, 40, 217, 0.03) 1px, transparent 1px);
          background-size: 78px 78px;
        }

        .em-w-shell {
          width: min(100%, 1800px);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .em-w-glass {
          background: rgba(255, 255, 255, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.72);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 22px 65px rgba(109, 40, 217, 0.1);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }

        /* Header Area & Brand Logo Alignment */
        .em-w-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          gap: 16px;
        }
        
        .em-w-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .em-w-logo img {
          width: 38px;
          height: 38px;
          object-fit: contain;
        }
        .em-w-logo-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: "Poppins", "Inter", sans-serif;
        }
        .em-w-logo-text .logo-title {
          font-size: 19px;
          font-weight: 900;
          color: #111066;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }
        .em-w-logo-text .logo-title span {
          color: #ec4899;
        }
        .em-w-logo-text .logo-subtitle {
          font-size: 8.5px;
          font-weight: 800;
          color: #7c3aed;
          letter-spacing: 0.04em;
          margin-top: 1px;
          line-height: 1.1;
        }
        .em-w-logo-text .logo-subtitle span {
          color: #ef4444;
        }

        .em-w-badges {
          display: flex;
          gap: 12px;
        }
        .em-w-partner {
          min-height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 16px;
          padding: 8px 16px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.7);
        }
        .em-w-partner:hover {
          transform: translateY(-2px);
          border-color: rgba(124, 58, 237, 0.25);
          box-shadow: 0 10px 25px rgba(109, 40, 217, 0.08);
        }
        .em-w-partner span:last-child {
          font-size: 9px;
          line-height: 1.15;
          font-weight: 900;
          color: var(--w-ink);
        }
        .em-ms-mark {
          width: 20px;
          height: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .em-ms-mark i:nth-child(1) { background: #f35325; }
        .em-ms-mark i:nth-child(2) { background: #81bc06; }
        .em-ms-mark i:nth-child(3) { background: #05a6f0; }
        .em-ms-mark i:nth-child(4) { background: #ffba08; }
        .em-m365-mark {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: conic-gradient(from 35deg, #1b22c8, #7c3aed, #38bdf8, #1b22c8);
        }
        .em-m365-mark i {
          width: 12px;
          height: 12px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.75);
          transform: rotate(45deg);
        }

        /* Title Area */
        .em-w-title-section {
          text-align: center;
          margin: 0px 0 16px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .em-w-title-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          position: relative;
        }
        .em-w-title-section h2 {
          font-size: clamp(34px, 3.8vw, 62px);
          font-weight: 900;
          line-height: 0.95;
          color: var(--w-ink);
          margin: 0;
          letter-spacing: -0.02em;
        }
        .em-w-title-section h2 span {
          background: var(--w-gradient-main);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
        }
        .em-w-subtitle {
          font-size: clamp(14px, 1.4vw, 20px);
          font-weight: 700;
          color: var(--w-ink);
          margin-top: 10px;
          opacity: 0.95;
        }

        /* Main Content split layout */
        .em-w-layout {
          display: grid;
          grid-template-columns: minmax(500px, 0.52fr) minmax(480px, 0.48fr);
          gap: 24px;
          align-items: start;
        }

        /* Left Trust cards grid */
        .em-w-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .em-w-card {
          border-radius: 20px;
          padding: 16px 14px;
          display: grid;
          grid-template-columns: 44px 1fr;
          column-gap: 12px;
          align-items: center;
          min-height: 94px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .em-w-card:hover {
          transform: translateY(-2px) scale(1.01);
          border-color: rgba(124, 58, 237, 0.35);
          box-shadow: 0 14px 35px rgba(109, 40, 217, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.55);
        }
        .em-w-tile {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: white;
          box-shadow: 0 6px 18px rgba(109, 40, 217, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.35);
          transition: all 0.3s ease;
        }
        .em-w-card:hover .em-w-tile {
          transform: scale(1.06) rotate(3deg);
          box-shadow: 0 8px 22px rgba(109, 40, 217, 0.25);
        }
        
        .em-tile-blue { background: linear-gradient(135deg, #1e40af, #3b82f6); }
        .em-tile-purple { background: linear-gradient(135deg, #4c1d95, #8b5cf6); }
        .em-tile-pink { background: linear-gradient(135deg, #be185d, #ec4899); }
        .em-tile-pinkred { background: linear-gradient(135deg, #e11d48, #f43f5e); }
        .em-tile-gold { background: linear-gradient(135deg, #d97706, #f59e0b); }
        .em-tile-orange { background: linear-gradient(135deg, #ea580c, #ff7849); }
        .em-tile-purple2 { background: linear-gradient(135deg, #6d28d9, #4f46e5); }
        .em-tile-pink2 { background: linear-gradient(135deg, #db2777, #f43f8c); }
        .em-tile-pinkred2 { background: linear-gradient(135deg, #c084fc, #ec4899); }
        
        .em-w-card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .em-w-card-content h3 {
          font-size: 11.5px;
          font-weight: 950;
          color: var(--w-ink);
          margin: 0 0 2px;
        }
        .em-w-card-content p {
          font-size: 9px;
          font-weight: 700;
          color: #5b5993;
          margin: 0;
          line-height: 1.25;
        }

        /* Right success visuals area */
        .em-w-right-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Stats Row */
        .em-w-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .em-w-stat-card {
          border-radius: 22px;
          padding: 16px 10px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 130px;
          justify-content: space-between;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.18) 100%);
          border: 1px solid rgba(255, 255, 255, 0.72);
          box-shadow: 0 10px 30px rgba(109, 40, 217, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }
        .em-w-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(109, 40, 217, 0.08);
          border-color: rgba(124, 58, 237, 0.3);
        }
        .em-w-stat-card .stat-icon {
          opacity: 0.95;
          transition: all 0.3s ease;
        }
        .em-w-stat-card:hover .stat-icon {
          transform: scale(1.15);
        }
        .em-w-stat-card strong {
          font-size: 26px;
          font-weight: 900;
          color: var(--w-ink);
          line-height: 1.1;
          display: block;
          margin: 6px 0 2px;
        }
        .em-w-stat-card small {
          font-size: 7.5px;
          font-weight: 850;
          color: #5b5993;
          line-height: 1.25;
          text-transform: uppercase;
        }

        /* Globe area style */
        .em-w-globe-container {
          height: 380px;
          position: relative;
          border-radius: 24px;
          background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.12), transparent 70%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .em-w-skyline-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.07;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 200'%3E%3Cpath d='M0 200V150H20V120H40V160H60V140H80V100H100V130H120V90H140V150H160V110H180V170H200V80H220V140H240V120H260V100H280V150H300V110H320V70H340V130H360V160H380V120H400V140H420V90H440V150H460V120H480V160H500V100H520V140H540V110H560V150H580V80H600V130H620V110H640V140H660V90H680V150H700V120H720V160H740V100H760V140H780V110H800V200H0Z' fill='%237c3aed'/%3E%3C/svg%3E") bottom center no-repeat;
          background-size: cover;
          pointer-events: none;
        }
        .em-w-globe-orb {
          position: relative;
          width: 300px;
          height: 300px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .em-w-orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(124, 58, 237, 0.25);
          pointer-events: none;
        }
        .em-w-orbit.ring-1 {
          width: 340px;
          height: 340px;
          animation: spin 32s linear infinite;
        }
        .em-w-orbit.ring-2 {
          width: 320px;
          height: 320px;
          animation: spin-reverse 24s linear infinite;
          border: 1px solid rgba(236, 72, 153, 0.15);
          stroke-dasharray: 40 80;
        }
        .em-w-globe-svg {
          width: 250px;
          height: 250px;
          animation: pulse-slow 6s ease-in-out infinite;
        }

        /* Stacked Concentric Pedestal */
        .em-w-pedestal {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          height: 40px;
          z-index: 3;
          pointer-events: none;
        }
        .pedestal-bottom {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 260px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(180deg, #1e1b4b 0%, #07051d 100%);
          border: 1px solid rgba(124, 58, 237, 0.35);
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.3);
        }
        .pedestal-middle {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 220px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(180deg, #2e1065 0%, #07051d 100%);
          border: 1.2px solid rgba(236, 72, 153, 0.6);
          box-shadow: 0 0 16px rgba(236, 72, 153, 0.45);
        }
        .pedestal-top {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 170px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(180deg, #13113c 0%, #00bcf2 100%);
          border: 1.2px solid rgba(56, 189, 248, 0.85);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.65), inset 0 0 10px rgba(56, 189, 248, 0.3);
        }

        .em-w-shield-badge {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1b22c8 0%, #7c3aed 100%);
          border: 2px solid rgba(255, 255, 255, 0.85);
          display: grid;
          place-items: center;
          color: white;
          box-shadow: 0 10px 25px rgba(27, 34, 200, 0.55), 0 0 20px rgba(124, 58, 237, 0.4);
          backdrop-filter: blur(12px);
          z-index: 5;
        }
        .shield-icon {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }

        /* Floating tag positions */
        .em-w-country-pill {
          position: absolute;
          z-index: 3;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(14px);
          padding: 5px 12px;
          border-radius: 99px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          font-weight: 850;
          color: var(--w-ink);
          box-shadow: 0 6px 18px rgba(109, 40, 217, 0.08);
        }
        .em-w-country-pill:after {
          content: "";
          position: absolute;
          border-top: 1px dashed rgba(124, 58, 237, 0.35);
          width: 32px;
          pointer-events: none;
        }
        .em-w-country-pill.usa {
          left: clamp(10px, 4vw, 36px);
          top: 60px;
        }
        .em-w-country-pill.usa:after {
          left: 100%;
          top: 50%;
          transform: rotate(20deg);
        }
        .em-w-country-pill.canada {
          left: clamp(2px, 2vw, 14px);
          top: 160px;
        }
        .em-w-country-pill.canada:after {
          left: 100%;
          top: 50%;
          transform: rotate(5deg);
        }
        .em-w-country-pill.europe {
          left: clamp(10px, 4vw, 36px);
          top: 260px;
        }
        .em-w-country-pill.europe:after {
          left: 100%;
          top: 50%;
          transform: rotate(-15deg);
        }
        .em-w-country-pill.india {
          right: clamp(10px, 4vw, 36px);
          top: 80px;
        }
        .em-w-country-pill.india:after {
          right: 100%;
          top: 50%;
          transform: rotate(-15deg);
        }
        .em-w-country-pill.safrica {
          right: clamp(2px, 2vw, 14px);
          top: 180px;
        }
        .em-w-country-pill.safrica:after {
          right: 100%;
          top: 50%;
          transform: rotate(-5deg);
        }
        .em-w-country-pill.australia {
          right: clamp(10px, 4vw, 36px);
          top: 280px;
        }
        .em-w-country-pill.australia:after {
          right: 100%;
          top: 50%;
          transform: rotate(18deg);
        }

        /* Trophy & Quote Pedestal integration */
        .em-w-trophy-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }
        .trophy-img {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 6px 12px rgba(245, 158, 11, 0.2));
        }
        .trophy-base {
          position: absolute;
          bottom: 12px;
          width: 90px;
          height: 25px;
          z-index: 1;
          pointer-events: none;
        }
        .t-base-bottom {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(180deg, #312e81 0%, #0f172a 100%);
          border: 1px solid rgba(99, 102, 241, 0.4);
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.25);
        }
        .t-base-top {
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(180deg, #d97706 0%, #0f172a 100%);
          border: 1px solid rgba(251, 191, 36, 0.85);
          box-shadow: 0 0 12px rgba(251, 191, 36, 0.45);
        }

        /* Bottom trust strip */
        .em-w-strip-container {
          width: 100%;
          border-radius: 20px;
          padding: 12px 14px;
        }
        .em-w-strip-scroll {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          align-items: center;
          gap: 8px;
          width: 100%;
        }
        .em-w-strip-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          padding: 0 4px;
          border-left: 1.5px solid rgba(109, 40, 217, 0.12);
        }
        .em-w-strip-item:first-child {
          border-left: 0;
        }
        .strip-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin-bottom: 2px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
          transition: all 0.3s ease;
        }
        .em-w-strip-item:hover .strip-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 6px 14px rgba(0,0,0,0.06);
        }
        .em-w-strip-item span {
          font-size: 7.5px;
          font-weight: 850;
          color: var(--w-ink);
          line-height: 1.2;
        }

        /* Quote & Trophy visual row */
        .em-w-quote-row {
          display: grid;
          grid-template-columns: 1fr 140px;
          gap: 20px;
          align-items: center;
        }
        .em-w-quote-card {
          border-radius: 24px;
          padding: 22px 28px 18px;
          background: linear-gradient(135deg, #6d28d9, #ec4899 90%, #f43f8c);
          color: white;
          position: relative;
          box-shadow: 0 20px 48px rgba(236, 72, 153, 0.25);
          overflow: hidden;
        }
        .em-w-quote-card:before {
          content: "“";
          position: absolute;
          left: 10px;
          top: -24px;
          font-size: 110px;
          color: rgba(255, 255, 255, 0.12);
          font-family: serif;
          pointer-events: none;
        }
        .em-w-quote-card p {
          font-size: 15px;
          font-weight: 750;
          line-height: 1.45;
          margin: 0 0 12px;
          position: relative;
          z-index: 2;
        }
        .em-w-stars {
          display: flex;
          gap: 4px;
          color: #fbbf24;
        }
        
        .em-w-trophy-holder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Bottom Purple CTA / Contact Bar */
        .em-w-cta-bar {
          border-radius: 20px;
          padding: 14px 24px;
          background: linear-gradient(135deg, #111066, #27109a 60%, #7c3aed);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 16px;
          box-shadow: 0 16px 40px rgba(39, 16, 154, 0.22);
        }
        .em-w-cta-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 850;
        }
        .em-w-cta-contacts {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .em-w-cta-contacts span {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 800;
          color: #e0d5ff;
          border-left: 1.5px solid rgba(255, 255, 255, 0.15);
          padding-left: 16px;
        }
        .em-w-cta-contacts span:first-child {
          border-left: 0;
          padding-left: 0;
        }
        .em-w-cta-contacts svg {
          color: #a78bfa;
        }
        .em-w-qr {
          width: 54px;
          height: 54px;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 1.5px;
          padding: 4px;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 6px;
          background: white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .em-w-qr:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 14px rgba(0,0,0,0.12);
        }
        .em-w-qr i { background: #111066; }
        .em-w-qr i:nth-child(2n), .em-w-qr i:nth-child(5n), .em-w-qr i:nth-child(11n) { background: transparent; }

        /* Animation frames */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Responsiveness Media Queries */
        @media(max-width: 1500px) {
          .em-w-layout {
            grid-template-columns: 0.54fr 0.46fr;
            gap: 20px;
          }
          .em-w-cards-grid {
            gap: 10px;
          }
          .em-w-card {
            padding: 12px 10px;
            min-height: 86px;
          }
          .em-w-card-content h3 { font-size: 10.5px; }
          .em-w-card-content p { font-size: 8.5px; }
          .em-w-stats-row { gap: 8px; }
          .em-w-stat-card { min-height: 110px; padding: 10px 8px; }
          .em-w-stat-card strong { font-size: 22px; }
          .em-w-stat-card small { font-size: 6.8px; }
          .em-w-globe-container { height: 340px; }
          .em-w-globe-orb { width: 260px; height: 260px; }
          .em-w-globe-svg { width: 210px; height: 210px; }
          .em-w-strip-item span { font-size: 6.8px; }
          .em-w-pedestal { width: 240px; }
          .pedestal-bottom { width: 220px; }
          .pedestal-middle { width: 180px; }
          .pedestal-top { width: 140px; }
        }

        @media(max-width: 1200px) {
          .em-w-header { flex-direction: column; text-align: center; }
          .em-w-badges { width: 100%; justify-content: center; }
          .em-w-layout { grid-template-columns: 1fr; }
          .em-w-cards-grid { grid-template-columns: repeat(2, 1fr); }
          .em-w-globe-container { max-width: 600px; margin: 0 auto; width: 100%; }
          .em-w-strip-scroll { grid-template-columns: repeat(4, 1fr); gap: 12px; }
          .em-w-strip-item { border-left: 0; }
          .em-w-quote-row { max-width: 600px; margin: 0 auto; width: 100%; }
        }

        @media(max-width: 760px) {
          .em-w-page { padding: 16px 12px; }
          .em-w-cards-grid { grid-template-columns: 1fr; }
          .em-w-stats-row { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .em-w-globe-container { height: 300px; }
          .em-w-globe-orb { width: 220px; height: 220px; }
          .em-w-globe-svg { width: 180px; height: 180px; }
          .em-w-country-pill { font-size: 8px; padding: 4px 8px; }
          .em-w-country-pill:after { display: none; }
          .em-w-strip-scroll { grid-template-columns: repeat(2, 1fr); }
          .em-w-quote-row { grid-template-columns: 1fr; text-align: center; }
          .em-w-stars { justify-content: center; }
          .em-w-cta-bar { flex-direction: column; text-align: center; }
          .em-w-cta-contacts { flex-direction: column; gap: 8px; width: 100%; }
          .em-w-cta-contacts span { border-left: 0; padding-left: 0; }
        }
      `}</style>
      <div className="em-w-shell">

        {/* Top Header */}
        <header className="em-w-header">
          <div className="em-w-logo">
            <img src="/logo.png" alt="DesireInfoWeb Logo" />
            <div className="em-w-logo-text">
              <div className="logo-title">Desire<span>InfoWeb</span></div>
              <div className="logo-subtitle">Your Extended <span>Technology Partner</span></div>
            </div>
          </div>
          <div className="em-w-badges">
            <PartnerBadge type="microsoft" />
            <PartnerBadge type="m365" />
          </div>
        </header>

        {/* Title Area */}
        <div className="em-w-title-section">
          <div className="em-w-title-container">
            <LaurelSvg side="left" />
            <h2>Why Choose<br /><span>Desire InfoWeb?</span></h2>
            <LaurelSvg side="right" />
          </div>
          <p className="em-w-subtitle">Trusted Expertise. Proven Results. Lasting Partnerships.</p>
        </div>

        {/* Mid layout */}
        <div className="em-w-layout">

          {/* Left: 10 Grid cards */}
          <div className="em-w-cards-grid">
            {trustCards.map(({ icon: Icon, title, desc, colorClass }) => (
              <GlassCard className="em-w-card" key={title}>
                <div className={`em-w-tile ${colorClass}`}>
                  <Icon size={22} />
                </div>
                <div className="em-w-card-content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Right: Stats, Globe, Testimonial & Trophy */}
          <div className="em-w-right-side">

            {/* Top row of stats */}
            <div className="em-w-stats-row">
              {statCards.map(({ icon: Icon, value, label, color }) => (
                <GlassCard className="em-w-stat-card" key={value}>
                  <Icon size={20} className="stat-icon" style={{ color }} />
                  <strong>{value}</strong>
                  <small>{label}</small>
                </GlassCard>
              ))}
            </div>

            {/* Glowing 3D globe animation */}
            <GlobalGlobe />

            {/* Testimonial Quote & Trophy */}
            <div className="em-w-quote-row">
              <div className="em-w-quote-card">
                <p>“We don’t just deliver solutions, we deliver value, trust, and long-term success.”</p>
                <div className="em-w-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="#fbbf24" stroke="none" />
                  ))}
                </div>
              </div>
              <div className="em-w-trophy-holder">
                <TrophySvg />
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Trust strip */}
        <GlassCard className="em-w-strip-container">
          <div className="em-w-strip-scroll">
            {stripItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="em-w-strip-item" key={idx}>
                  <div className="strip-icon-wrapper" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <Icon size={14} style={{ color: item.color }} />
                  </div>
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </GlassCard>

        {/* Bottom purple CTA and Contact bar */}
        <footer className="em-w-cta-bar">
          <div className="em-w-cta-left">
            🚀 <span>Let’s Build Something Great Together</span>
          </div>
          <div className="em-w-cta-contacts">
            <span><Globe size={13} /> www.desireinfoweb.com</span>
            <span><Mail size={13} /> vijay@desireinfoweb.com</span>
            <span><Phone size={13} /> +91-8780468807</span>
          </div>
          <QRPlaceholder />
        </footer>

      </div>
    </section>
  );
}
