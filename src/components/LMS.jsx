import { motion } from 'framer-motion';
import {
  AlarmClock,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  CalendarCheck2,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  ClipboardCheck,
  Clock3,
  CloudUpload,
  FileArchive,
  FileBadge2,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Film,
  Flag,
  GraduationCap,
  Globe2,
  Home,
  Library,
  Mail,
  MessageSquareText,
  MonitorPlay,
  Phone,
  Play,
  Plus,
  Presentation,
  Search,
  Settings,
  ShieldCheck,
  Upload,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';

const stats = [
  { icon: UsersRound, value: '2,450+', label: 'Active Learners' },
  { icon: BriefcaseBusiness, value: '320+', label: 'Courses' },
  { icon: Flag, value: '18,750+', label: 'Enrollments' },
  { icon: CircleGauge, value: '96.5%', label: 'Completion Rate' },
  { icon: FileBadge2, value: '1,250+', label: 'Certificates Issued' },
  { icon: UserRoundCheck, value: '120+', label: 'Instructors' },
  { icon: Boxes, value: '15+', label: 'Learning Domains' },
  { icon: AlarmClock, value: '99.9%', label: 'System Uptime' },
];

const featureCards = [
  { icon: Upload, title: 'Multi-format Uploads', text: 'Video, PDF, PPT, DOCX, XLSX and more' },
  { icon: BookOpen, title: 'Course Builder', text: 'Create engaging courses easily' },
  { icon: BarChart3, title: 'Progress Tracking', text: 'Real-time learner progress and analytics' },
  { icon: FileCheck2, title: 'Assessments & Certificates', text: 'Quizzes, exams and auto certificates' },
  { icon: UserRoundCheck, title: 'Resource Onboarding', text: 'Seamless content and user onboarding' },
  { icon: Globe2, title: 'Multi-Domain Support', text: 'Corporate, academic and compliance' },
];

const sidebarItems = [
  [Home, 'Dashboard'],
  [BookOpen, 'Courses'],
  [GraduationCap, 'My Learning'],
  [ClipboardCheck, 'Assessments'],
  [Award, 'Certificates'],
  [UserRoundCheck, 'Instructors'],
  [UsersRound, 'Users'],
  [Library, 'Content Library'],
  [BarChart3, 'Reports & Analytics'],
  [MessageSquareText, 'Discussions'],
  [Bell, 'Announcements'],
  [Settings, 'Settings'],
];

const courseProgress = [
  ['AI for Everyone', 60],
  ['Leadership Basics', 40],
  ['Cyber Security Awareness', 80],
];

const certificates = [
  ['Azure Fundamentals', '#f59e0b'],
  ['Project Management', '#7c3aed'],
  ['Information Security', '#6d28d9'],
];

const activities = [
  ['Completed: Microsoft 365 Fundamentals', 'Certificate earned', '2 hours ago', CheckCircle2, '#6d28d9'],
  ['In Progress: Project Management Basics', '60% completed', '5 hours ago', Clock3, '#4f46e5'],
  ['Passed: Security Awareness Quiz', 'Score: 85%', '1 day ago', ShieldCheck, '#10b981'],
  ['Enrolled: Leadership & Team Management', 'Started learning', '2 days ago', BookOpen, '#7c3aed'],
];

const domains = [
  ['Corporate Training', '540 Courses', BriefcaseBusiness],
  ['Academic Education', '820 Courses', GraduationCap],
  ['Compliance Learning', '320 Courses', ShieldCheck],
  ['Technical Training', '450 Courses', MonitorPlay],
  ['Soft Skills', '310 Courses', UsersRound],
  ['Certification Programs', '210 Courses', Award],
];

const learners = [
  ['Anita Sharma', 12, 5, 7, 75],
  ['Rohit Gupta', 8, 2, 6, 50],
  ['Priya Nair', 10, 3, 7, 70],
  ['Karthik Reddy', 6, 1, 5, 83],
  ['Sneha Patel', 9, 4, 5, 55],
];

const assessments = [
  ['Azure Fundamentals Exam', 'May 28, 2024', 'Online Exam'],
  ['Leadership Skills Assessment', 'May 30, 2024', 'Quiz'],
  ['Information Security Test', 'Jun 02, 2024', 'Online Exam'],
  ['Project Management Quiz', 'Jun 05, 2024', 'Quiz'],
];

const topCourses = [
  ['Microsoft 365 Fundamentals', '1,250'],
  ['Project Management Basics', '980'],
  ['Cyber Security Awareness', '875'],
  ['Leadership & Management', '760'],
  ['Communication Skills', '650'],
];

const integrations = [
  ['Teams', 'Collaboration', '#5b5bf0'],
  ['SharePoint', 'Content Management', '#0f9f9a'],
  ['OneDrive', 'Cloud Storage', '#2563eb'],
  ['Power BI', 'Analytics', '#f59e0b'],
  ['Outlook', 'Notifications', '#2563eb'],
  ['Planner', 'Task Management', '#16a34a'],
];

const useCases = [
  {
    title: 'Corporate Training',
    text: 'Upskill your teams with role-based learning',
    type: 'meeting',
  },
  {
    title: 'Academic Education',
    text: 'Deliver engaging learning experiences for students',
    type: 'academic',
  },
  {
    title: 'Compliance Learning',
    text: 'Ensure mandatory training and regulatory compliance',
    type: 'shield',
  },
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
    <span className="lms-ms-mark" aria-hidden="true">
      {['#f25022', '#7fba00', '#00a4ef', '#ffb900'].map((color) => (
        <i key={color} style={{ backgroundColor: color }} />
      ))}
    </span>
  );
}

function M365Mark() {
  return (
    <span className="lms-m365-mark" aria-hidden="true">
      <i />
    </span>
  );
}

function StatPill({ icon: Icon, value, label }) {
  return (
    <div className="lms-stat">
      <Icon size={25} aria-hidden="true" />
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text, index }) {
  return (
    <motion.div
      className="lms-feature lms-glass"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Icon size={24} aria-hidden="true" />
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </motion.div>
  );
}

function LearningIllustration() {
  return (
    <motion.div className="lms-learning-art" animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="lms-art-base" />
      <div className="lms-book-stack">
        <span />
        <span />
        <span />
      </div>
      <div className="lms-cap">
        <GraduationCap size={66} aria-hidden="true" />
      </div>
      <div className="lms-cloud-tile">
        <CloudUpload size={44} aria-hidden="true" />
      </div>
      {[
        ['PDF', '#ef4444', 0],
        ['W', '#2563eb', 1],
        ['P', '#f97316', 2],
        ['X', '#10b981', 3],
      ].map(([label, color, index]) => (
        <b className={`file file-${index}`} key={label} style={{ '--file': color }}>{label}</b>
      ))}
    </motion.div>
  );
}

