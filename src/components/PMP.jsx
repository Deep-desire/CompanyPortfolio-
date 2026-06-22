import { motion } from 'framer-motion';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Boxes,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileText,
  Flag,
  FolderKanban,
  Gauge,
  Globe2,
  Home,
  Inbox,
  LayoutDashboard,
  Mail,
  Milestone,
  Phone,
  Settings,
  UsersRound,
  WalletCards,
} from 'lucide-react';

const topStats = [
  { icon: FolderKanban, value: '24', label: 'Active Projects' },
  { icon: ClipboardCheck, value: '128', label: 'Tasks In Progress' },
  { icon: Flag, value: '16', label: 'Milestones' },
  { icon: Clock3, value: '82%', label: 'Overall Progress' },
  { icon: CircleDollarSign, value: '$2.48M', label: 'Budget Allocated' },
  { icon: WalletCards, value: '$1.62M', label: 'Budget Used' },
  { icon: UsersRound, value: '68', label: 'Team Members' },
];

const features = [
  {
    icon: FileText,
    title: 'Documents, Tasks & Issues',
    text: 'Centralized management of all project documents, tasks, issues and dependencies.',
  },
  {
    icon: Milestone,
    title: 'Milestones & Deadlines',
    text: 'Define key milestones, set deadlines and track progress across the lifecycle.',
  },
  {
    icon: Mail,
    title: 'Emails & Status Updates',
    text: 'Automated updates, notifications and real-time status changes.',
  },
  {
    icon: BarChart3,
    title: 'Project Reports & Budgets',
    text: 'Track budgets, expenses and financial performance in real time.',
  },
  {
    icon: LayoutDashboard,
    title: 'Unified Dashboard',
    text: 'Get a 360-degree view of projects, KPIs, tasks and critical insights.',
  },
  {
    icon: Activity,
    title: 'Progress Tracking',
    text: 'Monitor project health, task completion and delivery progress.',
  },
  {
    icon: UsersRound,
    title: 'Resource Utilization',
    text: 'Optimize allocation and track team capacity across projects.',
  },
  {
    icon: Boxes,
    title: 'Microsoft 365 Environment',
    text: 'Integrated with Teams, SharePoint, Planner, Outlook and Power BI.',
  },
];

const sidebarItems = [
  [Home, 'Home'],
  [FolderKanban, 'Projects'],
  [ClipboardCheck, 'Tasks'],
  [Flag, 'Milestones'],
  [FileText, 'Documents'],
  [AlertTriangle, 'Issues'],
  [BarChart3, 'Reports'],
  [WalletCards, 'Budgets'],
  [UsersRound, 'Resources'],
  [CalendarDays, 'Calendar'],
  [Inbox, 'Emails'],
  [LayoutDashboard, 'Dashboard'],
  [Settings, 'Settings'],
];

const kpis = [
  { title: 'Active Projects', value: '24', change: '12% vs last month', icon: FolderKanban, color: '#6d28ff' },
  { title: 'Tasks In Progress', value: '128', change: '18% vs last month', icon: ClipboardCheck, color: '#7c3aed' },
  { title: 'Overall Progress', value: '82%', change: '8% vs last month', icon: Gauge, color: '#10b981' },
  { title: 'Budget Allocated', value: '$2.48M', change: '15% vs last month', icon: CircleDollarSign, color: '#f59e0b' },
  { title: 'Budget Used', value: '$1.62M', change: '10% vs last month', icon: WalletCards, color: '#ef4444' },
  { title: 'Team Members', value: '68', change: '6% vs last month', icon: UsersRound, color: '#2563eb' },
];

const timelineRows = [
  ['Microsoft 365 Integration', 'Mar 15 - Aug 30', 80, '#6d28ff'],
  ['AI-Powered Platform', 'Apr 01 - Nov 10', 65, '#a855f7'],
  ['ERP Modernization', 'Feb 10 - Sep 15', 90, '#6d28ff'],
  ['Customer Portal', 'May 05 - Oct 10', 40, '#f59e0b'],
  ['Data Analytics Project', 'Jun 01 - Dec 15', 20, '#8b5cf6'],
];

const taskRows = [
  ['Review Business Requirements', 'Microsoft 365 Integration', 'May 20', 'High'],
  ['Design System Architecture', 'AI-Powered Platform', 'May 22', 'Medium'],
  ['Budget Approval', 'ERP Modernization', 'May 25', 'High'],
  ['User Acceptance Testing', 'Customer Portal', 'May 28', 'Medium'],
  ['Data Migration Planning', 'Data Analytics Project', 'May 30', 'Low'],
];

const milestones = [
  ['Requirements Gathering', 'Microsoft 365 Integration', 'May 15', 'done'],
  ['System Design', 'AI-Powered Platform', 'Jun 01', 'done'],
  ['Development Phase 1', 'ERP Modernization', 'Jun 20', 'pending'],
  ['Beta Release', 'Customer Portal', 'Jul 10', 'pending'],
  ['Go Live', 'Data Analytics Project', 'Dec 15', 'pending'],
];

