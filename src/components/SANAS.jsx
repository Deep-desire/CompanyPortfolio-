import { motion } from 'framer-motion';
import {
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  FileText,
  LockKeyhole,
  Monitor,
  Search,
  Settings,
  ShieldCheck,
  UsersRound,
  Workflow,
} from 'lucide-react';

const headerPills = [
  { icon: Workflow, title: 'End-to-End', label: 'Accreditation Lifecycle' },
  { icon: ClipboardCheck, title: 'Workflow Driven', label: 'Approvals' },
  { icon: UsersRound, title: 'Role-Based', label: 'Access Control' },
  { icon: Monitor, title: 'Real-time Dashboards', label: '& Reporting' },
  { icon: ShieldCheck, title: 'Audit Ready', label: '& Compliant' },
  { icon: LockKeyhole, title: 'Secure, Scalable', label: '& Reliable' },
];

const heroStats = [
  { icon: UsersRound, value: '100+', label: 'Accredited\nEntities' },
  { icon: UsersRound, value: '500+', label: 'Active Users' },
  { icon: FileText, value: '10K+', label: 'Documents\nManaged' },
  { icon: ClipboardList, value: '30+', label: 'Workflows\nAutomated' },
];

const kpis = [
  ['Total Applications', '128', '+12% vs last month', BriefcaseBusiness, 'purple'],
  ['Active Assessments', '45', '+8% vs last month', ClipboardCheck, 'orange'],
  ['Approvals Pending', '23', '-5% vs last month', UsersRound, 'pink'],
  ['Accredited Entities', '342', '+15% vs last month', CheckCircle2, 'green'],
  ['Documents Uploaded', '1,245', '+18% vs last month', FileText, 'blue'],
];

const menuItems = ['Dashboard', 'Schedule of Accreditation (SOA)', 'Accreditation Search', 'Assessment Process', 'Tender Management', 'Entities', 'Reports', 'Documents', 'Tasks', 'Administration'];

const modules = [
  {
    no: '01',
    title: 'Schedule of Accreditation (SOA)',
    desc: 'Manages technical scope, standards, and methods with a structured 5-stage approval workflow.',
    steps: ['Draft', 'Assessment', 'Manager', 'CEO', 'Administrator'],
    bullets: ['Technical scope & standards management', '5-stage approval workflow', 'Application locked after completion', 'Full audit trail & version history'],
    type: 'soa',
  },
  {
    no: '02',
    title: 'Accreditation Search',
    desc: 'Advanced search and filtering for accredited entities using multiple parameters.',
    type: 'search',
  },
  {
    no: '03',
    title: 'Assessment Process',
    desc: 'End-to-end lifecycle management with SLA tracking, document management, and task assignments.',
    steps: ['Update Plan', 'Assign Team', 'Schedule', 'Assessment', 'Approval', 'Closure'],
    bullets: ['Complete assessment lifecycle', 'SLA tracking & notifications', 'Document management', 'Task assignment & collaboration'],
    type: 'assessment',
  },
  {
    no: '04',
    title: 'Tender Management',
    desc: 'Centralized procurement lifecycle from tender creation to award and closure.',
    steps: ['Create Tender', 'Publish', 'Evaluation', 'Award', 'Closure'],
    bullets: ['Tender creation & publication', 'Evaluation & comparison', 'Award management', 'Real-time dashboard & reporting'],
    type: 'tender',
  },
];

function GlassCard({ className = '', children }) {
  return <div className={`sn-glass ${className}`}>{children}</div>;
}

function MicrosoftMark() {
  return (
    <span className="sn-ms-mark" aria-hidden="true">
      <i style={{ background: '#f35325' }} /><i style={{ background: '#81bc06' }} />
      <i style={{ background: '#05a6f0' }} /><i style={{ background: '#ffba08' }} />
    </span>
  );
}

function M365Mark() {
  return <span className="sn-m365-mark" aria-hidden="true"><i /></span>;
}

