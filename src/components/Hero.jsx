import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ThreeScene from './ThreeScene';

export default function Hero() {
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <ThreeScene />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-500" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">
        <div className="text-left space-y-8 max-w-2xl pointer-events-auto">
          <div ref={headingRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-md"
            >
              Future-Ready Digital Solutions
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white transition-colors duration-500">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
                Digital Frontier.
              </span>
            </h1>
          </div>

          <p ref={textRef} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
            Desire Info Web builds high-performance, intelligent, and scalable web experiences that empower businesses to lead in a technology-driven world.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#portfolio"
              className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-semibold rounded-full overflow-hidden flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">View Our Work <ArrowRight size={18} /></span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-gray-400 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-300 text-gray-800 dark:text-white font-semibold rounded-full flex items-center justify-center transition-all hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
