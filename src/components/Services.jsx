import React, { useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Puzzle, Infinity as InfinityIcon, LineChart, Brain, Shield, Layers } from 'lucide-react';

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const COLOR = {
  navy: '#1E1B4B',
  purple: '#6D28D9',
  purple2: '#8B5CF6',
  pink: '#EC4899',
  blue: '#2563EB',
  text: '#334155',
  subtext: '#64748B',
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 'sharepoint', title: 'SharePoint', position: 'top-left',
    glowColor: '#00b29b',
    bullets: ['Intranet & Portals', 'Content Management', 'Document Collaboration', 'Knowledge Management'],
    icon: 'sharepoint',
  },
  {
    id: 'm365', title: 'Microsoft 365', position: 'top-center',
    glowColor: '#0078d4',
    bullets: ['Productivity Apps', 'Secure Collaboration', 'Enterprise Mobility', 'Microsoft 365 Copilot'],
    icon: 'm365',
    extra: 'badges365',
  },
  {
    id: 'teams', title: 'Microsoft Teams', position: 'top-right',
    glowColor: '#4f46e5',
    bullets: ['Team Collaboration', 'Meetings & Calls', 'Chat & Channels', 'Teams Premium'],
    icon: 'teams',
  },
  {
    id: 'powerplatform', title: 'Power Platform', position: 'mid-left',
    glowColor: '#7c3aed',
    bullets: ['Power Apps', 'Power Automate', 'Power BI', 'Power Virtual Agents', 'Process Automation'],
    icon: 'powerplatform',
    extra: 'ppbadges',
  },
  {
    id: 'azure', title: 'Azure', position: 'mid-right',
    glowColor: '#0078d4',
    bullets: ['Cloud Infrastructure', 'App Modernization', 'Data & AI Services', 'Security & Compliance', 'DevOps & Integration'],
    icon: 'azure',
  },
  {
    id: 'dynamics', title: 'Dynamics 365', position: 'bot-left',
    glowColor: '#6d28d9',
    bullets: ['Sales', 'Customer Service', 'Finance & Operations', 'Marketing', 'Supply Chain'],
    icon: 'dynamics',
  },
  {
    id: 'copilot', title: 'Copilot & AI', position: 'bot-right',
    glowColor: '#db2777',
    bullets: ['Microsoft Copilot', 'AI Automation', 'Intelligent Insights', 'Predictive Analytics', 'Business Innovation'],
    icon: 'copilot',
  },
];

const BENEFITS = [
  { title: 'Unified. Intelligent. Secure.', desc: 'All Microsoft technologies working seamlessly together.' },
  { title: 'Scalable & Future Ready', desc: 'Cloud-first solutions built for innovation and growth.' },
  { title: 'Productivity Amplified', desc: 'Empower teams, automate work, and deliver exceptional experiences.' },
  { title: 'Trusted & Secure', desc: 'Enterprise-grade security, compliance and governance at scale.' },
];

const CERTS = [
  { num: '6', text: 'Microsoft Solutions Partner Designations' },
  { num: '5', text: 'Advanced Specializations' },
  { num: '50+', text: 'Microsoft Certified Professionals' },
  { num: '100+', text: 'Microsoft Certifications Across Technologies' },
  { num: '100%', text: 'Commitment to Security, Compliance & Quality' },
];

const PARTNERS = [
  { name: 'Microsoft', sub: 'Solutions Partner', icon: 'ms' },
  { name: 'Microsoft', sub: 'Azure', icon: 'azure' },
  { name: 'Microsoft', sub: '365', icon: 'm365' },
  { name: 'Microsoft', sub: 'Power Platform', icon: 'pp' },
];



// ─── ICON COMPONENTS ──────────────────────────────────────────────────────────

const MsLogo = ({ size = 28 }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, width: size, height: size }}>
    <div style={{ background: '#f25022', borderRadius: 2 }} />
    <div style={{ background: '#7fba00', borderRadius: 2 }} />
    <div style={{ background: '#00a4ef', borderRadius: 2 }} />
    <div style={{ background: '#ffb900', borderRadius: 2 }} />
  </div>
);

