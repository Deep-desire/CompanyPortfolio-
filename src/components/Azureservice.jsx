import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
    Cloud, Shield, Zap, Globe, Server, Database,
    BarChart3, Network, Cpu, RefreshCw, CheckCircle,
    ArrowRight, ChevronRight, Layers, Activity,
    GitBranch, TrendingUp, DollarSign, Building2,
    Workflow, Phone, Mail, Award, Clock, Users, Lock
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


// ─── Constants ────────────────────────────────────────────────────────────────
const POPPINS = '"Poppins", "Inter", sans-serif';

const azureBlue = '#0078d4';
const azureViolet = '#7c3aed';
const azurePurple = '#5b21b6';
const azureCyan = '#00bcf2';
const azurePink = '#d946ef';

// ─── Azure Logo SVG ───────────────────────────────────────────────────────────
function AzureLogoSVG({ className = '', size = 32 }) {
    // return (
    // <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    //         <defs>
    //             <linearGradient id="az-g1" x1="0" y1="0" x2="1" y2="1">
    //                 <stop offset="0%" stopColor="#114a8b" />
    //                 <stop offset="100%" stopColor="#0669bc" />
    //             </linearGradient>
    //             <linearGradient id="az-g2" x1="0" y1="0" x2="1" y2="0">
    //                 <stop offset="0%" stopColor="#000" stopOpacity="0.3" />
    //                 <stop offset="100%" stopColor="#000" stopOpacity="0" />
    //             </linearGradient>
    //             <linearGradient id="az-g3" x1="0" y1="0" x2="1" y2="1">
    //                 <stop offset="0%" stopColor="#3ccbf4" />
    //                 <stop offset="100%" stopColor="#2892df" />
    //             </linearGradient>
    //         </defs>
    //         <path d="M33.338 6.544h26.038L33.976 89.456a4.29 4.29 0 01-4.062 2.944H8.23a4.29 4.29 0 01-4.056-5.706L27.28 9.49a4.29 4.29 0 014.058-2.946z" fill="url(#az-g1)" />
    //         <path d="M71.024 60.992H29.44a1.976 1.976 0 00-1.348 3.428l26.68 24.92a4.308 4.308 0 002.938 1.116h23.498l-10.184-29.464z" fill="url(#az-g2)" />
    //         <path d="M33.338 6.544a4.255 4.255 0 00-4.07 2.978L4.2 86.7a4.287 4.287 0 004.038 5.7h21.896a4.6 4.6 0 003.53-2.985l5.282-15.578 18.898 17.64a4.384 4.384 0 002.782.924H82.6l-10.252-29.408-29.916-.007 18.356-56.44H33.338z" fill="url(#az-g3)" />
    //         <path d="M68.72 9.49a4.29 4.29 0 00-4.056-2.946H33.568a4.29 4.29 0 014.056 2.946l23.106 77.204a4.29 4.29 0 01-4.056 5.706h31.096a4.29 4.29 0 004.056-5.706L68.72 9.49z" fill="url(#az-g1)" />
    //     </svg>
    // );
}

// ─── Stat Counter Hook ───────────────────────────────────────────────────────
function useCountUp(target, duration = 1400, active = true) {
    const [val, setVal] = useState(0);
    const str = String(target);
    const numMatch = str.match(/[\d.]+/);
    const parsed = numMatch ? parseFloat(numMatch[0]) : 0;
    const suffix = str.replace(/[\d.]+/, '');
    const hasDecimal = numMatch?.[0]?.includes('.');

    useEffect(() => {
        if (!active) return;
        const t0 = performance.now();
        const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - (1 - p) ** 3;
            setVal(parsed * eased);
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [target, duration, parsed, active]);

    return `${hasDecimal ? val.toFixed(1) : Math.round(val).toLocaleString()}${suffix}`;
}

// ─── Isometric Laptop Mockup ──────────────────────────────────────────────────
function IsometricLaptop() {
    return (
        <div className="relative" style={{ width: '85px', height: '65px' }}>
            <svg width="85" height="65" viewBox="0 0 85 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Screen bezel */}
                <path d="M15 17 L52 7 L67 27 L30 37 Z" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                {/* Screen content */}
                <path d="M18 18 L50 9 L64 26 L32 35 Z" fill="#0f172a" />
                {/* Glowing graph inside screen */}
                <path d="M22 30 L30 25 L38 28 L48 18 L58 22" stroke="#00bcf2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="48" cy="18" r="1.5" fill="#22c55e" />
                {/* Base */}
                <path d="M30 37 L67 27 L77 37 L40 47 Z" fill="#334155" stroke="#475569" strokeWidth="1" />
                {/* Trackpad */}
                <path d="M50 41 L60 38 L62 40 L52 43 Z" fill="#1e293b" />
            </svg>
        </div>
    );
}

// ─── Azure Cloud 3D Isometric Center Animation ───────────────────────────────
function AzureCloudScene() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const trigger = ScrollTrigger.create({
            trigger: video,
            start: 'top bottom', // when top of video enters bottom of viewport
            end: 'bottom top',   // when bottom of video leaves top of viewport
            onEnter: () => video.play().catch(() => {}),
            onLeave: () => video.pause(),
            onEnterBack: () => video.play().catch(() => {}),
            onLeaveBack: () => video.pause()
        });

        return () => {
            if (trigger) trigger.kill();
        };
    }, []);

    return (
        <div className="relative w-full h-full min-h-[420px] flex items-center justify-center overflow-hidden select-none">
            <style>{`
                @keyframes az-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes az-pulse {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.02); }
                }
                .az-cloud-main { animation: az-float 4.5s ease-in-out infinite; }
                .az-video-bg { animation: az-pulse 6s ease-in-out infinite; }
            `}</style>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,212,0.08)_0%,rgba(0,188,242,0.03)_40%,transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <video
                    ref={videoRef}
                    className="az-video-bg absolute w-[min(92vw,900px)] h-[min(92vw,900px)] object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_50px_rgba(0,120,212,0.18)]"
                    style={{
                        clipPath: 'inset(8px 0px)',
                        maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)',
                        WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)',
                        filter: 'contrast(1.2) brightness(0.95)'
                    }}
                    src="/Azure_animation.mp4"
                    loop
                    muted
                    playsInline
                    preload="auto"
                />
            </div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/20" />
        </div>
    );
}

