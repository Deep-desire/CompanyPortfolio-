import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Clock3,
  Eye,
  FileCheck2,
  Gauge,
  Globe2,
  Handshake,
  Headphones,
  LockKeyhole,
  Mail,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';

const headerValues = [
  { icon: SlidersHorizontal, title: 'Flexible', label: 'Engagement Options' },
  { icon: Eye, title: 'Transparent', label: 'Process & Pricing' },
  { icon: UsersRound, title: 'Scalable', label: 'Teams & Solutions' },
  { icon: ShieldCheck, title: 'Reliable', label: 'Delivery Excellence' },
  { icon: Handshake, title: 'Long Term', label: 'Partnership' },
];

const models = [
  {
    number: '01',
    title: 'FIXED COST',
    tone: 'purple',
    icon: FileCheck2,
    description: 'Best for well-defined projects with clear scope, deliverables, and timeline. Agreed price - no surprises.',
    checks: ['Clear scope & deliverables', 'Fixed timeline', 'Agreed price', 'No hidden costs', 'Risk-free planning'],
    bestIcon: Target,
    bestTitle: 'Best For',
    bestText: 'Projects with well-defined requirements and clear outcomes.',
    visual: 'contract',
    cta: 'Choose Fixed Cost',
  },
  {
    number: '02',
    title: 'DEDICATED\nRESOURCES',
    tone: 'pink',
    icon: UsersRound,
    description: 'Hire skilled professionals exclusively for your team. Full-time availability, deep project context, seamless integration.',
    checks: ['Full-time dedicated resources', 'Seamless team integration', 'Deep domain expertise', 'Scalable team size', 'Better productivity'],
    bestIcon: UserRoundCheck,
    bestTitle: 'Best For',
    bestText: 'Long-term projects that require dedicated focus and continuity.',
    visual: 'team',
    cta: 'Choose Dedicated Resources',
  },
  {
    number: '03',
    title: 'TIME &\nMATERIAL',
    tone: 'purple',
    icon: Clock3,
    description: 'Ideal for evolving projects or ongoing support. Pay only for the hours and resources actually used.',
    checks: ['Pay for actual time', 'Flexible requirements', 'Adaptive to changes', 'Continuous improvement', 'Cost-effective'],
    bestIcon: Timer,
    bestTitle: 'Best For',
    bestText: 'Evolving projects or ongoing support with changing requirements.',
    visual: 'time',
    cta: 'Choose Time & Material',
  },
];

const workflow = [
  { icon: Search, title: 'Discover', text: 'Understand your goals, challenges & requirements' },
  { icon: SlidersHorizontal, title: 'Plan', text: 'Recommend the best engagement model' },
  { icon: UsersRound, title: 'Collaborate', text: 'Align, onboard & kickstart the project' },
  { icon: Rocket, title: 'Deliver', text: 'Execute with agility and transparency' },
  { icon: TrendingUp, title: 'Grow', text: 'Long-term partnership and continuous success' },
];

const benefits = [
  { icon: Eye, title: 'Complete Transparency', text: 'Clear processes, open communication' },
  { icon: UsersRound, title: 'Top Talent On Demand', text: 'Access to certified Microsoft experts' },
  { icon: Sparkles, title: 'Scalable & Flexible', text: 'Scale up or down as you need' },
  { icon: LockKeyhole, title: 'Security First', text: 'Enterprise-grade data protection' },
  { icon: Clock3, title: 'On-time Delivery', text: 'Committed to your deadlines' },
  { icon: Headphones, title: '24/7 Support', text: 'We are here when you need us' },
];

function GlassCard({ className = '', children }) {
  return <div className={`eng-glass ${className}`}>{children}</div>;
}

function MicrosoftMark() {
  return (
    <span className="eng-ms-mark" aria-hidden="true">
      <i style={{ background: '#f35325' }} />
      <i style={{ background: '#81bc06' }} />
      <i style={{ background: '#05a6f0' }} />
      <i style={{ background: '#ffba08' }} />
    </span>
  );
}

