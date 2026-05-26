'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import * as d3 from 'd3';


import { cn } from '../lib/utils';
import ThreeScene from './ThreeScene';

// --- Space Starfield Component (Used in Slide 2) ---
function StarField({ count = 200 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-30"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// --- Rotating Earth Component (D3 Wireframe Globe used in Slide 2) ---
function RotatingEarth({
  width = 800,
  height = 600,
  className = "",
  globeColor = "#000000",
  glowColor = "rgba(6, 182, 212, 0.6)",
  dotColor = "rgba(6, 182, 212, 0.9)",
  graticuleColor = "rgba(255, 255, 255, 0.08)",
  atmosphereColorStart = "rgba(6, 182, 212, 0)",
  atmosphereColorEnd = "rgba(6, 182, 212, 0.25)",
  landOutlineColor = "rgba(6, 182, 212, 0.4)"
}) {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const containerWidth = width;
    const containerHeight = height;
    const radius = Math.min(containerWidth, containerHeight) / 2.8;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;
    context.scale(dpr, dpr);

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    const pointInPolygon = (point, polygon) => {
      const [x, y] = point;
      let inside = false;
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside;
        }
      }
      return inside;
    };

    const pointInFeature = (point, feature) => {
      const geometry = feature.geometry;
      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates;
        if (!pointInPolygon(point, coordinates[0])) return false;
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) return false;
        }
        return true;
      } else if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false;
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true;
                break;
              }
            }
            if (!inHole) return true;
          }
        }
        return false;
      }
      return false;
    };

    const generateDotsInPolygon = (feature, dotSpacing = 16) => {
      const dots = [];
      const bounds = d3.geoBounds(feature);
      const [[minLng, minLat], [maxLng, maxLat]] = bounds;
      const stepSize = dotSpacing * 0.08;
      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point = [lng, lat];
          if (pointInFeature(point, feature)) {
            dots.push(point);
          }
        }
      }
      return dots;
    };

    const allDots = [];
    let landFeatures;

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight);
      const currentScale = projection.scale();
      const scaleFactor = currentScale / radius;

      // Atmosphere Glow
      const gradient = context.createRadialGradient(
        containerWidth / 2, containerHeight / 2, currentScale * 0.8,
        containerWidth / 2, containerHeight / 2, currentScale * 1.15
      );
      gradient.addColorStop(0, atmosphereColorStart);
      gradient.addColorStop(1, atmosphereColorEnd);
      context.beginPath();
      context.arc(containerWidth / 2, containerHeight / 2, currentScale * 1.15, 0, 2 * Math.PI);
      context.fillStyle = gradient;
      context.fill();

      // Globe Background
      context.beginPath();
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
      context.fillStyle = globeColor;
      context.fill();

      // Glow border
      context.strokeStyle = glowColor;
      context.lineWidth = 3 * scaleFactor;
      context.stroke();

      if (landFeatures) {
        const graticule = d3.geoGraticule();
        context.beginPath();
        path(graticule());
        context.strokeStyle = graticuleColor;
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        context.beginPath();
        landFeatures.features.forEach((feature) => {
          path(feature);
        });
        context.strokeStyle = landOutlineColor;
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat]);
          if (projected) {
            context.beginPath();
            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
            context.fillStyle = dotColor;
            context.fill();
          }
        });
      }
    };

    const loadWorldData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json");
        if (!response.ok) throw new Error("Failed to load land data");
        landFeatures = await response.json();
        landFeatures.features.forEach((feature) => {
          const dots = generateDotsInPolygon(feature, 16);
          dots.forEach(([lng, lat]) => {
            allDots.push({ lng, lat, visible: true });
          });
        });
        render();
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load land map data");
        setIsLoading(false);
      }
    };

    const rotation = [0, 0];
    const rotationSpeed = 0.6;
    const rotate = () => {
      rotation[0] += rotationSpeed;
      projection.rotate(rotation);
      render();
    };

    const rotationTimer = d3.timer(rotate);
    loadWorldData();

    return () => rotationTimer.stop();
  }, [width, height, globeColor, glowColor, dotColor, graticuleColor, atmosphereColorStart, atmosphereColorEnd, landOutlineColor]);


  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="mx-auto block"
      />
    </div>
  );
}



