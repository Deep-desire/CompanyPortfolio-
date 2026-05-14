import { Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-cyan-900/20 to-transparent -z-10" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-cyan-500/20 overflow-hidden relative">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px]" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Build The <span className="text-cyan-400">Future.</span></h2>
              <p className="text-gray-400 mb-8">
                Ready to transform your ideas into reality? Reach out to our team of experts and let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <span>hello@nexus.dev</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#030712]/50 border border-gray-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-white outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 ml-1">Company</label>
                  <input type="text" placeholder="Acme Corp" className="w-full bg-[#030712]/50 border border-gray-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-white outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400 ml-1">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-[#030712]/50 border border-gray-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-white outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400 ml-1">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full bg-[#030712]/50 border border-gray-700 focus:border-cyan-500 rounded-xl px-4 py-3 text-white outline-none transition-colors resize-none"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center gap-2 mt-4"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
