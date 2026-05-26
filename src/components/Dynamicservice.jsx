import { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import { motion } from 'motion/react';
import * as THREE from 'three';
import {
    Zap, BarChart3, Database, Bot, Layout, Workflow,
    Globe, Mail, Phone, Link2, Share2, Play,
    ArrowRight, Cpu, Users, CheckCircle, Building2, Heart,
    Factory, ShoppingCart, GraduationCap, Landmark, MoreHorizontal,
    Cloud, Shield, TrendingUp, Brain, Settings, Activity,
    FileSearch, Layers, MessageSquare, ChevronRight, Monitor,
    BarChart2, Lock, Server, Lightbulb, Target,
    Boxes, GitBranch, Sparkles, Radio, BookOpen, Video,
    DollarSign, ShoppingBag, Truck, MapPin, User, ChevronUp
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
const statsData = [
    { value: '1 Platform', label: 'Unified Experience' },
    { value: '6+ Modules', label: 'End-to-End Coverage' },
    { value: '100%', label: 'Microsoft Cloud' },
    { value: '99.9%', label: 'Uptime & Reliability' },
    { value: 'AI-Powered', label: 'Intelligent Insights' },
];

const benefitItems = [
    { title: 'Unified Platform', desc: 'Single data model and seamless integration' },
    { title: 'Real-time Insights', desc: 'AI-powered analytics and reporting' },
    { title: 'Scalable & Secure', desc: 'Enterprise-grade security and compliance' },
    { title: 'Faster Time to Value', desc: 'Pre-built apps and industry best practices' },
    { title: 'Continuous Innovation', desc: 'Regular updates and new capabilities' },
];

const coverageModules = [
    { label: 'Marketing', icon: Sparkles },
    { label: 'Sales', icon: Target },
    { label: 'Service', icon: Bot },
    { label: 'Finance', icon: DollarSign },
    { label: 'Operations', icon: Settings },
    { label: 'Supply Chain', icon: Truck },
    { label: 'Commerce', icon: ShoppingBag },
    { label: 'HR', icon: Users },
];

// ─── 3D Auxiliary Components ──────────────────────────────────────────────────
function CoinStack3D() {
    return (
        <group position={[-1.7, -0.92, 0.8]} rotation={[0, 0.2, 0.1]} scale={[0.85, 0.85, 0.85]}>
            {/* Coin 1 */}
            <mesh position={[0, 0, 0]} castShadow>
                <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
                <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Coin 2 */}
            <mesh position={[0.05, 0.05, -0.05]} castShadow>
                <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
                <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Coin 3 */}
            <mesh position={[-0.08, 0.1, 0.02]} castShadow>
                <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
                <meshStandardMaterial color="#d97706" metalness={0.9} roughness={0.1} />
            </mesh>
        </group>
    );
}

function DeliveryTruck3D() {
    return (
        <group position={[1.7, -0.92, 0.8]} rotation={[0, -0.5, 0]} scale={[0.65, 0.65, 0.65]}>
            {/* Cabin */}
            <mesh position={[-0.3, 0.15, 0]} castShadow>
                <boxGeometry args={[0.4, 0.3, 0.3]} />
                <meshStandardMaterial color="#4f46e5" metalness={0.5} roughness={0.2} />
            </mesh>
            {/* Trailer */}
            <mesh position={[0.2, 0.25, 0]} castShadow>
                <boxGeometry args={[0.7, 0.45, 0.32]} />
                <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.3} />
            </mesh>
            {/* Wheels */}
            {[-0.35, 0.05, 0.45].map((x, i) => (
                <group key={i} position={[x, 0.0, 0]}>
                    <mesh position={[0, 0, 0.165]} rotation={[Math.PI/2, 0, 0]} castShadow>
                        <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
                        <meshStandardMaterial color="#1e293b" roughness={0.8} />
                    </mesh>
                    <mesh position={[0, 0, -0.165]} rotation={[Math.PI/2, 0, 0]} castShadow>
                        <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
                        <meshStandardMaterial color="#1e293b" roughness={0.8} />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

function Warehouse3D() {
    return (
        <group position={[0, -0.95, 1.8]} scale={[0.65, 0.65, 0.65]} rotation={[0, Math.PI, 0]}>
            {/* Main building */}
            <mesh position={[0, 0.25, 0]} castShadow>
                <boxGeometry args={[0.8, 0.5, 0.6]} />
                <meshStandardMaterial color="#475569" metalness={0.5} roughness={0.2} />
            </mesh>
            {/* Roof */}
            <mesh position={[0, 0.55, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
                <boxGeometry args={[0.58, 0.58, 0.62]} />
                <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.2} />
            </mesh>
            {/* Door */}
            <mesh position={[0, 0.15, 0.301]}>
                <boxGeometry args={[0.3, 0.3, 0.01]} />
                <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}

// ─── 3D Dynamics 365 Logo Component ──────────────────────────────────────────
function Dynamics3653DLogo() {
    const groupRef = useRef();
    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.y = t * 0.55;
        groupRef.current.position.y = 0.25 + Math.sin(t * 1.5) * 0.08;
    });

    const extrudeSettings = useMemo(() => ({
        depth: 0.12,
        bevelEnabled: true,
        bevelSegments: 5,
        steps: 1,
        bevelSize: 0.02,
        bevelThickness: 0.02,
    }), []);

    // Chevron 1: Back layer
    const chevron1 = useMemo(() => {
        const s = new THREE.Shape();
        s.moveTo(-0.4, 0.5);
        s.lineTo(0.1, 0.0);
        s.lineTo(-0.4, -0.5);
        s.lineTo(-0.2, -0.5);
        s.lineTo(0.3, 0.0);
        s.lineTo(-0.2, 0.5);
        return s;
    }, []);

    // Chevron 2: Front layer
    const chevron2 = useMemo(() => {
        const s = new THREE.Shape();
        s.moveTo(-0.2, 0.3);
        s.lineTo(0.3, -0.2);
        s.lineTo(-0.2, -0.7);
        s.lineTo(0.0, -0.7);
        s.lineTo(0.5, -0.2);
        s.lineTo(0.0, 0.3);
        return s;
    }, []);

    return (
        <group ref={groupRef} position={[0, 0.2, 0]}>
            {/* Back Indigo Ribbon */}
            <mesh castShadow position={[0, 0, -0.05]}>
                <extrudeGeometry args={[chevron1, extrudeSettings]} />
                <meshPhysicalMaterial
                    color="#4f46e5"
                    emissive="#3730a3"
                    emissiveIntensity={0.2}
                    roughness={0.15}
                    metalness={0.6}
                    clearcoat={1.0}
                    transmission={0.2}
                />
            </mesh>
            {/* Front Purple/Pink Ribbon */}
            <mesh castShadow position={[0.1, 0.1, 0.05]}>
                <extrudeGeometry args={[chevron2, extrudeSettings]} />
                <meshPhysicalMaterial
                    color="#ec4899"
                    emissive="#db2777"
                    emissiveIntensity={0.3}
                    roughness={0.1}
                    metalness={0.4}
                    clearcoat={1.0}
                    transmission={0.4}
                />
            </mesh>
        </group>
    );
}

// ─── Glowing Base / Pedestal ──────────────────────────────────────────────────
function NeonRing({ radius, color, speed, thickness = 0.018 }) {
    const ref = useRef();
    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        ref.current.rotation.z = t * speed;
        ref.current.material.emissiveIntensity = 0.5 + Math.sin(t * 2.5 + radius) * 0.4;
    });
    return (
        <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[radius, thickness, 8, 80]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.9} />
        </mesh>
    );
}

function GroundPipe({ angle, color, isActive }) {
    const ref = useRef();
    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        const baseIntensity = isActive ? 1.6 : 0.4;
        const speed = isActive ? 6.0 : 2.5;
        ref.current.material.emissiveIntensity = baseIntensity + Math.sin(t * speed + angle * 2) * (isActive ? 0.8 : 0.3);
    });

    const length = 2.8;
    const radius = isActive ? 0.032 : 0.022;

    const x = Math.sin(angle) * (length / 2);
    const z = Math.cos(angle) * (length / 2);

    return (
        <mesh position={[x, -0.98, z]} rotation={[Math.PI / 2, 0, angle + Math.PI / 2]}>
            <cylinderGeometry args={[radius, radius, length, 16]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={isActive ? 2.0 : 0.6}
                metalness={0.5}
                roughness={0.1}
            />
        </mesh>
    );
}

