import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Zap, LineChart, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Uncompromising Security",
    description: "Enterprise-grade security protocols built into every layer of your application.",
    icon: ShieldCheck
  },
  {
    title: "Lightning Fast",
    description: "Optimized for maximum performance to deliver exceptional user experiences.",
    icon: Zap
  },
  {
    title: "Data-Driven Insights",
    description: "Advanced analytics integration to help you make informed business decisions.",
    icon: LineChart
  },
  {
    title: "AI-Powered",
    description: "Leveraging the latest in machine learning to automate and innovate.",
    icon: Cpu
  }
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-block', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className={`feature-block glass-card p-6 border-gray-800 ${idx === 1 || idx === 3 ? 'sm:mt-12' : ''}`}>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 text-cyan-400">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-3">Why Choose Nexus</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              The Engine Behind <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Your Success.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't just write code; we build digital assets that compound in value. 
              Our holistic approach ensures that your solution is not only technically 
              superior but perfectly aligned with your business objectives.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex px-8 py-4 rounded-full bg-white text-gray-950 font-bold"
            >
              Start Your Project
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
