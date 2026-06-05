import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp, Target, Users, Activity, Search, Mail, Phone, Globe,
    BarChart3, Award, Clock,
    Key, Cpu, BookOpen, MapPin, Share2, Compass, Shield,
    Link, Megaphone, DollarSign, Sparkles, FileText, Code
} from 'lucide-react';

// Google Partner and Microsoft Advertising Partner Logos as custom SVG Components
const GooglePartnerLogo = () => (
    <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-md border border-white/50 px-2.5 py-1.5 rounded-xl shadow-sm hover:scale-105 transition-transform duration-300 select-none">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        <div className="flex flex-col text-left">
            <span className="text-[6px] text-slate-400 uppercase tracking-widest font-black leading-none">Google</span>
            <span className="text-[9px] text-[#1e1b4b] font-black leading-none mt-0.5">Partner</span>
        </div>
    </div>
);

const MicrosoftPartnerLogo = () => (
    <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-md border border-white/50 px-2.5 py-1.5 rounded-xl shadow-sm hover:scale-105 transition-transform duration-300 select-none">
        <div className="grid grid-cols-2 gap-[2px] w-4.5 h-4.5 shrink-0">
            <div className="bg-[#F25022] w-2 h-2 rounded-[1px]"></div>
            <div className="bg-[#7FBA00] w-2 h-2 rounded-[1px]"></div>
            <div className="bg-[#00A4EF] w-2 h-2 rounded-[1px]"></div>
            <div className="bg-[#FFB900] w-2 h-2 rounded-[1px]"></div>
        </div>
        <div className="flex flex-col text-left">
            <span className="text-[6px] text-slate-400 uppercase tracking-widest font-black leading-none">Microsoft Advertising</span>
            <span className="text-[9px] text-[#1e1b4b] font-black leading-none mt-0.5">Partner</span>
        </div>
    </div>
);



// ─── 1. 3D Canvas Wireframe Globe Component ─────────────────────────────
function ThreeDWireframeGlobe({ mousePosition }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        const numLatitudes = 8;
        const numLongitudes = 14;
        const radius = 110;

        // Generate sphere vertices
        const vertices = [];
        for (let i = 0; i < numLatitudes; i++) {
            const lat = (Math.PI * i) / (numLatitudes - 1) - Math.PI / 2;
            const cosLat = Math.cos(lat);
            const sinLat = Math.sin(lat);
            for (let j = 0; j < numLongitudes; j++) {
                const lon = (Math.PI * 2 * j) / numLongitudes;
                const x = radius * cosLat * Math.cos(lon);
                const y = radius * sinLat;
                const z = radius * cosLat * Math.sin(lon);
                vertices.push({ x, y, z });
            }
        }

        // Generate edges (mesh connections with diagonal triangulation)
        const edges = [];
        for (let i = 0; i < numLatitudes; i++) {
            for (let j = 0; j < numLongitudes; j++) {
                const idx = i * numLongitudes + j;
                // Connect to next longitude node
                const idxNextLon = i * numLongitudes + ((j + 1) % numLongitudes);
                edges.push([idx, idxNextLon]);

                // Connect to next latitude node
                if (i < numLatitudes - 1) {
                    const idxNextLat = (i + 1) * numLongitudes + j;
                    edges.push([idx, idxNextLat]);

                    // Diagonal connection
                    const idxDiag = (i + 1) * numLongitudes + ((j + 1) % numLongitudes);
                    edges.push([idx, idxDiag]);
                }
            }
        }

        let angleY = 0;
        let angleX = 0;

        const render = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const dpr = window.devicePixelRatio || 1;

            if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }

            ctx.clearRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;

            // Increment rotation angles, incorporating mouse movement slightly
            angleY += 0.002 + (mousePosition.x * 0.015);
            angleX += 0.001 + (mousePosition.y * 0.015);

            const cosY = Math.cos(angleY);
            const sinY = Math.sin(angleY);
            const cosX = Math.cos(angleX);
            const sinX = Math.sin(angleX);

            // Project vertices in 3D
            const projected = vertices.map(v => {
                // Rotate X
                let y1 = v.y * cosX - v.z * sinX;
                let z1 = v.y * sinX + v.z * cosX;

                // Rotate Y
                let x2 = v.x * cosY - z1 * sinY;
                let z2 = v.x * sinY + z1 * cosY;

                // Perspective projection
                const distance = 300;
                const scale = distance / (distance + z2);
                const px = x2 * scale + centerX;
                const py = y1 * scale + centerY;

                return { x: px, y: py, z: z2 };
            });

            // Draw edges with depth cueing
            edges.forEach(([i1, i2]) => {
                const p1 = projected[i1];
                const p2 = projected[i2];
                const avgZ = (p1.z + p2.z) / 2;

                const minZ = -radius * 1.2;
                const maxZ = radius * 1.2;
                const normalizedZ = (avgZ - minZ) / (maxZ - minZ); // 0 to 1
                const opacity = Math.max(0.08, Math.min(0.65, 0.7 - normalizedZ * 0.6));

                let color;
                if (avgZ < 0) {
                    // Front edges: glowing neon pink/magenta
                    color = `rgba(236, 72, 153, ${opacity})`;
                } else {
                    // Back edges: semi-transparent purple/indigo
                    color = `rgba(139, 92, 246, ${opacity * 0.45})`;
                }

                ctx.strokeStyle = color;
                ctx.lineWidth = avgZ < 0 ? 1.4 : 0.8;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            });

            // Draw vertices
            projected.forEach(p => {
                const minZ = -radius * 1.2;
                const maxZ = radius * 1.2;
                const normalizedZ = (p.z - minZ) / (maxZ - minZ);
                const opacity = Math.max(0.15, Math.min(0.9, 0.95 - normalizedZ * 0.8));
                const size = Math.max(1, Math.min(3.5, 3.8 - normalizedZ * 2.5));

                ctx.fillStyle = p.z < 0 ? `rgba(255, 255, 255, ${opacity})` : `rgba(236, 72, 153, ${opacity * 0.75})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fill();

                // Bright node highlight for foreground points
                if (p.z < -radius * 0.4) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, size * 2.2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(168, 85, 247, ${opacity * 0.35})`;
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePosition]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full pointer-events-none filter drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]"
        />
    );
}