function M365Mark() {
  return <span className="eng-m365-mark" aria-hidden="true"><i /></span>;
}

function HeaderValuePill({ icon: Icon, title, label }) {
  return (
    <span className="eng-value-pill">
      <Icon size={28} aria-hidden="true" />
      <b>{title}</b>
      <small>{label}</small>
    </span>
  );
}

function PartnerBadge({ type }) {
  return (
    <GlassCard className="eng-partner">
      {type === 'microsoft' ? <MicrosoftMark /> : <M365Mark />}
      <span>{type === 'microsoft' ? 'Microsoft' : 'Built on'}<br />{type === 'microsoft' ? 'Solutions Partner' : 'Microsoft 365'}</span>
    </GlassCard>
  );
}

function TopHeader() {
  return (
    <motion.header className="eng-header" initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
      <div className="eng-brand">
        <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
        <span><strong>DesireInfoWeb</strong><small>Your Extended <b>Technology Partner</b></small></span>
      </div>
      <GlassCard className="eng-value-bar">
        {headerValues.map((item) => <HeaderValuePill key={item.title} {...item} />)}
      </GlassCard>
      <div className="eng-partners">
        <PartnerBadge type="microsoft" />
        <PartnerBadge type="m365" />
      </div>
    </motion.header>
  );
}

function PartnershipIllustration() {
  return (
    <div className="eng-partnership-art" aria-hidden="true">
      <span className="eng-art-base" />
      <span className="eng-glass-sphere">
        <Handshake size={112} />
      </span>
      <span className="eng-orbit" />
      <span className="eng-art-card card-gear"><Gauge size={42} /></span>
      <span className="eng-art-card card-growth"><BarChart3 size={42} /></span>
      <span className="eng-art-card card-check"><CheckCircle2 size={38} /></span>
      <i className="eng-particle p1" />
      <i className="eng-particle p2" />
      <i className="eng-particle p3" />
    </div>
  );
}

function HeroSection() {
  return (
    <motion.aside className="eng-hero" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <div className="eng-hero-copy">
        <h1>Our <span>Engagement</span> Models</h1>
        <p>We work with agencies and consultancies as a true extended delivery arm - offering flexible engagement structures to match your project type, timeline, and budget.</p>
      </div>
      <PartnershipIllustration />
    </motion.aside>
  );
}

