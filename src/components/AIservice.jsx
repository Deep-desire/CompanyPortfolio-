import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'motion/react';
import * as THREE from 'three';
import {
    Brain, Zap, BarChart3, FileSearch, MessageSquare, Database,
    Globe, Mail, Phone, QrCode, ChevronRight, Star, Shield,
    TrendingUp, DollarSign, Users, Lightbulb, Layers,
    Network, Eye, Mic, GitBranch, AlertTriangle, ArrowRight,
    Building2, Heart, Factory, ShoppingCart, GraduationCap,
    Truck, Landmark, MoreHorizontal, Bot, Cpu, Activity,
    CheckCircle, RefreshCw, Server, Cloud, Workflow, Clock
} from 'lucide-react';

const MicrosoftIcon = (props) => (
    <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="11" height="11" fill="#f25022" />
        <rect x="12" width="11" height="11" fill="#7fba00" />
        <rect y="12" width="11" height="11" fill="#00a4ef" />
        <rect x="12" y="12" width="11" height="11" fill="#ffb900" />
    </svg>
);

const OpenAIIcon = ({ className = '', ...props }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#3b2be0] ${className}`} xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M21.7,11.3c0.1-0.4,0.1-0.8,0.1-1.2c0-2-1.3-3.7-3.1-4.2c-0.2-0.5-0.5-1-0.9-1.4c-1.5-1.5-3.8-1.7-5.5-0.6c-0.5-0.2-1-0.3-1.6-0.3c-2.1,0-3.9,1.4-4.3,3.3C6.1,7,5.7,7.2,5.3,7.6C3.9,9.1,3.7,11.3,4.7,13c-0.2,0.5-0.3,1-0.3,1.6c0,2.1,1.4,3.9,3.3,4.3c0.2,0.3,0.4,0.6,0.7,0.9c1.5,1.5,3.8,1.7,5.5,0.6c0.5,0.2,1,0.3,1.6,0.3c2.1,0,3.9-1.4,4.3-3.3c0.3-0.2,0.6-0.4,0.9-0.7c1.4-1.5,1.6-3.8,0.6-5.5C21.5,12.1,21.6,11.7,21.7,11.3z M12.5,4.7c0.9,0,1.8,0.4,2.3,1.2c0.1,0.2,0.1,0.5-0.1,0.6L10.3,9.7L9.5,8.8l4.4-4.4C13.5,4.8,13,4.7,12.5,4.7z M6.4,8.5c0.5-0.8,1.3-1.3,2.2-1.4c0.2,0,0.4,0.2,0.4,0.4v6.2l-1.3-0.7L6.4,8.5z M7.7,17c-0.5-0.5-0.8-1.2-0.8-1.9c0-0.2,0.1-0.4,0.3-0.5l5.3-3.1l1.3,0.7L9,17C8.6,17.2,8.1,17.2,7.7,17z M17.2,17.3c-0.9,0.3-1.8,0.2-2.6-0.3c-0.2-0.1-0.3-0.4-0.1-0.5l5.3-3.1v1.5L17.2,17.3z M18.4,11.5l-5.3,3.1l-1.3-0.7L17,8.6c0.5-0.3,1.1-0.3,1.6-0.1c0.2,0.1,0.3,0.3,0.2,0.5C18.8,9.9,18.8,10.7,18.4,11.5z M12.8,13l-1.3-0.7l5.3-3.1c0.2-0.1,0.4,0,0.5,0.1c0.5,0.8,0.6,1.8,0.2,2.6L12.8,13z" />
    </svg>
);

const CopilotStudioLogo = (props) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M72.3 22.5c-4-4-9.3-6.2-14.9-6.2s-10.9 2.2-14.9 6.2L20.8 44.2C16.8 48.2 14.6 53.5 14.6 59.1s2.2 10.9 6.2 14.9c4 4 9.3 6.2 14.9 6.2s10.9-2.2 14.9-6.2l21.7-21.7c4-4 6.2-9.3 6.2-14.9s-2.2-10.9-6.2-14.9z" fill="url(#copilot-grad-1)" />
        <path d="M42.5 52.3c4 4 9.3 6.2 14.9 6.2s10.9-2.2 14.9-6.2l21.7-21.7c4-4 6.2-9.3 6.2-14.9s-2.2-10.9-6.2-14.9c-4-4-9.3-6.2-14.9-6.2s-10.9 2.2-14.9 6.2L42.5 42.5c-4 4-6.2 9.3-6.2 14.9s2.2 10.9 6.2 14.9z" fill="url(#copilot-grad-2)" opacity="0.85" style={{ mixBlendMode: 'screen' }} />
        <defs>
            <linearGradient id="copilot-grad-1" x1="14.6" y1="80.2" x2="78.5" y2="16.3" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="30%" stopColor="#4f46e5" />
                <stop offset="60%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="copilot-grad-2" x1="36.3" y1="58.5" x2="100.2" y2="-5.4" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
        </defs>
    </svg>
);

const AzureAIFoundryLogo = (props) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19.5 4.5L6.5 24.5H16L22.5 13.5L25.5 24.5H29.5L19.5 4.5Z" fill="#0078d4" />
        <path d="M16 24.5H6.5L12 16L16 24.5Z" fill="#50e6ff" />
        <path d="M19.5 4.5L12 16L16 24.5L22.5 13.5L19.5 4.5Z" fill="#00bcf2" />
    </svg>
);

