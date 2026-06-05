import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
    Globe, Users, BookOpen, Shield, Mail, Phone, Link2,
    Layers, FileText, Workflow, Lock, Smartphone, Search, Bell,
    Settings, Home, Newspaper, FolderOpen, Building2, CheckCircle,
    Upload, Share2, Plus, ChevronRight, Sparkles, User, Calendar,
    Briefcase, GraduationCap, Headphones, Wallet, ListTodo, Zap,
    History, Tags, RefreshCw, UserCheck, ShieldCheck,
} from 'lucide-react';

// ─── Hooks & utilities ───────────────────────────────────────────────────────
function useCountUp(target, duration = 1400) {
    const [val, setVal] = useState(0);
    const str = String(target);
    const numMatch = str.match(/[\d.]+/);
    const parsed = numMatch ? parseFloat(numMatch[0]) : 0;
    const prefix = str.slice(0, str.indexOf(numMatch?.[0] ?? ''));
    const suffix = str.slice((str.indexOf(numMatch?.[0] ?? '') + (numMatch?.[0]?.length ?? 0)));
    const hasDecimal = numMatch?.[0]?.includes('.');

    useEffect(() => {
        const t0 = performance.now();
        const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            setVal(parsed * (1 - (1 - p) ** 3));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [target, duration, parsed]);

    return `${prefix}${hasDecimal ? val.toFixed(1) : Math.round(val).toLocaleString()}${suffix}`;
}

const POPPINS = '"Poppins", "Inter", sans-serif';

const glass = {
    background: 'rgba(255, 255, 255, 0.6)',
    border: '1px solid rgba(160, 80, 255, 0.25)',
    boxShadow: '0 20px 60px rgba(91, 46, 255, 0.12), inset 0 1px 0 rgba(255,255,255,0.95)',
    backdropFilter: 'blur(12px)',
};

// ─── Custom Icons to match Image 2 ──────────────────────────────────────────
function CentralizedIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <circle cx="5" cy="19" r="2.5" />
            <circle cx="19" cy="19" r="2.5" />
            <circle cx="12" cy="5" r="2.5" />
            <line x1="12" y1="8" x2="12" y2="9.5" />
            <line x1="7" y1="17.5" x2="10" y2="14.5" />
            <line x1="17" y1="17.5" x2="14" y2="14.5" />
        </svg>
    );
}

function DocumentIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
    );
}

function CollaborationIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function WorkflowIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="18" cy="6" r="2.5" />
            <circle cx="6" cy="18" r="2.5" />
            <circle cx="18" cy="18" r="2.5" />
            <path d="M6 8.5v7" />
            <path d="M8.5 6h7" />
            <path d="M8.5 18h7" />
            <path d="M8 8l8 8" />
        </svg>
    );
}

function SecureIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 11 11 13 15 9" />
        </svg>
    );
}

function AnywhereIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="10" height="20" rx="2" />
            <path d="M13 16.5a2.5 2.5 0 0 1 4.8-1 1.5 1.5 0 0 1 .7 2.8 2 2 0 0 1-1.5 1.7h-4" />
        </svg>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const topStrip = [
    { icon: CentralizedIcon, line1: 'Centralized', line2: 'Intranet Portal' },
    { icon: DocumentIcon, line1: 'Smart Document', line2: 'Management' },
    { icon: CollaborationIcon, line1: 'Seamless', line2: 'Collaboration' },
    { icon: WorkflowIcon, line1: 'Workflow', line2: 'Automation' },
    { icon: SecureIcon, line1: 'Secure &', line2: 'Compliant' },
    { icon: AnywhereIcon, line1: 'Anywhere', line2: 'Access' },
];

const heroFeatures = [
    { icon: Globe, title: 'Modern Intranet Experience', desc: 'Beautiful, responsive intranet portals that keep your teams informed, engaged, and productive.' },
    { icon: Users, title: 'Employee Collaboration', desc: 'Connect teams, share ideas, and co-create using SharePoint, Teams, and Microsoft 365.' },
    { icon: FileText, title: 'Knowledge Management', desc: 'Organize, manage, and discover information easily with intelligent search and taxonomies.' },
    { icon: Shield, title: 'Secure & Compliant', desc: 'Enterprise-grade security, permissions, and compliance to protect your critical business data.' },
];

const navItems = ['Home', 'News', 'Documents', 'Sites', 'People', 'Departments', 'Projects', 'Tasks', 'Workflows', 'Policies'];