// ─── Glassmorphism card styles ────────────────────────────────────────────────
const glass = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: '0 8px 32px rgba(124, 58, 237, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
};

const rightGlass = {
    background: 'linear-gradient(135deg, rgba(238, 244, 255, 0.45) 0%, rgba(255, 255, 255, 0.25) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.7)',
    boxShadow: '0 8px 32px rgba(37, 99, 235, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
};

const glassHover = "hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-400/50 hover:scale-[1.02] transition-all duration-300";

// ─── Stat Card Component (Header KPI) ──────────────────────────────────────────
function HeaderStatCard({ stat, index, inView }) {
    const count = useCountUp(stat.value, 1400, inView);
    return (
        <div className="flex items-center gap-2 px-1">
            <stat.icon className="w-4 h-4" style={{ color: stat.color || '#0078d4' }} strokeWidth={1.8} />
            <div className="flex flex-col">
                <span className="font-extrabold text-[12px] text-[#0f172a] leading-none">{count}</span>
                <span className="text-[8px] text-[#64748b] font-medium mt-0.5 leading-none">{stat.label}</span>
            </div>
        </div>
    );
}

// ─── Mini Server Rack SVG (Cloud Architecture Card) ───────────────────────────
function MiniServerRackSVG() {
    return (
        <div className="relative overflow-hidden w-full h-[65px] flex justify-center items-center rounded-xl mt-3" style={{ background: 'linear-gradient(135deg, rgba(30,27,75,0.12), rgba(91,33,182,0.12))', border: '1px solid rgba(124,58,237,0.18)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)' }}>
            <svg width="130" height="52" viewBox="0 0 130 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="rack-body-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1e1b4b" />
                        <stop offset="100%" stopColor="#090514" />
                    </linearGradient>
                </defs>
                {/* Platform Base Disc */}
                <ellipse cx="65" cy="45" rx="55" ry="6" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.3)" strokeWidth="0.8" />
                {/* Server Columns */}
                {[0, 1, 2].map((col) => (
                    <g key={col} transform={`translate(${col * 32 + 20}, 4)`}>
                        {/* Rack casing */}
                        <rect width="24" height="38" rx="2" fill="url(#rack-body-grad)" stroke="#7c3aed" strokeWidth="1" />
                        {/* Server slots */}
                        <line x1="2" y1="8" x2="22" y2="8" stroke="#1e293b" strokeWidth="1.5" />
                        <line x1="2" y1="16" x2="22" y2="16" stroke="#1e293b" strokeWidth="1.5" />
                        <line x1="2" y1="24" x2="22" y2="24" stroke="#1e293b" strokeWidth="1.5" />
                        <line x1="2" y1="32" x2="22" y2="32" stroke="#1e293b" strokeWidth="1.5" />
                        {/* LED lights */}
                        <circle cx="5" cy="8" r="0.8" fill="#00bcf2" className="animate-pulse" />
                        <circle cx="5" cy="16" r="0.8" fill="#22c55e" />
                        <circle cx="5" cy="24" r="0.8" fill="#d946ef" className="animate-pulse" />
                        <circle cx="5" cy="32" r="0.8" fill="#f59e0b" />
                        {/* Slots indicator bars */}
                        <rect x="10" y="7.2" width="9" height="1.5" rx="0.5" fill="#334155" />
                        <rect x="10" y="15.2" width="9" height="1.5" rx="0.5" fill="#334155" />
                        <rect x="10" y="23.2" width="9" height="1.5" rx="0.5" fill="#334155" />
                        <rect x="10" y="31.2" width="9" height="1.5" rx="0.5" fill="#334155" />
                    </g>
                ))}
            </svg>
            {/* Shield Overlay */}
            <div className="absolute right-2 bottom-1.5 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/35 shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                <Shield className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2.2} />
            </div>
        </div>
    );
}

// ─── Custom Illustrations for Bottom Cards ────────────────────────────────────
function FunctionsIllustration() {
    return (
        <div className="relative w-12 h-14 shrink-0 flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md" />
            <svg width="45" height="52" viewBox="0 0 45 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_4px_12px_rgba(0,188,242,0.3)]">
                {/* Phone container */}
                <rect x="8" y="2" width="29" height="48" rx="4" fill="#0b0f19" stroke="#00bcf2" strokeWidth="1.5" />
                {/* Screen area */}
                <rect x="11" y="6" width="23" height="40" rx="2" fill="#0f172a" />
                {/* Code lines */}
                <path d="M15 12 h15 M15 16 h8 M15 20 h12 M15 24 h6" stroke="#0078d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                {/* Code cursor symbol */}
                <path d="M15 30 L18 33 L15 36" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="21" y1="36" x2="28" y2="36" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                {/* Home indicator */}
                <line x1="20" y1="48" x2="25" y2="48" stroke="#334155" strokeWidth="1" strokeLinecap="round" />
            </svg>
        </div>
    );
}