const ServiceIcon = ({ type, size = 44 }) => {
  const s = size;
  const icons = {
    sharepoint: (
      <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <circle cx="27" cy="14" r="10" fill="#00b294" opacity=".25" />
        <circle cx="20" cy="20" r="8" fill="#00b294" opacity=".45" />
        <circle cx="15" cy="26" r="5" fill="#00b294" opacity=".7" />
        <rect x="16" y="8" width="18" height="22" rx="3" fill="url(#sp1)" />
        <text x="25" y="23" fontFamily="system-ui" fontSize="13" fontWeight="900" fill="#fff" textAnchor="middle">S</text>
        <defs>
          <linearGradient id="sp1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00b294" />
            <stop offset="100%" stopColor="#007a65" />
          </linearGradient>
        </defs>
      </svg>
    ),
    m365: (
      <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <polygon points="22,3 40,12 40,32 22,41 4,32 4,12" fill="url(#m365a)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <text x="22" y="26" fontFamily="system-ui" fontSize="11" fontWeight="900" fill="#fff" textAnchor="middle">365</text>
        <defs>
          <linearGradient id="m365a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#0078d4" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>
    ),
    teams: (
      <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <circle cx="30" cy="14" r="6" fill="#7b83eb" />
        <path d="M22 26c0-5 5-6.5 8-6.5s8 1.5 8 6.5v4H22v-4z" fill="#5c62d6" />
        <rect x="6" y="14" width="18" height="18" rx="3" fill="url(#ta1)" />
        <text x="15" y="26.5" fontFamily="system-ui" fontSize="13" fontWeight="900" fill="#fff" textAnchor="middle">T</text>
        <defs>
          <linearGradient id="ta1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5558af" />
            <stop offset="100%" stopColor="#3730a3" />
          </linearGradient>
        </defs>
      </svg>
    ),
    azure: (
      <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <path d="M22 4L4 38h11l7-14 7 14h11L22 4z" fill="url(#az1)" />
        <path d="M22 18l-7 14h14l-7-14z" fill="url(#az2)" opacity=".8" />
        <defs>
          <linearGradient id="az1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0078d4" />
          </linearGradient>
          <linearGradient id="az2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>
    ),
    copilot: (
      <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="16" fill="url(#cop1)" opacity=".15" />
        <circle cx="22" cy="22" r="11" fill="url(#cop1)" />
        <circle cx="22" cy="22" r="6" fill="url(#cop2)" />
        <circle cx="22" cy="22" r="3" fill="white" opacity=".9" />
        <defs>
          <linearGradient id="cop1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="35%" stopColor="#7c3aed" />
            <stop offset="70%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="cop2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>
      </svg>
    ),
    dynamics: (
      <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <path d="M8 8l14 14L8 36V8z" fill="#4338ca" />
        <path d="M22 22l14-14H14L8 16l14 14z" fill="url(#dyn1)" />
        <path d="M22 22l14 14H14l-6-6 14-14z" fill="url(#dyn2)" />
        <defs>
          <linearGradient id="dyn1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="dyn2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    ),
    powerplatform: (
      <svg width={s} height={s} viewBox="0 0 44 44" fill="none">
        <path d="M22 6l16 16-16 16L6 22 22 6z" fill="url(#pp1)" />
        <path d="M22 14l8 8-8 8-8-8 8-8z" fill="url(#pp2)" opacity=".8" />
        <circle cx="22" cy="22" r="4.5" fill="white" opacity=".95" />
        <defs>
          <linearGradient id="pp1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="pp2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
      </svg>
    ),
    ms: (
      <div className="grid grid-cols-2 gap-[2px] w-5 h-5">
        <div className="bg-[#f25022] rounded-[2px]" />
        <div className="bg-[#7fba00] rounded-[2px]" />
        <div className="bg-[#00a4ef] rounded-[2px]" />
        <div className="bg-[#ffb900] rounded-[2px]" />
      </div>
    ),
  };
  return icons[type] || null;
};

