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
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
function SharePointLogo() {
    return (
        <svg viewBox="0 0 32 32" className="w-7 h-7">
            <circle cx="21" cy="12" r="5" fill="#008272" opacity="0.9" />
            <circle cx="23" cy="17" r="5.5" fill="#005b50" opacity="0.95" />
            <circle cx="18" cy="21" r="5" fill="#107c41" opacity="0.9" />
            <rect x="6" y="9" width="12" height="12" rx="2.5" fill="#107c41" />
            <text x="12" y="18" fill="white" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">S</text>
        </svg>
    );
}

function Microsoft365Logo() {
    return (
        <svg viewBox="0 0 32 32" className="w-8 h-8">
            <defs>
                <linearGradient id="m365-1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#e3008c" />
                    <stop offset="100%" stopColor="#f25f22" />
                </linearGradient>
                <linearGradient id="m365-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0078d4" />
                    <stop offset="100%" stopColor="#00bcf2" />
                </linearGradient>
            </defs>
            <path d="M16,6 C21,6 26,11 26,16 C26,20 23,22 19,22 C14,22 10,14 7,14 C5,14 4,16 4,18 C4,21 8,26 13,26 C19,26 23,21 25,18" fill="none" stroke="url(#m365-1)" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M16,26 C11,26 6,21 6,16 C6,12 9,10 13,10 C18,10 22,18 25,18 C27,18 28,16 28,14 C28,11 24,6 19,6 C13,6 9,11 7,14" fill="none" stroke="url(#m365-2)" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
    );
}

function Dynamics365Logo() {
    return (
        <svg viewBox="0 0 32 32" className="w-7 h-7">
            <defs>
                <linearGradient id="dyn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
            </defs>
            <path d="M15,6 L25,16 L15,26 L10,21 L16,16 L10,11 Z" fill="url(#dyn-grad)" />
            <path d="M6,11 L12,16 L6,21 L6,11 Z" fill="#7c3aed" />
        </svg>
    );
}

function AzureLogo() {
    return (
        <svg viewBox="0 0 32 32" className="w-7 h-7">
            <defs>
                <linearGradient id="az-g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0078d4" />
                    <stop offset="100%" stopColor="#50e6ff" />
                </linearGradient>
                <linearGradient id="az-g2" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#005a9e" />
                    <stop offset="100%" stopColor="#0078d4" />
                </linearGradient>
            </defs>
            <path d="M 5,25 L 14,14 L 19,20 L 10,25 Z" fill="url(#az-g2)" />
            <path d="M 14,14 L 23,5 L 27,21 L 19,20 Z" fill="url(#az-g1)" />
            <path d="M 10,25 L 19,20 L 27,21 L 22,25 Z" fill="#005a9e" opacity="0.8" />
        </svg>
    );
}

function ConnectorsLogo() {
    return (
        <svg viewBox="0 0 32 32" className="w-7 h-7">
            <circle cx="16" cy="16" r="3.5" fill="#7c3aed" />
            <circle cx="8" cy="10" r="2.5" fill="#2563eb" />
            <circle cx="24" cy="10" r="2.5" fill="#ec4899" />
            <circle cx="9" cy="22" r="2.5" fill="#f59e0b" />
            <circle cx="23" cy="22" r="2.5" fill="#107c41" />
            <circle cx="16" cy="26" r="2" fill="#06b6d4" />
            <circle cx="16" cy="6" r="2" fill="#a855f7" />
            <line x1="16" y1="16" x2="8" y2="10" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="2,2" />
            <line x1="16" y1="16" x2="24" y2="10" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="2,2" />
            <line x1="16" y1="16" x2="9" y2="22" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="2,2" />
            <line x1="16" y1="16" x2="23" y2="22" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="2,2" />
            <line x1="16" y1="16" x2="16" y2="26" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="2,2" />
            <line x1="16" y1="16" x2="16" y2="6" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="2,2" />
        </svg>
    );
}

const statsData = [
    { icon: Layout, value: '500+', label: 'Apps Built' },
    { icon: Zap, value: '1M+', label: 'Automated Workflows' },
    { icon: BarChart3, value: '200+', label: 'Dashboards Created' },
    { icon: Share2, value: '50+', label: 'Connectors Supported' },
    { icon: CheckCircle, value: '99.9%', label: 'Platform Reliability' },
];

const featureCards = [
    { icon: Lightbulb, title: 'Low Code. High Impact', desc: 'Build apps faster with low-code innovation.' },
    { icon: Zap, title: 'End-to-End Automation', desc: 'Automate workflows and eliminate manual tasks.' },
    { icon: Database, title: 'Unified Data Platform', desc: 'Secure, scalable, and connected data with Dataverse.' },
    { icon: BarChart3, title: 'Intelligent Insights', desc: 'Turn data into powerful real-time business insights.' },
    { icon: Brain, title: 'AI-Powered Productivity', desc: 'Enhance everything with Copilot Studio and AI capabilities.' },
];

const ecosystemItems = [
    { component: SharePointLogo, label: 'SharePoint' },
    { component: Microsoft365Logo, label: 'Microsoft 365' },
    { component: Dynamics365Logo, label: 'Dynamics 365' },
    { component: AzureLogo, label: 'Azure Services' },
    { component: ConnectorsLogo, label: '300+ Connectors' },
];

const processSteps = [
    { icon: Target, label: 'Plan' },
    { icon: Lightbulb, label: 'Design' },
    { icon: Layout, label: 'Build' },
    { icon: Zap, label: 'Automate' },
    { icon: BarChart3, label: 'Analyze' },
    { icon: Settings, label: 'Optimize' },
];

const industryItems = [
    { icon: Building2, label: 'Finance' },
    { icon: Heart, label: 'Healthcare' },
    { icon: Factory, label: 'Manufacturing' },
    { icon: ShoppingCart, label: 'Retail' },
    { icon: GraduationCap, label: 'Education' },
    { icon: Landmark, label: 'Government' },
    { icon: MoreHorizontal, label: 'More' },
];

// ─── 3D Hub Components ────────────────────────────────────────────────────────
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

function PowerPlatformLogo() {
    const groupRef = useRef();
    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();
        // Smooth rotation
        groupRef.current.rotation.y = t * 0.45;
        // Float effect (bobbing up and down)
        groupRef.current.position.y = 0.2 + Math.sin(t * 1.5) * 0.08;
    });

    const extrudeSettings = useMemo(() => ({
        depth: 0.15,
        bevelEnabled: true,
        bevelSegments: 5,
        steps: 1,
        bevelSize: 0.03,
        bevelThickness: 0.03,
    }), []);

    // Shape 1: Bottom-Left Blue Ribbon (diagonal)
    const blueShape = useMemo(() => {
        const s = new THREE.Shape();
        s.moveTo(-0.35, -0.25);
        s.quadraticCurveTo(-0.45, -0.35, -0.35, -0.45);
        s.quadraticCurveTo(-0.25, -0.5, -0.15, -0.4);
        s.lineTo(0.2, -0.05);
        s.quadraticCurveTo(0.3, 0.05, 0.2, 0.15);
        s.lineTo(-0.1, -0.1);
        s.quadraticCurveTo(-0.2, -0.15, -0.35, -0.25);
        return s;
    }, []);

    // Shape 2: Top-Left Purple Ribbon (diagonal)
    const purpleShape = useMemo(() => {
        const s = new THREE.Shape();
        s.moveTo(-0.35, 0.25);
        s.quadraticCurveTo(-0.45, 0.35, -0.35, 0.45);
        s.quadraticCurveTo(-0.25, 0.5, -0.15, 0.4);
        s.lineTo(0.2, 0.05);
        s.quadraticCurveTo(0.3, -0.05, 0.2, -0.15);
        s.lineTo(-0.1, 0.1);
        s.quadraticCurveTo(-0.2, 0.15, -0.35, 0.25);
        return s;
    }, []);

    // Shape 3: Right Pink/Magenta Ribbon (chevron)
    const pinkShape = useMemo(() => {
        const s = new THREE.Shape();
        s.moveTo(0.1, 0.25);
        s.quadraticCurveTo(0.0, 0.1, 0.05, 0.0);
        s.quadraticCurveTo(0.0, -0.1, 0.1, -0.25);
        s.lineTo(0.3, -0.1);
        s.quadraticCurveTo(0.4, 0.0, 0.3, 0.1);
        s.lineTo(0.1, 0.25);
        return s;
    }, []);

    return (
        <group ref={groupRef} position={[0, 0.3, 0]}>
            {/* Blue Ribbon (Front layer) */}
            <mesh castShadow receiveShadow position={[0, 0, 0.06]}>
                <extrudeGeometry args={[blueShape, extrudeSettings]} />
                <meshPhysicalMaterial
                    color="#2563eb"
                    emissive="#1d4ed8"
                    emissiveIntensity={0.25}
                    roughness={0.1}
                    metalness={0.5}
                    clearcoat={1.0}
                    clearcoatRoughness={0.05}
                    transmission={0.3}
                    thickness={0.5}
                />
            </mesh>

            {/* Purple Ribbon (Middle layer) */}
            <mesh castShadow receiveShadow position={[0, 0, 0.0]}>
                <extrudeGeometry args={[purpleShape, extrudeSettings]} />
                <meshPhysicalMaterial
                    color="#7c3aed"
                    emissive="#6d28d9"
                    emissiveIntensity={0.25}
                    roughness={0.1}
                    metalness={0.5}
                    clearcoat={1.0}
                    clearcoatRoughness={0.05}
                    transmission={0.3}
                    thickness={0.5}
                />
            </mesh>

            {/* Pink Ribbon (Back layer, overlapping) */}
            <mesh castShadow receiveShadow position={[0, 0, -0.06]}>
                <extrudeGeometry args={[pinkShape, extrudeSettings]} />
                <meshPhysicalMaterial
                    color="#ec4899"
                    emissive="#db2777"
                    emissiveIntensity={0.25}
                    roughness={0.1}
                    metalness={0.5}
                    clearcoat={1.0}
                    clearcoatRoughness={0.05}
                    transmission={0.3}
                    thickness={0.5}
                />
            </mesh>
        </group>
    );
}

