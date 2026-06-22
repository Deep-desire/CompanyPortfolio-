import { motion } from 'framer-motion';
import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Cloud,
  Cog,
  Globe2,
  Headphones,
  Mail,
  Network,
  Phone,
  PieChart,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
} from 'lucide-react';

const rows = [
  {
    challengeIcon: UsersRound,
    challengeTitle: 'Disconnected\nTeams &\nInformation Silos',
    challengeText: 'Teams working in isolation with no unified platform for collaboration and knowledge sharing',
    challengeVisual: 'teams',
    solutionText: 'Integrated Microsoft 365 and SharePoint intranet solutions with centralized document management',
    tech: [
      ['Microsoft 365', 'm365'],
      ['SharePoint', 'sharepoint'],
    ],
    solutionVisual: 'intranet',
    outcomeText: 'Seamless collaboration, centralized knowledge access, and improved employee engagement',
    bullets: ['Unified Communication', 'Centralized Knowledge', 'Higher Engagement'],
    outcomeVisual: 'collab',
  },
  {
    challengeIcon: Cog,
    challengeTitle: 'Manual Repetitive\nProcesses',
    challengeText: 'Time-consuming manual tasks that slow operations and increase error rates',
    challengeVisual: 'manual',
    solutionText: 'Power Automate workflows and AI-powered automation for end-to-end process optimization',
    tech: [
      ['Power Automate', 'automate'],
      ['AI Builder', 'ai'],
    ],
    solutionVisual: 'automation',
    outcomeText: 'Reduced errors, faster execution, significant cost savings, and improved productivity',
    bullets: ['Process Efficiency', 'Cost Savings', 'Better Accuracy', 'Happier Teams'],
    outcomeVisual: 'growth',
  },
  {
    challengeIcon: PieChart,
    challengeTitle: 'Poor\nOperational\nVisibility',
    challengeText: 'Limited insights into business performance and metrics across departments',
    challengeVisual: 'visibility',
    solutionText: 'Power BI dashboards and real time reporting with AI-driven analytics capabilities',
    tech: [
      ['Power BI', 'powerbi'],
      ['Azure AI Services', 'azure'],
    ],
    solutionVisual: 'analytics',
    outcomeText: 'Data-driven decision making, strategic agility, and proactive business management',
    bullets: ['Real-time Insights', 'Strategic Agility', 'Performance Growth', 'Risk Mitigation'],
    outcomeVisual: 'decision',
  },
];

const stats = [
  { icon: BriefcaseBusiness, value: '100+', label: 'Projects Delivered' },
  { icon: ShieldCheck, value: '98%', label: 'Client Satisfaction' },
  { icon: UsersRound, value: '50+', label: 'Experts & Developers' },
  { icon: Headphones, value: '24/7', label: 'Support & Monitoring' },
  { icon: Globe2, value: 'Global', label: 'Delivery Capability' },
];

function GlassCard({ className = '', children }) {
  return <div className={`bc-glass ${className}`}>{children}</div>;
}

function MicrosoftMark() {
  return (
    <span className="bc-ms-mark" aria-hidden="true">
      <i style={{ background: '#f35325' }} />
      <i style={{ background: '#81bc06' }} />
      <i style={{ background: '#05a6f0' }} />
      <i style={{ background: '#ffba08' }} />
    </span>
  );
}

function M365Mark() {
  return <span className="bc-m365-mark" aria-hidden="true"><i /></span>;
}

function PartnerBadge({ type }) {
  return (
    <GlassCard className="bc-partner">
      {type === 'microsoft' ? <MicrosoftMark /> : <M365Mark />}
      <span>{type === 'microsoft' ? 'Microsoft' : 'Built on'}<br />{type === 'microsoft' ? 'Solutions Partner' : 'Microsoft 365'}</span>
    </GlassCard>
  );
}