// ─── 2. Main Center 3D Search Core Animation ────────────────────────────────
function SeoSearchCoreAnimation({ mousePosition }) {
    const [searchValue, setSearchValue] = useState('');

    // Typing simulation hook for the search bar placeholder
    const keywords = [
        "digital marketing agency",
        "seo services",
        "web development company",
        "ecommerce solutions",
        "custom software development"
    ];
    const [keywordIdx, setKeywordIdx] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const fullWord = keywords[keywordIdx];

        const tick = () => {
            if (!isDeleting) {
                setDisplayedText(fullWord.substring(0, displayedText.length + 1));
                if (displayedText.length === fullWord.length) {
                    // Stay on the typed word for 2.2 seconds before starting to delete
                    timer = setTimeout(() => setIsDeleting(true), 2200);
                } else {
                    timer = setTimeout(tick, 90);
                }
            } else {
                setDisplayedText(fullWord.substring(0, displayedText.length - 1));
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setKeywordIdx((prev) => (prev + 1) % keywords.length);
                    // Pause briefly before typing the next word
                    timer = setTimeout(tick, 400);
                } else {
                    timer = setTimeout(tick, 45);
                }
            }
        };

        timer = setTimeout(tick, isDeleting ? 40 : 90);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, keywordIdx]);

    return (
        <div className="relative w-full max-w-[500px] h-[550px] flex items-center justify-center select-none overflow-visible">
            {/* Inline stylesheet for path dash animations */}
            <style>{`
                @keyframes dash {
                    to {
                        stroke-dashoffset: -40;
                    }
                }
            `}</style>

            {/* Background glow radial */}
            <div
                className="absolute inset-0 pointer-events-none rounded-full blur-[100px]"
                style={{
                    background: 'radial-gradient(circle at center, rgba(168,85,247,0.22) 0%, rgba(99,102,241,0.08) 50%, transparent 80%)',
                    transform: `translate(${mousePosition.x * -12}px, ${mousePosition.y * -12}px)`
                }}
            />

            {/* SVG Connector Lines from Orbiting Badges to Center */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 500 550">
                <defs>
                    <linearGradient id="line-neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#db2777" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.75" />
                    </linearGradient>
                    <filter id="svg-neon-blur">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Bottom-Left Badge to Center */}
                <path
                    d="M 98,342 Q 160,320 250,275"
                    fill="none"
                    stroke="url(#line-neon-gradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    style={{ animation: 'dash 1.5s linear infinite' }}
                    filter="url(#svg-neon-blur)"
                />

                {/* Bottom-Right Badge to Center */}
                <path
                    d="M 402,342 Q 340,320 250,275"
                    fill="none"
                    stroke="url(#line-neon-gradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    style={{ animation: 'dash 1.5s linear infinite' }}
                    filter="url(#svg-neon-blur)"
                />
            </svg>

            {/* Layer 1: Holographic Globe Orbiting Rings */}
            <div
                className="absolute inset-0 flex items-center justify-center overflow-visible z-10"
                style={{ transform: 'perspective(1200px) rotateX(10deg)' }}
            >
                {/* Outer Ring: Rotating Clockwise and Tilted */}
                <motion.div
                    className="absolute w-[390px] h-[390px] rounded-full border border-purple-500/40 border-dashed"
                    style={{
                        rotateX: 72,
                        rotateY: 12,
                        boxShadow: '0 0 25px rgba(168, 85, 247, 0.15), inset 0 0 25px rgba(168, 85, 247, 0.08)'
                    }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                />

                {/* Medium Inner Ring: Rotating Counter-Clockwise and Tilted */}
                <motion.div
                    className="absolute w-[340px] h-[340px] rounded-full border-[2.5px] border-pink-400/50 border-double"
                    style={{
                        rotateX: 68,
                        rotateY: -12,
                        boxShadow: '0 0 20px rgba(236, 72, 153, 0.2), inset 0 0 20px rgba(236, 72, 153, 0.1)'
                    }}
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Cyan Ring: Tilted and Rotating Clockwise */}
                <motion.div
                    className="absolute w-[290px] h-[290px] rounded-full border-[1.5px] border-cyan-400/50"
                    style={{
                        rotateX: 75,
                        rotateY: 6,
                        boxShadow: '0 0 25px rgba(6, 182, 212, 0.25), inset 0 0 15px rgba(6, 182, 212, 0.12)'
                    }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />

                {/* Geodesic Mesh: 3D Canvas Wireframe Globe wrapped around the sphere */}
                <div className="w-[285px] h-[285px] absolute z-20 flex items-center justify-center pointer-events-none">
                    <ThreeDWireframeGlobe mousePosition={mousePosition} />
                </div>

                {/* Purple Crystal Glass Sphere */}
                <div
                    className="absolute z-15 w-[210px] h-[210px] rounded-full border border-white/40 shadow-[0_0_50px_rgba(168,85,247,0.3),_inset_0_10px_30px_rgba(255,255,255,0.45),_inset_0_-20px_50px_rgba(124,58,237,0.6),_0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.35) 0%, rgba(168, 85, 247, 0.25) 50%, rgba(124, 58, 237, 0.75) 100%)',
                        backdropFilter: 'blur(4px)'
                    }}
                >
                    {/* Inner Dark Core */}
                    <div
                        className="w-[125px] h-[125px] rounded-full flex items-center justify-center border border-purple-500/30"
                        style={{
                            background: 'radial-gradient(circle, rgba(23, 10, 56, 0.95) 0%, rgba(9, 4, 24, 0.98) 100%)',
                            boxShadow: '0 0 30px rgba(124, 58, 237, 0.55), inset 0 0 20px rgba(0,0,0,0.85)'
                        }}
                    >
                        {/* Center Magnifying Glass (Core) */}
                        <Search className="w-13 h-13 text-white stroke-[2.6] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.95)] drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                    </div>
                </div>
            </div>

            {/* Layer 3: Orbiting Glassmorphic Cards (Floating Badges matching Image 2) */}
            {/* Bottom-Left: User Profile Badge */}
            <motion.div
                className="absolute bottom-[180px] left-[70px] z-30 flex items-center justify-center w-14 h-14 rounded-full border border-white/60 bg-white/90 backdrop-blur-md shadow-[0_8px_32px_rgba(31,27,75,0.15)] hover:scale-110 transition-transform duration-300"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Users className="w-6 h-6 text-purple-600 filter drop-shadow-[0_0_1px_rgba(0,0,0,0.05)]" />
            </motion.div>

            {/* Bottom-Right: Concentric target radar badge */}
            <motion.div
                className="absolute bottom-[180px] right-[70px] z-30 flex items-center justify-center w-14 h-14 rounded-full border border-white/60 bg-white/90 backdrop-blur-md shadow-[0_8px_32px_rgba(31,27,75,0.15)] hover:scale-110 transition-transform duration-300"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <div className="relative flex items-center justify-center w-6 h-6">
                    <div className="absolute w-6 h-6 rounded-full border-2 border-purple-600/35 animate-ping" />
                    <div className="absolute w-5 h-5 rounded-full border-2 border-purple-600/60" />
                    <div className="absolute w-3 h-3 rounded-full border-2 border-purple-600" />
                    <div className="w-1 h-1 rounded-full bg-purple-600" />
                </div>
            </motion.div>

            {/* Layer 4: Glassmorphic Search Bar (Positioned Bottom-Most, with Typing Search Animation) */}
            <motion.div
                className="absolute z-40 bottom-12 w-[390px] h-14 rounded-full border border-white/70 bg-white/70 backdrop-blur-[20px] shadow-[0_20px_45px_-12px_rgba(139,92,246,0.22),_inset_0_1.5px_2.5px_rgba(255,255,255,0.9)] flex items-center justify-between px-1.5 overflow-hidden"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg)`
                }}
            >
                <div className="flex items-center flex-1 px-3 gap-2">
                    <Search className="w-4.5 h-4.5 text-purple-500 shrink-0" />
                    <input
                        type="text"
                        placeholder={displayedText}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-full bg-transparent border-none text-[13.5px] font-bold text-slate-800 placeholder-slate-400 outline-none"
                    />
                </div>

                <motion.button
                    className="h-11 px-6 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-extrabold flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/25 cursor-pointer shrink-0"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168, 85, 247, 0.45)' }}
                    whileTap={{ scale: 0.97 }}
                >
                    <Search className="w-4 h-4 stroke-[2.6]" />
                    <span className="text-[12px] tracking-wide font-black">Analyze</span>
                </motion.button>
            </motion.div>

            {/* Layer 5: 3D Platform / Pedestal */}
            <div className="absolute bottom-4 w-full flex flex-col items-center justify-center z-20 pointer-events-none">
                <div className="absolute bottom-12 w-[100px] h-[160px] bg-gradient-to-t from-purple-500/30 via-purple-500/3 to-transparent blur-[12px] z-0" />

                {/* Vertical holographic projection rays */}
                <div className="absolute bottom-12 w-[180px] h-[240px] pointer-events-none overflow-hidden z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/15 via-pink-500/4 to-transparent blur-[10px]" style={{ clipPath: 'polygon(15% 100%, 85% 100%, 70% 0%, 30% 0%)' }} />

                    {/* Dynamic rising rays */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bottom-0 w-[1.5px] bg-gradient-to-t from-purple-400 via-pink-300 to-transparent"
                            style={{
                                left: `${15 + i * 18}%`,
                                height: '120px',
                                opacity: 0
                            }}
                            animate={{
                                y: [120, -180],
                                opacity: [0, 0.75, 0],
                            }}
                            transition={{
                                duration: 2.2 + i * 0.3,
                                repeat: Infinity,
                                delay: i * 0.35,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>

                {/* Pedestal Waves (Enhanced Glow & Waves) */}
                <motion.div
                    className="absolute bottom-8 w-[240px] h-[60px] border-[2px] border-purple-500/60 rounded-full blur-[1px]"
                    style={{ transform: 'rotateX(75deg)' }}
                    animate={{ scale: [0.8, 1.4], opacity: [0.7, 0] }}
                    transition={{ duration: 2.3, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute bottom-8 w-[240px] h-[60px] border-[1.5px] border-cyan-400/50 rounded-full blur-[1px]"
                    style={{ transform: 'rotateX(75deg)' }}
                    animate={{ scale: [0.6, 1.2], opacity: [0.6, 0] }}
                    transition={{ duration: 2.3, repeat: Infinity, delay: 1.15, ease: "easeOut" }}
                />

                {/* 3D SVG Pedestal (Brightened Neon Glow) */}
                <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible filter drop-shadow-lg">
                    <defs>
                        <filter id="pedestal-shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                        </filter>
                        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <linearGradient id="metal-bottom-side" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#080711" />
                            <stop offset="25%" stopColor="#1a153b" />
                            <stop offset="50%" stopColor="#31226e" />
                            <stop offset="75%" stopColor="#1a153b" />
                            <stop offset="100%" stopColor="#080711" />
                        </linearGradient>
                        <radialGradient id="metal-bottom-top" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#1f1847" />
                            <stop offset="80%" stopColor="#0d0a21" />
                            <stop offset="100%" stopColor="#05030d" />
                        </radialGradient>
                        <linearGradient id="metal-mid-side" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1a0b36" />
                            <stop offset="30%" stopColor="#4c1d95" />
                            <stop offset="50%" stopColor="#701a75" />
                            <stop offset="70%" stopColor="#4c1d95" />
                            <stop offset="100%" stopColor="#1a0b36" />
                        </linearGradient>
                        <radialGradient id="metal-mid-top" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#3b0764" />
                            <stop offset="85%" stopColor="#1e1b4b" />
                            <stop offset="100%" stopColor="#0f0728" />
                        </radialGradient>
                        <linearGradient id="metal-top-side" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#4b5563" />
                            <stop offset="20%" stopColor="#e5e7eb" />
                            <stop offset="50%" stopColor="#ffffff" />
                            <stop offset="80%" stopColor="#e5e7eb" />
                            <stop offset="100%" stopColor="#4b5563" />
                        </linearGradient>
                        <radialGradient id="metal-top-top" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="60%" stopColor="#cbd5e1" />
                            <stop offset="95%" stopColor="#94a3b8" />
                            <stop offset="100%" stopColor="#475569" />
                        </radialGradient>
                    </defs>

                    <ellipse cx="170" cy="100" rx="145" ry="24" fill="rgba(0,0,0,0.35)" filter="url(#pedestal-shadow)" />
                    <path d="M 20,85 A 150,26 0 0,0 320,85 L 320,100 A 150,26 0 0,1 20,100 Z" fill="url(#metal-bottom-side)" />
                    <ellipse cx="170" cy="85" rx="150" ry="26" fill="url(#metal-bottom-top)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <ellipse cx="170" cy="85" rx="150.5" ry="26.5" fill="none" stroke="#7c3aed" strokeWidth="2.2" filter="url(#neon-glow)" opacity="0.8" />

                    <path d="M 45,65 A 125,21 0 0,0 295,65 L 295,78 A 125,21 0 0,1 45,78 Z" fill="url(#metal-mid-side)" />
                    <ellipse cx="170" cy="65" rx="125" ry="21" fill="url(#metal-mid-top)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <ellipse cx="170" cy="65" rx="125.5" ry="21.5" fill="none" stroke="#db2777" strokeWidth="2.2" filter="url(#neon-glow)" opacity="0.85" />

                    <path d="M 75,48 A 95,16 0 0,0 265,48 L 265,58 A 95,16 0 0,1 75,58 Z" fill="url(#metal-top-side)" />
                    <ellipse cx="170" cy="48" rx="95" ry="16" fill="url(#metal-top-top)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                    <ellipse cx="170" cy="48" rx="95.5" ry="16.5" fill="none" stroke="#06b6d4" strokeWidth="2.8" filter="url(#neon-glow)" opacity="0.9" />

                    <ellipse cx="170" cy="48" rx="75" ry="12.5" fill="none" stroke="#d946ef" strokeWidth="1.5" opacity="0.6" />
                    <ellipse cx="170" cy="48" rx="55" ry="9" fill="none" stroke="#06b6d4" strokeWidth="1.8" opacity="0.75" />
                    <ellipse cx="170" cy="48" rx="30" ry="5" fill="#ffffff" filter="url(#neon-glow)" opacity="0.9" />
                </svg>
            </div>
        </div>
    );
}

// ─── 2. Left Dashboard Cards (Angled Left 3D) ───────────────────────────────
function OrganicTrafficCard({ mousePosition }) {
    return (
        <div
            className="glassmorphic-card glass-card-3d-left w-full p-4 rounded-2xl flex flex-col justify-between"
            style={{
                transform: `perspective(1200px) rotateY(${14 + mousePosition.x * 4}deg) rotateX(${4 + mousePosition.y * -4}deg) rotateZ(-1deg)`,
                minHeight: '200px'
            }}
        >
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black leading-none">Organic Traffic</span>
                    <p className="text-[23px] font-black text-[#1e1b4b] leading-tight mt-1">125,680</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/15">
                    <TrendingUp className="w-3 h-3" />
                    <span>+48.6%</span>
                </div>
            </div>

            <div className="flex-1 w-full h-[95px] mt-2 relative">
                <svg className="w-full h-full" viewBox="0 0 240 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="traffic-glow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.35)" />
                            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                        </linearGradient>
                        <linearGradient id="purple-to-pink" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="50%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#f43f5e" />
                        </linearGradient>
                    </defs>

                    <line x1="0" y1="20" x2="240" y2="20" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                    <line x1="0" y1="50" x2="240" y2="50" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                    <line x1="0" y1="80" x2="240" y2="80" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />

                    <path
                        d="M 0,90 C 30,75 50,85 80,60 C 110,35 130,45 160,20 C 190,-5 210,15 240,10 L 240,100 L 0,100 Z"
                        fill="url(#traffic-glow)"
                    />

                    <motion.path
                        d="M 0,90 C 30,75 50,85 80,60 C 110,35 130,45 160,20 C 190,-5 210,15 240,10"
                        fill="none"
                        stroke="url(#purple-to-pink)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />

                    {[
                        { cx: 80, cy: 60 },
                        { cx: 160, cy: 20 },
                        { cx: 240, cy: 10 }
                    ].map((dot, idx) => (
                        <g key={idx}>
                            <circle cx={dot.cx} cy={dot.cy} r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
                            <circle cx={dot.cx} cy={dot.cy} r="8" fill="rgba(168,85,247,0.2)" className="animate-ping" />
                        </g>
                    ))}
                </svg>
            </div>
            <span className="text-[8px] text-slate-400 font-semibold mt-1">Daily updates • Organic tracking system</span>
        </div>
    );
}

function KeywordRankingsCard({ mousePosition }) {
    const donutSegments = [
        { label: 'Top 3 Positions', value: 32.5, color: '#6366f1', offset: 0 },
        { label: '4-10 Positions', value: 41.2, color: '#a855f7', offset: 32.5 },
        { label: '11-50 Positions', value: 18.7, color: '#ec4899', offset: 73.7 },
        { label: '51-100 Positions', value: 7.6, color: '#f97316', offset: 92.4 }
    ];

    return (
        <div
            className="glassmorphic-card glass-card-3d-left w-full p-4 rounded-2xl flex flex-col justify-between"
            style={{
                transform: `perspective(1200px) rotateY(${14 + mousePosition.x * 4}deg) rotateX(${4 + mousePosition.y * -4}deg) rotateZ(-1deg)`,
                minHeight: '200px'
            }}
        >
            <div>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black leading-none">Keyword Rankings</span>
            </div>

            <div className="flex items-center justify-between gap-3 mt-2">
                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="5" />
                        {donutSegments.map((seg, idx) => {
                            const strokeDash = `${seg.value} ${100 - seg.value}`;
                            const strokeOffset = 100 - seg.offset;
                            return (
                                <motion.circle
                                    key={idx}
                                    cx="18"
                                    cy="18"
                                    r="14"
                                    fill="none"
                                    stroke={seg.color}
                                    strokeWidth="5"
                                    strokeDasharray={strokeDash}
                                    strokeDashoffset={strokeOffset}
                                    initial={{ strokeDashoffset: 100 }}
                                    whileInView={{ strokeDashoffset: strokeOffset }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                                />
                            );
                        })}
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                        <span className="text-[14px] font-black text-[#1e1b4b] leading-none">2,450</span>
                        <span className="text-[5px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Total Keywords</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-1 justify-center">
                    {donutSegments.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-1 text-[9px] font-bold">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                                <span className="text-slate-500 font-bold truncate max-w-[70px]">{item.label}</span>
                            </div>
                            <span className="text-[#1e1b4b] font-black">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function BacklinksOverviewCard({ mousePosition }) {
    const bars = [40, 55, 30, 70, 65, 80, 95];

    return (
        <div
            className="glassmorphic-card glass-card-3d-left w-full p-4 rounded-2xl flex flex-col justify-between"
            style={{
                transform: `perspective(1200px) rotateY(${14 + mousePosition.x * 4}deg) rotateX(${4 + mousePosition.y * -4}deg) rotateZ(-1deg)`,
                minHeight: '200px'
            }}
        >
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black leading-none">Backlinks Overview</span>
                    <p className="text-[23px] font-black text-[#1e1b4b] leading-none mt-1">12,450</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/15">
                    <TrendingUp className="w-3 h-3" />
                    <span>+35.4%</span>
                </div>
            </div>

            <div className="flex-1 w-full h-[85px] mt-3 flex items-end justify-between px-1 gap-1.5">
                {bars.map((height, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end">
                        <div className="w-full relative rounded-t-md overflow-hidden bg-slate-100 flex flex-col justify-end h-full">
                            <motion.div
                                className="w-full rounded-t-md bg-gradient-to-t from-violet-600 to-pink-500 shadow-lg"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: idx * 0.08, ease: "easeOut" }}
                            />
                        </div>
                        <span className="text-[7.5px] text-slate-400 font-bold mt-1 uppercase">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][idx]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── 3. Right Dashboard Cards (Angled Right 3D) ──────────────────────────────
function TrafficOverviewCard({ mousePosition }) {
    const dataset = [
        { organic: 45, paid: 20 },
        { organic: 55, paid: 25 },
        { organic: 40, paid: 18 },
        { organic: 65, paid: 30 },
        { organic: 60, paid: 28 },
        { organic: 75, paid: 35 },
        { organic: 85, paid: 40 }
    ];

    return (
        <div
            className="glassmorphic-card glass-card-3d-right w-full p-4 rounded-2xl flex flex-col justify-between"
            style={{
                transform: `perspective(1200px) rotateY(${-14 + mousePosition.x * 4}deg) rotateX(${4 + mousePosition.y * -4}deg) rotateZ(1deg)`,
                minHeight: '200px'
            }}
        >
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black leading-none">Traffic Overview</span>
                    <p className="text-[23px] font-black text-[#1e1b4b] leading-tight mt-1">168,250</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/15">
                        <TrendingUp className="w-3 h-3" />
                        <span>+52.7%</span>
                    </div>
                    <div className="flex gap-1.5 text-[6px] uppercase font-black tracking-wider text-slate-400 mt-1">
                        <div className="flex items-center gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-violet-600" />
                            <span>Org</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-pink-500" />
                            <span>Paid</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full h-[85px] mt-3 relative">
                <svg className="w-full h-full" viewBox="0 0 240 100" preserveAspectRatio="none">
                    <line x1="0" y1="50" x2="240" y2="50" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                    {dataset.map((data, idx) => {
                        const width = 10;
                        const gap = 22;
                        const x = 12 + idx * (width * 2 + gap);
                        return (
                            <g key={idx}>
                                <motion.rect
                                    x={x}
                                    y={100 - data.organic}
                                    width={width}
                                    height={data.organic}
                                    rx="2.5"
                                    fill="#7c3aed"
                                    initial={{ y: 100, height: 0 }}
                                    whileInView={{ y: 100 - data.organic, height: data.organic }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: idx * 0.06, ease: "easeOut" }}
                                />
                                <motion.rect
                                    x={x + width + 2}
                                    y={100 - data.paid}
                                    width={width}
                                    height={data.paid}
                                    rx="2.5"
                                    fill="#ec4899"
                                    initial={{ y: 100, height: 0 }}
                                    whileInView={{ y: 100 - data.paid, height: data.paid }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: idx * 0.06 + 0.08, ease: "easeOut" }}
                                />
                            </g>
                        );
                    })}
                </svg>
                <div className="flex justify-between px-1 text-[7.5px] text-slate-400 font-bold mt-1 uppercase">
                    {['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((m, i) => (
                        <span key={i}>{m}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function TopKeywordsCard({ mousePosition }) {
    const keywords = [
        { keyword: "digital marketing agency", pos: 1, vol: "12.5K", cpc: "$2.35" },
        { keyword: "seo services", pos: 1, vol: "9.8K", cpc: "$1.89" },
        { keyword: "web development company", pos: 2, vol: "8.2K", cpc: "$3.12" },
        { keyword: "ecommerce solutions", pos: 3, vol: "6.3K", cpc: "$2.45" },
        { keyword: "custom software development", pos: 4, vol: "5.6K", cpc: "$3.75" }
    ];

    return (
        <div
            className="glassmorphic-card glass-card-3d-right w-full p-4 rounded-2xl flex flex-col justify-between"
            style={{
                transform: `perspective(1200px) rotateY(${-14 + mousePosition.x * 4}deg) rotateX(${4 + mousePosition.y * -4}deg) rotateZ(1deg)`,
                minHeight: '200px'
            }}
        >
            <div className="flex justify-between items-center">
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black leading-none">Top Keywords</span>
                <span className="text-[8px] text-purple-600 font-black flex items-center gap-0.5">Live <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /></span>
            </div>

            <div className="flex-1 mt-2.5 flex flex-col justify-between">
                <div className="grid grid-cols-12 text-[7px] uppercase font-black tracking-wider text-slate-400 border-b border-slate-100 pb-1 px-1">
                    <div className="col-span-6">Keyword</div>
                    <div className="col-span-2 text-center">Pos</div>
                    <div className="col-span-2 text-right">Vol</div>
                    <div className="col-span-2 text-right">CPC</div>
                </div>

                <div className="flex flex-col divide-y divide-slate-50 py-0.5">
                    {keywords.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-12 text-[9px] font-bold text-slate-700 py-1 px-1 items-center hover:bg-purple-500/5 rounded-md transition-colors duration-200">
                            <div className="col-span-6 text-slate-800 font-black truncate">{item.keyword}</div>
                            <div className="col-span-2 text-center">
                                <span className="bg-purple-100 text-purple-700 font-black px-1 py-0.2 rounded text-[7.5px]">
                                    {item.pos}
                                </span>
                            </div>
                            <div className="col-span-2 text-right text-slate-500">{item.vol}</div>
                            <div className="col-span-2 text-right text-emerald-600 font-extrabold">{item.cpc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ConversionsCard({ mousePosition }) {
    return (
        <div
            className="glassmorphic-card glass-card-3d-right w-full p-4 rounded-2xl flex flex-col justify-between"
            style={{
                transform: `perspective(1200px) rotateY(${-14 + mousePosition.x * 4}deg) rotateX(${4 + mousePosition.y * -4}deg) rotateZ(1deg)`,
                minHeight: '200px'
            }}
        >
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black leading-none">Conversions</span>
                    <p className="text-[23px] font-black text-[#1e1b4b] leading-none mt-1">9,850</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/15">
                    <TrendingUp className="w-3 h-3" />
                    <span>+60.3%</span>
                </div>
            </div>

            <div className="flex-1 w-full h-[95px] mt-2 relative">
                <svg className="w-full h-full" viewBox="0 0 240 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="conversions-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                            <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                        </linearGradient>
                    </defs>

                    <path
                        d="M 0,95 C 40,90 60,60 100,55 C 140,50 160,20 200,15 C 220,12 230,10 240,5 L 240,100 L 0,100 Z"
                        fill="url(#conversions-grad)"
                    />

                    <motion.path
                        d="M 0,95 C 40,90 60,60 100,55 C 140,50 160,20 200,15 C 220,12 230,10 240,5"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <circle cx="100" cy="55" r="4" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
                    <circle cx="200" cy="15" r="4" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
                </svg>
            </div>
            <span className="text-[8px] text-slate-400 font-semibold mt-1">Goal completion • Funnel conversion optimization</span>
        </div>
    );
}

// ─── 4. Service Item Component (Vertical listing layout) ────────────────────
function ServiceListItem({ title, description, Icon, index, side }) {
    const isLeft = side === 'left';
    
    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ scale: 1.025, y: -2 }}
            className="group relative rounded-2xl p-2.5 px-3 border border-white/70 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md hover:border-purple-300/60 transition-all duration-300 flex items-center gap-2.5 text-left"
        >
            {isLeft ? (
                <>
                    {/* Semicircular notch on the left border */}
                    <div className="absolute top-1/2 -left-[6.5px] -translate-y-1/2 w-3 h-3 rounded-full bg-[#f8f6fc] border border-purple-200 z-10" />
                    
                    <div className="w-7.5 h-7.5 rounded-full flex items-center justify-center shrink-0 bg-[#f0ebff] text-purple-600 shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-4 h-4 text-purple-600" />
                    </div>
                </>
            ) : (
                <>
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-purple-500/10 rounded-l-2xl group-hover:bg-purple-600 transition-colors duration-300" />
                    
                    <div className="w-7.5 h-7.5 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-tr from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/10 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-4 h-4 text-white" />
                    </div>
                </>
            )}

            <div className="flex-1 flex flex-col justify-center min-w-0">
                <p className="text-[11.5px] font-black text-[#1e1b4b] leading-tight group-hover:text-purple-600 transition-colors duration-300">
                    {title}
                </p>
                <p className="text-[8px] text-slate-500 leading-normal mt-1 line-clamp-2">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

// ─── 5. Bottom Left Computer Monitor Illustration ───────────────────────────
function DesktopMonitorIllustration() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center justify-center w-full max-w-[280px] h-[220px] mx-auto overflow-visible select-none mt-2"
        >
            <div className="relative w-52 h-32 bg-slate-900 border-[3px] border-slate-700 rounded-t-xl shadow-2xl flex flex-col overflow-hidden">
                <div className="flex-1 bg-[#100824] p-1.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-white/5 pb-0.5">
                        <div className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-red-500" />
                            <div className="w-1 h-1 rounded-full bg-yellow-500" />
                            <div className="w-1 h-1 rounded-full bg-green-500" />
                            <span className="text-[5px] text-purple-300 font-bold ml-0.5">SEO Audit Screen</span>
                        </div>
                        <span className="text-[4.5px] bg-purple-500/20 text-purple-300 px-1 rounded font-black">98.5% SCORE</span>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-1 items-center py-1">
                        <div className="bg-white/5 rounded p-0.5 h-full flex flex-col justify-between">
                            <span className="text-[3.5px] text-slate-400 font-black">Keyword Speed</span>
                            <svg className="w-full h-6" viewBox="0 0 100 50">
                                <path d="M 0,45 Q 25,10 50,30 T 100,5" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                                <path d="M 0,45 Q 25,10 50,30 T 100,5 L 100,50 L 0,50 Z" fill="rgba(168,85,247,0.15)" />
                            </svg>
                        </div>
                        <div className="bg-white/5 rounded p-0.5 h-full flex flex-col justify-between">
                            <span className="text-[3.5px] text-slate-400 font-black">Backlink Growth</span>
                            <div className="flex items-end gap-[1.5px] h-6 justify-between">
                                {[12, 28, 18, 35, 24, 45].map((h, i) => (
                                    <div key={i} className="flex-1 bg-pink-500 rounded-t-[1px]" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-[4px] text-slate-400">
                        <span>Keywords Audited: 12.5k</span>
                        <span className="text-emerald-400 font-bold">+18.5%</span>
                    </div>
                </div>

                <div className="h-4 bg-slate-800 border-t border-slate-700 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full blur-[0.5px]" />
                </div>
            </div>

            <div className="w-8 h-9 bg-slate-400 shadow-inner -mt-[2px] relative z-10"
                style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
            />
            <div className="-mt-[2px] w-20 h-1.5 bg-slate-500 rounded-sm relative z-20 shadow-md" />

            <div className="flex items-center justify-center gap-3 mt-2">
                <div className="w-24 h-1.5 bg-slate-300 border border-slate-400 rounded-sm flex items-center justify-around px-1 shadow-sm">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1.5 h-[1px] bg-slate-500 rounded-[0.5px]" />
                    ))}
                </div>
                <div className="w-3 h-1.5 bg-slate-300 border border-slate-400 rounded-full shadow-sm" />
            </div>

            <div className="absolute bottom-1 right-2 flex flex-col items-center">
                <div className="flex gap-0.5 justify-center">
                    <div className="w-1 h-2 bg-emerald-500 rounded-full -rotate-12 transform origin-bottom" />
                    <div className="w-1 h-3.5 bg-emerald-600 rounded-full transform origin-bottom" />
                    <div className="w-1 h-2 bg-emerald-500 rounded-full rotate-12 transform origin-bottom" />
                </div>
                <div className="w-3 h-2.5 bg-amber-800 rounded-b-md shadow-inner border border-amber-900" />
            </div>
        </motion.div>
    );
}

// ─── 6. Bottom Right 3D SEO Typography Graphic ──────────────────────────────
function IsometricSeo3DGraphic() {
    return (
        <motion.div
            className="relative w-full max-w-[280px] h-[180px] flex items-center justify-center select-none overflow-visible mx-auto"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="absolute inset-0 flex items-end justify-center gap-3 pb-8 opacity-65 pointer-events-none">
                <div
                    className="w-4 h-16 bg-gradient-to-t from-violet-600/35 to-violet-500/10 rounded-t-md border-t border-purple-400/20"
                    style={{ transform: 'skewY(-10deg)' }}
                />
                <div
                    className="w-4 h-24 bg-gradient-to-t from-purple-500/40 to-pink-500/10 rounded-t-md border-t border-pink-400/20"
                    style={{ transform: 'skewY(-10deg)' }}
                />
                <div
                    className="w-4 h-32 bg-gradient-to-t from-pink-500/45 to-orange-500/10 rounded-t-md border-t border-orange-400/20"
                    style={{ transform: 'skewY(-10deg)' }}
                />
            </div>

            <svg className="absolute w-32 h-32 top-0 right-4 overflow-visible pointer-events-none" viewBox="0 0 100 100">
                <motion.path
                    d="M 10,80 Q 40,65 65,30 L 52,28 L 78,16 L 76,44 L 65,30"
                    fill="none"
                    stroke="url(#arrow-grad)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#arrow-glow)"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
                />
                <defs>
                    <linearGradient id="arrow-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#fb923c" />
                    </linearGradient>
                    <filter id="arrow-glow">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            <svg className="w-48 h-28 overflow-visible drop-shadow-2xl z-10" viewBox="0 0 320 180">
                <g transform="translate(10, 10)">
                    {/* LETTER S */}
                    <g transform="translate(0, 45)">
                        <polygon points="10,0 20,5 20,45 10,40" fill="#4c1d95" />
                        <polygon points="10,40 20,45 60,45 50,40" fill="#581c87" />
                        <polygon points="50,40 60,45 60,75 50,70" fill="#4c1d95" />
                        <polygon points="50,70 60,75 20,75 10,70" fill="#581c87" />
                        <polygon points="10,70 20,75 20,105 10,100" fill="#4c1d95" />
                        <polygon points="10,100 20,105 60,105 50,100" fill="#581c87" />

                        <polygon points="20,5 60,5 50,0 10,0" fill="url(#seo-letter-grad)" />
                        <polygon points="20,5 20,45 10,40 10,0" fill="url(#seo-letter-grad-dark)" />
                        <polygon points="20,45 60,45 50,40 10,40" fill="url(#seo-letter-grad)" />
                        <polygon points="60,45 60,75 50,70 50,40" fill="url(#seo-letter-grad-dark)" />
                        <polygon points="20,75 60,75 50,70 10,70" fill="url(#seo-letter-grad)" />
                        <polygon points="20,75 20,105 10,100 10,70" fill="url(#seo-letter-grad-dark)" />
                        <polygon points="20,105 60,105 50,100 10,100" fill="url(#seo-letter-grad)" />
                    </g>

                    {/* LETTER E */}
                    <g transform="translate(100, 45)">
                        <polygon points="10,0 20,5 20,105 10,100" fill="#701a75" />
                        <polygon points="10,100 20,105 60,105 50,100" fill="#86198f" />
                        <polygon points="10,50 20,55 50,55 40,50" fill="#701a75" />
                        <polygon points="10,0 20,5 60,5 50,0" fill="#86198f" />

                        <polygon points="20,5 60,5 50,0 10,0" fill="url(#seo-letter-grad2)" />
                        <polygon points="20,5 20,105 10,100 10,0" fill="url(#seo-letter-grad2-dark)" />
                        <polygon points="20,55 50,55 40,50 10,50" fill="url(#seo-letter-grad2)" />
                        <polygon points="20,105 60,105 50,100 10,100" fill="url(#seo-letter-grad2)" />
                    </g>

                    {/* LETTER O */}
                    <g transform="translate(200, 45)">
                        <polygon points="10,0 20,5 20,105 10,100" fill="#881337" />
                        <polygon points="50,0 60,5 60,105 50,100" fill="#9f1239" />
                        <polygon points="10,0 20,5 60,5 50,0" fill="#881337" />
                        <polygon points="10,100 20,105 60,105 50,100" fill="#9f1239" />

                        <polygon points="20,5 60,5 50,0 10,0" fill="url(#seo-letter-grad3)" />
                        <polygon points="20,5 20,105 10,100 10,0" fill="url(#seo-letter-grad3-dark)" />
                        <polygon points="60,5 60,105 50,100 50,0" fill="url(#seo-letter-grad3-dark)" />
                        <polygon points="20,105 60,105 50,100 10,100" fill="url(#seo-letter-grad3)" />
                    </g>
                </g>

                <defs>
                    <linearGradient id="seo-letter-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="seo-letter-grad-dark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#5b21b6" />
                    </linearGradient>
                    <linearGradient id="seo-letter-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#db2777" />
                    </linearGradient>
                    <linearGradient id="seo-letter-grad2-dark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#db2777" />
                        <stop offset="100%" stopColor="#9d174d" />
                    </linearGradient>
                    <linearGradient id="seo-letter-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f43f5e" />
                        <stop offset="100%" stopColor="#e11d48" />
                    </linearGradient>
                    <linearGradient id="seo-letter-grad3-dark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e11d48" />
                        <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
}

// ─── 7. Bottom Right Contact CTA Card (QR placeholder & Contact info) ───────
function ContactCtaCard() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("vijay@desireinfoweb.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glassmorphic-card p-5 rounded-2xl flex flex-col justify-between h-full border border-white/60 relative overflow-hidden text-left"
        >
            <div className="absolute -top-12 -left-12 w-28 h-28 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex gap-4 items-center justify-between">
                <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                        <h4 className="text-[15px] font-black text-[#1e1b4b] leading-tight">
                            Let’s Grow Your <span className="text-purple-600">Business Online!</span>
                        </h4>
                        <p className="text-[9px] text-slate-500 font-semibold mt-2 leading-normal">
                            Connect with our SEO experts to unlock massive organic traffic and scalable keyword growth strategies.
                        </p>
                    </div>

                    <div className="mt-3 flex flex-col gap-1.5">
                        <a
                            href="https://www.desireinfoweb.com"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-[9px] text-slate-600 hover:text-purple-600 font-black transition-colors duration-200"
                        >
                            <div className="w-5.5 h-5.5 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                                <Globe className="w-3 h-3 text-purple-600" strokeWidth={2} />
                            </div>
                            <span className="truncate">www.desireinfoweb.com</span>
                        </a>

                        <button
                            onClick={handleCopyEmail}
                            className="flex items-center gap-2 text-[9px] text-slate-600 hover:text-purple-600 font-black transition-colors duration-200 cursor-pointer text-left w-full"
                        >
                            <div className="w-5.5 h-5.5 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                                <Mail className="w-3 h-3 text-purple-600" strokeWidth={2} />
                            </div>
                            <div className="flex items-center gap-1 min-w-0 flex-1">
                                <span className="truncate">vijay@desireinfoweb.com</span>
                                {copied && (
                                    <span className="text-[7px] bg-emerald-500 text-white px-1 py-0.2 rounded font-black uppercase shrink-0">Copied</span>
                                )}
                            </div>
                        </button>

                        <a
                            href="tel:+918700468807"
                            className="flex items-center gap-2 text-[9px] text-slate-600 hover:text-purple-600 font-black transition-colors duration-200"
                        >
                            <div className="w-5.5 h-5.5 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                                <Phone className="w-3 h-3 text-purple-600" strokeWidth={2} />
                            </div>
                            <span>+91-8700468807</span>
                        </a>
                    </div>
                </div>

                <div className="w-20 h-20 shrink-0 border border-purple-200/50 bg-white p-1 rounded-xl shadow-inner flex items-center justify-center relative group">
                    <svg className="w-full h-full text-slate-800" viewBox="0 0 100 100">
                        <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                        <rect x="12" y="12" width="11" height="11" fill="currentColor" />
                        <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                        <rect x="77" y="12" width="11" height="11" fill="currentColor" />
                        <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                        <rect x="12" y="77" width="11" height="11" fill="currentColor" />
                        <rect x="45" y="45" width="10" height="10" fill="#a855f7" />
                        <rect x="40" y="10" width="8" height="6" fill="currentColor" />
                        <rect x="55" y="15" width="6" height="12" fill="currentColor" />
                        <rect x="40" y="28" width="18" height="6" fill="currentColor" />
                        <rect x="10" y="40" width="14" height="6" fill="currentColor" />
                        <rect x="15" y="55" width="8" height="8" fill="currentColor" />
                        <rect x="75" y="40" width="15" height="6" fill="currentColor" />
                        <rect x="80" y="55" width="12" height="12" fill="currentColor" />
                        <rect x="40" y="75" width="15" height="8" fill="currentColor" />
                        <rect x="62" y="75" width="6" height="14" fill="currentColor" />
                        <rect x="40" y="60" width="22" height="6" fill="currentColor" />
                        <rect x="75" y="75" width="8" height="6" fill="currentColor" />
                        <rect x="85" y="85" width="10" height="10" fill="currentColor" />
                    </svg>
                    <div className="absolute inset-0 border border-purple-400 rounded-xl group-hover:scale-105 transition-transform duration-300 opacity-20 pointer-events-none" />
                </div>
            </div>
        </motion.div>
    );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function SEOservice() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) - 0.5;
            const y = ((e.clientY - rect.top) / rect.height) - 0.5;
            setMousePosition({ x, y });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    const topMetrics = [
        { value: "10+ Yrs", label: "Exp", Icon: Award },
        { value: "500+", label: "Campaigns", Icon: Target },
        { value: "300+", label: "Clients", Icon: Users },
        { value: "1M+", label: "Ranked", Icon: Search },
        { value: "99%", label: "Retention", Icon: Activity },
        { value: "24/7", label: "Support", Icon: Clock }
    ];

    const leftServices = [
        { title: "SEO Strategy", description: "Customized SEO strategies that drive long-term organic growth and ROI.", Icon: Target },
        { title: "Keyword Research", description: "In-depth keyword analysis to target high-value opportunities and search intent.", Icon: Search },
        { title: "On-Page SEO", description: "Optimize content, structure, and metadata for maximum search engine visibility.", Icon: FileText },
        { title: "Technical SEO", description: "Improve website performance, crawlability, and indexability for better rankings.", Icon: Code },
        { title: "Link Building", description: "High-quality backlinks that boost domain authority and search rankings.", Icon: Link }
    ];

    const rightServices = [
        { title: "Content Marketing", description: "Engaging content that attracts, educates, and converts your audience.", Icon: Megaphone },
        { title: "Local SEO", description: "Dominate local search results and grow your business in your region.", Icon: MapPin },
        { title: "Analytics & Reporting", description: "Advanced analytics and custom reports to track performance and ROI.", Icon: BarChart3 },
        { title: "PPC Advertising", description: "Targeted ad campaigns that drive qualified traffic and increase conversions.", Icon: DollarSign },
        { title: "Social Media Marketing", description: "Build brand awareness and engage your audience across social platforms.", Icon: Share2 }
    ];

    const processSteps = [
        { step: "01", title: "Audit & Analysis", desc: "In-depth website and competitor analysis", Icon: Search },
        { step: "02", title: "Strategy & Planning", desc: "Data-driven strategy tailored to your goals", Icon: Compass },
        { step: "03", title: "Implementation", desc: "Execute SEO & marketing strategies", Icon: Cpu },
        { step: "04", title: "Monitor & Optimize", desc: "Continuous monitoring and performance tuning", Icon: Activity },
        { step: "05", title: "Report & Grow", desc: "Transparent reporting and measurable growth", Icon: TrendingUp }
    ];

    const resultStats = [
        { value: "250%+", label: "Average Traffic Increase", Icon: TrendingUp },
        { value: "150%+", label: "Leads Generated", Icon: Users },
        { value: "TOP 1-3", label: "Keyword Rankings Achieved", Icon: Award },
        { value: "80%+", label: "Increase in Conversions", Icon: Activity },
        { value: "ROI", label: "Driven Strategies", Icon: DollarSign },
        { value: "100%", label: "White Hat SEO", Icon: Shield }
    ];

    return (
        <section
            ref={containerRef}
            id="seo-showcase"
            className="relative w-full overflow-hidden py-10 px-4 md:px-8 select-none"
            style={{
                background: 'linear-gradient(135deg, #f7f3ff 0%, #ffffff 35%, #f2ebff 70%, #ffffff 100%)',
                fontFamily: "'Poppins', 'Inter', sans-serif"
            }}
        >
            <div className="relative z-10 max-w-[1680px] mx-auto flex flex-col gap-6">

                {/* ─── 1. TOP BAR ─── */}
                <header className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                    {/* Brand logo */}
                    <div className="flex items-center gap-3 self-start md:self-center">
                        <img src="/logo.png" alt="DesireInfoWeb Logo" className="w-9 h-9 object-contain" />
                        <div>
                            <div className="font-extrabold text-[17px] text-[#1e3a8a] leading-none">
                                Desire<span className="text-[#4c1d95]">InfoWeb</span>
                            </div>
                            <div className="font-bold text-[8px] text-[#d946ef] mt-0.5 tracking-wider">
                                Your Extended <span className="text-[#ef4444]">Technology Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* KPI metrics strip */}
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2 px-6 bg-white/50 backdrop-blur-md border border-purple-100 rounded-full shadow-sm">
                        {topMetrics.map((stat, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-left">
                                <stat.Icon className="w-3.5 h-3.5 text-purple-500" />
                                <div className="flex flex-col leading-none">
                                    <span className="text-[10px] font-black text-slate-800">{stat.value}</span>
                                    <span className="text-[7.5px] font-bold text-slate-400 mt-0.5">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Partner badges */}
                    <div className="flex items-center gap-3 self-end md:self-center">
                        <GooglePartnerLogo />
                        <MicrosoftPartnerLogo />
                    </div>
                </header>

                {/* ─── 2. MAIN 12-COLUMN INFOGRAPHIC GRID ─── */}
                <div className="grid grid-cols-12 gap-6 lg:gap-4 xl:gap-6 items-stretch w-full relative z-10">

                    {/* COL 1-3: Left Info & Lists (col-span-3) */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col justify-between gap-5">
                        <div className="text-left">
                            <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">
                                Search Engine Optimization
                            </span>
                            <h2 className="text-[26px] font-black text-[#1e1b4b] leading-tight mt-1">
                                Drive Organic <span className="text-purple-600">Growth & Leads</span>
                            </h2>
                            <p className="text-[10px] text-slate-500 leading-relaxed mt-2.5">
                                Dominate search results with our enterprise-grade SEO and content marketing strategies designed to drive sales, visibility, and measurable ROI.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            {leftServices.map((svc, i) => (
                                <ServiceListItem
                                    key={i}
                                    title={svc.title}
                                    description={svc.description}
                                    Icon={svc.Icon}
                                    index={i}
                                    side="left"
                                />
                            ))}
                        </div>
                    </div>

                    {/* COL 4-5: Left Dashboard Cards (col-span-2) */}
                    <div className="col-span-12 lg:col-span-2 flex flex-col justify-between gap-4">
                        <OrganicTrafficCard mousePosition={mousePosition} />
                        <KeywordRankingsCard mousePosition={mousePosition} />
                        <BacklinksOverviewCard mousePosition={mousePosition} />
                    </div>

                    {/* COL 6-7: Center Holographic Core (col-span-2) */}
                    <div className="col-span-12 lg:col-span-2 relative flex items-center justify-center overflow-visible py-12 lg:py-0 min-h-[480px] lg:min-h-0 z-10">
                        <div className="absolute left-1/2 -translate-x-1/2 w-[480px] h-[550px] flex items-center justify-center select-none">
                            <SeoSearchCoreAnimation mousePosition={mousePosition} />
                        </div>
                    </div>

                    {/* COL 8-9: Right Dashboard Cards (col-span-2) */}
                    <div className="col-span-12 lg:col-span-2 flex flex-col justify-between gap-4">
                        <TrafficOverviewCard mousePosition={mousePosition} />
                        <TopKeywordsCard mousePosition={mousePosition} />
                        <ConversionsCard mousePosition={mousePosition} />
                    </div>

                    {/* COL 10-12: Right Info & Lists (col-span-3) */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col justify-between gap-5">
                        <div className="text-left">
                            <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">
                                Scalable Marketing
                            </span>
                            <h2 className="text-[26px] font-black text-[#1e1b4b] leading-tight mt-1">
                                Data-Driven <span className="text-pink-500">SEO Campaigns</span>
                            </h2>
                            <p className="text-[10px] text-slate-500 leading-relaxed mt-2.5">
                                Our integrated digital marketing solutions maximize user acquisition, brand authority, and customer retention using data-backed strategies.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            {rightServices.map((svc, i) => (
                                <ServiceListItem
                                    key={i}
                                    title={svc.title}
                                    description={svc.description}
                                    Icon={svc.Icon}
                                    index={i}
                                    side="right"
                                />
                            ))}
                        </div>
                    </div>

                </div>

                {/* ─── 3. PROCESS TIMELINE AREA ─── */}
                <div className="w-full flex flex-col gap-4 mt-6">
                    <div className="text-center">
                        <h3 className="text-[17px] font-black text-[#1e1b4b] uppercase tracking-widest">
                            Our Proven SEO & Digital Growth Process
                        </h3>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 pt-4 px-4 w-full">
                        <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 hidden md:block z-0 opacity-40" />

                        {processSteps.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center text-center relative z-10 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white border border-purple-100 flex items-center justify-center shadow-sm relative group-hover:scale-105 group-hover:border-purple-300 transition-all duration-300">
                                    <p className="absolute -top-3 -right-3 text-[10px] font-black text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 shadow-sm leading-none">
                                        {p.step}
                                    </p>
                                    <p.Icon className="w-6 h-6 text-purple-600" />
                                </div>
                                <h4 className="text-[12px] font-black text-[#1e1b4b] mt-3 group-hover:text-purple-600 transition-colors">
                                    {p.title}
                                </h4>
                                <p className="text-[9px] text-slate-500 leading-normal mt-1 max-w-[170px]">
                                    {p.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ─── 4. BOTTOM RESULTS STRIP & CTA AREA ─── */}
                <footer className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-6 items-stretch w-full">
                    <div className="col-span-12 lg:col-span-3 flex items-center justify-center">
                        <DesktopMonitorIllustration />
                    </div>

                    <div className="col-span-12 lg:col-span-6 flex flex-col justify-between gap-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {resultStats.map((item, i) => (
                                <div
                                    key={i}
                                    style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.8)' }}
                                    className="p-3 rounded-2xl flex items-center gap-3 backdrop-blur-md shadow-sm"
                                >
                                    <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                                        <item.Icon className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <div className="text-left leading-none">
                                        <p className="text-[13px] font-black text-[#1e1b4b]">{item.value}</p>
                                        <p className="text-[8px] text-slate-400 font-bold mt-1 max-w-[90px]">{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <ContactCtaCard />
                    </div>

                    <div className="col-span-12 lg:col-span-3 flex items-center justify-center">
                        <IsometricSeo3DGraphic />
                    </div>
                </footer>

            </div>
        </section>
    );
}
