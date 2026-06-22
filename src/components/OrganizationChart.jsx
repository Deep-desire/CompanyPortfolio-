import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  Database,
  Download,
  Expand,
  Eye,
  Filter,
  Globe2,
  HelpCircle,
  Home,
  Import,
  LineChart,
  Mail,
  MapPin,
  Network,
  Phone,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  Sparkles,
  SquareMenu,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
  Workflow,
} from 'lucide-react';

const stats = [
  { icon: UsersRound, value: '256', label: 'Total Employees' },
  { icon: Building2, value: '18', label: 'Departments' },
  { icon: MapPin, value: '7', label: 'Locations' },
  { icon: UserRoundCheck, value: '124', label: 'Managers' },
  { icon: Eye, value: '89%', label: 'HR Visibility' },
  { icon: ShieldCheck, value: '98%', label: 'Data Accuracy' },
];

const features = [
  { icon: CircleUserRound, title: 'Employee Profiles', text: 'Photos, titles and contact details' },
  { icon: Building2, title: 'Department Icons', text: 'Visual department representation' },
  { icon: Workflow, title: 'Clickable Cards', text: 'Click to view full employee details' },
  { icon: UsersRound, title: 'Team Visibility', text: 'Clear team and reporting structure' },
  { icon: BarChart3, title: 'Reporting Hierarchy', text: 'Top-down reporting structure' },
  { icon: LineChart, title: 'HR Dashboard', text: 'Real-time HR insights and analytics' },
];

const sidebarItems = [
  [Home, 'Overview'],
  [Network, 'Organization Chart'],
  [UsersRound, 'Employees'],
  [Building2, 'Departments'],
  [MapPin, 'Locations'],
  [UsersRound, 'Teams'],
  [BarChart3, 'Reports'],
  [BriefcaseBusiness, 'HR Dashboard'],
  [LineChart, 'Analytics'],
  [Import, 'Import / Export'],
  [Settings, 'Settings'],
  [HelpCircle, 'Help & Support'],
];

const departments = [
  { icon: Settings, color: '#6d28d9', title: 'Engineering', name: 'Karthik Reddy', role: 'Tech Lead', count: '38 Employees' },
  { icon: Database, color: '#ef4444', title: 'Product', name: 'Anita Sharma', role: 'Head of Product', count: '22 Employees' },
  { icon: Sparkles, color: '#f97316', title: 'Design', name: 'Sneha Patel', role: 'Design Director', count: '18 Employees' },
  { icon: Share2, color: '#7c3aed', title: 'Marketing', name: 'Rahul Verma', role: 'Marketing Head', count: '34 Employees' },
  { icon: BarChart3, color: '#2563eb', title: 'Sales', name: 'John Mathew', role: 'Sales Director', count: '44 Employees' },
  { icon: UsersRound, color: '#10b981', title: 'HR', name: 'Priya Nair', role: 'HR Manager', count: '15 Employees' },
  { icon: BriefcaseBusiness, color: '#f59e0b', title: 'Finance', name: 'Rohit Gupta', role: 'Finance Manager', count: '16 Employees' },
];

const employees = [
  ['Arjun Dev', 'Senior Developer', 'Engineering'], ['Rikita Joshi', 'Product Manager', 'Product'], ['Apeksha Das', 'UI/UX Lead', 'Design'], ['Kunal Shah', 'Digital Marketing', 'Marketing'], ['David George', 'Sales Manager', 'Sales'], ['Lakshmi Menon', 'HR Executive', 'HR'], ['Rajiv Verma', 'Accountant', 'Finance'],
  ['Meera Iyer', 'Software Engineer', 'Engineering'], ['Nikhil Jain', 'Associate PM', 'Product'], ['Vikram Nair', 'Graphic Designer', 'Design'], ['Tanya Malhotra', 'Content Strategist', 'Marketing'], ['Neha Kapoor', 'BD Executive', 'Sales'], ['Farhan Ali', 'HR Recruiter', 'HR'], ['Simran Arora', 'Finance Analyst', 'Finance'],
  ['Karan Singh', 'DevOps Engineer', 'Engineering'], ['Pooja Mehta', 'Product Analyst', 'Product'], ['Ayesha Khan', 'Motion Designer', 'Design'], ['Siddharth Rao', 'SEO Specialist', 'Marketing'], ['Manish Yadav', 'Business Dev.', 'Sales'], ['Divya Subramani', 'HR Coordinator', 'HR'], ['Deepak Nair', 'Auditor', 'Finance'],
];

const employeePhones = [
  '+91 91234 56789', '+91 98765 43210', '+91 90123 45677', '+91 91123 56660', '+91 99088 33445', '+91 99880 99668', '+91 90800 33445',
  '+91 91000 65554', '+91 90002 22034', '+91 89990 10233', '+91 91201 33445', '+91 98000 22334', '+91 99880 99669', '+91 90840 45666',
  '+91 88776 55433', '+91 80609 80156', '+91 99800 33445', '+91 88776 22910', '+91 90009 66778', '+91 91234 56678', '+91 88776 99011',
];