function Header() {
  return (
    <motion.header className="bc-header" initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
      <div className="bc-brand">
        <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
        <span><strong>DesireInfoWeb</strong><small>Your Extended <b>Technology Partner</b></small></span>
      </div>
      <div className="bc-title-wrap">
        <h1>Business <span>Challenges</span> We Solve</h1>
        <p>Real challenges. Smart solutions. Measurable outcomes.</p>
      </div>
      <div className="bc-partners">
        <PartnerBadge type="microsoft" />
        <PartnerBadge type="m365" />
      </div>
    </motion.header>
  );
}

function ColumnHeader({ title, subtitle }) {
  return (
    <GlassCard className="bc-col-head">
      <b>{title}</b>
      <small>{subtitle}</small>
    </GlassCard>
  );
}

function Lines({ count = 4 }) {
  return <>{Array.from({ length: count }).map((_, index) => <i key={index} />)}</>;
}

function ChallengeIllustration({ type }) {
  return (
    <div className={`bc-visual bc-challenge-visual ${type}`} aria-hidden="true">
      <span className="bc-base" />
      {type === 'teams' && (
        <span className="bc-pods">
          <i /><i /><i /><i />
          <b>?</b><b>?</b><b>?</b>
        </span>
      )}
      {type === 'manual' && (
        <>
          <span className="bc-paper-stack"><Lines count={7} /></span>
          <span className="bc-person" />
          <span className="bc-warning">!</span>
        </>
      )}
      {type === 'visibility' && (
        <>
          <span className="bc-report one"><Lines count={5} /></span>
          <span className="bc-report two"><Lines count={4} /></span>
          <span className="bc-lens" />
          <span className="bc-question">?</span>
        </>
      )}
    </div>
  );
}

function SolutionIllustration({ type }) {
  return (
    <div className={`bc-visual bc-solution-visual ${type}`} aria-hidden="true">
      <span className="bc-base" />
      {type === 'intranet' && (
        <>
          <span className="bc-dashboard dark"><Lines count={8} /></span>
          <span className="bc-cloud"><Cloud size={34} /><b>S</b></span>
          <span className="bc-app a1">T</span><span className="bc-app a2">W</span><span className="bc-app a3">O</span>
        </>
      )}
      {type === 'automation' && (
        <>
          <span className="bc-flow-logo"><Workflow size={54} /></span>
          <span className="bc-flow-panel"><Lines count={5} /></span>
          <span className="bc-node n1" /><span className="bc-node n2" /><span className="bc-node n3" />
        </>
      )}
      {type === 'analytics' && (
        <>
          <span className="bc-dashboard wide"><Lines count={10} /></span>
          <span className="bc-chart-dot c1" /><span className="bc-chart-dot c2" /><span className="bc-chart-dot c3" />
        </>
      )}
    </div>
  );
}

function OutcomeIllustration({ type }) {
  return (
    <div className={`bc-visual bc-outcome-visual ${type}`} aria-hidden="true">
      <span className="bc-base" />
      {type === 'collab' && (
        <>
          <span className="bc-meeting"><i /><i /><i /></span>
          <span className="bc-profile one" /><span className="bc-profile two" />
          <span className="bc-success"><Check size={32} /></span>
        </>
      )}
      {type === 'growth' && (
        <>
          <span className="bc-growth-bars"><i /><i /><i /><i /></span>
          <span className="bc-arrow-up" />
          <span className="bc-bot"><Bot size={42} /></span>
          <span className="bc-coins" />
        </>
      )}
      {type === 'decision' && (
        <>
          <span className="bc-board"><Lines count={8} /></span>
          <span className="bc-presenters"><i /><i /><i /></span>
          <span className="bc-success purple"><Check size={32} /></span>
        </>
      )}
    </div>
  );
}

function ItemText({ text }) {
  return text.split('\n').map((line) => <span key={line}>{line}</span>);
}

function TechLabel({ label, type }) {
  return (
    <span className={`bc-tech ${type}`}>
      {type === 'm365' && <M365Mark />}
      {type === 'sharepoint' && <Share2 size={22} />}
      {type === 'automate' && <Workflow size={24} />}
      {type === 'ai' && <Network size={24} />}
      {type === 'powerbi' && <BarChart3 size={24} />}
      {type === 'azure' && <Sparkles size={24} />}
      <b>{label}</b>
    </span>
  );
}

