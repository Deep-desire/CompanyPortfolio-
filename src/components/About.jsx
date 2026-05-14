import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Delivered', value: '250+' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Global Partners', value: '50+' }
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empowering Visionaries <br />
              <span className="text-cyan-400">With Technology.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We are a collective of forward-thinking engineers, designers, and strategists. 
              Our mission is to translate complex challenges into elegant, scalable digital 
              experiences that drive growth and redefine industry standards.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-card p-6 border-cyan-500/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-cyan-400 font-medium tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-3xl absolute inset-0 -z-10" />
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-2 rounded-2xl overflow-hidden border-gray-700 relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working" 
                className="rounded-xl w-full h-[500px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
