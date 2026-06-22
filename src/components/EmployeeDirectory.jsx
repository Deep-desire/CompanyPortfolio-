import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronDown,
  CircleUserRound,
  Database,
  Filter,
  Globe2,
  Grid2X2,
  List,
  Mail,
  MapPin,
  MessageSquare,
  Network,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserPlus,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';

const stats = [
  { icon: UsersRound, value: '256', label: 'Total Employees' },
  { icon: Building2, value: '18', label: 'Departments' },
  { icon: MapPin, value: '7', label: 'Locations' },
  { icon: UserRoundCheck, value: '124', label: 'Managers' },
  { icon: ShieldCheck, value: '89%', label: 'HR Visibility' },
  { icon: ShieldCheck, value: '99.8%', label: 'Data Accuracy' },
];

const features = [
  { icon: UsersRound, title: 'Search by Skill', text: 'Find experts by technology & skills' },
  { icon: MapPin, title: 'Search by Location', text: 'Discover people by office locations' },
  { icon: Network, title: 'Search by Manager', text: 'View teams and reporting structure' },
  { icon: BarChart3, title: 'Org Visibility', text: 'Explore departments and teams' },
  { icon: MessageSquare, title: 'Teams Integration', text: 'Connect instantly via Microsoft Teams' },
  { icon: Smartphone, title: 'Any Device Access', text: 'Access directory from anywhere' },
  { icon: Database, title: 'Auto-sync with M365', text: 'Always up-to-date with Microsoft 365' },
];

const employees = [
  ['Vijay Karthik', 'Chief Executive Officer', 'Executive Leadership', 'Hyderabad, India', 'vijay@desireinfoweb.com', 'CEO'],
  ['Anita Sharma', 'Head of Product', 'Product Management', 'Bangalore, India', 'anita.sharma@diw.com'],
  ['Rahul Verma', 'Marketing Head', 'Marketing', 'Delhi, India', 'rahul.verma@diw.com'],
  ['Priya Nair', 'HR Manager', 'Human Resources', 'Pune, India', 'priya.nair@diw.com'],
  ['Rohit Gupta', 'Finance Manager', 'Finance', 'Mumbai, India', 'rohit.gupta@diw.com'],
  ['Arjun Dev', 'Tech Lead', 'Engineering', 'Hyderabad, India', 'arjun.dev@diw.com'],
  ['Sneha Patel', 'UI/UX Designer', 'Design', 'Bangalore, India', 'sneha.patel@diw.com'],
  ['Kunal Shah', 'DevOps Engineer', 'Engineering', 'Hyderabad, India', 'kunal.shah@diw.com'],
  ['Meera Iyer', 'Software Engineer', 'Engineering', 'Chennai, India', 'meera.iyer@diw.com'],
  ['David George', 'Sales Manager', 'Sales', 'Bangalore, India', 'david.george@diw.com'],
  ['Nikhil Jain', 'Data Analyst', 'Analytics', 'Noida, India', 'nikhil.jain@diw.com'],
  ['Tanya Malhotra', 'Content Strategist', 'Marketing', 'Delhi, India', 'tanya.malhotra@diw.com'],
  ['Lakshmi Menon', 'HR Executive', 'Human Resources', 'Kochi, India', 'lakshmi.menon@diw.com'],
  ['Farhan Ali', 'Recruiter', 'Human Resources', 'Pune, India', 'farhan.ali@diw.com'],
  ['Simran Arora', 'Business Analyst', 'Analytics', 'Gurugram, India', 'simran.arora@diw.com'],
];

const filters = [
  [Sparkles, 'Skills', 'All Skills'],
  [Building2, 'Department', 'All Departments'],
  [MapPin, 'Location', 'All Locations'],
  [UsersRound, 'Manager', 'All Managers'],
  [BriefcaseBusiness, 'Employment Type', 'All Types'],
];

const benefits = [
  { icon: CircleUserRound, title: 'Rich Employee Profiles', text: 'Detailed profiles with skills, experience and contact information' },
  { icon: Search, title: 'Smart Search & Filters', text: 'Search by skills, location, department, manager and more' },
  { icon: MessageSquare, title: 'Microsoft Teams Integration', text: 'Connect with employees instantly via Microsoft Teams' },
  { icon: Smartphone, title: 'Any Device Access', text: 'Responsive design for seamless experience on any device' },
  { icon: BarChart3, title: 'Auto-sync with M365', text: 'Real-time sync with Azure AD and Microsoft 365 for accurate data' },
];

