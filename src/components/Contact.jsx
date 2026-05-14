import React, { Suspense, lazy } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

// --- Spline Scene Component ---
const Spline = lazy(() => import('@splinetool/react-spline'));

function SplineScene({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  );
}

// --- Spotlight Component ---
const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-[#030712] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />


      <div className="w-full min-h-[700px] bg-black/[0.96] relative overflow-hidden border border-white/10 shadow-3xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col lg:flex-row min-h-[700px]">
          {/* Left content: Form & Info */}
          <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center border-r border-white/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8 leading-tight tracking-tight">
                Let's Build <br /> The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Future.</span>
              </h2>

              <p className="text-neutral-400 max-w-xl mb-12 text-base leading-relaxed font-medium">
                Have a groundbreaking idea? Let's bring it to life with immersive 3D experiences and state-of-the-art design.
              </p>

              <form className="space-y-6 max-w-xl" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] ml-2">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 rounded-2xl px-6 py-4 text-white outline-none transition-all duration-300 hover:bg-white/[0.08] placeholder:text-neutral-700 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] ml-2">Email</label>
                    <input
                      type="email"
                      placeholder="john@nexus.dev"
                      className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 rounded-2xl px-6 py-4 text-white outline-none transition-all duration-300 hover:bg-white/[0.08] placeholder:text-neutral-700 text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] ml-2">Message</label>
                  <textarea
                    rows="4"
                    placeholder="How can we help you create something amazing?"
                    className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 rounded-2xl px-6 py-4 text-white outline-none transition-all duration-300 hover:bg-white/[0.08] resize-none placeholder:text-neutral-700 text-sm"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4.5 rounded-2xl bg-white text-black font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
                >
                  Send Message <Send size={20} className="ml-2" />
                </motion.button>
              </form>

              <div className="mt-16 flex flex-wrap gap-12">
                <div className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300">
                    <Mail size={20} className="text-neutral-500 group-hover:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-1">Email Us</p>
                    <p className="font-bold text-sm">hello@nexus.dev</p>
                  </div>
                </div>
                <div className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                    <Phone size={20} className="text-neutral-500 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-1">Call Us</p>
                    <p className="font-bold text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right content: 3D Scene */}
          <div className="flex-[1.2] relative min-h-[500px] lg:min-h-full border-t lg:border-t-0 flex items-center justify-center overflow-hidden bg-black/20">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none lg:hidden" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full scale-[0.8] origin-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
