import { motion } from 'framer-motion';
import {
  Blocks,
  BrainCircuit,
  Check,
  CheckCircle2,
  Code2,
  Globe2,
  Headphones,
  Mail,
  Network,
  Phone,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  Workflow,
} from 'lucide-react';

const headerValues = [
  { icon: UsersRound, title: 'Skilled Experts', label: 'On Demand' },
  { icon: Network, title: 'Specialized', label: 'Workforce' },
  { icon: Workflow, title: 'Agile', label: '& Adaptive' },
  { icon: Sparkles, title: 'Innovation', label: 'Driven' },
  { icon: ShieldCheck, title: 'Quality', label: 'Committed' },
  { icon: Star, title: 'Results', label: 'Focused' },
];

const capabilities = [
  {
    value: '10+',
    title: 'AI Developers',
    detail: 'Azure AI | Copilot Studio\nML | LLM Integrations',
    icon: BrainCircuit,
    tone: 'purple',
    visual: 'ai',
  },
  {
    value: '20+',
    title: 'Full-Stack\nDevelopers',
    detail: '.NET | React | Node.js\nAzure | Mobile',
    icon: Code2,
    tone: 'pink',
    visual: 'stack',
  },
  {
    value: '10+',
    title: 'Low-Code\nSpecialists',
    detail: 'Power Apps | Power Automate\nSharePoint',
    icon: Blocks,
    tone: 'gold',
    visual: 'lowcode',
  },
];

const certs = [
  ['1', 'PL-900 Microsoft Certified: Power Platform Fundamentals', 'pp'],
  ['2', 'Project Management Assessment', 'pm'],
  ['3', 'Certified Scrum Master', 'csm'],
  ['4', 'Generative AI for Data Science', 'ai'],
  ['5', 'Python Essentials 2', 'py'],
  ['6', 'Data Analytics Essentials', 'data'],
  ['7', 'Python Essentials 1', 'py'],
  ['8', 'Python 101 for Data Science - IBM', 'ibm'],
  ['9', 'Machine Learning with Python - IBM', 'ibm'],
  ['10', 'Microsoft Certified: Azure AI Fundamentals', 'az'],
];

const stats = [
  { icon: UsersRound, value: '40+', label: 'Team Strength' },
  { icon: Blocks, value: '3', label: 'Capability Clusters' },
  { icon: CheckCircle2, value: '100+', label: 'Projects Delivered' },
  { icon: Star, value: '98%', label: 'Client Satisfaction' },
  { icon: Headphones, value: '24/7', label: 'Support & Collaboration' },
  { icon: Globe2, value: 'Global', label: 'Delivery Capability' },
];

function GlassCard({ className = '', children }) {
  return <div className={`dt-glass ${className}`}>{children}</div>;
}

function MicrosoftMark() {
  return (
    <span className="dt-ms-mark" aria-hidden="true">
      <i style={{ background: '#f35325' }} />
      <i style={{ background: '#81bc06' }} />
      <i style={{ background: '#05a6f0' }} />
      <i style={{ background: '#ffba08' }} />
    </span>
  );
}

function M365Mark() {
  return <span className="dt-m365-mark" aria-hidden="true"><i /></span>;
}

function HeaderValuePill({ icon: Icon, title, label }) {
  return (
    <span className="dt-value-pill">
      <Icon size={26} aria-hidden="true" />
      <b>{title}</b>
      <small>{label}</small>
    </span>
  );
}

function PartnerBadge({ type }) {
  return (
    <GlassCard className="dt-partner">
      {type === 'microsoft' ? <MicrosoftMark /> : <M365Mark />}
      <span>{type === 'microsoft' ? 'Microsoft' : 'Built on'}<br />{type === 'microsoft' ? 'Solutions Partner' : 'Microsoft 365'}</span>
    </GlassCard>
  );
}

function TopHeader() {
  return (
    <motion.header className="dt-header" initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
      <div className="dt-brand">
        <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
        <span><strong>DesireInfoWeb</strong><small>Your Extended <b>Technology Partner</b></small></span>
      </div>
      <GlassCard className="dt-value-bar">
        {headerValues.map((item) => <HeaderValuePill key={item.title} {...item} />)}
      </GlassCard>
      <div className="dt-partners">
        <PartnerBadge type="microsoft" />
        <PartnerBadge type="m365" />
      </div>
    </motion.header>
  );
}

