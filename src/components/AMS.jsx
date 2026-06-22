import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Database,
  FileCheck2,
  FileClock,
  FileSearch,
  FileText,
  FolderOpen,
  Gauge,
  Globe2,
  Home,
  Layers3,
  LockKeyhole,
  Mail,
  Menu,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  UserCog,
  UsersRound,
  Workflow,
} from 'lucide-react';

const topStats = [
  { icon: FileText, value: '128', label: 'Total Audits' },
  { icon: ClipboardCheck, value: '42', label: 'Audits in Progress' },
  { icon: Clock3, value: '18', label: 'Pending Actions' },
  { icon: Gauge, value: '96.5%', label: 'Completion Rate' },
  { icon: FileSearch, value: '248', label: 'Findings Identified' },
  { icon: AlertTriangle, value: '72', label: 'Overdue Tasks' },
  { icon: CalendarDays, value: '12', label: 'Upcoming Audits' },
  { icon: Award, value: '99.9%', label: 'System Uptime' },
];

const features = [
  { icon: ClipboardCheck, title: 'Audit Planning', text: 'Create risk-based audit plans' },
  { icon: UsersRound, title: 'Task Assignment', text: 'Assign tasks to audit teams' },
  { icon: FileSearch, title: 'Record Tracking', text: 'Track audit records and evidence' },
  { icon: BarChart3, title: 'Reporting', text: 'Generate insightful audit reports' },
  { icon: ShieldCheck, title: 'Corrective Actions', text: 'Manage CAPA and corrective actions' },
  { icon: Gauge, title: 'Real-time Dashboards', text: 'Monitor audit status in real-time' },
  { icon: Bell, title: 'Notifications', text: 'Automated alerts and reminders' },
  { icon: Workflow, title: 'Approval Workflows', text: 'Streamlined approval processes' },
  { icon: LockKeyhole, title: 'Role-Based Access', text: 'Secure access based on roles' },
  { icon: Database, title: 'Centralized Data', text: 'Unified and secure data management' },
];

const sidebarItems = [
  [Home, 'Dashboard'],
  [CalendarDays, 'Audit Planning'],
  [ClipboardCheck, 'Audits'],
  [FileClock, 'Tasks'],
  [FileSearch, 'Findings'],
  [ShieldCheck, 'Corrective Actions'],
  [BarChart3, 'Reports'],
  [FolderOpen, 'Documents'],
  [Workflow, 'Workflows'],
  [Bell, 'Notifications'],
  [UsersRound, 'Users'],
  [UserCog, 'Roles & Permissions'],
  [Settings, 'Settings'],
];

const dashboardMetrics = [
  { icon: FileText, title: 'Total Audits', value: '128', trend: '+15% vs last month', good: true, color: '#6d28d9' },
  { icon: Workflow, title: 'Audits in Progress', value: '42', trend: '+12% vs last month', good: true, color: '#8b5cf6' },
  { icon: FileClock, title: 'Pending Actions', value: '18', trend: '-8% vs last month', good: false, color: '#ef4444' },
  { icon: AlertTriangle, title: 'Overdue Tasks', value: '72', trend: '-5% vs last month', good: false, color: '#ec4899' },
];

const tasks = [
  ['Review Purchase Process', 'Internal Audit Q2 2024', 'High', 'Due: May 30'],
  ['Verify Access Controls', 'Information Security Audit', 'Medium', 'Due: May 28'],
  ['Test IT General Controls', 'ITGC Audit', 'High', 'Due: May 27'],
  ['Review Payroll Accuracy', 'HR & Payroll Audit', 'Low', 'Due: Jun 02'],
  ['Validate Asset Register', 'Fixed Asset Audit', 'Medium', 'Due: Jun 05'],
];

const actionMetrics = [
  ['Open', '24', '+10% vs last month', true],
  ['In Progress', '16', '+5% vs last month', true],
  ['Pending Approval', '8', '-3% vs last month', false],
  ['Closed', '56', '+12% vs last month', true],
];

const findings = [
  ['Critical', '12', '#ef4444'],
  ['High', '28', '#f97316'],
  ['Medium', '36', '#f59e0b'],
  ['Low', '24', '#2563eb'],
];

const reports = [
  ['Internal Audit Q1 2024 Report', 'Apr 25, 2024', 'PDF'],
  ['Information Security Audit Report', 'Apr 18, 2024', 'PDF'],
  ['Compliance Audit Report', 'Apr 10, 2024', 'DOCX'],
  ['Vendor Management Audit Report', 'Apr 05, 2024', 'PDF'],
];

const dataRows = [
  ['Documents', '12,458 Files'],
  ['Audit Evidence', '8,742 Records'],
  ['Workpapers', '5,316 Files'],
  ['Templates', '156 Templates'],
  ['Archive', '2.45 TB Used'],
];

const notifications = [
  ['Audit plan approved', 'Internal Audit Q2 2024', '2 min ago', ShieldCheck, '#10b981'],
  ['Task assigned', 'Review Inventory Controls', '15 min ago', Workflow, '#6d28d9'],
  ['Corrective action due', 'Access Control Review', '1 hour ago', AlertTriangle, '#ef4444'],
  ['Audit report published', 'Information Security Audit', '2 hours ago', FileCheck2, '#10b981'],
  ['New finding added', 'Vendor Management Audit', '3 hours ago', FileSearch, '#8b5cf6'],
  ['Approval pending', 'Corrective Action Plan', '4 hours ago', FileClock, '#f59e0b'],
];

const integrations = [
  ['SharePoint', 'Document Management', '#0f9f9a'],
  ['Teams', 'Collaboration', '#5b5bf0'],
  ['Power BI', 'Analytics & Reporting', '#f59e0b'],
  ['Outlook', 'Notifications', '#2563eb'],
  ['Power Automate', 'Workflow Automation', '#1b64f2'],
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.04, duration: 0.56, ease: [0.22, 1, 0.36, 1] },
  }),
};

function MicrosoftMark() {
  return (
    <span className="ams-ms-mark" aria-hidden="true">
      {['#f25022', '#7fba00', '#00a4ef', '#ffb900'].map((color) => <i key={color} style={{ backgroundColor: color }} />)}
    </span>
  );
}

function M365Mark() {
  return (
    <span className="ams-m365-mark" aria-hidden="true">
      <i />
    </span>
  );
}