function DynamicsHubScene({ activeService }) {
    const platformRef = useRef();
    const rimRef1 = useRef();
    const rimRef2 = useRef();
    const rimRef3 = useRef();

    useFrame((state) => {
        if (!platformRef.current) return;
        const t = state.clock.getElapsedTime();
        platformRef.current.rotation.y = t * 0.12;

        // Pulsate base neon rims
        if (rimRef1.current) rimRef1.current.material.emissiveIntensity = 1.0 + Math.sin(t * 3.0) * 0.4;
        if (rimRef2.current) rimRef2.current.material.emissiveIntensity = 0.8 + Math.cos(t * 2.5) * 0.3;
        if (rimRef3.current) rimRef3.current.material.emissiveIntensity = 1.2 + Math.sin(t * 4.0) * 0.5;
    });

    const serviceTexts = {
        crm: { title: "Dynamics CRM", tagline: "Build strong relationships and drive sales growth." },
        finance: { title: "Dynamics Finance", tagline: "Gain real-time visibility & smarter decisions." },
        erp: { title: "Dynamics ERP", tagline: "Streamline operations & improve agility." },
        commerce: { title: "Dynamics Commerce", tagline: "Connected commerce experiences that delight." },
        supplychain: { title: "Supply Chain", tagline: "Optimize supply chain & deliver on promises." },
        default: { title: "Microsoft Dynamics 365", tagline: "One Platform. Unlimited Possibilities." }
    };

    const currentText = serviceTexts[activeService] || serviceTexts.default;

    return (
        <>
            <ambientLight color="#ddd6fe" intensity={1.3} />
            <pointLight position={[-3, 4, 3]} color="#a855f7" intensity={9} distance={14} />
            <pointLight position={[3, 3, -3]} color="#3b82f6" intensity={7} distance={14} />
            <pointLight position={[0, 5, 0]} color="#ffffff" intensity={3} distance={12} />
            <spotLight position={[0, 6, 2]} color="#ec4899" intensity={5} angle={0.4} penumbra={1} distance={16} />
            <pointLight position={[0, -2, 0]} color="#7c3aed" intensity={2} distance={6} />

            {/* Ground pipes extending from pedestal */}
            <GroundPipe angle={-3 * Math.PI / 4} color="#a855f7" isActive={activeService === 'crm'} />
            <GroundPipe angle={-Math.PI / 4} color="#fb923c" isActive={activeService === 'finance'} />
            <GroundPipe angle={3 * Math.PI / 4} color="#4f46e5" isActive={activeService === 'erp'} />
            <GroundPipe angle={Math.PI / 2} color="#ec4899" isActive={activeService === 'commerce'} />
            <GroundPipe angle={Math.PI / 4} color="#06b6d4" isActive={activeService === 'supplychain'} />

            {/* 3D Auxiliary objects placed relative to the cards */}
            <CoinStack3D />
            <DeliveryTruck3D />
            <Warehouse3D />

            {/* Platform base */}
            <group ref={platformRef} position={[0, -0.9, 0]}>
                {/* Bottom Base */}
                <mesh position={[0, -0.15, 0]} receiveShadow>
                    <cylinderGeometry args={[1.7, 1.75, 0.15, 64]} />
                    <meshStandardMaterial color="#0b0b1a" metalness={0.9} roughness={0.15} />
                </mesh>
                {/* Bottom neon glow ring */}
                <mesh position={[0, -0.07, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.72, 0.025, 8, 64]} />
                    <meshStandardMaterial ref={rimRef1} color="#ec4899" emissive="#ec4899" emissiveIntensity={1.0} transparent opacity={0.8} />
                </mesh>

                {/* Main Central Cylinder (where text goes) */}
                <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[1.45, 1.45, 0.8, 64]} />
                    <meshStandardMaterial color="#131034" metalness={0.9} roughness={0.1} />
                </mesh>
                {/* Middle neon glow ring */}
                <mesh position={[0, 0.72, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.47, 0.02, 8, 64]} />
                    <meshStandardMaterial ref={rimRef2} color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.8} transparent opacity={0.8} />
                </mesh>

                {/* Top concentric discs (Chrome metallic steps) */}
                <mesh position={[0, 0.76, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[1.25, 1.25, 0.08, 64]} />
                    <meshStandardMaterial color="#ffffff" metalness={1.0} roughness={0.05} />
                </mesh>
                <mesh position={[0, 0.84, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[1.05, 1.05, 0.08, 64]} />
                    <meshStandardMaterial color="#ffffff" metalness={1.0} roughness={0.05} />
                </mesh>
                <mesh position={[0, 0.92, 0]} castShadow receiveShadow>
                    <cylinderGeometry args={[0.85, 0.85, 0.06, 64]} />
                    <meshStandardMaterial color="#ffffff" metalness={1.0} roughness={0.05} />
                </mesh>
                {/* Top neon glow ring */}
                <mesh position={[0, 0.96, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.87, 0.015, 8, 64]} />
                    <meshStandardMaterial ref={rimRef3} color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.2} transparent opacity={0.9} />
                </mesh>
            </group>

            {/* Neon rings orbiting the hub */}
            <NeonRing radius={1.05} color="#7c3aed" speed={0.35} />
            <NeonRing radius={1.3} color="#3b82f6" speed={-0.22} thickness={0.014} />
            <NeonRing radius={1.62} color="#ec4899" speed={0.16} thickness={0.011} />
            <NeonRing radius={1.9} color="#06b6d4" speed={-0.12} thickness={0.009} />

            {/* Floating Logo */}
            <Float speed={1.5} rotationIntensity={0.06} floatIntensity={0.45}>
                <Dynamics3653DLogo />
            </Float>

            {/* Pedestal Text (Html projected overlay, 100% reliable and non-suspending) */}
            <Html
                position={[0, -0.58, 1.48]}
                transform
                occlude={false}
                distanceFactor={1.2}
                rotation={[-0.15, 0, 0]}
                pointerEvents="none"
            >
                <div style={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: "'Poppins', sans-serif",
                    width: '320px',
                    userSelect: 'none'
                }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 900, margin: 0, lineHeight: 1.1, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        {currentText.title}
                    </h2>
                    <p style={{ fontSize: '8px', color: '#cbd5e1', fontWeight: 500, margin: '5px 0 0 0', lineHeight: 1.3, textShadow: '0 1px 5px rgba(0,0,0,0.4)' }}>
                        {currentText.tagline}
                    </p>
                </div>
            </Html>

            {/* Ground glow */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.0, 0]}>
                <circleGeometry args={[2.2, 64]} />
                <meshBasicMaterial color="#7c3aed" transparent opacity={0.07} />
            </mesh>
        </>
    );
}

