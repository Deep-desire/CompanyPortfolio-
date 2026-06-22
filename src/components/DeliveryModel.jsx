import { motion } from 'framer-motion';
import {
  AlertCircle,
  AlertTriangle,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  Gauge,
  Globe2,
  LifeBuoy,
  Mail,
  MessageCircle,
  PenTool,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Smile,
  Target,
  TrendingUp,
  UserRound,
  UsersRound,
} from 'lucide-react';

const headerValues = [
  { icon: ClipboardList, title: 'Structured', label: 'Delivery Process' },
  { icon: MessageCircle, title: 'Transparent', label: 'Communication' },
  { icon: Gauge, title: 'Agile', label: 'Execution' },
  { icon: ShieldCheck, title: 'Quality', label: 'Assured' },
  { icon: Clock3, title: 'On-time', label: 'Delivery' },
  { icon: Smile, title: 'Client', label: 'Satisfaction' },
];

const lifecycleCards = [
  {
    no: '01',
    title: 'Pre-Project',
    tone: 'purple',
    icon: ClipboardList,
    items: ['Requirements workshop', 'Architecture design\nFigma wireframes', 'Scope document', 'Client sign-off'],
    note: 'Development only commences after written approval.',
    visual: 'pre',
  },
  {
    no: '02',
    title: 'Design & Architecture',
    tone: 'purple',
    icon: PenTool,
    items: ['Detailed technical architecture\nand UI/UX wireframes', 'Presented and reviewed\nby client', 'Prior to any development\ncommencement'],
    visual: 'design',
  },
  {
    no: '03',
    title: 'Delivery',
    tone: 'pink',
    icon: Rocket,
    items: ['Agile sprint-based execution', 'Milestone reviews', 'Regular progress updates', 'Dedicated communication channel\nTeams / Slack / email'],
    visual: 'delivery',
  },
  {
    no: '04',
    title: 'Post-Project',
    tone: 'orange',
    icon: LifeBuoy,
    items: ['Defined warranty period\nfor bug fixes', 'Knowledge transfer\ndocumentation', 'Optional ongoing support\narrangements'],
    visual: 'post',
  },
];

const slaCards = [
  { icon: AlertTriangle, time: '4', label: 'Critical\nIssues', tone: 'red' },
  { icon: AlertCircle, time: '8', label: 'High\nPriority', tone: 'orange' },
  { icon: Clock3, time: '24', label: 'Medium\nPriority', tone: 'blue' },
  { icon: CheckCircle2, time: '48', label: 'Low\nPriority', tone: 'green' },
];

const principles = [
  { icon: UsersRound, title: 'Client First\nApproach' },
  { icon: MessageCircle, title: 'Clear & Open\nCommunication' },
  { icon: ShieldCheck, title: 'Quality & Security\nFocused' },
  { icon: Clock3, title: 'On-time\nEvery Time' },
  { icon: TrendingUp, title: 'Continuous\nImprovement' },
];

const metrics = [
  { icon: Target, value: '98%+', label: 'On-time Delivery' },
  { icon: TrendingUp, value: '99.5%', label: 'Client Satisfaction' },
  { icon: ShieldCheck, value: '100%', label: 'Quality Assurance' },
  { icon: UsersRound, value: '50+', label: 'Experts & Engineers' },
];

const timeline = [
  'Requirement\nGathering',
  'Analysis &\nPlanning',
  'Design &\nArchitecture',
  'Development\n(Sprint)',
  'Testing & QA',
  'Client Review &\nFeedback',
  'Deployment',
  'Support &\nEnhancement',
];

function GlassCard({ className = '', children }) {
  return <div className={`dm-glass ${className}`}>{children}</div>;
}

function MicrosoftMark() {
  return (
    <span className="dm-ms-mark" aria-hidden="true">
      <i style={{ background: '#f35325' }} />
      <i style={{ background: '#81bc06' }} />
      <i style={{ background: '#05a6f0' }} />
      <i style={{ background: '#ffba08' }} />
    </span>
  );
}

function M365Mark() {
  return <span className="dm-m365-mark" aria-hidden="true"><i /></span>;
}

function HeaderValuePill({ icon: Icon, title, label }) {
  return (
    <span className="dm-value-pill">
      <Icon size={24} aria-hidden="true" />
      <b>{title}</b>
      <small>{label}</small>
    </span>
  );
}

