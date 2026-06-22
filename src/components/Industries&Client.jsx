import { motion } from 'framer-motion';
import {
  BarChart3,
  BookOpen,
  Boxes,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Factory,
  Gauge,
  Globe2,
  GraduationCap,
  Handshake,
  Headphones,
  HeartPulse,
  Landmark,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  MessageSquare,
  Network,
  Phone,
  Route,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  Truck,
  UsersRound,
} from 'lucide-react';

const topStats = [
  { icon: UsersRound, value: '500+', label: 'Clients Served' },
  { icon: Building2, value: '20+', label: 'Industries Covered' },
  { icon: MapPin, value: '50+', label: 'Countries Reached' },
  { icon: Star, value: '99.9%', label: 'Customer Satisfaction' },
  { icon: Headphones, value: '24/7', label: 'Support & Success' },
  { icon: TrophyIcon, value: '10+', label: 'Years of Excellence' },
];

const features = [
  { icon: Sparkles, title: 'Industry Focused', text: 'Solutions built for your unique challenges' },
  { icon: ShieldCheck, title: 'Scalable & Secure', text: 'Enterprise-grade security and scalability' },
  { icon: CheckCircle2, title: 'Compliant & Reliable', text: 'Built with global standards and best practices' },
  { icon: Lightbulb, title: 'Innovation Driven', text: 'Future-ready technology for a competitive edge' },
];

const industries = [
  {
    key: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    bullets: ['Patient Management', 'Telemedicine', 'Compliance & Security', 'Data Analytics'],
    visual: 'hospital',
    position: 'top-left',
  },
  {
    key: 'education',
    icon: GraduationCap,
    title: 'Education',
    bullets: ['Smart Learning', 'Student Engagement', 'Collaboration', 'Virtual Campus'],
    visual: 'campus',
    position: 'top-right',
  },
  {
    key: 'finance',
    icon: Landmark,
    title: 'Finance',
    bullets: ['Risk Management', 'Fraud Detection', 'Regulatory Compliance', 'Financial Analytics'],
    visual: 'finance',
    position: 'middle-left',
  },
  {
    key: 'retail',
    icon: ShoppingCart,
    title: 'Retail',
    bullets: ['Omnichannel Solutions', 'Inventory Management', 'Customer Experience', 'Sales Analytics'],
    visual: 'retail',
    position: 'middle-right',
  },
  {
    key: 'logistics',
    icon: Truck,
    title: 'Logistics',
    bullets: ['Supply Chain Visibility', 'Fleet Management', 'Real-time Tracking', 'Warehouse Automation'],
    visual: 'logistics',
    position: 'bottom-left',
  },
  {
    key: 'government',
    icon: Landmark,
    title: 'Government',
    bullets: ['Citizen Services', 'Digital Governance', 'Policy Management', 'Secure Data Handling'],
    visual: 'government',
    position: 'bottom-right',
  },
];

const successStats = [
  { icon: Briefcase, value: '1200+', label: 'Projects Delivered' },
  { icon: UsersRound, value: '250+', label: 'Experts & Consultants' },
  { icon: Gauge, value: '98%', label: 'On-time Delivery' },
  { icon: Route, value: '60%', label: 'Faster Implementation' },
  { icon: CalendarCheck, value: '45%', label: 'Cost Optimization' },
  { icon: LockKeyhole, value: '100%', label: 'Data Security' },
];

const whyRows = [
  { icon: Cpu, title: 'Microsoft 365 Expertise', text: 'Deep Microsoft ecosystem knowledge' },
  { icon: ShieldCheck, title: 'Custom Solutions', text: 'Tailored to your industry needs' },
  { icon: Briefcase, title: 'Proven Track Record', text: 'Successful delivery across industries' },
  { icon: Headphones, title: 'End-to-End Support', text: 'From strategy to continuous support' },
  { icon: Sparkles, title: 'Innovation at Core', text: 'Driving digital transformation' },
];

const clientRows = [
  [Building2, 'Enterprises & Corporations'],
  [Landmark, 'Government Agencies'],
  [GraduationCap, 'Educational Institutions'],
  [HeartPulse, 'Healthcare Organizations'],
  [Briefcase, 'Banks & Financial Services'],
  [ShoppingCart, 'Retail & E-commerce'],
  [Factory, 'Logistics & Manufacturing'],
  [UsersRound, 'Non-Profit Organizations'],
];