function PowerApps3DLogo() {
    return (
        <group scale={[0.95, 0.95, 0.95]}>
            {/* Tablet frame */}
            <mesh castShadow receiveShadow>
                <boxGeometry args={[1.2, 1.6, 0.15]} />
                <meshPhysicalMaterial color="#2563eb" metalness={0.4} roughness={0.1} transmission={0.3} thickness={0.5} />
            </mesh>
            {/* Inner screen */}
            <mesh position={[0, 0, 0.09]}>
                <boxGeometry args={[1.0, 1.4, 0.02]} />
                <meshStandardMaterial color="#ffffff" emissive="#3b82f6" emissiveIntensity={0.2} roughness={0.2} />
            </mesh>
            {/* Mini layout panels */}
            <mesh position={[-0.2, 0.3, 0.11]}>
                <boxGeometry args={[0.4, 0.4, 0.02]} />
                <meshStandardMaterial color="#3b82f6" roughness={0.2} />
            </mesh>
            <mesh position={[0.2, 0.3, 0.11]}>
                <boxGeometry args={[0.4, 0.4, 0.02]} />
                <meshStandardMaterial color="#7c3aed" roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.2, 0.11]}>
                <boxGeometry args={[0.8, 0.4, 0.02]} />
                <meshStandardMaterial color="#ec4899" roughness={0.2} />
            </mesh>
        </group>
    );
}

function PowerAutomate3DLogo() {
    const shape = useMemo(() => {
        const s = new THREE.Shape();
        s.moveTo(0, 0.8);
        s.lineTo(0.5, 0.0);
        s.lineTo(0.15, 0.0);
        s.lineTo(0.4, -0.8);
        s.lineTo(-0.5, 0.0);
        s.lineTo(-0.15, 0.0);
        s.lineTo(0, 0.8);
        return s;
    }, []);
    return (
        <group scale={[1, 1, 1]}>
            <mesh castShadow receiveShadow>
                <extrudeGeometry args={[shape, { depth: 0.18, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.02, bevelThickness: 0.02 }]} />
                <meshPhysicalMaterial color="#0ea5e9" emissive="#0284c7" emissiveIntensity={0.3} metalness={0.6} roughness={0.1} clearcoat={1.0} />
            </mesh>
        </group>
    );
}