// ─── GLASS CARD WRAPPER ───────────────────────────────────────────────────────

const GlassCard = ({ children, className = '', style = {}, hover = true }) => (
  <div
    className={`bg-white/50 backdrop-blur-xl border border-white/75 rounded-[30px] shadow-[0_16px_48px_rgba(109,40,217,0.08)] transition-all duration-300 ${hover ? 'hover:shadow-[0_24px_64px_rgba(109,40,217,0.16)] hover:bg-white/65 hover:scale-[1.02]' : ''} ${className}`}
    style={style}
  >
    {children}
  </div>
);

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────

const ServiceCard = ({ service, delay = 0 }) => {
  const app365 = ['W', 'X', 'P', 'O', 'T', 'N'];
  const appColors = ['#0078d4', '#107c41', '#c43e1c', '#0078d4', '#4f46e5', '#80397b'];
  const ppApps = [
    { l: 'PA', c: '#742774' }, { l: 'PA', c: '#0066ff' },
    { l: 'BI', c: '#f2c811' }, { l: 'PV', c: '#0f6cbd' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, y: -6 }}
      animate={{ y: [0, -5, 0] }}
    >
      <GlassCard className="px-3.5 py-2.5 w-[210px]" style={{ animationDelay: `${delay}s` }}>
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          {/* Icon on platform */}
          <div className="relative flex flex-col items-center flex-shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
              style={{
                background: 'rgba(255,255,255,0.9)',
                boxShadow: `0 3px 12px ${service.glowColor}33`,
                border: `1px solid ${service.glowColor}25`,
              }}
            >
              <ServiceIcon type={service.icon} size={20} />
            </div>
            {/* Glow dot under platform */}
            <div
              className="w-6 h-1 rounded-full mt-0.5 blur-[2px]"
              style={{ background: `${service.glowColor}55` }}
            />
          </div>

          <h4 className="text-[12.5px] font-extrabold leading-tight" style={{ color: COLOR.navy }}>
            {service.title}
          </h4>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-200/50 to-transparent mb-1.5" />

        {/* Bullets */}
        <ul className="space-y-0.5">
          {service.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-1.5 text-[10px] font-bold" style={{ color: COLOR.text }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: `${service.glowColor}cc` }} />
              {b}
            </li>
          ))}
        </ul>

        {/* Extra: App badges for M365 */}
        {service.extra === 'badges365' && (
          <div className="flex gap-1 mt-2 flex-wrap">
            {app365.map((l, i) => (
              <span
                key={l}
                className="text-white font-bold text-[8px] w-4 h-4 rounded-[3px] flex items-center justify-center shadow-sm"
                style={{ background: appColors[i] }}
              >
                {l}
              </span>
            ))}
          </div>
        )}

        {/* Extra: PP sub-icons */}
        {service.extra === 'ppbadges' && (
          <div className="flex gap-1 mt-2 items-center">
            {ppApps.map((a, i) => (
              <span
                key={i}
                className="text-white font-extrabold text-[6.5px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
                style={{ background: a.c }}
              >
                {a.l}
              </span>
            ))}
            <div className="flex items-end gap-[1.5px] h-3 ml-1">
              {[4, 8, 5, 9].map((h, i) => (
                <span key={i} className="w-[2.5px] rounded-t" style={{ height: h, background: '#eab308' }} />
              ))}
            </div>
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
};

// ─── 3-D SPHERE INNER COMPONENTS (R3F) ───────────────────────────────────────

const HolographicLine = ({ radius, tube, rotation, position, color, speed, offset }) => {
  const matRef = useRef();
  useFrame(({ clock }) => {
    if (matRef.current) {
      const t = clock.getElapsedTime();
      matRef.current.opacity = 0.25 + Math.sin(t * speed + offset) * 0.18;
    }
  });

  return (
    <mesh position={position} rotation={rotation}>
      <torusGeometry args={[radius, tube, 8, 80]} />
      <meshBasicMaterial ref={matRef} color={color} transparent opacity={0.35} depthWrite={false} />
    </mesh>
  );
};

const HolographicGrid = () => {
  const longRef = useRef();
  const latRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (longRef.current) {
      longRef.current.rotation.y = t * 0.06;
    }
    if (latRef.current) {
      latRef.current.rotation.y = -t * 0.04;
    }
  });

  const longitudes = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4];
  const latitudes = [
    { y: 0, r: 1.73, tube: 0.009 },
    { y: 0.85, r: 1.50, tube: 0.008 },
    { y: -0.85, r: 1.50, tube: 0.008 },
    { y: 0.42, r: 1.67, tube: 0.008 },
    { y: -0.42, r: 1.67, tube: 0.008 },
  ];

  return (
    <group>
      <group ref={longRef}>
        {longitudes.map((rotY, i) => (
          <HolographicLine
            key={`long-${i}`}
            radius={1.73}
            tube={0.009}
            rotation={[Math.PI / 2, 0, rotY]}
            position={[0, 0, 0]}
            color="#00f3ff"
            speed={2.2}
            offset={i * 0.5}
          />
        ))}
      </group>
      <group ref={latRef}>
        {latitudes.map((lat, i) => (
          <HolographicLine
            key={`lat-${i}`}
            radius={lat.r}
            tube={lat.tube}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, lat.y, 0]}
            color="#00f3ff"
            speed={1.8}
            offset={i * 0.4 + Math.PI}
          />
        ))}
      </group>
    </group>
  );
};

