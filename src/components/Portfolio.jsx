import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import { ExternalLink, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-purple-400 tracking-widest uppercase mb-3">Selected Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects.</span></h3>
          </div>
          <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 pb-2 border-b border-cyan-400/30 hover:border-cyan-300 transition-colors">
            View All Projects <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="project-card group rounded-2xl overflow-hidden glass-card border border-gray-800 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-80" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors">
                    <Code size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700">
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