const resources = [
  ['Vijay Karthik', 'Project Manager', 85, '#f59e0b'],
  ['Anita Sharma', 'Business Analyst', 75, '#ef4444'],
  ['Rohit Gupta', 'Developer', 90, '#60a5fa'],
  ['Sneha Patel', 'UI/UX Designer', 65, '#f472b6'],
  ['Karthik Reddy', 'DevOps Engineer', 80, '#8b5cf6'],
];

const ecosystem = [
  ['Teams', 'Collaboration', '#6554f3'],
  ['SharePoint', 'Documents', '#0f9f9a'],
  ['Planner', 'Task Management', '#16a34a'],
  ['Outlook', 'Email & Calendar', '#2563eb'],
  ['Power BI', 'Analytics', '#f59e0b'],
  ['OneDrive', 'Cloud Storage', '#2563eb'],
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.045, duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  }),
};

function MicrosoftMark() {
  return (
    <span className="pmp-ms-mark" aria-hidden="true">
      {['#f25022', '#7fba00', '#00a4ef', '#ffb900'].map((color) => (
        <i key={color} style={{ backgroundColor: color }} />
      ))}
    </span>
  );
}

function M365Mark() {
  return (
    <span className="pmp-m365-mark" aria-hidden="true">
      <i />
    </span>
  );
}

