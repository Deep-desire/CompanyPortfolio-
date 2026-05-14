import { technologies } from '../data/technologies';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function TechStack() {
  return (
    <section className="py-20 border-y border-gray-800/50 bg-[#050b14] relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase">Powered by modern technologies</h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {technologies.map((tech, idx) => {
            const Icon = Icons[tech.icon] || Icons.Box;
            return (
              <motion.div 
                key={tech.name}
                whileHover={{ y: -5, opacity: 1, scale: 1.1 }}
                className="flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <Icon size={32} />
                <span className="text-xs font-semibold tracking-wider">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
