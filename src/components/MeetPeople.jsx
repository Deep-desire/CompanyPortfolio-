import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';
import { cn } from '../lib/utils';
import VijayPatel from "../assets/Vijay-Patel.webp";
import YashShah from "../assets/Yash-Shah.webp";
import SajidLanza from "../assets/Sajid-Lanza.webp";
import ConradImage from "../assets/Conrad-Image.webp";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_MEMBERS = [
  {
    id: '1',
    name: 'Vijay Patel',
    role: 'CEO',
    image: VijayPatel,
    social: { twitter: '#', linkedin: '#', behance: '#' },
  },
  {
    id: '2',
    name: 'Yash Shah',
    role: 'Project Manager',
    image: YashShah,
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '3',
    name: 'Sajid Lanza',
    role: 'Business Development Manager',
    image: SajidLanza,
    social: { twitter: '#', linkedin: '#' },
  },
  {
    id: '4',
    name: 'Conrad',
    role: 'Business Partner South Africa',
    image: ConradImage,
    social: { linkedin: '#' },
  }
];

function PhotoCard({ member, className, hoveredId, onHover }) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-500 relative group',
        className,
        isDimmed ? 'opacity-40 grayscale scale-95' : 'opacity-100 grayscale-0 scale-100',
        isActive ? 'ring-4 ring-cyan-500/50 border-2 border-cyan-500' : 'border-2 border-transparent'
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.7)',
        }}
      />
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      )}
    </div>
  );
}

function MemberRow({ member, hoveredId, onHover }) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.social?.twitter || member.social?.linkedin || member.social?.instagram || member.social?.behance;

  return (
    <div
      className={cn(
        'cursor-pointer transition-all duration-300 py-2 border-b border-transparent',
        isDimmed ? 'opacity-30 translate-x-0' : 'opacity-100 translate-x-2',
        isActive ? 'border-cyan-500/30' : ''
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-4">
        <span
          className={cn(
            'h-[2px] rounded-full transition-all duration-500',
            isActive ? 'bg-cyan-500 w-12' : 'bg-gray-300 dark:bg-gray-700 w-4',
          )}
        />
        <span
          className={cn(
            'text-xl md:text-2xl font-bold tracking-tight transition-all duration-300',
            isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600',
          )}
        >
          {member.name}
        </span>

        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-3 ml-2 transition-all duration-500',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4 pointer-events-none',
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-full text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10 transition-all duration-200 hover:scale-125"
                title="X / Twitter"
              >
                <FaTwitter size={14} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-full text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10 transition-all duration-200 hover:scale-125"
                title="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-full text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10 transition-all duration-200 hover:scale-125"
                title="Instagram"
              >
                <FaInstagram size={14} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-full text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10 transition-all duration-200 hover:scale-125"
                title="Behance"
              >
                <FaBehance size={14} />
              </a>
            )}
          </div>
        )}
      </div>

      <p className={cn(
        "mt-2 pl-16 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] transition-all duration-300",
        isActive ? "text-cyan-500" : "text-gray-400 dark:text-gray-700"
      )}>
        {member.role}
      </p>
    </div>
  );
}

function TeamShowcase({ members = DEFAULT_MEMBERS }) {
  const [hoveredId, setHoveredId] = useState(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-6xl mx-auto py-12 px-4 md:px-6 font-sans">
      <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0 justify-center w-full lg:w-auto">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-4 md:gap-6 pt-4 lg:pt-10 flex-1 w-full">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

export default function MeetPeople() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.people-header > *', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        skewY: 2,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out'
      });

      gsap.from('.showcase-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="people" ref={sectionRef} className="py-32 relative z-10 bg-white dark:bg-[#030712] transition-colors duration-500 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="people-header text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-md"
          >
            Our Team
          </motion.div>
          <h3 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 dark:text-white transition-colors duration-500">
            Meet the Minds <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
              Behind the Magic.
            </span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-500">
            A diverse collective of designers, developers, and strategists united by a passion for creating extraordinary digital experiences.
          </p>
        </div>

        <div className="showcase-container">
          <TeamShowcase />
        </div>
      </div>
    </section>
  );
}
