import { Hexagon, Globe, Mail, MessageCircle, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-[#030712] pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Hexagon className="text-cyan-400 w-6 h-6" fill="currentColor" fillOpacity={0.2} />
              <span className="text-xl font-bold tracking-tighter text-white">
                NEXUS<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Architecting the digital frontier. We build high-performance web applications for forward-thinking companies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><FileText size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Solutions</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cloud Architecture</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nexus Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <span className="text-red-500">♥</span>
            <span>using React & Three.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