const CopilotStudioMockup = () => {
    return (
        <div className="w-full h-[98px] rounded-xl bg-slate-950/5 backdrop-blur-md border border-white/40 overflow-hidden flex flex-col font-sans text-left shadow-inner">
            {/* Window Header */}
            <div className="h-4.5 bg-white/70 border-b border-white/40 flex items-center px-2 justify-between shrink-0">
                <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#ff5f56]" />
                    <div className="w-1 h-1 rounded-full bg-[#ffbd2e]" />
                    <div className="w-1 h-1 rounded-full bg-[#27c93f]" />
                    <span className="text-[6.5px] text-slate-500 font-bold ml-0.5">Copilot Studio</span>
                </div>
                <div className="w-6 h-2 rounded bg-slate-200/50" />
            </div>

            {/* Window Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-5 bg-[#180828] flex flex-col items-center py-1 gap-1 border-r border-white/10 shrink-0">
                    <div className="w-3 h-3 rounded bg-white/20 flex items-center justify-center">
                        <Bot className="w-2 h-2 text-white" />
                    </div>
                    <div className="w-2 h-0.5 bg-white/10" />
                    <div className="w-1 h-1 rounded-full bg-white/30" />
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                </div>

                {/* Main panel */}
                <div className="flex-1 bg-slate-50/40 p-1 flex gap-1 overflow-hidden">
                    {/* Left status card */}
                    <div className="flex-1 bg-white/95 rounded-lg border border-slate-100 p-0.5 flex flex-col items-center justify-center text-center shadow-sm">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center mb-0.5 shadow">
                            <Bot className="w-2.5 h-2.5 text-white" />
                        </div>
                        <p className="text-[6px] font-black text-slate-800 leading-tight">Your Copilot is ready!</p>
                        <button className="mt-0.5 px-1 py-0.2 bg-indigo-600 text-white font-extrabold rounded text-[4.5px] shadow-sm">
                            Publish
                        </button>
                    </div>

                    {/* Right chatbot dialog */}
                    <div className="w-[75px] bg-white/95 rounded-lg border border-slate-100 p-0.5 flex flex-col justify-between shadow-sm">
                        <div className="flex items-center gap-0.5 border-b border-slate-100 pb-0.2">
                            <div className="w-0.5 h-0.5 rounded-full bg-green-500" />
                            <span className="text-[5.5px] text-slate-500 font-bold">Demo chatbot</span>
                        </div>

                        <div className="flex-1 flex flex-col justify-center gap-0.2 py-0.2">
                            <div className="bg-slate-100 rounded px-0.5 py-0.2 max-w-[90%] self-start">
                                <p className="text-[4.5px] text-slate-600 leading-none">Your Copilot is ready!</p>
                            </div>
                            <div className="bg-indigo-50 rounded px-0.5 py-0.2 max-w-[90%] self-end">
                                <p className="text-[4.5px] text-indigo-700 leading-none">Connected to data</p>
                            </div>
                        </div>

                        {/* Input bar */}
                        <div className="bg-slate-50 rounded border border-slate-200/80 px-1 py-0.2 flex items-center justify-between">
                            <span className="text-[4.5px] text-slate-400">Ask a question...</span>
                            <div className="w-0.5 h-0.5 rounded-full bg-indigo-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AzureAIFoundryMockup = () => {
    return (
        <div className="w-full h-[98px] rounded-xl bg-slate-950/5 backdrop-blur-md border border-white/40 overflow-hidden flex flex-col font-sans text-left shadow-inner">
            {/* Window Header */}
            <div className="h-4.5 bg-white/70 border-b border-white/40 flex items-center px-2 justify-between shrink-0">
                <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#ff5f56]" />
                    <div className="w-1 h-1 rounded-full bg-[#ffbd2e]" />
                    <div className="w-1 h-1 rounded-full bg-[#27c93f]" />
                    <span className="text-[6.5px] text-slate-500 font-bold ml-0.5">Azure AI Foundry</span>
                </div>
                <div className="w-10 h-2.5 rounded bg-blue-100/50 flex items-center justify-center">
                    <span className="text-[4.5px] text-blue-700 font-bold">Model Catalog</span>
                </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-5 bg-[#002060] flex flex-col items-center py-1 gap-1 border-r border-white/10 shrink-0">
                    <div className="w-3 h-3 rounded bg-blue-500/20 flex items-center justify-center">
                        <Layers className="w-2 h-2 text-blue-300" />
                    </div>
                    <div className="w-2 h-0.5 bg-white/10" />
                    <div className="w-1 h-1 rounded-full bg-blue-400/40" />
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                </div>

                {/* Main panel */}
                <div className="flex-1 bg-slate-50/40 p-1 flex gap-1 overflow-hidden">
                    {/* Left: Models List */}
                    <div className="flex-1 flex flex-col gap-0.5 overflow-y-auto">
                        <span className="text-[5.5px] text-slate-400 font-bold">Models</span>

                        <div className="bg-white/95 rounded-md border border-blue-100 p-0.5 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-0.5">
                                <AzureAIFoundryLogo className="w-2.5 h-2.5" />
                                <span className="text-[5.5px] font-black text-slate-800 leading-none ml-0.5">gpt-4o</span>
                            </div>
                            <span className="text-[4px] bg-green-100 text-green-700 px-0.5 rounded-full scale-90">Active</span>
                        </div>

                        <div className="bg-white/80 rounded-md border border-slate-100 p-0.5 flex items-center justify-between">
                            <div className="flex items-center gap-0.5">
                                <AzureAIFoundryLogo className="w-2.5 h-2.5 opacity-60" />
                                <span className="text-[5.5px] font-bold text-slate-600 leading-none ml-0.5">phi-3</span>
                            </div>
                            <span className="text-[4px] bg-blue-50 text-blue-600 px-0.5 rounded-full scale-90">Ready</span>
                        </div>
                    </div>

                    {/* Right: Playground Settings */}
                    <div className="w-[65px] bg-white/95 rounded-lg border border-slate-100 p-0.5 flex flex-col gap-0.5 shadow-sm">
                        <span className="text-[5.5px] text-slate-800 font-bold">Playground</span>

                        <div className="space-y-0.5">
                            <div>
                                <div className="flex justify-between text-[4px] text-slate-400">
                                    <span>Temp</span>
                                    <span>0.7</span>
                                </div>
                                <div className="w-full h-0.5 bg-slate-100 rounded-full mt-0.2">
                                    <div className="w-[70%] h-full bg-blue-500 rounded-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[4px] text-slate-400">
                                    <span>Top P</span>
                                    <span>0.9</span>
                                </div>
                                <div className="w-full h-0.5 bg-slate-100 rounded-full mt-0.2">
                                    <div className="w-[90%] h-full bg-blue-500 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AzureOpenAIMockup = () => {
    return (
        <div className="w-full h-[98px] rounded-xl bg-slate-950/5 backdrop-blur-md border border-white/40 overflow-hidden flex flex-col font-sans text-left shadow-inner">
            {/* Window Header */}
            <div className="h-4.5 bg-white/70 border-b border-white/40 flex items-center px-2 justify-between shrink-0">
                <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#ff5f56]" />
                    <div className="w-1 h-1 rounded-full bg-[#ffbd2e]" />
                    <div className="w-1 h-1 rounded-full bg-[#27c93f]" />
                    <span className="text-[6.5px] text-slate-500 font-bold ml-0.5">Azure OpenAI Service</span>
                </div>
                <div className="w-8 h-2.5 rounded bg-purple-100/50 flex items-center justify-center">
                    <span className="text-[4.5px] text-purple-700 font-bold">Connected</span>
                </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-5 bg-[#3b0764] flex flex-col items-center py-1 gap-1 border-r border-white/10 shrink-0">
                    <div className="w-3 h-3 rounded bg-purple-500/20 flex items-center justify-center">
                        <Cloud className="w-2 h-2 text-purple-300" />
                    </div>
                    <div className="w-2 h-0.5 bg-white/10" />
                    <div className="w-1 h-1 rounded-full bg-purple-300/40" />
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                </div>

                {/* Main panel */}
                <div className="flex-1 bg-slate-50/40 p-1 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center gap-0.5 border-b border-slate-200/50 pb-0.2">
                        <OpenAIIcon className="w-2.5 h-2.5 text-purple-600" />
                        <span className="text-[6px] font-black text-slate-800">Azure OpenAI Chat</span>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 flex flex-col justify-center items-center py-0.5 gap-0.5">
                        <div className="text-center">
                            <p className="text-[6.5px] text-slate-800 font-black leading-tight">How can I help you today?</p>
                        </div>

                        {/* Interactive Chips */}
                        <div className="flex gap-0.5 justify-center scale-75">
                            <div className="px-1 py-0.2 rounded border border-purple-200 bg-white shadow-sm flex items-center">
                                <span className="text-[4px] text-purple-700 font-bold">GPT Models</span>
                            </div>
                            <div className="px-1 py-0.2 rounded border border-purple-200 bg-white shadow-sm flex items-center">
                                <span className="text-[4px] text-purple-700 font-bold">Embeddings</span>
                            </div>
                        </div>
                    </div>

                    {/* Input Bar */}
                    <div className="bg-white rounded-md border border-slate-200/80 px-1 py-0.2 flex items-center justify-between shadow-sm">
                        <span className="text-[4px] text-slate-400">Ask Azure OpenAI...</span>
                        <div className="w-2.5 h-2.5 rounded bg-purple-600 flex items-center justify-center">
                            <Zap className="w-1.5 h-1.5 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── 3D AI Sphere (Implemented directly in AIservice.jsx) ───────────────────
function AISphereThree() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const currentMount = mountRef.current;

        // SCENE SETUP
        const scene = new THREE.Scene();

        // Get initial container dimensions
        const width = currentMount.clientWidth || 300;
        const height = currentMount.clientHeight || 300;

        // Camera Setup (Perspective Camera looking at origin from slightly lower angle)
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.y = -0.35;
        camera.position.z = 11.2;
        camera.lookAt(0, 0, 0);

        // WebGL Renderer Setup (with Alpha/Transparent background and Antialiasing enabled)
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        currentMount.appendChild(renderer.domElement);

        // Create Main Group containing all sphere layers
        const sphereGroup = new THREE.Group();
        scene.add(sphereGroup);

        // --- NEURAL NETWORK CONSTELLATION SPHERE ---
        const maxPoints = 140;
        const r = 2.2;
        const pointsData = [];
        const positions = new Float32Array(maxPoints * 3);
        const colors = new Float32Array(maxPoints * 3);

        // Initialize point positions inside and on the sphere shell (r=1.2 to 2.2)
        for (let i = 0; i < maxPoints; i++) {
            const phi = Math.acos(2 * Math.random() - 1);
            const theta = 2 * Math.PI * Math.random();
            const currentR = 1.2 + Math.random() * (r - 1.2);

            const x = currentR * Math.sin(phi) * Math.cos(theta);
            const y = currentR * Math.cos(phi);
            const z = currentR * Math.sin(phi) * Math.sin(theta);

            pointsData.push({ x, y, z });

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            const distFromCenter = currentR / r;
            const color = new THREE.Color();
            if (distFromCenter < 0.4) {
                color.setHSL(0.9, 0.9, 0.95);
            } else if (distFromCenter < 0.8) {
                color.setHSL(0.85, 0.8, 0.7);
            } else {
                color.setHSL(0.75, 0.9, 0.6);
            }
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        const pointGeometry = new THREE.BufferGeometry();
        pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        pointGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Create canvas texture for glowing points
        const createCircleTexture = () => {
            const matCanvas = document.createElement('canvas');
            matCanvas.width = 16;
            matCanvas.height = 16;
            const ctx = matCanvas.getContext('2d');
            const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
            grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
            grad.addColorStop(0.5, 'rgba(236, 72, 153, 0.5)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 16, 16);
            return new THREE.CanvasTexture(matCanvas);
        };

        const pointTexture = createCircleTexture();
        const pointMaterial = new THREE.PointsMaterial({
            size: 0.22,
            vertexColors: true,
            map: pointTexture,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
        sphereGroup.add(pointCloud);

        // Connections (Lines)
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = new Float32Array(maxPoints * maxPoints * 6);
        const lineColors = new Float32Array(maxPoints * maxPoints * 6);

        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

        const lineMaterial = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
        sphereGroup.add(lineSegments);

        // Compute connection lines once
        const linePosArr = lineGeometry.attributes.position.array;
        const lineColArr = lineGeometry.attributes.color.array;
        let vertexIndex = 0;
        let colorIndex = 0;
        let connectionCount = 0;
        const limit = 0.85;

        for (let i = 0; i < maxPoints; i++) {
            const pt1 = pointsData[i];
            for (let j = i + 1; j < maxPoints; j++) {
                const pt2 = pointsData[j];

                const dx = pt1.x - pt2.x;
                const dy = pt1.y - pt2.y;
                const dz = pt1.z - pt2.z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < limit) {
                    linePosArr[vertexIndex++] = pt1.x;
                    linePosArr[vertexIndex++] = pt1.y;
                    linePosArr[vertexIndex++] = pt1.z;

                    linePosArr[vertexIndex++] = pt2.x;
                    linePosArr[vertexIndex++] = pt2.y;
                    linePosArr[vertexIndex++] = pt2.z;

                    const distCenter1 = Math.sqrt(pt1.x * pt1.x + pt1.y * pt1.y + pt1.z * pt1.z);
                    const distCenter2 = Math.sqrt(pt2.x * pt2.x + pt2.y * pt2.y + pt2.z * pt2.z);

                    const color1 = new THREE.Color();
                    const color2 = new THREE.Color();

                    if (distCenter1 < 1.0) {
                        color1.setRGB(1.0, 0.7, 0.95);
                    } else if (distCenter1 < 1.7) {
                        color1.setRGB(0.73, 0.35, 1.0);
                    } else {
                        color1.setRGB(0.48, 0.12, 0.72);
                    }

                    if (distCenter2 < 1.0) {
                        color2.setRGB(1.0, 0.7, 0.95);
                    } else if (distCenter2 < 1.7) {
                        color2.setRGB(0.73, 0.35, 1.0);
                    } else {
                        color2.setRGB(0.48, 0.12, 0.72);
                    }

                    lineColArr[colorIndex++] = color1.r;
                    lineColArr[colorIndex++] = color1.g;
                    lineColArr[colorIndex++] = color1.b;

                    lineColArr[colorIndex++] = color2.r;
                    lineColArr[colorIndex++] = color2.g;
                    lineColArr[colorIndex++] = color2.b;

                    connectionCount++;
                }
            }
        }
        lineGeometry.setDrawRange(0, connectionCount * 2);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        // --- DARK PURPLE BASE SPHERE BODY ---
        const sphereBodyGeo = new THREE.SphereGeometry(1.95, 32, 32);
        const sphereBodyMat = new THREE.MeshBasicMaterial({
            color: 0x180828,
            transparent: true,
            opacity: 0.6,
            side: THREE.DoubleSide
        });
        const sphereBody = new THREE.Mesh(sphereBodyGeo, sphereBodyMat);
        sphereGroup.add(sphereBody);

        // PLATFORM / PEDESTAL
        const ringGeo1 = new THREE.TorusGeometry(2.8, 0.04, 16, 100);
        const ringMat1 = new THREE.MeshBasicMaterial({
            color: 0x5b21b6,
            transparent: true,
            opacity: 0.6
        });
        const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
        ringMesh1.rotation.x = Math.PI / 2;
        const ringGroup1 = new THREE.Group();
        ringGroup1.add(ringMesh1);
        ringGroup1.position.y = -2.4;
        scene.add(ringGroup1);

        const ringGeo2 = new THREE.TorusGeometry(2.3, 0.05, 16, 100);
        const ringMat2 = new THREE.MeshBasicMaterial({
            color: 0x7c3aed,
            transparent: true,
            opacity: 0.75
        });
        const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
        ringMesh2.rotation.x = Math.PI / 2;
        const ringGroup2 = new THREE.Group();
        ringGroup2.add(ringMesh2);
        ringGroup2.position.y = -2.2;
        scene.add(ringGroup2);

        const ringGeo3 = new THREE.TorusGeometry(1.8, 0.06, 16, 100);
        const ringMat3 = new THREE.MeshBasicMaterial({
            color: 0xd946ef,
            transparent: true,
            opacity: 0.85
        });
        const ringMesh3 = new THREE.Mesh(ringGeo3, ringMat3);
        ringMesh3.rotation.x = Math.PI / 2;
        const ringGroup3 = new THREE.Group();
        ringGroup3.add(ringMesh3);
        ringGroup3.position.y = -2.0;
        scene.add(ringGroup3);

        const cylGeometry = new THREE.CylinderGeometry(2.6, 2.6, 0.08, 64);
        const cylMaterial = new THREE.MeshBasicMaterial({
            color: 0x1e1b4b,
            transparent: true,
            opacity: 0.5
        });
        const cylMesh = new THREE.Mesh(cylGeometry, cylMaterial);
        cylMesh.position.y = -2.35;
        scene.add(cylMesh);

        // LIGHTING
        const insideLight = new THREE.PointLight(0xd946ef, 5, 100);
        insideLight.position.set(0, 0, 0);
        scene.add(insideLight);

        const rimLight1 = new THREE.PointLight(0x7c3aed, 2, 100);
        rimLight1.position.set(3, 2, 2);
        scene.add(rimLight1);

        const rimLight2 = new THREE.PointLight(0x06b6d4, 1.5, 100);
        rimLight2.position.set(-3, -1, 2);
        scene.add(rimLight2);

        const ambientLight = new THREE.AmbientLight(0x180828, 0.6);
        scene.add(ambientLight);

        // Set static rotation & appearance
        sphereGroup.rotation.y = 0.8;
        sphereGroup.rotation.x = 0.3;

        ringGroup1.rotation.y = 0;
        ringGroup2.rotation.y = 0;
        ringGroup3.rotation.y = 0;
        cylMesh.rotation.y = 0;

        // Handle container resize dynamically
        const handleResize = () => {
            if (!currentMount) return;
            const w = currentMount.clientWidth;
            const h = currentMount.clientHeight;
            if (w === 0 || h === 0) return;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            camera.lookAt(0, 0, 0);
            renderer.setSize(w, h);
            renderer.render(scene, camera);
        };

        const resizeObserver = new ResizeObserver(() => {
            handleResize();
        });
        resizeObserver.observe(currentMount);

        // Garbage collection of Geometries, Materials and GL contexts on component unmount
        return () => {
            resizeObserver.disconnect();
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }

            // Dispose Geometries
            pointGeometry.dispose();
            lineGeometry.dispose();
            sphereBodyGeo.dispose();
            ringGeo1.dispose();
            ringGeo2.dispose();
            ringGeo3.dispose();
            cylGeometry.dispose();

            // Dispose Materials
            pointTexture.dispose();
            pointMaterial.dispose();
            lineMaterial.dispose();
            sphereBodyMat.dispose();
            ringMat1.dispose();
            ringMat2.dispose();
            ringMat3.dispose();
            cylMaterial.dispose();

            renderer.dispose();
            renderer.forceContextLoss();
        };
    }, []);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
            <style>{`
        .ai-text-overlay {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Poppins', 'Inter', sans-serif;
          font-weight: 900;
          font-size: 48px;
          color: #ffffff;
          text-shadow: 0 0 35px rgba(217,70,239,0.9), 0 0 70px rgba(124,58,237,0.5);
          pointer-events: none;
          z-index: 10;
          user-select: none;
          letter-spacing: -0.05em;
        }
      `}</style>

            {/* Three.js canvas container */}
            <div ref={mountRef} style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }} />

            {/* "AI" text overlay */}
            <div className="ai-text-overlay">AI</div>
        </div>
    );
}

// ─── 3D AI Chip (React Three Fiber + Drei) ───────────────────────────────────
import { Text, RoundedBox, Float, MeshTransmissionMaterial } from '@react-three/drei';

// Signal dot that travels along a circuit path
function SignalDot({ from, to, color, speed = 1, delay = 0 }) {
    const ref = useRef();
    useFrame((state) => {
        if (!ref.current) return;
        const t = ((state.clock.getElapsedTime() * speed + delay) % 1);
        ref.current.position.x = from[0] + (to[0] - from[0]) * t;
        ref.current.position.y = from[1] + (to[1] - from[1]) * t;
        ref.current.position.z = from[2] + (to[2] - from[2]) * t;
    });
    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.022, 8, 8]} />
            <meshBasicMaterial color={color} />
        </mesh>
    );
}

