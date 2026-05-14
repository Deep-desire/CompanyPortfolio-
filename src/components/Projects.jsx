import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.projects-header > *',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'expo.out'
        }
      );

      // Cards Animation
      gsap.fromTo('.project-card',
        { y: 80, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'expo.out',
          clearProps: 'all'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative z-10 bg-[#030712] transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="projects-header flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-sm font-bold text-purple-500 tracking-[0.2em] uppercase mb-4">
              Selected Work
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects.</span>
            </h3>
          </div>

          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="group text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-3 pb-2 border-b-2 border-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
          >
            View All Projects
            <ExternalLink size={20} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform duration-300" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -15 }}
              className="project-card group relative bg-gray-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />

                {/* Hover Action Buttons */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <button className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300">
                    <Code size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                  {project.title}
                </h4>
                <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-bold px-4 py-2 rounded-xl bg-white/5 text-gray-300 border border-white/10 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