function PowerBI3DLogo() {
    return (
        <group position={[-0.45, -0.6, 0]} scale={[1.1, 1.1, 1.1]}>
            {/* Bar 1 */}
            <mesh position={[0, 0.4, 0]} castShadow>
                <boxGeometry args={[0.22, 0.8, 0.22]} />
                <meshPhysicalMaterial color="#eab308" emissive="#ca8a04" emissiveIntensity={0.2} roughness={0.1} metalness={0.5} />
            </mesh>
            {/* Bar 2 */}
            <mesh position={[0.35, 0.65, 0]} castShadow>
                <boxGeometry args={[0.22, 1.3, 0.22]} />
                <meshPhysicalMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.2} roughness={0.1} metalness={0.5} />
            </mesh>
            {/* Bar 3 */}
            <mesh position={[0.7, 0.9, 0]} castShadow>
                <boxGeometry args={[0.22, 1.8, 0.22]} />
                <meshPhysicalMaterial color="#ec4899" emissive="#db2777" emissiveIntensity={0.2} roughness={0.1} metalness={0.5} />
            </mesh>
        </group>
    );
}

function Copilot3DLogo() {
    return (
        <group scale={[0.9, 0.9, 0.9]}>
            {/* Head orb */}
            <mesh castShadow>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshPhysicalMaterial color="#7c3aed" emissive="#6d28d9" emissiveIntensity={0.25} roughness={0.1} transmission={0.6} thickness={0.8} />
            </mesh>
            {/* Visor screen */}
            <mesh position={[0, 0, 0.45]}>
                <boxGeometry args={[0.7, 0.25, 0.1]} />
                <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.0} />
            </mesh>
            {/* Antenna / Ears */}
            <mesh position={[-0.65, 0.1, 0]} rotation={[0, 0, 0.2]}>
                <cylinderGeometry args={[0.08, 0.08, 0.4, 16]} />
                <meshPhysicalMaterial color="#a855f7" roughness={0.15} />
            </mesh>
            <mesh position={[0.65, 0.1, 0]} rotation={[0, 0, -0.2]}>
                <cylinderGeometry args={[0.08, 0.08, 0.4, 16]} />
                <meshPhysicalMaterial color="#a855f7" roughness={0.15} />
            </mesh>
        </group>
    );
}

function Dataverse3DLogo() {
    return (
        <group scale={[0.95, 0.95, 0.95]} position={[0, -0.1, 0]}>
            {/* Stacked cylinders */}
            <mesh position={[0, 0.45, 0]} castShadow>
                <cylinderGeometry args={[0.65, 0.65, 0.35, 32]} />
                <meshPhysicalMaterial color="#0d9488" emissive="#0f766e" emissiveIntensity={0.2} metalness={0.6} roughness={0.1} transmission={0.2} />
            </mesh>
            <mesh position={[0, 0.0, 0]} castShadow>
                <cylinderGeometry args={[0.65, 0.65, 0.35, 32]} />
                <meshPhysicalMaterial color="#0ea5e9" emissive="#0284c7" emissiveIntensity={0.2} metalness={0.6} roughness={0.1} transmission={0.2} />
            </mesh>
            <mesh position={[0, -0.45, 0]} castShadow>
                <cylinderGeometry args={[0.65, 0.65, 0.35, 32]} />
                <meshPhysicalMaterial color="#10b981" emissive="#059669" emissiveIntensity={0.2} metalness={0.6} roughness={0.1} transmission={0.2} />
            </mesh>
            {/* Connecting core column inside */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 1.3, 16]} />
                <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
            </mesh>
        </group>
    );
}

const serviceTexts = {
    apps: {
        title: "Power Apps",
        tagline: "Build custom apps to solve business challenges"
    },
    automate: {
        title: "Power Automate",
        tagline: "Automate processes and workflows effortlessly"
    },
    bi: {
        title: "Power BI",
        tagline: "Visualize data and make insights actionable"
    },
    copilot: {
        title: "Copilot Studio",
        tagline: "Build intelligent Copilot experiences easily"
    },
    dataverse: {
        title: "Dataverse",
        tagline: "Secure and scalable database foundation"
    },
    default: {
        title: "Power Platform",
        tagline: "The low-code platform that empowers your business"
    }
};

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

function FlowParticles({ curve, color, isActive }) {
    const particle1 = useRef();
    const particle2 = useRef();
    const particle3 = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const speed = isActive ? 0.75 : 0.35;

        // Particle 1
        if (particle1.current) {
            const progress = (t * speed) % 1.0;
            const point = curve.getPointAt(progress);
            particle1.current.position.copy(point);
            const scale = (0.045 + Math.sin(t * 4.5) * 0.01) * (isActive ? 1.5 : 1.0);
            particle1.current.scale.set(scale, scale, scale);
        }

        // Particle 2
        if (particle2.current) {
            const progress = (t * speed + 0.33) % 1.0;
            const point = curve.getPointAt(progress);
            particle2.current.position.copy(point);
            const scale = (0.045 + Math.sin(t * 4.5 + 2) * 0.01) * (isActive ? 1.5 : 1.0);
            particle2.current.scale.set(scale, scale, scale);
        }

        // Particle 3
        if (particle3.current) {
            const progress = (t * speed + 0.66) % 1.0;
            const point = curve.getPointAt(progress);
            particle3.current.position.copy(point);
            const scale = (0.045 + Math.sin(t * 4.5 + 4) * 0.01) * (isActive ? 1.5 : 1.0);
            particle3.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group>
            <mesh ref={particle1}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshBasicMaterial color={color} transparent opacity={0.95} />
            </mesh>
            <mesh ref={particle2}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshBasicMaterial color={color} transparent opacity={0.75} />
            </mesh>
            <mesh ref={particle3}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshBasicMaterial color={color} transparent opacity={0.75} />
            </mesh>
        </group>
    );
}

function FlowLine3D({ angle, color, isActive }) {
    const curve = useMemo(() => {
        const startRad = 2.8;
        const p0 = new THREE.Vector3(Math.sin(angle) * startRad, -0.98, Math.cos(angle) * startRad);
        const p1 = new THREE.Vector3(Math.sin(angle) * 0.8, -0.98, Math.cos(angle) * 0.8);
        const p2 = new THREE.Vector3(Math.sin(angle) * 0.3, -0.6, Math.cos(angle) * 0.3);
        const p3 = new THREE.Vector3(0, 0.3, 0); // goes into floating logo
        return new THREE.CatmullRomCurve3([p0, p1, p2, p3]);
    }, [angle]);

    return (
        <group>
            <mesh>
                <tubeGeometry args={[curve, 64, 0.008, 8, false]} />
                <meshBasicMaterial color={color} transparent opacity={isActive ? 0.35 : 0.08} depthWrite={false} />
            </mesh>
            <FlowParticles curve={curve} color={color} isActive={isActive} />
        </group>
    );
}