// Single pin mesh
function ChipPin({ position }) {
    const ref = useRef();
    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        ref.current.material.emissiveIntensity = 0.4 + Math.sin(t * 4 + position[2] * 8) * 0.4;
    });
    return (
        <mesh ref={ref} position={position}>
            <boxGeometry args={[0.045, 0.08, 0.045]} />
            <meshStandardMaterial color="#c4b5fd" emissive="#7c3aed" emissiveIntensity={0.8} metalness={0.95} roughness={0.05} />
        </mesh>
    );
}

// Floating glass cube
function FloatingCube({ position, size, speed, phase }) {
    const ref = useRef();
    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        ref.current.position.y = position[1] + Math.sin(t * speed + phase) * 0.14;
        ref.current.rotation.x += 0.007;
        ref.current.rotation.y += 0.011;
        ref.current.material.opacity = 0.3 + Math.sin(t * speed * 1.3 + phase) * 0.15;
    });
    return (
        <mesh ref={ref} position={position}>
            <boxGeometry args={[size, size, size]} />
            <meshPhysicalMaterial color="#a78bfa" transparent opacity={0.4} roughness={0.02} metalness={0.15} transmission={0.5} />
        </mesh>
    );
}

function ChipScene() {
    const chipGroupRef = useRef();
    const coreGlowRef = useRef();
    const ring1Ref = useRef();
    const ring2Ref = useRef();

    // Pin layout
    const pins = useMemo(() => {
        const p = [];
        for (let i = 0; i < 7; i++) {
            const offset = -0.54 + i * 0.18;
            p.push([- 0.98, -0.02, offset]);  // left
            p.push([  0.98, -0.02, offset]);  // right
            p.push([offset, -0.02, -0.98]);   // top
            p.push([offset, -0.02,  0.98]);   // bottom
        }
        return p;
    }, []);

    // Circuit traces: [from, to, color]
    const traces = useMemo(() => [
        { from: [-0.43, 0.09, 0],    to: [-0.97, 0.09, 0],    color: '#a855f7' },
        { from: [ 0.43, 0.09, 0],    to: [ 0.97, 0.09, 0],    color: '#a855f7' },
        { from: [0, 0.09, -0.43],    to: [0, 0.09, -0.97],    color: '#60a5fa' },
        { from: [0, 0.09,  0.43],    to: [0, 0.09,  0.97],    color: '#60a5fa' },
        { from: [-0.43, 0.09, -0.43], to: [-0.7,  0.09, -0.7], color: '#d946ef' },
        { from: [ 0.43, 0.09, -0.43], to: [ 0.7,  0.09, -0.7], color: '#d946ef' },
        { from: [-0.43, 0.09,  0.43], to: [-0.7,  0.09,  0.7], color: '#d946ef' },
        { from: [ 0.43, 0.09,  0.43], to: [ 0.7,  0.09,  0.7], color: '#d946ef' },
    ], []);

    const floatingCubes = useMemo(() => [
        { position: [-1.4,  0.3, -0.9], size: 0.14, speed: 0.7,  phase: 0   },
        { position: [ 1.3,  0.5, -0.7], size: 0.10, speed: 1.1,  phase: 1.2 },
        { position: [-1.1,  0.6,  1.0], size: 0.09, speed: 0.9,  phase: 2.4 },
        { position: [ 1.4,  0.2,  0.8], size: 0.12, speed: 0.65, phase: 0.8 },
        { position: [ 0.2,  1.0, -1.2], size: 0.08, speed: 1.3,  phase: 3.1 },
        { position: [-0.4,  0.8,  1.3], size: 0.11, speed: 0.85, phase: 1.7 },
        { position: [ 0.9,  0.9,  1.1], size: 0.07, speed: 1.0,  phase: 2.0 },
    ], []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Slow sway
        if (chipGroupRef.current) {
            chipGroupRef.current.rotation.y = Math.sin(t * 0.35) * 0.12;
        }
        // Core glow pulse
        if (coreGlowRef.current) {
            coreGlowRef.current.material.emissiveIntensity = 0.25 + Math.sin(t * 2.2) * 0.15;
        }
        // Ring spin
        if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.28;
        if (ring2Ref.current) ring2Ref.current.rotation.z = -t * 0.18;
    });

    return (
        <>
            {/* ── Lighting ── */}
            <ambientLight color="#ddd6fe" intensity={1.0} />
            <pointLight position={[-3, 4, 3]}  color="#a855f7" intensity={8}  distance={12} />
            <pointLight position={[ 3, 3, -3]} color="#60a5fa" intensity={6}  distance={12} />
            <pointLight position={[ 0, 5, 0]}  color="#ffffff" intensity={3}  distance={10} />
            <spotLight   position={[ 0, 6, 2]} color="#d946ef" intensity={5}  angle={0.45} penumbra={1} distance={14} />
            <pointLight position={[0, -1, 0]} color="#7c3aed" intensity={2} distance={5} />

            {/* ── Shadow receiving ground plane ── */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.55, 0]} receiveShadow>
                <circleGeometry args={[2.5, 64]} />
                <meshBasicMaterial color="#a855f7" transparent opacity={0.06} />
            </mesh>

            <Float speed={1.4} rotationIntensity={0.06} floatIntensity={0.5}>
                <group ref={chipGroupRef}>

                    {/* ── Large glass chip body ── */}
                    <RoundedBox args={[2.0, 0.11, 2.0]} radius={0.06} smoothness={4} position={[0, -0.06, 0]}>
                        <MeshTransmissionMaterial
                            color="#c4b5fd"
                            transmission={0.85}
                            roughness={0.03}
                            thickness={0.4}
                            chromaticAberration={0.03}
                            backside
                        />
                    </RoundedBox>

                    {/* ── Chip body inner tinted layer ── */}
                    <mesh position={[0, -0.01, 0]}>
                        <boxGeometry args={[1.85, 0.06, 1.85]} />
                        <meshPhysicalMaterial color="#7c3aed" transparent opacity={0.12} roughness={0.1} metalness={0.3} />
                    </mesh>

                    {/* ── Dark processor core ── */}
                    <RoundedBox ref={coreGlowRef} args={[0.9, 0.12, 0.9]} radius={0.04} smoothness={4} position={[0, 0.05, 0]} castShadow>
                        <meshStandardMaterial color="#0a0618" roughness={0.25} metalness={0.85} emissive="#5b21b6" emissiveIntensity={0.3} />
                    </RoundedBox>

                    {/* ── Glowing border around core ── */}
                    <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.63, 0.012, 8, 64]} />
                        <meshBasicMaterial color="#a855f7" transparent opacity={0.7} />
                    </mesh>

                    {/* ── "AI" text on processor core ── */}
                    <Text
                        position={[0, 0.13, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        fontSize={0.52}
                        fontWeight="bold"
                        color="#ffffff"
                        anchorX="center"
                        anchorY="middle"
                        fillOpacity={1}
                        outlineWidth={0.022}
                        outlineColor="#a855f7"
                        outlineOpacity={1}
                    >
                        AI
                    </Text>

                    {/* ── Circuit traces (static lines) ── */}
                    {traces.map((tr, i) => {
                        const points = [
                            new THREE.Vector3(...tr.from),
                            new THREE.Vector3(...tr.to),
                        ];
                        const geo = new THREE.BufferGeometry().setFromPoints(points);
                        return (
                            <primitive key={i} object={new THREE.Line(
                                geo,
                                new THREE.LineBasicMaterial({ color: tr.color, transparent: true, opacity: 0.75 })
                            )} />
                        );
                    })}

                    {/* ── Signal dots moving along traces ── */}
                    {traces.map((tr, i) => (
                        <SignalDot
                            key={`sig-${i}`}
                            from={tr.from}
                            to={tr.to}
                            color={tr.color}
                            speed={0.6 + (i % 3) * 0.2}
                            delay={i * 0.14}
                        />
                    ))}

                    {/* ── Pins ── */}
                    {pins.map((pos, i) => (
                        <ChipPin key={i} position={pos} />
                    ))}

                    {/* ── Outer spinning rings ── */}
                    <mesh ref={ring1Ref} position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[1.12, 0.013, 8, 80]} />
                        <meshBasicMaterial color="#7c3aed" transparent opacity={0.55} />
                    </mesh>
                    <mesh ref={ring2Ref} position={[0, -0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.96, 0.009, 8, 80]} />
                        <meshBasicMaterial color="#60a5fa" transparent opacity={0.45} />
                    </mesh>

                    {/* ── Floating glass cubes ── */}
                    {floatingCubes.map((c, i) => (
                        <FloatingCube key={i} {...c} />
                    ))}
                </group>
            </Float>
        </>
    );
}