function ChecklistItem({ children, tone }) {
  return (
    <li className={`eng-check ${tone === 'pink' ? 'pink' : ''}`}>
      <Check size={12} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

function ModelVisual({ type }) {
  return (
    <div className={`eng-model-visual eng-${type}`} aria-hidden="true">
      <span className="model-base" />
      <span className="model-object one" />
      <span className="model-object two" />
      <span className="model-object three" />
      <span className="model-chip">
        {type === 'contract' && <ShieldCheck size={34} />}
        {type === 'team' && <UsersRound size={35} />}
        {type === 'time' && <Clock3 size={34} />}
      </span>
      <i />
      <b />
    </div>
  );
}

function EngagementModelCard({ number, title, tone, icon: Icon, description, checks, bestIcon: BestIcon, bestTitle, bestText, visual, cta }) {
  return (
    <GlassCard className={`eng-model-card ${tone}`}>
      <span className="eng-model-number">{number}</span>
      <div className="eng-model-top">
        <span className="eng-model-icon"><Icon size={48} aria-hidden="true" /></span>
        <div>
          <h2>{title.split('\n').map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{description}</p>
        </div>
      </div>
      <ul className="eng-checklist">
        {checks.map((item) => <ChecklistItem key={item} tone={tone}>{item}</ChecklistItem>)}
      </ul>
      <div className="eng-best-for">
        <BestIcon size={38} aria-hidden="true" />
        <span><strong>{bestTitle}</strong><small>{bestText}</small></span>
      </div>
      <ModelVisual type={visual} />
      <button type="button" className="eng-model-button">
        {cta} <ArrowRight size={15} aria-hidden="true" />
      </button>
    </GlassCard>
  );
}

function WorkflowStep({ icon: Icon, title, text, index }) {
  return (
    <div className="eng-workflow-step">
      <span className="eng-workflow-node"><Icon size={32} aria-hidden="true" /></span>
      <div>
        <strong>{index + 1}. {title}</strong>
        <small>{text}</small>
      </div>
    </div>
  );
}

function WorkflowPanel() {
  return (
    <motion.aside className="eng-workflow-wrap" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.62 }} viewport={{ once: true }}>
      <GlassCard className="eng-workflow">
        <h2>Our Engagement<br />Workflow</h2>
        <div className="eng-workflow-list">
          {workflow.map((step, index) => <WorkflowStep key={step.title} index={index} {...step} />)}
        </div>
      </GlassCard>
    </motion.aside>
  );
}

function BenefitItem({ icon: Icon, title, text }) {
  return (
    <span className="eng-benefit">
      <Icon size={32} aria-hidden="true" />
      <b>{title}</b>
      <small>{text}</small>
    </span>
  );
}

function BenefitStrip() {
  return (
    <GlassCard className="eng-benefits">
      {benefits.map((item) => <BenefitItem key={item.title} {...item} />)}
    </GlassCard>
  );
}

function CTABanner() {
  return (
    <button type="button" className="eng-cta">
      <span>
        <strong>Let's Build Something Great Together!</strong>
        <small>Get in touch with our team to discuss the best engagement model for your project.</small>
        <b>Contact Us Today <ArrowRight size={13} /></b>
      </span>
      <i aria-hidden="true">
        <UsersRound size={42} />
        <Target size={58} />
      </i>
    </button>
  );
}

function QRPlaceholder() {
  return (
    <span className="eng-qr" aria-label="QR code placeholder">
      {Array.from({ length: 64 }, (_, index) => <i key={index} />)}
    </span>
  );
}

function ContactCard() {
  return (
    <GlassCard className="eng-contact">
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
    <motion.div className="eng-bottom" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <BenefitStrip />
      <CTABanner />
      <ContactCard />
    </motion.div>
  );
}

export default function Engagement() {
  return (
    <section className="eng-page" id="engagement-models">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .eng-page,.eng-page *{box-sizing:border-box}
        .eng-page{--ink:#111066;--strong:#312e81;--muted:#66639b;--blue:#1b22c8;--purple:#6d28d9;--violet:#7c3aed;--pink:#ec4899;--hot:#f43f8c;--success:#10b981;min-height:100vh;position:relative;isolation:isolate;overflow:hidden;padding:24px clamp(14px,1.8vw,34px) 26px;color:var(--ink);font-family:"Inter","Plus Jakarta Sans","Manrope",system-ui,sans-serif;background:radial-gradient(circle at 9% 43%,rgba(124,58,237,.18),transparent 30%),radial-gradient(circle at 61% 18%,rgba(236,72,153,.12),transparent 25%),radial-gradient(circle at 88% 76%,rgba(56,189,248,.12),transparent 26%),linear-gradient(135deg,#fbfaff 0%,#f7f2ff 50%,#fff7fd 100%)}
        .eng-page:before{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(109,40,217,.04) 1px,transparent 1px),linear-gradient(0deg,rgba(109,40,217,.035) 1px,transparent 1px);background-size:76px 76px}
        .eng-shell{width:min(100%,1840px);margin:0 auto;position:relative;z-index:1}
        .eng-glass{background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.52));border:1px solid rgba(255,255,255,.76);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 62px rgba(109,40,217,.14),0 0 0 1px rgba(130,94,255,.1);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
        .eng-header{display:grid;grid-template-columns:300px minmax(620px,1fr) 390px;gap:18px;align-items:center;margin-bottom:20px}.eng-brand{display:flex;align-items:center;gap:11px;min-width:0}.eng-brand img{width:64px;height:64px;object-fit:contain;display:block;filter:drop-shadow(0 16px 24px rgba(109,40,217,.13))}.eng-brand strong{display:block;font-size:30px;line-height:.96;font-weight:900;letter-spacing:-.02em;color:#111066}.eng-brand small{display:block;margin-top:3px;font-size:12px;line-height:1;font-weight:900;color:#1b22c8}.eng-brand small b{color:#ec4899}.eng-value-bar{min-height:74px;display:grid;grid-template-columns:repeat(5,1fr);align-items:center;overflow:hidden;border-radius:24px}.eng-value-pill{display:grid;grid-template-columns:36px 1fr;grid-template-rows:auto auto;column-gap:10px;align-items:center;min-height:52px;padding:0 18px;border-left:1px solid rgba(109,40,217,.15)}.eng-value-pill:first-child{border-left:0}.eng-value-pill svg{grid-row:1/3;color:var(--violet);stroke-width:2.25}.eng-value-pill b{font-size:12.5px;line-height:1.02;font-weight:900}.eng-value-pill small{margin-top:4px;font-size:7.4px;line-height:1.05;font-weight:850;color:#312e81}.eng-partners{display:grid;grid-template-columns:1fr 1fr;gap:14px}.eng-partner{min-height:74px;display:flex;align-items:center;justify-content:center;gap:13px;border-radius:22px;padding:10px 13px}.eng-partner span:last-child{font-size:12px;line-height:1.07;font-weight:900}.eng-ms-mark{width:30px;height:30px;display:grid;grid-template-columns:1fr 1fr;gap:3px}.eng-ms-mark i{border-radius:1px}.eng-m365-mark{width:42px;height:42px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(from 35deg,#1b22c8,#7c3aed,#38bdf8,#1b22c8)}.eng-m365-mark i{width:23px;height:23px;border-radius:9px;background:rgba(255,255,255,.72);transform:rotate(45deg)}
        .eng-main{display:grid;grid-template-columns:400px minmax(790px,1fr) 300px;gap:20px;align-items:start}.eng-hero{min-height:690px;display:flex;flex-direction:column;justify-content:space-between}.eng-hero-copy{position:relative;z-index:4;display:grid;gap:16px}.eng-hero h1{width:min(900px,calc(100vw - 430px));margin:0;font-size:clamp(58px,4.15vw,86px);line-height:.96;font-weight:900;letter-spacing:-.02em}.eng-hero h1 span{background:linear-gradient(100deg,#1b22c8 0%,#7c3aed 42%,#ec4899 82%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.eng-hero p{width:min(650px,calc(100vw - 480px));max-width:650px;margin:0;font-size:16px;line-height:1.42;font-weight:750;color:#111066}
        .eng-partnership-art{position:relative;width:370px;height:420px;margin-top:-6px}.eng-art-base{position:absolute;left:22px;right:22px;bottom:0;height:118px;border-radius:50%;background:radial-gradient(circle at 50% 36%,rgba(255,255,255,.82),rgba(124,58,237,.36) 54%,rgba(39,16,154,.54));box-shadow:0 34px 72px rgba(109,40,217,.3);transform:perspective(760px) rotateX(64deg)}.eng-glass-sphere{position:absolute;left:82px;bottom:112px;width:210px;height:210px;display:grid;place-items:center;border-radius:50%;color:#5b21b6;background:radial-gradient(circle at 32% 24%,rgba(255,255,255,.92),rgba(255,255,255,.4) 42%,rgba(124,58,237,.18) 76%);border:2px solid rgba(255,255,255,.75);box-shadow:inset -20px -24px 40px rgba(109,40,217,.16),0 25px 55px rgba(109,40,217,.22)}.eng-glass-sphere svg{filter:drop-shadow(0 12px 16px rgba(109,40,217,.25))}.eng-orbit{position:absolute;left:58px;bottom:146px;width:255px;height:80px;border:4px solid rgba(236,72,153,.35);border-left-color:rgba(245,158,11,.75);border-top-color:transparent;border-radius:50%;transform:rotate(-16deg)}.eng-art-card{position:absolute;width:78px;height:95px;display:grid;place-items:center;border-radius:18px;color:#6d28d9;background:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.75);box-shadow:0 20px 36px rgba(109,40,217,.18)}.card-gear{left:28px;bottom:210px}.card-growth{right:16px;bottom:206px}.card-check{left:0;bottom:98px;color:#ec4899}.eng-particle{position:absolute;width:14px;height:14px;border-radius:50%;background:rgba(124,58,237,.38);box-shadow:0 0 22px rgba(124,58,237,.55)}.eng-particle.p1{left:304px;top:20px}.eng-particle.p2{left:23px;top:70px}.eng-particle.p3{left:165px;top:7px}
        .eng-models{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;align-items:end;margin-top:170px}.eng-model-card{position:relative;min-height:660px;padding:68px 28px 20px;border-radius:30px;display:flex;flex-direction:column;overflow:visible;border-color:rgba(137,112,255,.36)}.eng-model-card.pink{border-color:rgba(236,72,153,.34);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 28px 68px rgba(236,72,153,.16),0 0 0 1px rgba(236,72,153,.13)}.eng-model-number{position:absolute;left:50%;top:-12px;display:grid;place-items:center;width:62px;height:43px;border-radius:9px;color:white;background:linear-gradient(135deg,#1b22c8,#7c3aed);box-shadow:0 12px 26px rgba(109,40,217,.28);font-size:22px;font-weight:900;transform:translateX(-50%)}.eng-model-card.pink .eng-model-number{background:linear-gradient(135deg,#ec4899,#f43f8c);box-shadow:0 14px 30px rgba(236,72,153,.32)}.eng-model-top{display:grid;grid-template-columns:112px 1fr;gap:18px;align-items:center}.eng-model-icon{width:112px;height:112px;display:grid;place-items:center;border-radius:50%;color:#5b21b6;background:radial-gradient(circle at 34% 26%,rgba(255,255,255,.96),rgba(124,58,237,.15));border:1px solid rgba(255,255,255,.82);box-shadow:inset -10px -12px 24px rgba(109,40,217,.12),0 18px 34px rgba(109,40,217,.14)}.eng-model-card.pink .eng-model-icon{color:#ec4899;background:radial-gradient(circle at 34% 26%,rgba(255,255,255,.96),rgba(236,72,153,.17))}.eng-model-card h2{margin:0 0 12px;font-size:24px;line-height:.98;font-weight:900;color:#1b22c8}.eng-model-card.pink h2{background:linear-gradient(100deg,#ec4899,#f43f8c 52%,#7c3aed);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.eng-model-card h2 span{display:block}.eng-model-card p{margin:0;font-size:10.5px;line-height:1.5;font-weight:800;color:#111066}.eng-checklist{display:grid;gap:7px;margin:24px 0 14px;padding:0;list-style:none}.eng-check{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:850;color:#111066}.eng-check svg{width:16px;height:16px;padding:3px;border-radius:50%;color:white;background:#5b21b6;flex:0 0 auto}.eng-check.pink svg{background:#ec4899}.eng-best-for{display:grid;grid-template-columns:44px 1fr;gap:12px;align-items:center;margin-top:auto;min-height:88px;padding:14px;border-radius:15px;background:rgba(255,255,255,.42);border:1px solid rgba(255,255,255,.62)}.eng-best-for svg{color:#5b21b6}.eng-model-card.pink .eng-best-for svg,.eng-model-card.pink .eng-best-for strong{color:#ec4899}.eng-best-for strong,.eng-best-for small{display:block}.eng-best-for strong{font-size:12px;font-weight:900;color:#5b21b6}.eng-best-for small{margin-top:4px;font-size:9px;line-height:1.25;font-weight:850;color:#111066}
        .eng-model-visual{position:relative;height:142px;margin-top:16px}.model-base{position:absolute;left:7px;right:7px;bottom:0;height:52px;border-radius:50%;background:radial-gradient(circle at 50% 36%,rgba(255,255,255,.76),rgba(124,58,237,.34) 58%,rgba(39,16,154,.55));box-shadow:0 20px 35px rgba(109,40,217,.23);transform:perspective(620px) rotateX(62deg)}.model-object{position:absolute;bottom:43px;border-radius:9px;background:linear-gradient(155deg,#ddd6fe,#6d28d9 72%);box-shadow:inset -7px -8px 14px rgba(17,16,102,.28),0 14px 22px rgba(109,40,217,.15)}.model-object.one{left:62px;width:64px;height:78px}.model-object.two{left:132px;width:52px;height:58px}.model-object.three{left:32px;width:36px;height:38px}.model-chip{position:absolute;right:50px;top:8px;width:58px;height:58px;display:grid;place-items:center;border-radius:16px;color:white;background:linear-gradient(135deg,#6d28d9,#ec4899);box-shadow:0 14px 26px rgba(236,72,153,.22)}.eng-team .model-object.one{width:44px;height:68px;left:64px;border-radius:50% 50% 16px 16px;background:linear-gradient(155deg,#fb923c,#ec4899)}.eng-team .model-object.two{width:44px;height:68px;left:118px;border-radius:50% 50% 16px 16px;background:linear-gradient(155deg,#fbbf24,#f43f8c)}.eng-team .model-object.three{width:44px;height:58px;left:169px;border-radius:50% 50% 16px 16px;background:linear-gradient(155deg,#c084fc,#7c3aed)}.eng-time .model-object.one{height:86px;width:22px;left:116px}.eng-time .model-object.two{height:62px;width:22px;left:150px}.eng-time .model-object.three{height:38px;width:22px;left:184px}.eng-time .model-chip{left:42px;right:auto;background:linear-gradient(135deg,#1b22c8,#7c3aed)}.eng-contract .model-object.one{width:70px;height:84px;left:56px;background:linear-gradient(155deg,#fff,#c4b5fd)}.eng-contract .model-object.one:after{content:"";position:absolute;left:12px;right:12px;top:19px;height:28px;background:repeating-linear-gradient(180deg,#7c3aed 0 3px,transparent 3px 10px);opacity:.8}.eng-model-button{height:45px;display:flex;align-items:center;justify-content:center;gap:8px;margin:15px 12px -42px;border:0;border-radius:13px;color:white;background:linear-gradient(100deg,#1b22c8,#7c3aed);box-shadow:0 16px 26px rgba(109,40,217,.28);font-size:12px;font-weight:900}.eng-model-card.pink .eng-model-button{background:linear-gradient(100deg,#ec4899,#f43f8c);box-shadow:0 16px 28px rgba(236,72,153,.28)}
        .eng-workflow-wrap{align-self:start;margin-top:104px}.eng-workflow{height:100%;min-height:610px;padding:28px 30px;border-radius:30px}.eng-workflow h2{margin:0 0 30px;font-size:20px;line-height:1.18;font-weight:900;color:#1b22c8}.eng-workflow-list{position:relative;display:grid;gap:28px}.eng-workflow-list:before{content:"";position:absolute;left:31px;top:58px;bottom:58px;border-left:2px dotted rgba(109,40,217,.5)}.eng-workflow-step{position:relative;z-index:1;display:grid;grid-template-columns:64px 1fr;gap:16px;align-items:center}.eng-workflow-node{width:64px;height:64px;display:grid;place-items:center;border-radius:50%;color:#4f46e5;background:rgba(255,255,255,.78);border:1px solid rgba(255,255,255,.86);box-shadow:0 16px 30px rgba(109,40,217,.18)}.eng-workflow-step strong,.eng-workflow-step small{display:block}.eng-workflow-step strong{font-size:12px;line-height:1.15;font-weight:900;color:#1b22c8}.eng-workflow-step small{margin-top:6px;font-size:8.5px;line-height:1.35;font-weight:800;color:#111066}
        .eng-bottom{display:grid;grid-template-columns:minmax(760px,1fr) 350px 330px;gap:16px;align-items:stretch;margin-top:28px}.eng-benefits{min-height:132px;display:grid;grid-template-columns:repeat(6,1fr);align-items:center;overflow:hidden;border-radius:22px}.eng-benefit{display:grid;grid-template-columns:38px 1fr;grid-template-rows:auto auto;column-gap:12px;align-items:center;min-height:92px;padding:0 20px;border-left:1px solid rgba(109,40,217,.14)}.eng-benefit:first-child{border-left:0}.eng-benefit svg{grid-row:1/3;color:#5b21b6;stroke-width:2.1}.eng-benefit b{font-size:11px;line-height:1.15;font-weight:900;color:#1b22c8}.eng-benefit small{margin-top:7px;font-size:7.4px;line-height:1.22;font-weight:800;color:#111066}.eng-cta{min-height:132px;display:grid;grid-template-columns:1fr 92px;gap:14px;align-items:center;border:0;border-radius:22px;padding:18px 22px;color:white;text-align:left;background:linear-gradient(115deg,#3328e7 0%,#7c3aed 48%,#ec4899 100%);box-shadow:0 22px 48px rgba(236,72,153,.25)}.eng-cta strong,.eng-cta small,.eng-cta b{display:block}.eng-cta strong{font-size:14px;line-height:1.15;font-weight:900}.eng-cta small{margin:9px 0 13px;font-size:7.5px;line-height:1.4;font-weight:750}.eng-cta b{width:max-content;display:flex;align-items:center;gap:7px;padding:10px 18px;border-radius:11px;color:#4f46e5;background:white;font-size:8.5px;font-weight:900}.eng-cta i{display:flex;align-items:center;justify-content:center;gap:4px;color:white;font-style:normal}.eng-contact{min-height:132px;display:grid;grid-template-columns:1fr 90px;gap:14px;align-items:center;padding:15px 16px;border-radius:22px}.eng-contact div{display:grid;gap:12px}.eng-contact span{display:flex;align-items:center;gap:10px;font-size:11px;font-weight:900;color:#1b22c8}.eng-qr{width:88px;height:88px;display:grid;grid-template-columns:repeat(8,1fr);gap:3px;padding:7px;border:4px solid white;border-radius:9px;background:white}.eng-qr i{background:#111066}.eng-qr i:nth-child(2n),.eng-qr i:nth-child(5n),.eng-qr i:nth-child(11n),.eng-qr i:nth-child(17n){background:transparent}
        @media(max-width:1500px){.eng-page{padding:18px 12px 24px}.eng-header{grid-template-columns:260px minmax(560px,1fr) 330px;gap:12px}.eng-brand img{width:54px;height:54px}.eng-brand strong{font-size:25px}.eng-brand small{font-size:10px}.eng-value-pill{padding:0 12px;grid-template-columns:30px 1fr}.eng-value-pill b{font-size:11px}.eng-partner span:last-child{font-size:10.5px}.eng-main{grid-template-columns:315px minmax(720px,1fr) 260px;gap:12px}.eng-hero{min-height:645px}.eng-hero h1{width:min(840px,calc(100vw - 360px));font-size:58px}.eng-hero p{width:min(610px,calc(100vw - 420px));font-size:13.5px}.eng-partnership-art{width:305px;height:382px;margin-top:-24px}.eng-models{gap:11px;margin-top:170px}.eng-model-card{min-height:565px;padding:58px 19px 16px}.eng-model-top{grid-template-columns:82px 1fr;gap:12px}.eng-model-icon{width:82px;height:82px}.eng-model-card h2{font-size:19px}.eng-model-card p{font-size:9px}.eng-checklist{margin:18px 0 12px}.eng-check{font-size:8.4px}.eng-best-for{min-height:76px;padding:11px}.eng-model-visual{height:116px;margin-top:10px}.eng-workflow-wrap{margin-top:104px}.eng-workflow{min-height:565px;padding:24px 20px}.eng-workflow-list{gap:21px}.eng-workflow-step{grid-template-columns:54px 1fr;gap:12px}.eng-workflow-node{width:54px;height:54px}.eng-workflow-node svg{width:28px;height:28px}.eng-workflow-step strong{font-size:10.5px}.eng-workflow-step small{font-size:7.4px}.eng-bottom{grid-template-columns:minmax(620px,1fr) 300px 300px}.eng-benefit{padding:0 12px;column-gap:9px}.eng-benefit b{font-size:9px}.eng-benefit small{font-size:6.5px}}
        @media(max-width:1180px){.eng-header,.eng-main,.eng-bottom{grid-template-columns:1fr}.eng-value-bar{grid-template-columns:repeat(3,1fr)}.eng-partners{max-width:620px}.eng-hero{min-height:auto;display:grid;grid-template-columns:minmax(280px,1fr) 340px;gap:18px;align-items:center}.eng-hero h1,.eng-hero p{width:auto}.eng-partnership-art{margin:0 auto}.eng-models{grid-template-columns:repeat(3,minmax(0,1fr));margin-top:30px}.eng-workflow-wrap{margin-top:0}.eng-workflow{min-height:auto}.eng-workflow-list{grid-template-columns:repeat(5,1fr);gap:12px}.eng-workflow-list:before{display:none}.eng-workflow-step{grid-template-columns:1fr;text-align:center}.eng-workflow-node{margin:0 auto}.eng-benefits{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:900px){.eng-page{padding:18px 12px 24px}.eng-value-bar,.eng-models,.eng-hero,.eng-benefits{grid-template-columns:1fr}.eng-brand strong{font-size:23px}.eng-hero h1{font-size:46px}.eng-hero p{font-size:13px}.eng-partnership-art{width:300px;height:350px}.eng-model-card{min-height:auto}.eng-workflow-list{grid-template-columns:1fr;text-align:left}.eng-workflow-step{grid-template-columns:64px 1fr;text-align:left}.eng-workflow-node{margin:0}.eng-workflow-list:before{display:block}.eng-partners{grid-template-columns:1fr 1fr}.eng-benefit{border-left:0;border-top:1px solid rgba(109,40,217,.12)}.eng-benefit:first-child{border-top:0}.eng-contact{grid-template-columns:1fr}.eng-qr{justify-self:start}}
        @media(max-width:560px){.eng-partners{grid-template-columns:1fr}.eng-model-top{grid-template-columns:1fr}.eng-model-button{margin-left:0;margin-right:0}.eng-cta{grid-template-columns:1fr}.eng-value-pill{border-left:0;border-top:1px solid rgba(109,40,217,.13);padding:12px}.eng-value-pill:first-child{border-top:0}}
      `}</style>

      <div className="eng-shell">
        <TopHeader />
        <div className="eng-main">
          <HeroSection />
          <motion.div className="eng-models" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.68 }} viewport={{ once: true }}>
            {models.map((model) => <EngagementModelCard key={model.number} {...model} />)}
          </motion.div>
          <WorkflowPanel />
        </div>
        <BottomArea />
      </div>
    </section>
  );
}