function PartnerBadge({ type }) {
  return (
    <GlassCard className="dm-partner">
      {type === 'microsoft' ? <MicrosoftMark /> : <M365Mark />}
      <span>{type === 'microsoft' ? 'Microsoft' : 'Built on'}<br />{type === 'microsoft' ? 'Solutions Partner' : 'Microsoft 365'}</span>
    </GlassCard>
  );
}

function TopHeader() {
  return (
    <motion.header className="dm-header" initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
      <div className="dm-brand">
        <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
        <span><strong>DesireInfoWeb</strong><small>Your Extended <b>Technology Partner</b></small></span>
      </div>
      <GlassCard className="dm-value-bar">
        {headerValues.map((item) => <HeaderValuePill key={item.title} {...item} />)}
      </GlassCard>
      <div className="dm-partners">
        <PartnerBadge type="microsoft" />
        <PartnerBadge type="m365" />
      </div>
    </motion.header>
  );
}

function GovernanceIllustration() {
  return (
    <motion.div className="dm-hero-art" aria-hidden="true" animate={{ y: [0, -7, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
      <span className="dm-art-base" />
      <span className="dm-art-gear"><ShieldCheck size={30} /></span>
      <span className="dm-art-card left"><ClipboardList size={20} /></span>
      <span className="dm-art-card right"><BarChart3 size={20} /></span>
      <span className="dm-monitor">
        <i className="dm-monitor-top" />
        <i className="dm-chart b1" />
        <i className="dm-chart b2" />
        <i className="dm-chart b3" />
        <i className="dm-chart b4" />
        <span><Check size={42} /></span>
      </span>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <motion.section className="dm-hero" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <div>
        <h1>Delivery Model & Project <span>Governance</span></h1>
        <p>Our delivery process is structured, transparent, and built for reliability, ensuring every engagement moves smoothly from requirement to result.</p>
        <strong className="dm-notice"><ShieldCheck size={24} aria-hidden="true" />Development only commences after written client sign-off.</strong>
      </div>
      <GovernanceIllustration />
    </motion.section>
  );
}

function ItemText({ text }) {
  return text.split('\n').map((line) => <span key={line}>{line}</span>);
}

function LifecycleVisual({ type }) {
  return (
    <div className={`dm-life-visual dm-${type}`} aria-hidden="true">
      <span className="dm-life-base" />
      <span className="dm-v-screen main" />
      <span className="dm-v-screen side" />
      <span className="dm-v-badge" />
      <span className="dm-v-people">
        <i /><i /><i />
      </span>
    </div>
  );
}

function LifecycleCard({ no, title, tone, icon: Icon, items, note, visual }) {
  return (
    <GlassCard className={`dm-life-card ${tone}`}>
      <div className="dm-life-head">
        <span>{no}</span>
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Icon size={15} aria-hidden="true" />
            <b><ItemText text={item} /></b>
          </li>
        ))}
      </ul>
      {note && <p className="dm-life-note">{note}</p>}
      <LifecycleVisual type={visual} />
    </GlassCard>
  );
}

function LifecycleArrow({ tone = 'purple' }) {
  return (
    <span className={`dm-life-arrow ${tone}`} aria-hidden="true">
      <ChevronRight size={36} />
      <ChevronRight size={36} />
    </span>
  );
}

function ProjectLifecycle() {
  return (
    <section className="dm-lifecycle">
      <span className="dm-section-badge">PROJECT LIFECYCLE</span>
      <div className="dm-life-grid">
        {lifecycleCards.map((card, index) => (
          <div className="dm-life-slot" key={card.no}>
            <LifecycleCard {...card} />
            {index < lifecycleCards.length - 1 && <LifecycleArrow tone={index === 2 ? 'pink' : 'purple'} />}
          </div>
        ))}
      </div>
    </section>
  );
}

function SLACard({ icon: Icon, time, label, tone }) {
  return (
    <GlassCard className={`dm-sla-card ${tone}`}>
      <Icon size={28} aria-hidden="true" />
      <strong>{time}</strong>
      <small>Hours</small>
      <b><ItemText text={label} /></b>
    </GlassCard>
  );
}

function EscalationPath() {
  return (
    <div className="dm-escalation">
      <h3>Escalation Path</h3>
      <div className="dm-escalation-row">
        <span><i><UserRound size={30} /></i><b>Project<br />Manager</b></span>
        <ChevronRight size={30} />
        <span><i><UserRound size={30} /></i><b>Delivery<br />Lead</b></span>
        <ChevronRight size={30} />
        <span><i className="ceo"><UserRound size={30} /></i><b>CEO<br />(Vijay Patel)</b></span>
      </div>
    </div>
  );
}