const skills = [
  ['Microsoft 365', 128, 92],
  ['Azure', 98, 78],
  ['Power BI', 78, 64],
  ['SharePoint', 72, 58],
  ['.NET Development', 65, 52],
];

const integrations = [
  ['Azure AD', 'User Sync', '#38bdf8'],
  ['SharePoint', 'Profiles', '#0f9f9a'],
  ['Microsoft Teams', 'Chat & Call', '#5b5bf0'],
  ['Outlook', 'Connect', '#2563eb'],
  ['Power BI', 'Analytics', '#f59e0b'],
  ['OneDrive', 'Documents', '#2563eb'],
];

function MicrosoftMark() {
  return <span className="ed-ms-mark" aria-hidden="true">{['#f25022', '#7fba00', '#00a4ef', '#ffb900'].map((color) => <i key={color} style={{ backgroundColor: color }} />)}</span>;
}

function M365Mark() {
  return <span className="ed-m365-mark" aria-hidden="true"><i /></span>;
}

function Avatar({ name, large = false }) {
  const initials = name.split(' ').map((part) => part[0]).join('').slice(0, 2);
  return <b className={large ? 'ed-avatar large' : 'ed-avatar'}>{initials}</b>;
}

function StatPill({ icon: Icon, value, label }) {
  return <div className="ed-stat"><Icon size={22} aria-hidden="true" /><div><strong>{value}</strong><span>{label}</span></div></div>;
}

function FeatureCard({ icon: Icon, title, text }) {
  return <div className="ed-feature ed-glass"><Icon size={20} aria-hidden="true" /><div><strong>{title}</strong><span>{text}</span></div></div>;
}

function DirectoryIllustration() {
  return (
    <motion.div className="ed-hero-art" animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="ed-art-platform" />
      <div className="ed-profile-book"><CircleUserRound size={70} aria-hidden="true" /></div>
      <div className="ed-small-card"><UsersRound size={45} aria-hidden="true" /></div>
      <div className="ed-magnifier"><i /><b /></div>
    </motion.div>
  );
}

function Sidebar() {
  const menu = [
    [UsersRound, 'Employees'],
    [Network, 'Organization'],
    [MessageSquare, 'Teams'],
    [Building2, 'Departments'],
    [MapPin, 'Locations'],
    [Sparkles, 'Skills'],
    [BarChart3, 'Reports'],
    [CircleUserRound, 'My Profile'],
  ];

  return (
    <aside className="ed-sidebar">
      <div className="ed-side-brand"><Grid2X2 size={16} /><strong>Directory</strong></div>
      <nav>{menu.map(([Icon, label], index) => <div className={`ed-menu ${index === 0 ? 'active' : ''}`} key={label}><Icon size={13} /><span>{label}</span></div>)}</nav>
      <div className="ed-filter-block">
        <h4>FILTERS</h4>
        {[
          ['All Employees', '256'],
          ['Full Time', '220'],
          ['Contractors', '24'],
          ['Interns', '12'],
        ].map(([label, value]) => <span key={label}>{label}<b>{value}</b></span>)}
      </div>
      <div className="ed-sync">
        <strong>Sync with Microsoft 365</strong>
        <p>Directory is automatically updated with Azure AD and Microsoft 365.</p>
        <div><i>A</i><i>O</i><i>T</i><i>S</i></div>
      </div>
    </aside>
  );
}

function FilterPill({ icon: Icon, title, value }) {
  return <button type="button" className="ed-filter-pill"><Icon size={16} /><span><b>{title}</b><small>{value}</small></span><ChevronDown size={12} /></button>;
}

function EmployeeCard({ employee }) {
  const [name, role, department, location, email, badge] = employee;
  return (
    <article className="ed-person-card ed-glass">
      <div className="ed-person-top">
        <Avatar name={name} large />
        {badge && <b>{badge}</b>}
      </div>
      <strong>{name}</strong>
      <span>{role}</span>
      <small><BriefcaseBusiness size={10} />{department}</small>
      <small><MapPin size={10} />{location}</small>
      <small><Mail size={10} />{email}</small>
      <div className="ed-actions-row">
        <button type="button" aria-label={`Email ${name}`}><Mail size={13} /></button>
        <button type="button" aria-label={`Message ${name}`}><MessageSquare size={13} /></button>
        <button type="button" aria-label={`Call ${name}`}><Phone size={13} /></button>
        <button type="button" aria-label={`${name} more actions`}>...</button>
      </div>
    </article>
  );
}