function SecurityIllustration() {
    return (
        <div className="relative w-12 h-14 shrink-0 flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-violet-500/10 rounded-full blur-md" />
            <svg width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_4px_12px_rgba(124,58,237,0.3)]">
                {/* Glowing shield */}
                <path d="M22.5 4 L36 8.5 V22.5 C36 31.5 22.5 38 22.5 38 C22.5 38 9 31.5 9 22.5 V8.5 L22.5 4 Z" fill="rgba(124, 58, 237, 0.12)" stroke="#7c3aed" strokeWidth="1.8" />
                {/* Padlock */}
                <rect x="17.5" y="21.5" width="10" height="8" rx="1.5" fill="#7c3aed" />
                <path d="M19.5 21.5 V17.5 C19.5 15.8 20.8 14.5 22.5 14.5 C24.2 14.5 25.5 15.8 25.5 17.5 V21.5" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
                {/* Keyhole */}
                <circle cx="22.5" cy="24.5" r="1" fill="#ffffff" />
                <line x1="22.5" y1="25.5" x2="22.5" y2="28" stroke="#ffffff" strokeWidth="1" />
            </svg>
        </div>
    );
}

function NetworkingIllustration() {
    return (
        <div className="relative w-12 h-14 shrink-0 flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md" />
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_4px_12px_rgba(0,120,212,0.3)]">
                {/* Network sphere outer lines */}
                <circle cx="22.5" cy="22.5" r="16" stroke="#0078d4" strokeWidth="1" opacity="0.25" />
                <circle cx="22.5" cy="22.5" r="12" stroke="#0078d4" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="22.5" cy="22.5" r="7" fill="rgba(0, 120, 212, 0.15)" stroke="#0078d4" strokeWidth="1.5" />
                {/* Connector lines */}
                <path d="M22.5 2 L22.5 43" stroke="#00bcf2" strokeWidth="0.8" opacity="0.4" />
                <path d="M2 22.5 H43" stroke="#00bcf2" strokeWidth="0.8" opacity="0.4" />
                {/* Nodes */}
                <circle cx="22.5" cy="6.5" r="2.5" fill="#22c55e" />
                <circle cx="22.5" cy="38.5" r="2.5" fill="#d946ef" />
                <circle cx="6.5" cy="22.5" r="2.5" fill="#0078d4" />
                <circle cx="38.5" cy="22.5" r="2.5" fill="#0078d4" />
                {/* Inner signal dot */}
                <circle cx="22.5" cy="22.5" r="2" fill="#ffffff" />
            </svg>
        </div>
    );
}

function MonitoringIllustration() {
    return (
        <div className="relative w-12 h-14 shrink-0 flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md" />
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_4px_12px_rgba(34,197,94,0.3)]">
                {/* Bars */}
                <rect x="8" y="27" width="5" height="9" rx="1" fill="#00bcf2" opacity="0.7" />
                <rect x="16" y="18" width="5" height="18" rx="1" fill="#7c3aed" opacity="0.7" />
                <rect x="24" y="11" width="5" height="25" rx="1" fill="#d946ef" opacity="0.7" />
                <rect x="32" y="21" width="5" height="15" rx="1" fill="#0078d4" opacity="0.7" />
                {/* Ground line */}
                <path d="M5 39 H40" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5" />
                {/* Trend line */}
                <path d="M10 24 L18.5 14 L26.5 8 L34.5 17" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                {/* Line points */}
                <circle cx="10" cy="24" r="1.8" fill="#ffffff" stroke="#22c55e" strokeWidth="1" />
                <circle cx="18.5" cy="14" r="1.8" fill="#ffffff" stroke="#22c55e" strokeWidth="1" />
                <circle cx="26.5" cy="8" r="1.8" fill="#ffffff" stroke="#22c55e" strokeWidth="1" />
            </svg>
        </div>
    );
}

function DataIllustration() {
    return (
        <div className="relative w-12 h-14 shrink-0 flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-md" />
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_4px_12px_rgba(217,70,239,0.3)]">
                {/* Database cylinders */}
                {/* Cylinder 1 */}
                <ellipse cx="14" cy="16" rx="6" ry="2.2" fill="#0078d4" opacity="0.9" />
                <path d="M8 16 V24 C8 25.2 10.7 26.2 14 26.2 C17.3 26.2 20 25.2 20 24 V16" fill="#0078d4" opacity="0.8" stroke="#00bcf2" strokeWidth="0.8" />
                <ellipse cx="14" cy="24" rx="6" ry="2.2" fill="#0078d4" opacity="0.9" />
                {/* Cylinder 2 */}
                <ellipse cx="28" cy="22" rx="6" ry="2.2" fill="#7c3aed" opacity="0.9" />
                <path d="M22 22 V30 C22 31.2 24.7 32.2 28 32.2 C31.3 32.2 34 31.2 34 30 V22" fill="#7c3aed" opacity="0.8" stroke="#d946ef" strokeWidth="0.8" />
                <ellipse cx="28" cy="30" rx="6" ry="2.2" fill="#7c3aed" opacity="0.9" />
                {/* Grid chart line in background */}
                <path d="M4 36 H40" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5" />
            </svg>
        </div>
    );
}