// --- Interactive Office Ecosystem & Dashboards Centerpiece Component ---
function OfficeEcosystemCenterpiece() {
  return (
    <div className="relative w-full h-[340px] flex items-center justify-center overflow-visible -my-10 sm:-my-6 scale-[0.88] md:scale-[1.0] lg:scale-[1.05] origin-center">
      {/* Dynamic flowing CSS animations */}
      <style>{`
        @keyframes flowDash {
          to {
            stroke-dashoffset: -24;
          }
        }
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes blinkFast {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-flow-dash-fast {
          stroke-dasharray: 8 6;
          animation: flowDash 1.2s linear infinite;
        }
        .animate-flow-dash-slow {
          stroke-dasharray: 6 8;
          animation: flowDash 2s linear infinite;
        }
        .animate-float-teams {
          animation: floatUp 5.5s ease-in-out infinite;
        }
        .animate-float-azure {
          animation: floatUp 5.5s ease-in-out infinite;
          animation-delay: 2.7s;
        }
        .animate-led-blink {
          animation: blinkFast 1.5s infinite;
        }
        .animate-led-blink-fast {
          animation: blinkFast 0.8s infinite;
        }
      `}</style>

      {/* 1. Background Dashboards (Floating Glassmorphism Panels) */}

      {/* Left Panel: Global Overview */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20px] left-[2%] lg:left-[5%] w-[205px] h-[130px] rounded-2xl bg-white/5 dark:bg-slate-950/15 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.08)] p-3.5 text-left z-25 flex flex-col justify-between select-none"
      >
        <div>
          <p className="text-[10px] font-black text-slate-800 dark:text-indigo-200 tracking-wider uppercase mb-1">Global Overview</p>
          <div className="grid grid-cols-4 gap-1 border-b border-slate-200/10 pb-1 mb-1">
            <div>
              <span className="block text-[5px] text-slate-400 dark:text-slate-500 font-bold uppercase">Projects</span>
              <span className="text-[9px] font-black text-[#2e1065] dark:text-indigo-300">512</span>
            </div>
            <div>
              <span className="block text-[5px] text-slate-400 dark:text-slate-500 font-bold uppercase">Clients</span>
              <span className="text-[9px] font-black text-pink-600 dark:text-pink-400">150+</span>
            </div>
            <div>
              <span className="block text-[5px] text-slate-400 dark:text-slate-500 font-bold uppercase">Countries</span>
              <span className="text-[9px] font-black text-blue-600 dark:text-sky-400">10+</span>
            </div>
            <div>
              <span className="block text-[5px] text-slate-400 dark:text-slate-500 font-bold uppercase">Satisf.</span>
              <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400">99%</span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full flex items-end gap-1.5 px-0.5">
          <svg className="w-1/2 h-8" viewBox="0 0 100 40">
            <defs>
              <linearGradient id="chartLineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M 0 35 Q 20 15 40 28 T 80 10 T 100 5 L 100 40 L 0 40 Z" fill="url(#chartLineGrad)" />
            <path d="M 0 35 Q 20 15 40 28 T 80 10 T 100 5" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          </svg>
          <div className="w-1/2 h-8 flex items-end justify-between px-0.5">
            {[20, 35, 15, 28, 40, 25].map((val, idx) => (
              <div key={idx} className="w-[3px] bg-gradient-to-t from-indigo-500 to-pink-500 rounded-t-xs" style={{ height: `${val}%` }} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Panel: Performance Analytics */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[20px] right-[2%] lg:right-[5%] w-[205px] h-[130px] rounded-2xl bg-white/5 dark:bg-slate-950/15 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.08)] p-3.5 text-left z-25 flex flex-col justify-between select-none"
      >
        <div className="flex items-center justify-between border-b border-slate-200/10 pb-1 mb-1">
          <div>
            <span className="block text-[5px] text-slate-400 dark:text-slate-500 font-bold uppercase">Success Rate</span>
            <span className="text-[12px] font-black text-[#2e1065] dark:text-indigo-200 tracking-tight">78%</span>
          </div>
          <span className="text-[5px] text-emerald-600 dark:text-emerald-400 font-black bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 px-1 py-0.5 rounded uppercase">✦ Live</span>
        </div>
        <div className="flex-1 w-full flex items-center justify-between gap-1.5">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.91" fill="none" stroke="rgba(236, 72, 153, 0.08)" strokeWidth="3.2" />
              <circle cx="18" cy="18" r="15.91" fill="none" stroke="url(#donutGrad)" strokeWidth="3.2" strokeDasharray="78 22" strokeDashoffset="0" strokeLinecap="round" />
              <defs>
                <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#db2777" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute text-[7px] font-black text-slate-800 dark:text-slate-200">78%</span>
          </div>
          <svg className="w-18 h-8" viewBox="0 0 100 40">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#db2777" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#db2777" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M 0 40 Q 15 15 35 30 T 70 8 T 100 20 L 100 40 Z" fill="url(#areaGrad)" />
            <path d="M 0 40 Q 15 15 35 30 T 70 8 T 100 20" fill="none" stroke="#db2777" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>

      {/* 2. Rotating Earth Globe (HTML Absolute layer nested inside the SVG sandwich) */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60px] z-10 flex items-center justify-center pointer-events-auto"
      >
        <RotatingEarth
          width={150}
          height={150}
          className="drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          globeColor="rgba(168, 85, 247, 0.05)"
          glowColor="rgba(168, 85, 247, 0.85)"
          dotColor="rgba(139, 92, 246, 0.95)"
          graticuleColor="rgba(168, 85, 247, 0.18)"
          atmosphereColorStart="rgba(168, 85, 247, 0)"
          atmosphereColorEnd="rgba(168, 85, 247, 0.28)"
          landOutlineColor="rgba(168, 85, 247, 0.5)"
        />
        <div className="absolute w-8 h-8 rounded-full bg-purple-500/10 blur-md animate-ping pointer-events-none" />
      </motion.div>

      {/* 3. Base Platform 3D Isometric SVG (z-index: 0, sits behind the Globe) */}
      <svg className="w-full h-full absolute inset-0 overflow-visible pointer-events-none z-0" viewBox="0 0 800 450">
        <defs>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="platformRimGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.03)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.12)" />
          </linearGradient>

          <linearGradient id="indigoNeonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>

          <linearGradient id="magentaNeonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>

          <linearGradient id="cyanNeonGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>

          <linearGradient id="domeBaseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.12)" />
          </linearGradient>

          <linearGradient id="serverBaseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.12)" />
          </linearGradient>

          <linearGradient id="serverWallGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>

          <linearGradient id="serverFaceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="serverTopGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>

          <linearGradient id="deskTopGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="100%" stopColor="rgba(240, 244, 255, 0.85)" />
          </linearGradient>

          <linearGradient id="pipePink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#db2777" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="pipeBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* --- A. Outer 3D Floor Platform --- */}
        <g filter="url(#glowFilter)" opacity="0.15">
          <ellipse cx="400" cy="305" rx="360" ry="115" fill="none" stroke="url(#magentaNeonGrad)" strokeWidth="15" />
        </g>

        {/* Platform base thickness/skirt */}
        <path d="M 80 290 A 320 100 0 0 0 720 290 L 720 302 A 320 100 0 0 1 80 302 Z" fill="url(#platformRimGrad)" opacity="0.85" />

        {/* Platform top surface */}
        <ellipse cx="400" cy="290" rx="320" ry="100" fill="url(#floorGrad)" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.2" />

        {/* Glow neon tracks nested on the floor */}
        <ellipse cx="400" cy="290" rx="275" ry="86" fill="none" stroke="url(#indigoNeonGrad)" strokeWidth="2.5" opacity="0.75" />
        <ellipse cx="400" cy="290" rx="230" ry="72" fill="none" stroke="url(#magentaNeonGrad)" strokeWidth="1.8" opacity="0.85" className="animate-pulse" />
        <ellipse cx="400" cy="290" rx="160" ry="50" fill="none" stroke="url(#cyanNeonGrad)" strokeWidth="1.2" opacity="0.8" />

        {/* --- B. Glass Railing Back (drawn behind globe in 3D sandwich) --- */}
        <path d="M 290 235 A 110 38 0 0 1 510 235" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
        <path d="M 290 235 A 110 38 0 0 1 510 235" fill="none" stroke="url(#cyanNeonGrad)" strokeWidth="0.8" opacity="0.3" />

        {/* --- C. Left Realistic Office Workspace --- */}
        {/* Desk Base shadow */}
        <ellipse cx="250" cy="278" rx="65" ry="22" fill="rgba(0,0,0,0.12)" />
        {/* Desk top in isometric perspective */}
        <path d="M 190 275 L 290 250 L 310 262 L 210 287 Z" fill="url(#deskTopGrad)" stroke="rgba(255,255,255,0.9)" strokeWidth="0.8" />
        {/* Desk Edge/Rim for thickness */}
        <path d="M 190 275 L 210 287 L 210 290 L 190 278 Z" fill="#94a3b8" />
        <path d="M 210 287 L 310 262 L 310 265 L 210 290 Z" fill="#cbd5e1" />
        {/* Desk Legs */}
        <line x1="190" y1="278" x2="190" y2="298" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="210" y1="290" x2="210" y2="310" stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1="290" y1="250" x2="290" y2="270" stroke="#64748b" strokeWidth="1.2" />
        <line x1="310" y1="265" x2="310" y2="285" stroke="#94a3b8" strokeWidth="1.2" />

        {/* Office Chairs (Left desk) */}
        {[
          { x: 210, y: 262, angle: "left" },
          { x: 240, y: 254.5, angle: "left" },
          { x: 270, y: 247, angle: "left" }
        ].map((chair, i) => (
          <g key={`l-chair-${i}`} transform={`translate(${chair.x}, ${chair.y})`}>
            {/* Chair Base Shadow */}
            <ellipse cx="0" cy="14" rx="7" ry="2.2" fill="rgba(0,0,0,0.18)" />
            {/* Chair 5-star base legs */}
            <path d="M -6 13 L 6 15" stroke="#475569" strokeWidth="0.8" />
            <path d="M -4 15 L 4 13" stroke="#475569" strokeWidth="0.8" />
            {/* Chair support column */}
            <line x1="0" y1="14" x2="0" y2="7" stroke="#475569" strokeWidth="1.5" />
            {/* Chair Seat */}
            <path d="M -6 6 L 6 3 L 9 5.5 L -3 8.5 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="0.8" />
            {/* Chair Backrest Support Bar */}
            <path d="M 0 5 L 0 -4" stroke="#0f172a" strokeWidth="1.2" />
            {/* Chair Backrest */}
            <path d="M -5 -3 L -5 -11 C -5 -13, 5 -13, 5 -11 L 5 -3 L 4 -3 C 4 -9, -4 -9, -4 -3 Z" fill="#312e81" stroke="#818cf8" strokeWidth="0.8" opacity="0.9" />
          </g>
        ))}

        {/* Worker figures (sitting behind the desk) */}
        <g>
          {/* Worker 1 */}
          <g transform="translate(210, 262)">
            <ellipse cx="0" cy="5" rx="3.5" ry="1.2" fill="rgba(0,0,0,0.15)" />
            <ellipse cx="0" cy="-3" rx="3" ry="4" fill="#334155" />
            <circle cx="0" cy="-3" r="2" fill="#ffdbb5" />
            <path d="M -3 1 C -3 -1, 3 -1, 3 1 L 2 6 H -2 Z" fill="#1e293b" />
          </g>
          {/* Worker 2 */}
          <g transform="translate(240, 254.5)">
            <ellipse cx="0" cy="5" rx="3.5" ry="1.2" fill="rgba(0,0,0,0.15)" />
            <ellipse cx="0" cy="-3" rx="3" ry="4" fill="#334155" />
            <circle cx="0" cy="-3" r="2" fill="#ffdbb5" />
            <path d="M -3 1 C -3 -1, 3 -1, 3 1 L 2 6 H -2 Z" fill="#047857" />
          </g>
          {/* Worker 3 */}
          <g transform="translate(270, 247)">
            <ellipse cx="0" cy="5" rx="3.5" ry="1.2" fill="rgba(0,0,0,0.15)" />
            <ellipse cx="0" cy="-3" rx="3" ry="4" fill="#334155" />
            <circle cx="0" cy="-3" r="2" fill="#ffdbb5" />
            <path d="M -3 1 C -3 -1, 3 -1, 3 1 L 2 6 H -2 Z" fill="#b91c1c" />
          </g>
        </g>

        {/* Tiny desk laptops & screens */}
        {[
          { x: 215, y: 267, fill: "#22d3ee" },
          { x: 245, y: 259.5, fill: "#a855f7" },
          { x: 275, y: 252, fill: "#22d3ee" }
        ].map((lap, i) => (
          <g key={`l-lap-${i}`} transform={`translate(${lap.x}, ${lap.y})`}>
            {/* Stand */}
            <ellipse cx="6" cy="0" rx="2.5" ry="0.8" fill="#475569" />
            <line x1="6" y1="0" x2="6" y2="-6" stroke="#475569" strokeWidth="1" />
            {/* Monitor Screen Bezel */}
            <path d="M 2 -14 L 11 -16 L 11 -8 L 2 -6 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="0.6" />
            {/* Glowing Screen */}
            <path d="M 3 -13 L 10 -15 L 10 -8.5 L 3 -7 Z" fill={lap.fill} fillOpacity="0.75" className="animate-pulse" />

            {/* Laptop Base */}
            <path d="M -3.5 2 L 3.5 2 L 4 4 L -4 4 Z" fill="#cbd5e1" />
            <rect x="-3" y="-2" width="6" height="4" rx="0.5" fill="#cbd5e1" stroke="rgba(0,0,0,0.15)" strokeWidth="0.2" />
            <rect x="-2.4" y="-1.6" width="4.8" height="2.6" rx="0.2" fill={lap.fill} />
          </g>
        ))}

        {/* Green Office Plant */}
        <g transform="translate(178, 280)">
          <ellipse cx="0" cy="12" rx="5" ry="2" fill="rgba(0,0,0,0.15)" />
          {/* Terracotta pot */}
          <path d="M -4 4 L 4 4 L 3 12 L -3 12 Z" fill="#78350f" stroke="#451a03" strokeWidth="0.4" />
          {/* Leaves */}
          <circle cx="0" cy="3" r="5" fill="#15803d" />
          <circle cx="4" cy="0" r="4.2" fill="#16a34a" />
          <circle cx="-4" cy="1" r="4.5" fill="#166534" />
          <circle cx="0" cy="-3" r="3.8" fill="#22c55e" />
        </g>


        {/* --- D. Right Realistic Office Workspace --- */}
        {/* Desk Base shadow */}
        <ellipse cx="550" cy="278" rx="65" ry="22" fill="rgba(0,0,0,0.12)" />
        {/* Desk top in isometric perspective */}
        <path d="M 490 262 L 510 250 L 610 275 L 590 287 Z" fill="url(#deskTopGrad)" stroke="rgba(255,255,255,0.9)" strokeWidth="0.8" />
        {/* Desk Edge/Rim for thickness */}
        <path d="M 490 262 L 590 287 L 590 290 L 490 265 Z" fill="#94a3b8" />
        <path d="M 590 287 L 610 275 L 610 278 L 590 290 Z" fill="#cbd5e1" />
        {/* Desk Legs */}
        <line x1="490" y1="265" x2="490" y2="282" stroke="#cbd5e1" strokeWidth="1.2" />
        <line x1="510" y1="250" x2="510" y2="270" stroke="#64748b" strokeWidth="1.2" />
        <line x1="610" y1="278" x2="610" y2="298" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="590" y1="290" x2="590" y2="310" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Office Chairs (Right desk) */}
        {[
          { x: 530, y: 247.5, angle: "right" },
          { x: 560, y: 255, angle: "right" },
          { x: 590, y: 262.5, angle: "right" }
        ].map((chair, i) => (
          <g key={`r-chair-${i}`} transform={`translate(${chair.x}, ${chair.y})`}>
            {/* Chair Base Shadow */}
            <ellipse cx="0" cy="14" rx="7" ry="2.2" fill="rgba(0,0,0,0.18)" />
            {/* Chair 5-star base legs */}
            <path d="M -6 13 L 6 15" stroke="#475569" strokeWidth="0.8" />
            <path d="M -4 15 L 4 13" stroke="#475569" strokeWidth="0.8" />
            {/* Chair support column */}
            <line x1="0" y1="14" x2="0" y2="7" stroke="#475569" strokeWidth="1.5" />
            {/* Chair Seat */}
            <path d="M -6 3 L 6 6 L 3 8.5 L -9 5.5 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="0.8" />
            {/* Chair Backrest Support Bar */}
            <path d="M 0 5 L 0 -4" stroke="#0f172a" strokeWidth="1.2" />
            {/* Chair Backrest */}
            <path d="M -5 -3 L -5 -11 C -5 -13, 5 -13, 5 -11 L 5 -3 L 4 -3 C 4 -9, -4 -9, -4 -3 Z" fill="#312e81" stroke="#818cf8" strokeWidth="0.8" opacity="0.9" />
          </g>
        ))}

        {/* Worker figures */}
        <g>
          {/* Worker 1 */}
          <g transform="translate(530, 247.5)">
            <ellipse cx="0" cy="5" rx="3.5" ry="1.2" fill="rgba(0,0,0,0.15)" />
            <ellipse cx="0" cy="-3" rx="3" ry="4" fill="#334155" />
            <circle cx="0" cy="-3" r="2" fill="#ffdbb5" />
            <path d="M -3 1 C -3 -1, 3 -1, 3 1 L 2 6 H -2 Z" fill="#1d4ed8" />
          </g>
          {/* Worker 2 */}
          <g transform="translate(560, 255)">
            <ellipse cx="0" cy="5" rx="3.5" ry="1.2" fill="rgba(0,0,0,0.15)" />
            <ellipse cx="0" cy="-3" rx="3" ry="4" fill="#334155" />
            <circle cx="0" cy="-3" r="2" fill="#ffdbb5" />
            <path d="M -3 1 C -3 -1, 3 -1, 3 1 L 2 6 H -2 Z" fill="#4338ca" />
          </g>
          {/* Worker 3 */}
          <g transform="translate(590, 262.5)">
            <ellipse cx="0" cy="5" rx="3.5" ry="1.2" fill="rgba(0,0,0,0.15)" />
            <ellipse cx="0" cy="-3" rx="3" ry="4" fill="#334155" />
            <circle cx="0" cy="-3" r="2" fill="#ffdbb5" />
            <path d="M -3 1 C -3 -1, 3 -1, 3 1 L 2 6 H -2 Z" fill="#0f766e" />
          </g>
        </g>

        {/* Tiny desk laptops & screens */}
        {[
          { x: 525, y: 252.5, fill: "#a855f7" },
          { x: 555, y: 260, fill: "#22d3ee" },
          { x: 585, y: 267.5, fill: "#a855f7" }
        ].map((lap, i) => (
          <g key={`r-lap-${i}`} transform={`translate(${lap.x}, ${lap.y})`}>
            {/* Stand */}
            <ellipse cx="-6" cy="0" rx="2.5" ry="0.8" fill="#475569" />
            <line x1="-6" y1="0" x2="-6" y2="-6" stroke="#475569" strokeWidth="1" />
            {/* Monitor Screen Bezel */}
            <path d="M -11 -16 L -2 -14 L -2 -6 L -11 -8 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="0.6" />
            {/* Glowing Screen */}
            <path d="M -10 -15 L -3 -13 L -3 -7 L -10 -8.5 Z" fill={lap.fill} fillOpacity="0.75" className="animate-pulse" />

            {/* Laptop Base */}
            <path d="M -3.5 2 L 3.5 2 L 4 4 L -4 4 Z" fill="#cbd5e1" />
            <rect x="-3" y="-2" width="6" height="4" rx="0.5" fill="#cbd5e1" stroke="rgba(0,0,0,0.15)" strokeWidth="0.2" />
            <rect x="-2.4" y="-1.6" width="4.8" height="2.6" rx="0.2" fill={lap.fill} />
          </g>
        ))}

        {/* Green Office Plant Right */}
        <g transform="translate(620, 290)">
          <ellipse cx="0" cy="12" rx="5" ry="2" fill="rgba(0,0,0,0.15)" />
          <path d="M -4 4 L 4 4 L 3 12 L -3 12 Z" fill="#78350f" stroke="#451a03" strokeWidth="0.4" />
          <circle cx="0" cy="3" r="5" fill="#166534" />
          <circle cx="-3" cy="0" r="4" fill="#15803d" />
          <circle cx="3" cy="1" r="4.2" fill="#16a34a" />
          <circle cx="0" cy="-3" r="3.8" fill="#22c55e" />
        </g>


        {/* --- E. Right Server Tower Infrastructure --- */}
        {/* Platform rim & top surface */}
        <path d="M 550 278 A 70 24 0 0 0 690 278 L 690 284 A 70 24 0 0 1 550 284 Z" fill="url(#cyanNeonGrad)" />
        <ellipse cx="620" cy="278" rx="70" ry="24" fill="url(#serverBaseGrad)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" />

        {/* Server Tower 1 (Left Column) */}
        <g transform="translate(570, 205)">
          <path d="M 0 15 L 12 9 L 12 70 L 0 76 Z" fill="url(#serverWallGrad)" />
          <path d="M 12 9 L 24 15 L 24 76 L 12 70 Z" fill="url(#serverFaceGrad)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />
          <path d="M 0 15 L 12 9 L 24 15 L 12 21 Z" fill="url(#serverTopGrad)" />
          {[25, 33, 41, 49, 57, 65].map((y, i) => (
            <line key={i} x1="14" y1={y} x2="22" y2={y + 4} stroke="#22d3ee" strokeWidth="0.8" className="animate-led-blink" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </g>

        {/* Server Tower 2 (Center Tall Column) */}
        <g transform="translate(605, 190)">
          <path d="M 0 15 L 14 9 L 14 85 L 0 91 Z" fill="url(#serverWallGrad)" />
          <path d="M 14 9 L 28 15 L 28 91 L 14 85 Z" fill="url(#serverFaceGrad)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />
          <path d="M 0 15 L 14 9 L 28 15 L 14 21 Z" fill="url(#serverTopGrad)" />
          {[22, 29, 36, 43, 50, 57, 64, 71, 78].map((y, i) => (
            <line key={i} x1="16" y1={y} x2="26" y2={y + 5} stroke={i % 2 === 0 ? "#22d3ee" : "#db2777"} strokeWidth="1" className="animate-led-blink-fast" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </g>

        {/* Server Tower 3 (Right Short Column) */}
        <g transform="translate(642, 215)">
          <path d="M 0 12 L 10 7 L 10 55 L 0 60 Z" fill="url(#serverWallGrad)" />
          <path d="M 10 7 L 20 12 L 20 60 L 10 55 Z" fill="url(#serverFaceGrad)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />
          <path d="M 0 12 L 10 7 L 20 12 L 10 17 Z" fill="url(#serverTopGrad)" />
          {[19, 26, 33, 40, 47].map((y, i) => (
            <line key={i} x1="12" y1={y} x2="18" y2={y + 3} stroke="#22d3ee" strokeWidth="0.8" className="animate-led-blink" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
        </g>


        {/* --- F. Neon Glowing Data Conduits & Junction Boxes --- */}
        {/* Conduit 1 (Pink) */}
        <path d="M 460 250 C 510 270, 520 290, 565 295" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 460 250 C 510 270, 520 290, 565 295" fill="none" stroke="url(#pipePink)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 460 250 C 510 270, 520 290, 565 295" fill="none" stroke="#f472b6" strokeWidth="1.2" strokeLinecap="round" className="animate-flow-dash-fast" />

        {/* Conduit 2 (Blue) */}
        <path d="M 455 255 C 505 278, 515 298, 560 305" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 455 255 C 505 278, 515 298, 560 305" fill="none" stroke="url(#pipeBlue)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 455 255 C 505 278, 515 298, 560 305" fill="none" stroke="#06b6d4" strokeWidth="1.2" strokeLinecap="round" className="animate-flow-dash-slow" />

        {/* 3D Isometric Junction Boxes / Energy Nodes */}
        {/* Junction Box 1 (Purple) */}
        <g transform="translate(558, 290)">
          <ellipse cx="6" cy="14" rx="7" ry="2.5" fill="rgba(0,0,0,0.15)" />
          <path d="M 0 5 L 6 2 L 12 5 L 12 12 L 6 15 L 0 12 Z" fill="#6366f1" />
          <path d="M 0 5 L 6 2 L 12 5 L 6 8 Z" fill="#a855f7" />
          <path d="M 0 5 L 6 8 L 6 15 L 0 12 Z" fill="#4f46e5" />
          <path d="M 6 8 L 12 5 L 12 12 L 6 15 Z" fill="#4338ca" />
          <circle cx="6" cy="5" r="1.2" fill="#22d3ee" className="animate-pulse" />
        </g>

        {/* Junction Box 2 (Blue) */}
        <g transform="translate(576, 296)">
          <ellipse cx="6" cy="14" rx="7" ry="2.5" fill="rgba(0,0,0,0.15)" />
          <path d="M 0 5 L 6 2 L 12 5 L 12 12 L 6 15 L 0 12 Z" fill="#0284c7" />
          <path d="M 0 5 L 6 2 L 12 5 L 6 8 Z" fill="#38bdf8" />
          <path d="M 0 5 L 6 8 L 6 15 L 0 12 Z" fill="#0369a1" />
          <path d="M 6 8 L 12 5 L 12 12 L 6 15 Z" fill="#075985" />
          <circle cx="6" cy="5" r="1.2" fill="#a855f7" className="animate-pulse" />
        </g>

        {/* Junction Box 3 (Orange) */}
        <g transform="translate(594, 302)">
          <ellipse cx="6" cy="14" rx="7" ry="2.5" fill="rgba(0,0,0,0.15)" />
          <path d="M 0 5 L 6 2 L 12 5 L 12 12 L 6 15 L 0 12 Z" fill="#ea580c" />
          <path d="M 0 5 L 6 2 L 12 5 L 6 8 Z" fill="#fb923c" />
          <path d="M 0 5 L 6 8 L 6 15 L 0 12 Z" fill="#d97706" />
          <path d="M 6 8 L 12 5 L 12 12 L 6 15 Z" fill="#b45309" />
          <circle cx="6" cy="5" r="1.2" fill="#22c55e" className="animate-pulse" />
        </g>

        {/* Outflow Conduits from Junction Boxes into Server Platform */}
        <path d="M 570 302 Q 585 308 600 300" fill="none" stroke="url(#pipePink)" strokeWidth="2.2" />
        <path d="M 588 308 Q 598 314 606 304" fill="none" stroke="url(#pipeBlue)" strokeWidth="2.2" />
        <path d="M 606 314 Q 612 316 618 306" fill="none" stroke="#22c55e" strokeWidth="1.5" />
      </svg>

      {/* 4. Foreground Overlay 3D Isometric SVG (z-index: 20, overlaps the Globe) */}
      <svg className="w-full h-full absolute inset-0 overflow-visible pointer-events-none z-20" viewBox="0 0 800 450">
        <defs>
          <filter id="teamsShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#4f46e5" floodOpacity="0.3" />
          </filter>
          <filter id="cloudShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#0284c7" floodOpacity="0.25" />
          </filter>
          <linearGradient id="glassRailFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="beamGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="domeGlassGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="85%" stopColor="#ffffff" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="teamsRearGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="teamsFrontGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#3730a3" />
          </linearGradient>
          <linearGradient id="teamsShieldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#5b21b6" />
          </linearGradient>
          <linearGradient id="azureCloudGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* --- A. Front Half of Glass Railing (drawn in front of the globe) --- */}
        {/* Railing Base Ring */}
        <ellipse cx="400" cy="235" rx="110" ry="38" fill="none" stroke="url(#cyanNeonGrad)" strokeWidth="3.2" opacity="0.8" />

        <path d="M 510 235 A 110 38 0 0 1 290 235" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
        <path d="M 510 235 A 110 38 0 0 1 290 235" fill="none" stroke="url(#cyanNeonGrad)" strokeWidth="1.2" opacity="0.55" />
        {/* Glass vertical fill surface */}
        <path d="M 290 235 A 110 38 0 0 0 510 235 L 510 215 A 110 38 0 0 1 290 215 Z" fill="url(#glassRailFill)" opacity="0.12" />
        {/* Metal Top Handrail on Front half */}
        <path d="M 290 215 A 110 38 0 0 0 510 215" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" opacity="0.85" />
        <path d="M 290 215 A 110 38 0 0 0 510 215" fill="none" stroke="#e2e8f0" strokeWidth="0.8" opacity="0.9" />
        {/* Vertical glass railing seams / columns */}
        {[290, 325, 365, 400, 435, 475, 510].map((x, i) => {
          const heights = [235, 252, 263, 273, 263, 252, 235];
          const y = heights[i];
          return (
            <line key={`seam-${i}`} x1={x} y1={y} x2={x} y2={y - 20} stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" opacity="0.55" />
          );
        })}

        {/* --- B. Floating Large Teams Pedestal & Bobbing 3D Icon (Left side) --- */}
        {/* Pedestal */}
        <g transform="translate(160, 240)">
          <ellipse cx="0" cy="22" rx="42" ry="15" fill="rgba(0,0,0,0.18)" />
          <path d="M -35 15 A 35 12 0 0 0 35 15 L 35 20 A 35 12 0 0 1 -35 20 Z" fill="url(#indigoNeonGrad)" />
          <ellipse cx="0" cy="15" rx="35" ry="12" fill="url(#domeBaseGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <ellipse cx="0" cy="15" rx="26" ry="9" fill="none" stroke="#818cf8" strokeWidth="1" opacity="0.8" />
          <ellipse cx="0" cy="15" rx="18" ry="6" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.9" className="animate-pulse" />
          <path d="M -18 -80 L 18 -80 L 25 15 L -25 15 Z" fill="url(#beamGlow)" opacity="0.18" />
        </g>

        {/* Back half of Glass Capsule Dome */}
        <path d="M 125 255 L 125 170 C 125 130, 195 130, 195 170 L 195 255 A 35 12 0 0 1 125 255 Z" fill="rgba(168, 85, 247, 0.04)" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="0.8" opacity="0.6" />

        {/* Bobbing Teams 3D Icon - Scaled 1.6x */}
        <g className="animate-float-teams" transform="translate(160, 185)">
          <ellipse cx="0" cy="55" rx="32" ry="9" fill="rgba(79, 70, 229, 0.25)" filter="url(#glowFilter)" />
          <g transform="translate(-27, -27) scale(1.6)" filter="url(#teamsShadow)">
            {/* Rear Silhouette */}
            <g transform="translate(18, 2)">
              <circle cx="16.5" cy="9.5" r="5" fill="url(#teamsRearGrad)" />
              <path d="M 9 14.5 A 7.5 7.5 0 0 1 24 14.5 L 22.5 24 H 10.5 Z" fill="url(#teamsRearGrad)" />
            </g>
            {/* Front Silhouette */}
            <g transform="translate(2, 6)">
              <circle cx="13" cy="9" r="6" fill="url(#teamsFrontGrad)" />
              <path d="M 4 15.5 A 9 9 0 0 1 22 15.5 L 20 27 H 6 Z" fill="url(#teamsFrontGrad)" />
            </g>
            {/* Shield and T character */}
            <g transform="translate(0, 13)">
              <rect x="0" y="0" width="15" height="15" rx="3.5" fill="url(#teamsShieldGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
              <text x="7.5" y="11.5" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>T</text>
            </g>
          </g>
        </g>

        {/* Front half of Glass Capsule Dome */}
        <path d="M 125 255 L 125 170 C 125 130, 195 130, 195 170 L 195 255 A 35 12 0 0 1 125 255 Z" fill="url(#domeGlassGrad)" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.2" opacity="0.3" />
        {/* Capsule Reflections & highlights */}
        <path d="M 132 245 L 132 175" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" opacity="0.4" />
        <path d="M 188 245 L 188 175" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" opacity="0.2" />
        <path d="M 140 152 C 140 142, 180 142, 180 152" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" opacity="0.3" />

        {/* --- C. Floating Large Azure Cloud & Bobbing 3D Icon (Right side) - Scaled 1.6x --- */}
        <g className="animate-float-azure" transform="translate(630, 90) scale(1.6)">
          <ellipse cx="0" cy="50" rx="28" ry="7" fill="rgba(14, 165, 233, 0.15)" filter="url(#glowFilter)" />
          <path d="M -35 15 C -45 15, -52 7, -52 -3 C -52 -13, -42 -19, -32 -19 C -28 -29, -12 -29, -6 -19 C 2 -19, 10 -13, 10 -3 C 10 7, 2 15, -8 15 Z" fill="url(#azureCloudGrad)" stroke="rgba(56, 189, 248, 0.45)" strokeWidth="1.2" filter="url(#cloudShadow)" />
          {/* Azure Icon centered on the Cloud, scaled 0.48x */}
          <g transform="translate(-24, -20) scale(0.48)">
            <path d="M18.8 80h33.8L72.2 46.5 45.4 17.5 18.8 80z" fill="#0078d4" />
            <path d="M52.6 80h28.6L54.6 46.5 45.4 17.5 52.6 80z" fill="#50e6ff" opacity="0.9" />
          </g>
        </g>
      </svg>
    </div>
  );
}



// --- Main Hero Component ---
export default function Hero({ onSlideChange }) {
  useEffect(() => {
    if (onSlideChange) onSlideChange(2);
  }, [onSlideChange]);

  // Synchronized GSAP Animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-slide-3 > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative h-screen bg-[#030712] overflow-hidden hero-font">
        {/* Slide 3: Clean White Premium Technology Partner */}
          <div className="relative h-full w-full bg-gradient-to-br from-[#fdfdff] via-[#f7f5ff] to-[#fdfdff] dark:from-[#030712] dark:via-[#090d16] dark:to-[#030712] flex flex-col justify-between pt-2 pb-2 px-2 lg:pt-2 lg:pb-3 lg:px-4 overflow-y-auto lg:overflow-hidden select-none transition-colors duration-500">
            {/* Glowing background circles to match the image */}
            <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-pink-400/[0.12] dark:bg-pink-500/[0.15] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-blue-400/[0.12] dark:bg-blue-500/[0.15] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-400/[0.08] dark:bg-purple-500/[0.1] rounded-full blur-[150px] pointer-events-none" />

            {/* Slide Header: Centered Brand Logo & Title, Badges on Left/Right */}
            <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 pt-0.5 pb-0.5 z-20">
              {/* Left Badge */}
              <div className="hidden md:absolute md:left-4 md:flex items-center">
                <div className="glassmorphic-card rounded-full px-4 py-1.5 text-[9px] font-black text-slate-900 dark:text-slate-100 tracking-wider uppercase shadow-sm flex items-center gap-2 transition-all duration-500 hover:scale-102">
                  <svg className="w-3 h-3 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                  </svg>
                  Digital Company Portfolio
                </div>
              </div>

              {/* Centered Brand Logo and Title */}
              <div className="flex items-center justify-center gap-3 md:gap-4 hover:scale-101 transition-transform duration-300">
                <img src="/logo.png" alt="DesireInfoWeb Logo" className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain filter drop-shadow-sm" />
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2e1065] dark:text-white tracking-tight transition-colors duration-500">DesireInfoWeb</span>
              </div>

              {/* Right Badge */}
              <div className="hidden md:absolute md:right-4 md:flex items-center">
                <div className="glassmorphic-card rounded-full px-4 py-1.5 text-[9px] font-black text-slate-900 dark:text-slate-100 tracking-wider uppercase shadow-sm flex items-center gap-2 transition-all duration-500 hover:scale-102">
                  <svg className="w-3 h-3 text-blue-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  Global Technology Partner
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-center z-10 py-2">

              {/* Left Column */}
              <div className="lg:col-span-3 space-y-2.5 flex flex-col justify-center">
                {/* Microsoft 365 Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="
                    relative overflow-hidden
                    glassmorphic-card
                    glass-card-3d-left
                    rounded-[24px]
                    p-3 lg:p-3.5
                    text-left
                    lg:translate-x-2
                  "
                >
                  <div className="flex items-center gap-3">
                    {/* Hexagon Logo */}
                    <div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full drop-shadow-[0_2px_6px_rgba(59,130,246,0.25)]" viewBox="0 0 100 100">
                        <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" fill="url(#hexGradient)" />
                        <defs>
                          <linearGradient id="hexGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="50%" stopColor="#4f46e5" />
                            <stop offset="100%" stopColor="#7c3aed" />
                          </linearGradient>
                        </defs>
                        <text x="50" y="58" textAnchor="middle" fill="#ffffff" className="font-black text-2xl" style={{ fontFamily: 'system-ui' }}>365</text>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-black text-slate-900 dark:text-white transition-colors duration-500">Microsoft 365</h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider transition-colors duration-500 leading-tight">Work. Collaborate. Achieve more.</p>
                    </div>
                  </div>

                  {/* Micro App Grid Icons */}
                  <div className="flex justify-between items-center gap-2 pt-3">
                    {/* Word */}
                    <div className="hover:scale-110 transition-transform duration-200 cursor-pointer">
                      <svg className="w-[26px] h-[26px]" viewBox="0 0 36 36" fill="none">
                        <path d="M16 6h14a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H16V6z" fill="#0f6cbd" />
                        <path d="M20 12h8M20 17h8M20 22h5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                        <rect x="4" y="9" width="14" height="18" rx="2" fill="#185abd" />
                        <text x="11" y="21.5" fill="white" className="text-[10.5px] font-black" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>W</text>
                      </svg>
                    </div>
                    {/* Excel */}
                    <div className="hover:scale-110 transition-transform duration-200 cursor-pointer">
                      <svg className="w-[26px] h-[26px]" viewBox="0 0 36 36" fill="none">
                        <path d="M16 6h14a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H16V6z" fill="#107c41" />
                        <rect x="20" y="11" width="3" height="3" fill="#ffffff" opacity="0.6" />
                        <rect x="25" y="11" width="3" height="3" fill="#ffffff" opacity="0.6" />
                        <rect x="20" y="16" width="3" height="3" fill="#ffffff" opacity="0.6" />
                        <rect x="25" y="16" width="3" height="3" fill="#ffffff" opacity="0.6" />
                        <rect x="20" y="21" width="3" height="3" fill="#ffffff" opacity="0.6" />
                        <rect x="25" y="21" width="3" height="3" fill="#ffffff" opacity="0.6" />
                        <rect x="4" y="9" width="14" height="18" rx="2" fill="#107c41" />
                        <text x="11" y="21.5" fill="white" className="text-[10.5px] font-black" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>X</text>
                      </svg>
                    </div>
                    {/* PowerPoint */}
                    <div className="hover:scale-110 transition-transform duration-200 cursor-pointer">
                      <svg className="w-[26px] h-[26px]" viewBox="0 0 36 36" fill="none">
                        <path d="M16 6h14a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H16V6z" fill="#c43e1c" />
                        <circle cx="24" cy="18" r="5" fill="#ffffff" opacity="0.6" />
                        <path d="M24 18l3.5-3.5A5 5 0 0 0 24 13v5z" fill="#ffffff" />
                        <rect x="4" y="9" width="14" height="18" rx="2" fill="#d83b01" />
                        <text x="11" y="21.5" fill="white" className="text-[10.5px] font-black" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>P</text>
                      </svg>
                    </div>
                    {/* Outlook */}
                    <div className="hover:scale-110 transition-transform duration-200 cursor-pointer">
                      <svg className="w-[26px] h-[26px]" viewBox="0 0 36 36" fill="none">
                        <path d="M16 6h14a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H16V6z" fill="#0078d4" />
                        <path d="M18 12l6 4.5 6-4.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                        <rect x="4" y="9" width="14" height="18" rx="2" fill="#0078d4" />
                        <text x="11" y="21.5" fill="white" className="text-[10.5px] font-black" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>O</text>
                      </svg>
                    </div>
                    {/* OneNote */}
                    <div className="hover:scale-110 transition-transform duration-200 cursor-pointer">
                      <svg className="w-[26px] h-[26px]" viewBox="0 0 36 36" fill="none">
                        <path d="M16 6h14a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H16V6z" fill="#7719aa" />
                        <line x1="20" y1="6" x2="20" y2="30" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
                        <line x1="24" y1="12" x2="28" y2="12" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                        <line x1="24" y1="18" x2="28" y2="18" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                        <rect x="4" y="9" width="14" height="18" rx="2" fill="#80397b" />
                        <text x="11" y="21.5" fill="white" className="text-[10.5px] font-black" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>N</text>
                      </svg>
                    </div>
                    {/* Teams */}
                    <div className="hover:scale-110 transition-transform duration-200 cursor-pointer">
                      <svg className="w-[26px] h-[26px]" viewBox="0 0 36 36" fill="none">
                        <rect x="14" y="6" width="16" height="24" rx="2" fill="#4b53bc" />
                        <circle cx="20" cy="14" r="3" fill="#ffffff" opacity="0.6" />
                        <path d="M16 23a4 4 0 0 1 8 0" fill="#ffffff" opacity="0.6" />
                        <rect x="4" y="9" width="14" height="18" rx="2" fill="#464eb8" />
                        <text x="11" y="21.5" fill="white" className="text-[10.5px] font-black" textAnchor="middle" style={{ fontFamily: 'system-ui' }}>T</text>
                      </svg>
                    </div>
                  </div>
                </motion.div>                {/* SharePoint Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="
                    relative overflow-hidden
                    glassmorphic-card
                    glass-card-3d-left
                    rounded-[24px]
                    p-3 lg:p-3.5
                    text-left
                    lg:-translate-x-2
                  "
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-black text-slate-900 dark:text-white transition-colors duration-500">SharePoint</h3>
                      <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider transition-colors duration-500">Collaborate. Manage. Innovate.</p>
                    </div>
                  </div>
                  <ul className="text-[10px] lg:text-[11px] text-slate-700 dark:text-slate-300 font-bold space-y-1 pl-1 transition-colors duration-500">
                    <li className="flex items-center gap-1.5"><span className="text-emerald-500">✦</span> Team Sites</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-500">✦</span> Document Management</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-500">✦</span> Knowledge Sharing</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-500">✦</span> Business Workflows</li>
                  </ul>

                  {/* Miniature dashboard mockup inside */}
                  <div className="mt-2 w-full aspect-[16/8] bg-white/15 dark:bg-slate-950/10 border border-slate-100/40 dark:border-slate-800/25 rounded-lg shadow-sm flex flex-col overflow-hidden transition-colors duration-500">
                    <div className="bg-slate-50/20 dark:bg-slate-900/30 border-b border-slate-100/35 dark:border-slate-800/25 px-2 py-1 flex items-center justify-between">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-1 rounded-full bg-slate-200/50 dark:bg-slate-700/50" />
                        <div className="w-1 h-1 rounded-full bg-slate-200/50 dark:bg-slate-700/50" />
                        <div className="w-1 h-1 rounded-full bg-slate-200/50 dark:bg-slate-700/50" />
                      </div>
                      <div className="w-16 h-1.5 rounded bg-slate-100/40 dark:bg-slate-800/40" />
                      <div className="w-1.5 h-1.5 rounded bg-slate-200/50 dark:bg-slate-700/50" />
                    </div>
                    <div className="flex-1 p-2 flex flex-col justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded bg-emerald-500/15" />
                        <div className="flex-1 space-y-0.5">
                          <div className="h-1 w-3/4 rounded bg-slate-200/40 dark:bg-slate-800/40" />
                          <div className="h-1 w-1/2 rounded bg-slate-150/40 dark:bg-slate-700/40" />
                        </div>
                      </div>
                      <div className="h-3 w-full bg-slate-100/15 dark:bg-slate-850/15 rounded flex items-center justify-center">
                        <span className="text-[6px] text-slate-400 dark:text-slate-500 font-semibold tracking-wide transition-colors duration-500">Desire SharePoint Portal</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* AI Innovation Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="
                    relative overflow-hidden
                    glassmorphic-card
                    glass-card-3d-left
                    rounded-[24px]
                    p-3 lg:p-3.5
                    text-left
                    flex
                    gap-3
                    items-center
                    lg:-translate-x-1
                  "
                >
                  {/* Left Column: Glowing Purple Network Sphere */}
                  <div className="w-12 h-12 relative flex-shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 60 60">
                      <defs>
                        <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.85" />
                          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      {/* Inner glowing sphere */}
                      <circle cx="30" cy="30" r="16" fill="url(#sphereGlow)" className="animate-pulse" />
                      <circle cx="30" cy="30" r="7" fill="#a855f7" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

                      {/* Orbital rings */}
                      <ellipse cx="30" cy="30" rx="18" ry="7" fill="none" stroke="#d8b4fe" strokeWidth="0.8" strokeDasharray="3 3" transform="rotate(35 30 30)" />
                      <ellipse cx="30" cy="30" rx="18" ry="7" fill="none" stroke="#d8b4fe" strokeWidth="0.8" strokeDasharray="3 3" transform="rotate(-45 30 30)" />

                      {/* Connections */}
                      <line x1="30" y1="30" x2="16" y2="18" stroke="rgba(168,85,247,0.3)" strokeWidth="0.8" />
                      <line x1="30" y1="30" x2="45" y2="20" stroke="rgba(168,85,247,0.3)" strokeWidth="0.8" />
                      <line x1="30" y1="30" x2="39" y2="44" stroke="rgba(168,85,247,0.3)" strokeWidth="0.8" />
                      <line x1="30" y1="30" x2="19" y2="42" stroke="rgba(168,85,247,0.3)" strokeWidth="0.8" />

                      {/* Nodes */}
                      <circle cx="16" cy="18" r="2" fill="#c084fc" stroke="#ffffff" strokeWidth="0.4" />
                      <circle cx="45" cy="20" r="2" fill="#22d3ee" stroke="#ffffff" strokeWidth="0.4" />
                      <circle cx="39" cy="44" r="2" fill="#a855f7" stroke="#ffffff" strokeWidth="0.4" className="animate-pulse" />
                      <circle cx="19" cy="42" r="1.5" fill="#db2777" stroke="#ffffff" strokeWidth="0.4" />
                    </svg>
                  </div>

                  {/* Right Column: Content Checklist */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-black text-slate-900 dark:text-white transition-colors duration-500">AI Innovation</h3>
                    <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider transition-colors duration-500 leading-tight">Intelligent Automation. Predictive Insights.</p>
                    <ul className="text-[10px] lg:text-[11px] text-slate-700 dark:text-slate-350 font-bold space-y-1 pt-1 pl-0.5 transition-colors duration-500">
                      <li className="flex items-center gap-1.5"><span className="text-purple-500">✓</span> AI Solutions</li>
                      <li className="flex items-center gap-1.5"><span className="text-purple-500">✓</span> Machine Learning</li>
                      <li className="flex items-center gap-1.5"><span className="text-purple-500">✓</span> Intelligent Automation</li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Center Column */}
              <div className="hero-slide-3 lg:col-span-6 flex flex-col items-center justify-center text-center px-4 space-y-3 lg:space-y-3.5">


                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] pb-1 transition-colors duration-500 text-center">
                  <span className="block md:inline text-[#2e1065] dark:text-slate-100">
                    Your Extended{" "}
                  </span>
                  <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[#4f46e5] via-[#9333ea] to-[#db2777] dark:from-indigo-300 dark:via-purple-400 dark:to-pink-400 whitespace-nowrap">
                    Technology Partner
                  </span>
                </h1>

                {/* Gold Diamond Star Divider */}
                <div className="flex items-center justify-center gap-3 w-full">
                  <div className="h-[1px] w-28 bg-gradient-to-r from-transparent to-amber-500/40" />
                  <span className="text-amber-500 text-sm animate-pulse">✦</span>
                  <div className="h-[1px] w-28 bg-gradient-to-l from-transparent to-amber-500/40" />
                </div>

                {/* Subtitle */}
                <p className="text-sm md:text-base text-[#475569] dark:text-slate-350 font-bold max-w-xl leading-normal transition-colors duration-500">
                  Transforming Ideas. Empowering Businesses. <br />
                  Building Intelligent Solutions for a Digital-First World.
                </p>

                {/* Technology Pills list */}
                <div className="glassmorphic-card rounded-full px-4 py-1.5 flex items-center justify-center gap-3 shadow-[0_8px_32px_rgba(31,38,135,0.04)]">
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
                      name: 'AI',
                      icon: (
                        <svg className="w-3 h-3 text-purple-500 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 2v20M2 12h20M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
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
                    }
                  ].map((pill, idx) => (
                    <div key={pill.name} className="flex items-center gap-3">
                      {idx > 0 && <div className="h-3 w-px bg-slate-300 dark:bg-slate-700/50" />}
                      <div className="flex items-center gap-1.5 select-none hover:scale-105 transition-transform cursor-pointer">
                        {pill.icon}
                        <span className="text-[9px] font-black text-slate-800 dark:text-slate-200 tracking-wider uppercase">
                          {pill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Central Platform Office Workspace & Globe Ecosystem Centerpiece */}
                <OfficeEcosystemCenterpiece />
              </div>

              {/* Right Column */}
              <div className="lg:col-span-3 space-y-2.5 lg:space-y-3 flex flex-col justify-center">
                {/* Azure Cloud Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="
                    relative overflow-hidden
                    glassmorphic-card
                    glass-card-3d-right
                    rounded-[24px]
                    p-3 lg:p-3.5
                    text-left
                    lg:-translate-x-2
                  "
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-sky-50 dark:bg-sky-950/50 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-sky-500 dark:text-sky-400" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M18.8 80h33.8L72.2 46.5 45.4 17.5 18.8 80z" fill="#0078d4" />
                        <path d="M52.6 80h28.6L54.6 46.5 45.4 17.5 52.6 80z" fill="#50e6ff" opacity="0.9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-black text-slate-900 dark:text-white transition-colors duration-500">Azure Cloud</h3>
                      <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider transition-colors duration-500">Scalable. Secure. Reliable.</p>
                    </div>
                  </div>
                  <ul className="text-[10px] lg:text-[11px] text-slate-700 dark:text-slate-300 font-bold space-y-1 pl-1 transition-colors duration-500">
                    <li className="flex items-center gap-1.5"><span className="text-sky-500">✦</span> Cloud Services</li>
                    <li className="flex items-center gap-1.5"><span className="text-sky-500">✦</span> Security & Compliance</li>
                    <li className="flex items-center gap-1.5"><span className="text-sky-500">✦</span> Global Scalability</li>
                  </ul>
                </motion.div>

                {/* Power Platform Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="
                    relative overflow-hidden
                    glassmorphic-card
                    glass-card-3d-right
                    rounded-[24px]
                    p-3 lg:p-3.5
                    text-left
                    lg:translate-x-2
                  "
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-fuchsia-50 dark:bg-fuchsia-950/50 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2L2 12h5v8h10v-8h5L12 2z" fill="currentColor" fillOpacity="0.2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-black text-slate-900 dark:text-white transition-colors duration-500">Power Platform</h3>
                      <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider transition-colors duration-500">Automate. Analyze. Accelerate.</p>
                    </div>
                  </div>
                  <ul className="text-[10px] lg:text-[11px] text-slate-700 dark:text-slate-300 font-bold space-y-1 pl-1 transition-colors duration-500">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      Power Apps
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Power Automate
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Power BI
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      Power Virtual Agents
                    </li>
                  </ul>
                </motion.div>

                {/* Dynamics 365 Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="
                    relative overflow-hidden
                    glassmorphic-card
                    glass-card-3d-right
                    rounded-[24px]
                    p-3 lg:p-3.5
                    text-left
                    lg:translate-x-1
                  "
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-black text-slate-900 dark:text-white transition-colors duration-500">Dynamics 365</h3>
                      <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider transition-colors duration-500">Unify. Optimize. Grow.</p>
                    </div>
                  </div>
                  <ul className="text-[10px] lg:text-[11px] text-slate-700 dark:text-slate-300 font-bold space-y-1 pl-1 transition-colors duration-500">
                    <li className="flex items-center gap-1.5"><span className="text-indigo-600 dark:text-indigo-400">✓</span> Sales</li>
                    <li className="flex items-center gap-1.5"><span className="text-indigo-600 dark:text-indigo-400">✓</span> Customer Service</li>
                    <li className="flex items-center gap-1.5"><span className="text-indigo-600 dark:text-indigo-400">✓</span> Finance</li>
                    <li className="flex items-center gap-1.5"><span className="text-indigo-600 dark:text-indigo-400">✓</span> Operations</li>
                  </ul>
                </motion.div>
              </div>

            </div>

            {/* Bottom Bar Layout */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4 z-20 pt-2 pb-3.5 border-t border-indigo-100/50">

              {/* Stats panel */}
              <div className="justify-self-center md:justify-self-start bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-full px-4.5 py-1.5 flex items-center justify-between gap-4 shadow-[0_8px_32px_rgba(31,38,135,0.04)] text-xs md:text-sm font-black text-slate-800 dark:text-slate-200 transition-colors duration-500">
                <div className="flex items-center gap-2 select-none hover:scale-105 transition-transform cursor-pointer">
                  {/* Grid/cube icon */}
                  <svg className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-purple-700 dark:text-purple-300 text-xs md:text-sm font-black">500+</span>
                    <span className="text-[7.5px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Projects Delivered</span>
                  </div>
                </div>
                <div className="h-4 w-px bg-slate-200 dark:bg-slate-800/80" />
                <div className="flex items-center gap-2 select-none hover:scale-105 transition-transform cursor-pointer">
                  {/* Users icon */}
                  <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-blue-700 dark:text-blue-300 text-xs md:text-sm font-black">150+</span>
                    <span className="text-[7.5px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Happy Clients</span>
                  </div>
                </div>
                <div className="h-4 w-px bg-slate-200 dark:bg-slate-800/80" />
                <div className="flex items-center gap-2 select-none hover:scale-105 transition-transform cursor-pointer">
                  {/* Globe icon */}
                  <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-emerald-700 dark:text-emerald-300 text-xs md:text-sm font-black">10+</span>
                    <span className="text-[7.5px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Countries Served</span>
                  </div>
                </div>
                <div className="h-4 w-px bg-slate-200 dark:bg-slate-800/80" />
                <div className="flex items-center gap-2 select-none hover:scale-105 transition-transform cursor-pointer">
                  {/* Star icon */}
                  <svg className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-amber-600 dark:text-amber-300 text-xs md:text-sm font-black">99%</span>
                    <span className="text-[7.5px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Satisfaction</span>
                  </div>
                </div>
              </div>

              {/* Gradient CTA Button */}
              <div className="justify-self-center flex justify-center">
                <a
                  href="#contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-[10px] font-black rounded-full shadow-[0_8px_25px_rgba(219,39,119,0.2)] hover:scale-105 transition-all duration-300 uppercase tracking-widest flex items-center gap-2"
                >
                  Let's Build the Future Together <span className="text-yellow-300">✦</span>
                </a>
              </div>

              {/* Contacts & QR Code */}
              <div className="justify-self-center md:justify-self-end flex items-center gap-4">
                <div className="text-right space-y-0">
                  <div className="flex items-center justify-end gap-1 text-[8px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wide transition-colors duration-500">
                    <span>www.desireinfoweb.com</span>
                    <svg className="w-3 h-3 text-slate-400 dark:text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /></svg>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-[8px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wide transition-colors duration-500">
                    <span>vijay@desireinfoweb.com</span>
                    <svg className="w-3 h-3 text-slate-400 dark:text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-[8px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wide transition-colors duration-500">
                    <span>+91-8780468807</span>
                    <svg className="w-3 h-3 text-slate-400 dark:text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                </div>

                {/* QR Code */}
                <div className="w-10 h-10 bg-white p-1 rounded-lg border border-slate-200/80 shadow-sm flex items-center justify-center">
                  <svg className="w-full h-full text-slate-800" viewBox="0 0 25 25" fill="currentColor">
                    <rect x="0" y="0" width="7" height="7" />
                    <rect x="1" y="1" width="5" height="5" fill="white" />
                    <rect x="2" y="2" width="3" height="3" />
                    <rect x="18" y="0" width="7" height="7" />
                    <rect x="19" y="1" width="5" height="5" fill="white" />
                    <rect x="20" y="2" width="3" height="3" />
                    <rect x="0" y="18" width="7" height="7" />
                    <rect x="1" y="19" width="5" height="5" fill="white" />
                    <rect x="2" y="20" width="3" height="3" />
                    <rect x="9" y="0" width="2" height="2" />
                    <rect x="13" y="1" width="3" height="1" />
                    <rect x="9" y="4" width="1" height="3" />
                    <rect x="12" y="5" width="2" height="2" />
                    <rect x="15" y="4" width="2" height="1" />
                    <rect x="15" y="6" width="1" height="2" />
                    <rect x="0" y="9" width="2" height="2" />
                    <rect x="4" y="10" width="1" height="3" />
                    <rect x="7" y="9" width="3" height="1" />
                    <rect x="11" y="10" width="2" height="3" />
                    <rect x="14" y="9" width="1" height="2" />
                    <rect x="17" y="11" width="3" height="2" />
                    <rect x="9" y="14" width="2" height="1" />
                    <rect x="12" y="15" width="3" height="2" />
                    <rect x="16" y="14" width="1" height="3" />
                    <rect x="19" y="15" width="2" height="1" />
                    <rect x="9" y="18" width="1" height="2" />
                    <rect x="11" y="20" width="3" height="2" />
                    <rect x="15" y="19" width="2" height="3" />
                    <rect x="18" y="18" width="1" height="2" />
                    <rect x="21" y="20" width="3" height="1" />
                    <rect x="23" y="22" width="2" height="2" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
    </section>
  );
}