function SanasLogo() {
  return (
    <span className="sn-sanas-logo" aria-label="SANAS logo placeholder">
      <b>sanas</b>
      <small>South African National<br />Accreditation System</small>
    </span>
  );
}

function HeaderPill({ icon: Icon, title, label }) {
  return (
    <span className="sn-pill">
      <Icon size={24} aria-hidden="true" />
      <b>{title}</b>
      <small>{label}</small>
    </span>
  );
}

function PartnerBadge({ type }) {
  return (
    <GlassCard className="sn-partner">
      {type === 'microsoft' ? <MicrosoftMark /> : <M365Mark />}
      <span>{type === 'microsoft' ? 'Microsoft' : 'Built on'}<br />{type === 'microsoft' ? 'Solutions Partner' : 'Microsoft 365'}</span>
    </GlassCard>
  );
}

function Header() {
  return (
    <motion.header className="sn-header" initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
      <div className="sn-brand">
        <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
        <span><strong>DesireInfoWeb</strong><small>Your Extended <b>Technology Partner</b></small></span>
      </div>
      <GlassCard className="sn-pillbar">{headerPills.map((item) => <HeaderPill key={item.title} {...item} />)}</GlassCard>
      <div className="sn-partners"><PartnerBadge type="microsoft" /><PartnerBadge type="m365" /></div>
    </motion.header>
  );
}

function CaseStudyHero() {
  return (
    <motion.aside className="sn-hero" initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <p className="sn-label">CASE STUDY</p>
      <h1>SANAS Accreditation<br /><span>Management System</span></h1>
      <div className="sn-client">
        <div><b>Client:</b><strong>South African National<br />Accreditation System (SANAS)</strong></div>
        <SanasLogo />
      </div>
      <div className="sn-platform">
        <b>Platform:</b>
        <strong>Microsoft Power Platform & SharePoint</strong>
        <span><i className="power" /><i className="sharepoint" /></span>
      </div>
      <p className="sn-desc">A comprehensive, workflow-integrated system designed to manage the complete accreditation lifecycle ensuring compliance, traceability, and full transparency across all stakeholder touchpoints.</p>
      <div className="sn-hero-stats">
        {heroStats.map(({ icon: Icon, value, label }) => (
          <GlassCard className="sn-hero-stat" key={value}>
            <Icon size={28} aria-hidden="true" />
            <strong>{value}</strong>
            <small>{label.split('\n').map((line) => <span key={line}>{line}</span>)}</small>
          </GlassCard>
        ))}
      </div>
    </motion.aside>
  );
}

function DashboardSidebar() {
  return (
    <aside className="sn-dash-side">
      <SanasLogo />
      <nav>
        {menuItems.map((item, index) => (
          <span className={index === 0 ? 'active' : ''} key={item}>
            <ClipboardList size={15} aria-hidden="true" />{item}
          </span>
        ))}
      </nav>
    </aside>
  );
}

function DashboardKpiCard({ item }) {
  const [label, value, trend, Icon, tone] = item;
  return (
    <GlassCard className={`sn-kpi ${tone}`}>
      <span><Icon size={22} aria-hidden="true" /></span>
      <small>{label}</small>
      <strong>{value}</strong>
      <em>{trend}</em>
    </GlassCard>
  );
}