function DashboardSidebar() {
  return (
    <aside className="pmp-dash-sidebar">
      <div className="pmp-dash-brand">
        <MicrosoftMark />
        <strong>DesireInfoWeb</strong>
        <span />
      </div>

      <nav>
        {sidebarItems.map(([Icon, label], index) => (
          <div className={`pmp-menu-item ${index === 0 ? 'active' : ''}`} key={label}>
            <Icon size={13} />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      <div className="pmp-profile">
        <b>VK</b>
        <div>
          <strong>Vijay Karthik</strong>
          <span>Project Manager</span>
          <small>Online</small>
        </div>
      </div>
    </aside>
  );
}

function KpiCards() {
  return (
    <div className="pmp-kpis">
      {kpis.map(({ title, value, change, icon: Icon, color }) => (
        <motion.div className="pmp-kpi pmp-glass" key={title} whileHover={{ y: -4 }}>
          <div>
            <span>{title}</span>
            <strong>{value}</strong>
            <small>{change}</small>
          </div>
          <em style={{ color, backgroundColor: `${color}18` }}>
            <Icon size={16} />
          </em>
          <i style={{ '--line': color }} />
        </motion.div>
      ))}
    </div>
  );
}

function TimelineCard() {
  return (
    <section className="pmp-widget pmp-timeline pmp-glass">
      <h3>Project Timeline</h3>
      <div className="pmp-months">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
      <div className="pmp-gantt">
        {timelineRows.map(([name, date, progress, color], index) => (
          <div className="pmp-gantt-row" key={name}>
            <div>
              <strong>{name}</strong>
              <span>{date}</span>
            </div>
            <b style={{ marginLeft: `${index * 5 + 6}%`, width: `${progress * 0.74}%`, background: `linear-gradient(90deg, ${color}, #b088ff)` }}>
              <i>{progress}%</i>
            </b>
          </div>
        ))}
      </div>
      <div className="pmp-legend">
        {['Completed', 'In Progress', 'On Hold', 'Planned'].map((item, index) => (
          <span key={item}><i className={`legend-${index}`} />{item}</span>
        ))}
      </div>
    </section>
  );
}

function DonutCard({ title, center, sub, type = 'tasks' }) {
  const rows = type === 'tasks'
    ? [
      ['Completed', '56 (44%)', '#10b981'],
      ['In Progress', '42 (33%)', '#6d28ff'],
      ['On Hold', '18 (14%)', '#f59e0b'],
      ['Not Started', '12 (9%)', '#a78bfa'],
    ]
    : [
      ['Development', '$1.20M (48%)', '#6d28ff'],
      ['Infrastructure', '$0.65M (26%)', '#8b5cf6'],
      ['Resources', '$0.38M (15%)', '#f59e0b'],
      ['Others', '$0.25M (11%)', '#a78bfa'],
    ];

  return (
    <section className="pmp-widget pmp-donut-card pmp-glass">
      <div className="pmp-widget-head">
        <h3>{title}</h3>
        {type === 'budget' && <button type="button">This Quarter</button>}
      </div>
      <div className="pmp-donut-layout">
        <div className={`pmp-donut ${type}`}>
          <strong>{center}</strong>
          <span>{sub}</span>
        </div>
        <div className="pmp-donut-legend">
          {rows.map(([label, value, color]) => (
            <span key={label}><i style={{ backgroundColor: color }} />{label}<b>{value}</b></span>
          ))}
        </div>
      </div>
      <a>{type === 'tasks' ? 'View All Tasks' : 'View Budget Report'} <ArrowRight size={11} /></a>
    </section>
  );
}

function MyTasksCard() {
  return (
    <section className="pmp-widget pmp-my-tasks pmp-glass">
      <div className="pmp-widget-head">
        <h3>My Tasks</h3>
        <a>View All <ArrowRight size={11} /></a>
      </div>
      {taskRows.map(([task, project, date, priority]) => (
        <div className="pmp-task-row" key={task}>
          <div>
            <strong>{task}</strong>
            <span>{project}</span>
          </div>
          <small>{date}</small>
          <b className={`priority-${priority.toLowerCase()}`}>{priority}</b>
        </div>
      ))}
    </section>
  );
}

function MilestonesCard() {
  return (
    <section className="pmp-widget pmp-milestones pmp-glass">
      <div className="pmp-widget-head">
        <h3>Milestones</h3>
        <a>View All <ArrowRight size={11} /></a>
      </div>
      {milestones.map(([title, project, date, state]) => (
        <div className="pmp-milestone-row" key={title}>
          <CheckCircle2 size={14} className={state === 'done' ? 'done' : ''} />
          <div>
            <strong>{title}</strong>
            <span>{project}</span>
          </div>
          <small>{date}</small>
        </div>
      ))}
    </section>
  );
}

function ResourceCard() {
  return (
    <section className="pmp-widget pmp-resource pmp-glass">
      <div className="pmp-widget-head">
        <h3>Resource Utilization</h3>
        <a>View All <ArrowRight size={11} /></a>
      </div>
      {resources.map(([name, role, percent, color]) => (
        <div className="pmp-resource-row" key={name}>
          <b style={{ background: color }}>{name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</b>
          <div>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
          <i><span style={{ width: `${percent}%` }} /></i>
          <small>{percent}%</small>
        </div>
      ))}
    </section>
  );
}

function HealthCard() {
  return (
    <section className="pmp-widget pmp-health pmp-glass">
      <h3>Project Health</h3>
      <div className="health-status"><CheckCircle2 size={17} />On Track</div>
      {['Schedule', 'Budget', 'Quality', 'Risks', 'Issues'].map((item, index) => (
        <div className="health-row" key={item}>
          <span>{item}</span>
          <b className={index > 2 ? 'risk' : ''}>{index > 2 ? 'At Risk' : 'On Track'}</b>
        </div>
      ))}
      <div className="health-gauge">
        <strong>82%</strong>
        <span>Health Score</span>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <motion.section
      className="pmp-dashboard pmp-glass"
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <DashboardSidebar />

      <div className="pmp-dash-main">
        <div className="pmp-dash-top">
          <div>
            <h2>Welcome back, Vijay!</h2>
            <p>Here is what is happening with your projects today.</p>
          </div>
          <div className="pmp-dash-actions">
            <button type="button">View in Microsoft 365</button>
            {ecosystem.slice(0, 5).map(([label, , color]) => (
              <span key={label} style={{ '--app': color }}>{label[0]}</span>
            ))}
            <button type="button" className="new-project">+ New Project</button>
          </div>
        </div>

        <KpiCards />

        <div className="pmp-dash-grid">
          <TimelineCard />
          <DonutCard title="Tasks Overview" center="128" sub="Total Tasks" />
          <MyTasksCard />
          <MilestonesCard />
          <DonutCard title="Budget Overview" center="$2.48M" sub="Total Budget" type="budget" />
          <ResourceCard />
          <HealthCard />
        </div>
      </div>
    </motion.section>
  );
}

function AppBlocks() {
  const blocks = [
    ['T', '#5b5bf0'],
    ['S', '#0f9f9a'],
    ['O', '#2563eb'],
    ['BI', '#f59e0b'],
  ];

  return (
    <motion.div className="pmp-app-blocks" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
      {blocks.map(([label, color], index) => (
        <div className={`app-block app-block-${index}`} key={label}>
          <span style={{ background: color }}>{label}</span>
          <i />
        </div>
      ))}
    </motion.div>
  );
}

function BottomSections() {
  return (
    <motion.div
      className="pmp-bottom"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62 }}
      viewport={{ once: true }}
    >
      <div className="ecosystem pmp-glass">
        <h3>Integrated Microsoft 365 Ecosystem</h3>
        <div>
          {ecosystem.map(([title, subtitle, color]) => (
            <span key={title}>
              <i style={{ '--app': color }}>{title[0]}</i>
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </span>
          ))}
        </div>
      </div>

      <button type="button" className="pmp-cta">
        <span><strong>Deliver Projects.<br />Drive Success.</strong><small>One Portal. One Team. One Goal.</small></span>
        <i><ArrowRight size={30} /></i>
      </button>

      <div className="pmp-contact pmp-glass">
        <div>
          <span><Globe2 size={16} />www.desireinfoweb.com</span>
          <span><Mail size={16} />vijay@desireinfoweb.com</span>
          <span><Phone size={16} />+91-8780468807</span>
        </div>
        <b aria-label="QR code placeholder" />
      </div>
    </motion.div>
  );
}

export default function PMP() {
  return (
    <section className="pmp-page" id="project-management-portal">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@500;600;700;800;900&display=swap');

        .pmp-page,
        .pmp-page * {
          box-sizing: border-box;
        }

        .pmp-page {
          --ink: #09046b;
          --violet: #6431f3;
          --purple: #7c3aed;
          --pink: #ed3f9d;
          --blue: #2563eb;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          min-height: 100vh;
          padding: 20px clamp(16px, 1.6vw, 28px) 24px;
          font-family: "Inter", "Poppins", "Segoe UI", sans-serif;
          color: var(--ink);
          background:
            radial-gradient(circle at 16% 18%, rgba(237,63,157,.18), transparent 24%),
            radial-gradient(circle at 72% 8%, rgba(100,49,243,.18), transparent 29%),
            radial-gradient(circle at 78% 78%, rgba(37,99,235,.12), transparent 28%),
            linear-gradient(135deg, #fff 0%, #f5f1ff 52%, #fff8ff 100%);
        }

        .pmp-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(100,49,243,.04) 1px, transparent 1px),
            linear-gradient(0deg, rgba(100,49,243,.035) 1px, transparent 1px),
            linear-gradient(110deg, transparent 0 15%, rgba(100,49,243,.08) 15.2% 15.4%, transparent 15.7%);
          background-size: 76px 76px, 76px 76px, 100% 100%;
          pointer-events: none;
          z-index: -2;
        }

        .pmp-page::after {
          content: "";
          position: absolute;
          left: -6%;
          right: -6%;
          bottom: -150px;
          height: 430px;
          background:
            linear-gradient(88deg, rgba(100,49,243,.14), transparent 34%),
            radial-gradient(ellipse at 50% 0%, rgba(100,49,243,.28), transparent 66%);
          transform: perspective(800px) rotateX(58deg);
          opacity: .8;
          z-index: -1;
        }

        .pmp-shell {
          position: relative;
          z-index: 1;
          width: min(100%, 1580px);
          margin: 0 auto;
        }

        .pmp-glass {
          background: linear-gradient(180deg, rgba(255,255,255,.76), rgba(255,255,255,.42));
          border: 1px solid rgba(130,94,255,.28);
          border-radius: 20px;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.9),
            0 20px 60px rgba(100,70,255,.14),
            0 0 0 1px rgba(255,255,255,.24);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .pmp-header {
          display: grid;
          grid-template-columns: 290px minmax(720px, 1fr) 250px;
          gap: 14px;
          align-items: center;
          margin-bottom: 14px;
        }

        .pmp-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pmp-brand img {
          width: 62px;
          height: 62px;
          object-fit: contain;
          filter: drop-shadow(0 16px 24px rgba(100,49,243,.18));
        }

        .pmp-brand h2 {
          margin: 0;
          font-family: "Poppins", sans-serif;
          font-size: 28px;
          line-height: 1;
          font-weight: 900;
        }

        .pmp-brand p {
          margin: 4px 0 0;
          font-size: 11px;
          font-weight: 800;
        }

        .pmp-brand span {
          color: var(--pink);
        }

        .pmp-stats {
          position: relative;
          z-index: 3;
          width: min(100%, 1120px);
          min-height: 62px;
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          align-items: center;
          justify-self: center;
          border-radius: 24px;
          padding: 8px 22px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.9), rgba(244,238,255,.72)),
            linear-gradient(90deg, rgba(255,255,255,.78), rgba(215,202,255,.4));
          border-color: rgba(116,76,255,.4);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.98),
            inset 0 -1px 0 rgba(126,88,255,.08),
            0 12px 34px rgba(100,70,255,.14),
            0 0 0 1px rgba(255,255,255,.46);
        }

        .pmp-stat {
          display: grid;
          grid-template-columns: 30px minmax(0, 1fr);
          gap: 8px;
          align-items: center;
          min-width: 0;
          min-height: 44px;
          padding: 0 12px;
          border-left: 1px solid rgba(100,49,243,.18);
        }

        .pmp-stat:first-child {
          border-left: 0;
        }

        .pmp-stat svg {
          width: 26px;
          height: 26px;
          color: var(--violet);
          stroke-width: 2.15;
          filter: drop-shadow(0 0 6px rgba(100,49,243,.22));
        }

        .pmp-stat strong {
          display: block;
          color: #08006f;
          font-size: clamp(17px, 1.28vw, 22px);
          line-height: .88;
          font-weight: 900;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .pmp-stat span {
          display: block;
          margin-top: 4px;
          max-width: 70px;
          color: #09046b;
          font-size: 7.2px;
          line-height: .96;
          font-weight: 900;
          letter-spacing: 0;
        }

        .pmp-partners {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .pmp-partner {
          min-height: 66px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          font-size: 11px;
          line-height: 1.18;
          font-weight: 900;
          border-radius: 16px;
        }

        .pmp-ms-mark {
          width: 28px;
          height: 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          flex: none;
        }

        .pmp-ms-mark i {
          display: block;
        }

        .pmp-m365-mark {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: conic-gradient(#2563eb, #7c3aed, #06b6d4, #2563eb);
          box-shadow: 0 12px 26px rgba(37,99,235,.22);
          flex: none;
        }

        .pmp-m365-mark i {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: block;
          background: white;
        }

        .pmp-main {
          display: grid;
          grid-template-columns: 350px minmax(0, 1fr);
          gap: 14px;
          align-items: start;
        }

        .pmp-left h1 {
          margin: 10px 0 8px;
          font-family: "Poppins", sans-serif;
          font-size: 40px;
          line-height: 1.04;
          font-weight: 900;
          letter-spacing: 0;
          color: #100a78;
        }

        .pmp-left h2 {
          margin: 0 0 16px;
          font-size: 17px;
          line-height: 1.2;
          font-weight: 900;
        }

        .pmp-left h2 span {
          background: linear-gradient(90deg, #6732f6, #ed3f9d);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .pmp-left p {
          margin: 0 0 18px;
          max-width: 295px;
          font-size: 13px;
          line-height: 1.44;
          font-weight: 800;
        }

        .pmp-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
        }

        .pmp-feature {
          min-height: 60px;
          display: grid;
          grid-template-columns: 30px 1fr;
          gap: 7px;
          align-items: start;
          padding: 9px 10px;
          border-radius: 12px;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .pmp-feature:hover,
        .pmp-side-panel:hover,
        .pmp-widget:hover {
          transform: translateY(-4px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 26px 72px rgba(100,70,255,.18);
        }

        .pmp-feature svg {
          color: var(--violet);
          filter: drop-shadow(0 0 9px rgba(100,49,243,.28));
        }

        .pmp-feature strong {
          display: block;
          font-size: 8.6px;
          line-height: 1.15;
          font-weight: 900;
        }

        .pmp-feature span {
          display: block;
          margin-top: 3px;
          font-size: 6.9px;
          line-height: 1.22;
          font-weight: 700;
        }

        .pmp-dashboard {
          min-height: 680px;
          display: grid;
          grid-template-columns: 152px 1fr;
          gap: 0;
          padding: 8px;
          border-radius: 28px;
          overflow: hidden;
        }

        .pmp-dash-sidebar {
          min-height: 664px;
          display: flex;
          flex-direction: column;
          padding: 18px 12px 12px;
          color: white;
          border-radius: 22px;
          background: linear-gradient(180deg, #111369 0%, #130f5e 48%, #080440 100%);
          box-shadow: inset 0 0 35px rgba(124,58,237,.28), 0 18px 48px rgba(15,10,76,.2);
        }

        .pmp-dash-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-size: 12px;
          font-weight: 900;
        }

        .pmp-dash-brand .pmp-ms-mark {
          width: 14px;
          height: 14px;
        }

        .pmp-dash-brand span {
          margin-left: auto;
          width: 12px;
          height: 2px;
          border-radius: 99px;
          background: rgba(255,255,255,.7);
          box-shadow: 0 5px 0 rgba(255,255,255,.7);
        }

        .pmp-dash-sidebar nav {
          display: grid;
          gap: 4px;
        }

        .pmp-menu-item {
          height: 28px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 10px;
          border-radius: 8px;
          color: rgba(255,255,255,.9);
          font-size: 9.2px;
          font-weight: 800;
        }

        .pmp-menu-item.active {
          background: linear-gradient(90deg, #5b24f5, #7c3aed);
          box-shadow: 0 12px 28px rgba(124,58,237,.28);
        }

        .pmp-profile {
          margin-top: auto;
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 8px;
          align-items: center;
          min-height: 58px;
          padding: 9px;
          border-radius: 12px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.16);
        }

        .pmp-profile > b {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #f472b6);
          font-size: 10px;
        }

        .pmp-profile strong,
        .pmp-profile span,
        .pmp-profile small {
          display: block;
        }

        .pmp-profile strong {
          font-size: 8.3px;
        }

        .pmp-profile span {
          margin-top: 2px;
          font-size: 6.8px;
          opacity: .8;
        }

        .pmp-profile small {
          margin-top: 3px;
          color: #34d399;
          font-size: 6.8px;
        }

        .pmp-dash-main {
          min-width: 0;
          padding: 18px;
        }

        .pmp-dash-top {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 14px;
        }

        .pmp-dash-top h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 900;
        }

        .pmp-dash-top p {
          margin: 5px 0 0;
          font-size: 11px;
          font-weight: 800;
        }

        .pmp-dash-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pmp-dash-actions button {
          height: 28px;
          border: 0;
          border-radius: 8px;
          padding: 0 10px;
          color: #0c0870;
          background: rgba(255,255,255,.7);
          font-size: 8.5px;
          font-weight: 900;
        }

        .pmp-dash-actions .new-project {
          color: white;
          background: linear-gradient(100deg, #5127f1, #7c3aed);
        }

        .pmp-dash-actions span {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          color: white;
          background: var(--app);
          font-size: 10px;
          font-weight: 900;
          box-shadow: 0 10px 22px rgba(100,70,255,.16);
        }

        .pmp-kpis {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 12px;
        }

        .pmp-kpi {
          position: relative;
          min-height: 92px;
          padding: 14px 12px 12px;
          border-radius: 12px;
          overflow: hidden;
        }

        .pmp-kpi span,
        .pmp-kpi strong,
        .pmp-kpi small {
          display: block;
        }

        .pmp-kpi span {
          font-size: 8.4px;
          font-weight: 900;
        }

        .pmp-kpi strong {
          margin-top: 8px;
          font-size: 22px;
          line-height: 1;
          font-weight: 900;
        }

        .pmp-kpi small {
          margin-top: 8px;
          color: #059669;
          font-size: 7px;
          font-weight: 900;
        }

        .pmp-kpi em {
          position: absolute;
          right: 10px;
          top: 35px;
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          font-style: normal;
        }

        .pmp-kpi > i {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 12px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--line), rgba(100,49,243,.18));
        }

        .pmp-dash-grid {
          display: grid;
          grid-template-columns: 1.85fr 1fr 1.25fr;
          gap: 12px;
        }

        .pmp-widget {
          min-height: 180px;
          padding: 13px;
          border-radius: 13px;
        }

        .pmp-widget h3 {
          margin: 0;
          font-size: 12px;
          font-weight: 900;
        }

        .pmp-widget-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 10px;
        }

        .pmp-widget-head a,
        .pmp-widget a {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #4e24e8;
          font-size: 8px;
          font-weight: 900;
          text-decoration: none;
        }

        .pmp-widget-head button {
          border: 1px solid rgba(100,49,243,.16);
          border-radius: 7px;
          padding: 4px 8px;
          color: #1d1478;
          background: rgba(255,255,255,.62);
          font-size: 7.5px;
          font-weight: 900;
        }

        .pmp-timeline {
          grid-row: span 2;
          min-height: 262px;
        }

        .pmp-months {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          margin: 14px 0 8px 120px;
          color: rgba(9,4,107,.58);
          font-size: 7px;
          font-weight: 900;
          text-align: center;
        }

        .pmp-gantt {
          display: grid;
          gap: 13px;
        }

        .pmp-gantt-row {
          display: grid;
          grid-template-columns: 116px 1fr;
          align-items: center;
          min-height: 25px;
        }

        .pmp-gantt-row strong,
        .pmp-gantt-row span {
          display: block;
        }

        .pmp-gantt-row strong {
          font-size: 7.6px;
          font-weight: 900;
        }

        .pmp-gantt-row span {
          margin-top: 2px;
          font-size: 6.5px;
          font-weight: 800;
          color: rgba(9,4,107,.66);
        }

        .pmp-gantt-row b {
          position: relative;
          display: block;
          height: 11px;
          border-radius: 999px;
          box-shadow: 0 8px 18px rgba(100,49,243,.18);
        }

        .pmp-gantt-row b::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 -12px;
          width: 1px;
          background: rgba(100,49,243,.16);
          box-shadow: 24px 0 rgba(100,49,243,.12), 48px 0 rgba(100,49,243,.12), 72px 0 rgba(100,49,243,.12), 96px 0 rgba(100,49,243,.12), 120px 0 rgba(100,49,243,.12), 144px 0 rgba(100,49,243,.12), 168px 0 rgba(100,49,243,.12), 192px 0 rgba(100,49,243,.12), 216px 0 rgba(100,49,243,.12);
        }

        .pmp-gantt-row b i {
          position: absolute;
          right: -28px;
          top: -1px;
          font-style: normal;
          font-size: 7px;
          font-weight: 900;
        }

        .pmp-legend {
          display: flex;
          gap: 16px;
          margin-top: 16px;
          font-size: 7.5px;
          font-weight: 900;
        }

        .pmp-legend span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pmp-legend i {
          width: 9px;
          height: 9px;
          border-radius: 3px;
          background: #6d28ff;
        }

        .legend-1 { background: #a855f7 !important; }
        .legend-2 { background: #f59e0b !important; }
        .legend-3 { background: #c4b5fd !important; }

        .pmp-donut-layout {
          display: grid;
          grid-template-columns: 102px 1fr;
          gap: 12px;
          align-items: center;
          margin: 12px 0 8px;
        }

        .pmp-donut {
          width: 96px;
          height: 96px;
          display: grid;
          place-items: center;
          align-content: center;
          border-radius: 50%;
          background:
            radial-gradient(circle, #fff 43%, transparent 45%),
            conic-gradient(#10b981 0 44%, #6d28ff 44% 77%, #f59e0b 77% 91%, #a78bfa 91% 100%);
        }

        .pmp-donut.budget {
          background:
            radial-gradient(circle, #fff 43%, transparent 45%),
            conic-gradient(#6d28ff 0 48%, #8b5cf6 48% 74%, #f59e0b 74% 89%, #a78bfa 89% 100%);
        }

        .pmp-donut strong,
        .pmp-donut span {
          display: block;
          text-align: center;
        }

        .pmp-donut strong {
          font-size: 18px;
          line-height: 1;
          font-weight: 900;
        }

        .pmp-donut span {
          margin-top: 4px;
          font-size: 7px;
          font-weight: 900;
        }

        .pmp-donut-legend {
          display: grid;
          gap: 8px;
          font-size: 7.4px;
          font-weight: 900;
        }

        .pmp-donut-legend span {
          display: grid;
          grid-template-columns: 8px 1fr auto;
          gap: 6px;
          align-items: center;
        }

        .pmp-donut-legend i {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .pmp-my-tasks {
          min-height: 262px;
        }

        .pmp-task-row {
          display: grid;
          grid-template-columns: 1fr 38px 48px;
          gap: 7px;
          align-items: center;
          min-height: 38px;
          border-bottom: 1px solid rgba(100,49,243,.08);
        }

        .pmp-task-row strong,
        .pmp-task-row span {
          display: block;
        }

        .pmp-task-row strong {
          font-size: 8.2px;
          line-height: 1.2;
          font-weight: 900;
        }

        .pmp-task-row span,
        .pmp-task-row small {
          margin-top: 3px;
          color: rgba(9,4,107,.62);
          font-size: 6.8px;
          font-weight: 800;
        }

        .pmp-task-row b {
          justify-self: end;
          padding: 5px 7px;
          border-radius: 999px;
          font-size: 7px;
        }

        .priority-high { color: #e11d48; background: rgba(244,63,94,.12); }
        .priority-medium { color: #d97706; background: rgba(245,158,11,.13); }
        .priority-low { color: #059669; background: rgba(16,185,129,.13); }

        .pmp-milestone-row {
          display: grid;
          grid-template-columns: 16px 1fr 34px;
          gap: 7px;
          align-items: center;
          min-height: 31px;
        }

        .pmp-milestone-row svg {
          color: #a78bfa;
        }

        .pmp-milestone-row svg.done {
          color: #10b981;
        }

        .pmp-milestone-row strong,
        .pmp-milestone-row span {
          display: block;
        }

        .pmp-milestone-row strong {
          font-size: 7.5px;
          font-weight: 900;
        }

        .pmp-milestone-row span,
        .pmp-milestone-row small {
          color: rgba(9,4,107,.62);
          font-size: 6.6px;
          font-weight: 800;
        }

        .pmp-resource-row {
          display: grid;
          grid-template-columns: 26px 1fr 68px 28px;
          gap: 8px;
          align-items: center;
          min-height: 34px;
        }

        .pmp-resource-row > b {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: white;
          font-size: 7px;
        }

        .pmp-resource-row strong,
        .pmp-resource-row span {
          display: block;
        }

        .pmp-resource-row strong {
          font-size: 7.5px;
          font-weight: 900;
        }

        .pmp-resource-row span,
        .pmp-resource-row small {
          color: rgba(9,4,107,.62);
          font-size: 6.5px;
          font-weight: 800;
        }

        .pmp-resource-row i {
          height: 5px;
          border-radius: 999px;
          background: rgba(100,49,243,.12);
        }

        .pmp-resource-row i span {
          height: 100%;
          display: block;
          border-radius: inherit;
          background: linear-gradient(90deg, #6d28ff, #8b5cf6);
        }

        .pmp-health {
          min-height: 212px;
        }

        .health-status {
          min-height: 42px;
          margin: 12px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 10px;
          color: #059669;
          background: rgba(16,185,129,.1);
          font-size: 13px;
          font-weight: 900;
        }

        .health-row {
          display: flex;
          justify-content: space-between;
          margin: 8px 0;
          font-size: 8px;
          font-weight: 900;
        }

        .health-row b {
          color: #059669;
        }

        .health-row b.risk {
          color: #d97706;
        }

        .health-gauge {
          width: 104px;
          height: 56px;
          margin: 12px auto 0;
          display: grid;
          place-items: end center;
          border-radius: 104px 104px 0 0;
          background:
            radial-gradient(circle at 50% 100%, #fff 0 39%, transparent 40%),
            conic-gradient(from 270deg, #6d28ff 0 148deg, #10b981 148deg 180deg, rgba(100,49,243,.12) 180deg 360deg);
        }

        .health-gauge strong {
          font-size: 19px;
          line-height: 1;
        }

        .health-gauge span {
          margin-bottom: -13px;
          font-size: 7px;
          font-weight: 900;
        }

        .pmp-app-blocks {
          position: absolute;
          left: 52px;
          bottom: 52px;
          width: 310px;
          height: 200px;
          pointer-events: none;
        }

        .app-block {
          position: absolute;
          display: grid;
          place-items: center;
        }

        .app-block span {
          position: relative;
          z-index: 2;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: white;
          font-size: 20px;
          font-weight: 900;
          box-shadow: 0 22px 36px rgba(100,49,243,.22);
          transform: perspective(500px) rotateX(8deg) rotateY(-16deg);
        }

        .app-block i {
          position: absolute;
          bottom: -23px;
          width: 96px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(255,255,255,.8), rgba(124,58,237,.28));
          box-shadow: 0 20px 34px rgba(100,49,243,.2);
          transform: perspective(500px) rotateX(64deg);
        }

        .app-block-0 { left: 68px; top: 28px; }
        .app-block-1 { left: 170px; top: 62px; }
        .app-block-2 { left: 248px; top: 80px; }
        .app-block-3 { left: 112px; top: 128px; }

        .pmp-bottom {
          display: grid;
          grid-template-columns: 570px 360px 330px;
          gap: 26px;
          align-items: end;
          margin: 10px 12px 0 250px;
        }

        .ecosystem {
          min-height: 78px;
          padding: 12px 18px;
          border-radius: 16px;
        }

        .ecosystem h3 {
          margin: 0 0 8px;
          text-align: center;
          font-size: 12px;
          font-weight: 900;
        }

        .ecosystem > div {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0;
        }

        .ecosystem span {
          min-height: 42px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 2px;
          border-left: 1px solid rgba(100,49,243,.16);
          text-align: center;
        }

        .ecosystem span:first-child {
          border-left: 0;
        }

        .ecosystem i {
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          color: white;
          background: var(--app);
          font-style: normal;
          font-size: 10px;
          font-weight: 900;
        }

        .ecosystem strong {
          font-size: 7.6px;
          font-weight: 900;
        }

        .ecosystem small {
          font-size: 6.4px;
          font-weight: 800;
        }

        .pmp-cta {
          min-height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 0 28px;
          border: 0;
          border-radius: 18px;
          color: white;
          background: linear-gradient(110deg, #3428e9 0%, #7c3aed 42%, #ed3f9d 82%);
          box-shadow: 0 24px 60px rgba(237,63,157,.28);
          cursor: pointer;
        }

        .pmp-cta strong,
        .pmp-cta small {
          display: block;
          text-align: left;
        }

        .pmp-cta strong {
          font-size: 24px;
          line-height: 1.08;
          font-weight: 900;
        }

        .pmp-cta small {
          margin-top: 7px;
          font-size: 12px;
          font-weight: 800;
        }

        .pmp-cta i {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255,255,255,.18);
          font-style: normal;
        }

        .pmp-contact {
          min-height: 84px;
          display: grid;
          grid-template-columns: 1fr 82px;
          gap: 14px;
          align-items: center;
          padding: 12px 14px;
          border-radius: 16px;
        }

        .pmp-contact div {
          display: grid;
          gap: 8px;
          font-size: 11px;
          font-weight: 900;
        }

        .pmp-contact span {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .pmp-contact b {
          width: 74px;
          height: 74px;
          border: 4px solid white;
          border-radius: 8px;
          background:
            repeating-linear-gradient(90deg, #120e50 0 5px, #fff 5px 10px),
            repeating-linear-gradient(0deg, rgba(0,0,0,.55) 0 5px, transparent 5px 10px);
          background-blend-mode: multiply;
          box-shadow: 0 10px 20px rgba(0,0,0,.12);
        }

        @media (max-width: 1320px) {
          .pmp-header,
          .pmp-main,
          .pmp-bottom {
            grid-template-columns: 1fr;
            margin-left: 0;
          }

          .pmp-stats {
            overflow-x: auto;
            grid-template-columns: repeat(7, 150px);
          }

          .pmp-dashboard {
            grid-template-columns: 140px 1fr;
          }

          .pmp-app-blocks {
            display: none;
          }
        }

        @media (max-width: 860px) {
          .pmp-page {
            padding: 16px 12px 22px;
          }

          .pmp-brand h2 {
            font-size: 24px;
          }

          .pmp-partners,
          .pmp-features,
          .pmp-kpis,
          .pmp-dash-grid,
          .ecosystem > div {
            grid-template-columns: 1fr;
          }

          .pmp-left h1 {
            font-size: 34px;
          }

          .pmp-dashboard {
            grid-template-columns: 1fr;
          }

          .pmp-dash-sidebar {
            min-height: auto;
          }

          .pmp-dash-sidebar nav {
            grid-template-columns: repeat(2, 1fr);
          }

          .pmp-dash-top {
            flex-direction: column;
          }

          .pmp-donut-layout,
          .pmp-contact {
            grid-template-columns: 1fr;
          }

          .pmp-months {
            display: none;
          }

          .pmp-gantt-row {
            grid-template-columns: 1fr;
            gap: 6px;
          }
        }
      `}</style>

      <div className="pmp-shell">
        <motion.header className="pmp-header" initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
          <div className="pmp-brand">
            <img src="/logo.png" alt="DesireInfoWeb Logo" />
            <div>
              <h2>DesireInfoWeb</h2>
              <p>Your Extended <span>Technology Partner</span></p>
            </div>
          </div>

          <div className="pmp-stats pmp-glass">
            {topStats.map(({ icon: Icon, value, label }) => (
              <div className="pmp-stat" key={label}>
                <Icon size={24} />
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pmp-partners">
            <div className="pmp-partner pmp-glass">
              <MicrosoftMark />
              <span>Microsoft<br />Solutions Partner</span>
            </div>
            <div className="pmp-partner pmp-glass">
              <M365Mark />
              <span>Built on<br />Microsoft 365</span>
            </div>
          </div>
        </motion.header>

        <div className="pmp-main">
          <motion.aside className="pmp-left" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.64 }} viewport={{ once: true }}>
            <h1>Project Management<br />Portal</h1>
            <h2>Plan. Track. <span>Collaborate. Deliver.</span></h2>
            <p>A unified Microsoft 365 powered workspace to manage projects, tasks, resources, documents and budgets all in one intelligent portal.</p>
            <div className="pmp-features">
              {features.map(({ icon: Icon, title, text }, index) => (
                <motion.div className="pmp-feature pmp-glass" key={title} custom={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  <Icon size={22} />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.aside>

          <DashboardMockup />
        </div>

        <AppBlocks />
        <BottomSections />
      </div>
    </section>
  );
}
