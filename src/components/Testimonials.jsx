import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Nexus completely transformed our digital infrastructure. Their AI integration saved us countless hours of manual work.",
    author: "Sarah Jenkins",
    role: "CTO, TechNova",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The level of engineering excellence is unmatched. They delivered a complex headless commerce platform ahead of schedule.",
    author: "Marcus Chen",
    role: "Founder, Elevate Retail",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "A true partner in innovation. Their 3D web experiences helped us increase user engagement by over 300%.",
    author: "Elena Rodriguez",
    role: "Marketing Dir., Aura Design",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0f1c]/80 relative z-10 border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-3">Client Success</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Don't Just Take Our Word For It.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card p-8 flex flex-col relative"
            >
              <Quote className="text-cyan-500/20 w-12 h-12 absolute top-6 right-6" />
              <p className="text-gray-300 italic mb-8 relative z-10 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/50" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-xs text-cyan-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