function MockQRCodeSVG() {
    return (
        <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            {/* Corners */}
            <rect x="4" y="4" width="12" height="12" stroke="#1e293b" strokeWidth="2" fill="none" />
            <rect x="6" y="6" width="8" height="8" fill="#1e293b" />
            <rect x="32" y="4" width="12" height="12" stroke="#1e293b" strokeWidth="2" fill="none" />
            <rect x="34" y="6" width="8" height="8" fill="#1e293b" />
            <rect x="4" y="32" width="12" height="12" stroke="#1e293b" strokeWidth="2" fill="none" />
            <rect x="6" y="34" width="8" height="8" fill="#1e293b" />
            {/* Random pixels */}
            <rect x="20" y="4" width="4" height="4" fill="#1e293b" />
            <rect x="20" y="12" width="4" height="4" fill="#1e293b" />
            <rect x="28" y="8" width="4" height="4" fill="#1e293b" />
            <rect x="24" y="16" width="4" height="4" fill="#1e293b" />
            <rect x="12" y="20" width="4" height="4" fill="#1e293b" />
            <rect x="4" y="24" width="4" height="4" fill="#1e293b" />
            <rect x="16" y="24" width="4" height="4" fill="#1e293b" />
            <rect x="20" y="28" width="4" height="4" fill="#1e293b" />
            <rect x="28" y="24" width="4" height="4" fill="#1e293b" />
            <rect x="32" y="20" width="4" height="4" fill="#1e293b" />
            <rect x="36" y="28" width="4" height="4" fill="#1e293b" />
            <rect x="40" y="24" width="4" height="4" fill="#1e293b" />
            <rect x="24" y="36" width="4" height="4" fill="#1e293b" />
            <rect x="36" y="36" width="4" height="4" fill="#1e293b" />
            <rect x="32" y="40" width="4" height="4" fill="#1e293b" />
            <rect x="40" y="40" width="4" height="4" fill="#1e293b" />
            <rect x="20" y="40" width="4" height="4" fill="#1e293b" />
        </svg>
    );
}