function PowerHubScene({ activeService }) {
    const platformRef = useRef();
    const rimRef1 = useRef();
    const rimRef2 = useRef();
    const rimRef3 = useRef();

    useFrame((state) => {
        if (!platformRef.current) return;
        const t = state.clock.getElapsedTime();
        platformRef.current.rotation.y = t * 0.12;

        // Pulsate emissive intensities
        if (rimRef1.current) {
            const mat = rimRef1.current.material || rimRef1.current;
            mat.emissiveIntensity = 1.0 + Math.sin(t * 3.0) * 0.4;
        }
        if (rimRef2.current) {
            const mat = rimRef2.current.material || rimRef2.current;
            mat.emissiveIntensity = 0.8 + Math.cos(t * 2.5) * 0.3;
        }
        if (rimRef3.current) {
            const mat = rimRef3.current.material || rimRef3.current;
            mat.emissiveIntensity = 1.2 + Math.sin(t * 4.0) * 0.5;
        }
    });

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
            <GroundPipe angle={-3 * Math.PI / 4} color="#3b82f6" isActive={activeService === 'apps'} /> {/* Power Apps */}
            <GroundPipe angle={-Math.PI / 4} color="#f97316" isActive={activeService === 'bi'} />     {/* Power BI */}
            <GroundPipe angle={3 * Math.PI / 4} color="#0ea5e9" isActive={activeService === 'automate'} />  {/* Power Automate */}
            <GroundPipe angle={Math.PI / 2} color="#a855f7" isActive={activeService === 'copilot'} />       {/* Copilot Studio */}
            <GroundPipe angle={Math.PI / 4} color="#10b981" isActive={activeService === 'dataverse'} />       {/* Dataverse */}

            {/* 3D Curved Data Flow Lines and Particles */}
            <FlowLine3D angle={-3 * Math.PI / 4} color="#3b82f6" isActive={activeService === 'apps'} />
            <FlowLine3D angle={-Math.PI / 4} color="#f97316" isActive={activeService === 'bi'} />
            <FlowLine3D angle={3 * Math.PI / 4} color="#0ea5e9" isActive={activeService === 'automate'} />
            <FlowLine3D angle={Math.PI / 2} color="#a855f7" isActive={activeService === 'copilot'} />
            <FlowLine3D angle={Math.PI / 4} color="#10b981" isActive={activeService === 'dataverse'} />

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

            {/* Dynamic Floating Logo based on activeService */}
            <Float speed={1.5} rotationIntensity={0.06} floatIntensity={0.45}>
                {activeService === 'apps' && <PowerApps3DLogo />}
                {activeService === 'automate' && <PowerAutomate3DLogo />}
                {activeService === 'bi' && <PowerBI3DLogo />}
                {activeService === 'copilot' && <Copilot3DLogo />}
                {activeService === 'dataverse' && <Dataverse3DLogo />}
                {!activeService && <PowerPlatformLogo />}
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
                    fontFamily: "'Poppins', 'Inter', sans-serif",
                    width: '320px',
                    userSelect: 'none'
                }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 900, margin: 0, lineHeight: 1.1, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        {currentText.title}
                    </h2>
                    <p style={{ fontSize: '10px', color: '#cbd5e1', fontWeight: 500, margin: '5px 0 0 0', lineHeight: 1.3, textShadow: '0 1px 5px rgba(0,0,0,0.4)' }}>
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

function PowerHub3D({ activeService }) {
    return (
        <Canvas camera={{ position: [0, 1.5, 5], fov: 42 }} gl={{ antialias: true, alpha: true }} shadows style={{ background: 'transparent' }}>
            <Suspense fallback={null}>
                <PowerHubScene activeService={activeService} />
            </Suspense>
        </Canvas>
    );
}