const integrations = [
  { icon: Database, title: 'SharePoint', text: 'Collaboration', color: '#008272' },
  { icon: MessageSquare, title: 'Teams', text: 'Communication', color: '#5b5fc7' },
  { icon: Network, title: 'Power Platform', text: 'Low Code Apps', color: '#742774' },
  { icon: BarChart3, title: 'Power BI', text: 'Analytics', color: '#f2c811' },
  { icon: Cloud, title: 'Azure', text: 'Cloud Services', color: '#0078d4' },
  { icon: Boxes, title: 'OneDrive', text: 'File Management', color: '#2563eb' },
  { icon: Mail, title: 'Outlook', text: 'Email & Calendar', color: '#0078d4' },
];

function TrophyIcon(props) {
  return <Sparkles {...props} />;
}

function GlassCard({ className = '', children }) {
  return <div className={`icf-glass ${className}`}>{children}</div>;
}

function StatPill({ icon: Icon, value, label, className = '' }) {
  return (
    <GlassCard className={`icf-stat ${className}`}>
      <Icon size={24} aria-hidden="true" />
      <span><strong>{value}</strong><small>{label}</small></span>
    </GlassCard>
  );
}

function MicrosoftMark() {
  return (
    <span className="icf-ms-mark" aria-hidden="true">
      <i style={{ background: '#f35325' }} />
      <i style={{ background: '#81bc06' }} />
      <i style={{ background: '#05a6f0' }} />
      <i style={{ background: '#ffba08' }} />
    </span>
  );
}

function M365Mark() {
  return <span className="icf-m365-mark" aria-hidden="true"><i /></span>;
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <GlassCard className="icf-feature">
      <Icon size={18} aria-hidden="true" />
      <span><strong>{title}</strong><small>{text}</small></span>
    </GlassCard>
  );
}

function GlobeIllustration() {
  return (
    <div className="icf-globe-art" aria-hidden="true">
      <span className="icf-globe-base" />
      <span className="icf-globe">
        <i /><b /><em />
      </span>
      <span className="icf-globe-ring" />
      <span className="icf-float-chip chip-a"><BarChart3 size={22} /></span>
      <span className="icf-float-chip chip-b"><UsersRound size={21} /></span>
      <span className="icf-float-chip chip-c"><Cloud size={21} /></span>
      <span className="icf-float-chip chip-d"><Network size={20} /></span>
    </div>
  );
}

function HeroSection() {
  return (
    <motion.aside className="icf-hero" initial={{ opacity: 0, x: -26 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <h1>Industries<br />& Client <span>Fit</span></h1>
      <h2>One Platform. Endless Possibilities.<br />Built to Transform Every Industry.</h2>
      <p>DesireInfoWeb delivers intelligent, secure, and scalable solutions tailored to the unique needs of every industry. Empower your organization with technology that drives growth, efficiency, and impact.</p>
      <div className="icf-feature-grid">
        {features.map((item) => <FeatureCard key={item.title} {...item} />)}
      </div>
      <GlobeIllustration />
    </motion.aside>
  );
}

function TopBar() {
  return (
    <motion.header className="icf-topbar" initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.58 }} viewport={{ once: true }}>
      <div className="icf-brand">
        <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
        <span><strong>DesireInfoWeb</strong><small>Your Extended <b>Technology Partner</b></small></span>
      </div>
      <div className="icf-top-stats">
        {topStats.map((item) => <StatPill key={item.label} {...item} />)}
      </div>
      <div className="icf-partners">
        <GlassCard className="icf-partner"><MicrosoftMark /><span>Microsoft<br />Solutions Partner</span></GlassCard>
        <GlassCard className="icf-partner"><M365Mark /><span>Built on<br />Microsoft 365</span></GlassCard>
      </div>
    </motion.header>
  );
}

function IndustryIllustration({ type }) {
  return (
    <div className={`icf-iso icf-iso-${type}`} aria-hidden="true">
      <span className="iso-base" />
      <span className="iso-building one" />
      <span className="iso-building two" />
      <span className="iso-building three" />
      <span className="iso-badge">
        {type === 'hospital' && <HeartPulse size={18} />}
        {type === 'campus' && <BookOpen size={18} />}
        {type === 'finance' && <BarChart3 size={18} />}
        {type === 'retail' && <Store size={18} />}
        {type === 'logistics' && <Truck size={18} />}
        {type === 'government' && <Landmark size={18} />}
      </span>
      <span className="iso-accent a" />
      <span className="iso-accent b" />
      <span className="iso-accent c" />
    </div>
  );
}