function CapabilityVisual({ type }) {
  return (
    <div className={`dt-cap-visual dt-${type}`} aria-hidden="true">
      <span className="cap-base" />
      <span className="cap-object one" />
      <span className="cap-object two" />
      <span className="cap-object three" />
      <span className="cap-icon">
        {type === 'ai' && <BrainCircuit size={34} />}
        {type === 'stack' && <Code2 size={34} />}
        {type === 'lowcode' && <Puzzle size={34} />}
      </span>
    </div>
  );
}

function CapabilityCard({ value, title, detail, icon: Icon, tone, visual }) {
  return (
    <GlassCard className={`dt-capability ${tone}`}>
      <div className="dt-cap-copy">
        <strong>{value}</strong>
        <h3>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3>
        <p>{detail.split('\n').map((line) => <span key={line}>{line}</span>)}</p>
      </div>
      <span className="dt-cap-icon"><Icon size={24} /></span>
      <CapabilityVisual type={visual} />
    </GlassCard>
  );
}

function HeroSection() {
  return (
    <motion.section className="dt-hero" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <h1>Our <span>Development Team</span></h1>
      <p>We field a large, specialized delivery team structured across three core capability clusters, giving us the capacity to simultaneously resource multiple enterprise-grade engagements.</p>
      <div className="dt-capability-grid">
        {capabilities.map((item) => <CapabilityCard key={item.title} {...item} />)}
      </div>
    </motion.section>
  );
}

function Person({ className = '' }) {
  return (
    <span className={`dt-person ${className}`} aria-hidden="true">
      <i />
      <b />
    </span>
  );
}

function WorkspaceCluster({ title, icon: Icon, className }) {
  return (
    <GlassCard className={`dt-cluster ${className}`}>
      <h3>{title}</h3>
      <span className="dt-cluster-board">
        <Icon size={30} />
        <i /><i /><i />
      </span>
      <span className="dt-desk">
        <Person className="p1" />
        <Person className="p2" />
        <span className="monitor one" />
        <span className="monitor two" />
      </span>
    </GlassCard>
  );
}

function DevelopmentTeamScene() {
  return (
    <motion.div className="dt-scene" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
      <span className="dt-scene-platform" />
      <WorkspaceCluster title="AI & Machine Learning" icon={BrainCircuit} className="ai" />
      <WorkspaceCluster title="Full Stack Development" icon={Code2} className="stack" />
      <WorkspaceCluster title="Low-Code Solutions" icon={Workflow} className="low" />
      <div className="dt-team-core" aria-hidden="true">
        <span><UsersRound size={52} /></span>
      </div>
      <i className="dt-glow g1" />
      <i className="dt-glow g2" />
    </motion.div>
  );
}

function CertificationBadge({ title, level, className }) {
  return (
    <span className={`dt-badge ${className}`}>
      <small>Microsoft<br />Certified</small>
      <strong>{title}</strong>
      <b>{level}</b>
      <em>★</em>
    </span>
  );
}

function CertificationTower() {
  return (
    <motion.aside className="dt-tower" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
      <span className="dt-tower-shell" />
      <span className="dt-tower-base" />
      <CertificationBadge title="Azure Solutions Architect" level="Expert" className="b1" />
      <CertificationBadge title="Power Platform Developer" level="Associate" className="b2" />
      <CertificationBadge title="Azure Administrator" level="Associate" className="b3" />
      <CertificationBadge title="Azure AI Fundamentals" level="Fundamentals" className="b4" />
    </motion.aside>
  );
}

function CertIcon({ type }) {
  const label = { pp: 'P', pm: 'PM', csm: 'CSM', ai: 'AI', py: 'Py', data: 'BI', ibm: 'IBM', az: 'A' }[type] || '✓';
  return <span className={`dt-cert-icon ${type}`}>{label}</span>;
}

function CertificationRow({ no, name, type }) {
  return (
    <tr>
      <td>{no}</td>
      <td><CertIcon type={type} /></td>
      <td>{name}</td>
      <td><span className="dt-active"><Check size={16} /></span></td>
    </tr>
  );
}

function ActiveCertBadge() {
  return (
    <div className="dt-active-badge" aria-hidden="true">
      <span className="dt-active-shield">
        <Check size={40} />
      </span>
      <span className="dt-active-ribbon">
        <strong>27+</strong>
        <small>Active Certifications</small>
      </span>
      <i />
    </div>
  );
}