function SidebarMenuItem({ icon: Icon, label, active }) {
  return (
    <div className={`lms-menu-item ${active ? 'active' : ''}`}>
      <Icon size={13} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

function ProgressBar({ value, color = '#7c3aed' }) {
  return (
    <span className="lms-progress-bar" aria-hidden="true">
      <i style={{ width: `${value}%`, background: `linear-gradient(90deg, ${color}, #c026d3)` }} />
    </span>
  );
}

function ProgressRing() {
  return (
    <div className="lms-ring-wrap">
      <div className="lms-ring">
        <strong>75%</strong>
        <span>Completed</span>
      </div>
      <div className="lms-ring-legend">
        {[
          ['Completed', '75%', '#22c55e'],
          ['In Progress', '15%', '#6d28d9'],
          ['Not Started', '10%', '#f59e0b'],
        ].map(([label, value, color]) => (
          <span key={label}><i style={{ background: color }} />{label}<b>{value}</b></span>
        ))}
      </div>
    </div>
  );
}

function DashboardSidebar() {
  return (
    <aside className="lms-dash-sidebar">
      <div className="lms-dash-brand">
        <Library size={17} aria-hidden="true" />
        <strong>LMS Portal</strong>
      </div>
      <nav>
        {sidebarItems.map(([Icon, label], index) => (
          <SidebarMenuItem key={label} icon={Icon} label={label} active={index === 0} />
        ))}
      </nav>
      <div className="lms-profile">
        <b>VK</b>
        <div>
          <strong>Vijay Karthik</strong>
          <span>Administrator</span>
        </div>
        <ChevronRight size={13} aria-hidden="true" />
      </div>
    </aside>
  );
}

function CoursesCard() {
  return (
    <section className="lms-widget lms-glass">
      <div className="lms-widget-head">
        <h3>Courses In Progress</h3>
        <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
      </div>
      <strong className="lms-big-number">8 <span>Courses</span></strong>
      <div className="lms-course-bars">
        {courseProgress.map(([name, progress]) => (
          <div key={name}>
            <span><b>{name}</b><em>{progress}%</em></span>
            <ProgressBar value={progress} />
          </div>
        ))}
      </div>
    </section>
  );
}

function CertificatesCard() {
  return (
    <section className="lms-widget lms-glass">
      <div className="lms-widget-head">
        <h3>Certificates Earned</h3>
        <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
      </div>
      <strong className="lms-big-number">12 <span>Certificates</span></strong>
      <div className="lms-cert-list">
        {certificates.map(([title, color]) => (
          <span key={title}>
            <Award size={17} style={{ color }} aria-hidden="true" />
            <b>{title}</b>
          </span>
        ))}
      </div>
    </section>
  );
}

function CourseBuilderCard() {
  return (
    <section className="lms-widget lms-builder lms-glass">
      <div className="lms-widget-head">
        <h3>Course Builder</h3>
        <button type="button"><Plus size={10} aria-hidden="true" />New Course</button>
      </div>
      <p>Create. Organize. Publish.</p>
      <div className="lms-builder-layout">
        <ol>
          {['Course Information', 'Content Modules', 'Assessments', 'Settings & Permissions', 'Publish Course'].map((step, index) => (
            <li key={step}><b>{index + 1}.</b>{step}</li>
          ))}
        </ol>
        <div className="lms-mini-course">
          <div>
            <strong>Effective Communication Skills</strong>
            <span>Corporate Training</span>
          </div>
          <b>60%</b>
          <ProgressBar value={60} />
          <small>4 Modules - 2 Quizzes - 1 Certificate</small>
          <div className="lms-video-card">
            <span><UsersRound size={22} aria-hidden="true" /></span>
            <button type="button" aria-label="Preview course"><Play size={16} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
      <div className="lms-format-row">
        {[
          [Film, 'Video', '#4f46e5'],
          [FileText, 'PDF', '#ef4444'],
          [Presentation, 'PPT', '#f97316'],
          [FileText, 'DOCX', '#2563eb'],
          [FileSpreadsheet, 'XLSX', '#10b981'],
          [FileBadge2, 'SCORM', '#7c3aed'],
          [FileArchive, 'ZIP', '#8b5cf6'],
        ].map(([Icon, label, color]) => (
          <span key={label}>
            <Icon size={16} style={{ color }} aria-hidden="true" />
            <small>{label}</small>
          </span>
        ))}
      </div>
    </section>
  );
}

function ActivitiesCard() {
  return (
    <section className="lms-widget lms-activities lms-glass">
      <div className="lms-widget-head">
        <h3>Recent Learning Activities</h3>
        <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
      </div>
      {activities.map(([title, sub, time, Icon, color]) => (
        <div className="lms-activity-row" key={title}>
          <em style={{ color, backgroundColor: `${color}16` }}><Icon size={15} aria-hidden="true" /></em>
          <div>
            <strong>{title}</strong>
            <span>{sub}</span>
          </div>
          <small>{time}</small>
        </div>
      ))}
    </section>
  );
}

function DomainsCard() {
  return (
    <section className="lms-widget lms-domains lms-glass">
      <h3>Learning Domains</h3>
      {domains.map(([name, count, Icon]) => (
        <div className="lms-domain-row" key={name}>
          <span><Icon size={15} aria-hidden="true" /></span>
          <strong>{name}</strong>
          <small>{count}</small>
        </div>
      ))}
    </section>
  );
}

function LearnersTable() {
  return (
    <section className="lms-widget lms-learners lms-glass">
      <h3>Learner Progress Overview</h3>
      <div className="lms-table">
        <div className="lms-tr lms-th">
          <span>Learner</span><span>Courses</span><span>In Progress</span><span>Completed</span><span>Progress</span>
        </div>
        {learners.map(([name, courses, active, done, progress]) => (
          <div className="lms-tr" key={name}>
            <span><b>{name.split(' ').map((part) => part[0]).join('')}</b>{name}</span>
            <span>{courses}</span>
            <span>{active}</span>
            <span>{done}</span>
            <span><ProgressBar value={progress} /><em>{progress}%</em></span>
          </div>
        ))}
      </div>
      <a className="lms-card-link">View All Learners <ArrowRight size={10} aria-hidden="true" /></a>
    </section>
  );
}

function AssessmentCard() {
  return (
    <section className="lms-widget lms-list-card lms-glass">
      <div className="lms-widget-head">
        <h3>Upcoming Assessments</h3>
        <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
      </div>
      {assessments.map(([title, date, type], index) => (
        <div className="lms-small-row" key={title}>
          <CalendarCheck2 size={15} className={`tone-${index}`} aria-hidden="true" />
          <strong>{title}</strong>
          <span>{date}</span>
          <small>{type}</small>
        </div>
      ))}
    </section>
  );
}

function TopCoursesCard() {
  return (
    <section className="lms-widget lms-list-card lms-glass">
      <div className="lms-widget-head">
        <h3>Top Courses</h3>
        <a>View All <ArrowRight size={10} aria-hidden="true" /></a>
      </div>
      {topCourses.map(([title, count], index) => (
        <div className="lms-course-row" key={title}>
          <b>{index + 1}</b>
          <Award size={14} aria-hidden="true" />
          <strong>{title}</strong>
          <span>{count}</span>
        </div>
      ))}
    </section>
  );
}

function DashboardMockup() {
  return (
    <motion.section
      className="lms-dashboard lms-glass"
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <DashboardSidebar />
      <div className="lms-dash-main">
        <div className="lms-dash-top">
          <div>
            <h2>Welcome back, Vijay!</h2>
            <p>Here's what's happening in your LMS today.</p>
          </div>
          <div className="lms-actions">
            <label>
              <Search size={15} aria-hidden="true" />
              <input type="search" placeholder="Search courses, learners, topics..." />
            </label>
            <button type="button" className="lms-bell" aria-label="Notifications"><Bell size={16} aria-hidden="true" /><b>12</b></button>
            <button type="button" className="lms-create"><Plus size={14} aria-hidden="true" />Create Course</button>
          </div>
        </div>

        <div className="lms-top-cards">
          <section className="lms-widget lms-glass">
            <h3>My Learning Progress</h3>
            <ProgressRing />
            <a className="lms-card-link">View My Learning <ArrowRight size={10} aria-hidden="true" /></a>
          </section>
          <CoursesCard />
          <CertificatesCard />
        </div>

        <div className="lms-mid-grid">
          <CourseBuilderCard />
          <ActivitiesCard />
          <DomainsCard />
        </div>

        <div className="lms-bottom-grid">
          <LearnersTable />
          <AssessmentCard />
          <TopCoursesCard />
        </div>
      </div>
    </motion.section>
  );
}

function UseCaseIllustration({ type }) {
  if (type === 'academic') {
    return (
      <div className="lms-use-art academic" aria-hidden="true">
        <Globe2 size={48} />
        <GraduationCap size={52} />
        <i /><i /><i />
      </div>
    );
  }

  if (type === 'shield') {
    return (
      <div className="lms-use-art shield" aria-hidden="true">
        <ShieldCheck size={66} />
        <FileCheck2 size={42} />
        <i /><i />
      </div>
    );
  }

  return (
    <div className="lms-use-art meeting" aria-hidden="true">
      <MonitorPlay size={64} />
      <span />
      <span />
      <span />
    </div>
  );
}

function UseCaseCard({ title, text, type, index }) {
  return (
    <motion.article
      className="lms-use-card lms-glass"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
      <UseCaseIllustration type={type} />
    </motion.article>
  );
}

function IntegrationItem({ title, subtitle, color }) {
  return (
    <span className="lms-integration">
      <i style={{ '--app': color }}>{title === 'Power BI' ? 'BI' : title[0]}</i>
      <strong>{title}</strong>
      <small>{subtitle}</small>
    </span>
  );
}

function LaptopArt() {
  return (
    <div className="lms-laptop-art" aria-hidden="true">
      <div className="lms-plant"><i /><b /></div>
      <div className="lms-laptop-screen">
        <strong>LMS</strong>
        <Play size={34} />
        <span /><span /><span />
      </div>
      <div className="lms-laptop-base" />
      <div className="lms-cup" />
    </div>
  );
}

function BottomArea() {
  return (
    <motion.div
      className="lms-bottom-band"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62 }}
      viewport={{ once: true }}
    >
      <div className="lms-integrations lms-glass">
        <h3>Powered by Microsoft 365</h3>
        <div>
          {integrations.map(([title, subtitle, color]) => (
            <IntegrationItem key={title} title={title} subtitle={subtitle} color={color} />
          ))}
        </div>
      </div>

      <button type="button" className="lms-cta">
        <span>Empower Learning.<br />Inspire Growth.</span>
        <GraduationCap size={54} aria-hidden="true" />
      </button>

      <div className="lms-contact lms-glass">
        <span><Globe2 size={17} aria-hidden="true" />www.desireinfoweb.com</span>
        <span><Mail size={17} aria-hidden="true" />vijay@desireinfoweb.com</span>
        <span><Phone size={17} aria-hidden="true" />+91-8780468807</span>
      </div>

      <LaptopArt />
    </motion.div>
  );
}