function DynamicsHub3D({ activeService }) {
    return (
        <Canvas camera={{ position: [0, 1.5, 5], fov: 42 }} gl={{ antialias: true, alpha: true }} shadows style={{ background: 'transparent' }}>
            <Suspense fallback={null}>
                <DynamicsHubScene activeService={activeService} />
            </Suspense>
        </Canvas>
    );
}

// ─── Mockup Components ────────────────────────────────────────────────────────
function CRMMockup() {
    return (
        <div className="flex gap-2 h-20 items-stretch">
            {/* Funnel card */}
            <div className="flex-1 bg-white/70 rounded-lg p-1.5 border border-slate-100 flex flex-col justify-between">
                <span className="text-[5.5px] font-bold text-slate-500 uppercase tracking-wider">Pipeline</span>
                <div className="flex flex-col gap-0.5 mt-1">
                    {['#4f46e5', '#8b5cf6', '#ec4899'].map((c, i) => (
                        <div key={i} className="h-2 rounded-sm flex items-center justify-between px-1" style={{ background: c + '15', borderLeft: `2.5px solid ${c}` }}>
                            <span className="text-[5px] font-semibold text-slate-600">{['Leads', 'Qualify', 'Closed'][i]}</span>
                            <span className="text-[5px] font-extrabold text-[#1e1b4b]">{['280', '112', '45'][i]}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Donut chart */}
            <div className="w-[75px] bg-white/70 rounded-lg p-1.5 border border-slate-100 flex flex-col items-center justify-between">
                <span className="text-[5px] font-bold text-slate-500">Opportunities</span>
                <svg viewBox="0 0 32 32" className="w-8 h-8 my-0.5">
                    <circle cx="16" cy="16" r="11" fill="none" stroke="#f1f5f9" strokeWidth="5.5" />
                    <circle cx="16" cy="16" r="11" fill="none" stroke="#8b5cf6" strokeWidth="5.5" strokeDasharray="45 25" strokeDashoffset="0" transform="rotate(-90 16 16)" />
                    <circle cx="16" cy="16" r="11" fill="none" stroke="#ec4899" strokeWidth="5.5" strokeDasharray="18 52" strokeDashoffset="-45" transform="rotate(-90 16 16)" />
                    <text x="50%" y="54%" textAnchor="middle" fontSize="6.5" fill="#374151" fontWeight="black">68%</text>
                </svg>
                <span className="text-[4.5px] text-green-500 font-bold">+8.3% Win Rate</span>
            </div>
        </div>
    );
}

function FinanceMockup() {
    return (
        <div className="flex gap-2 h-20 items-stretch">
            {/* Metrics */}
            <div className="w-20 bg-white/70 rounded-lg p-1.5 border border-slate-100 flex flex-col justify-between">
                <div className="border-b border-slate-100 pb-0.5">
                    <span className="text-[4.5px] text-slate-400 font-bold uppercase">Total Revenue</span>
                    <p className="text-[7.5px] font-black text-[#1e1b4b] leading-none">$14.6M</p>
                </div>
                <div className="pt-0.5">
                    <span className="text-[4.5px] text-slate-400 font-bold uppercase">Net Profit</span>
                    <p className="text-[7.5px] font-black text-indigo-600 leading-none">$7.8M</p>
                </div>
            </div>
            {/* Revenue bar chart */}
            <div className="flex-1 bg-white/70 rounded-lg p-1.5 border border-slate-100 flex flex-col">
                <span className="text-[5px] font-bold text-slate-500 mb-1">Revenue vs Expense</span>
                <div className="flex items-end gap-1 flex-1">
                    {[35, 60, 40, 75, 50, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i % 2 === 0 ? '#4f46e5' : '#ec4899' }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ERPMockup() {
    return (
        <div className="flex flex-col justify-between h-20 bg-white/70 rounded-lg p-1.5 border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[5.5px] text-slate-600 font-bold">Active Projects: 124</span>
                </div>
                <span className="text-[5px] text-indigo-600 font-extrabold">87% Utilization</span>
            </div>
            {/* Sparkline chart */}
            <div className="flex-1 flex flex-col justify-end mt-1.5">
                <div className="flex items-end h-6 gap-0.5">
                    {[20, 45, 30, 60, 55, 80, 70, 95].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: '#8b5cf6' }} />
                    ))}
                </div>
                <div className="flex justify-between text-[4.5px] text-slate-400 font-semibold mt-0.5">
                    <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                </div>
            </div>
        </div>
    );
}

function CommerceMockup() {
    return (
        <div className="flex gap-2 h-20 items-stretch">
            {/* Sales channels */}
            <div className="flex-1 bg-white/70 rounded-lg p-1.5 border border-slate-100 flex flex-col justify-between">
                <span className="text-[5px] font-bold text-slate-500">Sales Channels</span>
                <div className="flex flex-col gap-0.5 mt-0.5">
                    {['Online', 'Retail', 'Mobile'].map((ch, i) => (
                        <div key={i} className="flex justify-between items-center text-[4.8px]">
                            <span className="text-slate-500 font-bold">{ch}</span>
                            <span className="text-[#1e1b4b] font-black">{['62%', '28%', '10%'][i]}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Donut channel */}
            <div className="w-[75px] bg-white/70 rounded-lg p-1.5 border border-slate-100 flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-10 h-10">
                    <circle cx="16" cy="16" r="11" fill="none" stroke="#f1f5f9" strokeWidth="5" />
                    <circle cx="16" cy="16" r="11" fill="none" stroke="#0ea5e9" strokeWidth="5" strokeDasharray="62 38" strokeDashoffset="0" transform="rotate(-90 16 16)" />
                    <circle cx="16" cy="16" r="11" fill="none" stroke="#ec4899" strokeWidth="5" strokeDasharray="28 72" strokeDashoffset="-62" transform="rotate(-90 16 16)" />
                </svg>
            </div>
        </div>
    );
}

function SupplyChainMockup() {
    return (
        <div className="flex gap-2 h-20 items-stretch">
            {/* shipment status */}
            <div className="flex-1 bg-white/70 rounded-lg p-1.5 border border-slate-100 flex flex-col justify-between">
                <span className="text-[5px] font-bold text-slate-500">Active Shipments</span>
                <div className="flex items-center justify-between border-b border-slate-100 pb-0.5">
                    <span className="text-[7.5px] font-black text-[#1e1b4b]">1,247</span>
                    <span className="text-[4.5px] text-green-500 font-bold">96.5% On-Time</span>
                </div>
                <div className="flex justify-between text-[4.5px] mt-0.5">
                    <span className="text-slate-500">In-Transit: 840</span>
                    <span className="text-slate-500">Delayed: 12</span>
                </div>
            </div>
            {/* World Map graphic */}
            <div className="w-[100px] bg-white/70 rounded-lg border border-slate-100 p-1 flex items-center justify-center overflow-hidden relative">
                {/* Stylized map canvas / SVG */}
                <svg viewBox="0 0 100 50" className="w-full h-full opacity-60">
                    {/* Outline of continents represented as paths */}
                    <path d="M 10,15 A 5,5 0 0,0 20,20 A 8,8 0 0,0 35,28 Z" fill="none" stroke="#cbd5e1" strokeWidth="1" />
                    <path d="M 45,10 A 10,10 0 0,1 70,25 Z" fill="none" stroke="#cbd5e1" strokeWidth="1" />
                    <path d="M 25,35 A 4,4 0 0,0 35,45 Z" fill="none" stroke="#cbd5e1" strokeWidth="1" />
                    {/* Flow routes */}
                    <path d="M 20,18 C 30,10 50,15 60,20" fill="none" stroke="#6366f1" strokeWidth="0.8" strokeDasharray="3,2" />
                    <path d="M 60,20 C 50,30 35,35 25,37" fill="none" stroke="#ec4899" strokeWidth="0.8" strokeDasharray="3,2" />
                    {/* Pulsing shipment points */}
                    <circle cx="20" cy="18" r="1.5" fill="#6366f1" />
                    <circle cx="60" cy="20" r="1.5" fill="#ec4899" />
                    <circle cx="25" cy="37" r="1.5" fill="#22d3ee" />
                </svg>
            </div>
        </div>
    );
}

// ─── Connection Lines SVG ─────────────────────────────────────────────────────
function ConnectionLines({ paths }) {
    const lines = [
        { id: 'dyn-c1', path: paths.crm, color: "#a855f7", cls: "dyn-flow1", dur: "3s" },
        { id: 'dyn-c2', path: paths.finance, color: "#fb923c", cls: "dyn-flow2", dur: "3.5s" },
        { id: 'dyn-c3', path: paths.erp, color: "#4f46e5", cls: "dyn-flow3", dur: "2.5s" },
        { id: 'dyn-c4', path: paths.commerce, color: "#ec4899", cls: "dyn-flow4", dur: "4s" },
        { id: 'dyn-c5', path: paths.supplyChain, color: "#0ea5e9", cls: "dyn-flow5", dur: "2.8s" },
    ];

    const activeLines = lines.filter(l => l.path);

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ minHeight: '100%' }}>
            <defs>
                <filter id="dyn-glow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                {/* Gradients */}
                {activeLines.map(l => (
                    <linearGradient key={l.id} id={l.id} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor={l.color} />
                    </linearGradient>
                ))}
                <style>{`
                    .dyn-flow1 { animation: dyn-dash1 3s linear infinite; }
                    .dyn-flow2 { animation: dyn-dash2 3.5s linear infinite; }
                    .dyn-flow3 { animation: dyn-dash3 2.5s linear infinite; }
                    .dyn-flow4 { animation: dyn-dash4 4s linear infinite; }
                    .dyn-flow5 { animation: dyn-dash5 2.8s linear infinite; }
                    @keyframes dyn-dash1 { to { stroke-dashoffset: -60; } }
                    @keyframes dyn-dash2 { to { stroke-dashoffset: -70; } }
                    @keyframes dyn-dash3 { to { stroke-dashoffset: -50; } }
                    @keyframes dyn-dash4 { to { stroke-dashoffset: -65; } }
                    @keyframes dyn-dash5 { to { stroke-dashoffset: -55; } }
                `}</style>
            </defs>

            {/* Static dashed flow lines */}
            {activeLines.map((line) => (
                <path
                    key={line.id}
                    d={line.path}
                    fill="none"
                    stroke={`url(#${line.id})`}
                    strokeWidth="2"
                    strokeDasharray="10,6"
                    className={line.cls}
                    filter="url(#dyn-glow)"
                    opacity="0.8"
                />
            ))}

            {/* Pulsing animated dots */}
            {activeLines.map((line, i) => (
                <circle key={i} r="5" fill={line.color} filter="url(#dyn-glow)" opacity="0.9">
                    <animateMotion dur={line.dur} repeatCount="indefinite" path={line.path} />
                </circle>
            ))}
        </svg>
    );
}