function OrganizationOverview() {
  const depts = [['Engineering', 78], ['Marketing', 34], ['Sales', 51], ['HR', 25], ['Finance', 18], ['Product', 22], ['Design', 16], ['Analytics', 12]];
  return (
    <section className="ed-side-card ed-org-mini ed-glass">
      <div className="ed-card-head"><h3>Organization Overview</h3><a>View Org Chart <ArrowRight size={10} /></a></div>
      <div className="ed-mini-ceo"><Avatar name="Vijay Karthik" /><span><b>Vijay Karthik</b><small>CEO</small></span></div>
      <div className="ed-mini-stats"><div><strong>6</strong><span>Direct Reports</span></div><div><strong>256</strong><span>Total Employees</span></div></div>
      <div className="ed-mini-depts">{depts.map(([label, value]) => <span key={label}><b>{label}</b><small>{value}</small></span>)}</div>
    </section>
  );
}

function TopSkills() {
  return (
    <section className="ed-side-card ed-glass">
      <div className="ed-card-head"><h3>Top Skills</h3><a>View All <ArrowRight size={10} /></a></div>
      <div className="ed-skills">{skills.map(([label, count, value]) => <div key={label}><span>{label}<b>{count}</b></span><i><em style={{ width: `${value}%` }} /></i></div>)}</div>
    </section>
  );
}

function ProfilePanel() {
  return (
    <aside className="ed-right">
      <section className="ed-profile-card ed-glass">
        <div className="ed-profile-main"><Avatar name="Vijay Karthik" large /><div><strong>Vijay Karthik</strong><span>Chief Executive Officer</span><b>CEO</b></div></div>
        <p><BriefcaseBusiness size={12} />Executive Leadership</p>
        <p><MapPin size={12} />Hyderabad, India</p>
        <p><Mail size={12} />vijay@desireinfoweb.com</p>
        <p><Phone size={12} />+91 87804 68807</p>
        <div className="ed-quick-actions">{[Mail, MessageSquare, Phone, CalendarDays, CircleUserRound].map((Icon, index) => <button type="button" aria-label={`Quick action ${index + 1}`} key={index}><Icon size={14} /></button>)}</div>
        <button type="button" className="ed-profile-button">View Full Profile</button>
      </section>
      <OrganizationOverview />
      <TopSkills />
      <div className="ed-profile-art" aria-hidden="true"><div /><span><CircleUserRound size={48} /></span><i><Phone size={24} /></i><b><Mail size={24} /></b></div>
    </aside>
  );
}

function BenefitCard({ icon: Icon, title, text }) {
  return <article className="ed-benefit ed-glass"><Icon size={30} /><div><strong>{title}</strong><p>{text}</p></div></article>;
}

function Dashboard() {
  return (
    <section className="ed-dashboard ed-glass">
      <Sidebar />
      <div className="ed-main-panel">
        <div className="ed-dash-head">
          <div><h2>All Employees</h2><span>256 Employees</span></div>
          <label><Search size={15} /><input type="search" placeholder="Search by name, skill, department, location or manager..." /></label>
          <button type="button" className="ghost"><Filter size={14} />Filters</button>
          <button type="button" className="primary"><UserPlus size={14} />Add Employee</button>
        </div>
        <div className="ed-filter-row">
          {filters.map(([Icon, title, value]) => <FilterPill key={title} icon={Icon} title={title} value={value} />)}
          <div className="ed-view-toggle"><button type="button"><Grid2X2 size={14} /></button><button type="button"><List size={14} /></button><a>Clear All</a></div>
        </div>
        <div className="ed-employee-grid">{employees.map((employee) => <EmployeeCard key={employee[0]} employee={employee} />)}</div>
        <div className="ed-pagination"><span>Showing 1 to 12 of 256 employees</span><div>{['<', '1', '2', '3', '4', '5', '...', '22', '>'].map((item, index) => <button className={item === '1' ? 'active' : ''} type="button" key={`${item}-${index}`}>{item}</button>)}</div><button type="button">12 / page <ChevronDown size={12} /></button></div>
        <div className="ed-benefits">{benefits.map((item) => <BenefitCard key={item.title} {...item} />)}</div>
      </div>
    </section>
  );
}

