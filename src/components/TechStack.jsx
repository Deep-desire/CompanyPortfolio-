'use client';

import React, { useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { useMotionValue, animate, motion, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import { technologies } from '../data/technologies';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- 3D Interactive Tech Card ---
// This is the core interactive element for the slider

const TechCard3D = ({ tech }) => {
  const Icon = Icons[tech.icon] || Icons.Box;
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightBackground = useMotionTemplate`radial-gradient(150px circle at ${spotlightX} ${spotlightY}, rgba(6, 182, 212, 0.3), transparent 80%)`;

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative flex items-center gap-6 px-10 py-6 rounded-[32px] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-all duration-500 cursor-pointer group shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden backdrop-blur-md hover:border-cyan-500/50"
      whileHover={{ scale: 1.05, translateZ: 50 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive Spotlight Effect */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: spotlightBackground }}
      />

      {/* Floating 3D Icon Box */}
      <div 
        className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-white/10 dark:to-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
        style={{ transform: "translateZ(40px)" }}
      >
        <Icon className="w-8 h-8" />
      </div>
      
      {/* Content Area */}
      <div className="relative z-10 flex flex-col" style={{ transform: "translateZ(20px)" }}>
        <span className="text-lg font-black tracking-widest uppercase text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {tech.name}
        </span>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-1 w-8 bg-cyan-500/30 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-cyan-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-tighter">Core Tech</span>
        </div>
      </div>

      {/* Background Decorative Element */}
      <span className="absolute -right-4 -bottom-6 text-[120px] font-black text-gray-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none group-hover:text-cyan-500/[0.05] transition-colors duration-1000 uppercase">
        {tech.name.charAt(0)}
      </span>
    </motion.div>
  );
};

// --- Premium Infinite Slider ---

function InfiniteSlider({
  children,
  gap = 40,
  duration = 40,
  durationOnHover = 100, // Slows down significantly on hover
  className,
}) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (width === 0) return;
    
    const contentSize = width + gap;
    const from = 0;
    const to = -contentSize / 2;
    let controls;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: currentDuration * Math.abs((translation.get() - to) / (contentSize / 2)),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [key, translation, currentDuration, width, gap, isTransitioning]);

  const hoverProps = {
    onHoverStart: () => {
      setIsTransitioning(true);
      setCurrentDuration(durationOnHover);
    },
    onHoverEnd: () => {
      setIsTransitioning(true);
      setCurrentDuration(duration);
    },
  };

  return (
    <div className={cn('overflow-hidden perspective-[2000px]', className)}>
      <motion.div
        className='flex w-max items-center py-10'
        style={{
          x: translation,
          gap: `${gap}px`,
          transformStyle: "preserve-3d"
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// --- Main TechStack Component ---

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic Entrance for Header
      gsap.from('.tech-title-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        rotateX: -30,
        duration: 1.2,
        ease: 'expo.out'
      });

      // Ambient Background Glow Motion
      gsap.to('.ambient-glow', {
        x: 'random(-50, 50)',
        y: 'random(-50, 50)',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 border-y border-gray-200 dark:border-white/5 bg-white dark:bg-[#030712] transition-colors duration-700 relative z-10 overflow-hidden"
    >
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="ambient-glow absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-500/[0.07] dark:bg-cyan-500/[0.03] rounded-full blur-[120px]" />
        <div className="ambient-glow absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/[0.07] dark:bg-purple-500/[0.03] rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 overflow-hidden">
          <motion.div 
            className="tech-title-reveal flex flex-col items-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 className="text-sm font-black text-cyan-600 dark:text-cyan-500 tracking-[0.4em] uppercase mb-6 whitespace-nowrap">
              Powered by modern technologies
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
          </motion.div>
        </div>
        
        <div className="relative group">
          {/* Depth Masks */}
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white dark:from-[#030712] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white dark:from-[#030712] to-transparent z-20 pointer-events-none" />

          <InfiniteSlider gap={50} duration={50}>
            {technologies.map((tech) => (
              <TechCard3D key={tech.name} tech={tech} />
            ))}
          </InfiniteSlider>
        </div>

        {/* Dynamic Footer Counter/Indicator */}
        <div className="mt-16 flex justify-center items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-600 tracking-[0.2em] uppercase">
            Seamless Performance Architecture • Optimized for 2024
          </span>
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