function ChallengeCard({ icon: Icon, title, text, visual }) {
  return (
    <GlassCard className="bc-card bc-challenge">
      <div className="bc-copy challenge">
        <span className="bc-icon"><Icon size={32} aria-hidden="true" /></span>
        <h2><ItemText text={title} /></h2>
        <p>{text}</p>
      </div>
      <ChallengeIllustration type={visual} />
    </GlassCard>
  );
}

function SolutionCard({ text, tech, visual }) {
  return (
    <GlassCard className="bc-card bc-solution">
      <div className="bc-copy solution">
        <p>{text}</p>
        <div className="bc-tech-list">
          {tech.map(([label, type]) => <TechLabel key={label} label={label} type={type} />)}
        </div>
      </div>
      <SolutionIllustration type={visual} />
    </GlassCard>
  );
}

function OutcomeCard({ text, bullets, visual }) {
  return (
    <GlassCard className="bc-card bc-outcome">
      <div className="bc-copy outcome">
        <p>{text}</p>
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}><Check size={14} aria-hidden="true" />{bullet}</li>
          ))}
        </ul>
      </div>
      <OutcomeIllustration type={visual} />
    </GlassCard>
  );
}

function ConnectorArrow() {
  return (
    <span className="bc-arrow" aria-hidden="true">
      <ChevronRight size={38} />
      <ChevronRight size={38} />
    </span>
  );
}

function TransformationRow({ row, index }) {
  return (
    <motion.div className="bc-row" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: index * 0.07 }} viewport={{ once: true }}>
      <ChallengeCard icon={row.challengeIcon} title={row.challengeTitle} text={row.challengeText} visual={row.challengeVisual} />
      <ConnectorArrow />
      <SolutionCard text={row.solutionText} tech={row.tech} visual={row.solutionVisual} />
      <ConnectorArrow />
      <OutcomeCard text={row.outcomeText} bullets={row.bullets} visual={row.outcomeVisual} />
    </motion.div>
  );
}

function CTAChallengeBanner() {
  return (
    <button className="bc-cta" type="button">
      <span className="bc-target"><Target size={60} /></span>
      <b>We turn challenges into opportunities<br />with the power of <em>Microsoft 365,<br />AI, and intelligent automation.</em></b>
    </button>
  );
}

function StatsStrip() {
  return (
    <GlassCard className="bc-stats">
      {stats.map(({ icon: Icon, value, label }) => (
        <span key={label} className="bc-stat">
          <Icon size={30} aria-hidden="true" />
          <b>{value}</b>
          <small>{label}</small>
        </span>
      ))}
    </GlassCard>
  );
}

function QRPlaceholder() {
  return (
    <span className="bc-qr" aria-label="QR code placeholder">
      {Array.from({ length: 64 }).map((_, index) => <i key={index} />)}
    </span>
  );
}

function ContactCard() {
  return (
    <GlassCard className="bc-contact">
      <div>
        <span><Globe2 size={20} aria-hidden="true" />www.desireinfoweb.com</span>
        <span><Mail size={20} aria-hidden="true" />vijay@desireinfoweb.com</span>
        <span><Phone size={20} aria-hidden="true" />+91-8780468807</span>
      </div>
      <QRPlaceholder />
    </GlassCard>
  );
}

