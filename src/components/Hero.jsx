'use client';

import { useEffect, useRef, useState } from 'react';
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

    // Set up responsive dimensions
    const containerWidth = Math.min(width, window.innerWidth - 40);
    const containerHeight = Math.min(height, window.innerHeight - 100);
    const radius = Math.min(containerWidth, containerHeight) / 2.2;

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

      // Draw globe background (dark atmosphere)
      context.beginPath();
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
      context.fillStyle = "#000000";
      context.fill();

      // Glow border
      context.strokeStyle = "rgba(6, 182, 212, 0.5)";
      context.lineWidth = 3 * scaleFactor;
      context.stroke();

      if (landFeatures) {
        const graticule = d3.geoGraticule();
        context.beginPath();
        path(graticule());
        context.strokeStyle = "rgba(255, 255, 255, 0.1)";
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        context.beginPath();
        landFeatures.features.forEach((feature) => {
          path(feature);
        });
        context.strokeStyle = "rgba(6, 182, 212, 0.3)";
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat]);
          if (projected) {
            context.beginPath();
            context.arc(projected[0], projected[1], 1 * scaleFactor, 0, 2 * Math.PI);
            context.fillStyle = "rgba(6, 182, 212, 0.8)";
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
    const rotationSpeed = 0.5;
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
    <section id="home" className="relative min-h-screen pt-20 bg-[#030712]">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setProgress(0);
        }}
        onAutoplayTimeLeft={(s, time, timeLeft) => {
          setProgress(1 - timeLeft / autoplayDelay);
        }}
        spaceBetween={0}
        effect={'fade'}
        speed={1200}
        allowTouchMove={false} // Disable manual swiping
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="h-screen w-full"
      >
        {/* Slide 1: Original Brand Identity */}
        <SwiperSlide>
          <div className="relative h-full flex items-center justify-center overflow-hidden">
            <ThreeScene />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="hero-slide-1 text-left space-y-8 max-w-2xl">
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-md"
                  >
                    Future-Ready Digital Solutions
                  </motion.div>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
                    Architecting the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                      Digital Frontier.
                    </span>
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  Desire Info Web builds high-performance, intelligent, and scalable web experiences that empower businesses to lead in a technology-driven world.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#portfolio" className="group relative px-8 py-4 bg-white text-gray-950 font-semibold rounded-full overflow-hidden flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">View Our Work <ArrowRight size={18} /></span>
                  </a>
                  <a href="#contact" className="px-8 py-4 bg-transparent border border-gray-600 hover:border-gray-300 text-white font-semibold rounded-full flex items-center justify-center transition-all hover:bg-white/5">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Global Connectivity & Desire InfoWeb */}
        <SwiperSlide>
          <div className="relative h-full flex items-center justify-center bg-[#030712] overflow-hidden">
            {/* Background Data Stream Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
              <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
              <div className="relative w-full max-w-4xl">
                {/* 3D Earth Overlay */}
                <RotatingEarth width={900} height={700} className="opacity-80 scale-110" />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, z: -100 }}
                    whileInView={{ opacity: 1, scale: 1, z: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] uppercase italic">
                      Desire <span className="text-cyan-500">Inforweb</span>
                    </h2>
                    <p className="text-cyan-400 font-bold tracking-[0.8em] text-xs md:text-sm uppercase">
                      3D Graphical Intelligence • Global Infrastructure
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-xl">
                <p className="text-gray-500 text-sm font-medium tracking-wide">
                  Connecting your vision to the world through high-performance 3D visualization and state-of-the-art digital architecture.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* --- Custom Production-Level Progress Pagination (Minimalist) --- */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className="group flex flex-col gap-3 cursor-pointer outline-none focus:ring-0"
          >
            <div className="relative w-32 md:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              {/* Progress Bar Background (Active/Inactive) */}
              <div
                className={cn(
                  "absolute inset-0 bg-white/5 transition-opacity duration-300",
                  activeIndex === index ? "opacity-100" : "opacity-0"
                )}
              />

              {/* Actual Loading Line */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: activeIndex === index ? `${progress * 100}%` : (activeIndex > index ? "100%" : "0%")
                }}
                transition={{ type: "tween", ease: "linear" }}
              />
            </div>
            <div className="flex items-center justify-between px-1">
              <span className={cn(
                "text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300",
                activeIndex === index ? "text-cyan-400 scale-110" : "text-gray-600"
              )}>
                0{index + 1}
              </span>
              <span className={cn(
                "text-[9px] font-bold text-cyan-500/40 tracking-widest uppercase transition-opacity duration-300",
                activeIndex === index ? "opacity-100" : "opacity-0"
              )}>
                Slide
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