const quickLinks = [
    { label: 'Employee Directory', color: '#8b5cf6' },
    { label: 'Leave Request', color: '#3b82f6' },
    { label: 'IT Helpdesk', color: '#06b6d4' },
    { label: 'Expense Portal', color: '#f59e0b' },
    { label: 'Company Policies', color: '#10b981' },
    { label: 'Learning Hub', color: '#ec4899' },
];

const activities = [
    'You edited Project Plan.docx',
    'Sarah shared Marketing Strategy.pptx',
    'John commented on Budget Report.xlsx',
    'New employee Emily joined the team',
];

const mySites = ['Marketing Team', 'Product Development', 'Human Resources', 'Finance & Accounts'];
const myTasks = ['Review Project Proposal', 'Approve Budget Report', 'Update Training Material'];
const events = ['Global All Hands', 'Product Launch Webinar', 'Security Awareness Training'];

const documents = [
    { name: 'Policies & Procedures', mod: 'Apr 24', by: 'Alex' },
    { name: 'HR Handbook.pdf', mod: 'Apr 23', by: 'Sarah' },
    { name: 'Project Plan.docx', mod: 'Apr 23', by: 'John' },
    { name: 'Marketing Strategy.pptx', mod: 'Apr 22', by: 'Emily' },
];

const workflowSteps = ['Request Submitted', 'Manager Approval', 'HR Review', 'Request Completed'];

const stats = [
    { icon: Layers, value: '500+', label: 'Intranet Portals Delivered' },
    { icon: FileText, value: '1M+', label: 'Documents Managed' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: CheckCircle, value: '99.9%', label: 'Platform Reliability' },
    { icon: Lock, value: '100%', label: 'Enterprise Grade Security' },
];

const workplace = [
    { label: 'People', icon: Users },
    { label: 'Processes', icon: Workflow },
    { label: 'SharePoint', icon: null, isSp: true },
    { label: 'Information', icon: FileText },
    { label: 'Applications', icon: Layers },
];

// ─── Sub-components ─────────────────────────────────────────────────────────
function SharePointLogoMark({ className = 'w-7 h-7' }) {
    return (
        <svg viewBox="0 0 32 32" className={className}>
            <circle cx="21" cy="12" r="5" fill="#008272" opacity="0.9" />
            <circle cx="23" cy="17" r="5.5" fill="#005b50" />
            <circle cx="18" cy="21" r="5" fill="#107c41" />
            <rect x="6" y="9" width="12" height="12" rx="2.5" fill="#107c41" />
            <text x="12" y="18" fill="white" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">S</text>
        </svg>
    );
}

function PowerAutomateLogo({ className = 'w-6 h-6' }) {
    return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
            <defs>
                <linearGradient id="pa-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0364b8" />
                    <stop offset="100%" stopColor="#0f8ee9" />
                </linearGradient>
                <linearGradient id="pa-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#119bf1" />
                    <stop offset="100%" stopColor="#3fb3f6" />
                </linearGradient>
            </defs>
            <path d="M6 8 L18 16 L6 24 Z" fill="url(#pa-grad-1)" />
            <path d="M14 16 L26 24 L22 16 L26 8 Z" fill="url(#pa-grad-2)" />
            <path d="M18 16 L14 16 L22 21.33 L26 24 Z" fill="#0c7ed9" opacity="0.8" />
        </svg>
    );
}