const NetworkNode = ({ position, speed }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      const s = 0.85 + Math.sin(t * speed) * 0.25;
      ref.current.scale.set(s, s, s);
    }
  });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[0.035, 8, 8]} />
      <meshBasicMaterial color="#a855f7" transparent opacity={0.55} />
    </mesh>
  );
};

const NetworkNodes = () => {
  const nodes = useMemo(() => {
    const temp = [];
    const count = 12;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = 1.71 * Math.sin(phi) * Math.cos(theta);
      const y = 1.71 * Math.cos(phi);
      const z = 1.71 * Math.sin(phi) * Math.sin(theta);
      const speed = 1.5 + (Math.abs(Math.sin(i * 9.13)) * 2);
      temp.push({ pos: [x, y, z], speed });
    }
    return temp;
  }, []);

  return (
    <group>
      {nodes.map((node, i) => (
        <NetworkNode key={i} position={node.pos} speed={node.speed} />
      ))}
    </group>
  );
};

const LightRoute = ({ radius, speed, color, rotation }) => {
  const dotRef = useRef();

  useFrame(({ clock }) => {
    if (dotRef.current) {
      const t = clock.getElapsedTime() * speed;
      dotRef.current.position.set(Math.cos(t) * radius, 0, Math.sin(t) * radius);
    }
  });

  return (
    <group rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, 0.003, 4, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.12} />
      </mesh>
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
};

const RotatingSphere = () => {
  const group = useRef();
  const innerCore = useRef();
  const routesRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = t * 0.09;
    if (routesRef.current) routesRef.current.rotation.y = -t * 0.04;

    const pulse = Math.sin(t * 2.51);
    const s = 0.94 + pulse * 0.02;
    if (innerCore.current) {
      innerCore.current.scale.set(s, s, s);
      innerCore.current.material.opacity = 0.40 + pulse * 0.10;
    }
  });

  return (
    <group>
      <group ref={group}>
        <HolographicGrid />
        <NetworkNodes />
        <mesh>
          <sphereGeometry args={[1.72, 64, 64]} />
          <meshPhysicalMaterial
            color="#b088ff"
            transmission={0.88}
            thickness={2.2}
            roughness={0.06}
            clearcoat={1}
            clearcoatRoughness={0.03}
            ior={1.52}
            transparent
            opacity={0.80}
          />
        </mesh>
      </group>

      <group ref={routesRef}>
        <LightRoute radius={1.90} speed={0.7} color="#a855f7" rotation={[Math.PI / 4, Math.PI / 6, 0]} />
        <LightRoute radius={2.05} speed={-0.6} color="#60a5fa" rotation={[-Math.PI / 3, -Math.PI / 4, Math.PI / 8]} />
        <LightRoute radius={1.82} speed={0.9} color="#f472b6" rotation={[Math.PI / 2.2, 0.15, -Math.PI / 6]} />
      </group>

      <mesh ref={innerCore} scale={0.94}>
        <sphereGeometry args={[1.72, 32, 32]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.40} />
      </mesh>

      <mesh scale={1.015}>
        <sphereGeometry args={[1.72, 32, 32]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>

      <pointLight position={[3, 3, 3]} intensity={3.5} color="#c084fc" />
      <pointLight position={[-3, -3, -3]} intensity={2.5} color="#60a5fa" />
      <pointLight position={[0, 4, 2]} intensity={1.8} color="#f9a8d4" />
    </group>
  );
};

