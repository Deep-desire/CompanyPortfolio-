import { useEffect, useRef, useState, useId } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);
  const id = useId();

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [active]);

  return (
    <>
      {active && typeof document !== 'undefined' && createPortal(
        <>
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-md h-full w-full z-[100]"
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {active && (
              <div
                className={cn(
                  "fixed inset-0 grid place-items-center z-[101] p-4",
                )}
              >
                <motion.div
                  layoutId={`card-${title}-${id}`}
                  ref={cardRef}
                  className={cn(
                    "w-full max-w-7xl h-[80vh] flex flex-col overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] sm:rounded-3xl bg-zinc-50 shadow-2xl dark:shadow-none dark:bg-zinc-950 relative",
                    classNameExpanded,
                  )}
                  {...props}
                >
                  <motion.div layoutId={`image-${title}-${id}`}>
                    <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:h-[70px] before:z-50 before:bg-gradient-to-t dark:before:from-zinc-950 before:from-zinc-50">
                      <img
                        src={src}
                        alt={title}
                        className="w-full h-96 object-cover object-center"
                      />
                    </div>
                  </motion.div>
                  <div className="relative h-full before:fixed before:inset-x-0 before:bottom-0 before:h-[70px] before:z-50 before:bg-gradient-to-t dark:before:from-zinc-950 before:from-zinc-50">
                    <div className="flex justify-between items-start p-8 h-auto">
                      <div>
                        <motion.p
                          layoutId={`description-${description}-${id}`}
                          className="text-zinc-500 dark:text-zinc-400 text-lg"
                        >
                          {description}
                        </motion.p>
                        <motion.h3
                          layoutId={`title-${title}-${id}`}
                          className="font-semibold text-black dark:text-white text-4xl sm:text-4xl mt-0.5"
                        >
                          {title}
                        </motion.h3>
                      </div>
                      <motion.button
                        aria-label="Close card"
                        layoutId={`button-${title}-${id}`}
                        className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-950 text-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-950 dark:text-white/70 text-black/70 border border-gray-200/90 dark:border-zinc-900 hover:border-gray-300/90 hover:text-black dark:hover:text-white dark:hover:border-zinc-800 transition-colors duration-300 focus:outline-none"
                        onClick={() => setActive(false)}
                      >
                        <motion.div
                          animate={{ rotate: active ? 45 : 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                        </motion.div>
                      </motion.button>
                    </div>
                    <div className="relative px-6 sm:px-8">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-zinc-500 dark:text-zinc-400 text-base pb-10 flex flex-col items-start gap-4 overflow-auto "
                      >
                        {children}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>,
        document.body
      )}

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "p-3 flex flex-col justify-between items-center bg-zinc-50 shadow-sm dark:shadow-none dark:bg-zinc-950 rounded-2xl cursor-pointer border border-gray-200/70 dark:border-zinc-900 h-full",
          className,
        )}
      >
        <div className="flex gap-4 flex-col h-full">
          <motion.div layoutId={`image-${title}-${id}`}>
            <img
              src={src}
              alt={title}
              className="w-full h-56 rounded-lg object-cover object-center"
            />
          </motion.div>
          <div className="flex justify-between items-center mt-auto">
            <div className="flex flex-col">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-zinc-500 dark:text-zinc-400 md:text-left text-sm font-medium"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="text-black dark:text-white md:text-left font-semibold"
              >
                {title}
              </motion.h3>
            </div>
            <motion.button
              aria-label="Open card"
              layoutId={`button-${title}-${id}`}
              className={cn(
                "h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-950 text-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-950 dark:text-white/70 text-black/70 border border-gray-200/90 dark:border-zinc-900 hover:border-gray-300/90 hover:text-black dark:hover:text-white dark:hover:border-zinc-800 transition-colors duration-300  focus:outline-none",
                className,
              )}
            >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.projects-header > *',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'expo.out'
        }
      );

      // Cards Animation
      gsap.fromTo('.project-card-wrapper',
        { y: 80, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'expo.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative z-10 bg-[#030712] transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="projects-header flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-sm font-bold text-purple-500 tracking-[0.2em] uppercase mb-4">
              Selected Work
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects.</span>
            </h3>
          </div>

          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="group text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-3 pb-2 border-b-2 border-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
          >
            View All Projects
            <ExternalLink size={20} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform duration-300" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper h-full">
              <ExpandableCard
                title={project.title}
                src={project.image}
                description={project.tags[0]}
                classNameExpanded="dark:bg-zinc-950"
              >
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-black dark:text-white">Project Overview</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Year</p>
                      <p className="font-bold text-black dark:text-white">2024</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Status</p>
                      <p className="font-bold text-black dark:text-white">Completed</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h4 className="text-xl font-bold text-black dark:text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-xl bg-purple-500/10 text-purple-400 text-sm font-bold border border-purple-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
                      Explore Full Case Study
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </ExpandableCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