function IndustryCard({ icon: Icon, title, bullets, visual, position }) {
  return (
    <GlassCard className={`icf-industry icf-${position}`}>
      <div className="icf-industry-copy">
        <span className="icf-industry-icon"><Icon size={21} aria-hidden="true" /></span>
        <h3>{title}</h3>
        <ul>
          {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </div>
      <IndustryIllustration type={visual} />
    </GlassCard>
  );
}

function ConnectorLines() {
  return (
    <svg className="icf-connectors" viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden="true">
      <path d="M500 360 C360 260 260 180 145 130" />
      <path d="M500 360 C640 260 740 180 855 130" />
      <path d="M500 360 C340 350 250 350 120 360" />
      <path d="M500 360 C660 350 750 350 880 360" />
      <path d="M500 360 C350 470 270 555 175 610" />
      <path d="M500 360 C650 470 730 555 825 610" />
    </svg>
  );
}

function CenterOrb() {
  return (
    <div className="icf-center-orb">
      <span className="icf-orb-icon top"><UsersRound size={18} /></span>
      <span className="icf-orb-icon left"><Network size={18} /></span>
      <span className="icf-orb-icon right"><BarChart3 size={18} /></span>
      <span className="icf-orb-icon bottom"><ShieldCheck size={18} /></span>
      <strong>Powering<br />Every Industry.</strong>
      <b>Enabling Every<br />Organization.</b>
    </div>
  );
}

function IndustryEcosystem() {
  return (
    <motion.section className="icf-ecosystem" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.72 }} viewport={{ once: true }}>
      <ConnectorLines />
      <CenterOrb />
      {industries.map((item) => <IndustryCard key={item.key} {...item} />)}
    </motion.section>
  );
}

function SuccessStatsStrip() {
  return (
    <div className="icf-success-strip">
      {successStats.map((item) => <StatPill key={item.label} {...item} className="compact" />)}
    </div>
  );
}

function WhyChooseUsCard() {
  return (
    <GlassCard className="icf-trust-card">
      <h3>Why Organizations Choose Us</h3>
      {whyRows.map(({ icon: Icon, title, text }) => (
        <div className="icf-trust-row" key={title}>
          <span><Icon size={18} aria-hidden="true" /></span>
          <div><strong>{title}</strong><small>{text}</small></div>
        </div>
      ))}
    </GlassCard>
  );
}

function ClientFitCard() {
  return (
    <GlassCard className="icf-trust-card icf-client-card">
      <h3>Who We Work With</h3>
      {clientRows.map(([Icon, label]) => (
        <div className="icf-client-row" key={label}>
          <Icon size={16} aria-hidden="true" />
          <span>{label}</span>
        </div>
      ))}
    </GlassCard>
  );
}

function CityIllustration() {
  return (
    <div className="icf-city-art" aria-hidden="true">
      <span className="city-base" />
      <span className="city-building one" />
      <span className="city-building two" />
      <span className="city-building three" />
      <span className="city-building four" />
      <span className="city-tower" />
    </div>
  );
}

function RightTrustPanel() {
  return (
    <motion.aside className="icf-right" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.64 }} viewport={{ once: true }}>
      <WhyChooseUsCard />
      <ClientFitCard />
      <CityIllustration />
    </motion.aside>
  );
}