function AIChip3D() {
    return (
        <Canvas
            camera={{ position: [3.2, 2.5, 3.2], fov: 36 }}
            gl={{ antialias: true, alpha: true }}
            shadows
            style={{ background: 'transparent' }}
        >
            <ChipScene />
        </Canvas>
    );
}


// ─── Glass Card ───────────────────────────────────────────────────────────────
function GlassCard({ children, className = '', hoverGlow = true, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={hoverGlow ? { scale: 1.02, y: -3 } : {}}
            className={`
        bg-white/25 backdrop-blur-2xl border border-white/50
        rounded-[24px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_20px_60px_rgba(124,58,237,0.08)]
        hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.55),_0_25px_70px_rgba(124,58,237,0.15)]
        transition-all duration-300 ${className}
      `}
        >
            {children}
        </motion.div>
    );
}

// ─── Animated Connection Line ─────────────────────────────────────────────────
function ConnectionLine({ className = '' }) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/50 to-purple-400/30 rounded-full" />
            <motion.div
                className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"
                animate={{ left: ['-10%', '110%'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const kpiData = [
    { icon: Brain, value: '50+', label: 'AI Solutions Delivered', color: 'text-indigo-600' },
    { icon: Workflow, value: '100+', label: 'Automation Workflows', color: 'text-indigo-600' },
    { icon: TrendingUp, value: '90%', label: 'Process Efficiency Gain', color: 'text-indigo-600' },
    { icon: Clock, value: '24/7', label: 'Intelligent Operations', color: 'text-indigo-600' },
];

const platformCards = [
    {
        icon: CopilotStudioLogo,
        name: 'Copilot Studio',
        color: 'from-purple-500 to-indigo-600',
        features: ['Custom Copilots', 'Enterprise Chatbots', 'Workflow Automation', 'Knowledge Integration'],
    },
    {
        icon: AzureAIFoundryLogo,
        name: 'Azure AI Foundry',
        color: 'from-blue-500 to-cyan-600',
        features: ['Model Catalog', 'AI Orchestration', 'Prompt Management', 'Responsible AI'],
    },
    {
        icon: OpenAIIcon,
        name: 'Azure OpenAI Service',
        color: 'from-violet-500 to-purple-700',
        features: ['GPT Models', 'Embeddings', 'Fine-tuning', 'Content Generation'],
    },
];

const ChatbotIcon = () => (
    <svg className="w-9 h-9 text-[#5c3be6] shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Robot head base */}
        <rect x="8" y="14" width="28" height="22" rx="6" fill="#5c3be6" />
        {/* Eyes */}
        <circle cx="17" cy="23" r="2.5" fill="#ffffff" />
        <circle cx="27" cy="23" r="2.5" fill="#ffffff" />
        {/* Mouth */}
        <path d="M18 29C18 29 20 31 22 31C24 31 26 29 26 29" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        {/* Ears */}
        <rect x="4" y="21" width="4" height="8" rx="2" fill="#5c3be6" />
        <rect x="36" y="21" width="4" height="8" rx="2" fill="#5c3be6" />
        {/* Antenna */}
        <path d="M22 14V8" stroke="#5c3be6" strokeWidth="3" strokeLinecap="round" />
        <circle cx="22" cy="6" r="3" fill="#5c3be6" />
        {/* Chat bubble at bottom-right */}
        <g filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.15))">
            <rect x="28" y="26" width="16" height="14" rx="4" fill="#ffffff" stroke="#5c3be6" strokeWidth="2" />
            <polygon points="32,40 30,43 35,40" fill="#ffffff" stroke="#5c3be6" strokeWidth="2" strokeLinejoin="miter" />
            <line x1="32.5" y1="39.5" x2="34.5" y2="39.5" stroke="#ffffff" strokeWidth="2" />
            <circle cx="33" cy="33" r="1.2" fill="#5c3be6" />
            <circle cx="39" cy="33" r="1.2" fill="#5c3be6" />
            <path d="M35 35.5C35 35.5 35.5 36.5 37 36.5" stroke="#5c3be6" strokeWidth="1" strokeLinecap="round" />
        </g>
    </svg>
);

const RagIcon = () => (
    <svg className="w-9 h-9 text-[#5c3be6] shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Connecting lines of the network block */}
        <path d="M24 8V24L36 31M24 24L12 31M12 17L24 24M36 17L24 24" stroke="#5c3be6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Isometric Cube Faces with gradients or semi-transparent fills */}
        <polygon points="24,10 36,17 24,24 12,17" fill="#8b5cf6" opacity="0.4" />
        <polygon points="12,17 24,24 24,38 12,31" fill="#6d28d9" opacity="0.6" />
        <polygon points="24,24 36,17 36,31 24,38" fill="#4c1d95" opacity="0.8" />

        {/* Outline around the cube */}
        <path d="M12 17V31L24 38L36 31V17L24 10L12 17Z" stroke="#5c3be6" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Nodes at vertices */}
        <circle cx="24" cy="8" r="3.5" fill="#5c3be6" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="36" cy="17" r="3.5" fill="#5c3be6" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="36" cy="31" r="3.5" fill="#5c3be6" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="24" cy="38" r="3.5" fill="#5c3be6" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="12" cy="31" r="3.5" fill="#5c3be6" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="3.5" fill="#5c3be6" stroke="#ffffff" strokeWidth="1.5" />

        {/* Central main node */}
        <circle cx="24" cy="24" r="4.5" fill="#ffffff" stroke="#5c3be6" strokeWidth="2.5" />
    </svg>
);