function CertificationPanel() {
  return (
    <motion.aside className="dt-cert-panel" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <GlassCard className="dt-cert-card">
        <div className="dt-cert-head">
          <div>
            <h2>Team Certifications</h2>
            <p>Our team holds Total 27+ active certifications across Microsoft, project management, agile, and AI disciplines ensuring every engagement is backed by verified expertise, including 10 key active certifications highlighted below.</p>
          </div>
          <ActiveCertBadge />
        </div>
        <div className="dt-table-wrap">
          <table>
            <thead><tr><th>No</th><th></th><th>Certification</th><th>Active</th></tr></thead>
            <tbody>
              {certs.map(([no, name, type]) => <CertificationRow key={no} no={no} name={name} type={type} />)}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </motion.aside>
  );
}

function StatItem({ icon: Icon, value, label }) {
  return (
    <span className="dt-stat">
      <Icon size={28} aria-hidden="true" />
      <b>{value}</b>
      <small>{label}</small>
    </span>
  );
}

function StatsStrip() {
  return (
    <GlassCard className="dt-stats">
      {stats.map((item) => <StatItem key={item.label} {...item} />)}
    </GlassCard>
  );
}

function CTASection() {
  return (
    <button type="button" className="dt-cta">
      <span>Expert People.<br />Proven Skills.<br />Exceptional Results.</span>
      <UsersRound size={66} aria-hidden="true" />
    </button>
  );
}

function QRPlaceholder() {
  return (
    <span className="dt-qr" aria-label="QR code placeholder">
      {Array.from({ length: 64 }, (_, index) => <i key={index} />)}
    </span>
  );
}

function ContactCard() {
  return (
    <GlassCard className="dt-contact">
      <div>
        <span><Globe2 size={17} />www.desireinfoweb.com</span>
        <span><Mail size={17} />vijay@desireinfoweb.com</span>
        <span><Phone size={17} />+91-8780468807</span>
      </div>
      <QRPlaceholder />
    </GlassCard>
  );
}

function BottomArea() {
  return (
    <motion.div className="dt-bottom" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <StatsStrip />
      <CTASection />
      <ContactCard />
    </motion.div>
  );
}

