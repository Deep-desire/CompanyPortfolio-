import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import {
    Cloud, Shield, Zap, Globe, Server, Database, Monitor, Smartphone, Layers, Settings,
    User, DollarSign, Activity, TrendingUp, ArrowRight, ChevronRight, Sparkles, Terminal,
    Lock, Workflow, Cpu, Phone, Mail, Award, Clock, Users, Code, CheckCircle, RefreshCw,
    Trophy, ThumbsUp
} from 'lucide-react';

// ─── Constants & Styles ──────────────────────────────────────────────────────
const POPPINS = '"Poppins", "Inter", sans-serif';
const SORA = '"Sora", "Inter", sans-serif';

const colors = {
    bg: '#f7f4ff',
    white: '#ffffff',
    primary: '#6a35ff',
    secondary: '#9c63ff',
    accent: '#b287ff',
    deep: '#2f1c6a',
    text: '#22134a',
    muted: '#6f6a8b',
    glass: 'rgba(255, 255, 255, 0.45)',
    border: 'rgba(255, 255, 255, 0.35)',
    glow: 'rgba(132, 92, 255, 0.35)'
};

const glassCard = {
    background: 'rgba(255, 255, 255, 0.45)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(255, 255, 255, 0.35)',
    boxShadow: '0 10px 30px rgba(123, 97, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
    borderRadius: '24px'
};

const glassHover = "hover:shadow-[0_20px_60px_rgba(108,47,242,0.16),0_8px_20px_rgba(155,92,255,0.10),inset 0 1px 0 rgba(255,255,255,0.55)] hover:scale-[1.02] transition-all duration-300";

// ─── Stat Counter Hook ───────────────────────────────────────────────────────
function useCountUp(target, duration = 1400) {
    const [val, setVal] = useState(0);
    const str = String(target);
    const numMatch = str.match(/[\d.]+/);
    const parsed = numMatch ? parseFloat(numMatch[0]) : 0;
    const suffix = str.replace(/[\d.]+/, '');
    const hasDecimal = numMatch?.[0]?.includes('.');

    useEffect(() => {
        const t0 = performance.now();
        const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - (1 - p) ** 3;
            setVal(parsed * eased);
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [target, duration, parsed]);

    return `${hasDecimal ? val.toFixed(1) : Math.round(val).toLocaleString()}${suffix}`;
}

// ─── Stat strip KPI card ─────────────────────────────────────────────────────
function HeaderStatCard({ val, label, icon: Icon }) {
    const count = useCountUp(val, 1500);
    return (
        <div className="flex items-center gap-2.5 px-3.5 border-r border-purple-100/80 last:border-r-0 select-text">
            {Icon && <Icon className="w-4 h-4 text-[#6a35ff] shrink-0" strokeWidth={1.8} />}
            <div className="flex flex-col text-left">
                <span className="text-[11.5px] font-extrabold text-[#22134a] leading-none">{count}</span>
                <span className="text-[7px] text-[#6f6a8b] font-semibold mt-0.5 leading-none">{label}</span>
            </div>
        </div>
    );
}

// ─── Floating Glass Cube 3D Icon ─────────────────────────────────────────────
function FloatingGlassCube({ symbol, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
                rotateX: [0, 8, 0],
                rotateY: [0, 15, 0]
            }}
            transition={{
                opacity: { duration: 0.8, delay },
                scale: { duration: 0.8, delay },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
                rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay },
                rotateY: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay }
            }}
            className="w-11 h-11 relative flex items-center justify-center select-none"
            style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
        >
            {/* Front Face */}
            <div className="absolute inset-0 rounded-lg border border-purple-400/40"
                style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 15px rgba(108, 47, 242, 0.15), inset 0 1px 0 rgba(255,255,255,0.4)',
                    transform: 'translateZ(10px)'
                }}
            />
            {/* Back Face */}
            <div className="absolute inset-0 rounded-lg border border-purple-400/20"
                style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    transform: 'translateZ(-10px) rotateY(180deg)'
                }}
            />
            {/* Glowing Code Symbol */}
            <div className="relative z-10 text-[12px] font-bold text-white drop-shadow-[0_0_8px_rgba(156,99,255,0.95)] font-mono select-none" style={{ transform: 'translateZ(12px)' }}>
                {symbol}
            </div>
        </motion.div>
    );
}