const benefits = [
  { icon: UsersRound, title: 'Interactive & Clickable', text: 'Click on any employee or department card to view complete details and connect instantly.' },
  { icon: Network, title: 'Real-time Hierarchy', text: 'Live reporting structure with visual indicators for better team understanding.' },
  { icon: ShieldCheck, title: 'Secure & Role-based', text: 'Role-based access ensures data security and HR visibility for every user.' },
  { icon: Database, title: 'Centralized Data', text: 'All employee and organizational data managed in one secure platform.' },
  { icon: BarChart3, title: 'HR Insights', text: 'Powerful dashboards and analytics to make data-driven people decisions.' },
];

const distribution = [
  ['Engineering', '78 (30%)', '#6d28d9'],
  ['Product', '42 (16%)', '#ef4444'],
  ['Design', '26 (10%)', '#f97316'],
  ['Marketing', '34 (13%)', '#7c3aed'],
  ['Sales', '51 (20%)', '#10b981'],
  ['HR', '15 (6%)', '#38bdf8'],
  ['Finance', '16 (6%)', '#f59e0b'],
];

const integrations = [
  ['Teams', 'Collaboration', '#5b5bf0'],
  ['SharePoint', 'Directory', '#0f9f9a'],
  ['Outlook', 'Communication', '#2563eb'],
  ['Power BI', 'Analytics', '#f59e0b'],
  ['Excel', 'Reporting', '#10b981'],
  ['Power Automate', 'Workflows', '#1b64f2'],
  ['Azure AD', 'Security', '#38bdf8'],
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.035, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

function MicrosoftMark() {
  return (
    <span className="org-ms-mark" aria-hidden="true">
      {['#f25022', '#7fba00', '#00a4ef', '#ffb900'].map((color) => <i key={color} style={{ backgroundColor: color }} />)}
    </span>
  );
}

function M365Mark() {
  return <span className="org-m365-mark" aria-hidden="true"><i /></span>;
}

function Avatar({ name, large = false }) {
  const initials = name.split(' ').map((part) => part[0]).join('').slice(0, 2);
  return <b className={large ? 'org-avatar large' : 'org-avatar'}>{initials}</b>;
}

function StatPill({ icon: Icon, value, label }) {
  return (
    <div className="org-stat">
      <Icon size={23} aria-hidden="true" />
      <div><strong>{value}</strong><span>{label}</span></div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text, index }) {
  return (
    <motion.div className="org-feature org-glass" variants={fadeUp} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Icon size={22} aria-hidden="true" />
      <div><strong>{title}</strong><span>{text}</span></div>
    </motion.div>
  );
}

function OrgIllustration() {
  return (
    <motion.div className="org-hero-art" animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="org-art-platform" />
      <div className="org-main-tile"><Network size={68} aria-hidden="true" /></div>
      <div className="org-float-tile"><Workflow size={58} aria-hidden="true" /></div>
      <i className="orb orb-1" /><i className="orb orb-2" />
    </motion.div>
  );
}

function SidebarItem({ icon: Icon, label, active }) {
  return (
    <div className={`org-menu-item ${active ? 'active' : ''}`}>
      <Icon size={13} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

function DepartmentCard({ dept }) {
  const Icon = dept.icon;
  return (
    <article className="org-dept-card org-glass">
      <button type="button" aria-label={`${dept.title} actions`}>...</button>
      <em style={{ color: dept.color, backgroundColor: `${dept.color}16` }}><Icon size={25} aria-hidden="true" /></em>
      <strong>{dept.title}</strong>
      <div>
        <Avatar name={dept.name} />
        <span><b>{dept.name}</b><small>{dept.role}</small></span>
      </div>
      <p>{dept.count}</p>
    </article>
  );
}

function EmployeeCard({ name, role, department, index }) {
  const mail = `${name.split(' ')[0].toLowerCase()}@diw.com`;
  const phone = employeePhones[index % employeePhones.length];

  return (
    <article className="org-employee org-glass">
      <button type="button" aria-label={`${name} actions`}>...</button>
      <Avatar name={name} />
      <div>
        <strong>{name}</strong>
        <span>{role}</span>
        <small><Mail size={9} aria-hidden="true" />{mail}</small>
        <small><Phone size={9} aria-hidden="true" />{phone}</small>
      </div>
      <i>{department.slice(0, 2)}</i>
    </article>
  );
}

function BenefitCard({ icon: Icon, title, text }) {
  return (
    <article className="org-benefit org-glass">
      <div><strong>{title}</strong><p>{text}</p></div>
      <em><Icon size={29} aria-hidden="true" /></em>
    </article>
  );
}

function DashboardSidebar() {
  return (
    <aside className="org-sidebar">
      <div className="org-sidebar-brand"><SquareMenu size={16} /><strong>Org Directory</strong></div>
      <nav>{sidebarItems.map(([Icon, label], index) => <SidebarItem key={label} icon={Icon} label={label} active={index === 0} />)}</nav>
      <div className="org-profile-mini">
        <Avatar name="Vijay Karthik" />
        <div><strong>Vijay Karthik</strong><span>HR Administrator</span><small>Online</small></div>
        <ChevronRight size={13} aria-hidden="true" />
      </div>
    </aside>
  );
}

function OrgChartBoard() {
  return (
    <section className="org-dashboard org-glass">
      <DashboardSidebar />
      <div className="org-dash-main">
        <div className="org-dash-top">
          <div><h2>Organization Overview</h2><p>Explore our company structure and connect with your team.</p></div>
          <div className="org-actions">
            <label><Search size={14} /><input type="search" placeholder="Search employee, department..." /></label>
            <button type="button" className="ghost"><Filter size={13} />Filters</button>
            <button type="button" className="primary">View Options <ChevronDown size={12} /></button>
            <button type="button" aria-label="Download"><Download size={14} /></button>
            <button type="button" aria-label="Share"><Share2 size={14} /></button>
            <button type="button" aria-label="Expand"><Expand size={14} /></button>
          </div>
        </div>

        <div className="org-chart-area">
          <div className="org-ceo-card org-glass">
            <Avatar name="Vijay Karthik" large />
            <div>
              <strong>Vijay Karthik</strong>
              <span>Chief Executive Officer</span>
              <small><Mail size={10} />vijay@desireinfoweb.com</small>
              <small><Phone size={10} />+91 87804 68807</small>
            </div>
            <b>CEO</b>
          </div>

          <div className="org-lines" aria-hidden="true">
            <span className="top-line" />
            {departments.map((dept, index) => <i key={dept.title} style={{ left: `${7.2 + index * 14.3}%` }} />)}
          </div>

          <div className="org-dept-row">{departments.map((dept) => <DepartmentCard key={dept.title} dept={dept} />)}</div>
          <div className="org-employee-grid">{employees.map(([name, role, department], index) => <EmployeeCard key={name} name={name} role={role} department={department} index={index} />)}</div>
          <div className="org-legend"><span><i />Direct Reports</span><span><i className="dashed" />Indirect Reports</span></div>
        </div>

        <div className="org-benefits">{benefits.map((item) => <BenefitCard key={item.title} {...item} />)}</div>
      </div>
    </section>
  );
}

function DistributionDonut() {
  return (
    <section className="org-side-card org-glass">
      <h3>Department Distribution</h3>
      <div className="org-dist-layout">
        <div className="org-donut"><strong>256</strong><span>Total Employees</span></div>
        <div className="org-dist-list">
          {distribution.map(([label, value, color]) => <span key={label}><i style={{ background: color }} />{label}<b>{value}</b></span>)}
        </div>
      </div>
    </section>
  );
}

function HRVisibility() {
  return (
    <section className="org-side-card org-visibility org-glass">
      <div className="org-card-head"><h3>HR Visibility Dashboard</h3><a>View All <ArrowRight size={10} /></a></div>
      <div className="org-mini-metrics">
        {[
          ['Team Size', '256'],
          ['Managers', '124'],
          ['Open Positions', '18'],
        ].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong><small>+8% vs last month</small></div>)}
      </div>
      <div className="org-average"><span>Average Team Size</span><strong>8.4</strong><small><TrendingUp size={10} />10% vs last month</small></div>
      <svg viewBox="0 0 220 70" role="img" aria-label="Average team size trend">
        <polyline points="8,56 42,42 76,48 110,25 144,34 178,13 212,20" />
        <polygon points="8,70 8,56 42,42 76,48 110,25 144,34 178,13 212,20 212,70" />
      </svg>
    </section>
  );
}

function PeopleIllustration() {
  return (
    <div className="org-people-art" aria-hidden="true">
      <div className="people-platform" />
      <span className="people-card main"><UsersRound size={42} /></span>
      <span className="people-card one"><CircleUserRound size={30} /></span>
      <span className="people-card two"><CircleUserRound size={30} /></span>
    </div>
  );
}

function RightPanel() {
  return (
    <aside className="org-right">
      <section className="org-side-card org-profile-card org-glass">
        <div>
          <Avatar name="Vijay Karthik" large />
          <div><strong>Vijay Karthik</strong><span>Chief Executive Officer</span><small>CEO</small></div>
        </div>
        <p><Mail size={12} />vijay@desireinfoweb.com</p>
        <p><Phone size={12} />+91 87804 68807</p>
        <p><MapPin size={12} />Hyderabad, India</p>
        <button type="button">View Full Profile</button>
      </section>
      <DistributionDonut />
      <HRVisibility />
    </aside>
  );
}

function QRPlaceholder() {
  return <span className="org-qr" aria-label="QR code placeholder">{Array.from({ length: 49 }, (_, index) => <i key={index} />)}</span>;
}

function BottomArea() {
  return (
    <motion.div className="org-bottom-band" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.62 }} viewport={{ once: true }}>
      <div className="org-integrations org-glass">
        <h3>Seamlessly Integrated with Microsoft 365</h3>
        <div>{integrations.map(([title, subtitle, color]) => <span className="org-integration" key={title}><i style={{ '--app': color }}>{title === 'Power BI' ? 'BI' : title[0]}</i><strong>{title}</strong><small>{subtitle}</small></span>)}</div>
      </div>
      <button type="button" className="org-cta"><span>Stronger Teams.<br />Smarter Organization.<br />Better Outcomes.</span><Network size={60} /></button>
      <div className="org-contact org-glass">
        <div>
          <span><Globe2 size={16} />www.desireinfoweb.com</span>
          <span><Mail size={16} />vijay@desireinfoweb.com</span>
          <span><Phone size={16} />+91-8780468807</span>
        </div>
        <QRPlaceholder />
      </div>
      <PeopleIllustration />
    </motion.div>
  );
}