export default function BusinessChallenges() {
  return (
    <section className="bc-page" id="business-challenges">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .bc-page,.bc-page *{box-sizing:border-box}.bc-page{--ink:#111066;--blue:#1b22c8;--purple:#6d28d9;--violet:#7c3aed;--pink:#ec4899;--hot:#f43f8c;--green:#10b981;min-height:100vh;position:relative;isolation:isolate;overflow:hidden;padding:24px clamp(14px,1.7vw,32px) 20px;color:var(--ink);font-family:"Inter","Plus Jakarta Sans","Manrope",system-ui,sans-serif;background:radial-gradient(circle at 18% 40%,rgba(124,58,237,.16),transparent 30%),radial-gradient(circle at 61% 14%,rgba(236,72,153,.1),transparent 26%),radial-gradient(circle at 84% 76%,rgba(56,189,248,.12),transparent 26%),linear-gradient(135deg,#fbfaff 0%,#f7f2ff 50%,#fff7fd 100%)}.bc-page:before{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(109,40,217,.035) 1px,transparent 1px),linear-gradient(0deg,rgba(109,40,217,.03) 1px,transparent 1px);background-size:76px 76px}.bc-shell{width:min(100%,1840px);margin:0 auto}.bc-glass{background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.52));border:1px solid rgba(255,255,255,.76);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 62px rgba(109,40,217,.14),0 0 0 1px rgba(130,94,255,.1);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
        .bc-header{display:grid;grid-template-columns:310px minmax(690px,1fr) 390px;gap:16px;align-items:start;margin-bottom:14px}.bc-brand{display:flex;align-items:center;gap:11px}.bc-brand img{width:64px;height:64px;object-fit:contain;filter:drop-shadow(0 16px 24px rgba(109,40,217,.13))}.bc-brand strong{display:block;font-size:30px;line-height:.96;font-weight:900;letter-spacing:-.02em}.bc-brand small{display:block;margin-top:3px;font-size:12px;line-height:1;font-weight:900;color:#1b22c8}.bc-brand small b{color:#ec4899}.bc-title-wrap{text-align:center;margin-top:-4px}.bc-title-wrap h1{margin:0;font-size:clamp(50px,4vw,76px);line-height:.95;font-weight:900;letter-spacing:-.025em}.bc-title-wrap h1 span{background:linear-gradient(100deg,#1b22c8 0%,#7c3aed 36%,#ec4899 86%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.bc-title-wrap p{margin:10px 0 0;font-size:22px;line-height:1;font-weight:850}.bc-partners{display:grid;grid-template-columns:1fr 1fr;gap:13px}.bc-partner{min-height:72px;display:flex;align-items:center;justify-content:center;gap:12px;border-radius:20px;padding:10px 12px}.bc-partner span:last-child{font-size:12px;line-height:1.08;font-weight:900}.bc-ms-mark{width:30px;height:30px;display:grid;grid-template-columns:1fr 1fr;gap:3px}.bc-ms-mark i{border-radius:1px}.bc-m365-mark{width:40px;height:40px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(from 35deg,#1b22c8,#7c3aed,#38bdf8,#1b22c8)}.bc-m365-mark i{width:22px;height:22px;border-radius:9px;background:rgba(255,255,255,.72);transform:rotate(45deg)}
        .bc-grid{display:grid;grid-template-columns:1fr 42px 1.1fr 42px .92fr;gap:0;align-items:end;position:relative;z-index:3;margin-bottom:-1px}.bc-col-head{height:58px;display:grid;place-items:center;text-align:center;border-radius:18px 18px 7px 7px;background:linear-gradient(180deg,rgba(255,255,255,.72),rgba(255,255,255,.42));border-color:rgba(255,255,255,.7);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 12px 34px rgba(109,40,217,.09),0 0 0 1px rgba(130,94,255,.08)}.bc-col-head:nth-child(1){grid-column:1}.bc-col-head:nth-child(2){grid-column:3}.bc-col-head:nth-child(3){grid-column:5}.bc-col-head b{font-size:14px;line-height:1;font-weight:900;letter-spacing:.03em}.bc-col-head small{margin-top:3px;font-size:11px;font-weight:900;color:#312e81}.bc-rows{display:grid;gap:10px}.bc-row{display:grid;grid-template-columns:1fr 42px 1.1fr 42px .92fr;gap:0;align-items:stretch}.bc-card{position:relative;min-height:235px;display:grid;align-items:center;overflow:hidden;border-radius:17px;padding:22px}.bc-challenge{grid-template-columns:.82fr 1.18fr}.bc-solution{grid-template-columns:.78fr 1.22fr}.bc-outcome{grid-template-columns:.86fr 1.14fr}.bc-copy{position:relative;z-index:2}.bc-icon{width:54px;height:54px;display:grid;place-items:center;margin-bottom:12px;border-radius:50%;color:white;background:linear-gradient(135deg,#6d28d9,#8b5cf6);box-shadow:0 16px 24px rgba(109,40,217,.24)}.bc-copy h2{margin:0 0 18px;font-size:22px;line-height:1.12;font-weight:900}.bc-copy h2 span{display:block}.bc-copy p{margin:0;font-size:11px;line-height:1.55;font-weight:830}.bc-copy.solution p,.bc-copy.outcome p{font-size:13px;line-height:1.45;font-weight:880}.bc-tech-list{display:grid;gap:14px;margin-top:24px}.bc-tech{display:flex;align-items:center;gap:12px;font-size:12px;font-weight:900}.bc-tech svg,.bc-tech .bc-m365-mark{color:#1b22c8}.bc-tech .bc-m365-mark{width:28px;height:28px}.bc-tech .bc-m365-mark i{width:15px;height:15px}.bc-tech.sharepoint svg{color:#008272}.bc-tech.automate svg{color:#2563eb}.bc-tech.ai svg{color:#3b82f6}.bc-tech.powerbi svg{color:#f59e0b}.bc-tech.azure svg{color:#0078d4}.bc-copy.outcome ul{display:grid;gap:10px;margin:18px 0 0;padding:0;list-style:none}.bc-copy.outcome li{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:900}.bc-copy.outcome li svg{width:20px;height:20px;padding:3px;border-radius:50%;color:white;background:#6d28d9}.bc-arrow{display:flex;align-items:center;justify-content:center;color:#7c3aed;filter:drop-shadow(0 12px 10px rgba(109,40,217,.22));z-index:5}.bc-arrow svg+svg{margin-left:-25px}
        .bc-visual{position:relative;height:190px;min-width:0}.bc-base{position:absolute;left:8px;right:8px;bottom:0;height:54px;border-radius:50%;background:radial-gradient(circle at 50% 32%,rgba(255,255,255,.86),rgba(168,85,247,.36) 58%,rgba(39,16,154,.46));box-shadow:0 18px 32px rgba(109,40,217,.22);transform:perspective(560px) rotateX(62deg)}.bc-pods{position:absolute;inset:10px 6px 34px}.bc-pods i{position:absolute;width:72px;height:48px;border-radius:12px;background:linear-gradient(155deg,#ddd6fe,#8b5cf6);box-shadow:inset -8px -8px 14px rgba(17,16,102,.16),0 13px 22px rgba(109,40,217,.16)}.bc-pods i:nth-child(1){left:8px;top:10px}.bc-pods i:nth-child(2){right:10px;top:0}.bc-pods i:nth-child(3){left:38px;bottom:12px}.bc-pods i:nth-child(4){right:42px;bottom:4px}.bc-pods b,.bc-question,.bc-warning{position:absolute;width:32px;height:32px;display:grid;place-items:center;border-radius:10px;color:white;background:linear-gradient(135deg,#ec4899,#f43f8c);box-shadow:0 14px 22px rgba(236,72,153,.22);font-size:20px;font-weight:900}.bc-pods b:nth-of-type(1){left:78px;top:2px}.bc-pods b:nth-of-type(2){right:2px;top:46px}.bc-pods b:nth-of-type(3){left:14px;bottom:22px}.bc-paper-stack{position:absolute;left:18px;bottom:42px;width:108px;height:96px;border-radius:10px;background:linear-gradient(180deg,#fff,#ede9fe);box-shadow:0 16px 26px rgba(109,40,217,.16);transform:rotate(-6deg)}.bc-paper-stack i,.bc-report i,.bc-flow-panel i,.bc-dashboard i,.bc-board i{display:block;height:5px;margin:8px 14px;border-radius:99px;background:rgba(109,40,217,.28)}.bc-person{position:absolute;right:40px;bottom:46px;width:82px;height:94px;border-radius:28px 28px 12px 12px;background:linear-gradient(180deg,#f6c6a8 0 23%,#111066 24% 100%);box-shadow:0 16px 26px rgba(17,16,102,.2)}.bc-warning{right:16px;top:34px}.bc-report{position:absolute;width:116px;height:100px;border-radius:12px;background:linear-gradient(180deg,#fff,#ede9fe);box-shadow:0 16px 26px rgba(109,40,217,.16)}.bc-report.one{left:20px;bottom:48px;transform:rotate(-10deg)}.bc-report.two{right:22px;bottom:58px;transform:rotate(8deg)}.bc-lens{position:absolute;left:102px;bottom:36px;width:72px;height:72px;border:8px solid rgba(109,40,217,.56);border-radius:50%;transform:rotate(-18deg)}.bc-lens:after{content:"";position:absolute;right:-30px;bottom:-13px;width:44px;height:10px;border-radius:99px;background:#6d28d9}.bc-question{right:26px;top:16px}
        .bc-dashboard{position:absolute;border-radius:14px;background:linear-gradient(145deg,#111066,#3328e7 74%);box-shadow:inset 0 0 0 4px rgba(255,255,255,.18),0 22px 34px rgba(109,40,217,.25)}.bc-dashboard.dark{left:60px;right:22px;top:10px;height:126px}.bc-dashboard.dark:before,.bc-dashboard.wide:before,.bc-board:before{content:"";position:absolute;left:14px;right:14px;top:12px;height:8px;border-radius:99px;background:rgba(255,255,255,.24)}.bc-cloud{position:absolute;left:38px;bottom:42px;width:118px;height:70px;display:flex;align-items:center;justify-content:center;gap:8px;border-radius:36px;color:white;background:linear-gradient(135deg,#fff,#a78bfa);box-shadow:0 16px 28px rgba(109,40,217,.2)}.bc-cloud b{width:36px;height:36px;display:grid;place-items:center;border-radius:11px;background:#008272}.bc-app{position:absolute;width:42px;height:42px;display:grid;place-items:center;border-radius:12px;color:white;font-size:15px;font-weight:900;background:linear-gradient(135deg,#2563eb,#7c3aed);box-shadow:0 14px 24px rgba(109,40,217,.2)}.bc-app.a1{left:22px;top:55px}.bc-app.a2{right:24px;bottom:48px}.bc-app.a3{left:80px;bottom:20px}.bc-flow-logo{position:absolute;left:38px;bottom:50px;width:94px;height:94px;display:grid;place-items:center;border-radius:50%;color:#2563eb;background:radial-gradient(circle,#fff,#bfdbfe);box-shadow:0 16px 28px rgba(37,99,235,.18)}.bc-flow-panel{position:absolute;left:132px;top:10px;width:124px;height:152px;border-radius:14px;background:linear-gradient(180deg,#fff,#ede9fe);box-shadow:0 18px 32px rgba(109,40,217,.18)}.bc-node{position:absolute;width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#6d28d9,#ec4899);box-shadow:0 14px 24px rgba(236,72,153,.2)}.bc-node.n1{right:10px;top:28px}.bc-node.n2{right:24px;top:84px}.bc-node.n3{right:6px;bottom:20px}.bc-dashboard.wide{left:20px;right:4px;top:6px;height:154px}.bc-chart-dot{position:absolute;bottom:48px;width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#ec4899,#7c3aed);box-shadow:0 10px 18px rgba(236,72,153,.22)}.bc-chart-dot.c1{left:64px}.bc-chart-dot.c2{left:138px;bottom:68px}.bc-chart-dot.c3{right:50px;bottom:54px}
        .bc-meeting{position:absolute;left:58px;right:36px;bottom:42px;height:90px;border-radius:20px;background:linear-gradient(135deg,#ddd6fe,#8b5cf6);box-shadow:0 18px 30px rgba(109,40,217,.2)}.bc-meeting i,.bc-presenters i{position:absolute;bottom:12px;width:24px;height:52px;border-radius:13px 13px 6px 6px;background:linear-gradient(180deg,#f6c6a8 0 25%,#7c3aed 26%)}.bc-meeting i:nth-child(1){left:22px}.bc-meeting i:nth-child(2){left:76px}.bc-meeting i:nth-child(3){right:22px}.bc-profile{position:absolute;width:52px;height:70px;border-radius:14px;background:linear-gradient(180deg,#fff,#ddd6fe);box-shadow:0 14px 24px rgba(109,40,217,.16)}.bc-profile.one{right:18px;top:18px}.bc-profile.two{right:80px;top:8px}.bc-success{position:absolute;right:8px;bottom:48px;width:58px;height:58px;display:grid;place-items:center;border-radius:50%;color:white;background:#10b981;box-shadow:0 14px 26px rgba(16,185,129,.25)}.bc-growth-bars{position:absolute;left:38px;bottom:46px;width:126px;height:98px;display:flex;align-items:end;gap:10px}.bc-growth-bars i{width:22px;border-radius:8px;background:linear-gradient(180deg,#a78bfa,#6d28d9)}.bc-growth-bars i:nth-child(1){height:36px}.bc-growth-bars i:nth-child(2){height:52px}.bc-growth-bars i:nth-child(3){height:72px}.bc-growth-bars i:nth-child(4){height:92px}.bc-arrow-up{position:absolute;left:82px;top:28px;width:128px;height:70px;border-top:13px solid #ec4899;border-right:13px solid #ec4899;transform:skew(-18deg) rotate(-22deg);filter:drop-shadow(0 12px 12px rgba(236,72,153,.22))}.bc-bot{position:absolute;right:18px;bottom:46px;width:70px;height:86px;display:grid;place-items:center;border-radius:24px;color:#7c3aed;background:linear-gradient(180deg,#fff,#ddd6fe);box-shadow:0 18px 28px rgba(109,40,217,.18)}.bc-coins{position:absolute;left:28px;bottom:40px;width:58px;height:26px;border-radius:50%;background:repeating-linear-gradient(90deg,#f59e0b 0 9px,#fbbf24 9px 17px)}.bc-board{position:absolute;left:42px;right:16px;top:10px;height:132px;border-radius:14px;background:linear-gradient(145deg,#111066,#3328e7 74%);box-shadow:inset 0 0 0 4px rgba(255,255,255,.18),0 22px 34px rgba(109,40,217,.25)}.bc-presenters{position:absolute;left:10px;right:20px;bottom:38px}.bc-presenters i:nth-child(1){left:18px}.bc-presenters i:nth-child(2){left:62px}.bc-presenters i:nth-child(3){right:18px}.bc-success.purple{background:linear-gradient(135deg,#6d28d9,#8b5cf6)}
        .bc-bottom{display:grid;grid-template-columns:520px minmax(620px,1fr) 430px;gap:18px;margin-top:18px;align-items:stretch}.bc-cta{min-height:118px;display:grid;grid-template-columns:92px 1fr;align-items:center;gap:16px;border:0;border-radius:22px;padding:18px 28px;text-align:left;color:white;background:linear-gradient(135deg,#6d28d9 0%,#ec4899 65%,#f43f8c 100%);box-shadow:0 22px 45px rgba(236,72,153,.25);cursor:pointer}.bc-target{width:76px;height:76px;display:grid;place-items:center;border-radius:50%;background:rgba(255,255,255,.2);box-shadow:inset 0 1px 0 rgba(255,255,255,.5)}.bc-cta b{font-size:17px;line-height:1.3;font-weight:800}.bc-cta em{font-style:normal;color:#fde047}.bc-stats{min-height:118px;display:grid;grid-template-columns:repeat(5,1fr);align-items:center;overflow:hidden;border-radius:22px}.bc-stat{display:grid;grid-template-columns:36px 1fr;grid-template-rows:auto auto;column-gap:10px;align-items:center;padding:0 18px;border-left:1px solid rgba(109,40,217,.14)}.bc-stat:first-child{border-left:0}.bc-stat svg{grid-row:1/3;color:#6d28d9}.bc-stat b{font-size:22px;line-height:1;font-weight:900}.bc-stat small{font-size:8px;line-height:1.1;font-weight:850;color:#312e81}.bc-contact{min-height:118px;display:grid;grid-template-columns:1fr 92px;gap:16px;align-items:center;padding:16px 18px;border-radius:22px}.bc-contact div{display:grid;gap:12px}.bc-contact span{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:900;color:#1b22c8}.bc-qr{width:90px;height:90px;display:grid;grid-template-columns:repeat(8,1fr);gap:3px;padding:7px;border:4px solid white;border-radius:9px;background:white}.bc-qr i{background:#111066}.bc-qr i:nth-child(2n),.bc-qr i:nth-child(5n),.bc-qr i:nth-child(11n),.bc-qr i:nth-child(17n){background:transparent}
        @media(max-width:1500px){.bc-page{padding:18px 12px}.bc-header{grid-template-columns:280px minmax(600px,1fr) 350px;gap:12px}.bc-brand img{width:54px;height:54px}.bc-brand strong{font-size:25px}.bc-brand small{font-size:10px}.bc-title-wrap h1{font-size:50px}.bc-title-wrap p{font-size:17px}.bc-partner{min-height:62px}.bc-grid,.bc-row{grid-template-columns:1fr 32px 1.1fr 32px .92fr}.bc-col-head{height:50px}.bc-card{min-height:205px;padding:18px}.bc-copy h2{font-size:18px}.bc-copy p{font-size:9.5px}.bc-copy.solution p,.bc-copy.outcome p{font-size:11.2px}.bc-visual{height:166px}.bc-icon{width:46px;height:46px}.bc-bottom{grid-template-columns:440px minmax(520px,1fr) 360px;gap:12px}.bc-stat{padding:0 12px}.bc-stat b{font-size:18px}.bc-contact span{font-size:10.5px}}
        @media(max-width:1180px){.bc-header,.bc-bottom{grid-template-columns:1fr}.bc-title-wrap{text-align:left}.bc-partners{max-width:620px}.bc-grid{grid-template-columns:1fr}.bc-col-head{display:none}.bc-row{grid-template-columns:1fr;gap:10px;margin-bottom:18px}.bc-arrow{height:22px;transform:rotate(90deg)}.bc-card{min-height:230px}.bc-stats{grid-template-columns:repeat(5,1fr)}} 
        @media(max-width:760px){.bc-page{padding:16px 12px 22px}.bc-title-wrap h1{font-size:42px}.bc-title-wrap p{font-size:15px}.bc-partners{grid-template-columns:1fr 1fr}.bc-challenge,.bc-solution,.bc-outcome{grid-template-columns:1fr}.bc-visual{min-height:180px}.bc-stats{grid-template-columns:1fr}.bc-stat{min-height:72px;border-left:0;border-top:1px solid rgba(109,40,217,.12)}.bc-stat:first-child{border-top:0}.bc-contact{grid-template-columns:1fr}.bc-qr{justify-self:start}.bc-cta{grid-template-columns:1fr}.bc-target{width:66px;height:66px}} 
        @media(max-width:520px){.bc-partners{grid-template-columns:1fr}.bc-card{padding:16px}.bc-copy h2{font-size:21px}.bc-copy.solution p,.bc-copy.outcome p{font-size:12px}.bc-bottom{gap:12px}}
      `}</style>

      <div className="bc-shell">
        <Header />
        <div className="bc-grid" aria-hidden="true">
          <ColumnHeader title="CHALLENGE" subtitle="The Before" />
          <ColumnHeader title="OUR SOLUTION" subtitle="The Transformation" />
          <ColumnHeader title="OUTCOME" subtitle="The After" />
        </div>
        <div className="bc-rows">
          {rows.map((row, index) => <TransformationRow key={row.challengeTitle} row={row} index={index} />)}
        </div>
        <section className="bc-bottom">
          <CTAChallengeBanner />
          <StatsStrip />
          <ContactCard />
        </section>
      </div>
    </section>
  );
}