function QRPlaceholder() {
  return <span className="ed-qr" aria-label="QR code placeholder">{Array.from({ length: 49 }, (_, index) => <i key={index} />)}</span>;
}

function BottomArea() {
  return (
    <motion.div className="ed-bottom" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.62 }} viewport={{ once: true }}>
      <div className="ed-integrations ed-glass"><h3>Seamlessly Integrated with Microsoft 365</h3><div>{integrations.map(([title, subtitle, color]) => <span key={title}><i style={{ '--app': color }}>{title === 'Power BI' ? 'BI' : title[0]}</i><strong>{title}</strong><small>{subtitle}</small></span>)}</div></div>
      <button type="button" className="ed-cta"><span>One Directory.<br />One Organization.<br />Unlimited Connections.</span><UsersRound size={58} /></button>
      <div className="ed-contact ed-glass"><div><span><Globe2 size={16} />www.desireinfoweb.com</span><span><Mail size={16} />vijay@desireinfoweb.com</span><span><Phone size={16} />+91-8780468807</span></div><QRPlaceholder /></div>
    </motion.div>
  );
}

export default function EmployeeDirectory() {
  return (
    <section className="ed-page" id="employee-directory">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@500;600;700;800;900&display=swap');
        .ed-page,.ed-page *{box-sizing:border-box}
        .ed-page{--ink:#111066;--muted:#66639b;--violet:#6d28d9;--purple:#7c3aed;--pink:#ec4899;position:relative;isolation:isolate;min-height:100vh;overflow:hidden;padding:22px clamp(14px,1.7vw,30px) 24px;color:var(--ink);font-family:"Inter","Poppins","Segoe UI",sans-serif;background:radial-gradient(circle at 14% 18%,rgba(236,72,153,.15),transparent 24%),radial-gradient(circle at 73% 8%,rgba(109,40,217,.16),transparent 30%),radial-gradient(circle at 88% 80%,rgba(56,189,248,.12),transparent 28%),linear-gradient(135deg,#fbfaff 0%,#f7f2ff 48%,#fff7fd 100%)}
        .ed-page:before{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(109,40,217,.04) 1px,transparent 1px),linear-gradient(0deg,rgba(109,40,217,.035) 1px,transparent 1px);background-size:74px 74px}
        .ed-shell{width:min(100%,1800px);margin:0 auto;position:relative;z-index:1}
        .ed-glass{background:linear-gradient(180deg,rgba(255,255,255,.78),rgba(255,255,255,.5));border:1px solid rgba(255,255,255,.72);box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 60px rgba(109,40,217,.14),0 0 0 1px rgba(130,94,255,.12);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px)}
        .ed-header{display:grid;grid-template-columns:270px minmax(0,1fr) 300px;gap:12px;align-items:center;margin-bottom:12px}
        .ed-brand{display:flex;align-items:center;gap:12px}.ed-brand img{width:60px;height:60px;object-fit:contain;filter:drop-shadow(0 16px 26px rgba(109,40,217,.18))}.ed-brand h2{margin:0;font-family:"Poppins",sans-serif;font-size:27px;line-height:1;font-weight:900}.ed-brand p{margin:4px 0 0;font-size:10.5px;line-height:1.05;font-weight:800}.ed-brand p span{color:var(--pink)}
        .ed-stats{min-height:52px;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));align-items:center;border-radius:20px;padding:6px 10px;background:linear-gradient(180deg,rgba(255,255,255,.9),rgba(246,240,255,.74));border-color:rgba(126,88,255,.38)}
        .ed-stat{display:grid;grid-template-columns:24px minmax(0,1fr);gap:7px;align-items:center;min-height:34px;padding:0 7px;border-left:1px solid rgba(109,40,217,.16)}.ed-stat:first-child{border-left:0}.ed-stat svg{color:var(--violet);stroke-width:2.15}.ed-stat strong{display:block;font-size:clamp(13px,.84vw,17px);line-height:.95;font-weight:900}.ed-stat span{display:block;margin-top:3px;font-size:6px;font-weight:800}
        .ed-partners{display:grid;grid-template-columns:1fr 1fr;gap:11px}.ed-partner{min-height:58px;display:flex;align-items:center;justify-content:center;gap:11px;border-radius:18px;padding:8px 11px}.ed-partner span:last-child{font-size:11.5px;line-height:1.05;font-weight:900}.ed-ms-mark{width:29px;height:29px;display:grid;grid-template-columns:1fr 1fr;gap:3px}.ed-ms-mark i{border-radius:1px}.ed-m365-mark{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(from 35deg,#1b22c8,#7c3aed,#38bdf8,#1b22c8)}.ed-m365-mark i{width:21px;height:21px;border-radius:9px;background:rgba(255,255,255,.72);transform:rotate(45deg)}
        .ed-main{display:grid;grid-template-columns:270px minmax(0,1fr) 245px;gap:12px;align-items:start}.ed-left h1{margin:16px 0 10px;font-family:"Poppins",sans-serif;font-size:clamp(40px,2.9vw,58px);line-height:1;font-weight:900}.ed-left h1 span{background:linear-gradient(105deg,#111066 0%,#1b22c8 38%,#ec4899 88%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.ed-left h2{max-width:255px;margin:0 0 13px;font-size:18px;line-height:1.08;font-weight:900}.ed-left p{max-width:254px;margin:0 0 15px;font-size:11px;line-height:1.43;font-weight:700}
        .ed-feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}.ed-feature{min-height:72px;display:grid;grid-template-columns:23px 1fr;gap:7px;align-items:start;padding:10px 9px;border-radius:14px}.ed-feature svg{color:var(--violet)}.ed-feature strong,.ed-feature span{display:block}.ed-feature strong{font-size:8px;line-height:1.12;font-weight:900}.ed-feature span{margin-top:5px;font-size:5.8px;line-height:1.3;font-weight:800;color:#2f2b79}
        .ed-hero-art{position:relative;width:250px;height:225px;margin:12px 0 0 4px}.ed-art-platform{position:absolute;left:12px;right:12px;bottom:0;height:70px;border-radius:30px;background:linear-gradient(135deg,rgba(255,255,255,.86),rgba(109,40,217,.32));box-shadow:0 26px 50px rgba(109,40,217,.26);transform:perspective(620px) rotateX(58deg)}.ed-profile-book{position:absolute;left:40px;bottom:58px;width:104px;height:126px;display:grid;place-items:center;border-radius:18px;color:white;background:linear-gradient(145deg,#2f27d9,#9f5cff);box-shadow:0 26px 42px rgba(109,40,217,.3)}.ed-small-card{position:absolute;right:28px;bottom:42px;width:72px;height:72px;display:grid;place-items:center;border-radius:16px;color:white;background:linear-gradient(145deg,#6d28d9,#c084fc)}.ed-magnifier i{position:absolute;right:18px;bottom:99px;width:64px;height:64px;border:8px solid rgba(255,255,255,.78);border-radius:50%;background:rgba(124,58,237,.16)}.ed-magnifier b{position:absolute;right:8px;bottom:86px;width:45px;height:10px;border-radius:999px;background:linear-gradient(90deg,#7c3aed,#ec4899);transform:rotate(45deg)}
        .ed-dashboard{display:grid;grid-template-columns:165px minmax(0,1fr);min-height:710px;overflow:hidden;border-radius:28px}.ed-sidebar{display:flex;flex-direction:column;min-height:710px;padding:16px 10px 12px;color:white;background:linear-gradient(180deg,#27109a 0%,#17065f 100%)}.ed-side-brand{display:flex;align-items:center;gap:8px;margin-bottom:18px;font-size:12px;font-weight:900}.ed-sidebar nav{display:grid;gap:5px}.ed-menu{display:flex;align-items:center;gap:8px;min-height:29px;padding:0 9px;border-radius:9px;color:rgba(255,255,255,.9);font-size:8px;font-weight:800}.ed-menu.active{background:linear-gradient(90deg,#6d28d9,#c026d3);color:white}.ed-filter-block{margin-top:16px;padding-top:12px;border-top:1px solid rgba(255,255,255,.16)}.ed-filter-block h4{margin:0 0 9px;font-size:7px;color:rgba(255,255,255,.7)}.ed-filter-block span{display:flex;justify-content:space-between;margin:9px 0;font-size:8px;font-weight:800}.ed-sync{margin-top:auto;padding:12px;border-radius:14px;background:rgba(255,255,255,.09)}.ed-sync strong{font-size:9px}.ed-sync p{font-size:6.5px;line-height:1.35}.ed-sync div{display:flex;gap:7px}.ed-sync i{width:20px;height:20px;display:grid;place-items:center;border-radius:5px;background:#6d28d9;color:white;font-size:8px;font-style:normal;font-weight:900}
        .ed-main-panel{padding:16px 14px}.ed-dash-head{display:grid;grid-template-columns:180px 1fr 80px 120px;gap:10px;align-items:center;margin-bottom:12px}.ed-dash-head h2{margin:0;font-size:17px;font-weight:900}.ed-dash-head span{font-size:8px;font-weight:800}.ed-dash-head label{height:36px;display:flex;align-items:center;gap:8px;padding:0 12px;border-radius:10px;border:1px solid rgba(109,40,217,.18);background:rgba(255,255,255,.62)}.ed-dash-head input{width:100%;border:0;outline:0;background:transparent;font-size:8px;font-weight:800}.ed-dash-head button{height:36px;border:0;border-radius:10px;font-size:8px;font-weight:900;display:flex;align-items:center;justify-content:center;gap:6px}.ed-dash-head .ghost{background:rgba(255,255,255,.72);border:1px solid rgba(109,40,217,.16);color:#111066}.ed-dash-head .primary{color:white;background:linear-gradient(100deg,#5127f1,#a855f7)}
        .ed-filter-row{display:grid;grid-template-columns:repeat(5,1fr) 74px;gap:9px;margin-bottom:12px}.ed-filter-pill{height:40px;display:grid;grid-template-columns:21px 1fr 12px;gap:8px;align-items:center;padding:0 10px;border:1px solid rgba(109,40,217,.16);border-radius:11px;background:rgba(255,255,255,.62);color:#111066;text-align:left}.ed-filter-pill svg{color:#6d28d9}.ed-filter-pill b,.ed-filter-pill small{display:block}.ed-filter-pill b{font-size:7px}.ed-filter-pill small{font-size:6px;color:#66639b}.ed-view-toggle{display:grid;grid-template-columns:28px 28px;gap:5px;align-items:center}.ed-view-toggle button{height:28px;border:0;border-radius:8px;background:rgba(109,40,217,.09);color:#6d28d9}.ed-view-toggle a{grid-column:1/-1;text-align:center;font-size:6px;font-weight:900;color:#6d28d9}
        .ed-employee-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.ed-person-card{position:relative;min-height:176px;padding:14px;border-radius:15px}.ed-person-top{display:flex;align-items:start;justify-content:space-between;margin-bottom:10px}.ed-person-top>b{padding:5px 8px;border-radius:7px;color:white;background:#6d28d9;font-size:7px}.ed-avatar{width:28px;height:28px;display:grid;place-items:center;border-radius:50%;color:white;background:linear-gradient(135deg,#f97316,#6d28d9);font-size:8px;font-weight:900}.ed-avatar.large{width:54px;height:54px;font-size:16px}.ed-person-card strong,.ed-person-card span,.ed-person-card small{display:block}.ed-person-card strong{font-size:10px}.ed-person-card span{margin-top:4px;font-size:7px;font-weight:800;color:#312e81}.ed-person-card small{display:flex;align-items:center;gap:5px;margin-top:6px;color:#4f46e5;font-size:6px;font-weight:800}.ed-actions-row{display:flex;gap:7px;margin-top:10px}.ed-actions-row button{width:24px;height:24px;border:0;border-radius:7px;background:rgba(109,40,217,.09);color:#6d28d9;font-size:9px}
        .ed-pagination{display:flex;align-items:center;justify-content:space-between;margin:13px 0;color:#66639b;font-size:8px;font-weight:800}.ed-pagination div{display:flex;gap:5px}.ed-pagination button{height:24px;min-width:24px;border:1px solid rgba(109,40,217,.14);border-radius:7px;background:rgba(255,255,255,.7);color:#111066;font-size:8px;font-weight:900}.ed-pagination button.active{color:white;background:#6d28d9}
        .ed-benefits{display:grid;grid-template-columns:repeat(5,1fr);gap:9px}.ed-benefit{min-height:80px;display:grid;grid-template-columns:36px 1fr;gap:9px;align-items:center;padding:11px;border-radius:14px}.ed-benefit svg{color:#6d28d9}.ed-benefit strong{font-size:8px}.ed-benefit p{margin:6px 0 0;font-size:5.8px;line-height:1.35;font-weight:800}
        .ed-right{display:grid;gap:12px}.ed-profile-card,.ed-side-card{padding:14px 12px;border-radius:18px}.ed-profile-main{display:grid;grid-template-columns:58px 1fr;gap:11px;align-items:center}.ed-profile-main strong,.ed-profile-main span,.ed-profile-main b{display:block}.ed-profile-main strong{font-size:11px}.ed-profile-main span{font-size:7px}.ed-profile-main b{width:max-content;margin-top:6px;padding:4px 8px;border-radius:7px;color:white;background:#6d28d9;font-size:6px}.ed-profile-card p{display:flex;align-items:center;gap:8px;margin:8px 0;color:#4f46e5;font-size:7px;font-weight:900}.ed-quick-actions{display:flex;justify-content:center;gap:10px;margin:12px 0}.ed-quick-actions button{width:28px;height:28px;border:0;border-radius:8px;background:rgba(109,40,217,.09);color:#6d28d9}.ed-profile-button{width:100%;height:34px;border:0;border-radius:10px;color:white;background:linear-gradient(100deg,#5127f1,#a855f7);font-size:8px;font-weight:900}
        .ed-card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.ed-card-head h3,.ed-side-card h3{margin:0;font-size:10px}.ed-card-head a{font-size:7px;color:#6d28d9;font-weight:900;display:flex;align-items:center;gap:3px}.ed-mini-ceo{width:120px;margin:0 auto 10px;display:flex;align-items:center;gap:7px;padding:7px;border-radius:10px;background:rgba(255,255,255,.6)}.ed-mini-ceo b,.ed-mini-ceo small{display:block;font-size:6px}.ed-mini-stats{display:grid;grid-template-columns:1fr 1fr;gap:7px}.ed-mini-stats div{padding:8px;border-radius:10px;background:rgba(255,255,255,.55);text-align:center}.ed-mini-stats strong{font-size:15px}.ed-mini-stats span{display:block;font-size:6px}.ed-mini-depts{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:8px}.ed-mini-depts span{padding:7px;border-radius:9px;background:rgba(109,40,217,.08);text-align:center}.ed-mini-depts b,.ed-mini-depts small{display:block;font-size:6px}
        .ed-skills{display:grid;gap:10px}.ed-skills span{display:flex;justify-content:space-between;margin-bottom:5px;font-size:7px;font-weight:900}.ed-skills i{display:block;height:5px;border-radius:999px;background:rgba(109,40,217,.12)}.ed-skills em{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,#6d28d9,#a855f7)}.ed-profile-art{position:relative;height:135px}.ed-profile-art div{position:absolute;left:20px;right:20px;bottom:8px;height:50px;border-radius:24px;background:linear-gradient(135deg,rgba(255,255,255,.84),rgba(109,40,217,.32));transform:perspective(620px) rotateX(58deg)}.ed-profile-art span{position:absolute;left:42px;bottom:45px;width:82px;height:76px;display:grid;place-items:center;border-radius:16px;color:white;background:linear-gradient(145deg,#2f27d9,#9f5cff)}.ed-profile-art i,.ed-profile-art b{position:absolute;display:grid;place-items:center;width:40px;height:40px;border-radius:12px;color:white;background:linear-gradient(145deg,#ec4899,#c084fc)}.ed-profile-art i{right:38px;bottom:70px}.ed-profile-art b{right:74px;bottom:34px}
        .ed-bottom{display:grid;grid-template-columns:500px 330px 330px;gap:16px;align-items:end;margin:14px 0 0 130px}.ed-integrations{min-height:90px;padding:13px 18px;border-radius:17px}.ed-integrations h3{margin:0 0 10px;text-align:center;font-size:12px}.ed-integrations>div{display:grid;grid-template-columns:repeat(6,1fr)}.ed-integrations span{display:grid;place-items:center;gap:2px;border-left:1px solid rgba(109,40,217,.14);text-align:center}.ed-integrations span:first-child{border-left:0}.ed-integrations i{width:24px;height:24px;display:grid;place-items:center;border-radius:7px;color:white;background:var(--app);font-style:normal;font-size:8px;font-weight:900}.ed-integrations strong{font-size:7px}.ed-integrations small{font-size:5.8px;color:#66639b}.ed-cta{min-height:92px;display:flex;align-items:center;justify-content:space-between;border:0;border-radius:18px;padding:0 26px;color:white;background:linear-gradient(110deg,#3328e7 0%,#7c3aed 42%,#ec4899 84%);font-size:20px;line-height:1.15;font-weight:900}.ed-contact{min-height:92px;display:grid;grid-template-columns:1fr 78px;gap:13px;align-items:center;padding:12px 14px;border-radius:17px}.ed-contact div{display:grid;gap:8px}.ed-contact span{display:flex;align-items:center;gap:9px;font-size:11px;font-weight:900}.ed-qr{width:74px;height:74px;display:grid;grid-template-columns:repeat(7,1fr);gap:3px;padding:6px;border:4px solid white;border-radius:8px;background:white}.ed-qr i{background:#111066}.ed-qr i:nth-child(2n),.ed-qr i:nth-child(5n),.ed-qr i:nth-child(11n){background:transparent}
        @media(max-width:1180px){.ed-header,.ed-main,.ed-bottom{grid-template-columns:1fr;margin-left:0}.ed-stats{overflow-x:auto;grid-template-columns:repeat(6,150px)}.ed-partners{max-width:520px}.ed-left{display:grid;grid-template-columns:minmax(280px,360px) 1fr;gap:20px}.ed-hero-art{display:none}.ed-right{grid-template-columns:repeat(3,1fr)}.ed-bottom{grid-template-columns:1fr 1fr}}
        @media(max-width:900px){.ed-dashboard,.ed-dash-head,.ed-filter-row,.ed-bottom,.ed-contact{grid-template-columns:1fr}.ed-sidebar{min-height:auto}.ed-sidebar nav{grid-template-columns:repeat(3,1fr)}.ed-sync{display:none}.ed-employee-grid{grid-template-columns:repeat(2,1fr)}.ed-benefits,.ed-right{grid-template-columns:1fr 1fr}.ed-integrations>div{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:640px){.ed-page{padding:16px 12px 22px}.ed-partners,.ed-feature-grid,.ed-employee-grid,.ed-benefits,.ed-right,.ed-mini-depts,.ed-integrations>div{grid-template-columns:1fr}.ed-left h1{font-size:38px}.ed-dashboard{border-radius:20px}.ed-main-panel{padding:14px 12px}.ed-pagination{display:grid;gap:10px}.ed-sidebar nav{grid-template-columns:repeat(2,1fr)}}
      `}</style>

      <div className="ed-shell">
        <motion.header className="ed-header" initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
          <div className="ed-brand"><img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" /><div><h2>DesireInfoWeb</h2><p>Your Extended <span>Technology Partner</span></p></div></div>
          <div className="ed-stats ed-glass">{stats.map((item) => <StatPill key={item.label} {...item} />)}</div>
          <div className="ed-partners"><div className="ed-partner ed-glass"><MicrosoftMark /><span>Microsoft<br />Solutions Partner</span></div><div className="ed-partner ed-glass"><M365Mark /><span>Built on<br />Microsoft 365</span></div></div>
        </motion.header>

        <div className="ed-main">
          <motion.aside className="ed-left" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.64 }} viewport={{ once: true }}>
            <div><h1>Employee<br /><span>Directory</span></h1><h2>Find. Connect. Collaborate. Empower Every Connection.</h2><p>A smart employee directory that helps you discover people, skills, expertise and connect instantly across the organization.</p><div className="ed-feature-grid">{features.map((item) => <FeatureCard key={item.title} {...item} />)}</div></div>
            <DirectoryIllustration />
          </motion.aside>
          <Dashboard />
          <ProfilePanel />
        </div>
        <BottomArea />
      </div>
    </section>
  );
}