const OrbitRing = ({ radius, tubeR, rotation, color, speed }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * speed;
  });
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tubeR, 8, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  );
};

const OrbitDot = ({ radius, speed, color, offset, baseRotation }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const a = t * speed + offset;
    const v = new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius);
    v.applyEuler(new THREE.Euler(...baseRotation));
    ref.current.position.copy(v);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.065, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const PlatformRings = () => {
  const r1 = useRef(), r2 = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (r1.current) { r1.current.material.opacity = 0.28 + Math.sin(t * 2) * 0.1; }
    if (r2.current) { r2.current.material.opacity = 0.18 + Math.sin(t * 2 + 1) * 0.08; }
  });
  return (
    <group position={[0, -2.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh ref={r1}>
        <torusGeometry args={[2.1, 0.018, 8, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.28} />
      </mesh>
      <mesh ref={r2}>
        <torusGeometry args={[2.6, 0.012, 8, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.18} />
      </mesh>
      {/* Base disc glow */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.08, 0]}>
        <circleGeometry args={[2.0, 64]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// ─── FULL 3D CANVAS ───────────────────────────────────────────────────────────

const EcosystemGlobe = () => {
  const rings = [
    { radius: 2.55, tubeR: 0.007, rotation: [Math.PI / 2.3, 0.18, 0.05], color: '#a855f7', speed: 0.12 },
    { radius: 3.10, tubeR: 0.006, rotation: [Math.PI / 2.0, -0.22, 0.18], color: '#3b82f6', speed: -0.10 },
    { radius: 3.65, tubeR: 0.005, rotation: [Math.PI / 1.75, 0.30, -0.12], color: '#ec4899', speed: 0.08 },
  ];
  const orbitDots = [
    { radius: 2.55, speed: 0.55, color: '#c084fc', offset: 0, base: [Math.PI / 2.3, 0.18, 0.05] },
    { radius: 2.55, speed: -0.40, color: '#60a5fa', offset: Math.PI, base: [Math.PI / 2.3, 0.18, 0.05] },
    { radius: 3.10, speed: 0.40, color: '#f472b6', offset: Math.PI / 2, base: [Math.PI / 2.0, -0.22, 0.18] },
    { radius: 3.10, speed: -0.45, color: '#a78bfa', offset: Math.PI * 1.5, base: [Math.PI / 2.0, -0.22, 0.18] },
    { radius: 3.65, speed: 0.30, color: '#60a5fa', offset: Math.PI / 3, base: [Math.PI / 1.75, 0.30, -0.12] },
    { radius: 3.65, speed: -0.28, color: '#f472b6', offset: Math.PI * 1.2, base: [Math.PI / 1.75, 0.30, -0.12] },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 5.8], fov: 58 }} dpr={[1, 2]}>
      <ambientLight intensity={0.7} />
      <RotatingSphere />
      {rings.map((r, i) => <OrbitRing key={i} {...r} />)}
      {orbitDots.map((d, i) => (
        <OrbitDot key={i} radius={d.radius} speed={d.speed} color={d.color} offset={d.offset} baseRotation={d.base} />
      ))}
      <PlatformRings />
      <Sparkles count={40} scale={5} size={1.4} speed={0.3} color="#d8b4fe" />

      {/* Central label overlay */}
      <Html center zIndexRange={[10, 20]}>
        <div
          className="pointer-events-none select-none flex flex-col items-center text-center"
          style={{ width: 160 }}
        >
          <MsLogo size={30} />
          <p
            className="mt-2.5 font-extrabold tracking-wide leading-tight text-[13px]"
            style={{ color: COLOR.navy, textShadow: '0 1px 4px rgba(255,255,255,0.95)' }}
          >
            Microsoft Ecosystem
          </p>
          <p
            className="mt-1 font-bold text-[9px] tracking-widest"
            style={{ color: COLOR.purple2, textShadow: '0 1px 3px rgba(255,255,255,0.9)' }}
          >
            Connected. Intelligent. Transformative.
          </p>
        </div>
      </Html>
    </Canvas>
  );
};

// ─── LEFT PANEL ───────────────────────────────────────────────────────────────

const BenefitCard = ({ item, i }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: i * 0.08 }}
    className="flex items-start gap-3.5 py-3 group"
  >
    {/* Large purple gradient circle — matches image 1 */}
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
      style={{
        background: 'linear-gradient(135deg,#7c3aed 0%,#9333ea 50%,#a855f7 100%)',
        boxShadow: '0 4px 16px rgba(124,58,237,0.38)',
      }}
    >
      <span className="text-white font-black text-lg leading-none">✦</span>
    </div>
    <div className="min-w-0 pt-0.5">
      <h5 className="text-[13px] font-black leading-tight tracking-tight" style={{ color: COLOR.navy }}>{item.title}</h5>
      <p className="text-[11px] mt-1 leading-snug font-medium" style={{ color: '#6B7280' }}>{item.desc}</p>
    </div>
  </motion.div>
);