// ─── Service Card Component ──────────────────────────────────────────────────
function ServiceCard({ title, tagline, color, accentColor, bullets, MockupComponent, delay = 0, Icon, horizontal = false, onMouseEnter, onMouseLeave }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.02, y: -3 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="relative rounded-2xl p-3.5 overflow-hidden h-full flex flex-col justify-between"
            style={{
                background: 'rgba(255,255,255,0.82)',
                backdropFilter: 'blur(20px)',
                border: `1.5px solid ${accentColor}35`,
                boxShadow: `0 8px 32px ${accentColor}12, inset 0 1px 0 rgba(255,255,255,0.9)`,
                minHeight: horizontal ? '190px' : 'auto',
            }}
        >
            {/* Top glow accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-15 pointer-events-none" style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }} />
            {/* Bottom accent stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }} />

            {horizontal ? (
                <div className="flex gap-3 h-full w-full">
                    {/* Left side: Icon + Title + Bullets */}
                    <div className="flex flex-col justify-between flex-1 min-w-0">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-md" style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}>
                                    <Icon className="w-3.5 h-3.5 text-white" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11.5px] font-black text-[#1e1b4b] leading-tight truncate">{title}</p>
                                    <p className="text-[7.5px] text-slate-500 leading-tight mt-0.5 line-clamp-2">{tagline}</p>
                                </div>
                            </div>
                            <ul className="space-y-0.5">
                                {bullets.map((b, i) => (
                                    <li key={i} className="flex items-center gap-1.5">
                                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: accentColor }} />
                                        <span className="text-[7.5px] text-slate-600 font-semibold leading-tight">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side: Mockup */}
                    <div className="w-[130px] shrink-0 flex items-center justify-center">
                        <div className="w-full">
                            <MockupComponent />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md" style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}>
                            <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-[12px] font-black text-[#1e1b4b] leading-tight">{title}</p>
                            <p className="text-[8px] text-slate-500 leading-none mt-0.5">{tagline}</p>
                        </div>
                    </div>
                    <MockupComponent />
                    <ul className="mt-2 space-y-1">
                        {bullets.map((b, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accentColor }} />
                                <span className="text-[8.5px] text-slate-600 font-bold leading-tight">{b}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </motion.div>
    );
}

// ─── Microsoft Logo placeholder ───────────────────────────────────────────────
function MicrosoftIcon({ className = 'w-6 h-6' }) {
    return (
        <svg viewBox="0 0 21 21" className={className}>
            <rect x="0" y="0" width="10" height="10" fill="#f25022" />
            <rect x="11" y="0" width="10" height="10" fill="#7fba00" />
            <rect x="0" y="11" width="10" height="10" fill="#00a4ef" />
            <rect x="11" y="11" width="10" height="10" fill="#ffb900" />
        </svg>
    );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function Dynamicservice() {
    const [activeService, setActiveService] = useState(null);
    const containerRef = useRef(null);
    const hubRef = useRef(null);
    const crmRef = useRef(null);
    const financeRef = useRef(null);
    const erpRef = useRef(null);
    const commerceRef = useRef(null);
    const supplyChainRef = useRef(null);

    const [linePaths, setLinePaths] = useState({
        crm: '',
        finance: '',
        erp: '',
        commerce: '',
        supplyChain: ''
    });

    useEffect(() => {
        const updatePaths = () => {
            if (!containerRef.current || !hubRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            const hubRect = hubRef.current.getBoundingClientRect();

            // Center of the Hub
            const hubX = hubRect.left - containerRect.left + hubRect.width / 2;
            const hubY = hubRect.top - containerRect.top + hubRect.height / 2;

            const getPoint = (ref, side) => {
                if (!ref.current) return { x: 0, y: 0 };
                const rect = ref.current.getBoundingClientRect();
                const x = rect.left - containerRect.left;
                const y = rect.top - containerRect.top;
                if (side === 'left') {
                    return { x: x + rect.width, y: y + rect.height / 2 };
                } else if (side === 'right') {
                    return { x: x, y: y + rect.height / 2 };
                } else if (side === 'bottom') {
                    return { x: x + rect.width / 2, y: y };
                } else {
                    return { x: x + rect.width / 2, y: y + rect.height };
                }
            };

            const crmPt = getPoint(crmRef, 'left');
            const finPt = getPoint(financeRef, 'left');
            const erpPt = getPoint(erpRef, 'right');
            const comPt = getPoint(commerceRef, 'right');
            const scPt = getPoint(supplyChainRef, 'bottom');

            setLinePaths({
                crm: `M ${hubX},${hubY} C ${(hubX + crmPt.x) / 2},${hubY} ${(hubX + crmPt.x) / 2},${crmPt.y} ${crmPt.x},${crmPt.y}`,
                finance: `M ${hubX},${hubY} C ${(hubX + finPt.x) / 2},${hubY} ${(hubX + finPt.x) / 2},${finPt.y} ${finPt.x},${finPt.y}`,
                erp: `M ${hubX},${hubY} C ${(hubX + erpPt.x) / 2},${hubY} ${(hubX + erpPt.x) / 2},${erpPt.y} ${erpPt.x},${erpPt.y}`,
                commerce: `M ${hubX},${hubY} C ${(hubX + comPt.x) / 2},${hubY} ${(hubX + comPt.x) / 2},${comPt.y} ${comPt.x},${comPt.y}`,
                supplyChain: `M ${hubX},${hubY} C ${hubX},${(hubY + scPt.y) / 2} ${scPt.x},${(hubY + scPt.y) / 2} ${scPt.x},${scPt.y}`
            });
        };

        updatePaths();
        const t1 = setTimeout(updatePaths, 150);
        const t2 = setTimeout(updatePaths, 600);

        window.addEventListener('resize', updatePaths);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            window.removeEventListener('resize', updatePaths);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            id="dynamics-showcase"
            className="relative w-full overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f8f4ff 0%, #eee7ff 30%, #fdf7ff 60%, #eee7ff 85%, #fbf8ff 100%)',
                fontFamily: "'Poppins', sans-serif"
            }}
        >
            {/* Connection lines overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <ConnectionLines paths={linePaths} />
            </div>
            {/* Background glowing blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-purple-300/25 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-white rounded-full blur-[100px] opacity-70" />
                <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-[110px]" />
                <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-pink-300/12 rounded-full blur-[90px]" />
                {/* Dot Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
                    <defs>
                        <pattern id="dyn-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="#7c3aed" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dyn-dots)" />
                </svg>
            </div>

            <div className="relative z-10 px-4 lg:px-6 xl:px-8 pt-5 pb-3 max-w-[1600px] mx-auto">

                {/* ── TOP BAR ── */}
                <div className="flex items-center justify-between gap-4 mb-4">
                    {/* Brand Logo */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2.5 min-w-[200px] shrink-0">
                        <img
                            src="/logo.png"
                            alt="DesireInfoWeb Logo"
                            className="w-12 h-12 object-contain filter drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)]"
                        />
                        <div>
                            <p className="text-[16px] font-black text-[#1e1b4b] leading-tight">DesireInfoWeb</p>
                            <p className="text-[8px] font-semibold text-slate-500">Your Extended <span className="text-pink-500 font-extrabold">Technology Partner</span></p>
                        </div>
                    </motion.div>

                    {/* Metrics Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-6 px-5 py-2.5 rounded-[20px]"
                        style={{
                            background: 'rgba(255,255,255,0.7)',
                            backdropFilter: 'blur(16px)',
                            border: '1.5px solid rgba(124,58,237,0.2)',
                            boxShadow: '0 8px 32px rgba(124,58,237,0.08)',
                        }}
                    >
                        {statsData.map((stat, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Zap className="w-4.5 h-4.5 text-purple-600 shrink-0" />
                                <div>
                                    <p className="text-[12.5px] font-black text-[#1e1b4b] leading-none">{stat.value}</p>
                                    <p className="text-[7.5px] font-semibold text-slate-500 leading-none mt-0.5">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Partner badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl shrink-0"
                        style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(59,130,246,0.25)', boxShadow: '0 4px 16px rgba(59,130,246,0.1)' }}
                    >
                        <MicrosoftIcon className="w-7 h-7" />
                        <div>
                            <p className="text-[9px] font-black text-[#1e1b4b]">Microsoft Solutions Partner</p>
                            <p className="text-[7px] text-blue-600 font-semibold">Business Applications</p>
                        </div>
                    </motion.div>
                </div>

                {/* ── TITLE BLOCK ── */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-4">
                    <div className="flex items-end gap-6">
                        <div>
                            <h1 className="text-3xl xl:text-4xl font-black leading-tight mb-1">
                                <span className="text-[#1e1b4b]">Dynamics </span>
                                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent">365</span>
                            </h1>
                            <p className="text-[15px] font-black leading-snug">
                                <span className="text-[#1e1b4b]">Unify. Optimize. </span>
                                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-extrabold">Grow.</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-[1.5px] w-8 bg-amber-500 rounded-full" />
                            <span className="text-[11px] font-black text-amber-500">+</span>
                            <div className="h-[1.5px] w-8 bg-amber-500 rounded-full" />
                        </div>
                        <p className="text-[9px] text-slate-500 leading-relaxed max-w-xs">
                            Intelligent business applications that unify your people, processes, and data.
                        </p>
                    </div>
                </motion.div>

                {/* ── MAIN 3-COLUMN GRID ── */}
                <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 1.4fr 1fr', alignItems: 'stretch' }}>

                    {/* ── LEFT COLUMN: CRM + Finance ── */}
                    <div className="flex flex-col gap-3">
                        <div ref={crmRef} className="flex-1">
                            <ServiceCard
                                title="CRM"
                                tagline="Build strong customer relationships."
                                color="#8b5cf6" accentColor="#a855f7"
                                Icon={Users}
                                MockupComponent={CRMMockup}
                                bullets={['Sales Automation', 'Customer Service', 'Marketing Automation', 'Field Service']}
                                delay={0.1}
                                horizontal={true}
                                onMouseEnter={() => setActiveService('crm')}
                                onMouseLeave={() => setActiveService(null)}
                            />
                        </div>
                        <div ref={financeRef} className="flex-1">
                            <ServiceCard
                                title="Finance"
                                tagline="Real-time financial visibility & smarter decisions."
                                color="#f59e0b" accentColor="#fb923c"
                                Icon={DollarSign}
                                MockupComponent={FinanceMockup}
                                bullets={['General Ledger', 'Accounts Payable', 'Accounts Receivable', 'Financial Reporting']}
                                delay={0.2}
                                horizontal={true}
                                onMouseEnter={() => setActiveService('finance')}
                                onMouseLeave={() => setActiveService(null)}
                            />
                        </div>
                    </div>

                    {/* ── CENTER: 3D Hub ── */}
                    <div ref={hubRef} className="flex flex-col items-center justify-center" style={{ minHeight: '460px' }}>
                        <div className="w-full h-full" style={{ minHeight: '460px' }}>
                            <Suspense fallback={
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-purple-200 animate-pulse" />
                                </div>
                            }>
                                <DynamicsHub3D activeService={activeService} />
                            </Suspense>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN: ERP + Commerce ── */}
                    <div className="flex flex-col gap-3">
                        <div ref={erpRef} className="flex-1">
                            <ServiceCard
                                title="ERP"
                                tagline="Streamline operations and improve agility."
                                color="#4f46e5" accentColor="#6366f1"
                                Icon={Layers}
                                MockupComponent={ERPMockup}
                                bullets={['Financial Management', 'Project Operations', 'Resource Management', 'Reporting & Analytics']}
                                delay={0.15}
                                horizontal={true}
                                onMouseEnter={() => setActiveService('erp')}
                                onMouseLeave={() => setActiveService(null)}
                            />
                        </div>
                        <div ref={commerceRef} className="flex-1">
                            <ServiceCard
                                title="Commerce"
                                tagline="Connected commerce experiences that delight."
                                color="#ec4899" accentColor="#f472b6"
                                Icon={ShoppingCart}
                                MockupComponent={CommerceMockup}
                                bullets={['Unified Commerce', 'eCommerce', 'Store Operations', 'Customer Loyalty']}
                                delay={0.25}
                                horizontal={true}
                                onMouseEnter={() => setActiveService('commerce')}
                                onMouseLeave={() => setActiveService(null)}
                            />
                        </div>
                    </div>

                </div>

                {/* ── BOTTOM ROW GRID ── */}
                <div className="grid grid-cols-12 gap-3.5 mt-3 items-stretch">
                    {/* Supply Chain Card (Bottom Center) */}
                    <div className="col-span-12 lg:col-span-9">
                        <div ref={supplyChainRef} className="w-full">
                            <ServiceCard
                                title="Supply Chain"
                                tagline="Optimize your supply chain and deliver on customer promise."
                                color="#06b6d4" accentColor="#22d3ee"
                                Icon={Truck}
                                MockupComponent={SupplyChainMockup}
                                bullets={['Inventory Management', 'Warehouse Management', 'Demand Forecasting', 'Logistics & Transportation']}
                                delay={0.35}
                                horizontal={true}
                                onMouseEnter={() => setActiveService('supplychain')}
                                onMouseLeave={() => setActiveService(null)}
                            />
                        </div>
                    </div>

                    {/* Benefit Feature Panel (Far Right) */}
                    <div className="col-span-12 lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-[24px] p-4 flex flex-col justify-between h-full"
                            style={{
                                background: 'rgba(255, 255, 255, 0.45)',
                                backdropFilter: 'blur(20px)',
                                border: '1.5px solid rgba(255, 255, 255, 0.7)',
                                boxShadow: '0 8px 32px rgba(124,58,237,0.06)',
                            }}
                        >
                            <p className="text-[11.5px] font-black text-[#1e1b4b] uppercase tracking-wider mb-3 text-center border-b border-purple-100/50 pb-2">Platform Benefits</p>
                            <div className="flex flex-col gap-3.5 flex-1 justify-center">
                                {benefitItems.map((item, i) => (
                                    <div key={i} className="flex gap-2.5 items-start">
                                        <div className="w-6.5 h-6.5 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-4 h-4 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="text-[9.5px] font-black text-[#1e1b4b] leading-tight">{item.title}</p>
                                            <p className="text-[7.5px] text-slate-500 font-semibold mt-0.5 leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── FOOTER ROW ── */}
                <div className="grid grid-cols-12 gap-3 mt-3 items-stretch">
                    {/* Ecosystem navigation bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="col-span-12 lg:col-span-5 rounded-[24px] p-3 flex flex-col justify-between"
                        style={{ background: 'rgba(255, 255, 255, 0.45)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 4px 20px rgba(124,58,237,0.06)' }}
                    >
                        {/* Title with yellow accent lines */}
                        <div className="flex items-center gap-2 mb-2 w-full justify-center">
                            <div className="h-[1.5px] w-4 bg-amber-400/80 rounded-full" />
                            <p className="text-[9px] font-black text-[#1e1b4b] uppercase tracking-wider leading-none">End-to-End Business Coverage</p>
                            <div className="h-[1.5px] w-4 bg-amber-400/80 rounded-full" />
                        </div>

                        <div className="flex items-center justify-around w-full mt-1">
                            {coverageModules.map((module, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.1, y: -2 }} className="flex flex-col items-center gap-0.5 cursor-pointer">
                                    <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100">
                                        <module.icon className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <span className="text-[6.5px] text-slate-500 font-extrabold text-center mt-0.5">{module.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Button (Bottom Center) */}
                    <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            animate={{ boxShadow: ['0 0 18px rgba(139,92,246,0.4)', '0 0 30px rgba(236,72,153,0.5)', '0 0 18px rgba(139,92,246,0.4)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="relative w-full h-full flex flex-col items-center justify-center py-4 rounded-[24px] text-white cursor-pointer overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #4f46e5, #8b5cf6, #ec4899)' }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                animate={{ x: ['-150%', '150%'] }}
                                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                            />
                            <p className="text-[12px] font-black uppercase tracking-wider leading-none">One Experience.</p>
                            <p className="text-[9px] font-semibold text-purple-100 tracking-wide mt-1 flex items-center gap-1">
                                Endless Possibilities <Sparkles className="w-3 h-3 text-amber-300" />
                            </p>
                        </motion.button>
                    </div>

                    {/* Contact card with QR Code (Bottom Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-span-12 lg:col-span-3 rounded-[24px] p-3 flex items-center justify-between gap-3"
                        style={{ background: 'rgba(255, 255, 255, 0.45)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 4px 20px rgba(124,58,237,0.06)' }}
                    >
                        {/* Info */}
                        <div className="flex flex-col justify-between gap-1 flex-1">
                            <a href="https://www.desireinfoweb.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-600 hover:text-purple-600 transition-colors">
                                <Globe className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                                <span className="text-[8px] font-extrabold truncate">www.desireinfoweb.com</span>
                            </a>
                            <a href="mailto:vijay@desireinfoweb.com" className="flex items-center gap-1.5 text-slate-600 hover:text-purple-600 transition-colors">
                                <Mail className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                                <span className="text-[8px] font-extrabold truncate">vijay@desireinfoweb.com</span>
                            </a>
                            <a href="tel:+918780468807" className="flex items-center gap-1.5 text-slate-600 hover:text-purple-600 transition-colors">
                                <Phone className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                                <span className="text-[8px] font-extrabold truncate">+91-8780468807</span>
                            </a>
                        </div>
                        {/* QR Code */}
                        <div className="w-13 h-13 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-1 shrink-0 shadow-sm">
                            <svg viewBox="0 0 29 29" className="w-full h-full text-[#1e1b4b]">
                                {/* Outer corners */}
                                <path d="M0,0 h8 v2 h-6 v6 h-2 z M21,0 h8 v8 h-2 v-6 h-6 z M0,21 h2 v6 h6 v2 h-8 z M27,21 h2 v8 h-8 v-2 h6 z" fill="currentColor" />
                                {/* Inner squares */}
                                <rect x="3" y="3" width="3" height="3" fill="currentColor" />
                                <rect x="23" y="3" width="3" height="3" fill="currentColor" />
                                <rect x="3" y="23" width="3" height="3" fill="currentColor" />
                                {/* Center mock data grid */}
                                <rect x="9" y="9" width="2" height="2" fill="currentColor" />
                                <rect x="13" y="9" width="3" height="1" fill="currentColor" />
                                <rect x="18" y="9" width="2" height="2" fill="currentColor" />
                                <rect x="9" y="14" width="1" height="3" fill="currentColor" />
                                <rect x="14" y="14" width="2" height="2" fill="currentColor" />
                                <rect x="18" y="14" width="2" height="1" fill="currentColor" />
                                <rect x="9" y="19" width="3" height="2" fill="currentColor" />
                                <rect x="14" y="19" width="1" height="2" fill="currentColor" />
                                <rect x="17" y="19" width="3" height="2" fill="currentColor" />
                            </svg>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