export default function DevelopmentTeam() {
  return (
    <section className="dt-page" id="development-team">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .dt-page,.dt-page *{box-sizing:border-box}
        .dt-page{--ink:#111066;--strong:#312e81;--muted:#66639b;--blue:#1b22c8;--purple:#6d28d9;--violet:#7c3aed;--pink:#ec4899;--hot:#f43f8c;--success:#10b981;min-height:100vh;position:relative;isolation:isolate;overflow:hidden;padding:24px clamp(14px,1.7vw,32px) 24px;color:var(--ink);font-family:"Inter","Plus Jakarta Sans","Manrope",system-ui,sans-serif;background:radial-gradient(circle at 11% 45%,rgba(124,58,237,.18),transparent 30%),radial-gradient(circle at 58% 12%,rgba(236,72,153,.12),transparent 25%),radial-gradient(circle at 84% 78%,rgba(56,189,248,.12),transparent 28%),linear-gradient(135deg,#fbfaff 0%,#f7f2ff 50%,#fff7fd 100%)}
        .dt-page:before{content:"";position:absolute;inset:0;z-index:-2;background:radial-gradient(circle at 50% 5%,rgba(17,16,102,.09),transparent 18%),linear-gradient(90deg,rgba(109,40,217,.035) 1px,transparent 1px),linear-gradient(0deg,rgba(109,40,217,.03) 1px,transparent 1px);background-size:auto,76px 76px,76px 76px}
        .dt-shell{width:min(100%,1840px);margin:0 auto;position:relative;z-index:1}
        .dt-glass{background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.52));border:1px solid rgba(255,255,255,.76);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 62px rgba(109,40,217,.14),0 0 0 1px rgba(130,94,255,.1);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
        .dt-header{display:grid;grid-template-columns:310px minmax(670px,1fr) 370px;gap:16px;align-items:center;margin-bottom:20px}.dt-brand{display:flex;align-items:center;gap:11px;min-width:0}.dt-brand img{width:64px;height:64px;object-fit:contain;filter:drop-shadow(0 16px 24px rgba(109,40,217,.13))}.dt-brand strong{display:block;font-size:30px;line-height:.96;font-weight:900;letter-spacing:-.02em}.dt-brand small{display:block;margin-top:3px;font-size:12px;line-height:1;font-weight:900;color:#1b22c8}.dt-brand small b{color:#ec4899}.dt-value-bar{min-height:70px;display:grid;grid-template-columns:repeat(6,1fr);align-items:center;border-radius:22px;overflow:hidden}.dt-value-pill{display:grid;grid-template-columns:32px 1fr;grid-template-rows:auto auto;column-gap:9px;align-items:center;min-height:52px;padding:0 14px;border-left:1px solid rgba(109,40,217,.14)}.dt-value-pill:first-child{border-left:0}.dt-value-pill svg{grid-row:1/3;color:#6d28d9;stroke-width:2.25}.dt-value-pill b{font-size:10px;line-height:1.05;font-weight:900}.dt-value-pill small{margin-top:3px;font-size:7px;line-height:1.05;font-weight:850;color:#312e81}.dt-partners{display:grid;grid-template-columns:1fr 1fr;gap:13px}.dt-partner{min-height:70px;display:flex;align-items:center;justify-content:center;gap:12px;border-radius:22px;padding:10px 12px}.dt-partner span:last-child{font-size:11.5px;line-height:1.07;font-weight:900}.dt-ms-mark{width:30px;height:30px;display:grid;grid-template-columns:1fr 1fr;gap:3px}.dt-ms-mark i{border-radius:1px}.dt-m365-mark{width:40px;height:40px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(from 35deg,#1b22c8,#7c3aed,#38bdf8,#1b22c8)}.dt-m365-mark i{width:22px;height:22px;border-radius:9px;background:rgba(255,255,255,.72);transform:rotate(45deg)}
        .dt-main{display:grid;grid-template-columns:minmax(0,1fr) 560px;gap:18px;align-items:start}.dt-left{min-width:0}.dt-hero h1{margin:18px 0 14px;font-size:clamp(54px,3.9vw,78px);line-height:.98;font-weight:900;letter-spacing:-.02em}.dt-hero h1 span{background:linear-gradient(100deg,#1b22c8 0%,#7c3aed 42%,#ec4899 82%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.dt-hero p{max-width:740px;margin:0 0 28px;font-size:15px;line-height:1.45;font-weight:780;color:#111066}.dt-capability-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.dt-capability{position:relative;min-height:158px;display:grid;grid-template-columns:minmax(118px,.72fr) minmax(138px,1fr);align-items:center;gap:8px;overflow:hidden;border-radius:20px;padding:20px 16px 18px 24px}.dt-cap-copy{position:relative;z-index:2;min-width:0}.dt-capability strong{display:block;font-size:36px;line-height:.9;font-weight:900;background:linear-gradient(100deg,#1b22c8,#7c3aed);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.dt-capability.pink strong{background:linear-gradient(100deg,#ec4899,#f43f8c);-webkit-background-clip:text;background-clip:text}.dt-capability.gold strong{background:linear-gradient(100deg,#f59e0b,#fbbf24);-webkit-background-clip:text;background-clip:text}.dt-capability h3{margin:12px 0 14px;font-size:15px;line-height:1.08;font-weight:900}.dt-capability h3 span,.dt-capability p span{display:block}.dt-capability p{margin:0;font-size:7.6px;line-height:1.52;font-weight:850;color:#111066}.dt-cap-icon{position:absolute;right:15px;top:15px;z-index:3;width:36px;height:36px;display:grid;place-items:center;border-radius:13px;color:#7c3aed;background:rgba(109,40,217,.09);box-shadow:inset 0 1px 0 rgba(255,255,255,.7)}
        .dt-cap-visual{position:relative;height:120px;min-width:142px;align-self:end}.cap-base{position:absolute;left:2px;right:4px;bottom:6px;height:32px;border-radius:50%;background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.86),rgba(168,85,247,.34) 58%,rgba(79,70,229,.38));box-shadow:0 16px 24px rgba(109,40,217,.2);transform:perspective(520px) rotateX(64deg)}.cap-object{position:absolute;bottom:36px;border-radius:10px;background:linear-gradient(155deg,#ddd6fe,#6d28d9 72%);box-shadow:inset -7px -8px 14px rgba(17,16,102,.2),0 12px 20px rgba(109,40,217,.14)}.cap-object.one{left:46px;width:54px;height:72px}.cap-object.two{left:100px;width:38px;height:52px}.cap-object.three{left:18px;width:30px;height:38px}.cap-icon{position:absolute;right:10px;top:18px;z-index:3;width:50px;height:50px;display:grid;place-items:center;border-radius:15px;color:white;background:linear-gradient(135deg,#6d28d9,#ec4899);box-shadow:0 14px 24px rgba(236,72,153,.22)}.dt-ai .cap-object.one{left:48px;bottom:31px;width:66px;height:84px;border-radius:50% 46% 42% 48%;background:radial-gradient(circle at 42% 24%,#fff 0 8%,#c4b5fd 27%,#8b5cf6 62%,#27109a 100%)}.dt-ai .cap-object.one:before{content:"AI";position:absolute;left:21px;top:31px;width:26px;height:26px;display:grid;place-items:center;border-radius:7px;border:2px solid rgba(255,255,255,.72);color:white;font-size:10px;font-weight:900}.dt-ai .cap-object.one:after{content:"";position:absolute;left:18px;top:17px;width:32px;height:43px;border-radius:50%;border:1px solid rgba(255,255,255,.38)}.dt-ai .cap-object.two,.dt-ai .cap-object.three{display:none}.dt-stack .cap-object.one{left:38px;bottom:45px;width:94px;height:58px;border-radius:10px;background:linear-gradient(155deg,#111066,#3328e7 76%)}.dt-stack .cap-object.one:after{content:"";position:absolute;inset:11px 12px;background:repeating-linear-gradient(180deg,#34d399 0 3px,transparent 3px 10px);opacity:.8}.dt-stack .cap-object.two{left:50px;bottom:31px;width:90px;height:20px;border-radius:8px;background:linear-gradient(135deg,#ddd6fe,#7c3aed)}.dt-stack .cap-object.three{display:none}.dt-stack .cap-icon{right:4px;top:28px}.dt-lowcode .cap-object.one{left:52px;bottom:39px;width:64px;height:64px;border-radius:12px;transform:rotate(-38deg);background:linear-gradient(135deg,#c084fc,#7c3aed)}.dt-lowcode .cap-object.two{left:106px;bottom:37px;width:42px;height:62px;border-radius:10px;background:linear-gradient(135deg,#38bdf8,#1b22c8)}.dt-lowcode .cap-object.three{left:34px;bottom:30px;width:34px;height:44px;border-radius:10px;background:linear-gradient(135deg,#ddd6fe,#6d28d9)}.dt-lowcode .cap-icon{right:2px;top:27px}
        .dt-showcase{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:18px;align-items:end;margin-top:24px}.dt-scene{position:relative;min-height:390px}.dt-scene-platform{position:absolute;left:0;right:10px;bottom:0;height:145px;border-radius:44px;background:radial-gradient(circle at 50% 30%,rgba(255,255,255,.78),rgba(124,58,237,.36) 62%,rgba(39,16,154,.55));box-shadow:0 30px 70px rgba(109,40,217,.28);transform:perspective(900px) rotateX(58deg)}.dt-cluster{position:absolute;z-index:2;border-radius:22px;padding:14px 16px;min-height:166px}.dt-cluster h3{margin:0 0 12px;font-size:13px;font-weight:900;color:#1b22c8}.dt-cluster.ai{left:42px;bottom:78px;width:31%}.dt-cluster.stack{left:34%;bottom:100px;width:34%}.dt-cluster.low{right:32px;bottom:88px;width:31%}.dt-cluster-board{display:grid;grid-template-columns:32px 1fr 1fr 1fr;gap:8px;align-items:center;color:#7c3aed}.dt-cluster-board i{height:30px;border-radius:8px;background:rgba(124,58,237,.16);border:1px solid rgba(124,58,237,.18)}.dt-desk{position:relative;display:block;height:88px;margin-top:10px;border-radius:18px;background:linear-gradient(135deg,rgba(255,255,255,.76),rgba(124,58,237,.14));box-shadow:inset 0 0 0 1px rgba(255,255,255,.65)}.dt-person{position:absolute;bottom:15px;width:28px;height:52px}.dt-person i{position:absolute;left:6px;top:0;width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#f8c7ad,#ec4899)}.dt-person b{position:absolute;left:0;bottom:0;width:30px;height:34px;border-radius:12px 12px 6px 6px;background:linear-gradient(135deg,#1b22c8,#7c3aed)}.dt-person.p1{left:18px}.dt-person.p2{right:20px}.monitor{position:absolute;bottom:26px;width:42px;height:27px;border-radius:5px;background:linear-gradient(135deg,#111066,#7c3aed);box-shadow:0 8px 16px rgba(109,40,217,.22)}.monitor.one{left:62px}.monitor.two{right:58px}.dt-team-core{position:absolute;left:50%;bottom:24px;z-index:4;width:122px;height:122px;display:grid;place-items:center;border-radius:50%;background:rgba(255,255,255,.34);border:1px solid rgba(255,255,255,.72);box-shadow:0 0 0 18px rgba(124,58,237,.12),0 20px 42px rgba(109,40,217,.22);transform:translateX(-50%)}.dt-team-core span{width:72px;height:72px;display:grid;place-items:center;border-radius:50%;color:white;background:linear-gradient(135deg,#6d28d9,#8b5cf6)}.dt-glow{position:absolute;border-radius:50%;background:rgba(236,72,153,.45);filter:blur(12px)}.dt-glow.g1{left:20%;bottom:40px;width:54px;height:54px}.dt-glow.g2{right:20%;bottom:54px;width:42px;height:42px}
        .dt-tower{position:relative;min-height:610px}.dt-tower-shell{position:absolute;left:48px;right:48px;top:10px;bottom:76px;border-radius:150px 150px 42px 42px;background:linear-gradient(180deg,rgba(255,255,255,.38),rgba(124,58,237,.09));border:2px solid rgba(255,255,255,.58);box-shadow:inset 0 0 35px rgba(124,58,237,.18),0 20px 60px rgba(109,40,217,.18)}.dt-tower-base{position:absolute;left:20px;right:20px;bottom:0;height:116px;border-radius:50%;background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.78),rgba(124,58,237,.38) 62%,rgba(39,16,154,.58));box-shadow:0 30px 70px rgba(109,40,217,.3);transform:perspective(760px) rotateX(62deg)}.dt-badge{position:absolute;left:50%;width:150px;min-height:95px;display:grid;place-items:center;text-align:center;padding:10px 12px 14px;border-radius:16px 16px 28px 28px;color:white;background:linear-gradient(180deg,#111066,#1b22c8 58%,#0f2f77);box-shadow:0 16px 28px rgba(17,16,102,.28);clip-path:polygon(0 0,100% 0,100% 76%,50% 100%,0 76%);transform:translateX(-50%)}.dt-badge small{font-size:7px;line-height:1.1;text-transform:uppercase;opacity:.82}.dt-badge strong{font-size:10px;line-height:1.1;text-transform:uppercase}.dt-badge b{font-size:8px;text-transform:uppercase}.dt-badge em{font-style:normal;color:#93c5fd}.dt-badge.b1{top:68px}.dt-badge.b2{top:204px}.dt-badge.b3{top:340px}.dt-badge.b4{top:476px}
        .dt-cert-card{min-height:780px;padding:30px;border-radius:28px}.dt-cert-head{display:grid;grid-template-columns:1fr 190px;gap:16px;align-items:start}.dt-cert-head h2{margin:0 0 16px;font-size:30px;line-height:1.1;font-weight:900;color:#1b22c8}.dt-cert-head p{margin:0;font-size:11px;line-height:1.55;font-weight:780;color:#111066}.dt-active-badge{position:relative;min-height:158px;text-align:center;color:white}.dt-active-badge:before{content:"";position:absolute;left:19px;right:19px;bottom:8px;height:32px;border-radius:50%;background:radial-gradient(circle at 50% 32%,rgba(255,255,255,.92),rgba(124,58,237,.42) 58%,rgba(39,16,154,.5));box-shadow:0 18px 30px rgba(109,40,217,.28);transform:perspective(420px) rotateX(63deg)}.dt-active-badge>i{position:absolute;left:50%;top:55px;z-index:1;width:130px;height:76px;border-radius:28px;background:rgba(255,255,255,.42);filter:blur(11px);transform:translateX(-50%)}.dt-active-shield{position:absolute;left:50%;top:0;z-index:4;width:76px;height:86px;display:grid;place-items:center;color:white;background:linear-gradient(180deg,#ffeaa6 0%,#d99b34 100%);clip-path:polygon(50% 0,92% 15%,88% 63%,50% 100%,12% 63%,8% 15%);filter:drop-shadow(0 12px 14px rgba(17,16,102,.22));transform:translateX(-50%)}.dt-active-shield:before{content:"";position:absolute;inset:7px;background:linear-gradient(155deg,#6932ef 0%,#7c3aed 52%,#32179f 100%);clip-path:inherit}.dt-active-shield svg{position:relative;z-index:1;width:35px;height:35px;stroke-width:3.5;filter:drop-shadow(0 4px 5px rgba(17,16,102,.25))}.dt-active-ribbon{position:absolute;left:50%;bottom:13px;z-index:2;width:146px;min-height:88px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:38px 8px 20px;border-radius:17px 17px 24px 24px;background:linear-gradient(135deg,#5622dd 0%,#8b5cf6 48%,#3c21bc 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 18px 28px rgba(109,40,217,.25);clip-path:polygon(0 0,100% 0,100% 74%,50% 100%,0 74%);transform:translateX(-50%)}.dt-active-ribbon:before,.dt-active-ribbon:after{content:"";position:absolute;top:19px;width:30px;height:36px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#4c1dce);box-shadow:inset 0 1px 0 rgba(255,255,255,.4);z-index:-1}.dt-active-ribbon:before{left:-17px}.dt-active-ribbon:after{right:-17px}.dt-active-ribbon strong{font-size:29px;line-height:.86;font-weight:900;text-shadow:0 5px 10px rgba(17,16,102,.25)}.dt-active-ribbon small{margin-top:5px;font-size:8px;line-height:1.05;font-weight:900;white-space:nowrap}.dt-table-wrap{margin-top:20px;border-radius:18px;overflow:hidden;border:1px solid rgba(109,40,217,.14);background:rgba(255,255,255,.35)}.dt-table-wrap table{width:100%;border-collapse:collapse}.dt-table-wrap th{height:42px;padding:0 14px;color:white;background:linear-gradient(90deg,#4218dc,#8b5cf6);font-size:11px;text-align:left}.dt-table-wrap th:first-child,.dt-table-wrap td:first-child{text-align:center;width:52px}.dt-table-wrap th:nth-child(2),.dt-table-wrap td:nth-child(2){width:58px}.dt-table-wrap th:last-child,.dt-table-wrap td:last-child{text-align:center;width:62px}.dt-table-wrap td{height:48px;padding:0 14px;border-top:1px solid rgba(109,40,217,.1);font-size:11px;font-weight:850;color:#111066}.dt-cert-icon{width:34px;height:34px;display:grid;place-items:center;border-radius:50%;color:white;background:#1b22c8;font-size:9px;font-weight:900}.dt-cert-icon.pp{background:#008272}.dt-cert-icon.pm{background:#38bdf8}.dt-cert-icon.csm{background:#111066}.dt-cert-icon.ai{background:#7c3aed}.dt-cert-icon.py{background:#f59e0b}.dt-cert-icon.data{background:linear-gradient(135deg,#f59e0b,#7c3aed)}.dt-cert-icon.ibm{background:#eef2ff;color:#312e81;font-size:10px}.dt-cert-icon.az{background:#0078d4}.dt-active{width:26px;height:26px;display:grid;place-items:center;margin:auto;border-radius:50%;color:#059669;background:#d1fae5;border:1px solid rgba(16,185,129,.25)}
        .dt-bottom{display:grid;grid-template-columns:minmax(760px,1fr) 420px 430px;gap:18px;align-items:stretch;margin-top:18px}.dt-stats{min-height:90px;display:grid;grid-template-columns:repeat(6,1fr);align-items:center;overflow:hidden;border-radius:20px}.dt-stat{display:grid;grid-template-columns:32px 1fr;grid-template-rows:auto auto;column-gap:10px;align-items:center;padding:0 18px;border-left:1px solid rgba(109,40,217,.14)}.dt-stat:first-child{border-left:0}.dt-stat svg{grid-row:1/3;color:#6d28d9}.dt-stat b{font-size:18px;line-height:1;font-weight:900}.dt-stat small{font-size:7px;line-height:1.08;font-weight:850;color:#312e81}.dt-cta{min-height:90px;display:flex;align-items:center;justify-content:space-between;border:0;border-radius:20px;padding:0 34px;color:white;text-align:left;background:linear-gradient(115deg,#3328e7 0%,#7c3aed 45%,#ec4899 100%);box-shadow:0 22px 45px rgba(236,72,153,.25);font-size:22px;line-height:1.22;font-weight:900}.dt-contact{min-height:90px;display:grid;grid-template-columns:1fr 86px;gap:14px;align-items:center;padding:12px 16px;border-radius:20px}.dt-contact div{display:grid;gap:10px}.dt-contact span{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:900;color:#1b22c8}.dt-qr{width:82px;height:82px;display:grid;grid-template-columns:repeat(8,1fr);gap:3px;padding:7px;border:4px solid white;border-radius:9px;background:white}.dt-qr i{background:#111066}.dt-qr i:nth-child(2n),.dt-qr i:nth-child(5n),.dt-qr i:nth-child(11n),.dt-qr i:nth-child(17n){background:transparent}
        @media(max-width:1500px){.dt-page{padding:18px 12px 22px}.dt-header{grid-template-columns:270px minmax(590px,1fr) 330px;gap:12px}.dt-brand img{width:54px;height:54px}.dt-brand strong{font-size:25px}.dt-brand small{font-size:10px}.dt-value-pill{padding:0 10px;grid-template-columns:27px 1fr}.dt-value-pill b{font-size:8.8px}.dt-value-pill small{font-size:6.4px}.dt-main{grid-template-columns:minmax(0,1fr) 470px;gap:12px}.dt-hero h1{font-size:55px}.dt-hero p{font-size:13px;margin-bottom:22px}.dt-capability-grid{gap:12px}.dt-capability{min-height:164px;padding:18px}.dt-capability strong{font-size:36px}.dt-capability h3{font-size:15px}.dt-showcase{grid-template-columns:minmax(0,1fr) 270px;gap:10px}.dt-scene{min-height:350px}.dt-cluster{min-height:145px}.dt-tower{min-height:540px}.dt-badge{width:128px;min-height:84px}.dt-badge.b1{top:55px}.dt-badge.b2{top:174px}.dt-badge.b3{top:293px}.dt-badge.b4{top:412px}.dt-cert-card{min-height:710px;padding:24px}.dt-cert-head{grid-template-columns:1fr 154px}.dt-cert-head h2{font-size:26px}.dt-cert-head p{font-size:9.5px}.dt-table-wrap td{height:43px;font-size:9.5px}.dt-bottom{grid-template-columns:minmax(650px,1fr) 340px 350px;gap:12px}.dt-stat{padding:0 12px}.dt-cta{font-size:18px;padding:0 28px}.dt-contact span{font-size:10.5px}}
        @media(max-width:1180px){.dt-header,.dt-main,.dt-showcase,.dt-bottom{grid-template-columns:1fr}.dt-value-bar{grid-template-columns:repeat(3,1fr)}.dt-partners{max-width:620px}.dt-capability-grid{grid-template-columns:repeat(3,1fr)}.dt-tower{min-height:560px;max-width:360px;margin:0 auto}.dt-cert-card{min-height:auto}.dt-stats{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:820px){.dt-page{padding:16px 12px 22px}.dt-value-bar,.dt-capability-grid,.dt-stats{grid-template-columns:1fr}.dt-partners{grid-template-columns:1fr 1fr}.dt-brand strong{font-size:22px}.dt-hero h1{font-size:44px}.dt-capability{grid-template-columns:1fr}.dt-scene{min-height:780px;display:grid;gap:14px}.dt-scene-platform,.dt-team-core,.dt-glow{display:none}.dt-cluster{position:relative;left:auto!important;right:auto!important;bottom:auto!important;width:100%!important}.dt-cert-head{grid-template-columns:1fr}.dt-table-wrap{overflow:auto}.dt-table-wrap table{min-width:620px}.dt-contact{grid-template-columns:1fr}.dt-qr{justify-self:start}}
        @media(max-width:540px){.dt-partners{grid-template-columns:1fr}.dt-value-pill{border-left:0;border-top:1px solid rgba(109,40,217,.12);padding:12px}.dt-value-pill:first-child{border-top:0}.dt-bottom{gap:12px}.dt-cta{min-height:112px;padding:20px;font-size:18px}.dt-stat{min-height:72px;border-left:0;border-top:1px solid rgba(109,40,217,.12)}.dt-stat:first-child{border-top:0}}
      `}</style>

      <div className="dt-shell">
        <TopHeader />
        <div className="dt-main">
          <div className="dt-left">
            <HeroSection />
            <div className="dt-showcase">
              <DevelopmentTeamScene />
              <CertificationTower />
            </div>
          </div>
          <CertificationPanel />
        </div>
        <BottomArea />
      </div>
    </section>
  );
}
