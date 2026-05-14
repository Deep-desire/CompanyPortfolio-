import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    testimonial: "Nexus completely transformed our digital infrastructure. Their AI integration saved us countless hours of manual work. It's the first thing I check every morning.",
    author: "Sarah Jenkins - CTO @ TechNova",
    imgId: 32
  },
  {
    id: 2,
    testimonial: "The level of engineering excellence is unmatched. They delivered a complex headless commerce platform ahead of schedule. My team is now 3x more productive.", 
    author: "Marcus Chen - Founder @ Elevate Retail",
    imgId: 12
  },
  {
    id: 3,
    testimonial: "Can not believe the value they bring. Their 3D web experiences helped us increase user engagement by over 300%. I'd name my next startup after them.",
    author: "Elena Rodriguez - Marketing Dir. @ Aura Design",
    imgId: 44
  }
];

function TestimonialCard({ handleShuffle, testimonial, position, imgId, author }) {
  const dragRef = useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
        scale: position === "front" ? 1 : position === "middle" ? 0.95 : 0.9,
        opacity: position === "front" ? 1 : position === "middle" ? 0.7 : 0.4
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e, info) => {
        if (dragRef.current - info.point.x > 100 || dragRef.current - info.point.x < -100) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute left-0 top-0 flex flex-col h-[480px] w-full max-w-[400px] select-none justify-center space-y-10 rounded-[2.5rem] border border-white/10 bg-white/5 dark:bg-zinc-900/40 p-12 shadow-2xl backdrop-blur-xl transition-colors duration-500 ${
        isFront ? "cursor-grab active:cursor-grabbing border-cyan-500/30" : "pointer-events-none"
      }`}
    >
      <div className="relative">
        <Quote className="text-cyan-500/10 w-20 h-20 absolute -top-12 -left-12" />
        <img
          src={`https://i.pravatar.cc/256?img=${imgId}`}
          alt={`Avatar of ${author}`}
          className="pointer-events-none mx-auto h-24 w-24 rounded-full border-4 border-white/10 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 object-cover shadow-xl"
        />
      </div>
      
      <p className="text-center text-lg md:text-xl italic leading-relaxed text-gray-800 dark:text-gray-300 transition-colors">
        "{testimonial}"
      </p>
      
      <div className="text-center space-y-1">
        <span className="block text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
          {author.split(' - ')[0]}
        </span>
        <span className="block text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500">
          {author.split(' - ')[1]}
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    setPositions((prev) => {
      const newPositions = [...prev];
      newPositions.unshift(newPositions.pop());
      return newPositions;
    });
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-500">
      {/* Background Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-bold"
            >
              Client Success
            </motion.div>
            <h3 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white transition-colors duration-500 tracking-tighter">
              Don't Just Take <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">Our Word For It.</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors leading-relaxed max-w-xl mx-auto lg:mx-0">
              Drag the cards to shuffle through our latest success stories and see how we've helped industry leaders transform their digital presence.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/64?img=${i + 10}`} 
                    className="w-12 h-12 rounded-full border-4 border-white dark:border-[#030712]"
                    alt="User"
                  />
                ))}
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs font-bold border-4 border-white dark:border-[#030712]">
                  +50
                </div>
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Trusted by 50+ Brands</p>
            </div>
          </div>

          {/* Shuffling Cards Container */}
          <div className="lg:w-1/2 flex justify-center items-center py-20 lg:py-0">
            <div className="relative h-[480px] w-full max-w-[400px]">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  {...testimonial}
                  handleShuffle={handleShuffle}
                  position={positions[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