function StatPill({ icon: Icon, value, label }) {
  return (
    <div className="ams-stat">
      <Icon size={22} aria-hidden="true" />
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text, index }) {
  return (
    <motion.div className="ams-feature ams-glass" variants={fadeUp} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <Icon size={18} aria-hidden="true" />
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </motion.div>
  );
}

function AuditIllustration() {
  return (
    <motion.div className="ams-audit-art" animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="ams-art-platform" />
      <div className="ams-audit-book">
        <span />
        <b>AUDIT</b>
      </div>
      <div className="ams-magnifier">
        <i />
        <b />
      </div>
    </motion.div>
  );
}

function SidebarItem({ icon: Icon, label, active, badge }) {
  return (
    <div className={`ams-menu-item ${active ? 'active' : ''}`}>
      <Icon size={13} aria-hidden="true" />
      <span>{label}</span>
      {badge && <b>{badge}</b>}
    </div>
  );
}

function DashboardSidebar() {
  return (
    <aside className="ams-dash-sidebar">
      <div className="ams-dash-brand">
        <Layers3 size={16} aria-hidden="true" />
        <strong>Audit System</strong>
        <Menu size={14} aria-hidden="true" />
      </div>

      <nav>
        {sidebarItems.map(([Icon, label], index) => (
          <SidebarItem key={label} icon={Icon} label={label} active={index === 0} badge={label === 'Notifications' ? '12' : null} />
        ))}
      </nav>

      <div className="ams-profile">
        <b>VK</b>
        <div>
          <strong>Vijay Karthik</strong>
          <span>Audit Manager</span>
          <small>Online</small>
        </div>
        <ChevronRight size={13} aria-hidden="true" />
      </div>
    </aside>
  );
}

function MetricCard({ icon: Icon, title, value, trend, good, color, index }) {
  return (
    <motion.section className="ams-metric ams-glass" variants={fadeUp} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <em style={{ color, backgroundColor: `${color}15` }}><Icon size={18} aria-hidden="true" /></em>
      <div>
        <span>{title}</span>
        <strong>{value}</strong>
        <small className={good ? 'good' : 'bad'}>{good ? <TrendingUp size={10} /> : <TrendingDown size={10} />} {trend}</small>
      </div>
    </motion.section>
  );
}

function DonutChart() {
  return (
    <section className="ams-widget ams-status ams-glass">
      <h3>Audit Status Overview</h3>
      <div className="ams-donut-layout">
        <div className="ams-donut">
          <strong>128</strong>
          <span>Total Audits</span>
        </div>
        <div className="ams-donut-legend">
          {[
            ['Completed', '76 (60%)', '#10b981'],
            ['In Progress', '42 (33%)', '#6d28d9'],
            ['Planned', '8 (6%)', '#c084fc'],
            ['On Hold', '2 (2%)', '#f59e0b'],
          ].map(([label, value, color]) => (
            <span key={label}><i style={{ background: color }} />{label}<b>{value}</b></span>
          ))}
        </div>
      </div>
    </section>
  );
}

function LineChart() {
  const points = '18,126 86,102 152,70 218,88 284,52 350,66 416,28 482,56 548,18 614,34 680,12 746,8';

  return (
    <section className="ams-widget ams-trend ams-glass">
      <div className="ams-widget-head">
        <h3>Audit Progress Trend</h3>
        <button type="button">This Year</button>
      </div>
      <svg viewBox="0 0 770 155" role="img" aria-label="Audit progress trend">
        <defs>
          <linearGradient id="amsArea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity=".28" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((row) => <line key={`h-${row}`} x1="0" x2="770" y1={18 + row * 28} y2={18 + row * 28} />)}
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
          <text key={month} x={18 + index * 68} y="12">{month}</text>
        ))}
        <polygon points={`18,140 ${points} 746,140`} fill="url(#amsArea)" />
        <polyline points={points} fill="none" />
        {points.split(' ').map((point) => {
          const [cx, cy] = point.split(',');
          return <circle key={point} cx={cx} cy={cy} r="5" />;
        })}
        <text x="702" y="24" className="ams-end-label">89%</text>
      </svg>
    </section>
  );
}

function TasksCard() {
  return (
    <section className="ams-widget ams-tasks ams-glass">
      <div className="ams-widget-head">
        <h3>My Tasks</h3>
        <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
      </div>
      {tasks.map(([task, audit, priority, due]) => (
        <div className="ams-task-row" key={task}>
          <FileClock size={14} aria-hidden="true" />
          <div>
            <strong>{task}</strong>
            <span>{audit}</span>
          </div>
          <b className={`priority-${priority.toLowerCase()}`}>{priority}</b>
          <small>{due}</small>
        </div>
      ))}
    </section>
  );
}