// ─── Mockup Components ────────────────────────────────────────────────────────
function PowerAppsMockup() {
    return (
        <div className="relative h-24 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 p-1.5 flex gap-1.5">
            {/* Mobile screen */}
            <div className="w-10 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex-shrink-0">
                <div className="h-2.5 bg-gradient-to-r from-blue-600 to-purple-600" />
                <div className="p-0.5 space-y-0.5 mt-0.5">
                    <div className="h-1 bg-blue-100 rounded" />
                    <div className="h-1 bg-purple-100 rounded w-3/4" />
                    <div className="h-2 bg-blue-500/20 rounded mt-1" />
                    <div className="h-2 bg-purple-500/20 rounded" />
                    <div className="h-1 bg-gray-100 rounded mt-1" />
                </div>
            </div>
            {/* Dashboard */}
            <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm p-1 overflow-hidden">
                <div className="flex gap-1 mb-1">
                    {['#3b82f6', '#7c3aed', '#ec4899'].map((c, i) => (
                        <div key={i} className="flex-1 rounded text-center py-0.5" style={{ background: c + '20', borderTop: `2px solid ${c}` }}>
                            <div className="text-[5px] font-bold" style={{ color: c }}>{['42K', '1.2M', '89%'][i]}</div>
                        </div>
                    ))}
                </div>
                <div className="flex items-end gap-0.5 h-8">
                    {[55, 80, 45, 70, 90, 60, 75].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `hsl(${220 + i * 15},70%,${58 - i * 2}%)` }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function PowerAutomateMockup() {
    return (
        <div className="relative h-24 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 p-1.5">
            <div className="flex items-center justify-around h-10 relative">
                {[
                    { label: 'Trigger', color: '#f97316' },
                    { label: 'Action', color: '#3b82f6' },
                    { label: 'Condition', color: '#7c3aed' },
                    { label: 'Result', color: '#10b981' },
                ].map((node, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5 z-10">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shadow" style={{ background: node.color }}>
                            <div className="w-3 h-3 bg-white/40 rounded-sm" />
                        </div>
                        <span className="text-[4.5px] text-gray-500 font-medium">{node.label}</span>
                    </div>
                ))}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {[22, 48, 74].map((x, i) => (
                        <line key={i} x1={`${x}%`} y1="42%" x2={`${x + 24}%`} y2="42%"
                            stroke={['#f97316', '#3b82f6', '#7c3aed'][i]} strokeWidth="1.5" strokeDasharray="4,2" />
                    ))}
                </svg>
            </div>
            <div className="flex gap-1 mt-1">
                {['Running: 3', 'Done: 12', 'Retry: 1'].map((s, i) => (
                    <div key={i} className="text-[4.5px] px-1 py-0.5 rounded-full font-semibold" style={{ background: ['#d1fae5', '#dbeafe', '#fee2e2'][i], color: ['#065f46', '#1e40af', '#991b1b'][i] }}>{s}</div>
                ))}
            </div>
            {/* Mini flow card */}
            <div className="mt-1 bg-white/70 rounded-md px-1.5 py-0.5 border border-blue-100">
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-[5px] text-gray-600">Invoice Approval Flow — Active</span>
                </div>
            </div>
        </div>
    );
}

function PowerBIMockup() {
    return (
        <div className="relative h-24 rounded-xl overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 p-1.5 flex gap-1.5">
            {/* Bar chart */}
            <div className="flex-1 bg-white rounded-lg border border-gray-100 p-1 flex flex-col">
                <div className="text-[4.5px] font-bold text-gray-500 mb-0.5">Revenue 2024</div>
                <div className="flex items-end gap-0.5 flex-1">
                    {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `hsl(${200 + i * 12},75%,${52 - i}%)` }} />
                    ))}
                </div>
            </div>
            {/* Donut + line */}
            <div className="w-16 flex flex-col gap-1">
                <div className="flex-1 bg-white rounded-lg border border-gray-100 flex items-center justify-center p-0.5">
                    <svg viewBox="0 0 40 40" className="w-10 h-10">
                        <circle cx="20" cy="20" r="14" fill="none" stroke="#f3f4f6" strokeWidth="6" />
                        <circle cx="20" cy="20" r="14" fill="none" stroke="#7c3aed" strokeWidth="6" strokeDasharray="52 36" strokeLinecap="round" transform="rotate(-90 20 20)" />
                        <circle cx="20" cy="20" r="14" fill="none" stroke="#3b82f6" strokeWidth="6" strokeDasharray="22 66" strokeDashoffset="-52" strokeLinecap="round" transform="rotate(-90 20 20)" />
                        <text x="50%" y="54%" textAnchor="middle" fontSize="7" fill="#374151" fontWeight="bold">67%</text>
                    </svg>
                </div>
                <div className="bg-white rounded-lg border border-gray-100 p-0.5">
                    <div className="h-0.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-400 to-pink-400" />
                    <div className="text-[4px] text-gray-400 text-center mt-0.5">Trend +12%</div>
                </div>
            </div>
        </div>
    );
}

