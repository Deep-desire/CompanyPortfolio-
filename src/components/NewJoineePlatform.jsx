import { motion } from 'framer-motion';
import {
  Backpack,
  Bell,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Cpu,
  FileCheck2,
  FileText,
  Gauge,
  Globe2,
  GraduationCap,
  Headphones,
  Home,
  Laptop,
  LockKeyhole,
  Mail,
  MessageSquare,
  Network,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  UserRound,
  UsersRound,
} from 'lucide-react';

const stats = [
  { icon: UsersRound, value: '256', label: 'New Joiners This Month' },
  { icon: Building2, value: '18', label: 'Departments' },
  { icon: UserCheck, value: '12', label: 'Onboarding in Progress' },
  { icon: Gauge, value: '89%', label: 'Average Progress' },
  { icon: ShieldCheck, value: '98%', label: 'Task Completion' },
  { icon: Network, value: '25', label: 'Teams & Workspaces' },
];

const features = [
  { icon: FileCheck2, title: 'Personalized Onboarding', text: 'Tasks and learning paths customized for every role' },
  { icon: UsersRound, title: 'Team Workspaces', text: 'Collaborate and connect with your team' },
  { icon: BookOpen, title: 'Knowledge Sharing', text: 'Access policies, guides and resources' },
  { icon: LockKeyhole, title: 'Access Management', text: 'Role-based access to apps and systems' },
  { icon: Bell, title: 'Smart Notifications', text: 'Real-time alerts and important updates' },
  { icon: Gauge, title: 'Progress Dashboard', text: 'Track your onboarding journey in real-time' },
];

const sidebarItems = [
  [Home, 'Dashboard'],
  [UserRound, 'My Onboarding'],
  [ClipboardCheck, 'Tasks & Checklist'],
  [UsersRound, 'Team Workspace'],
  [BookOpen, 'Knowledge Center'],
  [Laptop, 'Access & IT Setup'],
  [GraduationCap, 'Training & Learning'],
  [Gauge, 'Progress Dashboard'],
  [Bell, 'Smart Notifications'],
  [Network, 'People Directory'],
  [FileText, 'Reports & Analytics'],
  [Settings, 'Settings'],
];

const tasks = [
  ['Personal Information Update', 'Update your personal details', 'Completed'],
  ['Company Policies Acknowledgement', 'Read and accept company policies', 'Completed'],
  ['IT Setup & Device Collection', 'Setup your laptop and required tools', 'In Progress'],
  ['Teams Introduction Call', 'Meet your team and manager', 'Pending'],
  ['Complete Mandatory Training', 'Finish assigned e-learning modules', 'Pending'],
  ['Benefits & Payroll Setup', 'Complete your payroll information', 'Pending'],
];

const channels = [
  ['General', 'Company updates and announcements', '5m ago', '#4f46e5'],
  ['New Joinees', 'Connect with fellow new joiners', '12m ago', '#10b981'],
  ['Project Alpha', 'Project discussions and updates', '28m ago', '#ec4899'],
  ['HR Support', 'HR policies and employee support', '1h ago', '#f59e0b'],
];

const quickLinks = [
  [FileText, 'Employee Handbook'],
  [FileCheck2, 'Company Policies'],
  [Network, 'Org Chart'],
  [Headphones, 'IT Helpdesk'],
  [Laptop, 'Training Portal'],
  [CircleHelp, 'FAQs'],
];

const activities = [
  ['Onboarding Kickoff Call', 'Today, 10:00 AM'],
  ['Team Introduction', 'Today, 02:00 PM'],
  ['HR Policies Training', 'Tomorrow, 11:00 AM'],
  ['IT Systems Training', 'May 28, 10:00 AM'],
  ['Benefits Overview', 'May 29, 02:00 PM'],
];

const recommendations = [
  [Sparkles, 'Company Culture', 'Learn about our values and work culture', 'Start Reading'],
  [Target, 'Product Overview', 'Understand our products and solutions', 'Start Learning'],
  [ShieldCheck, 'Tools & Systems', 'Get familiar with our tools and platforms', 'Explore Now'],
];

const notifications = [
  ['Welcome to DesireInfoWeb!', 'Your onboarding journey begins.', '2m ago', '#6d28d9'],
  ['Complete your IT setup', 'To access all systems.', '15m ago', '#ef4444'],
  ['You have a new task assigned', 'Company Policies Acknowledgement', '1h ago', '#f59e0b'],
  ['Join the team meeting', 'Onboarding Kickoff Call', '2h ago', '#10b981'],
  ['New training module unlocked', 'Code of Conduct & Compliance', '3h ago', '#8b5cf6'],
];

const accessItems = [
  ['Microsoft 365', 'Granted'],
  ['SharePoint', 'Granted'],
  ['Teams', 'Granted'],
  ['Outlook', 'Granted'],
  ['HR Portal', 'Pending'],
  ['Finance System', 'Pending'],
];

const integrations = [
  ['Teams', 'Collaboration', '#5b5fc7'],
  ['SharePoint', 'Knowledge', '#008272'],
  ['Outlook', 'Communication', '#0078d4'],
  ['OneDrive', 'Storage', '#2563eb'],
  ['Power Automate', 'Workflows', '#2563eb'],
  ['Microsoft 365', 'Security', '#6d28d9'],
];