function WorkflowCard() {
  const steps = [
    ['Planning', 'Completed', CheckCircle2],
    ['Field Work', 'In Progress', FileSearch],
    ['Review', 'Pending', FileText],
    ['Approval', 'Pending', UserCog],
    ['Reporting', 'Pending', FileCheck2],
  ];

  return (
    <section className="ams-widget ams-workflow ams-glass">
      <h3>Audit Workflow</h3>
      <div className="ams-workflow-steps">
        {steps.map(([title, status, Icon], index) => (
          <div className={`ams-step ${index === 0 ? 'done' : index === 1 ? 'active' : ''}`} key={title}>
            <span><Icon size={15} aria-hidden="true" /></span>
            <strong>{title}</strong>
            <small>{status}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function CorrectiveActions() {
  return (
    <section className="ams-widget ams-actions-card ams-glass">
      <div className="ams-widget-head">
        <h3>Corrective Actions</h3>
        <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
      </div>
      <div className="ams-action-grid">
        {actionMetrics.map(([label, value, trend, good]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small className={good ? 'good' : 'bad'}>{trend}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function FindingsCard() {
  return (
    <section className="ams-widget ams-findings ams-glass">
      <div className="ams-widget-head">
        <h3>Audit Findings</h3>
        <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
      </div>
      {findings.map(([label, value, color]) => (
        <div className="ams-finding-row" key={label}>
          <AlertTriangle size={14} style={{ color }} aria-hidden="true" />
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
      <div className="ams-total-findings"><span>Total Findings</span><b>100</b></div>
    </section>
  );
}

function AuditReports() {
  return (
    <section className="ams-widget ams-reports ams-glass">
      <div className="ams-widget-head">
        <h3>Audit Reports</h3>
        <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
      </div>
      <div className="ams-report-layout">
        <div className="ams-report-art">
          <FileText size={48} aria-hidden="true" />
          <ShieldCheck size={18} aria-hidden="true" />
        </div>
        <div>
          {reports.map(([title, date, type]) => (
            <div className="ams-report-row" key={title}>
              <FileText size={14} aria-hidden="true" />
              <strong>{title}</strong>
              <span>{date}</span>
              <b>{type}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataManagement() {
  return (
    <section className="ams-widget ams-data ams-glass">
      <h3>Centralized Data Management</h3>
      <div className="ams-data-layout">
        <div>
          {dataRows.map(([label, value]) => (
            <div className="ams-data-row" key={label}>
              <FolderOpen size={14} aria-hidden="true" />
              <span>{label}</span>
              <b>{value}</b>
            </div>
          ))}
        </div>
        <div className="ams-data-art">
          <Database size={58} aria-hidden="true" />
          <ShieldCheck size={42} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <motion.section className="ams-dashboard ams-glass" initial={{ opacity: 0, scale: 0.97, y: 18 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.18 }}>
      <DashboardSidebar />
      <div className="ams-dash-main">
        <div className="ams-dash-top">
          <div>
            <h2>Welcome back, Vijay!</h2>
            <p>Here's what's happening with your audit activities today.</p>
          </div>
          <div className="ams-dash-actions">
            <button type="button" className="ghost"><CalendarDays size={13} aria-hidden="true" />View Calendar</button>
            <button type="button" className="primary">+ New Audit</button>
            <label><Search size={14} aria-hidden="true" /><input type="search" placeholder="Search audits, tasks, reports..." /></label>
            <button type="button" className="bell" aria-label="Notifications"><Bell size={15} aria-hidden="true" /><b>12</b></button>
          </div>
        </div>

        <div className="ams-metrics">
          {dashboardMetrics.map((metric, index) => <MetricCard key={metric.title} index={index} {...metric} />)}
        </div>

        <div className="ams-chart-grid">
          <DonutChart />
          <LineChart />
        </div>

        <div className="ams-ops-grid">
          <TasksCard />
          <div className="ams-work-stack">
            <WorkflowCard />
            <CorrectiveActions />
          </div>
          <FindingsCard />
        </div>

        <div className="ams-lower-grid">
          <AuditReports />
          <DataManagement />
        </div>
      </div>
    </motion.section>
  );
}

function RightWidgets() {
  return (
    <aside className="ams-right">
      <section className="ams-side-card ams-glass">
        <div className="ams-widget-head">
          <h3>Recent Notifications</h3>
          <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
        </div>
        {notifications.map(([title, sub, time, Icon, color]) => (
          <div className="ams-notification" key={title}>
            <em style={{ color, backgroundColor: `${color}16` }}><Icon size={14} aria-hidden="true" /></em>
            <div>
              <strong>{title}</strong>
              <span>{sub}</span>
            </div>
            <small>{time}</small>
          </div>
        ))}
      </section>

      <section className="ams-side-card ams-approval ams-glass">
        <div className="ams-widget-head">
          <h3>Approval Workflows</h3>
          <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
        </div>
        <div className="ams-approval-box"><span>Awaiting Your Approval</span><b>5</b></div>
        <div className="ams-approval-box"><span>Total Pending</span><b>12</b></div>
        <button type="button">Review & Approve</button>
      </section>

      <section className="ams-side-card ams-activity ams-glass">
        <div className="ams-widget-head">
          <h3>System Activity</h3>
          <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
        </div>
        <span>Last 7 Days Activity</span>
        <strong>2,458</strong>
        <small><TrendingUp size={11} aria-hidden="true" />10% vs previous 7 days</small>
        <div className="ams-week-chart" aria-hidden="true">
          {[24, 42, 58, 72, 52, 66, 84].map((height, index) => <i key={index} style={{ height: `${height}px` }} />)}
        </div>
        <div className="ams-days">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => <b key={day}>{day}</b>)}</div>
      </section>

      <div className="ams-mini-security" aria-hidden="true">
        <ShieldCheck size={58} />
      </div>
    </aside>
  );
}

function IntegrationItem({ title, subtitle, color }) {
  return (
    <span className="ams-integration">
      <i style={{ '--app': color }}>{title === 'Power BI' ? 'BI' : title[0]}</i>
      <strong>{title}</strong>
      <small>{subtitle}</small>
    </span>
  );
}

function QRPlaceholder() {
  return (
    <span className="ams-qr" aria-label="QR code placeholder">
      {Array.from({ length: 49 }, (_, index) => <i key={index} />)}
    </span>
  );
}

function BottomArea() {
  return (
    <motion.div className="ams-bottom-band" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.62 }} viewport={{ once: true }}>
      <div className="ams-integrations ams-glass">
        <h3>Seamlessly Integrated with Microsoft 365</h3>
        <div>
          {integrations.map(([title, subtitle, color]) => <IntegrationItem key={title} title={title} subtitle={subtitle} color={color} />)}
        </div>
      </div>

      <button type="button" className="ams-cta">
        <span>Strengthen Compliance.<br />Enhance Transparency.<br />Drive Excellence.</span>
        <ShieldCheck size={58} aria-hidden="true" />
      </button>

      <div className="ams-contact ams-glass">
        <div>
          <span><Globe2 size={16} aria-hidden="true" />www.desireinfoweb.com</span>
          <span><Mail size={16} aria-hidden="true" />vijay@desireinfoweb.com</span>
          <span><Phone size={16} aria-hidden="true" />+91-8780468807</span>
        </div>
        <QRPlaceholder />
      </div>
    </motion.div>
  );
}

export default function AMS() {
  return (
    <section className="ams-page" id="audit-management-system">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@500;600;700;800;900&display=swap');

        .ams-page,
        .ams-page * {
          box-sizing: border-box;
        }

        .ams-page {
          --ink: #111066;
          --muted: #68659b;
          --blue: #1b22c8;
          --violet: #6d28d9;
          --purple: #7c3aed;
          --pink: #ec4899;
          --green: #10b981;
          --red: #ef4444;
          --orange: #f59e0b;
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
            radial-gradient(circle at 88% 80%, rgba(59,130,246,.12), transparent 28%),
            linear-gradient(135deg, #fbfaff 0%, #f7f2ff 48%, #fff7fd 100%);
        }

        .ams-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(109,40,217,.04) 1px, transparent 1px),
            linear-gradient(0deg, rgba(109,40,217,.035) 1px, transparent 1px),
            linear-gradient(120deg, transparent 0 18%, rgba(236,72,153,.07) 18.1% 18.3%, transparent 18.7%);
          background-size: 74px 74px, 74px 74px, 100% 100%;
          pointer-events: none;
        }

        .ams-page::after {
          content: "";
          position: absolute;
          left: -5%;
          right: -5%;
          bottom: -145px;
          height: 430px;
          z-index: -1;
          opacity: .76;
          background:
            linear-gradient(88deg, rgba(109,40,217,.14), transparent 35%),
            radial-gradient(ellipse at 50% 0%, rgba(124,58,237,.26), transparent 65%);
          transform: perspective(820px) rotateX(58deg);
        }

        .ams-shell {
          position: relative;
          z-index: 1;
          width: min(100%, 1800px);
          margin: 0 auto;
        }

        .ams-glass {
          background: linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.5));
          border: 1px solid rgba(255,255,255,.72);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 22px 60px rgba(109,40,217,.14),
            0 0 0 1px rgba(130,94,255,.12);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .ams-header {
          display: grid;
          grid-template-columns: 285px minmax(0, 1fr) 300px;
          gap: 14px;
          align-items: center;
          margin-bottom: 14px;
        }

        .ams-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .ams-brand img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          filter: drop-shadow(0 16px 26px rgba(109,40,217,.18));
        }

        .ams-brand h2 {
          margin: 0;
          font-family: "Poppins", sans-serif;
          font-size: 27px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0;
        }

        .ams-brand p {
          margin: 4px 0 0;
          color: var(--ink);
          font-size: 10.5px;
          line-height: 1.05;
          font-weight: 800;
        }

        .ams-brand p span {
          color: var(--pink);
        }

        .ams-stats {
          min-height: 60px;
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          align-items: center;
          border-radius: 23px;
          padding: 8px 12px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.9), rgba(246,240,255,.74)),
            linear-gradient(90deg, rgba(255,255,255,.82), rgba(225,213,255,.46));
          border-color: rgba(126,88,255,.38);
        }

        .ams-stat {
          display: grid;
          grid-template-columns: 26px minmax(0, 1fr);
          gap: 7px;
          align-items: center;
          min-height: 40px;
          padding: 0 7px;
          border-left: 1px solid rgba(109,40,217,.16);
        }

        .ams-stat:first-child {
          border-left: 0;
        }

        .ams-stat svg {
          color: var(--violet);
          stroke-width: 2.1;
          filter: drop-shadow(0 0 6px rgba(109,40,217,.22));
        }

        .ams-stat strong {
          display: block;
          color: #08006f;
          font-size: clamp(14px, .92vw, 18px);
          line-height: .95;
          font-weight: 900;
          white-space: nowrap;
        }

        .ams-stat span {
          display: block;
          margin-top: 4px;
          max-width: 74px;
          color: #140b71;
          font-size: 6.4px;
          line-height: 1.05;
          font-weight: 800;
        }

        .ams-partners {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
        }

        .ams-partner {
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          border-radius: 18px;
          padding: 8px 11px;
        }

        .ams-partner span:last-child {
          color: #111827;
          font-size: 11.5px;
          line-height: 1.05;
          font-weight: 900;
        }

        .ams-ms-mark {
          width: 29px;
          height: 29px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3px;
          flex: 0 0 auto;
        }

        .ams-ms-mark i {
          border-radius: 1px;
        }

        .ams-m365-mark {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: conic-gradient(from 35deg, #1b22c8, #7c3aed, #38bdf8, #1b22c8);
          box-shadow: 0 12px 28px rgba(37,99,235,.22);
        }

        .ams-m365-mark i {
          width: 21px;
          height: 21px;
          border-radius: 9px;
          background: rgba(255,255,255,.72);
          transform: rotate(45deg);
        }

        .ams-main {
          display: grid;
          grid-template-columns: 300px minmax(0, 1fr) 220px;
          gap: 14px;
          align-items: start;
        }

        .ams-left h1 {
          margin: 15px 0 9px;
          color: #111066;
          font-family: "Poppins", sans-serif;
          font-size: clamp(37px, 2.72vw, 54px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0;
        }

        .ams-left h1 span {
          display: block;
          background: linear-gradient(105deg, #111066 0%, #1b22c8 38%, #ec4899 88%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ams-left h2 {
          max-width: 285px;
          margin: 0 0 13px;
          color: #111066;
          font-size: 21px;
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: 0;
        }

        .ams-left p {
          max-width: 286px;
          margin: 0 0 16px;
          color: #12106f;
          font-size: 12.5px;
          line-height: 1.43;
          font-weight: 700;
        }

        .ams-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 14px;
        }

        .ams-feature {
          min-height: 67px;
          display: grid;
          grid-template-columns: 20px 1fr;
          gap: 7px;
          align-items: start;
          padding: 9px 8px;
          border-radius: 13px;
        }

        .ams-feature svg {
          color: var(--violet);
          stroke-width: 2.15;
        }

        .ams-feature strong,
        .ams-feature span {
          display: block;
        }

        .ams-feature strong {
          color: #09046b;
          font-size: 7.8px;
          line-height: 1.12;
          font-weight: 900;
        }

        .ams-feature span {
          margin-top: 4px;
          color: #2f2b79;
          font-size: 5.8px;
          line-height: 1.25;
          font-weight: 800;
        }

        .ams-audit-art {
          position: relative;
          width: 286px;
          height: 245px;
          margin: 18px 0 0 5px;
        }

        .ams-art-platform {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 0;
          height: 70px;
          border-radius: 30px;
          background: linear-gradient(135deg, rgba(255,255,255,.86), rgba(109,40,217,.34));
          box-shadow: 0 26px 50px rgba(109,40,217,.26), inset 0 2px 0 rgba(255,255,255,.8);
          transform: perspective(620px) rotateX(58deg);
        }

        .ams-audit-book {
          position: absolute;
          left: 54px;
          bottom: 56px;
          width: 132px;
          height: 132px;
          border-radius: 18px 10px 10px 18px;
          background: linear-gradient(145deg, #2f27d9, #9f5cff);
          box-shadow: 0 26px 42px rgba(109,40,217,.3), inset 12px 0 18px rgba(255,255,255,.14);
          transform: perspective(520px) rotateY(-12deg);
        }

        .ams-audit-book span {
          position: absolute;
          left: 14px;
          top: 25px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fbbf24;
          box-shadow: 0 42px 0 #fbbf24;
        }

        .ams-audit-book b {
          position: absolute;
          left: 35px;
          top: 53px;
          color: white;
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 0;
        }

        .ams-magnifier {
          position: absolute;
          right: 26px;
          bottom: 48px;
          width: 118px;
          height: 118px;
        }

        .ams-magnifier i {
          position: absolute;
          left: 0;
          top: 0;
          width: 86px;
          height: 86px;
          border: 10px solid rgba(255,255,255,.78);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 28%, rgba(255,255,255,.88), rgba(124,58,237,.28));
          box-shadow: 0 20px 38px rgba(109,40,217,.24), inset 0 0 18px rgba(255,255,255,.7);
        }

        .ams-magnifier b {
          position: absolute;
          right: 15px;
          bottom: 17px;
          width: 58px;
          height: 13px;
          border-radius: 999px;
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          transform: rotate(45deg);
          box-shadow: 0 14px 22px rgba(109,40,217,.25);
        }

        .ams-dashboard {
          display: grid;
          grid-template-columns: 160px minmax(0, 1fr);
          min-height: 735px;
          overflow: hidden;
          border-radius: 28px;
        }

        .ams-dash-sidebar {
          display: flex;
          flex-direction: column;
          min-height: 735px;
          padding: 17px 10px 12px;
          color: white;
          background: linear-gradient(180deg, #27109a 0%, #17065f 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.16), 16px 0 44px rgba(42,16,120,.18);
        }

        .ams-dash-brand {
          display: grid;
          grid-template-columns: 17px 1fr 14px;
          gap: 7px;
          align-items: center;
          margin-bottom: 18px;
          font-size: 12px;
          font-weight: 900;
        }

        .ams-dash-sidebar nav {
          display: grid;
          gap: 4px;
        }

        .ams-menu-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 7px;
          min-height: 28px;
          padding: 0 9px;
          border-radius: 9px;
          color: rgba(255,255,255,.9);
          font-size: 8px;
          font-weight: 800;
        }

        .ams-menu-item.active {
          color: white;
          background: linear-gradient(90deg, #6d28d9, #c026d3);
          box-shadow: 0 12px 24px rgba(0,0,0,.18);
        }

        .ams-menu-item b {
          margin-left: auto;
          min-width: 16px;
          height: 16px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          color: white;
          background: #ec4899;
          font-size: 7px;
        }

        .ams-profile {
          display: grid;
          grid-template-columns: 31px 1fr 13px;
          gap: 8px;
          align-items: center;
          margin-top: auto;
          min-height: 60px;
          padding: 8px;
          border-radius: 14px;
          background: rgba(255,255,255,.08);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
        }

        .ams-profile > b {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #27109a;
          background: #fff;
          font-size: 9px;
        }

        .ams-profile strong,
        .ams-profile span,
        .ams-profile small {
          display: block;
        }

        .ams-profile strong {
          font-size: 8px;
          font-weight: 900;
        }

        .ams-profile span {
          margin-top: 2px;
          color: rgba(255,255,255,.72);
          font-size: 6.8px;
          font-weight: 800;
        }

        .ams-profile small {
          margin-top: 3px;
          color: #4ade80;
          font-size: 6.5px;
          font-weight: 900;
        }

        .ams-dash-main {
          min-width: 0;
          padding: 16px 14px 15px;
        }

        .ams-dash-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 13px;
          margin-bottom: 13px;
        }

        .ams-dash-top h2 {
          margin: 0;
          font-size: 17px;
          line-height: 1;
          font-weight: 900;
        }

        .ams-dash-top p {
          margin: 5px 0 0;
          color: #252174;
          font-size: 8.5px;
          font-weight: 800;
        }

        .ams-dash-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ams-dash-actions button,
        .ams-dash-actions label {
          height: 34px;
          border-radius: 9px;
        }

        .ams-dash-actions button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border: 0;
          padding: 0 12px;
          font-size: 8px;
          font-weight: 900;
          cursor: pointer;
        }

        .ams-dash-actions .ghost {
          color: #4e24e8;
          background: rgba(255,255,255,.68);
          border: 1px solid rgba(109,40,217,.22);
        }

        .ams-dash-actions .primary {
          color: white;
          background: linear-gradient(100deg, #5127f1, #a855f7);
          box-shadow: 0 14px 24px rgba(109,40,217,.22);
        }

        .ams-dash-actions label {
          width: 260px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 11px;
          border: 1px solid rgba(109,40,217,.14);
          background: rgba(255,255,255,.62);
        }

        .ams-dash-actions input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #1f1a70;
          font-size: 8px;
          font-weight: 800;
        }

        .ams-dash-actions .bell {
          position: relative;
          width: 34px;
          padding: 0;
          color: #1b1480;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(109,40,217,.14);
        }

        .ams-dash-actions .bell b {
          position: absolute;
          top: -5px;
          right: -3px;
          min-width: 16px;
          height: 16px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          color: white;
          background: #ef1748;
          font-size: 7px;
        }

        .ams-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 11px;
        }

        .ams-metric {
          position: relative;
          min-height: 78px;
          display: grid;
          grid-template-columns: 35px 1fr;
          gap: 10px;
          align-items: center;
          padding: 12px;
          border-radius: 13px;
          overflow: hidden;
        }

        .ams-metric em {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-style: normal;
        }

        .ams-metric span,
        .ams-metric strong,
        .ams-metric small {
          display: block;
        }

        .ams-metric span {
          font-size: 7.5px;
          font-weight: 900;
        }

        .ams-metric strong {
          margin-top: 5px;
          font-size: 22px;
          line-height: 1;
          font-weight: 900;
        }

        .ams-metric small {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-top: 7px;
          font-size: 6.8px;
          font-weight: 900;
        }

        .good { color: #059669 !important; }
        .bad { color: #ef4444 !important; }

        .ams-metric .ams-progress {
          position: absolute;
          left: 52px;
          right: 14px;
          bottom: 10px;
          height: 4px;
        }

        .ams-widget {
          position: relative;
          min-height: 154px;
          padding: 13px;
          border-radius: 14px;
          overflow: hidden;
        }

        .ams-widget h3,
        .ams-side-card h3 {
          margin: 0;
          font-size: 10px;
          line-height: 1.1;
          font-weight: 900;
        }

        .ams-widget-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 10px;
        }

        .ams-widget-head a {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          color: #4e24e8;
          font-size: 7px;
          font-weight: 900;
          text-decoration: none;
        }

        .ams-widget-head button {
          min-height: 23px;
          border: 1px solid rgba(109,40,217,.18);
          border-radius: 7px;
          padding: 0 9px;
          color: #4e24e8;
          background: rgba(255,255,255,.72);
          font-size: 7px;
          font-weight: 900;
        }

        .ams-progress {
          display: block;
          height: 5px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(109,40,217,.12);
        }

        .ams-progress i {
          display: block;
          height: 100%;
          border-radius: inherit;
          box-shadow: 0 8px 16px rgba(109,40,217,.18);
        }

        .ams-chart-grid {
          display: grid;
          grid-template-columns: 1.05fr 2fr;
          gap: 10px;
          margin-bottom: 10px;
        }

        .ams-donut-layout {
          display: grid;
          grid-template-columns: 94px 1fr;
          gap: 13px;
          align-items: center;
          margin-top: 13px;
        }

        .ams-donut {
          width: 91px;
          height: 91px;
          display: grid;
          place-items: center;
          align-content: center;
          border-radius: 50%;
          background:
            radial-gradient(circle, #fff 0 47%, transparent 48%),
            conic-gradient(#10b981 0 60%, #6d28d9 60% 93%, #c084fc 93% 98%, #f59e0b 98% 100%);
          box-shadow: 0 14px 28px rgba(109,40,217,.18);
        }

        .ams-donut strong {
          font-size: 22px;
          line-height: 1;
          font-weight: 900;
        }

        .ams-donut span {
          margin-top: 2px;
          font-size: 6.5px;
          font-weight: 800;
        }

        .ams-donut-legend {
          display: grid;
          gap: 8px;
        }

        .ams-donut-legend span {
          display: grid;
          grid-template-columns: 8px 1fr auto;
          gap: 7px;
          align-items: center;
          color: #342f88;
          font-size: 7px;
          font-weight: 900;
        }

        .ams-donut-legend i {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .ams-trend svg {
          display: block;
          width: 100%;
          height: 126px;
          overflow: visible;
        }

        .ams-trend line {
          stroke: rgba(109,40,217,.13);
          stroke-width: 1;
        }

        .ams-trend text {
          fill: #5c5a8a;
          font-size: 9px;
          font-weight: 800;
        }

        .ams-trend polyline {
          stroke: #6d28d9;
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 8px 12px rgba(109,40,217,.18));
        }

        .ams-trend circle {
          fill: #6d28d9;
          stroke: white;
          stroke-width: 3;
        }

        .ams-trend .ams-end-label {
          fill: #6d28d9;
          font-size: 13px;
          font-weight: 900;
        }

        .ams-area-row {
          display: grid;
          grid-template-columns: 1fr 94px 30px;
          gap: 8px;
          align-items: center;
          min-height: 24px;
        }

        .ams-area-row span {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
          color: #111066;
          font-size: 7.2px;
          font-weight: 900;
        }

        .ams-area-row svg {
          color: #6d28d9;
          flex: 0 0 auto;
        }

        .ams-area-row b {
          text-align: right;
          font-size: 7px;
          font-weight: 900;
        }

        .ams-ops-grid {
          display: grid;
          grid-template-columns: 1.15fr 1.6fr .9fr;
          gap: 10px;
          margin-bottom: 10px;
        }

        .ams-work-stack {
          display: grid;
          gap: 10px;
        }

        .ams-task-row {
          display: grid;
          grid-template-columns: 18px 1fr 43px 52px;
          gap: 7px;
          align-items: center;
          min-height: 31px;
          border-bottom: 1px solid rgba(109,40,217,.07);
        }

        .ams-task-row svg {
          color: #6d28d9;
        }

        .ams-task-row strong,
        .ams-task-row span,
        .ams-task-row small {
          display: block;
        }

        .ams-task-row strong {
          font-size: 7px;
          line-height: 1.1;
          font-weight: 900;
        }

        .ams-task-row span,
        .ams-task-row small {
          margin-top: 3px;
          color: #68659b;
          font-size: 6.1px;
          font-weight: 800;
        }

        .ams-task-row b {
          justify-self: end;
          padding: 4px 6px;
          border-radius: 999px;
          font-size: 6px;
          font-weight: 900;
        }

        .priority-high { color: #e11d48; background: rgba(244,63,94,.12); }
        .priority-medium { color: #d97706; background: rgba(245,158,11,.13); }
        .priority-low { color: #059669; background: rgba(16,185,129,.13); }

        .ams-workflow {
          min-height: 86px;
        }

        .ams-workflow-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 4px;
          margin-top: 14px;
        }

        .ams-step {
          position: relative;
          display: grid;
          place-items: center;
          gap: 3px;
          text-align: center;
        }

        .ams-step:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 15px;
          left: calc(50% + 18px);
          width: calc(100% - 22px);
          height: 2px;
          background: linear-gradient(90deg, #6d28d9, rgba(109,40,217,.18));
        }

        .ams-step span {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #6d28d9;
          background: rgba(109,40,217,.12);
        }

        .ams-step.done span {
          color: white;
          background: #10b981;
        }

        .ams-step.active span {
          color: white;
          background: #6d28d9;
        }

        .ams-step strong {
          font-size: 6.4px;
          font-weight: 900;
        }

        .ams-step small {
          color: #68659b;
          font-size: 5.8px;
          font-weight: 800;
        }

        .ams-actions-card {
          min-height: 82px;
        }

        .ams-action-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
        }

        .ams-action-grid div {
          min-height: 54px;
          padding: 7px;
          border-radius: 10px;
          background: rgba(255,255,255,.48);
        }

        .ams-action-grid span,
        .ams-action-grid strong,
        .ams-action-grid small {
          display: block;
        }

        .ams-action-grid span {
          color: #111066;
          font-size: 6.5px;
          font-weight: 900;
        }

        .ams-action-grid strong {
          margin-top: 6px;
          font-size: 18px;
          line-height: 1;
          font-weight: 900;
        }

        .ams-action-grid small {
          margin-top: 5px;
          font-size: 5.8px;
          font-weight: 900;
        }

        .ams-finding-row {
          display: grid;
          grid-template-columns: 18px 1fr auto;
          gap: 8px;
          align-items: center;
          min-height: 30px;
          font-size: 8px;
          font-weight: 900;
        }

        .ams-finding-row strong {
          font-size: 16px;
        }

        .ams-total-findings {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          padding-top: 10px;
          border-top: 1px solid rgba(109,40,217,.08);
          font-size: 9px;
          font-weight: 900;
        }

        .ams-upcoming-row {
          display: grid;
          grid-template-columns: 18px 1fr 52px;
          gap: 8px;
          align-items: center;
          min-height: 29px;
          border-bottom: 1px solid rgba(109,40,217,.07);
        }

        .ams-upcoming-row svg {
          color: #6d28d9;
        }

        .ams-upcoming-row span,
        .ams-upcoming-row small {
          font-size: 7px;
          font-weight: 900;
        }

        .ams-upcoming-row small {
          color: #68659b;
          font-size: 6px;
          font-weight: 800;
          text-align: right;
        }

        .ams-lower-grid {
          display: grid;
          grid-template-columns: 1.15fr 1.45fr;
          gap: 10px;
        }

        .ams-reports,
        .ams-access,
        .ams-data {
          min-height: 137px;
        }

        .ams-report-layout {
          display: grid;
          grid-template-columns: 92px 1fr;
          gap: 11px;
          align-items: center;
        }

        .ams-report-art {
          position: relative;
          width: 74px;
          height: 88px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          color: #6d28d9;
          background: linear-gradient(160deg, rgba(255,255,255,.9), rgba(124,58,237,.18));
          box-shadow: 0 18px 30px rgba(109,40,217,.16);
        }

        .ams-report-art svg:last-child {
          position: absolute;
          right: 7px;
          bottom: 8px;
        }

        .ams-report-row {
          display: grid;
          grid-template-columns: 16px 1fr 54px 27px;
          gap: 7px;
          align-items: center;
          min-height: 22px;
        }

        .ams-report-row svg {
          color: #6d28d9;
        }

        .ams-report-row strong,
        .ams-report-row span,
        .ams-report-row b {
          font-size: 6.8px;
          font-weight: 900;
        }

        .ams-report-row span {
          color: #68659b;
          font-size: 6px;
        }

        .ams-report-row b {
          color: #f97316;
          text-align: right;
        }

        .ams-access-layout,
        .ams-data-layout {
          display: grid;
          grid-template-columns: 1fr 112px;
          gap: 10px;
          align-items: center;
          margin-top: 10px;
        }

        .ams-access-layout div:first-child,
        .ams-data-layout div:first-child {
          display: grid;
          gap: 7px;
        }

        .ams-access-layout span {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #111066;
          font-size: 7.3px;
          font-weight: 900;
        }

        .ams-access-layout span svg,
        .ams-data-row svg {
          color: #6d28d9;
        }

        .ams-shield-art,
        .ams-data-art {
          position: relative;
          height: 92px;
          display: grid;
          place-items: center;
          color: #6d28d9;
          border-radius: 16px;
          background: linear-gradient(150deg, rgba(255,255,255,.82), rgba(124,58,237,.2));
        }

        .ams-shield-art svg:last-child {
          position: absolute;
          right: 12px;
          bottom: 11px;
          color: #2f1b9b;
        }

        .ams-data-row {
          display: grid;
          grid-template-columns: 18px 1fr auto;
          gap: 7px;
          align-items: center;
          min-height: 20px;
        }

        .ams-data-row span,
        .ams-data-row b {
          font-size: 7px;
          font-weight: 900;
        }

        .ams-data-row b {
          color: #68659b;
          font-size: 6.4px;
        }

        .ams-data-art svg:last-child {
          position: absolute;
          right: 18px;
          bottom: 17px;
          color: #1b22c8;
        }

        .ams-right {
          display: grid;
          gap: 14px;
        }

        .ams-side-card {
          min-height: 178px;
          padding: 16px 14px;
          border-radius: 20px;
          overflow: hidden;
        }

        .ams-notification {
          display: grid;
          grid-template-columns: 26px 1fr 45px;
          gap: 8px;
          align-items: center;
          min-height: 38px;
          border-bottom: 1px solid rgba(109,40,217,.08);
        }

        .ams-notification em {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          font-style: normal;
        }

        .ams-notification strong,
        .ams-notification span,
        .ams-notification small {
          display: block;
        }

        .ams-notification strong {
          font-size: 7px;
          line-height: 1.12;
          font-weight: 900;
        }

        .ams-notification span,
        .ams-notification small {
          margin-top: 4px;
          color: #68659b;
          font-size: 6px;
          font-weight: 800;
        }

        .ams-notification small {
          text-align: right;
        }

        .ams-approval {
          min-height: 154px;
        }

        .ams-approval-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 36px;
          margin-bottom: 8px;
          padding: 0 12px;
          border-radius: 10px;
          background: rgba(255,255,255,.58);
          font-size: 8px;
          font-weight: 900;
        }

        .ams-approval-box b {
          font-size: 16px;
        }

        .ams-approval button {
          width: 100%;
          height: 36px;
          margin-top: 8px;
          border: 0;
          border-radius: 10px;
          color: white;
          background: linear-gradient(100deg, #c026d3, #fb5b99);
          box-shadow: 0 16px 26px rgba(236,72,153,.24);
          font-size: 9px;
          font-weight: 900;
        }

        .ams-activity {
          min-height: 210px;
        }

        .ams-activity > span,
        .ams-activity > strong,
        .ams-activity > small {
          display: block;
        }

        .ams-activity > span {
          color: #68659b;
          font-size: 8px;
          font-weight: 900;
        }

        .ams-activity > strong {
          margin-top: 7px;
          font-size: 28px;
          line-height: 1;
          font-weight: 900;
        }

        .ams-activity > small {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 7px;
          color: #059669;
          font-size: 8px;
          font-weight: 900;
        }

        .ams-week-chart {
          height: 92px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 7px;
          margin-top: 17px;
        }

        .ams-week-chart i {
          width: 12px;
          border-radius: 5px 5px 2px 2px;
          background: linear-gradient(180deg, #a855f7, #6d28d9);
          box-shadow: 0 10px 16px rgba(109,40,217,.18);
        }

        .ams-days {
          display: flex;
          justify-content: space-between;
          margin-top: 7px;
        }

        .ams-days b {
          color: #68659b;
          font-size: 6px;
          font-weight: 800;
        }

        .ams-mini-security {
          min-height: 120px;
          display: grid;
          place-items: center;
          color: white;
          border-radius: 28px;
          background:
            radial-gradient(circle at 50% 12%, rgba(255,255,255,.55), transparent 32%),
            linear-gradient(145deg, #2f27d9, #9f5cff);
          box-shadow: 0 24px 48px rgba(109,40,217,.28);
          transform: perspective(620px) rotateX(8deg);
        }

        .ams-bottom-band {
          display: grid;
          grid-template-columns: 560px 350px 330px;
          gap: 20px;
          align-items: end;
          margin: 16px 0 0 150px;
        }

        .ams-integrations {
          min-height: 90px;
          padding: 13px 18px 12px;
          border-radius: 17px;
        }

        .ams-integrations h3 {
          margin: 0 0 10px;
          text-align: center;
          font-size: 12px;
          font-weight: 900;
        }

        .ams-integrations > div {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }

        .ams-integration {
          display: grid;
          place-items: center;
          align-content: center;
          gap: 2px;
          min-height: 45px;
          border-left: 1px solid rgba(109,40,217,.14);
          text-align: center;
        }

        .ams-integration:first-child {
          border-left: 0;
        }

        .ams-integration i {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          color: white;
          background: var(--app);
          font-size: 9px;
          font-style: normal;
          font-weight: 900;
        }

        .ams-integration strong {
          font-size: 7.4px;
          font-weight: 900;
        }

        .ams-integration small {
          color: #68659b;
          font-size: 6px;
          font-weight: 800;
        }

        .ams-cta {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border: 0;
          border-radius: 18px;
          padding: 0 26px;
          color: white;
          background: linear-gradient(110deg, #3328e7 0%, #7c3aed 42%, #ec4899 84%);
          box-shadow: 0 24px 60px rgba(236,72,153,.28);
          cursor: pointer;
        }

        .ams-cta span {
          text-align: left;
          font-size: 20px;
          line-height: 1.18;
          font-weight: 900;
        }

        .ams-contact {
          min-height: 92px;
          display: grid;
          grid-template-columns: 1fr 78px;
          gap: 13px;
          align-items: center;
          padding: 12px 14px;
          border-radius: 17px;
        }

        .ams-contact div {
          display: grid;
          gap: 8px;
        }

        .ams-contact span {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #12106f;
          font-size: 11px;
          font-weight: 900;
        }

        .ams-contact svg {
          color: #6d28d9;
        }

        .ams-qr {
          width: 74px;
          height: 74px;
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 3px;
          padding: 6px;
          border: 4px solid white;
          border-radius: 8px;
          background: white;
          box-shadow: 0 10px 20px rgba(0,0,0,.12);
        }

        .ams-qr i {
          border-radius: 1px;
          background: #111066;
        }

        .ams-qr i:nth-child(2n),
        .ams-qr i:nth-child(5n),
        .ams-qr i:nth-child(11n) {
          background: transparent;
        }

        @media (max-width: 1420px) {
          .ams-header,
          .ams-main,
          .ams-bottom-band {
            grid-template-columns: 1fr;
            margin-left: 0;
          }

          .ams-stats {
            overflow-x: auto;
            grid-template-columns: repeat(8, 150px);
          }

          .ams-partners {
            max-width: 520px;
          }

          .ams-left {
            display: grid;
            grid-template-columns: minmax(280px, 360px) 1fr;
            gap: 20px;
            align-items: start;
          }

          .ams-audit-art {
            display: none;
          }

          .ams-right {
            grid-template-columns: repeat(3, 1fr);
          }

          .ams-bottom-band {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 1080px) {
          .ams-dashboard,
          .ams-dash-top,
          .ams-left,
          .ams-bottom-band,
          .ams-contact {
            grid-template-columns: 1fr;
          }

          .ams-dash-sidebar {
            min-height: auto;
          }

          .ams-dash-sidebar nav {
            grid-template-columns: repeat(3, 1fr);
          }

          .ams-profile {
            display: none;
          }

          .ams-dash-top {
            display: grid;
          }

          .ams-dash-actions {
            flex-wrap: wrap;
          }

          .ams-dash-actions label {
            flex: 1 1 260px;
          }

          .ams-metrics,
          .ams-chart-grid,
          .ams-ops-grid,
          .ams-lower-grid,
          .ams-right {
            grid-template-columns: 1fr 1fr;
          }

          .ams-integrations > div {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 700px) {
          .ams-page {
            padding: 16px 12px 22px;
          }

          .ams-brand h2 {
            font-size: 23px;
          }

          .ams-partners,
          .ams-feature-grid,
          .ams-metrics,
          .ams-chart-grid,
          .ams-ops-grid,
          .ams-lower-grid,
          .ams-right,
          .ams-report-layout,
          .ams-access-layout,
          .ams-data-layout,
          .ams-integrations > div {
            grid-template-columns: 1fr;
          }

          .ams-left h1 {
            font-size: 38px;
          }

          .ams-dashboard {
            border-radius: 20px;
          }

          .ams-dash-main {
            padding: 14px 12px;
          }

          .ams-dash-sidebar nav {
            grid-template-columns: repeat(2, 1fr);
          }

          .ams-dash-actions label {
            width: 100%;
          }

          .ams-task-row,
          .ams-upcoming-row,
          .ams-report-row {
            grid-template-columns: 1fr;
          }

          .ams-workflow-steps,
          .ams-action-grid {
            grid-template-columns: 1fr;
          }

          .ams-step:not(:last-child)::after {
            display: none;
          }
        }
      `}</style>

      <div className="ams-shell">
        <motion.header className="ams-header" initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
          <div className="ams-brand">
            <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
            <div>
              <h2>DesireInfoWeb</h2>
              <p>Your Extended <span>Technology Partner</span></p>
            </div>
          </div>

          <div className="ams-stats ams-glass">
            {topStats.map((item) => <StatPill key={item.label} {...item} />)}
          </div>

          <div className="ams-partners">
            <div className="ams-partner ams-glass">
              <MicrosoftMark />
              <span>Microsoft<br />Solutions Partner</span>
            </div>
            <div className="ams-partner ams-glass">
              <M365Mark />
              <span>Built on<br />Microsoft 365</span>
            </div>
          </div>
        </motion.header>

        <div className="ams-main">
          <motion.aside className="ams-left" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.64 }} viewport={{ once: true }}>
            <div>
              <h1>Audit<br /><span>Management</span><span>System</span></h1>
              <h2>Ensure Compliance. Manage Risk. Drive Integrity.</h2>
              <p>A comprehensive audit management solution to plan, execute, monitor, and report audits efficiently with real-time insights, automated workflows, and centralized data.</p>
              <div className="ams-feature-grid">
                {features.map((item, index) => <FeatureCard key={item.title} index={index} {...item} />)}
              </div>
            </div>
            <AuditIllustration />
          </motion.aside>

          <DashboardMockup />
          <RightWidgets />
        </div>

        <BottomArea />
      </div>
    </section>
  );
}