function DataverseMockup() {
    const rows = [['001', 'Contoso', 'Active'], ['002', 'Fabrikam', 'Active'], ['003', 'Northwind', 'Pending'], ['004', 'WingTip', 'Active']];
    return (
        <div className="relative h-24 rounded-xl overflow-hidden bg-gradient-to-br from-teal-50 to-green-50 border border-teal-100 p-1.5">
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden h-full">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-1.5 py-0.5 flex gap-1">
                    {['ID', 'Name', 'Status'].map(h => <div key={h} className="flex-1 text-[4.5px] text-white font-bold">{h}</div>)}
                </div>
                {rows.map((row, i) => (
                    <div key={i} className={`flex gap-1 px-1.5 py-0.5 ${i % 2 === 0 ? 'bg-white' : 'bg-teal-50/50'}`}>
                        <div className="flex-1 text-[4.5px] text-gray-500">{row[0]}</div>
                        <div className="flex-1 text-[4.5px] text-gray-700 font-medium">{row[1]}</div>
                        <div className={`flex-1 text-[4.5px] font-semibold ${row[2] === 'Active' ? 'text-teal-600' : 'text-amber-500'}`}>{row[2]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CopilotMockup() {
    return (
        <div className="relative h-20 rounded-xl overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 p-1.5 space-y-1">
            <div className="flex justify-start">
                <div className="bg-violet-600 text-white text-[5px] px-1.5 py-0.5 rounded-lg rounded-tl-none max-w-[75%] leading-relaxed">How can I assist you today?</div>
            </div>
            <div className="flex justify-end">
                <div className="bg-white text-gray-600 text-[5px] px-1.5 py-0.5 rounded-lg rounded-tr-none border border-gray-200 max-w-[75%] leading-relaxed">Show Q4 sales insights</div>
            </div>
            <div className="flex justify-start">
                <div className="bg-violet-100 text-violet-700 text-[5px] px-1.5 py-0.5 rounded-lg rounded-tl-none max-w-[80%] leading-relaxed">Here's your Q4 dashboard with AI analysis...</div>
            </div>
        </div>
    );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
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
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(20px)',
                border: `1.5px solid ${accentColor}30`,
                boxShadow: `0 8px 32px ${accentColor}10, inset 0 1px 0 rgba(255,255,255,0.8)`,
            }}
        >
            {/* Top glow */}
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }} />

            {horizontal ? (
                <div className="flex gap-3 items-stretch h-full w-full">
                    {/* Left side: Text content */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md" style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}>
                                    <Icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-[12px] font-black text-[#1e1b4b] leading-tight">{title}</p>
                                    <p className="text-[8px] text-slate-500 leading-none mt-0.5">{tagline}</p>
                                </div>
                            </div>
                            <ul className="mt-2 space-y-1">
                                {bullets.map((b, i) => (
                                    <li key={i} className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accentColor }} />
                                        <span className="text-[8.5px] text-slate-600 font-bold leading-tight">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side: Mockup UI */}
                    <div className="w-[155px] shrink-0 flex items-center justify-center">
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

// ─── Connection Lines SVG ─────────────────────────────────────────────────────
function ConnectionLines({ paths, activeService }) {
    const lines = [
        { id: 'grad1', key: 'apps', path: paths.apps, color: "#3b82f6", cls: "pp-flow1", dur: "3s" },
        { id: 'grad2', key: 'automate', path: paths.automate, color: "#0ea5e9", cls: "pp-flow2", dur: "2.5s" },
        { id: 'grad3', key: 'bi', path: paths.bi, color: "#f97316", cls: "pp-flow3", dur: "3.5s" },
        { id: 'grad4', key: 'dataverse', path: paths.dataverse, color: "#10b981", cls: "pp-flow4", dur: "2.8s" },
        { id: 'grad5', key: 'copilot', path: paths.copilot, color: "#a855f7", cls: "pp-flow5", dur: "4s" },
    ];

    const activeLines = lines.filter(l => l.path);

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ minHeight: '100%' }}>
            <defs>
                <filter id="pp-glow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                {/* Animated gradients */}
                {[
                    { id: 'grad1', c1: '#2563eb', c2: '#3b82f6' },
                    { id: 'grad2', c1: '#0ea5e9', c2: '#06b6d4' },
                    { id: 'grad3', c1: '#f59e0b', c2: '#f97316' },
                    { id: 'grad4', c1: '#0f766e', c2: '#14b8a6' },
                    { id: 'grad5', c1: '#7c3aed', c2: '#a855f7' },
                ].map(g => (
                    <linearGradient key={g.id} id={g.id} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={g.c1} />
                        <stop offset="100%" stopColor={g.c2} />
                    </linearGradient>
                ))}
                <style>{`
                    .pp-flow1 { animation: pp-dash1 3s linear infinite; }
                    .pp-flow2 { animation: pp-dash2 2.5s linear infinite; }
                    .pp-flow3 { animation: pp-dash3 3.5s linear infinite; }
                    .pp-flow4 { animation: pp-dash4 2.8s linear infinite; }
                    .pp-flow5 { animation: pp-dash5 4s linear infinite; }
                    @keyframes pp-dash1 { to { stroke-dashoffset: -60; } }
                    @keyframes pp-dash2 { to { stroke-dashoffset: -50; } }
                    @keyframes pp-dash3 { to { stroke-dashoffset: -70; } }
                    @keyframes pp-dash4 { to { stroke-dashoffset: -55; } }
                    @keyframes pp-dash5 { to { stroke-dashoffset: -65; } }
                    .pp-dot { animation: pp-dot-move 3s linear infinite; }
                    @keyframes pp-dot-move { 0%{offset-distance:0%} 100%{offset-distance:100%} }
                `}</style>
            </defs>

            {/* Static dashed flow lines */}
            {activeLines.map((line) => {
                const isActive = activeService === line.key;
                const isAnyActive = activeService !== null;
                const opacity = isAnyActive ? (isActive ? 1.0 : 0.15) : 0.7;
                const strokeWidth = isActive ? 3 : 2;
                return (
                    <path
                        key={line.id}
                        d={line.path}
                        fill="none"
                        stroke={`url(#${line.id})`}
                        strokeWidth={strokeWidth}
                        strokeDasharray="10,6"
                        className={line.cls}
                        filter="url(#pp-glow)"
                        opacity={opacity}
                        style={{
                            transition: 'opacity 0.3s ease, stroke-width 0.3s ease',
                            animationDuration: isActive ? '1.5s' : undefined
                        }}
                    />
                );
            })}

            {/* Pulsing animated dots */}
            {activeLines.map((line, i) => {
                const isActive = activeService === line.key;
                const isAnyActive = activeService !== null;
                const opacity = isAnyActive ? (isActive ? 1.0 : 0.1) : 0.8;
                const radius = isActive ? 7.5 : 4.5;
                const dur = isActive ? `${parseFloat(line.dur) / 2}s` : line.dur;
                return (
                    <circle
                        key={i}
                        r={radius}
                        fill={line.color}
                        filter="url(#pp-glow)"
                        opacity={opacity}
                        style={{ transition: 'opacity 0.3s ease, r 0.3s ease' }}
                    >
                        <animateMotion dur={dur} repeatCount="indefinite" path={line.path} />
                    </circle>
                );
            })}
        </svg>
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

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PowerPlatformService() {
    const [activeService, setActiveService] = useState(null);
    const centerZoneRef = useRef(null);
    const hubRef = useRef(null);
    const appsRef = useRef(null);
    const biRef = useRef(null);
    const automateRef = useRef(null);
    const copilotRef = useRef(null);
    const dataverseRef = useRef(null);

    const [linePaths, setLinePaths] = useState({
        apps: '',
        bi: '',
        automate: '',
        copilot: '',
        dataverse: ''
    });

    useEffect(() => {
        const updatePaths = () => {
            if (!centerZoneRef.current || !hubRef.current) return;
            const containerRect = centerZoneRef.current.getBoundingClientRect();
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

            const appsPt = getPoint(appsRef, 'left');
            const biPt = getPoint(biRef, 'left');
            const automatePt = getPoint(automateRef, 'right');
            const copilotPt = getPoint(copilotRef, 'right');
            const dataversePt = getPoint(dataverseRef, 'right');

            setLinePaths({
                apps: `M ${hubX},${hubY} C ${(hubX + appsPt.x) / 2},${hubY} ${(hubX + appsPt.x) / 2},${appsPt.y} ${appsPt.x},${appsPt.y}`,
                bi: `M ${hubX},${hubY} C ${(hubX + biPt.x) / 2},${hubY} ${(hubX + biPt.x) / 2},${biPt.y} ${biPt.x},${biPt.y}`,
                automate: `M ${hubX},${hubY} C ${(hubX + automatePt.x) / 2},${hubY} ${(hubX + automatePt.x) / 2},${automatePt.y} ${automatePt.x},${automatePt.y}`,
                copilot: `M ${hubX},${hubY} C ${(hubX + copilotPt.x) / 2},${hubY} ${(hubX + copilotPt.x) / 2},${copilotPt.y} ${copilotPt.x},${copilotPt.y}`,
                dataverse: `M ${hubX},${hubY} C ${(hubX + dataversePt.x) / 2},${hubY} ${(hubX + dataversePt.x) / 2},${dataversePt.y} ${dataversePt.x},${dataversePt.y}`
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
            id="power-platform"
            className="relative w-full overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #faf5ff 0%, #f0e8ff 20%, #fdf4ff 45%, #eff6ff 65%, #f8f5ff 85%, #fefce8 100%)',
                fontFamily: "'Poppins', 'Inter', sans-serif"
            }}
        >
            {/* Background blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-32 w-[550px] h-[550px] bg-purple-300/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-blue-300/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pink-300/12 rounded-full blur-[90px]" />
                {/* Dot grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
                    <defs>
                        <pattern id="pp-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="#7c3aed" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pp-dots)" />
                </svg>
            </div>

            <div className="relative z-10 px-4 lg:px-6 xl:px-8 pt-5 pb-3 max-w-[1600px] mx-auto">

                {/* ── TOP BAR ── */}
                <div className="flex items-center justify-between gap-4 mb-4">
                    {/* Logo */}
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

                    {/* Stats bar */}
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
                                <stat.icon className="w-4.5 h-4.5 text-purple-600 shrink-0" />
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

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-12 gap-3 items-start">

                    {/* ── LEFT PANEL ── */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col gap-2.5">
                        {/* Hero title */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <h1 className="text-3xl xl:text-4xl font-black leading-tight mb-1">
                                <span className="text-[#1e1b4b]">Power Platform</span>
                            </h1>
                            <p className="text-[15px] font-black leading-snug mb-1">
                                <span className="text-blue-600">Build.</span>{' '}
                                <span className="text-cyan-500">Automate.</span>{' '}
                                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Analyze.</span>{' '}
                                <span className="text-[#1e1b4b]">Transform.</span>
                            </p>
                            <div className="flex items-center gap-2 my-2">
                                <div className="h-[1.5px] w-10 bg-amber-500 rounded-full" />
                                <span className="text-[11px] font-black text-amber-500 leading-none shrink-0">+</span>
                                <div className="h-[1.5px] w-10 bg-amber-500 rounded-full" />
                            </div>
                            <p className="text-[9px] text-slate-600 leading-relaxed">
                                Unify your data, automate processes, create custom apps, and gain actionable insights with the Microsoft Power Platform.
                            </p>
                        </motion.div>

                        {/* Feature cards - grouped into a single master card container */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col gap-4.5 p-4.5 rounded-[24px] w-full max-w-[280px]"
                            style={{
                                background: '#ffffff',
                                border: '1.5px solid rgba(124,58,237,0.12)',
                                boxShadow: '0 8px 32px rgba(124,58,237,0.05)',
                            }}
                        >
                            {featureCards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 3 }}
                                    className="flex items-start gap-3 group transition-all duration-300 cursor-pointer"
                                >
                                    <div className="w-9 h-9 rounded-full bg-[#7c3aed] flex items-center justify-center shrink-0 shadow group-hover:bg-[#6d28d9] transition-colors mt-0.5">
                                        <card.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[12.5px] font-bold text-[#1e1b4b] leading-snug tracking-tight mb-0.5">{card.title}</p>
                                        <p className="text-[9.5px] text-slate-500 font-medium leading-tight">{card.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── CENTER ZONE ── */}
                    <div ref={centerZoneRef} className="col-span-12 lg:col-span-9 relative">
                        {/* Connection lines overlay */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                            <ConnectionLines paths={linePaths} activeService={activeService} />
                        </div>

                        {/* Service cards grid */}
                        <div className="grid gap-4.5 items-center" style={{ gridTemplateColumns: '2.1fr 1.6fr 2.1fr' }}>

                            {/* Left column: 2 cards */}
                            <div className="flex flex-col justify-between gap-6 h-full py-2">
                                <div ref={appsRef} className="w-full">
                                    <ServiceCard
                                        title="Power Apps"
                                        tagline="Build custom apps that solve real business challenges."
                                        color="#2563eb" accentColor="#3b82f6"
                                        Icon={Layout}
                                        MockupComponent={PowerAppsMockup}
                                        bullets={['Canvas Apps', 'Model-Driven Apps', 'Portal Solutions', 'Mobile Ready']}
                                        delay={0.2}
                                        horizontal={true}
                                        onMouseEnter={() => setActiveService('apps')}
                                        onMouseLeave={() => setActiveService(null)}
                                    />
                                </div>
                                <div ref={biRef} className="w-full">
                                    <ServiceCard
                                        title="Power BI"
                                        tagline="Visualize data and make insights actionable."
                                        color="#f59e0b" accentColor="#f97316"
                                        Icon={BarChart3}
                                        MockupComponent={PowerBIMockup}
                                        bullets={['Interactive Dashboards', 'Real-time Analytics', 'AI Insights', 'Mobile Reports']}
                                        delay={0.3}
                                        horizontal={true}
                                        onMouseEnter={() => setActiveService('bi')}
                                        onMouseLeave={() => setActiveService(null)}
                                    />
                                </div>
                            </div>

                            {/* 3D Hub - col 3, spanning 3 rows */}
                            <div ref={hubRef} className="flex flex-col items-center justify-center h-full">
                                <div className="w-full h-[400px]">
                                    <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-12 h-12 rounded-full bg-purple-200 animate-pulse" /></div>}>
                                        <PowerHub3D activeService={activeService} />
                                    </Suspense>
                                </div>
                            </div>

                            {/* Right column: 3 cards */}
                            <div className="flex flex-col justify-between gap-4 h-full py-2">
                                <div ref={automateRef} className="w-full">
                                    <ServiceCard
                                        title="Power Automate"
                                        tagline="Automate processes and workflows effortlessly."
                                        color="#0ea5e9" accentColor="#06b6d4"
                                        Icon={Zap}
                                        MockupComponent={PowerAutomateMockup}
                                        bullets={['Cloud Flows', 'Desktop Flows (RPA)', 'Business Process Flows', 'Approval Workflows']}
                                        delay={0.25}
                                        horizontal={true}
                                        onMouseEnter={() => setActiveService('automate')}
                                        onMouseLeave={() => setActiveService(null)}
                                    />
                                </div>
                                <div ref={copilotRef} className="w-full">
                                    <ServiceCard
                                        title="Copilot Studio"
                                        tagline="Build intelligent Copilot experiences for your business."
                                        color="#7c3aed" accentColor="#a855f7"
                                        Icon={Bot}
                                        MockupComponent={CopilotMockup}
                                        bullets={['Custom Copilots', 'AI Conversations', 'Topic Management', 'Seamless Integration']}
                                        delay={0.4}
                                        horizontal={true}
                                        onMouseEnter={() => setActiveService('copilot')}
                                        onMouseLeave={() => setActiveService(null)}
                                    />
                                </div>
                                <div ref={dataverseRef} className="w-full">
                                    <ServiceCard
                                        title="Dataverse"
                                        tagline="Secure and scalable data foundation for your apps."
                                        color="#0f766e" accentColor="#14b8a6"
                                        Icon={Database}
                                        MockupComponent={DataverseMockup}
                                        bullets={['Common Data Model', 'Secure & Compliant', 'Scalable Cloud Data', 'Seamless Integration']}
                                        delay={0.35}
                                        horizontal={true}
                                        onMouseEnter={() => setActiveService('dataverse')}
                                        onMouseLeave={() => setActiveService(null)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── BOTTOM STRIPS ── */}
                <div className="grid grid-cols-3 gap-3 mt-3">

                    {/* Ecosystem strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-[24px] p-4 flex flex-col items-center justify-between h-full"
                        style={{
                            background: 'rgba(255, 255, 255, 0.45)',
                            backdropFilter: 'blur(20px)',
                            border: '1.5px solid rgba(255, 255, 255, 0.7)',
                            boxShadow: '0 8px 32px rgba(124,58,237,0.06)',
                        }}
                    >
                        {/* Title with yellow accent lines */}
                        <div className="flex items-center gap-3 mb-3 w-full justify-center">
                            <div className="h-[1.5px] w-6 bg-amber-400/80 rounded-full" />
                            <p className="text-[10px] font-black text-[#1e1b4b] uppercase tracking-wider leading-none">Connect. Extend. Empower.</p>
                            <div className="h-[1.5px] w-6 bg-amber-400/80 rounded-full" />
                        </div>

                        <div className="flex items-center justify-around w-full gap-2">
                            {ecosystemItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    className="flex flex-col items-center gap-1.5 cursor-pointer"
                                >
                                    {/* White square card containing colored logo */}
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-slate-100/50">
                                        <item.component />
                                    </div>
                                    <span className="text-[8px] text-slate-600 font-extrabold text-center leading-tight tracking-tight">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Process flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-[24px] p-4 flex flex-col items-center justify-between h-full"
                        style={{
                            background: 'rgba(255, 255, 255, 0.45)',
                            backdropFilter: 'blur(20px)',
                            border: '1.5px solid rgba(255, 255, 255, 0.7)',
                            boxShadow: '0 8px 32px rgba(124,58,237,0.06)',
                        }}
                    >
                        {/* Title with yellow accent lines */}
                        <div className="flex items-center gap-3 mb-3 w-full justify-center">
                            <div className="h-[1.5px] w-6 bg-amber-400/80 rounded-full" />
                            <p className="text-[10px] font-black text-[#1e1b4b] uppercase tracking-wider leading-none">From Idea to Impact</p>
                            <div className="h-[1.5px] w-6 bg-amber-400/80 rounded-full" />
                        </div>

                        <div className="flex items-center justify-around w-full gap-1">
                            {processSteps.map((step, i) => (
                                <div key={i} className="flex items-center gap-1">
                                    <motion.div
                                        whileHover={{ scale: 1.08 }}
                                        className="flex flex-col items-center gap-1.5 cursor-pointer"
                                    >
                                        <step.icon className="w-5.5 h-5.5 text-purple-600 shrink-0" />
                                        <span className="text-[8px] text-slate-600 font-extrabold text-center leading-tight tracking-tight">{step.label}</span>
                                    </motion.div>
                                    {i < processSteps.length - 1 && (
                                        <ChevronRight className="w-3 h-3 text-purple-400/80 shrink-0 -mt-3.5" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Industry strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-[24px] p-4 flex flex-col items-center justify-between h-full"
                        style={{
                            background: 'rgba(255, 255, 255, 0.45)',
                            backdropFilter: 'blur(20px)',
                            border: '1.5px solid rgba(255, 255, 255, 0.7)',
                            boxShadow: '0 8px 32px rgba(124,58,237,0.06)',
                        }}
                    >
                        {/* Title with yellow accent lines */}
                        <div className="flex items-center gap-3 mb-3 w-full justify-center">
                            <div className="h-[1.5px] w-6 bg-amber-400/80 rounded-full" />
                            <p className="text-[10px] font-black text-[#1e1b4b] uppercase tracking-wider leading-none">Powering Every Industry</p>
                            <div className="h-[1.5px] w-6 bg-amber-400/80 rounded-full" />
                        </div>

                        <div className="flex items-center justify-around w-full gap-2">
                            {industryItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.08 }}
                                    className="flex flex-col items-center gap-1.5 cursor-pointer"
                                >
                                    <item.icon className="w-5.5 h-5.5 text-purple-600 shrink-0" />
                                    <span className="text-[8px] text-slate-600 font-extrabold text-center leading-tight tracking-tight">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ── FOOTER CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-3 rounded-2xl px-4 py-3 flex items-center justify-between gap-4 flex-wrap"
                    style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(124,58,237,0.2)', boxShadow: '0 4px 24px rgba(124,58,237,0.1)' }}
                >
                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        animate={{ boxShadow: ['0 0 18px rgba(139,92,246,0.4)', '0 0 30px rgba(236,72,153,0.5)', '0 0 18px rgba(139,92,246,0.4)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl overflow-hidden text-white font-black text-[11px] cursor-pointer"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)' }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                            animate={{ x: ['-150%', '150%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                        />
                        <span className="relative">Let&apos;s Build the Future Together</span>
                        <ArrowRight className="relative w-4 h-4" />
                    </motion.button>

                    {/* Contact info */}
                    <div className="flex items-center gap-4">
                        {[
                            { icon: Globe, text: 'www.desireinfoweb.com', color: 'text-blue-600' },
                            { icon: Mail, text: 'vijay@desireinfoweb.com', color: 'text-purple-600' },
                            { icon: Phone, text: '+91-8780468807', color: 'text-pink-600' },
                        ].map((c, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <c.icon className={`w-3.5 h-3.5 ${c.color} shrink-0`} />
                                <span className="text-[8px] text-slate-600 font-medium">{c.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-2">
                        {[
                            { Icon: Link2, color: '#0077b5', bg: '#e8f4fd', title: 'LinkedIn' },
                            { Icon: Share2, color: '#1877f2', bg: '#e8f0fe', title: 'Facebook' },
                            { Icon: Globe, color: '#1da1f2', bg: '#e8f5fe', title: 'Twitter' },
                            { Icon: Play, color: '#ff0000', bg: '#fee8e8', title: 'YouTube' },
                        ].map(({ Icon, color, bg, title }, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.15, y: -2 }}
                                className="w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer shadow-sm"
                                style={{ background: bg, border: `1px solid ${color}30` }}
                                title={title}
                            >
                                <Icon className="w-3.5 h-3.5" style={{ color }} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
