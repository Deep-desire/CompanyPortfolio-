'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import * as d3 from 'd3';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { cn } from '../lib/utils';
import ThreeScene from './ThreeScene';

// --- Space Starfield Component ---
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

// --- Rotating Earth Component (D3 Wireframe Globe) ---
function RotatingEarth({ width = 800, height = 600, className = "" }) {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set up responsive dimensions with more buffer for the glow
    const containerWidth = width;
    const containerHeight = height;
    const radius = Math.min(containerWidth, containerHeight) / 2.8; // More space for atmosphere

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

      // Atmosphere Glow (Enhanced)
      const gradient = context.createRadialGradient(
        containerWidth / 2, containerHeight / 2, currentScale * 0.8,
        containerWidth / 2, containerHeight / 2, currentScale * 1.15
      );
      gradient.addColorStop(0, "rgba(6, 182, 212, 0)");
      gradient.addColorStop(1, "rgba(6, 182, 212, 0.25)");
      context.beginPath();
      context.arc(containerWidth / 2, containerHeight / 2, currentScale * 1.15, 0, 2 * Math.PI);
      context.fillStyle = gradient;
      context.fill();

      // Globe Background
      context.beginPath();
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
      context.fillStyle = "#000000";
      context.fill();

      // Glow border
      context.strokeStyle = "rgba(6, 182, 212, 0.6)";
      context.lineWidth = 3 * scaleFactor;
      context.stroke();

      if (landFeatures) {
        const graticule = d3.geoGraticule();
        context.beginPath();
        path(graticule());
        context.strokeStyle = "rgba(255, 255, 255, 0.08)";
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        context.beginPath();
        landFeatures.features.forEach((feature) => {
          path(feature);
        });
        context.strokeStyle = "rgba(6, 182, 212, 0.4)";
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat]);
          if (projected) {
            context.beginPath();
            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
            context.fillStyle = "rgba(6, 182, 212, 0.9)";
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
  }, [width, height]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="mx-auto block"
      />
    </div>
  );
}

// --- Main Hero Component ---

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const autoplayDelay = 6000;

  // reliable progress timer
  useEffect(() => {
    let startTime = Date.now();
    const update = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / autoplayDelay, 1);
      setProgress(p);
      if (p < 1) {
        requestAnimationFrame(update);
      }
    };
    const frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-slide-1 > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });
    });
    return () => ctx.revert();
  }, [activeIndex]);

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section id="home" className="relative h-screen bg-[#030712] overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        spaceBetween={0}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={1500}
        allowTouchMove={false}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade]}
        className="h-full w-full"
      >
        {/* Slide 1: Original Brand Identity */}
        <SwiperSlide>
          <div className="relative h-full w-full flex items-center justify-center">
            <ThreeScene />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.08] rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="hero-slide-1 text-left space-y-8 max-w-2xl">
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-black mb-8 backdrop-blur-md uppercase tracking-[0.3em]"
                  >
                    Future-Ready Digital Solutions
                  </motion.div>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white">
                    Architecting <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                      Digital Frontier.
                    </span>
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl font-medium">
                  Desire Info Web builds high-performance, intelligent, and scalable web experiences that empower businesses to lead in a technology-driven world.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="#portfolio" className="group relative px-10 py-5 bg-white text-gray-950 font-black rounded-full overflow-hidden flex items-center justify-center gap-2 hover:scale-105 transition-all duration-500 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors uppercase tracking-widest">View Our Work <ArrowRight size={20} /></span>
                  </a>
                  <a href="#contact" className="px-10 py-5 bg-transparent border-2 border-white/10 hover:border-white text-white font-bold rounded-full flex items-center justify-center transition-all hover:bg-white/5 uppercase tracking-widest">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Global Connectivity & Desire InfoWeb */}
        <SwiperSlide>
          <div className="relative h-full w-full flex flex-col items-center justify-center">
            {/* Immersive Space Effects */}
            <StarField count={250} />

            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
              <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center">
              <div className="relative w-full max-w-6xl flex flex-col items-center justify-center">
                {/* 3D Earth - Increased Size & Pulse Animation */}
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                    filter: ["drop-shadow(0 0 40px rgba(6,182,212,0.2))", "drop-shadow(0 0 60px rgba(6,182,212,0.4))", "drop-shadow(0 0 40px rgba(6,182,212,0.2))"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <RotatingEarth width={900} height={800} className="opacity-90 scale-90 md:scale-100 translate-y-12" />
                </motion.div>

                {/* Text Overlay - Synchronized with Earth position */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 translate-y-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="space-y-6 text-center"
                  >
                    <h2 className="text-7xl md:text-[150px] font-black tracking-tighter text-white drop-shadow-[0_0_60px_rgba(6,182,212,0.6)] uppercase leading-none italic">
                      DESIRE <span className="text-cyan-500">INFORWEB</span>
                    </h2>
                    <div className="flex items-center justify-center gap-6">
                      <div className="h-px w-20 bg-cyan-500/30" />
                      <p className="text-cyan-400 font-black tracking-[1.5em] text-[10px] md:text-xs uppercase">
                        3D Graphical Information Architecture
                      </p>
                      <div className="h-px w-20 bg-cyan-500/30" />
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-16 max-w-3xl text-center">
                {/* <p className="text-gray-400 text-sm font-bold tracking-[0.4em] uppercase leading-loose opacity-50 px-4">
                  Connecting your vision to the world through high-performance 3D visualization and state-of-the-art digital architecture.
                </p> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* --- Production-Level Progress Pagination (Cyan Theme - Absolute Bottom) --- */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-12">
        {[0, 1].map((index) => {
          const isActuallyActive = activeIndex % 2 === index;
          return (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className="group flex flex-col gap-4 cursor-pointer outline-none focus:ring-0"
            >
              <div className="relative w-40 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 bg-white/5 transition-opacity duration-500",
                    isActuallyActive ? "opacity-100" : "opacity-0"
                  )}
                />
                <motion.div
                  className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                  initial={{ width: 0 }}
                  animate={{
                    width: isActuallyActive ? `${progress * 100}%` : (index === 0 && activeIndex % 2 !== 0 ? "100%" : "0%")
                  }}
                  transition={{ type: "tween", ease: "linear" }}
                />
              </div>
              <div className="flex items-center justify-between px-2">
                <span className={cn(
                  "text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-500",
                  isActuallyActive ? "text-cyan-400 scale-110" : "text-gray-600"
                )}>
                  0{index + 1}
                </span>
                <div className={cn(
                  "flex items-center gap-2 transition-all duration-500",
                  isActuallyActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}>
                  <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[8px] font-black text-cyan-400/60 tracking-[0.2em] uppercase">
                    Active
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