// ─── Main Exported Page Component ─────────────────────────────────────────────
export default function Azureservice() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: '-60px' });

    // Benefits data
    const benefits = [
        {
            title: "Scalable Infrastructure",
            desc: "Build and scale your infrastructure seamlessly with global Azure datacenters.",
            icon: Cloud,
            color: '#0078d4',
            bgColor: 'rgba(0, 120, 212, 0.12)',
            borderColor: 'rgba(0, 120, 212, 0.22)'
        },
        {
            title: "High Availability",
            desc: "Ensure business continuity with 99.99% uptime and built-in redundancy.",
            icon: Zap,
            color: '#7c3aed',
            bgColor: 'rgba(124, 58, 237, 0.12)',
            borderColor: 'rgba(124, 58, 237, 0.22)'
        },
        {
            title: "Secure by Design",
            desc: "Advanced security, identity protection, and threat intelligence across your cloud.",
            icon: Shield,
            color: '#5b21b6',
            bgColor: 'rgba(91, 33, 182, 0.12)',
            borderColor: 'rgba(91, 33, 182, 0.22)'
        },
        {
            title: "Cost Optimization",
            desc: "Optimize costs with smart recommendations and flexible pricing models.",
            icon: DollarSign,
            color: '#d946ef',
            bgColor: 'rgba(217, 70, 239, 0.12)',
            borderColor: 'rgba(217, 70, 239, 0.22)'
        },
        {
            title: "Hybrid & Multi-Cloud",
            desc: "Seamlessly integrate on-premises, Azure, and multi-cloud environments.",
            icon: Network,
            color: '#00bcf2',
            bgColor: 'rgba(0, 188, 242, 0.12)',
            borderColor: 'rgba(0, 188, 242, 0.22)'
        },
    ];

    // Core Services data
    const coreServices = [
        {
            title: "Virtual Machines",
            desc: "High performance, scalable compute.",
            IconComponent: VMColorIcon,
        },
        {
            title: "Azure Kubernetes Service",
            desc: "Deploy and manage containerized apps.",
            IconComponent: AKSColorIcon,
        },
        {
            title: "Azure SQL Database",
            desc: "Fully managed intelligent database.",
            IconComponent: SQLColorIcon,
        },
        {
            title: "Azure Storage",
            desc: "Durable, secure, massively scalable.",
            IconComponent: StorageColorIcon,
        },
        {
            title: "Azure App Service",
            desc: "Build and host web & mobile apps.",
            IconComponent: AppServiceColorIcon,
        },
        {
            title: "Azure Functions",
            desc: "Event-driven serverless compute.",
            IconComponent: FunctionsColorIcon,
        },
    ];

    // Horizontal stat array
    const statsData = [
        { value: '60+', label: 'Azure Experts', icon: Users, color: '#7c3aed' },
        { value: '250+', label: 'Cloud Projects', icon: BriefcaseIcon, color: '#2563eb' },
        { value: '100+', label: 'Enterprise Clients', icon: Building2, color: '#0ea5e9' },
        { value: '99.99%', label: 'Uptime SLA', icon: Activity, color: '#22c55e' },
        { value: '45+', label: 'Azure Certifications', icon: Award, color: '#d946ef' },
        { value: '24/7', label: 'Cloud Support', icon: Clock, color: '#0078d4' },
    ];

    return (
        <section
            ref={sectionRef}
            id="azure-service"
            className="relative overflow-hidden w-full"
            style={{
                background: 'linear-gradient(160deg, #fbfaff 0%, #f6f8ff 35%, #ffffff 70%, #faf8ff 100%)',
                padding: '20px 0 30px',
                fontFamily: POPPINS,
            }}
        >
            {/* ── Background decoration radial glow blobs ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full opacity-30"
                    style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full opacity-25"
                    style={{ background: 'radial-gradient(circle, rgba(0,120,212,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />
                <div className="absolute bottom-[10%] left-[35%] w-[450px] h-[450px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.08) 0%, transparent 65%)', filter: 'blur(45px)' }} />

                {/* Subtle grid mesh */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="az-layout-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7c3aed" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#az-layout-grid)" />
                </svg>
            </div>

            <div className="relative z-10 px-4 lg:px-6 xl:px-8 max-w-[1600px] mx-auto">

                {/* ─── 1. TOP HEADER (Brand Logo, KPI strip, Partner Badge) ─── */}
                <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                    {/* DesireInfoWeb Brand Logo Area */}
                    <div className="flex items-center gap-3 self-start md:self-center">
                        <img src="/logo.png" alt="DesireInfoWeb Logo" className="w-9 h-9 object-contain" />
                        <div>
                            <div style={{ fontFamily: POPPINS, fontWeight: 800, fontSize: '17px', color: '#1e3a8a', lineHeight: 1.1 }}>
                                Desire<span style={{ color: '#4c1d95' }}>InfoWeb</span>
                            </div>
                            <div style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: '8px', color: '#d946ef', letterSpacing: '0.04em' }}>
                                Your Extended <span style={{ color: '#ef4444' }}>Technology Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* KPI Strip */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.45)',
                        border: '1px solid rgba(124, 58, 237, 0.12)',
                        borderRadius: '999px',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px rgba(91, 33, 182, 0.04)',
                    }} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2 px-6">
                        {statsData.map((stat, i) => (
                            <HeaderStatCard key={stat.label} stat={stat} index={i} inView={inView} />
                        ))}
                    </div>

                    {/* Microsoft Solutions Partner Badge */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.45)',
                        border: '1px solid rgba(124, 58, 237, 0.12)',
                        borderRadius: '16px',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px rgba(91, 33, 182, 0.04)',
                    }} className="flex items-center gap-2.5 py-1.5 px-3 self-end md:self-center">
                        <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
                            <div className="w-1.5 h-1.5 bg-[#f25022]" />
                            <div className="w-1.5 h-1.5 bg-[#7fba00]" />
                            <div className="w-1.5 h-1.5 bg-[#00a4ef]" />
                            <div className="w-1.5 h-1.5 bg-[#ffb900]" />
                        </div>
                        <div className="flex flex-col">
                            <span style={{ fontSize: '8.5px', fontWeight: 800, color: '#1f2937', lineHeight: 1.1 }}>Microsoft</span>
                            <span style={{ fontSize: '8px', fontWeight: 600, color: '#4b5563', lineHeight: 1.1 }}>Solutions Partner</span>
                            <span style={{ fontSize: '7.5px', fontWeight: 500, color: '#6b7280', marginTop: '1px' }}>Infrastructure Azure</span>
                        </div>
                    </div>
                </header>

                {/* ─── 2. MAIN GRID LAYOUT (3 columns) ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(220px,17.5%)_1fr_minmax(220px,17.5%)] gap-6 items-start">

                    {/* ─── LEFT COLUMN (Hero Title, Subtitle, Benefits) ─── */}
                    <div className="flex flex-col gap-5">
                        <div>
                            <div className="text-[11px] font-bold text-[#7c3aed] uppercase tracking-wider mb-1">
                                Enterprise Cloud Services
                            </div>
                            <h1 className="text-3xl font-extrabold tracking-tight" style={{ lineHeight: 1.15 }}>
                                <span style={{ background: 'linear-gradient(135deg, #1e3a8a, #4c1d95)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Microsoft Azure</span>
                                <br />
                                <span style={{ background: 'linear-gradient(135deg, #4c1d95, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Cloud Solutions</span>
                            </h1>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="font-extrabold text-[12px] text-[#4f46e5]">Build. Secure. Scale. Innovate.</span>
                                {/* Yellow Divider */}
                                <svg width="24" height="6" viewBox="0 0 24 6" fill="none" className="ml-1">
                                    <path d="M0 3H20M20 3L17 1M20 3L17 5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className="text-[10px] text-[#475569] leading-relaxed mt-2">
                                Leverage the power of Microsoft Azure to build future-ready cloud solutions that drive agility, reliability, and growth.
                            </p>
                        </div>

                        {/* Benefit Cards */}
                        <div className="flex flex-col gap-2.5">
                            {benefits.map((b, idx) => (
                                <motion.div
                                    key={b.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={`flex items-start gap-3 p-3 rounded-2xl cursor-pointer ${glassHover}`}
                                    style={glass}
                                >
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110"
                                        style={{ background: b.bgColor, border: `1px solid ${b.borderColor}` }}>
                                        <b.icon className="w-4 h-4" style={{ color: b.color }} strokeWidth={2.2} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontFamily: POPPINS, fontWeight: 700, fontSize: '11px', color: '#1e1b4b' }}>{b.title}</h4>
                                        <p style={{ fontFamily: POPPINS, fontSize: '8.5px', color: '#475569', lineHeight: 1.3.toString(), marginTop: '2px' }}>{b.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Secondary Microsoft solutions partner branding */}
                        <div style={glass} className="flex items-center gap-2 p-2.5 rounded-xl mt-1">
                            <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 shrink-0">
                                <div className="w-1.5 h-1.5 bg-[#f25022]" />
                                <div className="w-1.5 h-1.5 bg-[#7fba00]" />
                                <div className="w-1.5 h-1.5 bg-[#00a4ef]" />
                                <div className="w-1.5 h-1.5 bg-[#ffb900]" />
                            </div>
                            <span style={{ fontSize: '8px', fontWeight: 700, color: '#374151' }}>Microsoft Solutions Partner</span>
                        </div>
                    </div>

                    {/* ─── CENTER COLUMN (Floating Architecture & DevOps cards, 3D Cloud scene) ─── */}
                    <div className="flex flex-col gap-4">
                        {/* Top floating cards */}
                        <div className="flex justify-between w-full z-20 relative">
                            {/* Cloud Architecture */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`rounded-2xl p-3.5 w-[48%] ${glassHover}`}
                                style={glass}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Network className="w-4 h-4 text-[#0078d4]" strokeWidth={2} />
                                    <span className="font-bold text-[10px] text-[#0078d4] uppercase tracking-wider">Cloud Architecture</span>
                                </div>
                                <ul className="space-y-1 text-[8.5px] text-[#475569] list-none pl-0">
                                    <li className="flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#0078d4]" />
                                        Well-Architected Framework
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#0078d4]" />
                                        Scalable & Resilient Design
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#0078d4]" />
                                        Microservices Architecture
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#0078d4]" />
                                        Multi-Region Deployment
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Azure DevOps */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={`rounded-2xl p-3.5 w-[48%] ${glassHover}`}
                                style={glass}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Workflow className="w-4 h-4 text-[#7c3aed]" strokeWidth={2} />
                                    <span className="font-bold text-[10px] text-[#7c3aed] uppercase tracking-wider">Azure DevOps</span>
                                </div>
                                <ul className="space-y-1 text-[8.5px] text-[#475569] list-none pl-0">
                                    <li className="flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#7c3aed]" />
                                        CI/CD Pipelines
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#7c3aed]" />
                                        Infrastructure as Code
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#7c3aed]" />
                                        Automated Testing
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#7c3aed]" />
                                        Release Management
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Center 3D animation container */}
                        <div style={{ position: 'relative', width: '100%', minHeight: '420px' }}>
                            <AzureCloudScene />
                        </div>
                    </div>

                    {/* ─── RIGHT COLUMN (Azure Core Services, Enterprise Architecture) ─── */}
                    <div className="flex flex-col gap-3.5">

                        {/* Azure Core Services */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`rounded-2xl p-3.5 ${glassHover}`}
                            style={rightGlass}
                        >
                            <h3 className="font-bold text-[12px] text-[#2563eb] text-center mb-3">Azure Core Services</h3>
                            <div className="space-y-2.5">
                                {coreServices.map((svc) => (
                                    <div key={svc.title} className="flex items-center gap-3 py-0.5">
                                        <svc.IconComponent />
                                        <div>
                                            <h5 className="font-bold text-[9.5px] text-[#1e293b] leading-tight">{svc.title}</h5>
                                            <p className="text-[8px] text-[#64748b] leading-tight mt-0.5">{svc.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Enterprise Cloud Architecture Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className={`rounded-2xl p-3.5 ${glassHover}`}
                            style={rightGlass}
                        >
                            <h3 className="font-bold text-[12px] text-[#2563eb] text-center mb-3">Enterprise Cloud Architecture</h3>

                            {/* Vertical Flow Diagram */}
                            <div className="flex flex-col gap-0.5 z-10 relative">
                                {[
                                    { name: "Applications", detail: "Web, Mobile, Microservices", IconComponent: AppColorIcon },
                                    { name: "Platform Services", detail: "Databases, Middleware, Analytics", IconComponent: PlatformColorIcon },
                                    { name: "Infrastructure", detail: "Compute, Storage, Networking", IconComponent: InfraColorIcon },
                                    { name: "Physical Datacenter", detail: "Global Azure Regions", IconComponent: DatacenterColorIcon }
                                ].map((step, sIdx) => (
                                    <div key={step.name} className="flex flex-col items-center">
                                        <div className="w-full flex items-center gap-3 py-1.5 px-3 rounded-xl transition-all duration-300 hover:bg-white/35"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.25)',
                                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.01)'
                                            }}
                                        >
                                            <step.IconComponent />
                                            <div>
                                                <div className="font-bold text-[9.5px] text-[#1e293b] leading-tight">{step.name}</div>
                                                <div className="text-[8px] text-[#64748b] mt-0.5 leading-tight">{step.detail}</div>
                                            </div>
                                        </div>
                                        {sIdx < 3 && (
                                            <div className="flex flex-col items-center my-0.5">
                                                <div className="h-2.5 w-[1px] bg-blue-300/40" />
                                                <div className="w-2.5 h-2.5 rounded-full border border-blue-300/60 bg-white flex items-center justify-center text-[7px] font-bold text-blue-400/80 leading-none select-none">+</div>
                                                <div className="h-2.5 w-[1px] bg-blue-300/40" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* ─── 3. BOTTOM SERVICES HORIZONTAL CARDS (5 cards) ─── */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3">
                    {/* Card 1: Azure Functions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className={`rounded-2xl p-4 flex justify-between items-start ${glassHover}`}
                        style={glass}
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-4 h-4 text-amber-500" strokeWidth={2} />
                                <span className="font-bold text-[11px] text-[#1e1b4b]">Azure Functions</span>
                            </div>
                            <ul className="space-y-1 text-[8.5px] text-[#475569] pl-0 list-none">
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-amber-400" />Serverless Compute</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-amber-400" />Event Driven</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-amber-400" />Auto Scaling</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-amber-400" />Pay-As-You-Go</li>
                            </ul>
                        </div>
                        <FunctionsIllustration />
                    </motion.div>

                    {/* Card 2: Security & Compliance */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className={`rounded-2xl p-4 flex justify-between items-start ${glassHover}`}
                        style={glass}
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Shield className="w-4 h-4 text-[#7c3aed]" strokeWidth={2} />
                                <span className="font-bold text-[11px] text-[#1e1b4b]">Security & Compliance</span>
                            </div>
                            <ul className="space-y-1 text-[8.5px] text-[#475569] pl-0 list-none">
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-[#7c3aed]" />Azure Defender</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-[#7c3aed]" />Identity & Access Mgmt</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-[#7c3aed]" />Data Encryption</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-[#7c3aed]" />Compliance Standards</li>
                            </ul>
                        </div>
                        <SecurityIllustration />
                    </motion.div>

                    {/* Card 3: Networking */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className={`rounded-2xl p-4 flex justify-between items-start ${glassHover}`}
                        style={glass}
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Network className="w-4 h-4 text-[#0078d4]" strokeWidth={2} />
                                <span className="font-bold text-[11px] text-[#1e1b4b]">Networking</span>
                            </div>
                            <ul className="space-y-1 text-[8.5px] text-[#475569] pl-0 list-none">
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-[#0078d4]" />Virtual Network</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-[#0078d4]" />Load Balancer</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-[#0078d4]" />VPN Gateway</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-[#0078d4]" />Azure CDN</li>
                            </ul>
                        </div>
                        <NetworkingIllustration />
                    </motion.div>

                    {/* Card 4: Monitoring & Insights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className={`rounded-2xl p-4 flex justify-between items-start ${glassHover}`}
                        style={glass}
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Activity className="w-4 h-4 text-emerald-500" strokeWidth={2} />
                                <span className="font-bold text-[11px] text-[#1e1b4b]">Monitoring & Insights</span>
                            </div>
                            <ul className="space-y-1 text-[8.5px] text-[#475569] pl-0 list-none">
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-500" />Azure Monitor</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-500" />Log Analytics</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-500" />Application Insights</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-500" />Alerts & Notifications</li>
                            </ul>
                        </div>
                        <MonitoringIllustration />
                    </motion.div>

                    {/* Card 5: Data & Analytics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className={`rounded-2xl p-4 flex justify-between items-start ${glassHover}`}
                        style={glass}
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Database className="w-4 h-4 text-violet-500" strokeWidth={2} />
                                <span className="font-bold text-[11px] text-[#1e1b4b]">Data & Analytics</span>
                            </div>
                            <ul className="space-y-1 text-[8.5px] text-[#475569] pl-0 list-none">
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-violet-400" />Azure Synapse Analytics</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-violet-400" />Data Lake Storage</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-violet-400" />Stream Analytics</li>
                                <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-violet-400" />Power BI Integration</li>
                            </ul>
                        </div>
                        <DataIllustration />
                    </motion.div>
                </div>

                {/* ─── 4. BOTTOM CTA & CONTACT AREA STRIP ─── */}
                <footer className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 items-stretch">

                    {/* Left CTA Button Panel */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="lg:col-span-3 rounded-2xl flex flex-col justify-center p-4 cursor-pointer text-white shadow-lg"
                        style={{
                            background: 'linear-gradient(135deg, #7c3aed 0%, #d946ef 100%)',
                            boxShadow: '0 10px 30px rgba(217, 70, 239, 0.25)',
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-[14px] leading-tight">Accelerate Innovation</h3>
                                <p className="text-[10px] opacity-90 mt-1">with Azure Cloud Solutions</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/25">
                                <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Middle Feature list icons */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.45)',
                        border: '1px solid rgba(124, 58, 237, 0.12)',
                        borderRadius: '20px',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px rgba(91, 33, 182, 0.04)',
                    }} className="lg:col-span-5 grid grid-cols-3 gap-3 p-4">
                        {[
                            { label: 'Elastic Scale', icon: Cpu },
                            { label: 'Global Datacenters', icon: Globe },
                            { label: 'Disaster Recovery', icon: RefreshCw },
                            { label: 'Backup & Restore', icon: Shield },
                            { label: 'Performance Optimization', icon: Zap },
                            { label: 'Cost Efficiency', icon: DollarSign }
                        ].map((item) => (
                            <div key={item.label} className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                                    <item.icon className="w-3 h-3 text-[#4f46e5]" strokeWidth={2} />
                                </div>
                                <span className="text-[8.5px] font-bold text-[#374151]">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right Contact details & QR code */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.45)',
                        border: '1px solid rgba(124, 58, 237, 0.12)',
                        borderRadius: '20px',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px rgba(91, 33, 182, 0.04)',
                    }} className="lg:col-span-4 flex items-center justify-between p-4 gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Globe className="w-3.5 h-3.5 text-[#0078d4]" strokeWidth={2} />
                                <a href="https://www.desireinfoweb.com" target="_blank" rel="noreferrer"
                                    className="text-[9.5px] font-bold text-[#1e293b] hover:text-[#0078d4] transition-colors leading-none">
                                    www.desireinfoweb.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-[#7c3aed]" strokeWidth={2} />
                                <a href="mailto:vijay@desireinfoweb.com"
                                    className="text-[9.5px] font-bold text-[#1e293b] hover:text-[#7c3aed] transition-colors leading-none">
                                    vijay@desireinfoweb.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-[#d946ef]" strokeWidth={2} />
                                <a href="tel:+91-8780468807"
                                    className="text-[9.5px] font-bold text-[#1e293b] hover:text-[#d946ef] transition-colors leading-none">
                                    +91-8780468807
                                </a>
                            </div>
                        </div>

                        {/* Clean Mock QR Code placeholder */}
                        <div className="shrink-0 flex items-center justify-center">
                            <MockQRCodeSVG />
                        </div>
                    </div>

                </footer>

            </div>
        </section>
    );
}

// Fallback icons if not present
function HardDriveIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="8" x="2" y="3" rx="2" />
            <rect width="20" height="8" x="2" y="13" rx="2" />
            <line x1="6" y1="7" x2="6.01" y2="7" />
            <line x1="6" y1="17" x2="6.01" y2="17" />
        </svg>
    );
}

function BriefcaseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    );
}

// ─── Colored Azure-style SVGs ────────────────────────────────────────────────
function VMColorIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <rect width="28" height="20" x="2" y="4" rx="2.5" fill="url(#vm-grad)" />
            <path d="M5 7h22v12H5z" fill="#0b0f19" />
            <path d="M10 24h12l2 4H8l2-4z" fill="#475569" />
            <path d="M12 11h8v1h-8zm0 3h5v1h-5z" fill="#38bdf8" />
            <defs>
                <linearGradient id="vm-grad" x1="2" y1="4" x2="30" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#1d4ed8" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function AKSColorIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <path d="M16 2L4 9v14l12 7 12-7V9L16 2z" fill="url(#aks-grad)" />
            <circle cx="16" cy="16" r="4.5" fill="#ffffff" />
            <circle cx="16" cy="7" r="2" fill="#ffffff" />
            <circle cx="8" cy="21" r="2" fill="#ffffff" />
            <circle cx="24" cy="21" r="2" fill="#ffffff" />
            <path d="M16 9.5v2M11.5 18.5l2-1M20.5 18.5l-2-1" stroke="#7c3aed" strokeWidth="1.5" />
            <defs>
                <linearGradient id="aks-grad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c084fc" />
                    <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function SQLColorIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <ellipse cx="16" cy="7" rx="10" ry="3.5" fill="#60a5fa" />
            <path d="M6 7v6c0 1.93 4.48 3.5 10 3.5s10-1.57 10-3.5V7H6z" fill="#2563eb" />
            <ellipse cx="16" cy="13" rx="10" ry="3.5" fill="#3b82f6" />
            <path d="M6 13v6c0 1.93 4.48 3.5 10 3.5s10-1.57 10-3.5v-6H6z" fill="#1d4ed8" />
            <ellipse cx="16" cy="19" rx="10" ry="3.5" fill="#1e40af" />
            <text x="16" y="22" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SQL</text>
        </svg>
    );
}

function StorageColorIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <rect width="24" height="6.5" x="4" y="4" rx="1" fill="#3b82f6" />
            <circle cx="8" cy="7.2" r="0.8" fill="#ffffff" />
            <rect width="10" height="1.2" x="12" y="6.5" rx="0.5" fill="#93c5fd" />

            <rect width="24" height="6.5" x="4" y="13" rx="1" fill="#2563eb" />
            <circle cx="8" cy="16.2" r="0.8" fill="#ffffff" />
            <rect width="10" height="1.2" x="12" y="15.5" rx="0.5" fill="#93c5fd" />

            <rect width="24" height="6.5" x="4" y="22" rx="1" fill="#1d4ed8" />
            <circle cx="8" cy="25.2" r="0.8" fill="#ffffff" />
            <rect width="10" height="1.2" x="12" y="24.5" rx="0.5" fill="#93c5fd" />
        </svg>
    );
}

function AppServiceColorIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <circle cx="16" cy="16" r="13" fill="url(#app-grad)" />
            <path d="M16 3a13 13 0 0113 13H3A13 13 0 0116 3z" fill="#60a5fa" opacity="0.6" />
            <ellipse cx="16" cy="16" rx="5" ry="13" stroke="#ffffff" strokeWidth="1" />
            <line x1="3" y1="16" x2="29" y2="16" stroke="#ffffff" strokeWidth="1.2" />
            <defs>
                <linearGradient id="app-grad" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#1d4ed8" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function FunctionsColorIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <rect width="26" height="20" x="3" y="6" rx="2.5" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.2" />
            <path d="M8 12l-3 4 3 4M24 12l3 4-3 4" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 10l-4 6h4l-3 6" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    );
}

function AppColorIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <rect width="18" height="13" x="3" y="4" rx="1.5" fill="#3b82f6" />
            <rect width="14" height="8" x="5" y="6.5" rx="0.5" fill="#ffffff" />
            <path d="M9 21h6m-3-4v4" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function PlatformColorIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" fill="#a855f7" />
            <circle cx="12" cy="11" r="3" fill="#ffffff" />
            <path d="M12 6v2M12 14v2M7.5 8.5l1.5 1M15 13.5l1.5 1M7.5 13.5l1.5-1M15 8.5l1.5-1" stroke="#6d28d9" strokeWidth="1.2" />
        </svg>
    );
}

// Layers Icon
function InfraColorIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M3 7l9-3.5 9 3.5-9 3.5-9-3.5z" fill="#60a5fa" />
            <path d="M3 12l9-3.5 9 3.5-9 3.5-9-3.5z" fill="#3b82f6" />
            <path d="M3 17l9-3.5 9 3.5-9 3.5-9-3.5z" fill="#1d4ed8" />
        </svg>
    );
}

function DatacenterColorIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <rect width="6" height="17" x="3" y="3.5" rx="1" fill="#3b82f6" />
            <rect width="6" height="17" x="15" y="3.5" rx="1" fill="#1d4ed8" />
            <rect width="4" height="17" x="10" y="3.5" rx="0.5" fill="#60a5fa" />
            <circle cx="6" cy="6.5" r="0.6" fill="#ffffff" />
            <circle cx="6" cy="10.5" r="0.6" fill="#ffffff" />
            <circle cx="18" cy="6.5" r="0.6" fill="#ffffff" />
            <circle cx="18" cy="10.5" r="0.6" fill="#ffffff" />
        </svg>
    );
}
