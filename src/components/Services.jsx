import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '../data/services';
import * as Icons from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard3D = ({ service }) => {
  const Icon = Icons[service.icon] || Icons.Code;
  
  // Framer Motion 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Calculate spotlight position
  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightBackground = useMotionTemplate`radial-gradient(500px circle at ${spotlightX} ${spotlightY}, rgba(6, 182, 212, 0.15), transparent 50%)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate percentage from center (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="service-card-wrapper" style={{ perspective: '1200px' }}>
      <motion.div
        className="service-card relative h-full glass-card p-8 rounded-3xl transition-colors duration-500 group overflow-hidden bg-white/40 dark:bg-gray-900/40 border border-gray-200/60 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-500/50"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dynamic Interactive Spotlight */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: spotlightBackground }}
        />

        {/* 3D Popping Content (translateZ pushes it out of the card plane) */}
        <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(50px)" }}>
          {/* Ambient blur behind icon */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700" />
          
          {/* Icon Container */}
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-8 group-hover:border-cyan-500/50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 text-gray-700 dark:text-gray-300">
            <Icon className="w-8 h-8" />
          </div>
          
          {/* Typography */}
          <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 dark:group-hover:from-cyan-400 dark:group-hover:to-blue-500 transition-all duration-300">
            {service.title}
          </h4>
          
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
            {service.description}
          </p>

          {/* Learn More indicator */}
          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all duration-300" style={{ transform: "translateZ(20px)" }}>
            <span>Explore</span>
            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium 3D Stagger Reveal inspired by Lusion
      gsap.fromTo('.service-card-wrapper', 
        { 
          y: 150, 
          opacity: 0, 
          rotationX: -30, 
          rotationY: 10,
          scale: 0.9,
          z: -150
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
          y: 0,
          opacity: 1,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          z: 0,
          duration: 1.8,
          stagger: {
            amount: 0.6,
            grid: [2, 3],
            from: "start"
          },
          ease: "expo.out",
          clearProps: "transform, opacity" // Cleans up so Framer Motion hover takes over
        }
      );
      
      // Animate Header with a sophisticated skew and reveal
      gsap.from('.services-header > *', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        skewY: 2,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out'
      });

      // Subtle parallax for the abstract backgrounds
      gsap.to('.bg-glow-1', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: -100,
        ease: 'none'
      });
      gsap.to('.bg-glow-2', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: 100,
        ease: 'none'
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 relative z-10 bg-gray-50/50 dark:bg-[#030712]/50 transition-colors duration-500 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="bg-glow-1 absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="bg-glow-2 absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="services-header text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-md"
          >
            Our Expertise
          </motion.div>
          <h3 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 dark:text-white transition-colors duration-500">
            Capabilities Built For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
              Infinite Scale.
            </span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-500">
            We leverage cutting-edge technologies and proven methodologies to build solutions that propel your business forward into the digital frontier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard3D key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