function DonutChart() {
  return (
    <GlassCard className="sn-widget sn-status">
      <h3>Applications by Status</h3>
      <div className="sn-donut"><b>128</b><small>Total</small></div>
      <ul>
        {['Draft 18 (14%)', 'Assessment 45 (36%)', 'Manager Review 15 (12%)', 'CEO Review 20 (16%)', 'Administrator 30 (23%)'].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </GlassCard>
  );
}

function WorkflowOverview() {
  const steps = [
    ['Draft', 18, FileText],
    ['Assessment', 45, ClipboardCheck],
    ['Manager', 15, UsersRound],
    ['CEO', 20, UsersRound],
    ['Administrator', 30, CheckCircle2],
  ];
  return (
    <GlassCard className="sn-widget sn-workflow">
      <h3>Workflow Overview</h3>
      <div>
        {steps.map(([label, count, Icon], index) => (
          <span key={label}>
            <i><Icon size={18} /></i>
            {index < steps.length - 1 && <em><ChevronRight size={17} /></em>}
            <b>{label}</b>
            <strong>{count}</strong>
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

function SLACompliance() {
  return (
    <GlassCard className="sn-widget sn-sla">
      <h3>SLA Compliance</h3>
      <div className="sn-ring"><b>92%</b><small>On Track</small></div>
      <ul><li>On Track 92%</li><li>At Risk 6%</li><li>Overdue 2%</li></ul>
    </GlassCard>
  );
}

function TimelineChart() {
  return (
    <GlassCard className="sn-widget sn-line">
      <h3>Assessments Timeline</h3>
      <div className="sn-chart">
        <i /><i /><i />
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => <small key={month}>{month}</small>)}
      </div>
      <p><span>Completed</span><span>In Progress</span><span>Planned</span></p>
    </GlassCard>
  );
}

function RecentActivities() {
  const items = ['New application submitted by ABC Testing (Pty) Ltd', 'Assessment scheduled for XYZ Laboratory', 'Document uploaded: Audit Report - ISO 17025', 'Application approved by Approval Committee'];
  return (
    <GlassCard className="sn-widget sn-activities">
      <h3>Recent Activities</h3>
      {items.map((item, index) => <p key={item}><CheckCircle2 size={15} /> <span>{item}<small>{index + 1} hour ago</small></span></p>)}
      <a>View all activities <ChevronRight size={13} /></a>
    </GlassCard>
  );
}

function DashboardMockup() {
  return (
    <motion.section className="sn-dashboard" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <DashboardSidebar />
      <main className="sn-dash-main">
        <header className="sn-dash-head">
          <div><h2>Welcome back, Admin</h2><p>Here's what's happening with your accreditation system today.</p></div>
          <label><Search size={16} /><input aria-label="Search across the system" placeholder="Search across the system..." /></label>
          <Bell size={18} /><Settings size={18} />
          <span className="sn-admin"><i />Admin User<small>System Administrator</small></span>
        </header>
        <div className="sn-kpi-grid">{kpis.map((item) => <DashboardKpiCard key={item[0]} item={item} />)}</div>
        <div className="sn-widget-grid">
          <DonutChart />
          <WorkflowOverview />
          <SLACompliance />
          <TimelineChart />
          <RecentActivities />
        </div>
      </main>
    </motion.section>
  );
}

function WorkflowSteps({ steps }) {
  return (
    <div className="sn-steps">
      {steps.map((step) => <span key={step}><FileText size={18} /><small>{step}</small></span>)}
    </div>
  );
}

function ModuleMock({ type }) {
  if (type === 'search') {
    return (
      <div className="sn-module-ui search">
        <label>Search accredited entities...</label>
        <div><i /><i /><i /><i /></div>
        <table><tbody><tr><td>ABC Testing</td><td>Testing</td><td>Accredited</td></tr><tr><td>XYZ Laboratory</td><td>Calibration</td><td>Accredited</td></tr><tr><td>Quality Labs</td><td>Inspection</td><td>Conditional</td></tr></tbody></table>
      </div>
    );
  }
  if (type === 'tender') {
    return <div className="sn-mini-analytics"><b>Active Tenders</b><strong>18</strong><span><i /><i /><i /><i /><i /></span></div>;
  }
  if (type === 'assessment') {
    return <div className="sn-mini-sla"><b>SLA Status</b><p>On Track <strong>92%</strong></p><p>At Risk <strong>6%</strong></p><p>Overdue <strong>2%</strong></p></div>;
  }
  return <div className="sn-soa-details"><b>SOA Details</b><p>Status <strong>Manager Review</strong></p><p>Standard <strong>ISO/IEC 17025:2017</strong></p><p>Last Updated <strong>21 May 2024</strong></p></div>;
}

function ModuleCard({ module }) {
  return (
    <GlassCard className={`sn-module ${module.type}`}>
      <span className="sn-module-no">{module.no}</span>
      <h3>{module.title}</h3>
      <p>{module.desc}</p>
      {module.steps && <WorkflowSteps steps={module.steps} />}
      <div className="sn-module-body">
        {module.bullets && <ul>{module.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        <ModuleMock type={module.type} />
      </div>
    </GlassCard>
  );
}

function ModulesDelivered() {
  return (
    <section className="sn-modules">
      <h2>KEY MODULES DELIVERED</h2>
      <div>{modules.map((module) => <ModuleCard key={module.title} module={module} />)}</div>
    </section>
  );
}

export default function SANAS() {
  return (
    <section className="sn-page" id="sanas-case-study">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .sn-page,.sn-page *{box-sizing:border-box}.sn-page{--ink:#111066;--blue:#1b22c8;--purple:#6d28d9;--violet:#7c3aed;--pink:#ec4899;--green:#10b981;--orange:#f59e0b;min-height:100vh;position:relative;isolation:isolate;overflow:hidden;padding:22px clamp(14px,1.5vw,32px) 18px;color:var(--ink);font-family:"Inter","Plus Jakarta Sans","Manrope",system-ui,sans-serif;background:radial-gradient(circle at 18% 42%,rgba(124,58,237,.15),transparent 29%),radial-gradient(circle at 73% 13%,rgba(236,72,153,.12),transparent 26%),linear-gradient(135deg,#fbfaff 0%,#f7f2ff 52%,#fff7fd 100%)}.sn-page:before{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(109,40,217,.035) 1px,transparent 1px),linear-gradient(0deg,rgba(109,40,217,.03) 1px,transparent 1px);background-size:76px 76px}.sn-shell{width:min(100%,1840px);margin:0 auto}.sn-glass{background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.52));border:1px solid rgba(255,255,255,.76);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 62px rgba(109,40,217,.14),0 0 0 1px rgba(130,94,255,.1);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
        .sn-header{display:grid;grid-template-columns:300px minmax(700px,1fr) 360px;gap:16px;align-items:center;margin-bottom:18px}.sn-brand{display:flex;align-items:center;gap:11px}.sn-brand img{width:62px;height:62px;object-fit:contain}.sn-brand strong{display:block;font-size:29px;line-height:.96;font-weight:900}.sn-brand small{font-size:11px;font-weight:900;color:#1b22c8}.sn-brand small b{color:#ec4899}.sn-pillbar{min-height:62px;display:grid;grid-template-columns:repeat(6,1fr);overflow:hidden;border-radius:18px}.sn-pill{display:grid;grid-template-columns:28px 1fr;grid-template-rows:auto auto;column-gap:8px;align-items:center;padding:0 12px;border-left:1px solid rgba(109,40,217,.14)}.sn-pill:first-child{border-left:0}.sn-pill svg{grid-row:1/3;color:#6d28d9}.sn-pill b{font-size:9px;line-height:1.1;font-weight:900}.sn-pill small{font-size:6.8px;line-height:1.1;font-weight:850}.sn-partners{display:grid;grid-template-columns:1fr 1fr;gap:12px}.sn-partner{min-height:62px;display:flex;align-items:center;justify-content:center;gap:10px;border-radius:18px}.sn-partner span:last-child{font-size:10.5px;line-height:1.08;font-weight:900}.sn-ms-mark{width:28px;height:28px;display:grid;grid-template-columns:1fr 1fr;gap:3px}.sn-m365-mark{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(from 35deg,#1b22c8,#7c3aed,#38bdf8,#1b22c8)}.sn-m365-mark i{width:21px;height:21px;border-radius:9px;background:rgba(255,255,255,.72);transform:rotate(45deg)}
        .sn-top{display:grid;grid-template-columns:minmax(390px,.3fr) minmax(900px,.7fr);gap:20px;align-items:start}.sn-label{margin:18px 0 10px;color:#ec4899;font-size:18px;font-weight:900;letter-spacing:.13em}.sn-hero h1{margin:0 0 32px;font-size:clamp(40px,3.35vw,66px);line-height:.98;font-weight:900;letter-spacing:-.025em}.sn-hero h1 span{background:linear-gradient(100deg,#1b22c8,#7c3aed 45%,#ec4899 90%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.sn-client{display:grid;grid-template-columns:1fr 130px;align-items:center;gap:14px;margin-bottom:26px}.sn-client b,.sn-platform b{display:block;color:#ec4899;font-size:11px}.sn-client strong,.sn-platform strong{display:block;font-size:16px;line-height:1.18;font-weight:900}.sn-sanas-logo{display:inline-grid;line-height:1;color:#111066}.sn-sanas-logo b{font-size:32px;color:#d71920;font-weight:500}.sn-sanas-logo small{font-size:6.5px;font-weight:800}.sn-platform{margin-bottom:32px}.sn-platform span{display:flex;gap:12px;margin-top:8px}.sn-platform i{width:42px;height:42px;border-radius:12px;display:block}.sn-platform .power{background:linear-gradient(135deg,#0f9f7a,#20c997);clip-path:polygon(0 0,70% 0,100% 50%,70% 100%,0 100%,30% 50%)}.sn-platform .sharepoint{background:radial-gradient(circle at 35% 45%,#fff 0 12%,#008272 13% 100%)}.sn-desc{margin:0 0 28px;max-width:430px;font-size:13px;line-height:1.55;font-weight:780}.sn-hero-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.sn-hero-stat{min-height:134px;display:grid;place-items:center;text-align:center;border-radius:18px;padding:14px;color:#6d28d9}.sn-hero-stat strong{font-size:26px;line-height:1;font-weight:900;color:#1b22c8}.sn-hero-stat small{font-size:9px;line-height:1.2;font-weight:850;color:#111066}.sn-hero-stat small span{display:block}
        .sn-dashboard{min-height:540px;display:grid;grid-template-columns:168px 1fr;border-radius:26px;padding:12px;background:linear-gradient(180deg,rgba(255,255,255,.72),rgba(255,255,255,.5));border:1px solid rgba(255,255,255,.76);box-shadow:0 24px 70px rgba(109,40,217,.16);backdrop-filter:blur(24px)}.sn-dash-side{border-radius:20px;padding:16px 10px;background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(237,233,254,.62))}.sn-dash-side .sn-sanas-logo{margin:0 0 15px 12px}.sn-dash-side nav{display:grid;gap:4px}.sn-dash-side nav span{display:grid;grid-template-columns:18px 1fr;gap:8px;align-items:center;min-height:34px;padding:8px 10px;border-radius:9px;font-size:8px;font-weight:900}.sn-dash-side nav span.active{color:white;background:linear-gradient(90deg,#5127e8,#7c3aed);box-shadow:0 12px 22px rgba(109,40,217,.25)}.sn-dash-main{padding:16px}.sn-dash-head{display:grid;grid-template-columns:1fr 250px 22px 22px 124px;gap:12px;align-items:center;margin-bottom:14px}.sn-dash-head h2{margin:0;font-size:15px;font-weight:900}.sn-dash-head p{margin:3px 0 0;font-size:8.2px;font-weight:800}.sn-dash-head label{height:34px;display:flex;align-items:center;gap:8px;padding:0 12px;border-radius:10px;background:rgba(255,255,255,.72);border:1px solid rgba(109,40,217,.1)}.sn-dash-head input{width:100%;border:0;background:transparent;font-size:8.5px;outline:none}.sn-admin{display:grid;grid-template-columns:30px 1fr;grid-template-rows:auto auto;column-gap:8px;font-size:8.5px;font-weight:900}.sn-admin i{grid-row:1/3;width:30px;height:30px;border-radius:50%;background:linear-gradient(180deg,#f6c6a8 0 35%,#111066 36%)}.sn-admin small{font-size:6.6px}.sn-kpi-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:9px}.sn-kpi{min-height:74px;border-radius:14px;padding:10px;display:grid;grid-template-columns:32px 1fr;grid-template-rows:auto auto auto;column-gap:8px}.sn-kpi span{grid-row:1/4;width:32px;height:32px;display:grid;place-items:center;border-radius:50%;color:white;background:#6d28d9}.sn-kpi.orange span{background:#f59e0b}.sn-kpi.pink span{background:#ec4899}.sn-kpi.green span{background:#10b981}.sn-kpi.blue span{background:#3b82f6}.sn-kpi small{font-size:6.8px;font-weight:850}.sn-kpi strong{font-size:18px;line-height:1;font-weight:900}.sn-kpi em{font-style:normal;font-size:6.7px;color:#059669;font-weight:800}.sn-widget-grid{display:grid;grid-template-columns:.98fr 1fr 1fr;gap:10px;margin-top:12px}.sn-widget{min-height:148px;border-radius:16px;padding:12px}.sn-widget h3{margin:0 0 10px;font-size:9.4px;font-weight:900}.sn-status{display:grid;grid-template-columns:98px 1fr;align-items:center}.sn-workflow{grid-column:span 2}.sn-donut,.sn-ring{width:92px;height:92px;display:grid;place-items:center;align-content:center;border-radius:50%;background:conic-gradient(#6d28d9 0 44%,#8b5cf6 44% 65%,#f59e0b 65% 78%,#ec4899 78% 92%,#10b981 92%);box-shadow:inset 0 0 0 16px rgba(255,255,255,.82)}.sn-donut b,.sn-ring b{font-size:21px}.sn-donut small,.sn-ring small{font-size:7.5px;font-weight:900}.sn-status ul,.sn-sla ul{margin:6px 0 0;padding:0;list-style:none;font-size:7px;font-weight:850;display:grid;gap:6px}.sn-status li:before,.sn-sla li:before{content:"";display:inline-block;width:6px;height:6px;margin-right:6px;border-radius:50%;background:#6d28d9}.sn-status li:nth-child(2):before{background:#8b5cf6}.sn-status li:nth-child(3):before{background:#f59e0b}.sn-status li:nth-child(4):before{background:#ec4899}.sn-status li:nth-child(5):before{background:#10b981}.sn-workflow div{position:relative;display:grid;grid-template-columns:repeat(5,1fr);align-items:center;text-align:center;padding-top:3px}.sn-workflow span{position:relative;display:grid;gap:8px;justify-items:center}.sn-workflow i{width:42px;height:42px;display:grid;place-items:center;border-radius:50%;color:white;background:linear-gradient(135deg,#6d28d9,#8b5cf6);box-shadow:0 12px 18px rgba(109,40,217,.2)}.sn-workflow span:nth-child(2) i{background:linear-gradient(135deg,#f59e0b,#fb923c)}.sn-workflow span:nth-child(3) i{background:linear-gradient(135deg,#ec4899,#f43f8c)}.sn-workflow span:nth-child(5) i{background:linear-gradient(135deg,#10b981,#059669)}.sn-workflow em{position:absolute;left:calc(50% + 30px);top:14px;color:#7c3aed}.sn-workflow b{font-size:7.6px}.sn-workflow strong{font-size:18px;color:#1b22c8}.sn-ring{background:conic-gradient(#10b981 0 92%,#f59e0b 92% 98%,#ef4444 98%);box-shadow:inset 0 0 0 14px rgba(255,255,255,.82)}.sn-line{grid-column:auto}.sn-chart{height:88px;border-radius:10px;background:linear-gradient(0deg,rgba(109,40,217,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(109,40,217,.08) 1px,transparent 1px);background-size:30px 22px;position:relative;overflow:hidden}.sn-chart i{position:absolute;height:3px;border-radius:99px;transform-origin:left}.sn-chart i:nth-child(1){left:18px;top:58px;width:150px;background:#7c3aed;transform:rotate(-16deg)}.sn-chart i:nth-child(2){left:17px;top:75px;width:148px;background:#f59e0b;transform:rotate(-8deg)}.sn-chart i:nth-child(3){left:16px;top:72px;width:150px;background:#3b82f6;transform:rotate(-2deg)}.sn-chart small{position:relative;top:74px;display:inline-block;width:16%;font-size:6px;color:#66639b}.sn-line p{display:flex;gap:14px;font-size:6.8px;font-weight:850}.sn-line p span:before{content:"";display:inline-block;width:7px;height:7px;margin-right:5px;border-radius:50%;background:#7c3aed}.sn-line p span:nth-child(2):before{background:#f59e0b}.sn-line p span:nth-child(3):before{background:#3b82f6}.sn-activities p{display:grid;grid-template-columns:18px 1fr;gap:8px;margin:7px 0;font-size:7.2px;font-weight:850}.sn-activities p svg{color:#6d28d9}.sn-activities small{display:block;color:#66639b}.sn-activities a{display:flex;align-items:center;font-size:7.8px;font-weight:900;color:#1b22c8}
        .sn-modules{margin-top:18px}.sn-modules h2{text-align:center;margin:0 0 8px;font-size:17px;font-weight:900;color:#1b22c8}.sn-modules>div{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.sn-module{position:relative;min-height:300px;border-radius:20px;padding:24px 18px 16px}.sn-module-no{position:absolute;left:14px;top:14px;width:32px;height:32px;display:grid;place-items:center;border-radius:8px;color:white;background:linear-gradient(135deg,#5127e8,#7c3aed);font-weight:900}.sn-module.tender .sn-module-no{background:linear-gradient(135deg,#ec4899,#f43f8c)}.sn-module h3{margin:0 0 7px 44px;font-size:14px;line-height:1.15;font-weight:900}.sn-module>p{margin:0 0 14px 44px;font-size:8.5px;line-height:1.4;font-weight:820}.sn-steps{display:flex;align-items:start;justify-content:space-between;gap:6px;margin:18px 0}.sn-steps span{display:grid;justify-items:center;gap:6px;text-align:center;color:#6d28d9;font-size:7px;font-weight:850}.sn-steps span:after{content:"";height:1px;width:100%;background:#a78bfa}.sn-module-body{display:grid;grid-template-columns:1fr 1fr;gap:12px}.sn-module ul{margin:0;padding-left:12px;font-size:7.5px;line-height:1.7;font-weight:800}.sn-soa-details,.sn-mini-sla,.sn-mini-analytics,.sn-module-ui{border-radius:12px;padding:12px;background:rgba(255,255,255,.6);box-shadow:inset 0 0 0 1px rgba(109,40,217,.1);font-size:7px;font-weight:800}.sn-soa-details b,.sn-mini-sla b,.sn-mini-analytics b{font-size:9px;color:#1b22c8}.sn-soa-details p,.sn-mini-sla p{display:flex;justify-content:space-between;margin:8px 0}.sn-module-ui.search{grid-column:1/3}.sn-module-ui label{display:block;height:28px;padding:8px 10px;border-radius:8px;background:white;color:#66639b}.sn-module-ui div{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin:10px 0}.sn-module-ui div i{height:24px;border-radius:7px;background:white}.sn-module-ui table{width:100%;border-collapse:collapse}.sn-module-ui td{padding:6px;border-top:1px solid rgba(109,40,217,.12)}.sn-mini-analytics strong{display:block;font-size:24px;color:#1b22c8}.sn-mini-analytics span{display:flex;align-items:end;gap:4px;height:44px}.sn-mini-analytics i{width:10px;border-radius:4px;background:#7c3aed}.sn-mini-analytics i:nth-child(1){height:12px}.sn-mini-analytics i:nth-child(2){height:20px}.sn-mini-analytics i:nth-child(3){height:16px}.sn-mini-analytics i:nth-child(4){height:28px}.sn-mini-analytics i:nth-child(5){height:34px}
        @media(max-width:1500px){.sn-page{padding:16px 12px}.sn-header{grid-template-columns:280px minmax(640px,1fr) 330px;gap:12px}.sn-brand img{width:54px;height:54px}.sn-brand strong{font-size:25px}.sn-pill{padding:0 8px}.sn-pill b{font-size:7.8px}.sn-top{grid-template-columns:minmax(350px,.31fr) minmax(760px,.69fr);gap:12px}.sn-hero h1{font-size:36px}.sn-client{grid-template-columns:1fr 104px}.sn-client strong,.sn-platform strong{font-size:14px}.sn-sanas-logo b{font-size:27px}.sn-desc{font-size:11.5px}.sn-hero-stats{gap:8px}.sn-hero-stat{min-height:102px;padding:10px}.sn-hero-stat strong{font-size:22px}.sn-dashboard{grid-template-columns:150px 1fr;min-height:496px}.sn-dash-main{padding:12px}.sn-dash-head{grid-template-columns:1fr 180px 18px 18px 96px;margin-bottom:11px}.sn-kpi-grid{gap:7px}.sn-kpi{padding:8px;min-height:68px}.sn-kpi strong{font-size:17px}.sn-widget-grid{gap:8px;margin-top:10px}.sn-widget{min-height:128px;padding:10px}.sn-donut,.sn-ring{width:78px;height:78px;box-shadow:inset 0 0 0 13px rgba(255,255,255,.82)}.sn-status{grid-template-columns:82px 1fr}.sn-workflow i{width:36px;height:36px}.sn-workflow em{left:calc(50% + 25px);top:12px}.sn-chart{height:72px}.sn-chart small{top:61px}.sn-modules>div{gap:10px}.sn-module{padding:22px 14px 14px;min-height:286px}.sn-module h3{font-size:12px}.sn-module-body{gap:8px}}
        @media(max-width:1180px){.sn-header,.sn-top{grid-template-columns:1fr}.sn-pillbar{grid-template-columns:repeat(3,1fr)}.sn-partners{max-width:620px}.sn-dashboard{grid-template-columns:1fr}.sn-dash-side nav{grid-template-columns:repeat(5,1fr)}.sn-widget-grid{grid-template-columns:1fr 1fr}.sn-line{grid-column:auto}.sn-modules>div{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:760px){.sn-pillbar,.sn-hero-stats,.sn-kpi-grid,.sn-widget-grid,.sn-modules>div{grid-template-columns:1fr}.sn-partners{grid-template-columns:1fr 1fr}.sn-client,.sn-module-body,.sn-contact{grid-template-columns:1fr}.sn-dash-head{grid-template-columns:1fr}.sn-dash-side nav{grid-template-columns:1fr}.sn-architecture>div{grid-template-columns:repeat(2,1fr)}.sn-module-ui.search{grid-column:auto}.sn-hero h1{font-size:38px}.sn-product-art{height:230px}}
        @media(max-width:520px){.sn-partners{grid-template-columns:1fr}.sn-pill{border-left:0;border-top:1px solid rgba(109,40,217,.12);padding:12px}.sn-pill:first-child{border-top:0}.sn-architecture>div{grid-template-columns:1fr}}
      `}</style>
      <div className="sn-shell">
        <Header />
        <div className="sn-top">
          <CaseStudyHero />
          <DashboardMockup />
        </div>
        <ModulesDelivered />
      </div>
    </section>
  );
}