// ─── Floating Code Window ────────────────────────────────────────────────────
function CodeEditorPanel({ title, lines, widthClass = 'w-64', heightClass = 'h-40', delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{
                opacity: 0.85,
                scale: 1,
                y: [0, -6, 0]
            }}
            transition={{
                opacity: { duration: 1, delay },
                scale: { duration: 1, delay },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay }
            }}
            whileHover={{ scale: 0.98, opacity: 0.95 }}
            style={{
                background: 'rgba(15, 8, 36, 0.72)',
                border: '1px solid rgba(156, 99, 255, 0.25)',
                boxShadow: '0 10px 40px rgba(108, 47, 242, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}
            className={`rounded-xl p-3 flex flex-col font-mono text-[8.5px] text-[#cbd5e1] ${widthClass} ${heightClass} overflow-hidden shrink-0 pointer-events-none select-none`}
        >
            {/* Header / Traffic lights */}
            <div className="flex items-center justify-between border-b border-purple-950/40 pb-2 mb-2 shrink-0">
                <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                </div>
                <span className="text-[7px] text-purple-400/80 font-semibold uppercase tracking-wider">{title}</span>
            </div>
            {/* Code Lines */}
            <div className="flex-1 space-y-1 overflow-y-auto leading-relaxed select-none">
                {lines.map((line, i) => (
                    <div key={i} className="flex gap-2">
                        <span className="text-purple-600 w-2.5 text-right select-none">{(i + 1)}</span>
                        <span>{line}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// ─── 3D Laptop Screen Graphic ────────────────────────────────────────────────
function CircularCityscape() {
    return (
        <div className="w-[110px] h-[110px] rounded-full relative overflow-hidden flex items-center justify-center border border-purple-500/25 shrink-0"
            style={{ background: 'radial-gradient(circle, rgba(108, 47, 242, 0.35) 0%, rgba(24, 0, 79, 0.8) 100%)' }}>
            <svg width="90" height="80" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0">
                <path d="M5 90 V50 H15 V65 H25 V45 H38 V60 H52 V30 H65 V55 H75 V40 H85 V60 H95 V90 Z" fill="#18004f" opacity="0.6" />
                <path d="M12 90 V60 H20 V70 H30 V50 H45 V68 H58 V42 H70 V62 H80 V48 H88 V90 Z" fill="#6c2ff2" opacity="0.45" />
                <circle cx="25" cy="55" r="1" fill="#eadcff" />
                <circle cx="32" cy="62" r="1" fill="#eadcff" />
                <circle cx="48" cy="55" r="1.2" fill="#b56cff" />
                <circle cx="62" cy="48" r="1" fill="#eadcff" />
                <circle cx="62" cy="55" r="1" fill="#b56cff" />
                <circle cx="75" cy="55" r="1" fill="#eadcff" />
                <path d="M10 80 Q50 30 90 80" stroke="#b56cff" strokeWidth="1" opacity="0.5" strokeDasharray="3 3" />
                <path d="M20 85 Q50 45 80 85" stroke="#9b5cff" strokeWidth="1.2" opacity="0.4" />
                <circle cx="50" cy="45" r="2" fill="#eadcff" className="animate-ping" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#18004f]/40 via-transparent to-transparent pointer-events-none" />
        </div>
    );
}

// ─── Main Exported Page Component ─────────────────────────────────────────────
export default function WebAndMobile() {
    const laptopControls = useAnimation();
    const leftPhoneControls = useAnimation();
    const rightPhoneControls = useAnimation();

    const [isHovered, setIsHovered] = useState(false);

    // Initial load animations
    useEffect(() => {
        const animateSequence = async () => {
            // Step 1: Laptop slide up and tilt
            await laptopControls.start({
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
                transition: { duration: 1.0, ease: 'easeOut' }
            });

            // Step 2: Left phone slides in
            leftPhoneControls.start({
                opacity: 1,
                x: 0,
                z: 40,
                rotateY: 15,
                rotateX: 4,
                rotateZ: -2,
                transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 }
            });

            // Step 3: Right phone slides in
            rightPhoneControls.start({
                opacity: 1,
                x: 0,
                z: 40,
                rotateY: -15,
                rotateX: 4,
                rotateZ: 2,
                transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
            });
        };

        animateSequence();
    }, [laptopControls, leftPhoneControls, rightPhoneControls]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <section
            id="web-mobile-service"
            className="relative overflow-hidden w-full min-h-screen flex flex-col justify-start py-10 px-4 md:px-6 lg:px-8 select-none"
            style={{
                background: `radial-gradient(circle at 5% 15%, rgba(234, 220, 255, 0.22) 0%, transparent 55%),
                            radial-gradient(circle at 95% 85%, rgba(181, 108, 255, 0.1) 0%, transparent 55%),
                            linear-gradient(160deg, #f7f4ff 0%, #ffffff 35%, #faf7ff 75%, #f7f4ff 100%)`,
                fontFamily: POPPINS,
            }}
        >
            {/* ── Background futuristic mesh ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="wm-service-mesh" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="40" cy="40" r="1" fill="#6a35ff" />
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6a35ff" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#wm-service-mesh)" />
                </svg>

                <div className="absolute top-[35%] left-[50%] w-[550px] h-[550px] rounded-full blur-[110px]"
                    style={{ background: 'radial-gradient(circle, rgba(132, 92, 255, 0.1) 0%, transparent 70%)' }} />
                <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9c63ff]/15 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1600px] w-full mx-auto flex flex-col gap-8">

                {/* ─── A. TOP SECTION (Logo, KPIs, Partner Badge) ─── */}
                <header className="flex flex-col lg:flex-row items-center justify-between gap-4 border-b border-purple-100/40 pb-5 shrink-0 select-none w-full">
                    {/* Brand / Logo */}
                    <div className="flex items-center gap-2.5 self-start lg:self-center">
                        <img src="/logo.png" alt="DesireInfoWeb Logo" className="w-8.5 h-8.5 object-contain" />
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '16px', color: '#22134a', lineHeight: 1.1 }}>
                                Desire<span className="text-[#6a35ff]">InfoWeb</span>
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '7.5px', color: '#9c63ff', letterSpacing: '0.04em', marginTop: '1px' }}>
                                Your Extended <span className="text-red-500">Technology Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* Stat Strip */}
                    <div style={glassCard} className="flex flex-wrap items-center justify-center gap-y-2 py-2.5 px-6 max-w-full">
                        <HeaderStatCard val="500+" label="Projects Delivered" icon={Trophy} />
                        <HeaderStatCard val="250+" label="Happy Clients" icon={Users} />
                        <HeaderStatCard val="50+" label="Expert Developers" icon={Code} />
                        <HeaderStatCard val="10+" label="Years Experience" icon={Award} />
                        <HeaderStatCard val="99.9%" label="On-Time Delivery" icon={Clock} />
                        <HeaderStatCard val="100%" label="Client Satisfaction" icon={ThumbsUp} />
                    </div>

                    {/* Microsoft Solutions Partner */}
                    <div style={glassCard} className="flex items-center gap-3 py-1.5 px-3 self-end lg:self-center shrink-0">
                        <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
                            <div className="w-1.8 h-1.8 bg-[#f25022]" />
                            <div className="w-1.8 h-1.8 bg-[#7fba00]" />
                            <div className="w-1.8 h-1.8 bg-[#00a4ef]" />
                            <div className="w-1.8 h-1.8 bg-[#ffb900]" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span style={{ fontSize: '7.5px', fontWeight: 600, color: '#4b5563', lineHeight: 1.0 }}>Microsoft</span>
                            <span style={{ fontSize: '9px', fontWeight: 800, color: '#1f2937', lineHeight: 1.1 }}>Solutions Partner</span>
                            <span style={{ fontSize: '7px', fontWeight: 500, color: '#6b7280', marginTop: '2px', lineHeight: 1.1 }}>Digital & App Innovation</span>
                            <span style={{ fontSize: '7px', fontWeight: 500, color: '#6b7280', lineHeight: 1.1 }}>Web Development</span>
                        </div>
                    </div>
                </header>

                {/* ─── B / C / D. 3-COLUMN MAIN LAYOUT ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(230px,21%)_1fr_minmax(230px,21%)] gap-5 items-stretch">

                    {/* ─── B. LEFT COLUMN (Heading, Subtitle, Features) ─── */}
                    <div className="flex flex-col gap-6 justify-start">
                        <div className="flex flex-col gap-3 text-left">
                            <h1 className="text-[25px] font-black tracking-tight leading-[1.12] text-[#22134a]" style={{ fontFamily: SORA }}>
                                Web & Mobile
                                <br />
                                Development <span style={{
                                    background: 'linear-gradient(135deg, #6c2ff2 0%, #b56cff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>Solutions</span>
                            </h1>

                            <div className="text-[12.5px] font-extrabold text-[#cf2b7b]" style={{ fontFamily: POPPINS }}>
                                Build. Innovate. Elevate. Succeed.
                            </div>

                            {/* Gold Divider Line with Star */}
                            <div className="flex items-center gap-1.5 py-0.5 select-none">
                                <div className="w-8 h-[1.5px] bg-amber-400 rounded-full" />
                                <span className="text-amber-500 text-[10px] leading-none">✦</span>
                                <div className="w-8 h-[1.5px] bg-amber-400 rounded-full" />
                            </div>

                            <p className="text-[9.8px] text-[#6f6a8b] leading-relaxed select-text">
                                We build high-performance, scalable, and secure web and mobile applications that deliver exceptional user experiences and drive real business results.
                            </p>
                        </div>

                        {/* Feature Cards with illustrative graphics on the right */}
                        <div className="flex flex-col gap-3">
                            {[
                                {
                                    title: "Responsive Design",
                                    desc: "Pixel-perfect experiences across all devices and screen sizes.",
                                    icon: Monitor,
                                    color: '#6a35ff',
                                    illustration: (
                                        <svg width="76" height="42" viewBox="0 0 86 42" fill="none" className="overflow-visible">
                                            {/* Laptop Screen */}
                                            <rect x="2" y="3" width="46" height="28" rx="3" fill="#f8f6ff" stroke="#a78bfa" strokeWidth="1" />
                                            <rect x="5" y="6" width="40" height="20" rx="1.5" fill="#ffffff" />
                                            {/* Laptop layout bars */}
                                            <rect x="8" y="9" width="8" height="14" rx="0.5" fill="#c084fc" fillOpacity="0.25" />
                                            <rect x="18" y="9" width="24" height="3" rx="0.5" fill="#a78bfa" fillOpacity="0.3" />
                                            <rect x="18" y="14" width="24" height="2" rx="0.5" fill="#e8e6f2" />
                                            <rect x="18" y="18" width="16" height="2" rx="0.5" fill="#e8e6f2" />
                                            <rect x="2" y="31" width="46" height="1.5" fill="#a78bfa" />

                                            {/* Tablet Screen */}
                                            <rect x="42" y="12" width="16" height="22" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
                                            <rect x="43.5" y="13.5" width="13" height="19" rx="1" fill="#ffffff" />
                                            <rect x="45" y="15" width="10" height="4" rx="0.5" fill="#c084fc" fillOpacity="0.3" />
                                            <circle cx="50" cy="31" r="0.5" fill="#94a3b8" />

                                            {/* Mobile Phone Screen */}
                                            <rect x="54" y="20" width="10" height="16" rx="1.5" fill="#1e1b4b" stroke="#6366f1" strokeWidth="0.8" />
                                            <rect x="55.2" y="21.2" width="7.6" height="13.6" rx="0.8" fill="#ffffff" />
                                            <rect x="56.5" y="22.5" width="5" height="3" rx="0.5" fill="#a78bfa" fillOpacity="0.3" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Performance Optimized",
                                    desc: "Lightning-fast applications built for optimal speed and performance.",
                                    icon: Zap,
                                    color: '#9c63ff',
                                    illustration: (
                                        <svg width="76" height="42" viewBox="0 0 86 42" fill="none" className="overflow-visible">
                                            {/* Speedometer ring */}
                                            <circle cx="52" cy="21" r="14" stroke="#f1f0f7" strokeWidth="2.5" />
                                            <path d="M40 27 A 14 14 0 1 1 64 27" stroke="#10b981" strokeWidth="2.5" strokeDasharray="65 90" strokeLinecap="round" fill="none" />

                                            {/* Green badge with 98 */}
                                            <circle cx="52" cy="21" r="9.5" fill="#ffffff" className="shadow-sm" />
                                            <text x="52" y="24" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#065f46" fontFamily="sans-serif">98</text>

                                            {/* Mini Bar Chart */}
                                            <rect x="6" y="28" width="4" height="8" rx="0.8" fill="#c084fc" fillOpacity="0.4" />
                                            <rect x="12" y="20" width="4" height="16" rx="0.8" fill="#c084fc" fillOpacity="0.6" />
                                            <rect x="18" y="14" width="4" height="22" rx="0.8" fill="#6a35ff" />
                                            <rect x="24" y="18" width="4" height="18" rx="0.8" fill="#b287ff" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Secure & Scalable",
                                    desc: "Enterprise-grade security with scalable architecture for future growth.",
                                    icon: Shield,
                                    color: '#00bcf2',
                                    illustration: (
                                        <svg width="76" height="42" viewBox="0 0 86 42" fill="none" className="overflow-visible">
                                            {/* Grid / Connection Lines */}
                                            <path d="M10 21 H32 M32 21 L40 12 M32 21 L40 30 M60 21 H72 M60 21 L52 12 M60 21 L52 30" stroke="#b287ff" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="2 1.5" />
                                            <circle cx="10" cy="21" r="1.5" fill="#a78bfa" />
                                            <circle cx="72" cy="21" r="1.5" fill="#a78bfa" />
                                            <circle cx="40" cy="12" r="1.5" fill="#c084fc" />
                                            <circle cx="40" cy="30" r="1.5" fill="#c084fc" />
                                            <circle cx="52" cy="12" r="1.5" fill="#c084fc" />
                                            <circle cx="52" cy="30" r="1.5" fill="#c084fc" />

                                            {/* Glowing Lock Box */}
                                            <rect x="42" y="13" width="16" height="18" rx="3.5" fill="#ffffff" stroke="#6a35ff" strokeWidth="1" className="shadow-sm" />
                                            <path d="M46.5 13 V9.5 A 3.5 3.5 0 0 1 53.5 9.5 V13" stroke="#6a35ff" strokeWidth="1" fill="none" strokeLinecap="round" />
                                            <circle cx="50" cy="21" r="1.2" fill="#6a35ff" />
                                            <path d="M50 22.2 V25" stroke="#6a35ff" strokeWidth="1" strokeLinecap="round" />
                                        </svg>
                                    )
                                }
                            ].map((f) => (
                                <div key={f.title} style={glassCard} className={`flex items-center justify-between gap-2 p-2 cursor-pointer max-w-[240px] w-full mx-auto lg:mx-0 ${glassHover}`}>
                                    <div className="flex items-start gap-2 flex-1">
                                        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-purple-100 bg-white/90 shadow-sm">
                                            <f.icon className="w-3 h-3 text-[#6a35ff]" strokeWidth={2.2} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-[9.5px] text-[#22134a] leading-tight">{f.title}</h4>
                                            <p className="text-[7.5px] text-[#6f6a8b] leading-normal mt-0.5">{f.desc}</p>
                                        </div>
                                    </div>
                                    <div className="shrink-0 flex items-center justify-center w-16 h-10 select-none pointer-events-none">
                                        {f.illustration}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ─── C. CENTER COLUMN (Hero 3D Devices Scene) ─── */}
                    <div
                        className="flex items-start justify-center relative select-none w-full min-h-[480px] pt-8"
                        style={{ perspective: '1200px' }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Floor glow spotlight */}
                        <div className="absolute w-[420px] h-[420px] rounded-full blur-[85px] transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(132, 92, 255, 0.18) 0%, transparent 65%)',
                                opacity: isHovered ? 1 : 0.7
                            }}
                        />


                        {/* ── Devices Center Group ── */}
                        <motion.div
                            className="relative z-10 flex items-center justify-center select-none scale-[0.65] sm:scale-[0.85] lg:scale-100 origin-center"
                            style={{ transformStyle: 'preserve-3d' }}
                            animate={{ y: isHovered ? -5 : 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            {/* Base Glow Ring / Shadow */}
                            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[520px] h-[25px] rounded-full bg-purple-950/15 blur-[20px] z-0 pointer-none" />

                            {/* ── Beautiful Futuristic Screen Mockup (Keyboard Base removed per user request) ── */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.92, y: 80, rotateX: 8 }}
                                animate={laptopControls}
                                style={{ transformStyle: 'preserve-3d' }}
                                className="relative flex flex-col items-center justify-center select-none z-10 shrink-0"
                            >
                                {/* Screen bezel */}
                                <motion.div
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative border-[8px] border-[#1e1e24] rounded-2xl bg-[#0b0c10] shadow-[0_20px_50px_rgba(108,47,242,0.3)] overflow-hidden shrink-0"
                                    style={{
                                        width: '460px',
                                        height: '290px',
                                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(108, 47, 242, 0.15)',
                                        transform: 'rotateX(-4deg)',
                                        transformOrigin: 'center'
                                    }}
                                >
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#1e1e24] rounded-b-md z-30 flex items-center justify-center gap-1">
                                        <span className="w-0.8 h-0.8 rounded-full bg-[#111]" />
                                        <span className="w-1.2 h-1.2 rounded-full bg-[#0a2342]" />
                                    </div>

                                    {/* Glass shine overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-20" />

                                    {/* Screen Content UI */}
                                    <div className="w-full h-full bg-[#fafafd] text-[#22134a] p-3 overflow-hidden flex flex-col relative text-left select-none" style={{ fontFamily: POPPINS }}>
                                        {/* Sub-header / Top Navigation Bar */}
                                        <header className="flex items-center justify-between border-b border-purple-100 pb-2 mb-2 shrink-0 select-none">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-3.5 h-3.5 rounded bg-[#6a35ff] flex items-center justify-center text-[6px] text-white font-extrabold select-none">D</div>
                                                <span style={{ fontSize: '8.5px', fontWeight: 800, color: '#22134a', letterSpacing: '-0.2px' }}>Desire<span className="text-[#6a35ff]">InfoWeb</span></span>
                                            </div>
                                            <nav className="flex items-center gap-2.5 text-[6.5px] text-[#6f6a8b] font-bold select-none">
                                                <span>Home</span>
                                                <span>About</span>
                                                <span>Services</span>
                                                <span>Portfolio</span>
                                                <span>Blog</span>
                                                <span className="text-[#6a35ff] border border-purple-200 px-1.5 py-0.5 rounded bg-white">Contact</span>
                                            </nav>
                                        </header>

                                        {/* Main grid */}
                                        <div className="flex-1 grid grid-cols-12 gap-2 items-center select-none">
                                            <div className="col-span-7 flex flex-col gap-1.5 pr-1 items-start select-none">
                                                <h2 className="text-[13px] font-black leading-[1.12] text-[#22134a] select-text">
                                                    We Build Digital
                                                    <br />
                                                    Experiences That
                                                    <br />
                                                    <span className="text-[#6a35ff]">Inspire & Perform</span>
                                                </h2>
                                                <p className="text-[7px] text-[#6f6a8b] leading-normal max-w-[190px] select-text">
                                                    Transforming ideas into powerful digital solutions for a better tomorrow.
                                                </p>
                                                <div className="flex items-center gap-1.5 mt-1 select-none">
                                                    <span className="text-[6px] font-bold text-white bg-[#6a35ff] px-2 py-0.8 rounded shadow-sm">Explore Services</span>
                                                    <span className="text-[6px] font-bold text-[#6a35ff] border border-purple-200 px-2 py-0.8 rounded bg-white">Contact Us</span>
                                                </div>
                                            </div>

                                            {/* Right Illustration */}
                                            <div className="col-span-5 flex flex-col items-center justify-center relative select-none">
                                                <CircularCityscape />
                                                <div className="absolute right-[-10px] top-[10%] bg-white/95 border border-purple-100 rounded py-0.5 px-1 shadow-sm text-[5px] font-bold text-[#6a35ff] flex items-center gap-0.5 backdrop-blur-sm select-none">
                                                    <Activity className="w-1.5 h-1.5 text-blue-500" /> High Performance
                                                </div>
                                                <div className="absolute left-[-15px] bottom-[25%] bg-white/95 border border-purple-100 rounded py-0.5 px-1 shadow-sm text-[5px] font-bold text-[#6a35ff] flex items-center gap-0.5 backdrop-blur-sm select-none">
                                                    <Layers className="w-1.5 h-1.5 text-[#9c63ff]" /> Scalable Solutions
                                                </div>
                                                <div className="absolute right-[-5px] bottom-[2%] bg-white/95 border border-purple-100 rounded py-0.5 px-1 shadow-sm text-[5px] font-bold text-[#6a35ff] flex items-center gap-0.5 backdrop-blur-sm select-none">
                                                    <Zap className="w-1.5 h-1.5 text-amber-500" /> Modern Technologies
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Stats Banner */}
                                        <div className="border-t border-purple-50 mt-1 pt-2 grid grid-cols-4 gap-1 select-none shrink-0 text-center">
                                            {[
                                                { label: 'Projects', val: '500+' },
                                                { label: 'Clients', val: '250+' },
                                                { label: 'Experts', val: '50+' },
                                                { label: 'Years', val: '10+' }
                                            ].map((stat) => (
                                                <div key={stat.label} className="flex flex-col select-text">
                                                    <span className="text-[8.5px] font-extrabold text-[#6a35ff] leading-none">{stat.val}</span>
                                                    <span className="text-[5px] text-[#6f6a8b] font-medium mt-0.5 leading-none">{stat.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* ── Left Phone ── */}
                            <motion.div
                                initial={{ opacity: 0, x: -80, z: 0 }}
                                animate={leftPhoneControls}
                                style={{ transformStyle: 'preserve-3d' }}
                                className="absolute left-[-150px] bottom-[-20px] select-none z-30"
                            >
                                <motion.div
                                    animate={{ y: [0, -7, 0], rotateY: [15, 18, 15] }}
                                    transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                                    className="w-[155px] h-[290px] bg-[#0c0d12] rounded-[28px] p-1.5 border-[4.5px] border-[#222] shadow-[0_10px_30px_rgba(108,47,242,0.22)] relative overflow-hidden"
                                >
                                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-[#222] rounded-full z-30" />
                                    <div className="w-full h-full bg-gradient-to-b from-[#18004f] via-[#2f1073] to-[#120044] rounded-[22px] p-2.5 text-white flex flex-col justify-between overflow-hidden text-left select-none" style={{ fontSize: '7.5px' }}>
                                        <div className="flex flex-col gap-1.5 items-start mt-1 select-none">
                                            <div className="flex items-center gap-1 shrink-0">
                                                <div className="w-3 h-3 rounded bg-[#9b5cff] flex items-center justify-center text-[5px] text-white font-extrabold select-none">D</div>
                                                <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#eadcff' }}>Desire<span className="text-[#b56cff]">Info</span></span>
                                            </div>
                                            <h3 className="text-[9.5px] font-black leading-tight mt-1 select-text">
                                                Building Digital
                                                <br />
                                                Solutions That
                                                <br />
                                                <span className="text-[#b56cff]">Drive Growth</span>
                                            </h3>
                                            <p className="text-[6px] text-purple-200 leading-normal max-w-[115px] mt-0.5 select-text">
                                                Innovative mobile apps empowering your business.
                                            </p>
                                            <div className="text-[6px] font-bold text-white bg-[#6c2ff2] px-2 py-0.8 rounded shadow-md mt-1 cursor-pointer select-none">
                                                Get Started
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5 my-1.5 w-full select-none">
                                            <span className="font-bold text-[6.5px] text-purple-300 uppercase tracking-wider shrink-0">Our Services</span>
                                            <div className="p-1.5 rounded-lg border border-white/10 flex items-start gap-1.5" style={{ background: 'rgba(255, 255, 255, 0.08)' }}>
                                                <Smartphone className="w-2.5 h-2.5 text-[#b56cff] shrink-0 mt-0.5" />
                                                <div>
                                                    <div className="font-bold text-[6.5px] leading-none">Mobile App Dev</div>
                                                    <div className="text-[5.5px] text-purple-200/80 leading-tight mt-0.8">Native and cross-platform apps.</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-0.8 shrink-0 select-none">
                                            {['Enterprise', 'UX Design', 'Performant'].map((t) => (
                                                <div key={t} className="p-0.8 rounded border border-white/5 text-center flex flex-col justify-center items-center gap-0.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                                    <span className="text-[5px] font-semibold text-white/90 leading-none">{t}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* ── Right Phone ── */}
                            <motion.div
                                initial={{ opacity: 0, x: 80, z: 0 }}
                                animate={rightPhoneControls}
                                style={{ transformStyle: 'preserve-3d' }}
                                className="absolute right-[-150px] bottom-[-20px] select-none z-30"
                            >
                                <motion.div
                                    animate={{ y: [0, -7, 0], rotateY: [-15, -18, -15] }}
                                    transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                    className="w-[155px] h-[290px] bg-[#0c0d12] rounded-[28px] p-1.5 border-[4.5px] border-[#22134a] shadow-[0_10px_30px_rgba(108,47,242,0.22)] relative overflow-hidden"
                                >
                                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-[#222] rounded-full z-30" />
                                    <div className="w-full h-full bg-[#fcfbfe] rounded-[22px] p-2 text-[#22134a] flex flex-col justify-between overflow-hidden text-left select-none" style={{ fontSize: '7.5px', fontFamily: POPPINS }}>
                                        <div className="flex flex-col gap-1 items-start mt-1 select-none w-full">
                                            <div className="flex items-center justify-between w-full shrink-0 select-none">
                                                <span style={{ fontSize: '8px', fontWeight: 800, color: '#22134a' }} className="flex items-center gap-0.5">
                                                    <Activity className="w-2.5 h-2.5 text-[#6a35ff]" /> Dashboard
                                                </span>
                                                <Settings className="w-2 h-2 text-purple-400" />
                                            </div>
                                            <div className="w-full p-1.5 rounded-lg text-left" style={{ background: 'linear-gradient(135deg, rgba(108,47,242,0.08), rgba(181,108,255,0.05))' }}>
                                                <div className="font-bold text-[7px] text-[#22134a] leading-none select-text">Welcome Back, Alex!</div>
                                                <div className="text-[5px] text-[#6f6a8b] leading-tight mt-0.5 select-text">Overview of app analytics.</div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-1 w-full mt-0.5 select-none">
                                                <div className="p-1 rounded-md border border-purple-50 bg-white shadow-sm flex flex-col justify-center select-text">
                                                    <span className="text-[5px] text-[#6f6a8b] font-semibold">Total Users</span>
                                                    <span className="text-[8px] font-black text-[#6a35ff] mt-0.5">12,458</span>
                                                </div>
                                                <div className="p-1 rounded-md border border-purple-50 bg-white shadow-sm flex flex-col justify-center select-text">
                                                    <span className="text-[5px] text-[#6f6a8b] font-semibold">Revenue</span>
                                                    <span className="text-[8px] font-black text-[#6a35ff] mt-0.5">$48,785</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1 my-1.5 flex flex-col justify-center border border-purple-50 rounded-lg p-1 bg-white select-none">
                                            <div className="flex-1 relative select-none flex items-end">
                                                <svg width="120" height="32" className="w-full overflow-visible">
                                                    <path d="M 5 28 Q 25 10, 45 22 T 85 8 T 115 4" fill="none" stroke="#6c2ff2" strokeWidth="1.2" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1 select-none w-full shrink-0">
                                            <div className="space-y-0.8 select-text">
                                                <div className="flex items-center justify-between text-[5px] border-b border-purple-50 pb-0.5">
                                                    <span className="font-semibold">Product A</span>
                                                    <span className="text-[#6a35ff] font-bold">$12.4k</span>
                                                </div>
                                                <div className="flex items-center justify-between text-[5px]">
                                                    <span className="font-semibold">Product B</span>
                                                    <span className="text-[#6a35ff] font-bold">$9.8k</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between border-t border-purple-50 pt-1 mt-0.5 select-none">
                                                {[Globe, Activity, Layers, User].map((Icon, idx) => (
                                                    <Icon key={idx} className="w-2.5 h-2.5" style={{ color: idx === 1 ? '#6a35ff' : '#9ca3af' }} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    </div>

                    {/* ─── D. RIGHT COLUMN (Service Cards) ─── */}
                    <div className="flex flex-col justify-center items-end">
                        {/* Services Grid with illustrations on the right */}
                        <div className="flex flex-col gap-3 items-end">
                            {[
                                {
                                    title: "Web Development",
                                    desc: "Modern, responsive websites and web applications using latest technologies.",
                                    icon: Globe,
                                    color: '#6a35ff',
                                    illustration: (
                                        <svg width="72" height="40" viewBox="0 0 76 42" fill="none" className="overflow-visible">
                                            <rect x="10" y="4" width="46" height="28" rx="2" fill="#fafafd" stroke="#6a35ff" strokeWidth="0.8" />
                                            <rect x="13" y="7" width="40" height="19" rx="1" fill="#6c2ff2" fillOpacity="0.1" />
                                            <path d="M16 10 h15 M16 14 h22 M16 18 h12" stroke="#6c2ff2" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />
                                            <path d="M6 32 h54" stroke="#6a35ff" strokeWidth="1.2" strokeLinecap="round" />
                                            <circle cx="33" cy="20" r="1.5" fill="#9c63ff" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Mobile Development",
                                    desc: "Native & cross-platform mobile apps for iOS and Android.",
                                    icon: Smartphone,
                                    color: '#9c63ff',
                                    illustration: (
                                        <svg width="72" height="40" viewBox="0 0 76 42" fill="none" className="overflow-visible">
                                            <rect x="22" y="10" width="12" height="22" rx="2" fill="#ffffff" stroke="#9ca3af" strokeWidth="0.8" />
                                            <circle cx="28" cy="29" r="0.5" fill="#9ca3af" />
                                            <rect x="38" y="4" width="18" height="32" rx="3.5" fill="#0c0d12" stroke="#6a35ff" strokeWidth="1" />
                                            <rect x="40" y="6" width="14" height="25" rx="2" fill="#18004f" />
                                            <circle cx="47" cy="11" r="2.2" fill="#b56cff" />
                                            <rect x="43" y="16" width="8" height="2" rx="0.5" fill="#eadcff" fillOpacity="0.4" />
                                            <rect x="43" y="20" width="8" height="2" rx="0.5" fill="#eadcff" fillOpacity="0.4" />
                                            <rect x="43" y="24" width="8" height="2" rx="0.5" fill="#eadcff" fillOpacity="0.4" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "UI/UX Design",
                                    desc: "Beautiful, intuitive designs that enhance user engagement.",
                                    icon: Layers,
                                    color: '#b287ff',
                                    illustration: (
                                        <svg width="72" height="40" viewBox="0 0 76 42" fill="none" className="overflow-visible">
                                            <rect x="18" y="10" width="22" height="24" rx="3" fill="#fafafd" stroke="#c084fc" strokeWidth="0.8" strokeDasharray="2 1" />
                                            <rect x="32" y="6" width="22" height="26" rx="3.5" fill="#ffffff" fillOpacity="0.8" stroke="#6a35ff" strokeWidth="1" />
                                            <circle cx="43" cy="12" r="2.5" fill="#6a35ff" fillOpacity="0.15" />
                                            <rect x="36" y="18" width="14" height="2" rx="0.5" fill="#6a35ff" fillOpacity="0.3" />
                                            <rect x="36" y="22" width="10" height="2" rx="0.5" fill="#6a35ff" fillOpacity="0.3" />
                                            <rect x="36" y="26" width="14" height="1.5" rx="0.5" fill="#9c63ff" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "API & Integration",
                                    desc: "Seamless third-party integrations and custom API development.",
                                    icon: Database,
                                    color: '#00bcf2',
                                    illustration: (
                                        <svg width="72" height="40" viewBox="0 0 76 42" fill="none" className="overflow-visible">
                                            <line x1="38" y1="21" x2="20" y2="13" stroke="#9c63ff" strokeWidth="0.8" />
                                            <line x1="38" y1="21" x2="20" y2="29" stroke="#9c63ff" strokeWidth="0.8" />
                                            <line x1="38" y1="21" x2="56" y2="13" stroke="#9c63ff" strokeWidth="0.8" />
                                            <line x1="38" y1="21" x2="56" y2="29" stroke="#9c63ff" strokeWidth="0.8" />
                                            <line x1="38" y1="21" x2="38" y2="6" stroke="#9c63ff" strokeWidth="0.8" />
                                            <line x1="38" y1="21" x2="38" y2="36" stroke="#9c63ff" strokeWidth="0.8" />
                                            <circle cx="38" cy="21" r="3.5" fill="#6a35ff" stroke="#fafafd" strokeWidth="1" />
                                            <circle cx="20" cy="13" r="2" fill="#b287ff" />
                                            <circle cx="20" cy="29" r="2" fill="#b287ff" />
                                            <circle cx="56" cy="13" r="2" fill="#b287ff" />
                                            <circle cx="56" cy="29" r="2" fill="#b287ff" />
                                            <circle cx="38" cy="6" r="2" fill="#00bcf2" />
                                            <circle cx="38" cy="36" r="2" fill="#00bcf2" />
                                        </svg>
                                    )
                                }
                            ].map((s) => (
                                <div key={s.title} style={glassCard} className={`flex items-center justify-between gap-2 p-2 cursor-pointer max-w-[240px] w-full mx-auto lg:mr-0 lg:ml-auto ${glassHover}`}>
                                    <div className="flex items-start gap-2 flex-1">
                                        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-purple-100 bg-white/90 shadow-sm">
                                            <s.icon className="w-3 h-3 text-[#6a35ff]" strokeWidth={2.2} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-[9.5px] text-[#22134a] leading-tight">{s.title}</h4>
                                            <p className="text-[7.5px] text-[#6f6a8b] leading-normal mt-0.5">{s.desc}</p>
                                        </div>
                                    </div>
                                    <div className="shrink-0 flex items-center justify-center w-16 h-10 select-none pointer-events-none">
                                        {s.illustration}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