const PredictiveIcon = () => (
    <svg className="w-9 h-9 text-[#5c3be6] shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Trend line */}
        <path d="M8 20L18 12L28 18L40 6" stroke="#5c3be6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Trend line nodes */}
        <circle cx="8" cy="20" r="3" fill="#5c3be6" />
        <circle cx="18" cy="12" r="3" fill="#5c3be6" />
        <circle cx="28" cy="18" r="3" fill="#5c3be6" />
        <circle cx="40" cy="6" r="4" fill="#ffffff" stroke="#5c3be6" strokeWidth="3" />

        {/* Bars at the bottom - filled, solid purple */}
        <rect x="8" y="28" width="6" height="12" rx="1.5" fill="#5c3be6" />
        <rect x="18" y="24" width="6" height="16" rx="1.5" fill="#8b5cf6" />
        <rect x="28" y="30" width="6" height="10" rx="1.5" fill="#a78bfa" />
        <rect x="38" y="20" width="6" height="20" rx="1.5" fill="#5c3be6" opacity="0.8" />

        {/* Connection lines */}
        <line x1="8" y1="20" x2="8" y2="28" stroke="#5c3be6" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
        <line x1="18" y1="12" x2="18" y2="24" stroke="#5c3be6" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
        <line x1="28" y1="18" x2="28" y2="30" stroke="#5c3be6" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
        <line x1="40" y1="6" x2="40" y2="20" stroke="#5c3be6" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
    </svg>
);

