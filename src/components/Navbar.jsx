import { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeHeroIndex = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3 shadow-lg shadow-black/5 dark:shadow-black/20' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Hexagon className="text-cyan-500 dark:text-cyan-400 w-8 h-8" fill="currentColor" fillOpacity={0.2} />
          </motion.div>
          <span className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-300 ${
            (activeHeroIndex === 2 || activeHeroIndex === 0) && !isScrolled ? 'text-gray-900' : 'text-gray-900 dark:text-white'
          }`}>
            Desire<span className="text-cyan-500 dark:text-cyan-400"></span>InfoWeb
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors text-sm font-medium tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-500 dark:after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full ${
                (activeHeroIndex === 2 || activeHeroIndex === 0) && !isScrolled
                  ? 'text-gray-600 hover:text-gray-900'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 border border-cyan-400/20"
          >
            Get Started
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className={`transition-colors ${
              (activeHeroIndex === 2 || activeHeroIndex === 0) && !isScrolled
                ? 'text-gray-600 hover:text-gray-900'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-card mx-4 mt-2 p-4 flex flex-col gap-4 border border-black/5 dark:border-white/10 md:hidden bg-white/90 dark:bg-gray-900/90"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