export default function LMS() {
  return (
    <section className="lms-page" id="learning-management-system">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@500;600;700;800;900&display=swap');

        .lms-page,
        .lms-page * {
          box-sizing: border-box;
        }

        .lms-page {
          --ink: #10107a;
          --soft-ink: #312e81;
          --muted: #5c5a8a;
          --violet: #6d28d9;
          --purple: #7c3aed;
          --blue: #1b22c8;
          --pink: #ec4899;
          --cyan: #38bdf8;
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          overflow: hidden;
          padding: 22px clamp(14px, 1.65vw, 30px) 24px;
          color: var(--ink);
          font-family: "Inter", "Poppins", "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at 16% 20%, rgba(236,72,153,.15), transparent 24%),
            radial-gradient(circle at 72% 8%, rgba(109,40,217,.16), transparent 30%),
            radial-gradient(circle at 86% 78%, rgba(56,189,248,.12), transparent 28%),
            linear-gradient(135deg, #fbfaff 0%, #f7f2ff 48%, #fff7fd 100%);
        }

        .lms-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(109,40,217,.04) 1px, transparent 1px),
            linear-gradient(0deg, rgba(109,40,217,.035) 1px, transparent 1px),
            linear-gradient(120deg, transparent 0 19%, rgba(236,72,153,.07) 19.1% 19.3%, transparent 19.7%);
          background-size: 74px 74px, 74px 74px, 100% 100%;
        }

        .lms-page::after {
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

        .lms-shell {
          width: min(100%, 1800px);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .lms-glass {
          background: linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.5));
          border: 1px solid rgba(255,255,255,.72);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 22px 60px rgba(109,40,217,.14),
            0 0 0 1px rgba(130,94,255,.12);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .lms-header {
          display: grid;
          grid-template-columns: 238px minmax(0, 1fr) 282px;
          gap: 10px;
          align-items: center;
          margin-bottom: 13px;
        }

        .lms-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .lms-brand img {
          width: 52px;
          height: 52px;
          object-fit: contain;
          filter: drop-shadow(0 16px 26px rgba(109,40,217,.18));
        }

        .lms-brand h2 {
          margin: 0;
          font-family: "Poppins", sans-serif;
          font-size: 23px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0;
        }

        .lms-brand p {
          margin: 4px 0 0;
          color: var(--ink);
          font-size: 9.5px;
          line-height: 1.05;
          font-weight: 800;
        }

        .lms-brand p span {
          color: var(--pink);
        }

        .lms-stats {
          min-height: 54px;
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          align-items: center;
          border-radius: 24px;
          padding: 6px 10px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.9), rgba(246,240,255,.74)),
            linear-gradient(90deg, rgba(255,255,255,.82), rgba(225,213,255,.46));
          border-color: rgba(126,88,255,.38);
        }

        .lms-stat {
          display: grid;
          grid-template-columns: 23px minmax(0, 1fr);
          gap: 5px;
          align-items: center;
          min-height: 38px;
          padding: 0 5px;
          border-left: 1px solid rgba(109,40,217,.16);
        }

        .lms-stat:first-child {
          border-left: 0;
        }

        .lms-stat svg {
          width: 19px;
          height: 19px;
          color: var(--violet);
          stroke-width: 2.15;
          filter: drop-shadow(0 0 6px rgba(109,40,217,.22));
        }

        .lms-stat strong {
          display: block;
          color: #08006f;
          font-size: clamp(12px, .84vw, 16px);
          line-height: .95;
          font-weight: 900;
          white-space: nowrap;
          letter-spacing: 0;
        }

        .lms-stat span {
          display: block;
          margin-top: 3px;
          max-width: 62px;
          color: #140b71;
          font-size: 5.7px;
          line-height: 1.05;
          font-weight: 800;
        }

        .lms-partners {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .lms-partner {
          min-height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 18px;
          padding: 7px 10px;
        }

        .lms-partner span:last-child {
          color: #111827;
          font-size: 10.5px;
          line-height: 1.05;
          font-weight: 900;
        }

        .lms-ms-mark {
          width: 26px;
          height: 26px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3px;
          flex: 0 0 auto;
        }

        .lms-ms-mark i {
          border-radius: 1px;
        }

        .lms-m365-mark {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: conic-gradient(from 35deg, #1b22c8, #7c3aed, #38bdf8, #1b22c8);
          box-shadow: 0 12px 28px rgba(37,99,235,.22);
        }

        .lms-m365-mark i {
          width: 19px;
          height: 19px;
          border-radius: 9px;
          background: rgba(255,255,255,.72);
          transform: rotate(45deg);
        }

        .lms-main {
          display: grid;
          grid-template-columns: 282px minmax(0, 1fr) 196px;
          gap: 12px;
          align-items: start;
        }

        .lms-left h1 {
          margin: 9px 0 7px;
          color: #111066;
          font-family: "Poppins", sans-serif;
          font-size: clamp(33px, 2.5vw, 48px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0;
        }

        .lms-left h1 span {
          display: block;
          background: linear-gradient(105deg, #111066 0%, #1b22c8 38%, #ec4899 88%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .lms-left h2 {
          max-width: 258px;
          margin: 0 0 12px;
          color: #111066;
          font-size: 18px;
          line-height: 1.04;
          font-weight: 900;
          letter-spacing: 0;
        }

        .lms-left p {
          max-width: 262px;
          margin: 0 0 16px;
          color: #12106f;
          font-size: 11px;
          line-height: 1.42;
          font-weight: 700;
        }

        .lms-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 13px;
        }

        .lms-feature {
          min-height: 76px;
          display: grid;
          grid-template-columns: 25px 1fr;
          gap: 7px;
          align-items: start;
          padding: 10px 9px;
          border-radius: 14px;
        }

        .lms-feature svg {
          width: 20px;
          height: 20px;
          color: var(--violet);
          stroke-width: 2.15;
        }

        .lms-feature strong,
        .lms-feature span {
          display: block;
        }

        .lms-feature strong {
          color: #09046b;
          font-size: 8.8px;
          line-height: 1.12;
          font-weight: 900;
        }

        .lms-feature span {
          margin-top: 5px;
          color: #2f2b79;
          font-size: 6.2px;
          line-height: 1.3;
          font-weight: 800;
        }

        .lms-learning-art {
          position: relative;
          width: 246px;
          height: 208px;
          margin: 10px 0 0 4px;
        }

        .lms-art-base {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 0;
          height: 66px;
          border-radius: 30px;
          background: linear-gradient(135deg, rgba(255,255,255,.86), rgba(109,40,217,.28));
          box-shadow: 0 25px 48px rgba(109,40,217,.24), inset 0 2px 0 rgba(255,255,255,.8);
          transform: perspective(620px) rotateX(58deg);
        }

        .lms-book-stack {
          position: absolute;
          left: 38px;
          bottom: 44px;
          width: 142px;
          height: 72px;
        }

        .lms-book-stack span {
          position: absolute;
          left: 0;
          right: 0;
          height: 24px;
          border-radius: 10px;
          background: linear-gradient(90deg, #2f27d9, #9f5cff);
          box-shadow: 0 18px 28px rgba(109,40,217,.24);
        }

        .lms-book-stack span:nth-child(1) { bottom: 0; transform: skewX(-11deg); }
        .lms-book-stack span:nth-child(2) { bottom: 22px; left: 12px; background: linear-gradient(90deg, #5a35f0, #c084fc); }
        .lms-book-stack span:nth-child(3) { bottom: 44px; left: -8px; background: linear-gradient(90deg, #1b22c8, #7c3aed); }

        .lms-cap {
          position: absolute;
          left: 53px;
          bottom: 106px;
          color: #3f20d8;
          filter: drop-shadow(0 20px 16px rgba(109,40,217,.22));
        }

        .lms-cloud-tile {
          position: absolute;
          right: 16px;
          bottom: 56px;
          width: 104px;
          height: 88px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          color: white;
          background: linear-gradient(150deg, rgba(255,255,255,.78), rgba(124,58,237,.56));
          border: 1px solid rgba(255,255,255,.75);
          box-shadow: 0 24px 44px rgba(109,40,217,.23), inset 0 1px 0 rgba(255,255,255,.85);
        }

        .lms-learning-art .file {
          position: absolute;
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          color: white;
          background: var(--file);
          border: 4px solid rgba(255,255,255,.55);
          font-size: 10px;
          font-weight: 900;
          box-shadow: 0 18px 28px rgba(109,40,217,.22);
        }

        .file-0 { left: 42px; top: 28px; }
        .file-1 { left: 112px; top: 8px; }
        .file-2 { right: 72px; top: 36px; }
        .file-3 { right: 24px; top: 86px; }

        .lms-dashboard {
          display: grid;
          grid-template-columns: 150px minmax(0, 1fr);
          min-height: 700px;
          overflow: hidden;
          border-radius: 28px;
        }

        .lms-dash-sidebar {
          display: flex;
          flex-direction: column;
          min-height: 700px;
          padding: 17px 10px 12px;
          color: white;
          background: linear-gradient(180deg, #2b15a0 0%, #16075d 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.16), 16px 0 44px rgba(42,16,120,.18);
        }

        .lms-dash-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-size: 13px;
          font-weight: 900;
        }

        .lms-dash-sidebar nav {
          display: grid;
          gap: 5px;
        }

        .lms-menu-item {
          display: flex;
          align-items: center;
          gap: 7px;
          min-height: 29px;
          padding: 0 9px;
          border-radius: 9px;
          color: rgba(255,255,255,.9);
          font-size: 8.3px;
          font-weight: 800;
        }

        .lms-menu-item.active {
          color: white;
          background: linear-gradient(90deg, #6d28d9, #c026d3);
          box-shadow: 0 12px 24px rgba(0,0,0,.18);
        }

        .lms-profile {
          display: grid;
          grid-template-columns: 30px 1fr 13px;
          gap: 8px;
          align-items: center;
          margin-top: auto;
          min-height: 54px;
          padding: 8px;
          border-radius: 14px;
          background: rgba(255,255,255,.08);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
        }

        .lms-profile b {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #2b15a0;
          background: #fff;
          font-size: 9px;
        }

        .lms-profile strong,
        .lms-profile span {
          display: block;
        }

        .lms-profile strong {
          font-size: 8px;
          font-weight: 900;
        }

        .lms-profile span {
          margin-top: 2px;
          color: rgba(255,255,255,.72);
          font-size: 6.8px;
          font-weight: 800;
        }

        .lms-dash-main {
          min-width: 0;
          padding: 16px 14px 15px;
        }

        .lms-dash-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 13px;
        }

        .lms-dash-top h2 {
          margin: 0;
          font-size: 18px;
          line-height: 1;
          font-weight: 900;
        }

        .lms-dash-top p {
          margin: 5px 0 0;
          color: #252174;
          font-size: 9px;
          font-weight: 800;
        }

        .lms-actions {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .lms-actions label {
          width: 250px;
          height: 36px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 12px;
          border: 1px solid rgba(109,40,217,.14);
          border-radius: 10px;
          background: rgba(255,255,255,.62);
        }

        .lms-actions label svg {
          color: #7c70ca;
        }

        .lms-actions input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #1f1a70;
          font-size: 9px;
          font-weight: 800;
        }

        .lms-actions button {
          height: 36px;
          border: 0;
          border-radius: 10px;
          font-size: 9px;
          font-weight: 900;
          cursor: pointer;
        }

        .lms-bell {
          position: relative;
          width: 36px;
          display: grid;
          place-items: center;
          color: #1b1480;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(109,40,217,.14) !important;
        }

        .lms-bell b {
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

        .lms-create {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 17px;
          color: white;
          background: linear-gradient(100deg, #5127f1, #a855f7);
          box-shadow: 0 14px 24px rgba(109,40,217,.22);
        }

        .lms-top-cards {
          display: grid;
          grid-template-columns: 1.05fr 1fr 1.05fr;
          gap: 10px;
          margin-bottom: 12px;
        }

        .lms-widget {
          position: relative;
          min-height: 172px;
          padding: 14px;
          border-radius: 14px;
          overflow: hidden;
        }

        .lms-widget h3 {
          margin: 0;
          font-size: 10px;
          font-weight: 900;
          line-height: 1.1;
        }

        .lms-widget p {
          margin: 6px 0 0;
          color: #5c5a8a;
          font-size: 7.5px;
          font-weight: 800;
        }

        .lms-widget-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 12px;
        }

        .lms-widget-head a,
        .lms-card-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #4e24e8;
          font-size: 7.6px;
          font-weight: 900;
          text-decoration: none;
        }

        .lms-widget-head button {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          min-height: 24px;
          border: 0;
          border-radius: 8px;
          padding: 0 10px;
          color: white;
          background: linear-gradient(90deg, #6d28d9, #a855f7);
          font-size: 7px;
          font-weight: 900;
        }

        .lms-ring-wrap {
          display: grid;
          grid-template-columns: 88px 1fr;
          gap: 14px;
          align-items: center;
          margin: 12px 0 14px;
        }

        .lms-ring {
          width: 86px;
          height: 86px;
          display: grid;
          place-items: center;
          align-content: center;
          border-radius: 50%;
          background:
            radial-gradient(circle, #fff 0 48%, transparent 49%),
            conic-gradient(#6d28d9 0 75%, #22c55e 75% 90%, #f59e0b 90% 100%);
          box-shadow: 0 14px 28px rgba(109,40,217,.18);
        }

        .lms-ring strong {
          font-size: 23px;
          line-height: 1;
          font-weight: 900;
        }

        .lms-ring span {
          margin-top: 2px;
          font-size: 7px;
          font-weight: 800;
        }

        .lms-ring-legend {
          display: grid;
          gap: 9px;
        }

        .lms-ring-legend span {
          display: grid;
          grid-template-columns: 8px 1fr auto;
          gap: 7px;
          align-items: center;
          color: #342f88;
          font-size: 7.5px;
          font-weight: 900;
        }

        .lms-ring-legend i {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .lms-big-number {
          display: block;
          margin-bottom: 18px;
          color: #111066;
          font-size: 25px;
          line-height: 1;
          font-weight: 900;
        }

        .lms-big-number span {
          margin-left: 5px;
          font-size: 9px;
          font-weight: 800;
        }

        .lms-course-bars {
          display: grid;
          gap: 13px;
        }

        .lms-course-bars span,
        .lms-progress-bar {
          display: block;
        }

        .lms-course-bars div > span {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
          font-size: 8px;
          font-weight: 900;
        }

        .lms-course-bars em {
          font-style: normal;
        }

        .lms-progress-bar {
          height: 6px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(109,40,217,.12);
        }

        .lms-progress-bar i {
          display: block;
          height: 100%;
          border-radius: inherit;
          box-shadow: 0 8px 16px rgba(109,40,217,.18);
        }

        .lms-cert-list {
          display: grid;
          gap: 14px;
        }

        .lms-cert-list span {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 27px;
          border-bottom: 1px solid rgba(109,40,217,.1);
          font-size: 8.2px;
          font-weight: 900;
        }

        .lms-hours {
          display: block;
          margin-top: 17px;
          font-size: 25px;
          line-height: 1;
          font-weight: 900;
        }

        .lms-subtle {
          display: block;
          margin-top: 6px;
          color: #5c5a8a;
          font-size: 8px;
          font-weight: 900;
        }

        .lms-up {
          display: block;
          margin-top: 9px;
          color: #059669;
          font-size: 8px;
          font-weight: 900;
        }

        .lms-mini-chart {
          position: absolute;
          right: 18px;
          bottom: 28px;
          height: 84px;
          display: flex;
          align-items: end;
          gap: 10px;
        }

        .lms-mini-chart i {
          width: 12px;
          border-radius: 5px 5px 2px 2px;
          background: linear-gradient(180deg, #a855f7, #6d28d9);
          box-shadow: 0 10px 16px rgba(109,40,217,.18);
        }

        .lms-mid-grid {
          display: grid;
          grid-template-columns: 1.35fr 1.1fr 1fr;
          gap: 10px;
          margin-bottom: 12px;
        }

        .lms-builder {
          min-height: 256px;
        }

        .lms-builder-layout {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 12px;
          align-items: start;
          margin-top: 12px;
        }

        .lms-builder ol {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
          font-size: 8px;
          font-weight: 900;
        }

        .lms-builder li {
          display: flex;
          align-items: center;
          gap: 7px;
          min-height: 19px;
          color: #201a78;
        }

        .lms-builder li b {
          color: #6d28d9;
        }

        .lms-mini-course {
          min-height: 154px;
          padding: 12px;
          border-radius: 12px;
          background: linear-gradient(160deg, rgba(255,255,255,.86), rgba(234,222,255,.74));
          border: 1px solid rgba(109,40,217,.11);
        }

        .lms-mini-course > div:first-child {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
        }

        .lms-mini-course strong,
        .lms-mini-course span,
        .lms-mini-course small {
          display: block;
        }

        .lms-mini-course strong {
          font-size: 8.2px;
          line-height: 1.15;
          font-weight: 900;
        }

        .lms-mini-course span,
        .lms-mini-course small {
          margin-top: 4px;
          color: #5c5a8a;
          font-size: 7px;
          font-weight: 800;
        }

        .lms-mini-course > b {
          position: absolute;
          right: 25px;
          top: 68px;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #6d28d9;
          background: rgba(109,40,217,.09);
          font-size: 9px;
        }

        .lms-mini-course .lms-progress-bar {
          margin: 10px 44px 7px 0;
        }

        .lms-video-card {
          position: relative;
          min-height: 58px;
          margin-top: 10px;
          overflow: hidden;
          border-radius: 12px;
          background:
            linear-gradient(100deg, rgba(27,34,200,.74), rgba(236,72,153,.36)),
            linear-gradient(135deg, #ede9fe, #fff);
        }

        .lms-video-card span {
          position: absolute;
          left: 18px;
          bottom: 8px;
          width: 60px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 14px 14px 4px 4px;
          color: white;
          background: rgba(255,255,255,.2);
        }

        .lms-video-card button {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 50%;
          color: #6d28d9;
          background: rgba(255,255,255,.86);
          transform: translate(-50%, -50%);
        }

        .lms-format-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
          margin-top: 12px;
        }

        .lms-format-row span {
          display: grid;
          place-items: center;
          gap: 3px;
          color: #09046b;
          font-size: 6.5px;
          font-weight: 900;
        }

        .lms-activity-row {
          display: grid;
          grid-template-columns: 28px 1fr 48px;
          gap: 9px;
          align-items: center;
          min-height: 45px;
          border-bottom: 1px solid rgba(109,40,217,.08);
        }

        .lms-activity-row em {
          width: 26px;
          height: 26px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          font-style: normal;
        }

        .lms-activity-row strong,
        .lms-activity-row span {
          display: block;
        }

        .lms-activity-row strong {
          font-size: 8px;
          line-height: 1.15;
          font-weight: 900;
        }

        .lms-activity-row span,
        .lms-activity-row small {
          margin-top: 4px;
          color: #5c5a8a;
          font-size: 6.7px;
          font-weight: 800;
        }

        .lms-domain-row {
          display: grid;
          grid-template-columns: 27px 1fr auto;
          gap: 8px;
          align-items: center;
          min-height: 33px;
          font-size: 8px;
          font-weight: 900;
        }

        .lms-domain-row span {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          color: #6d28d9;
          background: rgba(109,40,217,.1);
        }

        .lms-domain-row small {
          color: #5c5a8a;
          font-size: 6.7px;
          font-weight: 800;
        }

        .lms-upload-widget {
          min-height: 256px;
        }

        .lms-upload-box {
          display: grid;
          place-items: center;
          align-content: center;
          min-height: 112px;
          margin: 17px 0 11px;
          border: 1px dashed rgba(109,40,217,.42);
          border-radius: 14px;
          color: #6d28d9;
          background: rgba(255,255,255,.44);
          text-align: center;
        }

        .lms-upload-box strong {
          margin-top: 8px;
          font-size: 8px;
          font-weight: 900;
        }

        .lms-upload-box span,
        .lms-upload-widget small {
          color: #5c5a8a;
          font-size: 6.7px;
          font-weight: 800;
        }

        .lms-upload-types {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-bottom: 6px;
        }

        .lms-upload-types b {
          padding: 5px 4px;
          border-radius: 5px;
          color: white;
          background: #4f46e5;
          font-size: 6px;
          font-weight: 900;
        }

        .lms-upload-types b:nth-child(1) { background: #ef4444; }
        .lms-upload-types b:nth-child(2) { background: #f97316; }
        .lms-upload-types b:nth-child(4) { background: #10b981; }

        .lms-storage {
          display: grid;
          gap: 7px;
          margin-top: 14px;
        }

        .lms-storage span,
        .lms-storage b {
          color: #111066;
          font-size: 8px;
          font-weight: 900;
        }

        .lms-bottom-grid {
          display: grid;
          grid-template-columns: 1.45fr 1fr 1fr;
          gap: 10px;
        }

        .lms-learners {
          min-height: 190px;
        }

        .lms-table {
          display: grid;
          gap: 0;
          margin-top: 12px;
        }

        .lms-tr {
          display: grid;
          grid-template-columns: 1.35fr .7fr .7fr .7fr 1fr;
          gap: 8px;
          align-items: center;
          min-height: 25px;
          border-bottom: 1px solid rgba(109,40,217,.07);
          color: #16106f;
          font-size: 7px;
          font-weight: 800;
        }

        .lms-th {
          min-height: 22px;
          color: #5c5a8a;
          font-size: 6.6px;
          font-weight: 900;
        }

        .lms-tr span:first-child {
          display: flex;
          align-items: center;
          gap: 7px;
          min-width: 0;
        }

        .lms-tr span:first-child b {
          width: 18px;
          height: 18px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: white;
          background: linear-gradient(135deg, #f97316, #7c3aed);
          font-size: 6px;
          flex: 0 0 auto;
        }

        .lms-tr span:last-child {
          display: grid;
          grid-template-columns: 1fr 27px;
          gap: 7px;
          align-items: center;
        }

        .lms-tr em {
          color: #111066;
          font-style: normal;
          font-size: 7px;
          font-weight: 900;
        }

        .lms-list-card {
          min-height: 190px;
        }

        .lms-small-row {
          display: grid;
          grid-template-columns: 18px 1fr 52px 48px;
          gap: 7px;
          align-items: center;
          min-height: 34px;
          border-bottom: 1px solid rgba(109,40,217,.07);
        }

        .lms-small-row strong,
        .lms-small-row span,
        .lms-small-row small {
          font-size: 7px;
          font-weight: 900;
        }

        .lms-small-row span,
        .lms-small-row small {
          color: #5c5a8a;
          font-size: 6.4px;
          font-weight: 800;
        }

        .tone-0 { color: #6d28d9; }
        .tone-1 { color: #f59e0b; }
        .tone-2 { color: #10b981; }
        .tone-3 { color: #4f46e5; }

        .lms-course-row {
          display: grid;
          grid-template-columns: 18px 18px 1fr auto;
          gap: 7px;
          align-items: center;
          min-height: 30px;
          font-size: 7px;
          font-weight: 900;
        }

        .lms-course-row b,
        .lms-course-row span {
          color: #111066;
          font-size: 7px;
          font-weight: 900;
        }

        .lms-course-row svg {
          color: #6d28d9;
        }

        .lms-announcement-row {
          display: grid;
          grid-template-columns: 20px 1fr 48px;
          gap: 7px;
          align-items: center;
          min-height: 42px;
          border-bottom: 1px solid rgba(109,40,217,.07);
        }

        .lms-announcement-row strong,
        .lms-announcement-row span,
        .lms-announcement-row small {
          display: block;
          font-size: 7px;
          font-weight: 900;
        }

        .lms-announcement-row span,
        .lms-announcement-row small {
          margin-top: 4px;
          color: #5c5a8a;
          font-size: 6.4px;
          font-weight: 800;
        }

        .lms-right {
          display: grid;
          gap: 14px;
        }

        .lms-use-card {
          min-height: 201px;
          padding: 17px 15px 13px;
          border-radius: 22px;
          overflow: hidden;
        }

        .lms-use-card h3 {
          margin: 0;
          font-size: 13px;
          font-weight: 900;
        }

        .lms-use-card p {
          max-width: 160px;
          margin: 12px 0 13px;
          color: #111066;
          font-size: 9px;
          line-height: 1.35;
          font-weight: 800;
        }

        .lms-use-art {
          position: relative;
          height: 105px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: linear-gradient(150deg, rgba(255,255,255,.8), rgba(124,58,237,.16));
        }

        .lms-use-art svg {
          color: #5b21d8;
          filter: drop-shadow(0 14px 20px rgba(109,40,217,.18));
        }

        .lms-use-art.meeting span {
          position: absolute;
          bottom: 14px;
          width: 22px;
          height: 42px;
          border-radius: 12px 12px 6px 6px;
          background: linear-gradient(180deg, #ede9fe, #7c3aed);
          box-shadow: 0 10px 18px rgba(109,40,217,.2);
        }

        .lms-use-art.meeting span:nth-child(2) { left: 23px; }
        .lms-use-art.meeting span:nth-child(3) { right: 23px; }
        .lms-use-art.meeting span:nth-child(4) { left: 74px; height: 35px; }

        .lms-use-art.academic svg:nth-child(1) {
          position: absolute;
          left: 26px;
          bottom: 18px;
        }

        .lms-use-art.academic svg:nth-child(2) {
          position: absolute;
          right: 28px;
          top: 18px;
        }

        .lms-use-art.academic i {
          position: absolute;
          bottom: 14px;
          width: 84px;
          height: 22px;
          border-radius: 8px;
          background: linear-gradient(90deg, #312e81, #a855f7);
        }

        .lms-use-art.academic i:nth-child(3) { bottom: 54px; right: 22px; width: 86px; }
        .lms-use-art.academic i:nth-child(4) { bottom: 37px; right: 30px; width: 100px; background: linear-gradient(90deg, #f59e0b, #c084fc); }
        .lms-use-art.academic i:nth-child(5) { right: 18px; }

        .lms-use-art.shield svg:nth-child(1) {
          position: absolute;
          left: 31px;
          bottom: 20px;
        }

        .lms-use-art.shield svg:nth-child(2) {
          position: absolute;
          right: 24px;
          bottom: 25px;
        }

        .lms-use-art.shield i {
          position: absolute;
          right: 25px;
          top: 27px;
          width: 55px;
          height: 8px;
          border-radius: 999px;
          background: rgba(109,40,217,.28);
        }

        .lms-use-art.shield i:last-child {
          top: 45px;
          width: 42px;
          background: rgba(16,185,129,.32);
        }

        .lms-bottom-band {
          display: grid;
          grid-template-columns: 430px 290px 250px 170px;
          gap: 14px;
          align-items: end;
          margin: 14px 0 0 170px;
        }

        .lms-integrations {
          min-height: 88px;
          padding: 13px 18px 12px;
          border-radius: 17px;
        }

        .lms-integrations h3 {
          margin: 0 0 9px;
          text-align: center;
          font-size: 12px;
          font-weight: 900;
        }

        .lms-integrations > div {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }

        .lms-integration {
          display: grid;
          place-items: center;
          align-content: center;
          gap: 2px;
          min-height: 44px;
          border-left: 1px solid rgba(109,40,217,.14);
          text-align: center;
        }

        .lms-integration:first-child {
          border-left: 0;
        }

        .lms-integration i {
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

        .lms-integration strong {
          font-size: 7.5px;
          font-weight: 900;
        }

        .lms-integration small {
          color: #5c5a8a;
          font-size: 6.2px;
          font-weight: 800;
        }

        .lms-cta {
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border: 0;
          border-radius: 18px;
          padding: 0 24px;
          color: white;
          background: linear-gradient(110deg, #3328e7 0%, #7c3aed 42%, #ec4899 84%);
          box-shadow: 0 24px 60px rgba(236,72,153,.28);
          cursor: pointer;
        }

        .lms-cta span {
          text-align: left;
          font-size: 22px;
          line-height: 1.08;
          font-weight: 900;
        }

        .lms-contact {
          min-height: 88px;
          display: grid;
          gap: 8px;
          align-content: center;
          padding: 14px 15px;
          border-radius: 17px;
        }

        .lms-contact span {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #12106f;
          font-size: 10.5px;
          font-weight: 900;
        }

        .lms-contact svg {
          color: #6d28d9;
        }

        .lms-laptop-art {
          position: relative;
          min-height: 162px;
        }

        .lms-laptop-screen {
          position: absolute;
          right: 20px;
          bottom: 42px;
          width: 162px;
          height: 106px;
          border: 10px solid #3f22a8;
          border-radius: 13px 13px 6px 6px;
          color: white;
          background: linear-gradient(150deg, #23126f, #7c3aed);
          box-shadow: 0 24px 44px rgba(42,16,120,.24);
          transform: perspective(560px) rotateY(-10deg) rotateX(4deg);
        }

        .lms-laptop-screen strong {
          position: absolute;
          left: 18px;
          top: 22px;
          font-size: 28px;
          font-weight: 900;
        }

        .lms-laptop-screen svg {
          position: absolute;
          right: 19px;
          top: 22px;
          padding: 8px;
          border-radius: 12px;
          background: rgba(255,255,255,.14);
        }

        .lms-laptop-screen span {
          position: absolute;
          left: 19px;
          width: 70px;
          height: 6px;
          border-radius: 999px;
          background: #f59e0b;
        }

        .lms-laptop-screen span:nth-of-type(1) { bottom: 31px; }
        .lms-laptop-screen span:nth-of-type(2) { bottom: 19px; width: 96px; background: #ec4899; }
        .lms-laptop-screen span:nth-of-type(3) { bottom: 7px; width: 48px; background: #38bdf8; }

        .lms-laptop-base {
          position: absolute;
          right: 0;
          bottom: 18px;
          width: 198px;
          height: 36px;
          border-radius: 8px 8px 24px 24px;
          background: linear-gradient(180deg, #c4b5fd, #7c3aed);
          box-shadow: 0 18px 36px rgba(109,40,217,.2);
          transform: perspective(560px) rotateX(55deg);
        }

        .lms-plant {
          position: absolute;
          left: 2px;
          bottom: 40px;
          width: 45px;
          height: 70px;
        }

        .lms-plant i {
          position: absolute;
          left: 16px;
          bottom: 21px;
          width: 12px;
          height: 42px;
          border-radius: 999px 999px 0 0;
          background: linear-gradient(180deg, #16a34a, #86efac);
          transform: rotate(-22deg);
          box-shadow: 15px 3px 0 #22c55e, -9px 9px 0 #15803d;
        }

        .lms-plant b {
          position: absolute;
          left: 10px;
          bottom: 0;
          width: 31px;
          height: 25px;
          border-radius: 5px 5px 13px 13px;
          background: linear-gradient(180deg, #ede9fe, #7c3aed);
        }

        .lms-cup {
          position: absolute;
          right: 0;
          bottom: 20px;
          width: 34px;
          height: 34px;
          border-radius: 6px 6px 13px 13px;
          background: linear-gradient(180deg, white, #ddd6fe);
          box-shadow: inset -8px 0 0 rgba(109,40,217,.12);
        }

        .lms-cup::after {
          content: "";
          position: absolute;
          right: -11px;
          top: 8px;
          width: 15px;
          height: 14px;
          border: 4px solid #ddd6fe;
          border-left: 0;
          border-radius: 0 999px 999px 0;
        }

        @media (max-width: 1180px) {
          .lms-header,
          .lms-main,
          .lms-bottom-band {
            grid-template-columns: 1fr;
            margin-left: 0;
          }

          .lms-stats {
            overflow-x: auto;
            grid-template-columns: repeat(8, 150px);
          }

          .lms-partners {
            max-width: 520px;
          }

          .lms-left {
            display: grid;
            grid-template-columns: minmax(280px, 360px) 1fr;
            gap: 20px;
            align-items: start;
          }

          .lms-left p {
            max-width: 360px;
          }

          .lms-learning-art {
            display: none;
          }

          .lms-right {
            grid-template-columns: repeat(3, 1fr);
          }

          .lms-bottom-band {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 1080px) {
          .lms-dashboard,
          .lms-dash-top,
          .lms-left,
          .lms-bottom-band {
            grid-template-columns: 1fr;
          }

          .lms-dash-sidebar {
            min-height: auto;
          }

          .lms-dash-sidebar nav {
            grid-template-columns: repeat(3, 1fr);
          }

          .lms-profile {
            display: none;
          }

          .lms-dash-top {
            display: grid;
          }

          .lms-actions {
            flex-wrap: wrap;
          }

          .lms-actions label {
            flex: 1 1 260px;
          }

          .lms-top-cards,
          .lms-mid-grid,
          .lms-bottom-grid,
          .lms-right {
            grid-template-columns: 1fr 1fr;
          }

          .lms-integrations > div {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 700px) {
          .lms-page {
            padding: 16px 12px 22px;
          }

          .lms-brand h2 {
            font-size: 23px;
          }

          .lms-partners,
          .lms-feature-grid,
          .lms-top-cards,
          .lms-mid-grid,
          .lms-bottom-grid,
          .lms-right,
          .lms-builder-layout,
          .lms-ring-wrap,
          .lms-integrations > div {
            grid-template-columns: 1fr;
          }

          .lms-left h1 {
            font-size: 38px;
          }

          .lms-dashboard {
            border-radius: 20px;
          }

          .lms-dash-main {
            padding: 14px 12px;
          }

          .lms-dash-sidebar nav {
            grid-template-columns: repeat(2, 1fr);
          }

          .lms-actions label {
            width: 100%;
          }

          .lms-small-row,
          .lms-tr {
            grid-template-columns: 1fr;
          }

          .lms-tr span:last-child {
            grid-template-columns: 1fr 32px;
          }

          .lms-laptop-art {
            min-height: 170px;
          }
        }
      `}</style>

      <div className="lms-shell">
        <motion.header className="lms-header" initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
          <div className="lms-brand">
            <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
            <div>
              <h2>DesireInfoWeb</h2>
              <p>Your Extended <span>Technology Partner</span></p>
            </div>
          </div>

          <div className="lms-stats lms-glass">
            {stats.map((item) => <StatPill key={item.label} {...item} />)}
          </div>

          <div className="lms-partners">
            <div className="lms-partner lms-glass">
              <MicrosoftMark />
              <span>Microsoft<br />Solutions Partner</span>
            </div>
            <div className="lms-partner lms-glass">
              <M365Mark />
              <span>Built on<br />Microsoft 365</span>
            </div>
          </div>
        </motion.header>

        <div className="lms-main">
          <motion.aside className="lms-left" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.64 }} viewport={{ once: true }}>
            <div>
              <h1>Learning<br /><span>Management</span><span>System</span></h1>
              <h2>Learn. Grow. Succeed. Anywhere. Anytime.</h2>
              <p>A comprehensive LMS platform for corporate training, academic education, and compliance learning with powerful tools for instructors, learners, and administrators.</p>
              <div className="lms-feature-grid">
                {featureCards.map((item, index) => <FeatureCard key={item.title} index={index} {...item} />)}
              </div>
            </div>
            <LearningIllustration />
          </motion.aside>

          <DashboardMockup />

          <aside className="lms-right">
            {useCases.map((item, index) => <UseCaseCard key={item.title} index={index} {...item} />)}
          </aside>
        </div>

        <BottomArea />
      </div>
    </section>
  );
}