function MicrosoftMark() {
  return (
    <span className="njp-ms-mark" aria-hidden="true">
      <i style={{ background: '#f35325' }} />
      <i style={{ background: '#81bc06' }} />
      <i style={{ background: '#05a6f0' }} />
      <i style={{ background: '#ffba08' }} />
    </span>
  );
}

function M365Mark() {
  return <span className="njp-m365-mark" aria-hidden="true"><i /></span>;
}

function Avatar({ name, large = false, image = false }) {
  const initials = name.split(' ').map((part) => part[0]).join('').slice(0, 2);
  return (
    <span className={`njp-avatar ${large ? 'large' : ''} ${image ? 'portrait' : ''}`}>
      {image ? <UserRound size={large ? 44 : 22} /> : initials}
    </span>
  );
}

function StatPill({ icon: Icon, value, label }) {
  return (
    <div className="njp-stat">
      <Icon size={24} aria-hidden="true" />
      <span><strong>{value}</strong><small>{label}</small></span>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="njp-feature njp-glass">
      <Icon size={22} aria-hidden="true" />
      <span><strong>{title}</strong><small>{text}</small></span>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="njp-hero-art" aria-hidden="true">
      <span className="njp-art-platform" />
      <span className="njp-bag">
        <Backpack size={68} />
        <i><Check size={34} /></i>
      </span>
      <span className="njp-doc"><FileText size={34} /></span>
      <span className="njp-plant"><i /><b /></span>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="njp-sidebar">
      <div className="njp-side-title"><span><Building2 size={17} />Onboarding Hub</span><span>=</span></div>
      <nav aria-label="Onboarding navigation">
        {sidebarItems.map(([Icon, label], index) => (
          <a href="#new-joinee-platform" className={`njp-menu ${index === 0 ? 'active' : ''}`} key={label}>
            <Icon size={14} aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>
      <div className="njp-side-profile">
        <Avatar name="Vijay Karthik" image />
        <span><strong>Vijay Karthik</strong><small>HR Manager</small><em>Online</em></span>
        <ChevronRight size={16} />
      </div>
    </aside>
  );
}

function ProgressRing() {
  return (
    <div className="njp-ring" aria-label="72 percent onboarding completed">
      <svg viewBox="0 0 120 120" role="img" aria-hidden="true">
        <circle cx="60" cy="60" r="46" />
        <circle cx="60" cy="60" r="46" pathLength="100" />
      </svg>
      <span><strong>72%</strong><small>Completed</small></span>
    </div>
  );
}

function OnboardingProgress() {
  const steps = [
    [CheckCircle2, '1. Welcome', 'Completed'],
    [Laptop, '2. Learn', 'Completed'],
    [ShieldCheck, '3. Setup', 'In Progress'],
    [UserRound, '4. Connect', 'Pending'],
    [FileText, '5. Contribute', 'Pending'],
  ];

  return (
    <article className="njp-progress-card njp-glass">
      <h3>Your Onboarding Progress</h3>
      <div className="njp-progress-body">
        <ProgressRing />
        <div className="njp-stepper">
          {steps.map(([Icon, title, status], index) => (
            <div className={`njp-step ${status.toLowerCase().replace(' ', '-')}`} key={title}>
              <span><Icon size={22} /></span>
              <b>{title}</b>
              <small>{status}</small>
              {index < steps.length - 1 && <i />}
            </div>
          ))}
        </div>
      </div>
      <div className="njp-overall">
        <span>Overall Progress</span>
        <i><b /></i>
        <strong>72% Completed</strong>
      </div>
    </article>
  );
}

function BuddyCard() {
  return (
    <article className="njp-buddy njp-glass">
      <h3>Meet Your Onboarding Buddy</h3>
      <div className="njp-buddy-main">
        <Avatar name="Sneha Patel" large image />
        <div>
          <strong>Sneha Patel</strong>
          <span>Senior HR Specialist</span>
          <p>I am here to help you settle in and make your onboarding experience smooth and successful.</p>
        </div>
      </div>
      <div className="njp-buddy-actions">
        {[MessageSquare, Phone, Mail, UsersRound].map((Icon, index) => (
          <button type="button" key={String(index)}><Icon size={13} />{['Chat', 'Call', 'Email', 'Teams'][index]}</button>
        ))}
      </div>
    </article>
  );
}

function TaskList() {
  return (
    <article className="njp-card njp-glass">
      <div className="njp-card-head"><h3>My Onboarding Tasks</h3><a href="#new-joinee-platform">View All</a></div>
      <div className="njp-tasks">
        {tasks.map(([title, text, status]) => (
          <div className="njp-task" key={title}>
            <span className={status === 'Completed' ? 'done' : ''}>{status === 'Completed' ? <Check size={11} /> : null}</span>
            <div><strong>{title}</strong><small>{text}</small></div>
            <b className={status.toLowerCase().replace(' ', '-')}>{status}</b>
          </div>
        ))}
      </div>
    </article>
  );
}

function TeamWorkspace() {
  return (
    <article className="njp-card njp-workspace njp-glass">
      <div className="njp-card-head"><h3>Team Workspace</h3><a href="#new-joinee-platform">View Workspace</a></div>
      <div className="njp-tabs"><span>General</span><span>Projects</span><span>HR Team</span><span>New Joinees</span></div>
      <div className="njp-channels">
        {channels.map(([title, text, time, color], index) => (
          <div className="njp-channel" key={title}>
            <i style={{ '--chip': color }}>{index + 1}</i>
            <div><strong># {title}</strong><small>{text}</small></div>
            <span><b /><b /><b />{time}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function QuickLinks() {
  return (
    <article className="njp-card njp-quick njp-glass">
      <h3>Quick Links</h3>
      <div className="njp-quick-grid">
        {quickLinks.map(([Icon, label]) => (
          <button type="button" key={label}>
            <Icon size={21} />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="njp-help">
        <span><strong>Need Help?</strong><small>Ask your onboarding buddy or reach out to HR Support.</small></span>
        <Headphones size={42} />
      </div>
    </article>
  );
}

function UpcomingActivities() {
  return (
    <article className="njp-card njp-upcoming njp-glass">
      <h3>Upcoming Activities</h3>
      <div className="njp-activities">
        {activities.map(([title, time]) => (
          <div className="njp-activity" key={title}>
            <CalendarDays size={17} />
            <span><strong>{title}</strong><small>{time}</small></span>
          </div>
        ))}
      </div>
    </article>
  );
}

function Recommended() {
  return (
    <article className="njp-card njp-recommend njp-glass">
      <h3>Recommended For You</h3>
      <p>Based on your role and interests</p>
      <div>
        {recommendations.map(([Icon, title, text, action]) => (
          <section key={title}>
            <Icon size={24} />
            <strong>{title}</strong>
            <small>{text}</small>
            <button type="button">{action}</button>
          </section>
        ))}
      </div>
    </article>
  );
}

function JourneyTimeline() {
  const timeline = [
    ['Day 1', 'Welcome & Orientation', 'Let us get you started'],
    ['Week 1', 'Learn & Setup', 'Get familiar with tools'],
    ['Month 1', 'Connect & Collaborate', 'Join your team'],
    ['Month 3', 'Contribute & Grow', 'Make an impact'],
  ];

  return (
    <article className="njp-card njp-timeline njp-glass">
      <div className="njp-card-head"><h3>Onboarding Journey Timeline</h3><a href="#new-joinee-platform">View Full Timeline</a></div>
      <div className="njp-line">
        {timeline.map(([period, title, text], index) => (
          <span className={index < 2 ? 'active' : ''} key={period}>
            <strong>{period}</strong>
            <b>{title}</b>
            <small>{text}</small>
          </span>
        ))}
      </div>
    </article>
  );
}

function Dashboard() {
  return (
    <motion.section className="njp-dashboard njp-glass" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
      <Sidebar />
      <div className="njp-main-panel">
        <div className="njp-dash-head">
          <div>
            <h2>Welcome aboard, Arjun!</h2>
            <p>We are excited to have you with us. Let us get you all set for success.</p>
          </div>
          <button type="button" className="njp-journey">View My Journey</button>
          <div className="njp-manager"><Avatar name="Vijay Karthik" image /><span><strong>Vijay Karthik</strong><small>HR Manager</small></span><Avatar name="Arjun Dev" image /></div>
          <div className="njp-tools"><button type="button"><Search size={16} /></button><button type="button"><Settings size={16} /></button><button type="button"><Bell size={16} /><i>4</i></button></div>
        </div>
        <div className="njp-grid">
          <OnboardingProgress />
          <BuddyCard />
          <TaskList />
          <TeamWorkspace />
          <QuickLinks />
          <UpcomingActivities />
          <NotificationsPanel className="njp-grid-notifications" />
          <AccessPanel className="njp-grid-access" />
          <Recommended />
          <JourneyTimeline />
        </div>
      </div>
    </motion.section>
  );
}

function NotificationsPanel({ className = '' }) {
  return (
    <article className={`njp-side-card njp-glass ${className}`}>
      <div className="njp-card-head"><h3>Smart Notifications</h3><a href="#new-joinee-platform">View All</a></div>
      <div className="njp-notes">
        {notifications.map(([title, text, time, color], index) => (
          <div className="njp-note" key={title}>
            <i style={{ '--note': color }}>{index + 1}</i>
            <span><strong>{title}</strong><small>{text}</small></span>
            <em>{time}</em>
          </div>
        ))}
      </div>
    </article>
  );
}

function AccessPanel({ className = '' }) {
  return (
    <article className={`njp-side-card njp-glass ${className}`}>
      <div className="njp-card-head"><h3>Access Management</h3><a href="#new-joinee-platform">View All</a></div>
      <div className="njp-access-list">
        {accessItems.map(([title, status]) => (
          <div className="njp-access" key={title}>
            <span><Cpu size={15} />{title}</span>
            <b className={status === 'Granted' ? 'granted' : 'pending'}>{status}</b>
          </div>
        ))}
      </div>
      <button type="button" className="njp-request">Request Access</button>
    </article>
  );
}

function QRPlaceholder() {
  return <span className="njp-qr" aria-label="QR code placeholder">{Array.from({ length: 49 }, (_, index) => <i key={index} />)}</span>;
}

function BottomArea() {
  return (
    <motion.div className="njp-bottom" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.62 }} viewport={{ once: true }}>
      <div className="njp-integrations njp-glass">
        <h3>Seamlessly Integrated with Microsoft 365</h3>
        <div>
          {integrations.map(([title, subtitle, color]) => (
            <span key={title}><i style={{ '--app': color }}>{title === 'Power Automate' ? 'PA' : title[0]}</i><strong>{title}</strong><small>{subtitle}</small></span>
          ))}
        </div>
      </div>
      <button type="button" className="njp-cta">
        <span>Your Journey.<br />Your Growth.<br />Our Commitment.</span>
        <UsersRound size={58} />
      </button>
      <div className="njp-contact njp-glass">
        <div>
          <span><Globe2 size={16} />www.desireinfoweb.com</span>
          <span><Mail size={16} />vijay@desireinfoweb.com</span>
          <span><Phone size={16} />+91-8780468807</span>
        </div>
        <QRPlaceholder />
      </div>
    </motion.div>
  );
}

export default function NewJoineePlatform() {
  return (
    <section className="njp-page" id="new-joinee-platform">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .njp-page,.njp-page *{box-sizing:border-box}
        .njp-page{--ink:#111066;--muted:#66639b;--violet:#6d28d9;--pink:#ec4899;--green:#10b981;min-height:100vh;position:relative;isolation:isolate;overflow:hidden;padding:22px clamp(14px,1.7vw,30px) 24px;color:var(--ink);font-family:"Inter","Plus Jakarta Sans","Manrope",system-ui,sans-serif;background:radial-gradient(circle at 13% 18%,rgba(236,72,153,.15),transparent 24%),radial-gradient(circle at 76% 6%,rgba(109,40,217,.15),transparent 30%),radial-gradient(circle at 88% 80%,rgba(56,189,248,.12),transparent 28%),linear-gradient(135deg,#fbfaff 0%,#f7f2ff 48%,#fff7fd 100%)}
        .njp-page:before{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(109,40,217,.04) 1px,transparent 1px),linear-gradient(0deg,rgba(109,40,217,.035) 1px,transparent 1px);background-size:74px 74px}
        .njp-shell{width:min(100%,1800px);margin:0 auto;position:relative;z-index:1}
        .njp-glass{background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.54));border:1px solid rgba(255,255,255,.76);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 60px rgba(109,40,217,.14),0 0 0 1px rgba(130,94,255,.12);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px)}
        .njp-header{display:grid;grid-template-columns:315px minmax(0,1fr) 300px;gap:12px;align-items:center;margin-bottom:12px}
        .njp-brand{display:flex;align-items:center;gap:12px}.njp-brand img{width:60px;height:60px;object-fit:contain;filter:drop-shadow(0 16px 26px rgba(109,40,217,.18))}.njp-brand h2{margin:0;font-size:27px;line-height:1;font-weight:900}.njp-brand p{margin:4px 0 0;font-size:10.5px;line-height:1.05;font-weight:800}.njp-brand p span{color:var(--pink)}
        .njp-stats{min-height:58px;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));align-items:center;border-radius:20px;padding:6px 10px;background:linear-gradient(180deg,rgba(255,255,255,.9),rgba(246,240,255,.75));border-color:rgba(126,88,255,.36)}
        .njp-stat{display:grid;grid-template-columns:25px minmax(0,1fr);gap:8px;align-items:center;min-height:36px;padding:0 8px;border-left:1px solid rgba(109,40,217,.16)}.njp-stat:first-child{border-left:0}.njp-stat svg{color:var(--violet);stroke-width:2.15}.njp-stat strong{display:block;font-size:clamp(13px,.83vw,17px);line-height:.95;font-weight:900}.njp-stat small{display:block;margin-top:4px;font-size:6.5px;line-height:1.05;font-weight:800}
        .njp-partners{display:grid;grid-template-columns:1fr 1fr;gap:11px}.njp-partner{min-height:58px;display:flex;align-items:center;justify-content:center;gap:11px;border-radius:18px;padding:8px 11px}.njp-partner span:last-child{font-size:11.5px;line-height:1.05;font-weight:900}.njp-ms-mark{width:29px;height:29px;display:grid;grid-template-columns:1fr 1fr;gap:3px}.njp-ms-mark i{border-radius:1px}.njp-m365-mark{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(from 35deg,#1b22c8,#7c3aed,#38bdf8,#1b22c8)}.njp-m365-mark i{width:21px;height:21px;border-radius:9px;background:rgba(255,255,255,.72);transform:rotate(45deg)}
        .njp-layout{display:grid;grid-template-columns:315px minmax(0,1fr);gap:12px;align-items:start}.njp-left h1{margin:28px 0 12px;font-size:clamp(39px,3.05vw,61px);line-height:.98;font-weight:900;letter-spacing:0}.njp-left h1 span{background:linear-gradient(105deg,#111066 0%,#1b22c8 38%,#ec4899 88%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.njp-left h2{max-width:275px;margin:0 0 14px;font-size:18px;line-height:1.12;font-weight:900}.njp-left p{max-width:267px;margin:0 0 15px;font-size:11px;line-height:1.43;font-weight:700}
        .njp-feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}.njp-feature{min-height:73px;display:grid;grid-template-columns:23px 1fr;gap:7px;align-items:start;padding:10px 9px;border-radius:14px}.njp-feature svg{color:var(--violet)}.njp-feature strong,.njp-feature small{display:block}.njp-feature strong{font-size:8px;line-height:1.12;font-weight:900}.njp-feature small{margin-top:5px;font-size:5.9px;line-height:1.3;font-weight:800;color:#2f2b79}
        .njp-hero-art{position:relative;width:270px;height:240px;margin:18px 0 0 6px}.njp-art-platform{position:absolute;left:10px;right:22px;bottom:0;height:72px;border-radius:30px;background:linear-gradient(135deg,rgba(255,255,255,.88),rgba(109,40,217,.32));box-shadow:0 28px 54px rgba(109,40,217,.27);transform:perspective(620px) rotateX(58deg)}.njp-bag{position:absolute;left:44px;bottom:60px;width:112px;height:128px;display:grid;place-items:center;border-radius:24px;color:white;background:linear-gradient(145deg,#2f27d9,#9f5cff);box-shadow:0 26px 45px rgba(109,40,217,.32)}.njp-bag i{position:absolute;right:13px;top:34px;width:42px;height:42px;display:grid;place-items:center;border-radius:50%;background:linear-gradient(135deg,#f59e0b,#f472b6);border:5px solid rgba(255,255,255,.6)}.njp-doc{position:absolute;right:46px;bottom:72px;width:66px;height:84px;display:grid;place-items:center;border-radius:14px;color:#7c3aed;background:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.75);box-shadow:0 18px 36px rgba(109,40,217,.18)}.njp-plant{position:absolute;right:36px;bottom:38px;width:34px;height:42px}.njp-plant i,.njp-plant b{position:absolute;bottom:0;border-radius:24px;background:#8b5cf6}.njp-plant i{left:8px;width:13px;height:42px;transform:rotate(-28deg)}.njp-plant b{right:2px;width:12px;height:32px;transform:rotate(33deg)}
        .njp-dashboard{display:grid;grid-template-columns:180px minmax(0,1fr);min-height:710px;overflow:hidden;border-radius:28px}.njp-sidebar{display:flex;flex-direction:column;min-height:710px;padding:16px 10px 12px;color:white;background:linear-gradient(180deg,#27109a 0%,#17065f 100%)}.njp-side-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;font-size:11px;font-weight:900}.njp-side-title span:first-child{display:flex;align-items:center;gap:8px}.njp-sidebar nav{display:grid;gap:4px}.njp-menu{display:flex;align-items:center;gap:8px;min-height:28px;padding:0 9px;border-radius:9px;color:rgba(255,255,255,.92);font-size:7.6px;font-weight:800;text-decoration:none}.njp-menu.active{background:linear-gradient(90deg,#6d28d9,#c026d3);color:white}.njp-side-profile{margin-top:auto;display:grid;grid-template-columns:33px 1fr 14px;gap:8px;align-items:center;padding:9px;border-radius:13px;background:rgba(255,255,255,.09);box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}.njp-side-profile strong,.njp-side-profile small,.njp-side-profile em{display:block}.njp-side-profile strong{font-size:8px}.njp-side-profile small{font-size:6.5px}.njp-side-profile em{margin-top:2px;color:#34d399;font-size:6px;font-style:normal}
        .njp-avatar{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;color:white;background:linear-gradient(135deg,#f97316,#6d28d9);font-size:8px;font-weight:900}.njp-avatar.large{width:76px;height:76px}.njp-avatar.portrait{background:linear-gradient(135deg,#f7e9df,#dbeafe);color:#111066;box-shadow:inset 0 -7px 18px rgba(109,40,217,.16)}
        .njp-main-panel{padding:17px 16px}.njp-dash-head{display:grid;grid-template-columns:1fr 126px 150px 110px;gap:10px;align-items:center;margin-bottom:13px}.njp-dash-head h2{margin:0;font-size:17px;font-weight:900}.njp-dash-head p{margin:3px 0 0;font-size:8.2px;font-weight:800;color:#312e81}.njp-journey{height:34px;border:0;border-radius:9px;color:white;background:linear-gradient(100deg,#5127f1,#a855f7);font-size:8px;font-weight:900;box-shadow:0 12px 25px rgba(109,40,217,.26)}.njp-manager{display:grid;grid-template-columns:24px 1fr 24px;gap:6px;align-items:center}.njp-manager .njp-avatar{width:24px;height:24px}.njp-manager strong,.njp-manager small{display:block}.njp-manager strong{font-size:7px}.njp-manager small{font-size:6px}.njp-tools{display:flex;justify-content:flex-end;gap:7px}.njp-tools button{position:relative;width:30px;height:30px;border:1px solid rgba(109,40,217,.14);border-radius:9px;background:rgba(255,255,255,.65);color:#4f46e5}.njp-tools i{position:absolute;right:-4px;top:-5px;display:grid;place-items:center;width:14px;height:14px;border-radius:50%;background:#ef4444;color:white;font-size:7px;font-style:normal;font-weight:900}
        .njp-grid{display:grid;grid-template-columns:1.05fr 1.05fr .72fr 1fr;gap:10px}.njp-progress-card{grid-column:1/4;min-height:210px;padding:16px 18px;border-radius:16px}.njp-progress-card h3,.njp-card h3,.njp-buddy h3,.njp-side-card h3{margin:0;font-size:10.5px;font-weight:900}.njp-progress-body{display:grid;grid-template-columns:122px 1fr;gap:18px;align-items:center;margin-top:14px}.njp-ring{position:relative;width:112px;height:112px}.njp-ring svg{width:112px;height:112px;transform:rotate(-90deg)}.njp-ring circle{fill:none;stroke-width:12;stroke-linecap:round}.njp-ring circle:first-child{stroke:rgba(109,40,217,.12)}.njp-ring circle:last-child{stroke:url(#none);stroke:#6d28d9;stroke-dasharray:72 100}.njp-ring span{position:absolute;inset:0;display:grid;place-items:center;align-content:center;text-align:center}.njp-ring strong{font-size:25px;line-height:1;font-weight:900}.njp-ring small{font-size:7px;font-weight:900}.njp-stepper{display:grid;grid-template-columns:repeat(5,1fr);align-items:start}.njp-step{position:relative;text-align:center}.njp-step>span{width:44px;height:44px;margin:0 auto 7px;display:grid;place-items:center;border-radius:16px;color:#6d28d9;background:linear-gradient(180deg,rgba(255,255,255,.85),rgba(109,40,217,.08));border:1px solid rgba(109,40,217,.16)}.njp-step.completed>span{color:white;background:linear-gradient(135deg,#5127f1,#8b5cf6)}.njp-step b,.njp-step small{display:block}.njp-step b{font-size:8px}.njp-step small{font-size:7px;font-weight:900;color:#66639b}.njp-step.completed small{color:#10b981}.njp-step.in-progress small{color:#4f46e5}.njp-step i{position:absolute;top:21px;left:72%;right:-28%;height:2px;background:#8b5cf6}.njp-step i:after{content:"";position:absolute;right:0;top:-3px;width:8px;height:8px;border-top:2px solid #8b5cf6;border-right:2px solid #8b5cf6;transform:rotate(45deg)}.njp-overall{display:grid;grid-template-columns:100px 1fr 100px;gap:10px;align-items:center;margin-top:12px;font-size:8px;font-weight:900}.njp-overall i{height:7px;border-radius:999px;background:rgba(109,40,217,.14)}.njp-overall b{display:block;width:72%;height:100%;border-radius:inherit;background:linear-gradient(90deg,#5127f1,#a855f7)}
        .njp-buddy{grid-column:4/5;min-height:210px;padding:16px;border-radius:16px}.njp-buddy-main{display:grid;grid-template-columns:82px 1fr;gap:12px;align-items:center;margin-top:12px}.njp-buddy-main strong,.njp-buddy-main span{display:block}.njp-buddy-main strong{font-size:12px}.njp-buddy-main span{font-size:8px;font-weight:800}.njp-buddy-main p{margin:10px 0 0;font-size:8px;line-height:1.45;font-weight:700;color:#312e81}.njp-buddy-actions{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:13px}.njp-buddy-actions button{height:28px;border:1px solid rgba(109,40,217,.14);border-radius:8px;background:rgba(255,255,255,.6);color:#4f46e5;font-size:7px;font-weight:900;display:flex;align-items:center;justify-content:center;gap:4px}
        .njp-card{padding:15px;border-radius:16px}.njp-card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.njp-card-head a{font-size:7px;color:#6d28d9;font-weight:900;text-decoration:none}.njp-tasks{display:grid;gap:8px}.njp-task{display:grid;grid-template-columns:16px 1fr 58px;gap:8px;align-items:start}.njp-task>span{width:15px;height:15px;border:1px solid #8b5cf6;border-radius:4px;color:white}.njp-task>span.done{display:grid;place-items:center;background:#6d28d9}.njp-task strong,.njp-task small{display:block}.njp-task strong{font-size:7.5px}.njp-task small{font-size:6px;color:#66639b;font-weight:800}.njp-task b{justify-self:end;padding:4px 7px;border-radius:8px;font-size:6px}.njp-task .completed{color:#047857;background:#d1fae5}.njp-task .in-progress{color:#92400e;background:#fef3c7}.njp-task .pending{color:#312e81;background:#ede9fe}
        .njp-workspace{grid-column:2/4}.njp-tabs{display:flex;gap:6px;margin-bottom:8px}.njp-tabs span{padding:5px 8px;border-radius:8px;background:rgba(109,40,217,.08);font-size:6.8px;font-weight:900}.njp-channels{display:grid;gap:8px}.njp-channel{display:grid;grid-template-columns:22px 1fr 65px;gap:8px;align-items:center}.njp-channel i{width:22px;height:22px;display:grid;place-items:center;border-radius:7px;color:white;background:var(--chip);font-style:normal;font-size:7px;font-weight:900}.njp-channel strong,.njp-channel small{display:block}.njp-channel strong{font-size:7.5px}.njp-channel small{font-size:6px;color:#66639b;font-weight:800}.njp-channel span{display:flex;align-items:center;justify-content:flex-end;gap:1px;font-size:5.8px;color:#66639b;font-weight:900}.njp-channel b{width:14px;height:14px;border-radius:50%;background:linear-gradient(135deg,#f97316,#6d28d9);border:2px solid white}
        .njp-quick-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px}.njp-quick-grid button{min-height:54px;border:1px solid rgba(109,40,217,.14);border-radius:12px;background:rgba(255,255,255,.55);color:#4f46e5;font-size:6.8px;font-weight:900;display:grid;place-items:center;gap:4px}.njp-help{margin-top:10px;min-height:50px;display:flex;align-items:center;justify-content:space-between;padding:10px;border-radius:12px;color:white;background:linear-gradient(105deg,#5127f1,#a855f7)}.njp-help strong,.njp-help small{display:block}.njp-help strong{font-size:10px}.njp-help small{font-size:6.5px;line-height:1.25}
        .njp-upcoming{grid-column:1/2}.njp-grid-notifications{grid-column:2/4}.njp-grid-access{grid-column:4/5}.njp-activities{display:grid;gap:10px;margin-top:10px}.njp-activity{display:grid;grid-template-columns:24px 1fr;gap:8px;align-items:center}.njp-activity svg{padding:4px;width:24px;height:24px;border-radius:7px;color:#6d28d9;background:rgba(109,40,217,.1)}.njp-activity strong,.njp-activity small{display:block}.njp-activity strong{font-size:7.5px}.njp-activity small{font-size:6px;color:#66639b;font-weight:800}
        .njp-recommend{grid-column:1/3}.njp-recommend p{margin:4px 0 12px;font-size:7px;color:#66639b;font-weight:800}.njp-recommend>div{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.njp-recommend section{min-height:78px;padding:10px;border-radius:12px;background:rgba(255,255,255,.52);border:1px solid rgba(109,40,217,.1)}.njp-recommend svg{color:#6d28d9}.njp-recommend strong,.njp-recommend small{display:block}.njp-recommend strong{font-size:7.5px}.njp-recommend small{margin:5px 0 8px;font-size:5.8px;line-height:1.3;color:#66639b;font-weight:800}.njp-recommend button{height:22px;border:0;border-radius:7px;background:rgba(109,40,217,.09);color:#6d28d9;font-size:6px;font-weight:900}
        .njp-timeline{grid-column:3/5}.njp-line{display:grid;grid-template-columns:repeat(4,1fr);position:relative;margin-top:16px}.njp-line:before{content:"";position:absolute;left:12%;right:12%;bottom:14px;height:2px;background:rgba(109,40,217,.25)}.njp-line span{position:relative;text-align:center;padding-bottom:24px}.njp-line span:after{content:"";position:absolute;left:50%;bottom:8px;width:12px;height:12px;border-radius:50%;background:#f7f2ff;border:2px solid rgba(109,40,217,.35);transform:translateX(-50%)}.njp-line span.active:after{background:#6d28d9;border-color:#6d28d9}.njp-line strong,.njp-line b,.njp-line small{display:block}.njp-line strong{font-size:9px;color:#6d28d9}.njp-line b{margin-top:4px;font-size:7px}.njp-line small{font-size:5.8px;color:#66639b;font-weight:800}
        .njp-side-card{min-height:100%;padding:15px;border-radius:17px}.njp-notes{display:grid;gap:12px}.njp-note{display:grid;grid-template-columns:25px 1fr 34px;gap:8px;align-items:start}.njp-note i{width:25px;height:25px;display:grid;place-items:center;border-radius:8px;color:var(--note);background:color-mix(in srgb,var(--note) 14%,white);font-size:7px;font-style:normal;font-weight:900}.njp-note strong,.njp-note small{display:block}.njp-note strong{font-size:7px}.njp-note small{margin-top:3px;font-size:5.8px;line-height:1.25;color:#66639b;font-weight:800}.njp-note em{font-size:5.8px;font-style:normal;color:#66639b;font-weight:900}
        .njp-access-list{display:grid;gap:9px;margin-top:10px}.njp-access{display:flex;align-items:center;justify-content:space-between;gap:8px}.njp-access span{display:flex;align-items:center;gap:7px;font-size:7.2px;font-weight:900}.njp-access svg{color:#6d28d9}.njp-access b{padding:4px 8px;border-radius:8px;font-size:6px}.njp-access .granted{color:#047857;background:#d1fae5}.njp-access .pending{color:#be123c;background:#ffe4e6}.njp-request{width:100%;height:32px;margin-top:13px;border:0;border-radius:9px;color:white;background:linear-gradient(100deg,#5127f1,#a855f7);font-size:8px;font-weight:900}
        .njp-bottom{display:grid;grid-template-columns:525px 330px 330px;gap:16px;align-items:end;margin:14px 0 0 130px}.njp-integrations{min-height:92px;padding:13px 18px;border-radius:17px}.njp-integrations h3{margin:0 0 10px;text-align:center;font-size:12px}.njp-integrations>div{display:grid;grid-template-columns:repeat(6,1fr)}.njp-integrations span{display:grid;place-items:center;gap:2px;border-left:1px solid rgba(109,40,217,.14);text-align:center}.njp-integrations span:first-child{border-left:0}.njp-integrations i{width:24px;height:24px;display:grid;place-items:center;border-radius:7px;color:white;background:var(--app);font-style:normal;font-size:8px;font-weight:900}.njp-integrations strong{font-size:7px}.njp-integrations small{font-size:5.8px;color:#66639b}.njp-cta{min-height:92px;display:flex;align-items:center;justify-content:space-between;border:0;border-radius:18px;padding:0 26px;color:white;background:linear-gradient(110deg,#3328e7 0%,#7c3aed 42%,#ec4899 84%);font-size:20px;line-height:1.15;font-weight:900;box-shadow:0 20px 42px rgba(236,72,153,.24)}.njp-contact{min-height:92px;display:grid;grid-template-columns:1fr 78px;gap:13px;align-items:center;padding:12px 14px;border-radius:17px}.njp-contact div{display:grid;gap:8px}.njp-contact span{display:flex;align-items:center;gap:9px;font-size:11px;font-weight:900}.njp-qr{width:74px;height:74px;display:grid;grid-template-columns:repeat(7,1fr);gap:3px;padding:6px;border:4px solid white;border-radius:8px;background:white}.njp-qr i{background:#111066}.njp-qr i:nth-child(2n),.njp-qr i:nth-child(5n),.njp-qr i:nth-child(11n){background:transparent}
        @media(max-width:1280px){.njp-header,.njp-layout,.njp-bottom{grid-template-columns:1fr;margin-left:0}.njp-stats{overflow-x:auto;grid-template-columns:repeat(6,150px)}.njp-partners{max-width:520px}.njp-left{display:grid;grid-template-columns:minmax(280px,360px) 1fr;gap:20px}.njp-bottom{grid-template-columns:1fr 1fr}}
        @media(max-width:980px){.njp-dashboard,.njp-dash-head,.njp-grid,.njp-bottom,.njp-contact{grid-template-columns:1fr}.njp-sidebar{min-height:auto}.njp-sidebar nav{grid-template-columns:repeat(3,1fr)}.njp-side-profile{display:none}.njp-progress-card,.njp-buddy,.njp-workspace,.njp-recommend,.njp-timeline,.njp-upcoming,.njp-grid-notifications,.njp-grid-access{grid-column:auto}.njp-integrations>div{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:680px){.njp-page{padding:16px 12px 22px}.njp-partners,.njp-feature-grid,.njp-left,.njp-recommend>div,.njp-integrations>div,.njp-progress-body,.njp-stepper,.njp-buddy-main{grid-template-columns:1fr}.njp-left h1{font-size:38px}.njp-hero-art{display:none}.njp-dashboard{border-radius:20px}.njp-main-panel{padding:14px 12px}.njp-sidebar nav{grid-template-columns:repeat(2,1fr)}.njp-overall{grid-template-columns:1fr}.njp-step i{display:none}.njp-quick-grid{grid-template-columns:repeat(2,1fr)}.njp-line{grid-template-columns:1fr}.njp-line:before{display:none}.njp-line span{padding:0 0 16px}.njp-line span:after{display:none}.njp-cta{font-size:18px}}
      `}</style>

      <div className="njp-shell">
        <motion.header className="njp-header" initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
          <div className="njp-brand"><img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" /><div><h2>DesireInfoWeb</h2><p>Your Extended <span>Technology Partner</span></p></div></div>
          <div className="njp-stats njp-glass">{stats.map((item) => <StatPill key={item.label} {...item} />)}</div>
          <div className="njp-partners"><div className="njp-partner njp-glass"><MicrosoftMark /><span>Microsoft<br />Solutions Partner</span></div><div className="njp-partner njp-glass"><M365Mark /><span>Built on<br />Microsoft 365</span></div></div>
        </motion.header>

        <div className="njp-layout">
          <motion.aside className="njp-left" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.64 }} viewport={{ once: true }}>
            <div>
              <h1>New <span>Joinee</span><br />Onboarding<br />Platform</h1>
              <h2>Welcome. Engage. Empower. Your Journey Starts Here.</h2>
              <p>A personalized onboarding platform that helps new employees integrate seamlessly, collaborate effectively, and become productive faster.</p>
              <div className="njp-feature-grid">{features.map((item) => <FeatureCard key={item.title} {...item} />)}</div>
            </div>
            <HeroIllustration />
          </motion.aside>
          <Dashboard />
        </div>
        <BottomArea />
      </div>
    </section>
  );
}