const LeftPanel = () => (
  <div className="flex flex-col gap-4 h-full">
    {/* Brand */}
    <div className="flex items-center gap-3">
      {/* DesireInfoWeb logo from /public/logo.webp */}
      <img
        src="/logo.png"
        alt="DesireInfoWeb"
        className="h-11 w-auto object-contain flex-shrink-0"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(139,92,246,0.30))' }}
      />
      <div>
        <div className="font-black text-[16px] tracking-tight" style={{ color: COLOR.navy }}>DesireInfoWeb</div>
        <div className="text-[10px] font-extrabold mt-0.5" style={{ color: COLOR.pink }}>Your Extended Technology Partner</div>
      </div>
    </div>

    {/* Heading */}
    <div>
      <h2 className="text-[28px] md:text-[32px] font-black leading-[1.1] tracking-tight" style={{ color: COLOR.navy }}>
        Microsoft<br />Ecosystem<br />
        <span style={{
          background: 'linear-gradient(90deg,#ec4899,#8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Capabilities</span>
      </h2>
      <p className="text-[11px] mt-3 leading-relaxed font-semibold" style={{ color: COLOR.text, maxWidth: 240 }}>
        End-to-end Microsoft technology capabilities to transform, empower and accelerate your business in the digital era.
      </p>
    </div>

    {/* All 4 benefits inside ONE shared glassmorphism card — matches image 1 */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="bg-white/55 backdrop-blur-xl border border-white/80 rounded-[26px] px-4 py-2 shadow-[0_8px_32px_rgba(109,40,217,0.08)] max-w-[245px]"
    >
      {BENEFITS.map((b, i) => (
        <React.Fragment key={i}>
          <BenefitCard item={b} i={i} />
          {i < BENEFITS.length - 1 && (
            <div className="h-[1px] bg-gradient-to-r from-purple-100/80 via-purple-200/40 to-transparent mx-1" />
          )}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

// ─── ECOSYSTEM CAPABILITIES BAR ───────────────────────────────────────────────

const EcosystemBar = () => {
  const items = [
    { word1: 'Seamless', word2: 'Integration', icon: Puzzle },
    { word1: 'End-to-End', word2: 'Solutions', icon: InfinityIcon },
    { word1: 'Data-Driven', word2: 'Insights', icon: LineChart },
    { word1: 'AI-Powered', word2: 'Intelligence', icon: Brain },
    { word1: 'Secure by', word2: 'Design', icon: Shield },
    { word1: 'Built for', word2: 'Scale', icon: Layers },
  ];

  return (
    <div className="bg-white/45 backdrop-blur-xl border border-white/70 rounded-[22px] px-4 py-2.5 shadow-[0_6px_30px_rgba(109,40,217,0.06)] w-full">
      {/* Header */}
      <div className="flex items-center justify-center gap-2.5 mb-2.5">
        <div className="h-[1.2px] w-10 bg-amber-500 rounded-full" />
        <span className="text-[10px] font-black tracking-wider uppercase text-[#1e1b4b] opacity-90">
          One Ecosystem. Unlimited Possibilities.
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-3 gap-y-2 items-center justify-items-center">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-1.5 w-full sm:justify-center">
              <div className="w-6 h-6 rounded-full bg-purple-50/60 border border-purple-100/30 flex items-center justify-center text-[#8b5cf6] shadow-sm flex-shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="text-[8.5px] leading-[1.1] ml-0.5">
                <div className="font-bold text-[#1e1b4b]">{item.word1}</div>
                <div className="text-slate-500 font-semibold mt-[0.5px]">{item.word2}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─── CENTER SECTION ───────────────────────────────────────────────────────────

// Card position configs for desktop orbital layout (center-relative to prevent overlaps on any screens)
const CARD_POSITIONS = {
  'top-left': { left: '50%', top: '50%', transform: 'translate(-50%, -50%) translate(-230px, -200px)' },
  'top-center': { left: '50%', top: '50%', transform: 'translate(-50%, -50%) translate(0px, -270px)' },
  'top-right': { left: '50%', top: '50%', transform: 'translate(-50%, -50%) translate(230px, -200px)' },
  'mid-left': { left: '50%', top: '50%', transform: 'translate(-50%, -50%) translate(-265px, -10px)' },
  'mid-right': { left: '50%', top: '50%', transform: 'translate(-50%, -50%) translate(265px, -10px)' },
  'bot-left': { left: '50%', top: '50%', transform: 'translate(-50%, -50%) translate(-255px, 185px)' },
  'bot-right': { left: '50%', top: '50%', transform: 'translate(-50%, -50%) translate(255px, 185px)' },
};

const CenterSection = () => (
  <div className="relative flex items-center justify-center" style={{ minHeight: 680 }}>

    {/* Background glow radial */}
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: 520, height: 520,
        left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        background: 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, rgba(37,99,235,0.09) 45%, transparent 75%)',
        filter: 'blur(24px)',
      }}
    />

    {/* Canvas globe */}
    <div
      className="relative z-10 pointer-events-none"
      style={{ width: 380, height: 380, flexShrink: 0 }}
    >
      <EcosystemGlobe />

      {/* Glowing platform base underneath canvas */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -18, left: '50%',
          transform: 'translateX(-50%) perspective(600px) rotateX(68deg)',
          width: 240, height: 44,
          background: 'linear-gradient(to top, rgba(139,92,246,0.30), rgba(59,130,246,0.08))',
          borderRadius: '50%',
          border: '2px solid rgba(139,92,246,0.28)',
          boxShadow: '0 0 40px rgba(139,92,246,0.45)',
        }}
      />
    </div>

    {/* Absolute service cards (desktop orbital) */}
    <div className="absolute inset-0 pointer-events-none hidden xl:block">
      {SERVICES.map((svc, i) => (
        <div
          key={svc.id}
          className="absolute pointer-events-auto"
          style={CARD_POSITIONS[svc.position]}
        >
          <ServiceCard service={svc} delay={i * 0.08} />
        </div>
      ))}
    </div>

    {/* Ecosystem Capabilities Bar placed below the microsoft ecosystem globe pedestal */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 w-[95%] sm:w-[620px] md:w-[660px]"
    >
      <EcosystemBar />
    </motion.div>
  </div>
);

// ─── RIGHT PANEL ──────────────────────────────────────────────────────────────

const RightPanel = () => (
  <div className="flex flex-col gap-5 h-full max-w-[235px]">

    {/* ── Certifications Card — image 2 style ── */}
    <GlassCard className="p-5 flex-grow" hover={false}>

      {/* Header: award icon + title */}
      <div className="flex items-center gap-2.5 mb-3">
        {/* Award / medal ribbon SVG */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8.5" r="5.5" stroke="#8b5cf6" strokeWidth="1.7" />
          <path d="M8.5 13.5L6 21l3.5-1.5L11 22l1-3.5" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 13.5L18 21l-3.5-1.5L13 22l-1-3.5" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 8.5l1.3 1.3L14 6.5" stroke="#8b5cf6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h4 className="text-[13px] font-extrabold tracking-tight" style={{ color: COLOR.navy }}>Microsoft Certifications</h4>
      </div>

      {/* Thin gradient divider */}
      <div className="h-[1px] bg-gradient-to-r from-purple-200 via-purple-100 to-transparent mb-4" />

      {/* Cert rows: big gradient number + description */}
      <div className="space-y-3.5">
        {CERTS.map((c, i) => (
          <div key={i} className="flex items-start gap-2.5">
            {/* Large gradient number container with inner span to prevent background clipping bugs */}
            <span
              className="font-black flex-shrink-0 min-w-[46px] text-left leading-tight"
              style={{
                fontSize: c.num.length <= 2 ? 26 : c.num.length === 3 ? 22 : 18,
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                }}
              >
                {c.num}
              </span>
            </span>
            <span
              className="text-[11px] font-semibold leading-snug"
              style={{ color: '#374151', paddingTop: 1 }}
            >
              {c.text}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>

    {/* ── Trusted Microsoft Partner Card — image 2 style ── */}
    <GlassCard className="p-5" hover={false}>

      {/* Header: simple bold text, no emoji */}
      <h4 className="text-[13px] font-extrabold mb-4 tracking-tight" style={{ color: COLOR.navy }}>
        Trusted Microsoft Partner
      </h4>

      {/* Partner rows: icon square + two-line label */}
      <div className="space-y-3.5">
        {PARTNERS.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-3.5 hover:translate-x-0.5 transition-transform duration-200 cursor-default"
          >
            {/* White square icon badge */}
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-white"
              style={{
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                border: '1px solid rgba(139,92,246,0.12)',
              }}
            >
              <ServiceIcon type={p.icon} size={24} />
            </div>
            {/* Two-line: bold "Microsoft" + lighter sub */}
            <div>
              <div className="text-[12px] font-extrabold leading-tight" style={{ color: COLOR.navy }}>
                {p.name}
              </div>
              {p.sub && (
                <div className="text-[10.5px] font-semibold leading-tight mt-0.5" style={{ color: COLOR.subtext }}>
                  {p.sub}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>

  </div>
);



// ─── MOBILE/TABLET CARD GRID ──────────────────────────────────────────────────

const MobileCardGrid = () => (
  <div className="block xl:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
    {SERVICES.map((svc, i) => (
      <ServiceCard key={svc.id} service={svc} delay={i * 0.07} />
    ))}
  </div>
);

// ─── ROOT COMPONENT ───────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: 'linear-gradient(135deg, #F3EEFF 0%, #EEF3FF 40%, #F8F5FF 70%, #FAFCFF 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 20px 40px',
      }}
    >
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 500, height: 500, top: -80, left: -100, background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute rounded-full" style={{ width: 450, height: 450, bottom: -60, right: -80, background: 'radial-gradient(circle, rgba(236,72,153,0.16) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute rounded-full" style={{ width: 400, height: 400, top: '40%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Inner container */}
      <div style={{ maxWidth: 1720, margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* ── Three-column main layout ── */}
        <div className="grid grid-cols-1 xl:grid-cols-[270px_1fr_235px] gap-6 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <LeftPanel />
          </motion.div>

          {/* Center (sphere + cards) */}
          <CenterSection />

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <RightPanel />
          </motion.div>
        </div>

        {/* Mobile card grid (shown only on < xl) */}
        <MobileCardGrid />



      </div>
    </section>
  );
}