function CommunicationCard({ icon: Icon, label, tone }) {
  return (
    <GlassCard className={`dm-comm ${tone}`}>
      <Icon size={30} aria-hidden="true" />
      <b>{label}</b>
    </GlassCard>
  );
}

function SLAPanel() {
  return (
    <motion.aside className="dm-sla-panel" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <GlassCard className="dm-sla-shell">
        <h2>SLA & Support Structure</h2>
        <div className="dm-sla-grid">
          {slaCards.map((card) => <SLACard key={card.label} {...card} />)}
        </div>
        <EscalationPath />
        <GlassCard className="dm-comm-note">
          <MessageCircle size={34} aria-hidden="true" />
          <p>All projects include a dedicated communication channel (Microsoft Teams, Slack, or email) and weekly status reports as standard.</p>
        </GlassCard>
        <div className="dm-comm-grid">
          <CommunicationCard icon={UsersRound} label="Teams" tone="teams" />
          <CommunicationCard icon={Send} label="Slack" tone="slack" />
          <CommunicationCard icon={Mail} label="Email" tone="email" />
        </div>
      </GlassCard>
    </motion.aside>
  );
}

function DeliveryPrinciples() {
  return (
    <GlassCard className="dm-principles">
      <h3>OUR DELIVERY PRINCIPLES</h3>
      <div>
        {principles.map(({ icon: Icon, title }) => (
          <span key={title} className="dm-principle-item">
            <Icon size={34} aria-hidden="true" />
            <b><ItemText text={title} /></b>
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

function PerformanceMetrics() {
  return (
    <GlassCard className="dm-metrics">
      <h3>DELIVERY PERFORMANCE METRICS</h3>
      <div>
        {metrics.map(({ icon: Icon, value, label }) => (
          <GlassCard className="dm-metric" key={label}>
            <Icon size={30} aria-hidden="true" />
            <strong>{value}</strong>
            <small>{label}</small>
          </GlassCard>
        ))}
      </div>
    </GlassCard>
  );
}

function CTASection() {
  return (
    <button className="dm-cta" type="button">
      <span>Building Success<br />Through Reliable Delivery</span>
      <b>Let's Build Together <ChevronRight size={16} /></b>
      <i aria-hidden="true"><UsersRound size={54} /></i>
    </button>
  );
}

function QRPlaceholder() {
  return (
    <span className="dm-qr" aria-label="QR code placeholder">
      {Array.from({ length: 64 }).map((_, index) => <i key={index} />)}
    </span>
  );
}

function ContactCard() {
  return (
    <GlassCard className="dm-contact">
      <div>
        <span><Globe2 size={20} aria-hidden="true" />www.desireinfoweb.com</span>
        <span><Mail size={20} aria-hidden="true" />vijay@desireinfoweb.com</span>
        <span><Phone size={20} aria-hidden="true" />+91-8780468807</span>
      </div>
      <QRPlaceholder />
    </GlassCard>
  );
}

function BottomGovernance() {
  return (
    <section className="dm-bottom">
      <DeliveryPrinciples />
      <PerformanceMetrics />
      <CTASection />
      <ContactCard />
    </section>
  );
}

function ProcessTimeline() {
  return (
    <GlassCard className="dm-timeline">
      {timeline.map((step, index) => (
        <span className={index === timeline.length - 1 ? 'last' : ''} key={step}>
          <i />
          <b><ItemText text={step} /></b>
        </span>
      ))}
    </GlassCard>
  );
}

export default function DeliveryModel() {
  return (
    <section className="dm-page" id="delivery-model">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .dm-page,.dm-page *{box-sizing:border-box}.dm-page{--ink:#111066;--blue:#1b22c8;--purple:#6d28d9;--violet:#7c3aed;--pink:#ec4899;--hot:#f43f8c;--orange:#f59e0b;--green:#10b981;position:relative;isolation:isolate;min-height:100vh;overflow:hidden;padding:24px clamp(14px,1.7vw,32px) 18px;color:var(--ink);font-family:"Inter","Plus Jakarta Sans","Manrope",system-ui,sans-serif;background:radial-gradient(circle at 21% 34%,rgba(124,58,237,.16),transparent 28%),radial-gradient(circle at 67% 9%,rgba(236,72,153,.12),transparent 24%),radial-gradient(circle at 88% 78%,rgba(56,189,248,.12),transparent 26%),linear-gradient(135deg,#fbfaff 0%,#f7f2ff 50%,#fff7fd 100%)}.dm-page:before{content:"";position:absolute;inset:0;z-index:-2;background:radial-gradient(circle at 58% 13%,rgba(255,255,255,.9),transparent 22%),linear-gradient(90deg,rgba(109,40,217,.035) 1px,transparent 1px),linear-gradient(0deg,rgba(109,40,217,.03) 1px,transparent 1px);background-size:auto,76px 76px,76px 76px}.dm-shell{width:min(100%,1840px);margin:0 auto;position:relative;z-index:1}.dm-glass{background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.52));border:1px solid rgba(255,255,255,.76);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 62px rgba(109,40,217,.14),0 0 0 1px rgba(130,94,255,.1);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
        .dm-header{display:grid;grid-template-columns:330px minmax(760px,1fr) 380px;gap:16px;align-items:center;margin-bottom:28px}.dm-brand{display:flex;align-items:center;gap:11px;min-width:0}.dm-brand img{width:64px;height:64px;object-fit:contain;filter:drop-shadow(0 16px 24px rgba(109,40,217,.13))}.dm-brand strong{display:block;font-size:30px;line-height:.96;font-weight:900;letter-spacing:-.02em}.dm-brand small{display:block;margin-top:3px;font-size:12px;line-height:1;font-weight:900;color:#1b22c8}.dm-brand small b{color:#ec4899}.dm-value-bar{min-height:70px;display:grid;grid-template-columns:repeat(6,1fr);align-items:center;border-radius:20px;overflow:hidden}.dm-value-pill{display:grid;grid-template-columns:30px 1fr;grid-template-rows:auto auto;column-gap:9px;align-items:center;min-height:52px;padding:0 12px;border-left:1px solid rgba(109,40,217,.14)}.dm-value-pill:first-child{border-left:0}.dm-value-pill svg{grid-row:1/3;color:#6d28d9;stroke-width:2.25}.dm-value-pill b{font-size:10px;line-height:1.05;font-weight:900}.dm-value-pill small{font-size:7px;line-height:1.05;font-weight:850;color:#312e81}.dm-partners{display:grid;grid-template-columns:1fr 1fr;gap:13px}.dm-partner{min-height:70px;display:flex;align-items:center;justify-content:center;gap:12px;border-radius:20px;padding:10px 12px}.dm-partner span:last-child{font-size:11px;line-height:1.08;font-weight:900}.dm-ms-mark{width:30px;height:30px;display:grid;grid-template-columns:1fr 1fr;gap:3px}.dm-ms-mark i{border-radius:1px}.dm-m365-mark{width:40px;height:40px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(from 35deg,#1b22c8,#7c3aed,#38bdf8,#1b22c8)}.dm-m365-mark i{width:22px;height:22px;border-radius:9px;background:rgba(255,255,255,.72);transform:rotate(45deg)}
        .dm-main{display:grid;grid-template-columns:minmax(0,1fr) 430px;gap:26px;align-items:start}.dm-hero{display:grid;grid-template-columns:minmax(0,1fr) 410px;gap:22px;align-items:center;margin-bottom:28px}.dm-hero h1{margin:0 0 18px;font-size:clamp(48px,3.9vw,76px);line-height:.98;font-weight:900;letter-spacing:-.025em}.dm-hero h1 span{background:linear-gradient(100deg,#1b22c8 0%,#7c3aed 36%,#ec4899 86%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.dm-hero p{max-width:760px;margin:0 0 20px;font-size:16px;line-height:1.45;font-weight:760}.dm-notice{display:flex;align-items:center;gap:12px;color:#ec4899;font-size:16px;font-weight:900}.dm-notice svg{color:#6d28d9}.dm-hero-art{position:relative;min-height:220px}.dm-art-base{position:absolute;left:18px;right:10px;bottom:0;height:86px;border-radius:50%;background:radial-gradient(circle at 50% 33%,rgba(255,255,255,.86),rgba(168,85,247,.38) 58%,rgba(39,16,154,.55));box-shadow:0 22px 46px rgba(109,40,217,.26);transform:perspective(760px) rotateX(62deg)}.dm-monitor{position:absolute;left:92px;top:26px;width:218px;height:128px;border-radius:18px;background:linear-gradient(145deg,#111066,#3328e7 74%);box-shadow:inset 0 0 0 5px rgba(255,255,255,.22),0 28px 42px rgba(109,40,217,.26)}.dm-monitor-top{position:absolute;left:15px;right:15px;top:14px;height:8px;border-radius:99px;background:rgba(255,255,255,.28)}.dm-chart{position:absolute;bottom:25px;width:16px;border-radius:5px;background:linear-gradient(180deg,#ec4899,#8b5cf6)}.dm-chart.b1{left:31px;height:30px}.dm-chart.b2{left:56px;height:50px}.dm-chart.b3{left:81px;height:38px}.dm-chart.b4{left:106px;height:66px}.dm-monitor span{position:absolute;right:23px;top:36px;width:62px;height:62px;display:grid;place-items:center;border-radius:18px;color:white;background:linear-gradient(135deg,#ec4899,#7c3aed);box-shadow:0 12px 22px rgba(236,72,153,.26)}.dm-art-gear{position:absolute;left:48px;bottom:58px;width:58px;height:58px;display:grid;place-items:center;border-radius:20px;color:white;background:linear-gradient(135deg,#6d28d9,#8b5cf6);box-shadow:0 15px 26px rgba(109,40,217,.24)}.dm-art-card{position:absolute;width:54px;height:76px;display:grid;place-items:center;border-radius:14px;color:#6d28d9;background:rgba(255,255,255,.55);border:1px solid rgba(255,255,255,.78);box-shadow:0 14px 26px rgba(109,40,217,.16)}.dm-art-card.left{left:40px;top:42px}.dm-art-card.right{right:20px;top:74px}
        .dm-lifecycle{position:relative;padding-top:18px}.dm-section-badge{position:absolute;left:50%;top:0;z-index:5;min-width:280px;height:38px;display:grid;place-items:center;border-radius:8px;color:white;background:linear-gradient(90deg,#5127e8,#7c3aed);box-shadow:0 12px 24px rgba(109,40,217,.28);transform:translateX(-50%);font-size:14px;font-weight:900}.dm-life-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}.dm-life-slot{position:relative;min-width:0}.dm-life-card{position:relative;min-height:470px;padding:34px 26px 18px;border-radius:24px;overflow:hidden}.dm-life-head{display:flex;align-items:center;gap:15px;margin-bottom:20px}.dm-life-head span{width:48px;height:48px;display:grid;place-items:center;border-radius:10px;color:white;background:linear-gradient(135deg,#5127e8,#8b5cf6);box-shadow:0 12px 22px rgba(109,40,217,.25);font-size:20px;font-weight:900}.dm-life-card.pink .dm-life-head span{background:linear-gradient(135deg,#ec4899,#f43f8c)}.dm-life-card.orange .dm-life-head span{background:linear-gradient(135deg,#f59e0b,#fbbf24)}.dm-life-card h3{margin:0;font-size:18px;line-height:1.1;font-weight:900}.dm-life-card ul{display:grid;gap:13px;margin:0;padding:0;list-style:none}.dm-life-card li{display:grid;grid-template-columns:19px 1fr;gap:10px;align-items:start;font-size:9.8px;line-height:1.25;font-weight:850}.dm-life-card li svg{margin-top:-1px;color:#6d28d9}.dm-life-card.pink li svg{color:#ec4899}.dm-life-card.orange li svg{color:#f59e0b}.dm-life-card li span{display:block}.dm-life-note{width:118px;margin:18px 0 0;font-size:8.4px;line-height:1.35;font-weight:850;color:#312e81}.dm-life-arrow{position:absolute;right:-34px;top:48%;z-index:6;display:flex;color:#7c3aed;filter:drop-shadow(0 10px 12px rgba(109,40,217,.22));transform:translateY(-50%)}.dm-life-arrow svg+svg{margin-left:-23px}.dm-life-arrow.pink{color:#ec4899}.dm-life-visual{position:absolute;left:16px;right:16px;bottom:12px;height:190px}.dm-life-base{position:absolute;left:0;right:0;bottom:2px;height:62px;border-radius:50%;background:radial-gradient(circle at 50% 30%,rgba(255,255,255,.85),rgba(168,85,247,.38) 58%,rgba(39,16,154,.5));box-shadow:0 18px 34px rgba(109,40,217,.24);transform:perspective(560px) rotateX(62deg)}.dm-v-screen{position:absolute;border-radius:11px;background:linear-gradient(145deg,#1f1b68,#7c3aed);box-shadow:inset 0 0 0 3px rgba(255,255,255,.22),0 16px 24px rgba(109,40,217,.2)}.dm-v-screen.main{left:42px;bottom:48px;width:112px;height:78px}.dm-v-screen.side{right:25px;bottom:63px;width:64px;height:86px;background:linear-gradient(145deg,#a78bfa,#ec4899)}.dm-v-screen:after{content:"";position:absolute;inset:15px;background:repeating-linear-gradient(180deg,rgba(255,255,255,.8) 0 3px,transparent 3px 11px);opacity:.5}.dm-v-badge{position:absolute;right:54px;bottom:58px;width:48px;height:48px;border-radius:16px;background:linear-gradient(135deg,#6d28d9,#8b5cf6);box-shadow:0 16px 24px rgba(109,40,217,.24)}.dm-v-badge:after{content:"";position:absolute;left:15px;top:10px;width:15px;height:24px;border:solid white;border-width:0 5px 5px 0;transform:rotate(45deg)}.dm-v-people{position:absolute;left:96px;bottom:42px;display:flex;gap:8px}.dm-v-people i{width:18px;height:34px;border-radius:10px 10px 5px 5px;background:linear-gradient(180deg,#f6c6a8,#7c3aed)}.dm-design .dm-v-screen.main{left:24px;width:132px;height:86px}.dm-design .dm-v-screen.side{right:18px;width:86px;height:98px}.dm-design .dm-v-badge{right:90px;bottom:52px;background:linear-gradient(135deg,#ec4899,#f59e0b)}.dm-delivery .dm-v-screen{border-radius:50%;background:conic-gradient(#ec4899,#7c3aed,#ec4899);box-shadow:0 16px 32px rgba(236,72,153,.25)}.dm-delivery .dm-v-screen.main{left:62px;bottom:66px;width:108px;height:108px}.dm-delivery .dm-v-screen.main:before{content:"AGILE SPRINT";position:absolute;inset:24px;display:grid;place-items:center;border-radius:50%;background:white;color:#1b22c8;font-size:12px;font-weight:900;text-align:center}.dm-delivery .dm-v-screen.side{right:22px;width:58px;height:86px}.dm-post .dm-v-screen.main{left:76px;width:94px;height:110px;clip-path:polygon(50% 0,92% 18%,84% 70%,50% 100%,16% 70%,8% 18%)}.dm-post .dm-v-screen.side{right:38px;width:84px}.dm-post .dm-v-badge{left:34px;right:auto;bottom:54px;background:linear-gradient(135deg,#111066,#7c3aed)}
        .dm-sla-shell{padding:0 22px 22px;border-radius:24px;overflow:hidden;min-height:636px}.dm-sla-shell h2{margin:0 -22px 18px;height:50px;display:grid;place-items:center;color:white;background:linear-gradient(90deg,#5127e8,#7c3aed);font-size:16px;font-weight:900}.dm-sla-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.dm-sla-card{min-height:160px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border-radius:14px;padding:10px 6px}.dm-sla-card svg{margin-bottom:10px}.dm-sla-card strong{font-size:28px;line-height:1;font-weight:900;color:#111}.dm-sla-card small{font-size:12px;font-weight:850;color:#111}.dm-sla-card b{width:100%;margin-top:14px;padding-top:12px;border-top:1px solid rgba(109,40,217,.12);font-size:10px;line-height:1.18;color:#111066}.dm-sla-card b span{display:block}.dm-sla-card.red svg{color:#e11d48}.dm-sla-card.orange svg{color:#f59e0b}.dm-sla-card.blue svg{color:#3328e7}.dm-sla-card.green svg{color:#16a34a}.dm-escalation{margin-top:24px;text-align:center}.dm-escalation h3{display:flex;align-items:center;gap:14px;margin:0 0 16px;font-size:15px;font-weight:900;color:#1b22c8}.dm-escalation h3:before,.dm-escalation h3:after{content:"";height:1px;flex:1;background:rgba(109,40,217,.18)}.dm-escalation-row{display:grid;grid-template-columns:1fr 30px 1fr 30px 1fr;align-items:start;color:#6d28d9}.dm-escalation-row span{display:grid;justify-items:center;gap:8px}.dm-escalation-row i{width:68px;height:68px;display:grid;place-items:center;border-radius:50%;color:#6d28d9;background:linear-gradient(180deg,rgba(255,255,255,.86),rgba(124,58,237,.12));border:1px solid rgba(255,255,255,.78);box-shadow:0 14px 26px rgba(109,40,217,.16)}.dm-escalation-row i.ceo{background:radial-gradient(circle at 50% 28%,#f4c7aa 0 18%,#111066 19% 35%,#f6f1ff 36%)}.dm-escalation-row b{font-size:10px;line-height:1.18;color:#111066}.dm-comm-note{display:grid;grid-template-columns:42px 1fr;gap:14px;align-items:center;margin-top:18px;padding:20px;border-radius:18px}.dm-comm-note svg{color:#6d28d9}.dm-comm-note p{margin:0;font-size:12px;line-height:1.42;font-weight:830}.dm-comm-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:14px}.dm-comm{min-height:94px;display:grid;place-items:center;border-radius:16px;text-align:center;color:#6d28d9}.dm-comm b{font-size:11px;font-weight:900;color:#111066}.dm-comm.slack svg{color:#ec4899}.dm-comm.email svg{color:#1b22c8}
        .dm-bottom{display:grid;grid-template-columns:minmax(500px,1.08fr) minmax(470px,1fr) 360px 370px;gap:14px;align-items:stretch;margin-top:18px}.dm-principles,.dm-metrics{min-height:142px;padding:14px;border-radius:18px}.dm-principles h3,.dm-metrics h3{margin:0 0 10px;text-align:center;font-size:12px;font-weight:900;color:#1b22c8}.dm-principles>div{display:grid;grid-template-columns:repeat(5,1fr);height:92px}.dm-principle-item{display:grid;grid-template-rows:40px auto;place-items:center;text-align:center;border-left:1px solid rgba(109,40,217,.14);color:#6d28d9}.dm-principle-item:first-child{border-left:0}.dm-principle-item b{font-size:8.6px;line-height:1.15;color:#111066}.dm-principle-item span{display:block}.dm-metrics>div{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.dm-metric{min-height:92px;display:grid;place-items:center;text-align:center;border-radius:12px;color:#6d28d9;padding:8px}.dm-metric strong{font-size:18px;line-height:1;font-weight:900;color:#111066}.dm-metric small{font-size:8px;font-weight:850;color:#312e81}.dm-cta{position:relative;overflow:hidden;min-height:142px;border:0;border-radius:18px;padding:20px 22px;text-align:left;color:white;background:linear-gradient(120deg,#3328e7,#7c3aed 47%,#ec4899);box-shadow:0 22px 45px rgba(236,72,153,.25);cursor:pointer}.dm-cta span{position:relative;z-index:1;display:block;font-size:20px;line-height:1.15;font-weight:900}.dm-cta b{position:relative;z-index:1;margin-top:18px;width:max-content;display:flex;align-items:center;gap:7px;padding:10px 18px;border-radius:12px;color:#4218dc;background:white;font-size:10px;font-weight:900}.dm-cta i{position:absolute;right:18px;bottom:14px;width:86px;height:86px;display:grid;place-items:center;border-radius:50%;color:white;background:rgba(255,255,255,.18)}.dm-contact{min-height:142px;display:grid;grid-template-columns:1fr 94px;gap:14px;align-items:center;padding:16px;border-radius:18px}.dm-contact div{display:grid;gap:12px}.dm-contact span{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:900;color:#1b22c8}.dm-qr{width:88px;height:88px;display:grid;grid-template-columns:repeat(8,1fr);gap:3px;padding:7px;border:4px solid white;border-radius:9px;background:white}.dm-qr i{background:#111066}.dm-qr i:nth-child(2n),.dm-qr i:nth-child(5n),.dm-qr i:nth-child(11n),.dm-qr i:nth-child(17n){background:transparent}.dm-timeline{position:relative;min-height:76px;display:grid;grid-template-columns:repeat(8,1fr);align-items:start;margin:18px auto 0;padding:24px 24px 12px;border-radius:18px;width:calc(100% - 70px);overflow:hidden}.dm-timeline:before{content:"";position:absolute;left:54px;right:54px;top:26px;height:4px;border-radius:99px;background:linear-gradient(90deg,#6d28d9,#7c3aed,#ec4899)}.dm-timeline span{position:relative;z-index:1;display:grid;justify-items:center;gap:11px;text-align:center}.dm-timeline i{width:20px;height:20px;border:4px solid #7c3aed;border-radius:50%;background:white;box-shadow:0 0 0 4px rgba(124,58,237,.12)}.dm-timeline .last i{border-color:#ec4899;box-shadow:0 0 0 4px rgba(236,72,153,.13)}.dm-timeline b{font-size:9px;line-height:1.1;color:#1b22c8}.dm-timeline b span{display:block}
        @media(max-width:1500px){.dm-page{padding:18px 12px}.dm-header{grid-template-columns:290px minmax(650px,1fr) 340px;gap:12px}.dm-brand img{width:54px;height:54px}.dm-brand strong{font-size:25px}.dm-brand small{font-size:10px}.dm-value-pill{padding:0 9px;grid-template-columns:27px 1fr}.dm-value-pill b{font-size:8.8px}.dm-value-pill small{font-size:6.5px}.dm-main{grid-template-columns:minmax(0,1fr) 380px;gap:16px}.dm-hero{grid-template-columns:minmax(0,1fr) 330px;margin-bottom:20px}.dm-hero h1{font-size:51px}.dm-hero p{font-size:13.5px}.dm-notice{font-size:13.5px}.dm-hero-art{min-height:180px}.dm-monitor{left:78px;width:178px;height:106px}.dm-life-grid{gap:18px}.dm-life-card{min-height:416px;padding:28px 18px 14px}.dm-life-head span{width:42px;height:42px;font-size:18px}.dm-life-card h3{font-size:15px}.dm-life-card li{font-size:8.6px}.dm-life-visual{height:165px}.dm-life-arrow{right:-29px}.dm-sla-shell{min-height:594px;padding:0 16px 18px}.dm-sla-shell h2{margin:0 -16px 14px}.dm-sla-grid{gap:7px}.dm-sla-card{min-height:134px}.dm-sla-card strong{font-size:24px}.dm-sla-card b{font-size:8.5px}.dm-comm-note p{font-size:10.4px}.dm-bottom{grid-template-columns:minmax(410px,1fr) minmax(390px,.94fr) 310px 330px;gap:10px}.dm-contact span{font-size:10.5px}.dm-timeline{width:calc(100% - 56px)}} 
        @media(max-width:1180px){.dm-header,.dm-main,.dm-hero,.dm-bottom{grid-template-columns:1fr}.dm-value-bar{grid-template-columns:repeat(3,1fr)}.dm-partners{max-width:620px}.dm-life-grid{grid-template-columns:repeat(2,1fr)}.dm-life-arrow{display:none}.dm-sla-shell{min-height:auto}.dm-sla-grid{grid-template-columns:repeat(4,1fr)}.dm-timeline{width:100%;overflow:auto;grid-template-columns:repeat(8,130px)}} 
        @media(max-width:760px){.dm-page{padding:16px 12px 20px}.dm-value-bar,.dm-life-grid,.dm-bottom{grid-template-columns:1fr}.dm-partners,.dm-sla-grid,.dm-comm-grid,.dm-principles>div,.dm-metrics>div{grid-template-columns:1fr 1fr}.dm-brand strong{font-size:22px}.dm-hero h1{font-size:42px}.dm-hero-art{min-height:210px}.dm-life-card{min-height:430px}.dm-sla-shell h2{font-size:14px}.dm-escalation-row{grid-template-columns:1fr}.dm-escalation-row>svg{justify-self:center;transform:rotate(90deg)}.dm-comm-note{grid-template-columns:1fr}.dm-contact{grid-template-columns:1fr}.dm-qr{justify-self:start}.dm-timeline{padding-left:18px;padding-right:18px}.dm-timeline:before{left:40px;right:40px}} 
        @media(max-width:520px){.dm-partners,.dm-sla-grid,.dm-comm-grid,.dm-principles>div,.dm-metrics>div{grid-template-columns:1fr}.dm-value-pill{border-left:0;border-top:1px solid rgba(109,40,217,.12);padding:12px}.dm-value-pill:first-child{border-top:0}.dm-life-card{padding-left:16px;padding-right:16px}.dm-section-badge{min-width:220px}.dm-principle-item{min-height:76px;border-left:0;border-top:1px solid rgba(109,40,217,.12)}.dm-principle-item:first-child{border-top:0}}
      `}</style>

      <div className="dm-shell">
        <TopHeader />
        <div className="dm-main">
          <div>
            <HeroSection />
            <ProjectLifecycle />
          </div>
          <SLAPanel />
        </div>
        <BottomGovernance />
        <ProcessTimeline />
      </div>
    </section>
  );
}