export default function OrganizationChart() {
  return (
    <section className="org-page" id="organization-chart">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@500;600;700;800;900&display=swap');

        .org-page, .org-page * { box-sizing: border-box; }
        .org-page {
          --ink: #111066;
          --muted: #66639b;
          --violet: #6d28d9;
          --purple: #7c3aed;
          --pink: #ec4899;
          --green: #10b981;
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          overflow: hidden;
          padding: 22px clamp(14px, 1.7vw, 30px) 24px;
          color: var(--ink);
          font-family: "Inter", "Poppins", "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at 14% 18%, rgba(236,72,153,.15), transparent 24%),
            radial-gradient(circle at 73% 8%, rgba(109,40,217,.16), transparent 30%),
            radial-gradient(circle at 88% 80%, rgba(56,189,248,.12), transparent 28%),
            linear-gradient(135deg, #fbfaff 0%, #f7f2ff 48%, #fff7fd 100%);
        }
        .org-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(109,40,217,.04) 1px, transparent 1px),
            linear-gradient(0deg, rgba(109,40,217,.035) 1px, transparent 1px);
          background-size: 74px 74px;
        }
        .org-page::after {
          content: "";
          position: absolute;
          left: -5%;
          right: -5%;
          bottom: -145px;
          height: 430px;
          z-index: -1;
          opacity: .76;
          background: radial-gradient(ellipse at 50% 0%, rgba(124,58,237,.26), transparent 65%);
          transform: perspective(820px) rotateX(58deg);
        }
        .org-shell { width: min(100%, 1800px); margin: 0 auto; position: relative; z-index: 1; }
        .org-glass {
          background: linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.5));
          border: 1px solid rgba(255,255,255,.72);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.95), 0 22px 60px rgba(109,40,217,.14), 0 0 0 1px rgba(130,94,255,.12);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }
        .org-header {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr) 300px;
          gap: 12px;
          align-items: center;
          margin-bottom: 12px;
        }
        .org-brand { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .org-brand img { width: 60px; height: 60px; object-fit: contain; filter: drop-shadow(0 16px 26px rgba(109,40,217,.18)); }
        .org-brand h2 { margin: 0; font-family: "Poppins", sans-serif; font-size: 27px; line-height: 1; font-weight: 900; }
        .org-brand p { margin: 4px 0 0; color: var(--ink); font-size: 10.5px; line-height: 1.05; font-weight: 800; }
        .org-brand p span { color: var(--pink); }
        .org-stats {
          min-height: 48px;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          align-items: center;
          border-radius: 20px;
          padding: 5px 9px;
          background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(246,240,255,.74));
          border-color: rgba(126,88,255,.38);
        }
        .org-stat {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 6px;
          align-items: center;
          min-height: 32px;
          padding: 0 6px;
          border-left: 1px solid rgba(109,40,217,.16);
        }
        .org-stat:first-child { border-left: 0; }
        .org-stat svg { width: 20px; height: 20px; color: var(--violet); stroke-width: 2.15; filter: drop-shadow(0 0 6px rgba(109,40,217,.22)); }
        .org-stat strong { display: block; color: #08006f; font-size: clamp(13px, .84vw, 17px); line-height: .95; font-weight: 900; white-space: nowrap; }
        .org-stat span { display: block; margin-top: 3px; max-width: 62px; color: #140b71; font-size: 6px; line-height: 1.05; font-weight: 800; }
        .org-partners { display: grid; grid-template-columns: 1fr 1fr; gap: 11px; }
        .org-partner { min-height: 58px; display: flex; align-items: center; justify-content: center; gap: 11px; border-radius: 18px; padding: 8px 11px; }
        .org-partner span:last-child { color: #111827; font-size: 11.5px; line-height: 1.05; font-weight: 900; }
        .org-ms-mark { width: 29px; height: 29px; display: grid; grid-template-columns: 1fr 1fr; gap: 3px; flex: 0 0 auto; }
        .org-ms-mark i { border-radius: 1px; }
        .org-m365-mark { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; background: conic-gradient(from 35deg, #1b22c8, #7c3aed, #38bdf8, #1b22c8); box-shadow: 0 12px 28px rgba(37,99,235,.22); }
        .org-m365-mark i { width: 21px; height: 21px; border-radius: 9px; background: rgba(255,255,255,.72); transform: rotate(45deg); }
        .org-main { display: grid; grid-template-columns: 270px minmax(0, 1fr); gap: 12px; align-items: start; }
        .org-center-stack { display: grid; gap: 12px; min-width: 0; }
        .org-left h1 {
          margin: 14px 0 10px;
          color: #111066;
          font-family: "Poppins", sans-serif;
          font-size: clamp(38px, 2.75vw, 56px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0;
        }
        .org-left h1 span {
          background: linear-gradient(105deg, #111066 0%, #1b22c8 38%, #ec4899 88%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .org-left h2 { max-width: 250px; margin: 0 0 12px; color: #111066; font-size: 18px; line-height: 1.08; font-weight: 900; }
        .org-left p { max-width: 252px; margin: 0 0 15px; color: #12106f; font-size: 11px; line-height: 1.43; font-weight: 700; }
        .org-feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px; }
        .org-feature { min-height: 74px; display: grid; grid-template-columns: 23px 1fr; gap: 7px; align-items: start; padding: 10px 9px; border-radius: 14px; }
        .org-feature svg { color: var(--violet); stroke-width: 2.15; }
        .org-feature strong, .org-feature span { display: block; }
        .org-feature strong { color: #09046b; font-size: 8px; line-height: 1.12; font-weight: 900; }
        .org-feature span { margin-top: 5px; color: #2f2b79; font-size: 5.8px; line-height: 1.3; font-weight: 800; }
        .org-hero-art { position: relative; width: 250px; height: 205px; margin: 12px 0 0 4px; }
        .org-art-platform { position: absolute; left: 15px; right: 15px; bottom: 0; height: 70px; border-radius: 30px; background: linear-gradient(135deg, rgba(255,255,255,.86), rgba(109,40,217,.32)); box-shadow: 0 26px 50px rgba(109,40,217,.26), inset 0 2px 0 rgba(255,255,255,.8); transform: perspective(620px) rotateX(58deg); }
        .org-main-tile { position: absolute; left: 34px; bottom: 52px; width: 104px; height: 120px; display: grid; place-items: center; border-radius: 18px; color: white; background: linear-gradient(145deg, #2f27d9, #9f5cff); box-shadow: 0 26px 42px rgba(109,40,217,.3), inset 0 1px 0 rgba(255,255,255,.24); }
        .org-float-tile { position: absolute; right: 8px; bottom: 34px; width: 100px; height: 88px; display: grid; place-items: center; border-radius: 18px; color: #6d28d9; background: linear-gradient(150deg, rgba(255,255,255,.85), rgba(124,58,237,.18)); border: 1px solid rgba(255,255,255,.75); box-shadow: 0 22px 38px rgba(109,40,217,.2); }
        .orb { position: absolute; border-radius: 50%; background: linear-gradient(135deg, #c4b5fd, #7c3aed); box-shadow: 0 18px 28px rgba(109,40,217,.22); }
        .orb-1 { left: 18px; bottom: 34px; width: 34px; height: 34px; }
        .orb-2 { left: 182px; top: 50px; width: 24px; height: 24px; }
        .org-dashboard { display: grid; grid-template-columns: 150px minmax(0, 1fr); min-height: 690px; overflow: hidden; border-radius: 28px; }
        .org-sidebar { display: flex; flex-direction: column; min-height: 690px; padding: 16px 9px 11px; color: white; background: linear-gradient(180deg, #27109a 0%, #17065f 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,.16), 16px 0 44px rgba(42,16,120,.18); }
        .org-sidebar-brand { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 12px; font-weight: 900; }
        .org-sidebar nav { display: grid; gap: 5px; }
        .org-menu-item { display: flex; align-items: center; gap: 7px; min-height: 27px; padding: 0 8px; border-radius: 9px; color: rgba(255,255,255,.9); font-size: 7.7px; font-weight: 800; }
        .org-menu-item.active { color: white; background: linear-gradient(90deg, #6d28d9, #c026d3); box-shadow: 0 12px 24px rgba(0,0,0,.18); }
        .org-profile-mini { display: grid; grid-template-columns: 31px 1fr 13px; gap: 8px; align-items: center; margin-top: auto; min-height: 58px; padding: 8px; border-radius: 14px; background: rgba(255,255,255,.08); box-shadow: inset 0 1px 0 rgba(255,255,255,.08); }
        .org-profile-mini strong, .org-profile-mini span, .org-profile-mini small { display: block; }
        .org-profile-mini strong { font-size: 8px; font-weight: 900; }
        .org-profile-mini span { margin-top: 2px; color: rgba(255,255,255,.72); font-size: 6.8px; font-weight: 800; }
        .org-profile-mini small { margin-top: 3px; color: #4ade80; font-size: 6.5px; font-weight: 900; }
        .org-avatar { width: 26px; height: 26px; display: grid; place-items: center; border-radius: 50%; color: white; background: linear-gradient(135deg, #f97316, #6d28d9); font-size: 8px; font-weight: 900; box-shadow: 0 10px 18px rgba(109,40,217,.18); flex: 0 0 auto; }
        .org-avatar.large { width: 64px; height: 64px; font-size: 18px; }
        .org-dash-main { min-width: 0; padding: 15px 12px 13px; }
        .org-dash-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 13px; }
        .org-dash-top h2 { margin: 0; font-size: 18px; line-height: 1; font-weight: 900; }
        .org-dash-top p { margin: 5px 0 0; color: #252174; font-size: 8.5px; font-weight: 800; }
        .org-actions { display: flex; align-items: center; gap: 8px; }
        .org-actions button, .org-actions label { height: 34px; border-radius: 9px; }
        .org-actions button { display: inline-flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid rgba(109,40,217,.14); padding: 0 10px; color: #1b1480; background: rgba(255,255,255,.72); font-size: 8px; font-weight: 900; cursor: pointer; }
        .org-actions .primary { border: 0; color: white; background: linear-gradient(100deg, #5127f1, #a855f7); box-shadow: 0 14px 24px rgba(109,40,217,.22); }
        .org-actions label { width: 225px; display: flex; align-items: center; gap: 8px; padding: 0 11px; border: 1px solid rgba(109,40,217,.14); background: rgba(255,255,255,.62); }
        .org-actions input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: #1f1a70; font-size: 8px; font-weight: 800; }
        .org-chart-area { position: relative; min-height: 498px; padding: 0 0 4px; }
        .org-ceo-card { position: relative; z-index: 2; width: 290px; min-height: 90px; display: grid; grid-template-columns: 64px 1fr 38px; gap: 11px; align-items: center; margin: 0 auto 32px; padding: 12px; border-radius: 16px; }
        .org-ceo-card strong, .org-ceo-card span, .org-ceo-card small { display: block; }
        .org-ceo-card strong { font-size: 13px; font-weight: 900; }
        .org-ceo-card span { margin-top: 4px; color: #1f1a70; font-size: 8px; font-weight: 900; }
        .org-ceo-card small { display: flex; align-items: center; gap: 5px; margin-top: 6px; color: #4f46e5; font-size: 7px; font-weight: 800; }
        .org-ceo-card > b { justify-self: end; align-self: start; padding: 7px 10px; border-radius: 8px; color: white; background: linear-gradient(90deg, #6d28d9, #a855f7); font-size: 8px; }
        .org-lines .top-line { position: absolute; top: 108px; left: 58px; right: 58px; height: 2px; background: rgba(109,40,217,.58); }
        .org-lines .top-line::before { content: ""; position: absolute; left: 50%; bottom: 0; width: 2px; height: 32px; background: rgba(109,40,217,.58); transform: translateX(-50%); }
        .org-lines i { position: absolute; top: 108px; width: 2px; height: 24px; background: rgba(109,40,217,.58); }
        .org-dept-row { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 8px; margin-bottom: 12px; }
        .org-dept-card { position: relative; min-height: 115px; padding: 10px 8px 8px; border-radius: 13px; text-align: center; }
        .org-dept-card button, .org-employee button { position: absolute; right: 9px; top: 7px; border: 0; background: transparent; color: #7c3aed; font-size: 10px; font-weight: 900; }
        .org-dept-card em { width: 31px; height: 31px; display: grid; place-items: center; margin: 0 auto 6px; border-radius: 11px; font-style: normal; }
        .org-dept-card > strong { display: block; font-size: 8px; font-weight: 900; }
        .org-dept-card div { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 7px; text-align: left; }
        .org-dept-card span b, .org-dept-card span small { display: block; }
        .org-dept-card span b { font-size: 7px; font-weight: 900; }
        .org-dept-card span small, .org-dept-card p { color: #66639b; font-size: 6px; font-weight: 800; }
        .org-dept-card p { margin: 8px 0 0; color: #4f46e5; }
        .org-employee-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 8px; }
        .org-employee { position: relative; min-height: 70px; display: grid; grid-template-columns: 25px 1fr; gap: 6px; align-items: center; padding: 8px 7px; border-radius: 11px; }
        .org-employee strong, .org-employee span, .org-employee small { display: block; }
        .org-employee strong { font-size: 6.8px; font-weight: 900; }
        .org-employee span { margin-top: 3px; color: #66639b; font-size: 5.6px; font-weight: 800; }
        .org-employee small { display: flex; align-items: center; gap: 3px; margin-top: 3px; color: #4f46e5; font-size: 5px; font-weight: 800; }
        .org-employee i { position: absolute; right: 7px; bottom: 6px; color: rgba(109,40,217,.45); font-size: 6px; font-style: normal; font-weight: 900; }
        .org-legend { display: flex; justify-content: center; gap: 28px; margin-top: 13px; color: #312e81; font-size: 7px; font-weight: 900; }
        .org-legend span { display: flex; align-items: center; gap: 7px; }
        .org-legend i { width: 36px; height: 2px; background: #6d28d9; }
        .org-legend i.dashed { background: repeating-linear-gradient(90deg, #9f7aea 0 5px, transparent 5px 9px); }
        .org-benefits { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin-top: 10px; }
        .org-benefit { min-height: 76px; display: grid; grid-template-columns: 1fr 36px; gap: 8px; align-items: center; padding: 11px; border-radius: 14px; }
        .org-benefit strong, .org-benefit p { display: block; margin: 0; }
        .org-benefit strong { font-size: 8px; font-weight: 900; }
        .org-benefit p { margin-top: 7px; color: #312e81; font-size: 5.8px; line-height: 1.35; font-weight: 800; }
        .org-benefit em { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 11px; color: #6d28d9; background: rgba(109,40,217,.1); font-style: normal; }
        .org-right { display: grid; grid-template-columns: .95fr 1.05fr 1.25fr; gap: 12px; align-items: stretch; }
        .org-side-card { min-height: 190px; padding: 14px 12px; border-radius: 18px; overflow: hidden; }
        .org-side-card h3 { margin: 0 0 12px; font-size: 11px; line-height: 1.1; font-weight: 900; }
        .org-profile-card > div { display: grid; grid-template-columns: 62px 1fr; gap: 11px; align-items: center; margin-bottom: 9px; }
        .org-profile-card strong, .org-profile-card span, .org-profile-card small { display: block; }
        .org-profile-card strong { font-size: 11px; font-weight: 900; }
        .org-profile-card span { margin-top: 4px; font-size: 7px; font-weight: 800; }
        .org-profile-card small { width: fit-content; margin-top: 6px; padding: 5px 8px; border-radius: 7px; color: white; background: #6d28d9; font-size: 6px; font-weight: 900; }
        .org-profile-card p { display: flex; align-items: center; gap: 8px; margin: 7px 0; color: #4f46e5; font-size: 7.2px; font-weight: 900; }
        .org-profile-card button { width: 100%; height: 34px; margin-top: 9px; border: 0; border-radius: 10px; color: white; background: linear-gradient(100deg, #5127f1, #a855f7); box-shadow: 0 14px 24px rgba(109,40,217,.22); font-size: 8px; font-weight: 900; }
        .org-dist-layout { display: grid; grid-template-columns: 92px 1fr; gap: 11px; align-items: center; }
        .org-donut { width: 88px; height: 88px; display: grid; place-items: center; align-content: center; border-radius: 50%; background: radial-gradient(circle, #fff 0 48%, transparent 49%), conic-gradient(#6d28d9 0 30%, #ef4444 30% 46%, #f97316 46% 56%, #7c3aed 56% 69%, #10b981 69% 89%, #38bdf8 89% 95%, #f59e0b 95% 100%); box-shadow: 0 14px 28px rgba(109,40,217,.18); }
        .org-donut strong { font-size: 22px; line-height: 1; font-weight: 900; }
        .org-donut span { margin-top: 3px; font-size: 6px; font-weight: 800; }
        .org-dist-list { display: grid; gap: 7px; }
        .org-dist-list span { display: grid; grid-template-columns: 8px 1fr auto; gap: 6px; align-items: center; color: #312e81; font-size: 6.5px; font-weight: 900; }
        .org-dist-list i { width: 8px; height: 8px; border-radius: 50%; }
        .org-card-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px; }
        .org-card-head h3 { margin: 0; }
        .org-card-head a { display: inline-flex; align-items: center; gap: 3px; color: #4e24e8; font-size: 7px; font-weight: 900; }
        .org-mini-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; }
        .org-mini-metrics div { min-height: 58px; padding: 9px 8px; border-radius: 11px; background: rgba(255,255,255,.55); }
        .org-mini-metrics span, .org-mini-metrics strong, .org-mini-metrics small, .org-average span, .org-average strong, .org-average small { display: block; }
        .org-mini-metrics span { font-size: 6px; font-weight: 900; }
        .org-mini-metrics strong { margin-top: 7px; font-size: 17px; line-height: 1; font-weight: 900; }
        .org-mini-metrics small, .org-average small { margin-top: 6px; color: #059669; font-size: 5.5px; font-weight: 900; }
        .org-average { margin-top: 11px; }
        .org-average span { color: #66639b; font-size: 7px; font-weight: 900; }
        .org-average strong { margin-top: 5px; font-size: 24px; line-height: 1; font-weight: 900; }
        .org-average small { display: flex; align-items: center; gap: 4px; }
        .org-visibility svg { width: 100%; height: 54px; margin-top: 2px; overflow: visible; }
        .org-visibility polyline { fill: none; stroke: #6d28d9; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
        .org-visibility polygon { fill: rgba(109,40,217,.13); }
        .org-people-art { position: relative; min-height: 150px; align-self: end; }
        .people-platform { position: absolute; left: 18px; right: 18px; bottom: 10px; height: 58px; border-radius: 26px; background: linear-gradient(135deg, rgba(255,255,255,.84), rgba(109,40,217,.32)); box-shadow: 0 24px 45px rgba(109,40,217,.24); transform: perspective(620px) rotateX(58deg); }
        .people-card { position: absolute; display: grid; place-items: center; border-radius: 17px; color: white; background: linear-gradient(145deg, #2f27d9, #9f5cff); box-shadow: 0 22px 38px rgba(109,40,217,.24); }
        .people-card.main { left: 42px; bottom: 48px; width: 78px; height: 92px; }
        .people-card.one { right: 40px; bottom: 92px; width: 54px; height: 64px; background: linear-gradient(145deg, #ec4899, #c084fc); }
        .people-card.two { right: 82px; bottom: 38px; width: 54px; height: 64px; background: linear-gradient(145deg, #38bdf8, #7c3aed); }
        .org-bottom-band { display: grid; grid-template-columns: 500px 310px 285px 210px; gap: 14px; align-items: end; margin: 14px 0 0 130px; }
        .org-integrations { min-height: 90px; padding: 13px 18px 12px; border-radius: 17px; }
        .org-integrations h3 { margin: 0 0 10px; text-align: center; font-size: 12px; font-weight: 900; }
        .org-integrations > div { display: grid; grid-template-columns: repeat(7, 1fr); }
        .org-integration { display: grid; place-items: center; align-content: center; gap: 2px; min-height: 45px; border-left: 1px solid rgba(109,40,217,.14); text-align: center; }
        .org-integration:first-child { border-left: 0; }
        .org-integration i { width: 24px; height: 24px; display: grid; place-items: center; border-radius: 7px; color: white; background: var(--app); font-size: 9px; font-style: normal; font-weight: 900; }
        .org-integration strong { font-size: 7.2px; font-weight: 900; }
        .org-integration small { color: #66639b; font-size: 5.8px; font-weight: 800; }
        .org-cta { min-height: 92px; display: flex; align-items: center; justify-content: space-between; gap: 18px; border: 0; border-radius: 18px; padding: 0 26px; color: white; background: linear-gradient(110deg, #3328e7 0%, #7c3aed 42%, #ec4899 84%); box-shadow: 0 24px 60px rgba(236,72,153,.28); cursor: pointer; }
        .org-cta span { text-align: left; font-size: 21px; line-height: 1.16; font-weight: 900; }
        .org-contact { min-height: 92px; display: grid; grid-template-columns: 1fr 78px; gap: 13px; align-items: center; padding: 12px 14px; border-radius: 17px; }
        .org-contact div { display: grid; gap: 8px; }
        .org-contact span { display: flex; align-items: center; gap: 9px; color: #12106f; font-size: 11px; font-weight: 900; }
        .org-contact svg { color: #6d28d9; }
        .org-qr { width: 74px; height: 74px; display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; padding: 6px; border: 4px solid white; border-radius: 8px; background: white; box-shadow: 0 10px 20px rgba(0,0,0,.12); }
        .org-qr i { border-radius: 1px; background: #111066; }
        .org-qr i:nth-child(2n), .org-qr i:nth-child(5n), .org-qr i:nth-child(11n) { background: transparent; }
        @media (max-width: 1180px) {
          .org-header, .org-main, .org-bottom-band { grid-template-columns: 1fr; margin-left: 0; }
          .org-stats { overflow-x: auto; grid-template-columns: repeat(6, 150px); }
          .org-partners { max-width: 520px; }
          .org-left { display: grid; grid-template-columns: minmax(280px, 360px) 1fr; gap: 20px; align-items: start; }
          .org-hero-art { display: none; }
          .org-right { grid-template-columns: repeat(3, 1fr); }
          .org-bottom-band { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 1080px) {
          .org-dashboard, .org-dash-top, .org-left, .org-bottom-band, .org-contact { grid-template-columns: 1fr; }
          .org-sidebar { min-height: auto; }
          .org-sidebar nav { grid-template-columns: repeat(3, 1fr); }
          .org-profile-mini { display: none; }
          .org-dash-top { display: grid; }
          .org-actions { flex-wrap: wrap; }
          .org-actions label { flex: 1 1 260px; }
          .org-dept-row, .org-employee-grid, .org-benefits, .org-right { grid-template-columns: 1fr 1fr; }
          .org-lines { display: none; }
          .org-integrations > div { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 700px) {
          .org-page { padding: 16px 12px 22px; }
          .org-brand h2 { font-size: 23px; }
          .org-partners, .org-feature-grid, .org-dept-row, .org-employee-grid, .org-benefits, .org-right, .org-dist-layout, .org-mini-metrics, .org-integrations > div { grid-template-columns: 1fr; }
          .org-left h1 { font-size: 38px; }
          .org-dashboard { border-radius: 20px; }
          .org-dash-main { padding: 14px 12px; }
          .org-sidebar nav { grid-template-columns: repeat(2, 1fr); }
          .org-actions label { width: 100%; }
          .org-ceo-card { width: 100%; grid-template-columns: 64px 1fr; }
          .org-ceo-card > b { grid-column: 1 / -1; justify-self: start; }
        }
      `}</style>

      <div className="org-shell">
        <motion.header className="org-header" initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
          <div className="org-brand">
            <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
            <div><h2>DesireInfoWeb</h2><p>Your Extended <span>Technology Partner</span></p></div>
          </div>
          <div className="org-stats org-glass">{stats.map((item) => <StatPill key={item.label} {...item} />)}</div>
          <div className="org-partners">
            <div className="org-partner org-glass"><MicrosoftMark /><span>Microsoft<br />Solutions Partner</span></div>
            <div className="org-partner org-glass"><M365Mark /><span>Built on<br />Microsoft 365</span></div>
          </div>
        </motion.header>

        <div className="org-main">
          <motion.aside className="org-left" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.64 }} viewport={{ once: true }}>
            <div>
              <h1>Organization<br /><span>Chart</span></h1>
              <h2>Visualize. Connect. Collaborate. Empower.</h2>
              <p>An intelligent organization chart solution that brings clarity to your company structure, improves HR visibility and strengthens team connectivity.</p>
              <div className="org-feature-grid">{features.map((item, index) => <FeatureCard key={item.title} index={index} {...item} />)}</div>
            </div>
            <OrgIllustration />
          </motion.aside>
          <div className="org-center-stack">
            <OrgChartBoard />
            <RightPanel />
          </div>
        </div>
        <BottomArea />
      </div>
    </section>
  );
}