/** Single glass pill — 6 items in one horizontal row to match Image 2 */
function FeatureStripBar({ className = '' }) {
    return (
        <div
            className={`rounded-full px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 sp-glass-card ${className} overflow-x-auto scrollbar-hide`}
            style={{ ...glass, fontFamily: POPPINS }}
        >
            <div className="flex items-center justify-between min-w-[740px] lg:min-w-0 w-full gap-x-1 lg:gap-x-1.5 xl:gap-x-2">
                {topStrip.map((item, i) => (
                    <React.Fragment key={item.line2 || item.line1}>
                        {i > 0 && (
                            <div className="w-px h-5 bg-violet-300/35 shrink-0 mx-0.5 lg:mx-1 xl:mx-2" aria-hidden />
                        )}
                        <div className="flex items-center gap-1 lg:gap-1.5 xl:gap-2 shrink-0">
                            <item.icon className="w-4.5 h-4.5 lg:w-3.5 lg:h-3.5 xl:w-4.5 xl:h-4.5 text-[#3b2a82] shrink-0" />
                            <div className="leading-tight text-left">
                                <p className="text-[11.5px] lg:text-[9px] xl:text-[11px] 2xl:text-[12px] font-bold text-[#2D1B69] m-0 whitespace-nowrap">{item.line1}</p>
                                <p className="text-[11.5px] lg:text-[9px] xl:text-[11px] 2xl:text-[12px] font-bold text-[#2D1B69] m-0 whitespace-nowrap">{item.line2}</p>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

/** Feature rows rendered as separate glass cards to match screenshot */
function UnifiedFeaturesCard() {
    return (
        <div className="space-y-2 w-full max-w-[290px]">
            {heroFeatures.map((f, i) => (
                <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-2xl py-1.5 px-3.5 sp-glass-card flex gap-3 items-center hover:scale-[1.02] transition-all duration-300"
                    style={{ ...glass, fontFamily: POPPINS }}
                >
                    <div className="w-8.5 h-8.5 flex items-center justify-center shrink-0">
                        <f.icon className="w-7 h-7 text-[#5b2eff] drop-shadow-[0_2px_6px_rgba(91,46,255,0.25)]" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-bold text-[#17128A] leading-tight m-0">{f.title}</p>
                        <p className="text-[9.5px] font-medium text-[#5c4d8a] leading-tight mt-0.5 m-0">{f.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function MicrosoftBadge() {
    return (
        <div className="flex items-center gap-1.5 xl:gap-2 px-2 py-1.5 xl:px-3 xl:py-2 rounded-xl shrink-0" style={{ ...glass, fontFamily: POPPINS }}>
            <svg viewBox="0 0 21 21" className="w-5.5 h-5.5 xl:w-7 xl:h-7 shrink-0">
                <rect x="0" y="0" width="10" height="10" fill="#f25022" />
                <rect x="11" y="0" width="10" height="10" fill="#7fba00" />
                <rect x="0" y="11" width="10" height="10" fill="#00a4ef" />
                <rect x="11" y="11" width="10" height="10" fill="#ffb900" />
            </svg>
            <div className="leading-none">
                <p className="text-[7.5px] xl:text-[9px] font-black text-slate-800">Microsoft Solutions Partner</p>
                <p className="text-[5.5px] xl:text-[7px] text-teal-700 font-bold">SharePoint</p>
            </div>
        </div>
    );
}

function SharePointLogo3D() {
    return (
        <div className="relative w-[110px] h-[130px] flex items-end justify-center sp-fade-in select-none z-10 -mr-4 lg:-mr-6">
            {/* Background Orbits */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="sp-orbit-ring w-24 h-24 rounded-full border border-violet-400/30" />
                <div className="sp-orbit-ring-reverse absolute w-30 h-30 rounded-full border border-purple-300/25" />
                <div className="sp-pulse-ring absolute w-18 h-18 rounded-full border-2 border-violet-500/20" />
            </div>

            {/* 3D SharePoint Logo Floating */}
            <div className="relative z-10 sp-logo-float mb-4 w-18 h-18 flex items-center justify-center">
                {/* 3 overlapping circles behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[80%] w-10 h-10 rounded-full bg-[#008272]/90 shadow-lg blur-[0.2px] border border-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-[5%] -translate-y-[55%] w-12 h-12 rounded-full bg-[#005b50]/95 shadow-xl border border-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-[25%] -translate-y-[25%] w-11 h-11 rounded-full bg-[#107c41]/90 shadow-md border border-white/10" />

                {/* Front green block with 'S' */}
                <div className="absolute top-1/2 left-1/2 -translate-x-[95%] -translate-y-[60%] w-10 h-10 rounded-xl bg-gradient-to-br from-[#107c41] to-[#0b592e] flex items-center justify-center shadow-2xl border border-white/20" style={{ transform: 'perspective(400px) rotateY(-15deg) rotateX(5deg)' }}>
                    <span className="text-white text-2xl font-black select-none tracking-tighter" style={{ fontFamily: 'system-ui' }}>S</span>
                </div>
            </div>

            {/* Pedestal stand */}
            <div className="absolute bottom-0 w-24 h-5 rounded-full bg-gradient-to-b from-white/60 to-white/15 border border-white/40 shadow-[0_10px_20px_rgba(91,46,255,0.15)] flex items-center justify-center">
                <div className="w-18 h-3 rounded-full bg-gradient-to-b from-violet-300/30 to-transparent border border-violet-300/20" />
            </div>
        </div>
    );
}

function DashboardMockup() {
    const navList = [
        { name: 'Home', icon: Home },
        { name: 'News', icon: Newspaper },
        { name: 'Documents', icon: FolderOpen },
        { name: 'Sites', icon: Globe },
        { name: 'People', icon: Users },
        { name: 'Departments', icon: Building2 },
        { name: 'Projects', icon: Briefcase },
        { name: 'Tasks', icon: ListTodo },
        { name: 'Workflows', icon: Workflow },
        { name: 'Policies', icon: BookOpen },
    ];

    const quickLinks = [
        { label: 'Employee Directory', color: '#8b5cf6', icon: Users },
        { label: 'Leave Request', color: '#3b82f6', icon: Calendar },
        { label: 'IT Helpdesk', color: '#06b6d4', icon: Headphones },
        { label: 'Expense Portal', color: '#f59e0b', icon: Wallet },
        { label: 'Company Policies', color: '#10b981', icon: Shield },
        { label: 'Learning Hub', color: '#ec4899', icon: GraduationCap },
    ];

    const activitiesList = [
        { text: 'You edited Project Plan.docx', time: '35 mins ago' },
        { text: 'Sarah shared Marketing Strategy.pptx', time: '1 hour ago' },
        { text: 'John commented on Budget Report.xlsx', time: '2 hours ago' },
        { text: 'Emily joined the team', time: '3 hours ago' },
    ];

    const sitesList = [
        { name: 'Marketing Team', color: '#e879f9' },
        { name: 'Product Development', color: '#60a5fa' },
        { name: 'Human Resources', color: '#fbbf24' },
        { name: 'Finance & Accounts', color: '#34d399' },
    ];

    const tasksList = [
        { name: 'Review Project Proposal', due: 'Due today' },
        { name: 'Approve Budget Report', due: 'Due tomorrow' },
        { name: 'Update Training Material', due: 'Due in 3 days' },
    ];

    const eventsList = [
        { title: 'Global All Hands', time: 'May 24, 2026 | 10:00 AM' },
        { title: 'Product Launch Webinar', time: 'May 26, 2026 | 02:00 PM' },
        { title: 'Security Awareness Training', time: 'May 28, 2026 | 11:30 AM' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sp-dashboard-float w-full max-w-[850px] rounded-2xl overflow-hidden shadow-2xl border border-violet-200/50 relative z-20"
            style={{
                ...glass,
                boxShadow: '0 24px 80px rgba(91, 46, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
            }}
        >
            {/* Top search & title bar */}
            <div className="flex items-center gap-2.5 px-3.5 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                <SharePointLogoMark className="w-4.5 h-4.5 shrink-0" />
                <span className="text-[10.5px] font-black tracking-wide select-none">Contoso Intranet</span>
                <div className="flex-1 mx-4 flex items-center gap-1.5 px-2.5 py-0.75 rounded bg-white/15 border border-white/5">
                    <Search className="w-3 h-3 text-white/80" />
                    <span className="text-[8px] text-white/70 select-none">Search in SharePoint</span>
                </div>
                <Bell className="w-3.5 h-3.5 text-white/90 cursor-pointer" />
                <Settings className="w-3.5 h-3.5 text-white/90 cursor-pointer" />
                <div className="w-5.5 h-5.5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[8px] font-bold select-none cursor-pointer">A</div>
            </div>

            <div className="flex min-h-[400px]">
                {/* Sidebar Navigation */}
                <div className="w-[96px] shrink-0 bg-white/45 border-r border-violet-100/60 p-2 space-y-1 select-none">
                    {navList.map((item, i) => (
                        <div
                            key={item.name}
                            className={`text-[6.5px] px-2 py-0.75 rounded font-bold flex items-center gap-1.5 transition-all cursor-pointer ${i === 0 ? 'bg-violet-600 text-white shadow-sm' : 'text-slate-600 hover:bg-violet-50/50'
                                }`}
                        >
                            <item.icon className="w-2.5 h-2.5 shrink-0" />
                            <span className="truncate">{item.name}</span>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-3.5 bg-slate-50/50 overflow-hidden flex flex-col justify-between">
                    {/* Header welcome banner */}
                    <div className="mb-3">
                        <h2 className="text-[11.5px] font-black text-slate-800 leading-tight m-0">Welcome back, Alex!</h2>
                        <p className="text-[6.5px] text-slate-500 font-medium m-0 mt-0.5">Here&apos;s what&apos;s happening across your organization today.</p>
                    </div>

                    {/* 3-Column Dashboard Content Grid */}
                    <div className="grid grid-cols-[1.15fr_0.7fr_1.15fr] gap-2.5 flex-1">
                        {/* Column 1: News & Sites */}
                        <div className="space-y-2.5 flex flex-col justify-between">
                            {/* Company News Card */}
                            <div className="rounded-lg overflow-hidden border border-violet-100 bg-white shadow-sm flex-1 flex flex-col justify-between p-1.5 min-h-[90px]">
                                <div className="h-12 rounded bg-gradient-to-br from-blue-400 to-indigo-600 flex items-end p-1.5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10" />
                                    <span className="relative z-10 text-[5px] font-black text-white uppercase tracking-wider">Company News</span>
                                </div>
                                <div className="pt-1.5">
                                    <p className="text-[6.5px] font-black text-slate-800 leading-tight m-0 truncate">Driving Innovation. Delivering Impact.</p>
                                    <p className="text-[5px] text-slate-400 font-medium m-0 mt-0.5">CEO Update — Q2 Business Highlights</p>
                                </div>
                                <span className="text-[5px] text-violet-600 font-black mt-1.5 cursor-pointer hover:underline block">Read more →</span>
                            </div>

                            {/* My Sites Card */}
                            <div className="rounded-lg border border-violet-100 bg-white shadow-sm p-2 select-none">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[7.5px] font-black text-slate-800">My Sites</span>
                                    <span className="text-[5px] text-violet-600 font-black cursor-pointer">View all</span>
                                </div>
                                <div className="space-y-0.5">
                                    {sitesList.map((site) => (
                                        <div key={site.name} className="flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: site.color }} />
                                            <span className="text-[6px] font-bold text-slate-600 truncate">{site.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Tasks & Events */}
                        <div className="space-y-2.5 flex flex-col justify-between">
                            {/* My Tasks Card */}
                            <div className="rounded-lg border border-violet-100 bg-white shadow-sm p-2 select-none">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[7.5px] font-black text-slate-800">My Tasks</span>
                                    <span className="text-[5px] text-violet-600 font-black cursor-pointer">View all</span>
                                </div>
                                <div className="space-y-1">
                                    {tasksList.map((task) => (
                                        <div key={task.name} className="flex items-start gap-1">
                                            <div className="w-2.5 h-2.5 rounded border border-slate-300 mt-0.5 shrink-0 flex items-center justify-center" />
                                            <div className="leading-none">
                                                <p className="text-[6px] font-bold text-slate-700 m-0 truncate max-w-[125px]">{task.name}</p>
                                                <span className="text-[4.5px] text-red-500 font-semibold">{task.due}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Upcoming Events Card */}
                            <div className="rounded-lg border border-violet-100 bg-white shadow-sm p-2 select-none flex-1 flex flex-col justify-between">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[7.5px] font-black text-slate-800">Upcoming Events</span>
                                    <span className="text-[5px] text-violet-600 font-black cursor-pointer">View calendar</span>
                                </div>
                                <div className="space-y-1">
                                    {eventsList.map((event) => (
                                        <div key={event.title} className="leading-none border-b border-slate-50 pb-1 last:border-0 last:pb-0">
                                            <p className="text-[6px] font-bold text-slate-700 m-0 truncate">{event.title}</p>
                                            <span className="text-[4.5px] text-slate-400 font-medium">{event.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Quick Links & Activity Feed */}
                        <div className="space-y-2.5 flex flex-col justify-between">
                            {/* Quick Links Card */}
                            <div className="rounded-lg border border-violet-100 bg-white shadow-sm p-2 select-none">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[7.5px] font-black text-slate-800">Quick Links</span>
                                </div>
                                <div className="grid grid-cols-2 gap-1">
                                    {quickLinks.map((q) => (
                                        <div key={q.label} className="text-[4.5px] font-bold text-slate-600 p-1 rounded bg-slate-50 border border-slate-100 flex flex-col items-center justify-center hover:bg-slate-100 transition-colors">
                                            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center mb-0.5" style={{ background: `${q.color}15`, color: q.color }}>
                                                <q.icon className="w-1.8 h-1.8" />
                                            </div>
                                            <span className="leading-none truncate max-w-full text-center">{q.label.split(' ')[0]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Activity Feed Card */}
                            <div className="rounded-lg border border-violet-100 bg-white shadow-sm p-2 flex-1 flex flex-col justify-between select-none">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[7.5px] font-black text-slate-800">Activity Feed</span>
                                    <span className="text-[5px] text-violet-600 font-black cursor-pointer">View all</span>
                                </div>
                                <div className="space-y-1">
                                    {activitiesList.map((a, i) => (
                                        <div key={i} className="leading-none border-b border-slate-50 pb-1 last:border-0 last:pb-0">
                                            <p className="text-[6px] font-bold text-slate-700 m-0 truncate">{a.text}</p>
                                            <span className="text-[4.5px] text-slate-400 font-medium">{a.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


function StatCard({ icon: Icon, value, label }) {
    const display = useCountUp(value);
    return (
        <div className="flex-1 flex flex-col items-center text-center px-0.5">
            <div className="flex items-center gap-1 xl:gap-1.5 justify-center">
                <Icon className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-violet-600 shrink-0" />
                <span className="text-[11px] xl:text-[13px] font-black text-violet-900 leading-none">{display}</span>
            </div>
            <span className="text-[6.5px] xl:text-[7.5px] text-slate-500 font-bold mt-1 leading-tight">{label}</span>
        </div>
    );
}

function StatsBar() {
    return (
        <div
            className="w-full rounded-2xl p-2.5 lg:p-3 xl:p-3.5 sp-glass-card flex items-center justify-between mt-4 overflow-x-auto scrollbar-hide animate-pulse-slow"
            style={glass}
        >
            <div className="flex items-center justify-between min-w-[580px] lg:min-w-0 w-full gap-x-1 lg:gap-x-1.5 xl:gap-x-2">
                {stats.map((s, i) => (
                    <React.Fragment key={i}>
                        {i > 0 && (
                            <div className="w-px h-6 lg:h-7 xl:h-8 bg-violet-300/35 shrink-0" aria-hidden />
                        )}
                        <StatCard icon={s.icon} value={s.value} label={s.label} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}



// ─── Main page ───────────────────────────────────────────────────────────────
export default function Sharepointservice() {
    return (
        <section
            id="sharepoint-intranet"
            className="relative w-full overflow-hidden"
            style={{
                background: 'linear-gradient(165deg, #F7F3FF 0%, #EEE7FF 35%, #FFFFFF 70%, #F5F0FF 100%)',
                fontFamily: POPPINS,
            }}
        >
            <style>{`
                @keyframes spFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes spFadeSlide { from { opacity: 0; transform: translateX(-16px); } to { opacity: 1; transform: translateX(0); } }
                @keyframes spFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                @keyframes spLogoFloat { 0%, 100% { transform: translateY(0) rotateY(0deg); } 50% { transform: translateY(-6px) rotateY(8deg); } }
                @keyframes spOrbit { to { transform: rotate(360deg); } }
                @keyframes spOrbitRev { to { transform: rotate(-360deg); } }
                @keyframes spPulseRing { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(1.4); opacity: 0; } }
                @keyframes spGlowPulse {
                    0%, 100% { box-shadow: 0 20px 60px rgba(91,46,255,0.12), inset 0 1px 0 rgba(255,255,255,0.9); }
                    50% { box-shadow: 0 24px 70px rgba(91,46,255,0.2), inset 0 1px 0 rgba(255,255,255,0.95); }
                }
                @keyframes spParticle { from { transform: translateY(20px); opacity: 0; } 50% { opacity: 0.5; } to { transform: translateY(-100vh); opacity: 0; } }
                @keyframes spFlowArrow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; transform: translateX(3px); } }
                .sp-fade-in { animation: spFadeIn 0.7s ease-out both; }
                .sp-fade-slide { animation: spFadeSlide 0.7s ease-out both; }
                .sp-dashboard-float { animation: spFloat 5s ease-in-out infinite; }
                .sp-logo-float { animation: spLogoFloat 4s ease-in-out infinite; }
                .sp-orbit-ring { animation: spOrbit 22s linear infinite; }
                .sp-orbit-ring-reverse { animation: spOrbitRev 35s linear infinite; }
                .sp-pulse-ring { animation: spPulseRing 3s ease-out infinite; }
                .sp-glass-card { animation: spGlowPulse 4s ease-in-out infinite; }
                .sp-device-float { animation: spFloat 4.5s ease-in-out infinite; }
                .sp-device-float-delay { animation: spFloat 4.5s ease-in-out 0.8s infinite; }
                .sp-particle { animation: spParticle linear infinite; }
                .sp-flow-arrow { animation: spFlowArrow 1.5s ease-in-out infinite; }
            `}</style>

            {/* Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-violet-300/50 sp-particle"
                        style={{ left: `${(i * 19) % 100}%`, animationDuration: `${14 + i * 2}s`, animationDelay: `${i}s` }}
                    />
                ))}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-300/20 rounded-full blur-[100px]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
                    <defs>
                        <pattern id="sp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5B2EFF" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#sp-grid)" />
                </svg>
            </div>

            <div className="relative z-10 px-4 lg:px-8 py-5 max-w-[1600px] mx-auto">
                {/* Top bar */}
                <div className="flex flex-wrap items-center justify-start gap-4 lg:gap-4 xl:gap-8 mb-4 sp-fade-slide">
                    <div className="flex items-center gap-2 lg:gap-2.5">
                        <img src="/logo.png" alt="DesireInfoWeb" className="w-9 h-9 xl:w-11 xl:h-11 object-contain" />
                        <div>
                            <p className="text-[13px] xl:text-[15px] font-black text-[#17128A] leading-tight">DesireInfoWeb</p>
                            <p className="text-[7.5px] xl:text-[8px] text-slate-500 leading-none">
                                Your Extended <span className="text-[#D83CBF] font-bold">Technology Partner</span>
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:block flex-1 max-w-[840px]">
                        <FeatureStripBar />
                    </div>
                    <div className="ml-auto">
                        <MicrosoftBadge />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 items-start">
                    {/* Left column */}
                    <div className="col-span-12 lg:col-span-3 space-y-4">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                            <h1 className="text-2xl xl:text-[2.4rem] font-black leading-[1.05] text-[#17128A]">
                                SharePoint
                                <br />
                                <span className="bg-gradient-to-r from-[#5B2EFF] via-violet-500 to-[#D83CBF] bg-clip-text text-transparent whitespace-nowrap">
                                    Intranet Solutions
                                </span>
                            </h1>
                            <p className="text-[14px] font-bold text-[#17128A] mt-2">Connect. Collaborate. Achieve.</p>
                            <p className="text-[12px] text-[#5c4d8a] leading-relaxed mt-2 max-w-[300px] font-normal">
                                Transform the way your organization collaborates, manages information, and automates processes with intelligent SharePoint Intranet Solutions.
                            </p>
                        </motion.div>
                        <UnifiedFeaturesCard />
                    </div>

                    {/* Center */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col items-center">
                        <div className="flex items-end justify-center gap-2 w-full">
                            <SharePointLogo3D />
                            <DashboardMockup />
                        </div>
                        {/* Connected workplace */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-4 w-full max-w-lg rounded-full px-6 py-2.5 sp-glass-card"
                            style={{
                                ...glass,
                                boxShadow: '0 12px 36px rgba(91, 46, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
                            }}
                        >
                            <p className="text-[8.5px] font-black text-violet-800 text-center mb-2">One Connected Digital Workplace</p>
                            <div className="flex items-center justify-between gap-1 select-none">
                                {workplace.map((w, i) => (
                                    <div key={w.label} className="flex items-center flex-1">
                                        <div className="flex flex-col items-center flex-1">
                                            <div
                                                className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm border transition-transform hover:scale-105 ${w.isSp
                                                    ? 'bg-teal-50 border-teal-200 shadow-teal-100'
                                                    : 'bg-violet-50 border-violet-200 shadow-violet-100'
                                                    }`}
                                            >
                                                {w.isSp ? <SharePointLogoMark className="w-5 h-5" /> : <w.icon className="w-4 h-4 text-violet-600" />}
                                            </div>
                                            <span className="text-[6.5px] font-bold text-slate-600 mt-1 text-center truncate w-full">{w.label}</span>
                                        </div>
                                        {i < workplace.length - 1 && (
                                            <div className="flex-1 h-0.5 bg-gradient-to-r from-violet-300/40 to-indigo-300/40 relative mx-1 shrink-0">
                                                <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        {/* Stats Bar */}
                        <StatsBar />
                    </div>

                    {/* Right column */}
                    <div className="col-span-12 lg:col-span-3 space-y-3">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -3 }}
                            className="sp-glass-card rounded-2xl p-3.5 shadow-lg max-w-[290px] relative lg:ml-auto"
                            style={glass}
                        >
                            <h3 className="text-[13px] font-black text-[#17128A] mb-2.5">Document Management</h3>
                            <div className="space-y-1 mb-2.5 select-none">
                                {[
                                    { text: 'Centralized Document Libraries', icon: FolderOpen },
                                    { text: 'Version Control & Check-in/Check-out', icon: History },
                                    { text: 'Metadata & Advanced Search', icon: Tags },
                                    { text: 'Retention Policies & Compliance', icon: Shield },
                                ].map((b) => (
                                    <div key={b.text} className="flex items-center gap-2 text-[9px] font-bold text-slate-700">
                                        <b.icon className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                                        <span className="leading-tight">{b.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-xl border border-violet-100 bg-white/90 p-2 relative shadow-inner">
                                <div className="flex items-center justify-between mb-1.5 select-none">
                                    <span className="text-[8.5px] font-black text-slate-800">Documents</span>
                                    <div className="flex gap-1">
                                        {[
                                            { label: 'New', icon: Plus, primary: true },
                                            { label: 'Upload', icon: Upload },
                                            { label: 'Sync', icon: RefreshCw },
                                            { label: 'Share', icon: Share2 },
                                        ].map((btn) => (
                                            <button
                                                key={btn.label}
                                                type="button"
                                                className={`text-[5.5px] px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5 transition-colors shadow-sm ${btn.primary
                                                    ? 'bg-violet-600 text-white hover:bg-violet-700'
                                                    : 'bg-violet-50 text-violet-700 border border-violet-100 hover:bg-violet-100'
                                                    }`}
                                            >
                                                <btn.icon className="w-2.5 h-2.5" />{btn.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-[2fr_1.1fr_0.9fr] text-[5.5px] font-black text-slate-400 border-b border-slate-100 pb-0.5 mb-1 select-none">
                                    <span>Name</span><span>Modified</span><span>Modified By</span>
                                </div>
                                {documents.map((d) => (
                                    <div key={d.name} className="grid grid-cols-[2fr_1.1fr_0.9fr] text-[5.5px] text-slate-600 py-0.5 border-b border-slate-50 last:border-0 select-none">
                                        <span className="truncate text-violet-700 font-bold">{d.name}</span>
                                        <span>{d.mod}</span>
                                        <span>{d.by}</span>
                                    </div>
                                ))}
                                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100 select-none">
                                    <SharePointLogoMark className="w-6 h-6" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -3 }}
                            className="sp-glass-card rounded-2xl p-3.5 relative shadow-lg max-w-[290px] lg:ml-auto"
                            style={glass}
                        >
                            <h3 className="text-[13px] font-black text-[#17128A] mb-2.5">Workflow Automation</h3>
                            <div className="space-y-1 mb-2.5 select-none">
                                {[
                                    { text: 'Approval Workflows', icon: CheckCircle },
                                    { text: 'Business Process Automation', icon: Zap },
                                    { text: 'Task Management', icon: ListTodo },
                                    { text: 'Integration with Power Automate', icon: Workflow },
                                ].map((b) => (
                                    <div key={b.text} className="flex items-center gap-2 text-[9px] font-bold text-slate-700">
                                        <b.icon className="w-3.5 h-3.5 text-[#5b2eff] shrink-0" />
                                        <span className="leading-tight">{b.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-between gap-0.5 py-2.5 select-none overflow-x-auto scrollbar-hide">
                                {[
                                    { label: 'Request Submitted', icon: FileText },
                                    { label: 'Manager Approval', icon: UserCheck },
                                    { label: 'HR Review', icon: Users },
                                    { label: 'Request Completed', icon: ShieldCheck },
                                ].map((step, i) => (
                                    <React.Fragment key={step.label}>
                                        {i > 0 && (
                                            <ChevronRight className="w-3 h-3 text-violet-400 sp-flow-arrow shrink-0" />
                                        )}
                                        <div className="flex flex-col items-center shrink-0">
                                            <div className="w-7 h-7 rounded-lg bg-white border border-violet-100 flex items-center justify-center shadow-sm">
                                                <step.icon className="w-3.5 h-3.5 text-violet-600" />
                                            </div>
                                            <span className="text-[5.5px] font-bold text-slate-600 leading-tight block mt-1 text-center max-w-[45px]">{step.label}</span>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="flex justify-center mt-1">
                                <div className="rounded-full px-4 py-1 border border-violet-100 bg-white/80 shadow-sm">
                                    <p className="text-[8px] font-black text-center bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent select-none m-0">
                                        Automate. Simplify. Accelerate.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -right-3 -bottom-1 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100 select-none animate-pulse-slow">
                                <PowerAutomateLogo className="w-5.5 h-5.5" />
                            </div>
                        </motion.div>                    </div>
                </div>

                {/* Mobile feature strip */}
                <div className="lg:hidden mt-4">
                    <FeatureStripBar />
                </div>
            </div>
        </section>
    );
}