const DocumentIcon = () => (
    <svg className="w-9 h-9 text-[#5c3be6] shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document Base (Solid purple/blue) */}
        <rect x="10" y="8" width="24" height="32" rx="4" fill="#5c3be6" />
        <path d="M15 15H29M15 21H29M15 27H23" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

        {/* Overlapping validation badge at bottom right */}
        <g filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.15))">
            <circle cx="34" cy="32" r="9" fill="#ffffff" />
            <circle cx="34" cy="32" r="7.5" fill="#5c3be6" />
            <path d="M31 32L33 34L37 30" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>
);

const leftFeatureCards = [
    { icon: ChatbotIcon, title: 'Intelligent Chatbots', desc: 'AI-powered conversational experiences that engage, assist, and resolve customer queries in real time.' },
    { icon: RagIcon, title: 'RAG (Retrieval Augmented Generation)', desc: 'Combine enterprise data with generative AI to deliver accurate, context-aware, and trustworthy responses.' },
    { icon: PredictiveIcon, title: 'Predictive Analytics', desc: 'Leverage machine learning to predict trends, detect patterns, and drive smarter business decisions.' },
    { icon: DocumentIcon, title: 'Intelligent Document Processing', desc: 'Automate data extraction, classification, and validation from documents with high accuracy.' },
];

const dataSources = [
    { icon: FileSearch, label: 'Documents' },
    { icon: Database, label: 'Databases' },
    { icon: Layers, label: 'Applications' },
    { icon: Globe, label: 'Web & APIs' },
    { icon: Mail, label: 'Emails' },
    { icon: Server, label: 'Files & Storage' },
];

const aiCapabilities = [
    { icon: MessageSquare, label: 'NLP' },
    { icon: Brain, label: 'Machine Learning' },
    { icon: Eye, label: 'Computer Vision' },
    { icon: Mic, label: 'Speech AI' },
    { icon: Network, label: 'Knowledge Graphs' },
    { icon: AlertTriangle, label: 'Anomaly Detection' },
];

const pipelineStages = [
    { icon: Database, title: 'Data Ingestion', sub: 'Collect & Consolidate', color: 'from-purple-500 to-violet-600', glow: 'shadow-[0_0_20px_rgba(139,92,246,0.4)]' },
    { icon: Brain, title: 'Understanding', sub: 'Extract & Understand', color: 'from-pink-500 to-rose-600', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.4)]' },
    { icon: GitBranch, title: 'Reasoning', sub: 'AI Models & Logic', color: 'from-violet-500 to-purple-700', glow: 'shadow-[0_0_20px_rgba(124,58,237,0.4)]' },
    { icon: Zap, title: 'Generation', sub: 'Create & Recommend', color: 'from-indigo-500 to-blue-600', glow: 'shadow-[0_0_20px_rgba(99,102,241,0.4)]' },
    { icon: RefreshCw, title: 'Action', sub: 'Automate & Execute', color: 'from-cyan-500 to-blue-500', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.4)]' },
];

const businessOutcomes = [
    { icon: TrendingUp, label: 'Operational Efficiency', color: 'text-purple-600' },
    { icon: Users, label: 'Enhanced Experience', color: 'text-pink-600' },
    { icon: DollarSign, label: 'Cost Optimization', color: 'text-violet-600' },
    { icon: BarChart3, label: 'Data-Driven Insights', color: 'text-indigo-600' },
    { icon: Lightbulb, label: 'Business Growth', color: 'text-blue-600' },
];

const industries = [
    { icon: Building2, label: 'Finance' },
    { icon: Heart, label: 'Healthcare' },
    { icon: Factory, label: 'Manufacturing' },
    { icon: ShoppingCart, label: 'Retail' },
    { icon: GraduationCap, label: 'Education' },
    { icon: Truck, label: 'Logistics' },
    { icon: Landmark, label: 'Public Sector' },
    { icon: MoreHorizontal, label: 'More' },
];

const bottomStats = [
    { icon: Cpu, value: '200+', label: 'AI Models Deployed' },
    { icon: Users, value: '80+', label: 'Enterprise Clients' },
    { icon: FileSearch, value: '1M+', label: 'Documents Processed' },
    { icon: CheckCircle, value: '99%', label: 'Accuracy Rate' },
    { icon: Zap, value: '60%', label: 'Time Saved' },
];

const orchestrationItems = ['Prompt Engineering', 'Model Routing', 'Guardrails', 'Monitoring'];