function IntegrationStrip() {
  return (
    <GlassCard className="icf-integrations">
      <h3>Seamlessly Integrated with Microsoft 365</h3>
      <div>
        {integrations.map(({ icon: Icon, title, text, color }) => (
          <span key={title}>
            <i style={{ '--app-color': color }}><Icon size={18} aria-hidden="true" /></i>
            <strong>{title}</strong>
            <small>{text}</small>
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

function CTASection() {
  return (
    <button type="button" className="icf-cta">
      <span>Different Industries.<br />One Trusted Technology Partner.<br />Limitless Opportunities.</span>
      <Handshake size={62} aria-hidden="true" />
    </button>
  );
}

function QRPlaceholder() {
  return (
    <span className="icf-qr" aria-label="QR code placeholder">
      {Array.from({ length: 64 }, (_, index) => <i key={index} />)}
    </span>
  );
}

function ContactCard() {
  return (
    <GlassCard className="icf-contact">
      <div>
        <span><Globe2 size={17} />www.desireinfoweb.com</span>
        <span><Mail size={17} />vijay@desireinfoweb.com</span>
        <span><Phone size={17} />+91-8780468807</span>
      </div>
      <QRPlaceholder />
    </GlassCard>
  );
}

function BottomSection() {
  return (
    <motion.div className="icf-bottom" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.62 }} viewport={{ once: true }}>
      <IntegrationStrip />
      <CTASection />
      <ContactCard />
    </motion.div>
  );
}

export default function IndustriesClient() {
  return (
    <section className="icf-page" id="industries-client-fit">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .icf-page,.icf-page *{box-sizing:border-box}
        .icf-page{--ink:#111066;--strong:#312e81;--muted:#66639b;--blue:#1b22c8;--purple:#6d28d9;--violet:#7c3aed;--pink:#ec4899;--cyan:#38bdf8;min-height:100vh;position:relative;isolation:isolate;overflow:hidden;padding:22px clamp(14px,1.45vw,28px) 24px;color:var(--ink);font-family:"Inter","Plus Jakarta Sans","Manrope",system-ui,sans-serif;background:radial-gradient(circle at 8% 20%,rgba(236,72,153,.16),transparent 28%),radial-gradient(circle at 50% 7%,rgba(109,40,217,.14),transparent 30%),radial-gradient(circle at 88% 82%,rgba(56,189,248,.13),transparent 26%),linear-gradient(135deg,#fbfaff 0%,#f7f2ff 48%,#fff7fd 100%)}
        .icf-page:before{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(109,40,217,.035) 1px,transparent 1px),linear-gradient(0deg,rgba(109,40,217,.03) 1px,transparent 1px);background-size:76px 76px}
        .icf-shell{width:min(100%,1840px);margin:0 auto;position:relative;z-index:1}
        .icf-glass{background:linear-gradient(180deg,rgba(255,255,255,.8),rgba(255,255,255,.52));border:1px solid rgba(255,255,255,.76);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 62px rgba(109,40,217,.14),0 0 0 1px rgba(130,94,255,.1);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
        .icf-topbar{display:grid;grid-template-columns:320px minmax(610px,1fr) 340px;gap:16px;align-items:center;margin-bottom:16px}.icf-brand{display:flex;align-items:center;gap:12px;min-width:0}.icf-brand img{width:62px;height:62px;object-fit:contain;display:block;filter:drop-shadow(0 16px 24px rgba(109,40,217,.14))}.icf-brand strong{display:block;font-size:30px;line-height:.96;font-weight:900;letter-spacing:-.02em;color:#111066}.icf-brand small{display:block;margin-top:3px;font-size:12px;line-height:1;font-weight:900;color:#1b22c8}.icf-brand small b{color:#ec4899}.icf-top-stats{display:grid;grid-template-columns:repeat(6,minmax(96px,1fr));border-radius:22px;overflow:hidden}.icf-stat{min-height:62px;display:grid;grid-template-columns:28px minmax(0,1fr);gap:8px;align-items:center;padding:8px 12px;border-radius:0;box-shadow:inset 1px 0 0 rgba(109,40,217,.13)}.icf-stat:first-child{box-shadow:none}.icf-stat svg{color:var(--violet);stroke-width:2.25}.icf-stat strong{display:block;font-size:clamp(14px,.9vw,19px);line-height:1;font-weight:900}.icf-stat small{display:block;margin-top:4px;font-size:6.6px;line-height:1.05;font-weight:800;color:#312e81}.icf-partners{display:grid;grid-template-columns:1fr 1fr;gap:12px}.icf-partner{min-height:62px;display:flex;align-items:center;justify-content:center;gap:11px;border-radius:20px;padding:9px 11px}.icf-partner span:last-child{font-size:11px;line-height:1.05;font-weight:900}.icf-ms-mark{width:29px;height:29px;display:grid;grid-template-columns:1fr 1fr;gap:3px}.icf-ms-mark i{border-radius:1px}.icf-m365-mark{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(from 35deg,#1b22c8,#7c3aed,#38bdf8,#1b22c8)}.icf-m365-mark i{width:21px;height:21px;border-radius:9px;background:rgba(255,255,255,.74);transform:rotate(45deg)}
        .icf-layout{display:grid;grid-template-columns:320px minmax(700px,1fr) 290px;gap:16px;align-items:start}.icf-hero h1{margin:12px 0 14px;font-size:clamp(46px,3.2vw,66px);line-height:.95;font-weight:900;letter-spacing:0;color:var(--ink)}.icf-hero h1 span{background:linear-gradient(105deg,#1b22c8 0%,#7c3aed 42%,#ec4899 92%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.icf-hero h2{max-width:310px;margin:0 0 15px;font-size:17px;line-height:1.18;font-weight:900}.icf-hero p{max-width:310px;margin:0 0 18px;font-size:11.5px;line-height:1.55;font-weight:750;color:#17126e}.icf-feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.icf-feature{min-height:82px;display:grid;grid-template-columns:23px 1fr;gap:8px;align-items:start;padding:12px;border-radius:15px}.icf-feature svg{color:var(--violet)}.icf-feature strong,.icf-feature small{display:block}.icf-feature strong{font-size:8px;line-height:1.15;font-weight:900}.icf-feature small{margin-top:6px;font-size:6.2px;line-height:1.35;font-weight:800;color:var(--strong)}
        .icf-globe-art{position:relative;width:300px;height:305px;margin:26px 0 0 4px}.icf-globe-base{position:absolute;left:18px;right:18px;bottom:0;height:96px;border-radius:50%;background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.78),rgba(124,58,237,.3) 55%,rgba(39,16,154,.45));box-shadow:0 30px 64px rgba(109,40,217,.28);transform:perspective(720px) rotateX(64deg)}.icf-globe{position:absolute;left:72px;bottom:74px;width:155px;height:155px;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 30% 25%,#c4b5fd 0%,#7c3aed 42%,#27109a 82%);box-shadow:inset -20px -24px 38px rgba(17,16,102,.35),0 20px 48px rgba(109,40,217,.32)}.icf-globe i,.icf-globe b,.icf-globe em{position:absolute;border-radius:50%;border:2px solid rgba(255,255,255,.26)}.icf-globe i{inset:19px 42px}.icf-globe b{inset:42px 14px;transform:rotate(18deg)}.icf-globe em{left:-22px;right:-22px;top:71px;height:18px;border-color:rgba(255,255,255,.3)}.icf-globe-ring{position:absolute;left:42px;bottom:118px;width:215px;height:46px;border:7px solid rgba(245,158,11,.82);border-top-color:transparent;border-left-color:rgba(236,72,153,.7);border-radius:50%;transform:rotate(-13deg);filter:drop-shadow(0 10px 12px rgba(236,72,153,.2))}.icf-float-chip{position:absolute;width:50px;height:58px;display:grid;place-items:center;border-radius:16px;color:#6d28d9;background:rgba(255,255,255,.58);border:1px solid rgba(255,255,255,.8);box-shadow:0 18px 32px rgba(109,40,217,.18)}.icf-float-chip.chip-a{left:4px;bottom:80px}.icf-float-chip.chip-b{right:28px;bottom:162px}.icf-float-chip.chip-c{right:0;bottom:78px}.icf-float-chip.chip-d{left:58px;bottom:184px}
        .icf-center-stack{display:grid;gap:16px}.icf-ecosystem{position:relative;min-height:650px}.icf-connectors{position:absolute;inset:18px 18px 54px;z-index:0;pointer-events:none}.icf-connectors path{fill:none;stroke:rgba(109,40,217,.34);stroke-width:2.4;stroke-dasharray:7 9;filter:drop-shadow(0 0 8px rgba(124,58,237,.45))}.icf-center-orb{position:absolute;left:50%;top:50%;z-index:3;width:214px;height:214px;display:grid;place-items:center;align-content:center;text-align:center;border-radius:50%;color:white;background:radial-gradient(circle at 32% 22%,#a78bfa 0%,#6d28d9 44%,#3b1bc8 82%);box-shadow:0 0 0 12px rgba(255,255,255,.68),0 0 0 25px rgba(124,58,237,.16),0 0 64px rgba(124,58,237,.58),inset 0 -18px 38px rgba(17,16,102,.32);transform:translate(-50%,-50%)}.icf-center-orb strong{font-size:22px;line-height:1.15;font-weight:900}.icf-center-orb b{margin-top:10px;font-size:21px;line-height:1.13;font-weight:900}.icf-orb-icon{position:absolute;width:42px;height:42px;display:grid;place-items:center;border-radius:50%;color:#6d28d9;background:rgba(255,255,255,.9);box-shadow:0 12px 24px rgba(109,40,217,.2)}.icf-orb-icon.top{top:-70px;left:50%;transform:translateX(-50%)}.icf-orb-icon.left{left:-68px;top:50%;transform:translateY(-50%)}.icf-orb-icon.right{right:-68px;top:50%;transform:translateY(-50%)}.icf-orb-icon.bottom{bottom:-70px;left:50%;transform:translateX(-50%)}
        .icf-industry{position:absolute;z-index:2;width:43%;min-height:174px;display:grid;grid-template-columns:minmax(130px,.76fr) 1fr;align-items:center;gap:8px;border-radius:24px;padding:16px 17px 13px;border-color:rgba(137,112,255,.34);box-shadow:inset 0 1px 0 rgba(255,255,255,.98),0 18px 48px rgba(109,40,217,.11),0 0 0 1px rgba(109,40,217,.08)}.icf-top-left{left:3%;top:0}.icf-top-right{right:3%;top:0}.icf-middle-left,.icf-middle-right{width:40%;top:238px}.icf-middle-left{left:0}.icf-middle-right{right:0}.icf-bottom-left{left:8%;bottom:0}.icf-bottom-right{right:8%;bottom:0}.icf-top-right .icf-industry-copy,.icf-middle-right .icf-industry-copy,.icf-bottom-right .icf-industry-copy{order:2}.icf-top-right .icf-iso,.icf-middle-right .icf-iso,.icf-bottom-right .icf-iso{order:1}.icf-industry-copy{position:relative;z-index:2}.icf-industry-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:50%;color:white;background:linear-gradient(135deg,#6d28d9,#a855f7);box-shadow:0 12px 26px rgba(109,40,217,.24)}.icf-industry h3{margin:9px 0 10px;font-size:17px;line-height:1;font-weight:900}.icf-industry ul{display:grid;gap:6px;margin:0;padding:0;list-style:none}.icf-industry li{position:relative;padding-left:13px;font-size:8.5px;line-height:1.12;font-weight:850;color:#17126e}.icf-industry li:before{content:"";position:absolute;left:0;top:4px;width:5px;height:5px;border-radius:50%;background:#6d28d9;box-shadow:0 0 0 2px rgba(109,40,217,.12)}
        .icf-iso{position:relative;height:140px;min-width:168px;filter:drop-shadow(0 18px 22px rgba(109,40,217,.18))}.iso-base{position:absolute;left:8px;right:8px;bottom:3px;height:54px;border-radius:24px;background:linear-gradient(135deg,#312e81,#8b5cf6 58%,#f0abfc);box-shadow:0 20px 28px rgba(109,40,217,.24);transform:perspective(520px) rotateX(58deg)}.iso-building{position:absolute;bottom:44px;border-radius:9px 9px 5px 5px;background:linear-gradient(155deg,#c4b5fd,#5b21b6 68%,#21106e);box-shadow:inset -8px -8px 16px rgba(17,16,102,.28),0 15px 22px rgba(109,40,217,.18)}.iso-building:after{content:"";position:absolute;inset:12px 8px;background:repeating-linear-gradient(180deg,rgba(255,255,255,.72) 0 4px,transparent 4px 12px);opacity:.7}.iso-building.one{left:54px;width:46px;height:86px}.iso-building.two{left:101px;width:36px;height:66px}.iso-building.three{left:25px;width:30px;height:52px}.iso-badge{position:absolute;right:20px;top:8px;width:38px;height:38px;display:grid;place-items:center;border-radius:12px;color:white;background:linear-gradient(135deg,#ec4899,#7c3aed);box-shadow:0 12px 24px rgba(236,72,153,.24)}.iso-accent{position:absolute;border-radius:8px;background:linear-gradient(135deg,#f59e0b,#ec4899);box-shadow:0 9px 15px rgba(236,72,153,.18)}.iso-accent.a{left:20px;bottom:43px;width:20px;height:20px}.iso-accent.b{right:28px;bottom:36px;width:24px;height:16px}.iso-accent.c{left:82px;bottom:25px;width:30px;height:10px}.icf-iso-retail .iso-building.one{height:56px;width:72px;left:48px;background:linear-gradient(180deg,#fff,#7c3aed)}.icf-iso-retail .iso-building.one:before{content:"";position:absolute;left:0;right:0;top:0;height:18px;border-radius:9px 9px 0 0;background:repeating-linear-gradient(90deg,#ec4899 0 13px,#fff 13px 26px);z-index:1}.icf-iso-retail .iso-building.one:after{top:25px}.icf-iso-logistics .iso-building.one{width:74px;height:38px;left:42px;bottom:50px;background:linear-gradient(135deg,#ef4444,#7c3aed)}.icf-iso-logistics .iso-building.two{height:34px;left:104px;bottom:52px;background:linear-gradient(135deg,#93c5fd,#312e81)}.icf-iso-government .iso-building.one,.icf-iso-campus .iso-building.one{width:78px;height:66px;left:45px;background:linear-gradient(155deg,#ede9fe,#4f46e5 70%)}.icf-iso-government .iso-building.one:before,.icf-iso-campus .iso-building.one:before{content:"";position:absolute;left:50%;top:-28px;width:50px;height:32px;border-radius:50% 50% 4px 4px;background:#7c3aed;transform:translateX(-50%)}.icf-iso-finance .iso-accent.a,.icf-iso-finance .iso-accent.b{border-radius:50%;background:linear-gradient(135deg,#fbbf24,#f59e0b)}
        .icf-success-strip{display:grid;grid-template-columns:repeat(6,1fr);border-radius:22px;overflow:hidden}.icf-stat.compact{min-height:70px;border-radius:0}.icf-stat.compact strong{font-size:17px}.icf-stat.compact small{font-size:7px}
        .icf-right{display:grid;gap:18px}.icf-trust-card{padding:22px;border-radius:22px}.icf-trust-card h3{margin:0 0 18px;font-size:16px;font-weight:900}.icf-trust-row{display:grid;grid-template-columns:38px 1fr;gap:12px;align-items:center;padding:12px 0;border-top:1px solid rgba(109,40,217,.11)}.icf-trust-row:first-of-type{border-top:0}.icf-trust-row>span{width:36px;height:36px;display:grid;place-items:center;border-radius:11px;color:#6d28d9;background:rgba(109,40,217,.09);box-shadow:inset 0 0 0 1px rgba(109,40,217,.12)}.icf-trust-row strong,.icf-trust-row small{display:block}.icf-trust-row strong{font-size:10px;font-weight:900}.icf-trust-row small{margin-top:4px;font-size:7.3px;line-height:1.25;font-weight:800;color:var(--muted)}.icf-client-card{padding-bottom:17px}.icf-client-row{display:grid;grid-template-columns:20px 1fr;gap:10px;align-items:center;padding:9px 0;border-top:1px solid rgba(109,40,217,.11);font-size:10px;font-weight:900}.icf-client-row svg{color:#6d28d9}.icf-city-art{position:relative;height:210px}.city-base{position:absolute;left:24px;right:12px;bottom:0;height:72px;border-radius:50%;background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.75),rgba(124,58,237,.38) 58%,rgba(39,16,154,.52));box-shadow:0 24px 48px rgba(109,40,217,.26);transform:perspective(620px) rotateX(62deg)}.city-building{position:absolute;bottom:49px;width:38px;border-radius:8px 8px 4px 4px;background:linear-gradient(155deg,#ddd6fe,#5b21b6 72%);box-shadow:inset -7px -7px 15px rgba(17,16,102,.28)}.city-building.one{left:48px;height:82px}.city-building.two{left:90px;height:128px}.city-building.three{left:134px;height:104px}.city-building.four{right:36px;height:72px}.city-tower{position:absolute;left:123px;bottom:47px;width:70px;height:160px;border-radius:12px 12px 5px 5px;background:linear-gradient(155deg,#ede9fe,#7c3aed 66%,#27109a);clip-path:polygon(0 18%,50% 0,100% 18%,100% 100%,0 100%);box-shadow:0 18px 28px rgba(109,40,217,.2)}
        .icf-bottom{display:grid;grid-template-columns:minmax(420px,1.05fr) minmax(320px,.75fr) minmax(320px,.78fr);gap:18px;align-items:end;margin-top:20px}.icf-integrations{padding:16px 18px;border-radius:22px}.icf-integrations h3{margin:0 0 14px;text-align:center;font-size:13px;font-weight:900}.icf-integrations>div{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}.icf-integrations span{display:grid;place-items:center;gap:4px;text-align:center;border-left:1px solid rgba(109,40,217,.12);min-height:60px}.icf-integrations span:first-child{border-left:0}.icf-integrations i{width:29px;height:29px;display:grid;place-items:center;border-radius:9px;color:white;background:var(--app-color);font-style:normal}.icf-integrations strong{font-size:7.4px}.icf-integrations small{font-size:5.9px;color:var(--muted);font-weight:800}.icf-cta{min-height:108px;display:flex;align-items:center;justify-content:space-between;gap:18px;border:0;border-radius:24px;padding:0 30px;color:white;text-align:left;background:linear-gradient(110deg,#3328e7 0%,#7c3aed 45%,#ec4899 100%);font-size:20px;line-height:1.18;font-weight:900;box-shadow:0 22px 48px rgba(236,72,153,.25)}.icf-cta svg{flex:0 0 auto}.icf-contact{min-height:108px;display:grid;grid-template-columns:1fr 86px;gap:14px;align-items:center;padding:15px;border-radius:22px}.icf-contact div{display:grid;gap:10px}.icf-contact span{display:flex;align-items:center;gap:9px;font-size:11px;font-weight:900;color:#1b22c8}.icf-qr{width:84px;height:84px;display:grid;grid-template-columns:repeat(8,1fr);gap:3px;padding:7px;border:4px solid white;border-radius:9px;background:white}.icf-qr i{background:#111066}.icf-qr i:nth-child(2n),.icf-qr i:nth-child(5n),.icf-qr i:nth-child(11n),.icf-qr i:nth-child(17n){background:transparent}
        @media(max-width:1500px){.icf-topbar{grid-template-columns:290px minmax(560px,1fr) 315px;gap:12px}.icf-brand img{width:54px;height:54px}.icf-brand strong{font-size:25px}.icf-brand small{font-size:10px}.icf-layout{grid-template-columns:290px minmax(650px,1fr) 270px;gap:12px}.icf-industry{width:43%}.icf-middle-left,.icf-middle-right{width:39%}.icf-center-orb{width:188px;height:188px}.icf-center-orb strong,.icf-center-orb b{font-size:19px}.icf-industry{min-height:170px}.icf-iso{min-width:152px;transform:scale(.92);transform-origin:center}.icf-right{gap:13px}.icf-trust-card{padding:18px}.icf-trust-row{padding:10px 0}.icf-client-row{padding:8px 0}.icf-city-art{height:180px}.icf-bottom{grid-template-columns:minmax(390px,1.08fr) minmax(300px,.72fr) minmax(300px,.72fr);gap:14px}}
        @media(max-width:1180px){.icf-topbar{grid-template-columns:1fr}.icf-layout{grid-template-columns:1fr}.icf-hero{display:grid;grid-template-columns:minmax(280px,360px) minmax(280px,1fr);gap:20px;align-items:start}.icf-feature-grid{grid-column:1/2}.icf-globe-art{grid-column:2/3;grid-row:1/6;margin:20px auto 0}.icf-right{grid-template-columns:1fr 1fr}.icf-city-art{grid-column:1/-1;max-width:360px;margin:0 auto}.icf-top-stats{grid-template-columns:repeat(3,1fr)}.icf-partners{max-width:560px}.icf-ecosystem{min-height:720px}.icf-bottom{grid-template-columns:1fr 1fr}.icf-contact{grid-column:1/-1}}
        @media(max-width:900px){.icf-page{padding:18px 12px 24px}.icf-hero,.icf-right,.icf-bottom{grid-template-columns:1fr}.icf-partners{grid-column:auto}.icf-brand strong{font-size:24px}.icf-hero h1{font-size:44px}.icf-globe-art{grid-column:auto;grid-row:auto}.icf-top-stats,.icf-success-strip{grid-template-columns:repeat(2,1fr)}.icf-partners{grid-template-columns:1fr 1fr}.icf-ecosystem{display:grid;gap:12px;min-height:0}.icf-connectors{display:none}.icf-center-orb{position:relative;left:auto;top:auto;width:210px;height:210px;margin:0 auto 10px;transform:none}.icf-industry,.icf-middle-left,.icf-middle-right{position:relative;left:auto;right:auto;top:auto;bottom:auto;width:100%;min-height:180px}.icf-integrations>div{grid-template-columns:repeat(3,1fr)}.icf-integrations span{border-left:0}.icf-contact{grid-template-columns:1fr}.icf-qr{justify-self:start}}
        @media(max-width:560px){.icf-feature-grid,.icf-top-stats,.icf-partners,.icf-success-strip,.icf-integrations>div{grid-template-columns:1fr}.icf-brand{align-items:flex-start}.icf-brand img{width:48px;height:48px}.icf-brand strong{font-size:20px}.icf-stat,.icf-stat.compact{border-radius:18px;box-shadow:none}.icf-top-stats,.icf-success-strip{gap:8px;overflow:visible}.icf-industry{grid-template-columns:1fr;padding:16px}.icf-iso{min-width:0;transform:none}.icf-cta{min-height:130px;padding:22px;font-size:18px}.icf-orb-icon{display:none}}
      `}</style>

      <div className="icf-shell">
        <TopBar />
        <div className="icf-layout">
          <HeroSection />
          <div className="icf-center-stack">
            <IndustryEcosystem />
            <SuccessStatsStrip />
          </div>
          <RightTrustPanel />
        </div>
        <BottomSection />
      </div>
    </section>
  );
}