// ─── Main Component ────────────────────────────────────────────────────────────
export default function AIservice() {
    return (
        <section
            id="ai-services"
            className="relative w-full overflow-hidden font-sans"
            style={{
                background: 'linear-gradient(135deg, #faf5ff 0%, #f3f0ff 20%, #fdf4ff 40%, #eff6ff 60%, #f8f5ff 80%, #fefce8 100%)',
            }}
        >
            {/* Background decorative blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-pink-300/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-300/15 rounded-full blur-[90px]" />
                {/* Subtle dot grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="#7c3aed" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-grid)" />
                </svg>
            </div>

            <div className="relative z-10 px-4 lg:px-6 xl:px-8 pt-5 pb-2 max-w-[1600px] mx-auto">

                {/* ── ROW 1: Branding + KPI Strip + Partner Pills ── */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    {/* Brand Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2.5 min-w-[210px] shrink-0"
                    >
                        <img
                            src="/logo.png"
                            alt="DesireInfoWeb Logo"
                            className="w-12 h-12 object-contain filter drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)]"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-[17px] font-black text-[#1e1b4b] leading-tight tracking-tight">DesireInfoWeb</p>
                            <p className="text-[9px] font-bold text-slate-500 leading-none mt-0.5">
                                Your Extended <span className="text-[#ec4899] font-extrabold">Technology Partner</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* KPI Strip */}
                    <GlassCard className="flex-1 max-w-2xl px-4 py-2.5" hoverGlow={false} delay={0.1}>
                        <div className="grid grid-cols-4 divide-x divide-purple-100/60">
                            {kpiData.map((kpi, i) => (
                                <div key={i} className="flex items-center gap-2 px-3">
                                    <div className="w-7 h-7 rounded-lg bg-indigo-50/60 flex items-center justify-center shrink-0">
                                        <kpi.icon className={`w-3.5 h-3.5 ${kpi.color}`} />
                                    </div>
                                    <div>
                                        <p className={`text-base font-black leading-none ${kpi.color}`}>{kpi.value}</p>
                                        <p className="text-[8px] text-slate-500 font-medium leading-tight mt-0.5">{kpi.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Partner Pills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-2"
                    >
                        {[
                            { icon: MicrosoftIcon, label: 'Microsoft AI Cloud Partner', color: 'text-blue-700' },
                            { icon: OpenAIIcon, label: 'Azure OpenAI', color: 'text-purple-700' },
                        ].map((p, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 shadow-sm transition-all hover:scale-102">
                                <p.icon className="w-4 h-4 object-contain" />
                                <span className="text-[10px] font-black text-slate-800 whitespace-nowrap">{p.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-12 gap-3">

                    {/* ── COL 1-3: Left Panel ── */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">

                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="px-1"
                        >
                            <h1 className="text-3xl xl:text-4xl font-black leading-tight mb-1">
                                <span className="text-[#1e1b4b]">AI & Intelligent</span>
                                <br />
                                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                    Automation
                                </span>
                            </h1>
                            <p className="text-[10px] font-bold text-purple-700 mb-2 leading-snug">
                                Smarter Workflows. Intelligent Decisions. Automated for Impact.
                            </p>
                            <p className="text-[9px] text-slate-600 leading-relaxed">
                                We help organizations harness the power of AI to optimize operations, enhance customer experiences, and drive measurable business outcomes.
                            </p>
                        </motion.div>

                        {/* Left Feature Cards */}
                        <div className="flex flex-col gap-2.5">
                            {leftFeatureCards.map((card, i) => {
                                const IconComponent = card.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        className="relative overflow-hidden bg-white/40 backdrop-blur-xl border border-white/50 border-t-[1.5px] border-l-[1.5px] border-t-white/85 border-l-white/85 rounded-[18px] p-2.5 pl-3.5 shadow-[0_10px_35px_rgba(124,58,237,0.05)] hover:shadow-[0_15px_42px_rgba(124,58,237,0.1)] transition-all duration-300"
                                    >
                                        {/* Top-Right Shiny Specular Glow / Lens Flare */}
                                        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none select-none z-10 overflow-hidden rounded-[18px]">
                                            {/* Radial glow */}
                                            <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full" style={{
                                                background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(217,70,239,0.3) 40%, rgba(124,58,237,0.1) 60%, transparent 100%)',
                                                filter: 'blur(2px)'
                                            }} />
                                            {/* Sparkle core */}
                                            <div className="absolute top-1 right-1.5 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_#ffffff,0_0_12px_rgba(217,70,239,0.8)]" />
                                        </div>

                                        <div className="flex items-start gap-3 relative z-20">
                                            <IconComponent />
                                            <div>
                                                <h3 className="text-[12.5px] font-extrabold text-[#3b2be0] leading-snug mb-0.5 tracking-tight">{card.title}</h3>
                                                <p className="text-[10px] text-[#5c4e9c] font-semibold leading-snug opacity-95">{card.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Stats Card — Image 2 style */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="rounded-2xl overflow-hidden"
                            style={{
                                background: 'rgba(255,255,255,0.75)',
                                backdropFilter: 'blur(20px)',
                                border: '1.5px solid rgba(167,139,250,0.2)',
                                boxShadow: '0 8px 32px rgba(124,58,237,0.08)',
                            }}
                        >
                            <div className="px-4 py-3 space-y-2.5">
                                {bottomStats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.55 + i * 0.07 }}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        <div
                                            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                                            style={{
                                                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                                                boxShadow: '0 4px 12px rgba(124,58,237,0.3)',
                                            }}
                                        >
                                            <stat.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <span
                                                className="text-[13px] font-black leading-none"
                                                style={{ color: '#5c3be0' }}
                                            >
                                                {stat.value}&nbsp;
                                            </span>
                                            <span className="text-[9px] text-slate-600 font-semibold leading-tight">{stat.label}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ── COL 4-10: Center Zone ── */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-3">

                        {/* Platform Cards Row */}
                        <div className="grid grid-cols-3 gap-3">
                            {platformCards.map((card, i) => {
                                const LogoComponent = card.icon;
                                const MockupComponent = [CopilotStudioMockup, AzureAIFoundryMockup, AzureOpenAIMockup][i];
                                return (
                                    <GlassCard key={i} className="p-3 flex flex-col justify-between relative overflow-hidden" delay={0.1 + i * 0.08}>
                                        {/* Subtle background glow tailored to the card theme */}
                                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                                        <div>
                                            <div className="flex items-center gap-2.5 mb-2.5">
                                                <div className="w-8.5 h-8.5 flex items-center justify-center shrink-0">
                                                    <LogoComponent className="w-8.5 h-8.5 object-contain drop-shadow-[0_2px_10px_rgba(124,58,237,0.12)]" />
                                                </div>
                                                <p className="text-[12px] font-black text-[#1e1b4b] leading-tight tracking-tight">{card.name}</p>
                                            </div>

                                            <ul className="space-y-1 mb-3">
                                                {card.features.map((f, j) => (
                                                    <li key={j} className="flex items-center gap-1.5">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_4px_rgba(168,85,247,0.4)]" />
                                                        <span className="text-[9px] xl:text-[10px] font-semibold text-slate-700 tracking-tight leading-tight">{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* High-Fidelity UI Mockup */}
                                        <div className="mt-auto">
                                            <MockupComponent />
                                        </div>
                                    </GlassCard>
                                );
                            })}
                        </div>

                        {/* Center Sphere + Data Sources + AI Capabilities */}
                        <div className="grid grid-cols-5 gap-2 items-center">

                            {/* Enterprise Data Sources */}
                            <div className="col-span-1 -translate-y-28">
                                <GlassCard className="p-3 min-h-[160px]" delay={0.3}>
                                    <p className="text-[9px] font-black text-[#1e1b4b] mb-2.5 leading-tight">Enterprise Data Sources</p>
                                    <div className="space-y-2">
                                        {dataSources.map((ds, i) => (
                                            <div key={i} className="flex items-center gap-1.5">
                                                <div className="w-6 h-6 rounded-md bg-purple-50 flex items-center justify-center shrink-0">
                                                    <ds.icon className="w-3 h-3 text-purple-500" />
                                                </div>
                                                <span className="text-[8px] font-medium text-slate-600">{ds.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                                {/* Connection line to sphere */}
                                <div className="flex justify-end mt-1">
                                    <ConnectionLine className="h-1 w-full rounded-full" />
                                </div>
                            </div>

                            {/* 3D AI Sphere */}
                            <div className="col-span-3 relative -mb-48">
                                <div className="w-full aspect-square relative -translate-y-36">
                                    <AISphereThree />
                                </div>

                                {/* Orchestration Layer */}
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="mt-2 mx-auto text-center relative z-20 -translate-y-44 md:-translate-y-48 lg:-translate-y-52 xl:-translate-y-56"
                                >
                                    <div style={{
                                        background: 'rgba(88,28,135,0.4)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(196,132,252,0.3)',
                                        borderRadius: '999px',
                                        padding: '5px 18px',
                                        display: 'inline-block',
                                        boxShadow: '0 8px 32px rgba(124,58,237,0.2)',
                                    }}>
                                        <p style={{ color: '#ffffff', fontSize: '11px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: 0 }}>
                                            AI Orchestration Layer
                                        </p>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '8px', fontFamily: 'Poppins, sans-serif', margin: '1px 0 0 0', whiteSpace: 'nowrap' }}>
                                            Prompt Engineering &bull; Model Routing &bull; Guardrails &bull; Monitoring
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Industry Strip — directly below Orchestration Layer */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.65 }}
                                    className="mt-3 relative z-20 -translate-y-44 md:-translate-y-48 lg:-translate-y-52 xl:-translate-y-56"
                                >
                                    <div
                                        className="rounded-2xl px-3 py-1.5 shadow-[0_8px_32px_rgba(88,28,135,0.35)]"
                                        style={{
                                            background: 'linear-gradient(135deg, #3b0764 0%, #5b21b6 40%, #7c3aed 70%, #4c1d95 100%)',
                                            border: '1px solid rgba(167,139,250,0.25)',
                                        }}
                                    >
                                        <p className="text-[7px] font-black text-white/90 text-center mb-1.5 tracking-wide uppercase">
                                            AI-Powered Solutions for Every Industry
                                        </p>
                                        <div className="flex items-center justify-between gap-0.5">
                                            {industries.map((ind, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ scale: 1.12, y: -2 }}
                                                    className="flex flex-col items-center gap-0.5 cursor-pointer group"
                                                >
                                                    <div
                                                        className="w-6 h-6 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                                                        style={{
                                                            background: 'rgba(255,255,255,0.15)',
                                                            backdropFilter: 'blur(8px)',
                                                            border: '1px solid rgba(255,255,255,0.2)',
                                                        }}
                                                    >
                                                        <ind.icon className="w-3 h-3 text-white" />
                                                    </div>
                                                    <span className="text-[5px] text-white/75 group-hover:text-white font-semibold transition-colors text-center leading-tight">{ind.label}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Automate Smarter CTA — below Industry Strip */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.75 }}
                                    className="mt-2 relative z-20 -translate-y-44 md:-translate-y-48 lg:-translate-y-52 xl:-translate-y-56"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                        animate={{
                                            boxShadow: [
                                                '0 0 16px rgba(139,92,246,0.5)',
                                                '0 0 28px rgba(236,72,153,0.6)',
                                                '0 0 16px rgba(139,92,246,0.5)',
                                            ],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                        className="relative rounded-2xl overflow-hidden text-center cursor-pointer py-2.5 px-4"
                                        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)' }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                            animate={{ x: ['-150%', '150%'] }}
                                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                                        />
                                        <p className="relative text-white font-black text-[11px] leading-tight">
                                            Automate Smarter. Innovate Faster.
                                        </p>
                                        <div className="relative flex items-center justify-center mt-1 gap-1">
                                            <ArrowRight className="w-3 h-3 text-white/80" />
                                            <span className="text-[8px] text-white/80 font-semibold">Get Started</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* AI Capabilities */}
                            <div className="col-span-1 -translate-y-28">
                                {/* Connection line from sphere */}
                                <div className="flex justify-start mb-1">
                                    <ConnectionLine className="h-1 w-full rounded-full" />
                                </div>
                                <GlassCard className="p-3 min-h-[160px]" delay={0.3}>
                                    <p className="text-[9px] font-black text-[#1e1b4b] mb-2.5 leading-tight">AI Capabilities</p>
                                    <div className="space-y-2">
                                        {aiCapabilities.map((cap, i) => (
                                            <div key={i} className="flex items-center gap-1.5">
                                                <div className="w-6 h-6 rounded-md bg-pink-50 flex items-center justify-center shrink-0">
                                                    <cap.icon className="w-3 h-3 text-pink-500" />
                                                </div>
                                                <span className="text-[8px] font-medium text-slate-600">{cap.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            </div>
                        </div>


                    </div>

                    {/* ── COL 11-12: Right Panel ── */}
                    <div className="col-span-12 lg:col-span-2 flex flex-col gap-3">

                        {/* Automation Pipeline */}
                        <div
                            className="lg:max-w-[210px] w-full mx-auto rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(88,28,135,0.25)]"
                            style={{
                                background: 'linear-gradient(160deg, #1e0a3c 0%, #2d1159 40%, #1a0a38 100%)',
                                border: '1px solid rgba(167,139,250,0.2)',
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-2 px-3 pt-3 pb-2">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shrink-0 shadow-lg">
                                    <Workflow className="w-3.5 h-3.5 text-white" />
                                </div>
                                <p className="text-[10px] font-black text-white leading-tight tracking-tight">Intelligent Automation Pipelines</p>
                            </div>

                            {/* Pipeline stages */}
                            <div className="px-2 pb-3 space-y-1.5">
                                {pipelineStages.map((stage, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                                        whileHover={{ x: 2, scale: 1.01 }}
                                        className={`relative flex items-center gap-2 py-1.5 px-2 rounded-xl bg-gradient-to-r ${stage.color} ${stage.glow} cursor-pointer overflow-hidden w-full`}
                                    >
                                        {/* Moving energy particle */}
                                        <motion.div
                                            className="absolute inset-y-0 w-4 bg-white/15 blur-sm"
                                            animate={{ left: ['-10%', '110%'] }}
                                            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'linear', delay: i * 0.4 }}
                                        />
                                        {/* Icon */}
                                        <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center shrink-0 shadow">
                                            <stage.icon className="w-3 h-3 text-white" />
                                        </div>
                                        {/* Text */}
                                        <div>
                                            <p className="text-[9px] font-black text-white leading-none tracking-tight">{stage.title}</p>
                                            <p className="text-[7px] text-white/70 leading-none mt-0.5">{stage.sub}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Business Outcomes */}
                        <GlassCard className="p-2 lg:max-w-[190px] w-full mx-auto" delay={0.3} hoverGlow={false}>
                            <div className="flex items-center gap-1 mb-1.5">
                                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-2 h-2 text-white" />
                                </div>
                                <p className="text-[8.5px] font-black text-[#1e1b4b] leading-tight">Business Outcomes</p>
                            </div>
                            <div className="space-y-1">
                                {businessOutcomes.map((outcome, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                                        whileHover={{ x: 2 }}
                                        className="flex items-center gap-1 p-0.75 rounded-md bg-white/50 border border-white/70 hover:border-purple-200 transition-all cursor-pointer group"
                                    >
                                        <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center group-hover:from-purple-100 group-hover:to-pink-100 transition-all shrink-0">
                                            <outcome.icon className={`w-2 h-2 ${outcome.color}`} />
                                        </div>
                                        <span className="text-[8px] font-bold text-slate-700 truncate">{outcome.label}</span>
                                        <ChevronRight className="w-2.5 h-2.5 text-purple-300 ml-auto group-hover:text-purple-500 transition-colors shrink-0" />
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* 3D AI Processor Chip — no card */}
                        <div className="lg:max-w-[220px] w-full mx-auto">
                            <div className="w-full h-[220px]" style={{ background: 'transparent' }}>
                                <AIChip3D />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
