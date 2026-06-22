import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Cloud,
  FileCheck2,
  GraduationCap,
  Lightbulb,
  Mail,
  Network,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  ThumbsUp,
  UserRoundCheck,
  UsersRound,
  Zap,
} from 'lucide-react';

const stats = [
  { icon: Boxes, value: '6', label: 'Enterprise Products' },
  { icon: UserRoundCheck, value: '500+', label: 'Happy Clients' },
  { icon: UsersRound, value: '50K+', label: 'Users Worldwide' },
  { icon: Target, value: '99.9%', label: 'System Uptime' },
  { icon: Clock3, value: '24/7', label: 'Support' },
  { icon: ThumbsUp, value: '100%', label: 'Client Satisfaction' },
];

const benefits = [
  {
    icon: Sparkles,
    title: 'Modern & Scalable',
    text: 'Built with latest technologies for high performance and scalability.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    text: 'Enterprise-grade security with role-based access and data protection.',
  },
  {
    icon: Lightbulb,
    title: 'Smart & Intelligent',
    text: 'AI-powered insights and automation to drive better decisions.',
  },
  {
    icon: Zap,
    title: 'Easy to Integrate',
    text: 'Seamless integration with Microsoft ecosystem and third-party tools.',
  },
  {
    icon: Cloud,
    title: 'Cloud Ready',
    text: 'Built on Microsoft Azure for reliability, availability, and global scale.',
  },
];

const products = [
  {
    number: '01',
    title: 'Project Management',
    tagline: 'Plan. Track. Deliver.',
    description:
      'End-to-end project management solution to plan tasks, track progress, manage resources, and deliver projects on time.',
    features: [
      'Task & Milestone Management',
      'Gantt Charts & Timeline',
      'Resource Allocation',
      'Budget & Cost Tracking',
      'Real-time Collaboration',
    ],
    visual: 'project',
    Icon: BriefcaseBusiness,
  },
  {
    number: '02',
    title: 'LMS (Learning Management System)',
    tagline: 'Learn. Grow. Succeed.',
    description:
      'A complete learning platform to create courses, manage learners, track progress, and deliver engaging learning experiences.',
    features: [
      'Course Management',
      'Live Classes & Webinars',
      'Assessments & Quizzes',
      'Certificates & Badges',
      'Learner Analytics',
    ],
    visual: 'lms',
    Icon: GraduationCap,
  },
  {
    number: '03',
    title: 'Audit System',
    tagline: 'Evaluate. Ensure. Improve.',
    description:
      'Streamline audit processes, ensure compliance, manage findings, and track remediation with full transparency.',
    features: [
      'Audit Planning & Scheduling',
      'Checklist & Observations',
      'Risk & Compliance Management',
      'Corrective Actions',
      'Audit Reports & Analytics',
    ],
    visual: 'audit',
    Icon: FileCheck2,
  },
  {
    number: '04',
    title: 'Org Chart',
    tagline: 'Visualize. Organize. Align.',
    description:
      'Interactive organizational charts to visualize hierarchy, roles, and reporting structure across the organization.',
    features: [
      'Interactive Org Charts',
      'Department Management',
      'Role & Responsibility',
      'Drag & Drop Management',
      'Export & Share',
    ],
    visual: 'org',
    Icon: Network,
  },
  {
    number: '05',
    title: 'Employee Directory',
    tagline: 'Connect. Collaborate. Communicate.',
    description:
      'Centralized employee directory to connect teams, find experts, and improve internal communication.',
    features: [
      'Employee Profiles',
      'Advanced Search & Filters',
      'Department & Location',
      'Contact & Availability',
      'Team Collaboration',
    ],
    visual: 'directory',
    Icon: UsersRound,
  },
  {
    number: '06',
    title: 'New Joinee',
    tagline: 'Onboard. Engage. Empower.',
    description:
      'Digital onboarding platform to streamline new hire process and ensure a great start for every employee.',
    features: [
      'Onboarding Workflow',
      'Document Management',
      'Task & Activity Tracking',
      'Training & Orientation',
      'Welcome & Engagement',
    ],
    visual: 'joinee',
    Icon: UserRoundCheck,
  },
];

const platform = [
  ['Power Apps', '#7426f4'],
  ['Power Automate', '#3b82f6'],
  ['Power BI', '#f5b51b'],
  ['Dataverse', '#26a269'],
  ['Power Pages', '#7c3aed'],
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.055, duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  }),
};

function MicrosoftMark() {
  return (
    <span className="products-ms-mark" aria-hidden="true">
      {['#f25022', '#7fba00', '#00a4ef', '#ffb900'].map((color) => (
        <i key={color} style={{ backgroundColor: color }} />
      ))}
    </span>
  );
}

function MiniDashboard({ type }) {
  if (type === 'org') {
    return (
      <div className="products-preview org-preview">
        <div className="preview-head">
          <span>Organization Structure</span>
          <b />
        </div>
        <div className="org-node ceo">CEO</div>
        <div className="org-line vertical" />
        <div className="org-line horizontal" />
        {['CTO', 'COO', 'CFO'].map((role, index) => (
          <div key={role} className={`org-node child child-${index + 1}`}>
            {role}
          </div>
        ))}
      </div>
    );
  }

  if (type === 'directory') {
    return (
      <div className="products-preview directory-preview">
        <div className="search-row">
          <Search size={12} />
          <span>Search employees, team, skills...</span>
        </div>
        {['Jane Cooper', 'Ralph Edwards', 'Cameron Williamson'].map((name, index) => (
          <div key={name} className="person-row">
            <b style={{ background: ['#ff8fbf', '#7dd3fc', '#c4b5fd'][index] }} />
            <span>{name}</span>
            <i>{index === 1 ? 'Busy' : 'Available'}</i>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'joinee') {
    return (
      <div className="products-preview joinee-preview">
        <div className="metric-row">
          <span>35<br /><small>New Joiners</small></span>
          <span>12<br /><small>Completed</small></span>
          <span>5<br /><small>Pending</small></span>
        </div>
        <div className="stepper">
          {[1, 2, 3, 4].map((step) => <b key={step}>{step}</b>)}
        </div>
        <div className="joiner-list">
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }

  return (
    <div className={`products-preview ${type}-preview`}>
      <div className="metric-row">
        <span>{type === 'audit' ? '28' : type === 'lms' ? '120' : '32'}<br /><small>{type === 'audit' ? 'Audits' : type === 'lms' ? 'Courses' : 'Projects'}</small></span>
        <span>{type === 'audit' ? '16' : type === 'lms' ? '2,450' : '18'}<br /><small>{type === 'audit' ? 'Progress' : type === 'lms' ? 'Learners' : 'Active'}</small></span>
        <span>{type === 'audit' ? '8' : type === 'lms' ? '1,890' : '7'}<br /><small>Completed</small></span>
      </div>
      <div className="chart-grid">
        <div className="donut"><b>{type === 'audit' ? '85%' : '68%'}</b></div>
        <div className="bars">
          {[36, 58, 44, 74, 62].map((height, index) => (
            <i key={height + index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
      <div className="tiny-table">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function ProductProp({ type, Icon }) {
  return (
    <motion.div
      className={`product-prop ${type}-prop`}
      animate={{ y: [0, -7, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Icon size={30} />
    </motion.div>
  );
}

function ProductCard({ product, index }) {
  const { Icon } = product;

  return (
    <motion.article
      className="product-card"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="product-number">{product.number}</div>
      <div className="product-copy">
        <h3>{product.title}</h3>
        <p className="tagline">{product.tagline}</p>
        <p className="description">{product.description}</p>
        <ul>
          {product.features.map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={13} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button type="button">
          View Product
          <ArrowRight size={15} />
        </button>
      </div>
      <MiniDashboard type={product.visual} />
      <ProductProp type={product.visual} Icon={Icon} />
    </motion.article>
  );
}

function DecorativeCube({ side = 'left' }) {
  return (
    <motion.div
      className={`decor-cube decor-cube-${side}`}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <span />
      <b />
      <i />
    </motion.div>
  );
}

export default function Products() {
  return (
    <section className="products-page" id="products">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@500;600;700;800;900&display=swap');

        .products-page,
        .products-page * {
          box-sizing: border-box;
        }

        .products-page {
          --ink: #070064;
          --violet: #6d28ff;
          --violet-dark: #3613b9;
          --pink: #f43f9d;
          --blue: #2f65ff;
          --muted: #28227d;
          position: relative;
          overflow-x: hidden;
          overflow-y: hidden;
          isolation: isolate;
          min-height: 100vh;
          width: 100%;
          max-width: 100vw;
          padding: 22px clamp(14px, 1.5vw, 24px) 28px;
          font-family: "Inter", "Poppins", "Segoe UI", sans-serif;
          color: var(--ink);
          background:
            radial-gradient(circle at 12% 15%, rgba(244,63,157,.18), transparent 22%),
            radial-gradient(circle at 74% 6%, rgba(109,40,255,.2), transparent 28%),
            radial-gradient(circle at 82% 78%, rgba(47,101,255,.14), transparent 26%),
            linear-gradient(135deg, #fff 0%, #f4f0ff 48%, #fdf6ff 100%);
        }

        .products-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(109,40,255,.045) 1px, transparent 1px),
            linear-gradient(0deg, rgba(109,40,255,.04) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,.82), rgba(0,0,0,.18));
          pointer-events: none;
          z-index: -2;
        }

        .products-page::after {
          content: "";
          position: absolute;
          inset: auto 8% -18% 20%;
          height: 420px;
          background: radial-gradient(ellipse, rgba(109,40,255,.2), transparent 68%);
          filter: blur(28px);
          pointer-events: none;
          z-index: -1;
        }

        .products-shell {
          width: min(100%, 1500px);
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .products-glass {
          background: linear-gradient(180deg, rgba(255,255,255,.74), rgba(255,255,255,.42));
          border: 1px solid rgba(141,109,255,.28);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.9),
            0 20px 60px rgba(105,74,255,.12),
            0 0 0 1px rgba(255,255,255,.24);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .products-header {
          display: grid;
          grid-template-columns: 320px minmax(500px, 1fr) 332px;
          gap: 18px;
          align-items: center;
          margin-bottom: 28px;
        }

        .brand-lockup {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-lockup img {
          width: 62px;
          height: 62px;
          object-fit: contain;
          filter: drop-shadow(0 16px 24px rgba(109,40,255,.16));
        }

        .brand-lockup h2 {
          margin: 0;
          font-family: "Poppins", sans-serif;
          font-size: 29px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0;
        }

        .brand-lockup p {
          margin: 4px 0 0;
          font-size: 11px;
          font-weight: 700;
        }

        .brand-lockup p span {
          color: var(--pink);
        }

        .stats-bar {
          min-height: 64px;
          border-radius: 18px;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          align-items: center;
          padding: 8px 12px;
        }

        .stat-item {
          display: grid;
          grid-template-columns: 30px 1fr;
          gap: 7px;
          align-items: center;
          min-width: 0;
          padding: 0 10px;
          border-left: 1px solid rgba(109,40,255,.16);
        }

        .stat-item:first-child {
          border-left: none;
        }

        .stat-item svg {
          color: var(--violet);
          filter: drop-shadow(0 0 10px rgba(109,40,255,.32));
        }

        .stat-item strong {
          display: block;
          font-size: 18px;
          line-height: 1;
          font-weight: 900;
        }

        .stat-item span {
          display: block;
          margin-top: 3px;
          font-size: 8px;
          font-weight: 800;
          line-height: 1.15;
        }

        .partner-badges {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .partner-badge {
          min-height: 64px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 13px;
          font-weight: 900;
        }

        .partner-badge span:last-child {
          font-size: 12px;
          line-height: 1.15;
        }

        .products-ms-mark {
          width: 28px;
          height: 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          flex: none;
        }

        .products-ms-mark i {
          display: block;
        }

        .power-mark {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: linear-gradient(135deg, #d91d86, #ff4fb8);
          transform: rotate(45deg);
          box-shadow: 0 12px 25px rgba(244,63,157,.22);
        }

        .power-mark i {
          width: 12px;
          height: 12px;
          border: 3px solid white;
          border-radius: 3px;
          display: block;
        }

        .products-layout {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          min-width: 0;
        }

        .intro-sidebar {
          position: relative;
          min-height: 704px;
        }

        .intro-sidebar h1 {
          margin: 0;
          font-family: "Poppins", sans-serif;
          font-size: 30px;
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: 0;
          background: linear-gradient(115deg, #070064 0%, #4934e8 56%, #f43f9d 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .intro-sidebar h1 span {
          white-space: nowrap;
        }

        .intro-sidebar h2 {
          margin: 15px 0 0;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 900;
        }

        .intro-sidebar .intro-text {
          margin: 21px 0 20px;
          font-size: 11.5px;
          line-height: 1.46;
          font-weight: 800;
        }

        .benefits-list {
          display: grid;
          gap: 10px;
          width: 218px;
        }

        .benefit-card {
          min-height: 57px;
          border-radius: 16px;
          padding: 9px 10px;
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 8px;
          align-items: center;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .benefit-card:hover,
        .product-card:hover,
        .platform-strip:hover,
        .contact-card:hover {
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 26px 70px rgba(105,74,255,.18),
            0 0 0 1px rgba(255,255,255,.3);
        }

        .benefit-icon {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: var(--violet);
          background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(246,240,255,.62));
          border: 1px solid rgba(109,40,255,.2);
        }

        .benefit-card h3 {
          margin: 0;
          font-size: 8.6px;
          font-weight: 900;
        }

        .benefit-card p {
          margin: 3px 0 0;
          font-size: 7.1px;
          line-height: 1.24;
          font-weight: 700;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          min-width: 0;
        }

        .product-card {
          position: relative;
          min-height: 330px;
          overflow: hidden;
          border-radius: 22px;
          padding: 16px 16px 15px;
          background:
            radial-gradient(circle at 84% 16%, rgba(255,255,255,.86), transparent 28%),
            linear-gradient(180deg, rgba(255,255,255,.72), rgba(255,255,255,.34));
          border: 1px solid rgba(141,109,255,.26);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.86),
            0 20px 60px rgba(105,74,255,.12);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition: box-shadow .3s ease, border-color .3s ease;
        }

        .product-card::after {
          content: "";
          position: absolute;
          right: -48px;
          bottom: -52px;
          width: 220px;
          height: 170px;
          border-radius: 48%;
          background: radial-gradient(ellipse, rgba(109,40,255,.22), transparent 68%);
          pointer-events: none;
        }

        .product-number {
          position: absolute;
          left: 16px;
          top: 16px;
          width: 32px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: #fff;
          font-size: 16px;
          font-weight: 900;
          background: linear-gradient(160deg, #243bff, #741df2);
          box-shadow: 0 12px 28px rgba(109,40,255,.32);
          z-index: 2;
        }

        .product-copy {
          position: relative;
          z-index: 2;
          width: 51%;
          min-width: 188px;
          height: 298px;
          display: flex;
          flex-direction: column;
          padding-top: 7px;
        }

        .product-copy h3 {
          margin: 0 0 8px 42px;
          min-height: 48px;
          font-size: 15px;
          line-height: 1.1;
          font-weight: 900;
          overflow-wrap: anywhere;
        }

        .product-copy .tagline {
          min-height: 26px;
          margin: 0 0 12px 42px;
          color: #461aff;
          font-size: 10.6px;
          font-weight: 800;
          line-height: 1.16;
        }

        .product-copy .description {
          min-height: 48px;
          margin: 0 0 12px;
          font-size: 7.8px;
          line-height: 1.36;
          font-weight: 700;
          max-width: 180px;
        }

        .product-copy ul {
          list-style: none;
          display: grid;
          gap: 7px;
          margin: 0 0 12px;
          padding: 0;
        }

        .product-copy li {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 7.7px;
          line-height: 1.2;
          font-weight: 800;
          overflow-wrap: anywhere;
        }

        .product-copy li svg {
          color: var(--violet);
          flex: none;
          margin-top: -1px;
        }

        .product-copy button,
        .products-cta button {
          border: 0;
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 10px;
          font-weight: 900;
          background: linear-gradient(100deg, #3428e9 0%, #7a32ff 48%, #ff4f9d 100%);
          box-shadow: 0 14px 32px rgba(109,40,255,.28);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .product-copy button {
          min-width: 106px;
          height: 29px;
          margin-top: auto;
          padding: 0 12px;
          font-size: 9px;
        }

        .product-copy button:hover,
        .products-cta button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(244,63,157,.3);
        }

        .products-preview {
          position: absolute;
          right: 12px;
          bottom: 44px;
          z-index: 1;
          width: 47%;
          height: 184px;
          border-radius: 17px;
          padding: 11px;
          background: linear-gradient(160deg, rgba(255,255,255,.78), rgba(245,238,255,.72));
          border: 1px solid rgba(141,109,255,.22);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.92),
            0 18px 44px rgba(109,40,255,.16);
          transform: perspective(700px) rotateY(-7deg) rotateX(2deg);
        }

        .preview-head,
        .search-row,
        .metric-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .preview-head {
          margin-bottom: 12px;
          font-size: 8.2px;
          font-weight: 900;
        }

        .preview-head b {
          width: 28px;
          height: 6px;
          border-radius: 99px;
          background: rgba(109,40,255,.18);
        }

        .metric-row span {
          flex: 1;
          border-radius: 9px;
          padding: 7px 5px;
          text-align: center;
          color: #191176;
          background: rgba(255,255,255,.58);
          font-size: 12px;
          font-weight: 900;
          line-height: 1.04;
        }

        .metric-row small {
          font-size: 6px;
          font-weight: 800;
        }

        .chart-grid {
          margin-top: 10px;
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 9px;
          align-items: center;
        }

        .donut {
          width: 66px;
          height: 66px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background:
            radial-gradient(circle, #fff 42%, transparent 44%),
            conic-gradient(#7138ff 0 68%, #ec7cff 68% 82%, rgba(109,40,255,.14) 82% 100%);
        }

        .donut b {
          font-size: 12px;
        }

        .bars {
          height: 66px;
          display: flex;
          align-items: end;
          gap: 8px;
          padding: 9px 10px;
          border-radius: 12px;
          background: rgba(255,255,255,.42);
        }

        .bars i {
          flex: 1;
          min-width: 8px;
          border-radius: 8px 8px 2px 2px;
          background: linear-gradient(180deg, #ff6fcb, #6d28ff);
        }

        .tiny-table {
          margin-top: 11px;
          display: grid;
          gap: 6px;
        }

        .tiny-table i,
        .joiner-list i {
          display: block;
          height: 8px;
          border-radius: 999px;
          background: rgba(109,40,255,.14);
        }

        .lms-preview .tiny-table i:nth-child(2),
        .directory-preview .person-row:nth-child(3) {
          width: 80%;
        }

        .org-preview {
          display: grid;
          place-items: center;
        }

        .org-node {
          position: absolute;
          display: grid;
          place-items: center;
          min-width: 54px;
          height: 30px;
          border-radius: 9px;
          color: #fff;
          font-size: 8px;
          font-weight: 900;
          background: linear-gradient(135deg, #6d28ff, #9d6cff);
          box-shadow: 0 14px 28px rgba(109,40,255,.2);
        }

        .org-node.ceo {
          top: 48px;
        }

        .org-node.child {
          bottom: 32px;
        }

        .child-1 { left: 22px; }
        .child-2 { left: 50%; transform: translateX(-50%); }
        .child-3 { right: 22px; }

        .org-line {
          position: absolute;
          background: rgba(109,40,255,.35);
        }

        .org-line.vertical {
          top: 80px;
          width: 2px;
          height: 58px;
        }

        .org-line.horizontal {
          top: 136px;
          width: 68%;
          height: 2px;
        }

        .directory-preview .search-row {
          min-height: 26px;
          padding: 0 9px;
          border-radius: 9px;
          color: rgba(7,0,100,.58);
          background: rgba(255,255,255,.62);
          font-size: 7.5px;
          font-weight: 800;
        }

        .person-row {
          margin-top: 11px;
          display: grid;
          grid-template-columns: 25px 1fr 48px;
          gap: 8px;
          align-items: center;
          min-height: 30px;
          font-size: 8px;
          font-weight: 900;
        }

        .person-row b {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }

        .person-row i {
          padding: 4px 5px;
          border-radius: 99px;
          font-style: normal;
          font-size: 6.5px;
          color: #15965c;
          background: rgba(22,163,74,.1);
          text-align: center;
        }

        .stepper {
          position: relative;
          display: flex;
          justify-content: space-between;
          margin: 22px 8px 20px;
        }

        .stepper::before {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          top: 50%;
          height: 3px;
          background: linear-gradient(90deg, #6d28ff, #aa6cff);
          transform: translateY(-50%);
        }

        .stepper b {
          position: relative;
          z-index: 1;
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: #6d28ff;
          font-size: 8px;
        }

        .product-prop {
          position: absolute;
          right: 30px;
          bottom: 14px;
          z-index: 3;
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          color: #fff;
          background: linear-gradient(145deg, #2f1dbb, #7c3aed 55%, #d946ef);
          box-shadow: 0 18px 40px rgba(109,40,255,.28);
          transform: perspective(600px) rotateX(58deg);
        }

        .audit-prop,
        .lms-prop {
          right: 72px;
        }

        .products-bottom {
          display: grid;
          grid-template-columns: 390px minmax(420px, 1fr) 290px 150px;
          gap: 24px;
          align-items: end;
          margin-top: 18px;
        }

        .platform-strip {
          min-height: 76px;
          border-radius: 18px;
          padding: 11px 16px;
        }

        .platform-strip h3 {
          margin: 0 0 8px;
          text-align: center;
          font-size: 12px;
          font-weight: 900;
        }

        .platform-items {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }

        .platform-item {
          display: grid;
          place-items: center;
          gap: 4px;
          min-height: 42px;
          border-left: 1px solid rgba(109,40,255,.16);
          font-size: 8px;
          font-weight: 900;
          text-align: center;
        }

        .platform-item:first-child {
          border-left: none;
        }

        .platform-icon {
          width: 22px;
          height: 22px;
          border-radius: 7px;
          background: linear-gradient(135deg, var(--platform-color), rgba(255,255,255,.42));
          box-shadow: 0 9px 20px rgba(109,40,255,.18);
          transform: rotate(45deg);
        }

        .products-cta button {
          width: 100%;
          min-height: 70px;
          border-radius: 15px;
          padding: 0 28px;
          font-size: 20px;
          justify-content: space-between;
        }

        .contact-card {
          min-height: 76px;
          border-radius: 18px;
          display: grid;
          grid-template-columns: 1fr 76px;
          gap: 12px;
          align-items: center;
          padding: 12px 13px;
        }

        .contact-lines {
          display: grid;
          gap: 8px;
          font-size: 11px;
          font-weight: 900;
        }

        .contact-lines span {
          display: flex;
          gap: 8px;
          align-items: center;
          min-width: 0;
        }

        .qr {
          width: 68px;
          height: 68px;
          border-radius: 8px;
          border: 4px solid #fff;
          background:
            repeating-linear-gradient(90deg, #100c55 0 5px, #fff 5px 10px),
            repeating-linear-gradient(0deg, rgba(0,0,0,.55) 0 5px, transparent 5px 10px);
          background-blend-mode: multiply;
          box-shadow: 0 10px 20px rgba(0,0,0,.12);
        }

        .decor-cube {
          pointer-events: none;
          position: relative;
          min-height: 108px;
          display: grid;
          place-items: center;
        }

        .decor-cube span {
          width: 70px;
          height: 70px;
          display: block;
          border-radius: 15px;
          background: linear-gradient(145deg, rgba(255,255,255,.9), #7c3aed);
          box-shadow:
            0 28px 55px rgba(109,40,255,.22),
            inset 0 0 28px rgba(255,255,255,.52);
          transform: perspective(500px) rotateX(56deg) rotateZ(45deg);
        }

        .decor-cube b,
        .decor-cube i {
          position: absolute;
          display: block;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(109,40,255,.38), transparent 68%);
        }

        .decor-cube b {
          width: 132px;
          height: 44px;
          bottom: 8px;
          filter: blur(4px);
        }

        .decor-cube i {
          width: 108px;
          height: 28px;
          bottom: 25px;
          opacity: .66;
        }

        @media (max-width: 1280px) {
          .products-header,
          .products-layout,
          .products-bottom {
            grid-template-columns: 1fr;
          }

          .partner-badges {
            max-width: 520px;
          }

          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .intro-sidebar {
            min-height: auto;
          }

          .benefits-list {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }

          .products-bottom {
            align-items: stretch;
          }

          .decor-cube-left {
            display: none;
          }
        }

        @media (max-width: 860px) {
          .products-page {
            padding: 18px 14px 24px;
          }

          .stats-bar,
          .benefits-list,
          .product-grid,
          .platform-items,
          .partner-badges {
            grid-template-columns: 1fr;
          }

          .stats-bar {
            gap: 8px;
          }

          .stat-item {
            border-left: none;
            border-top: 1px solid rgba(109,40,255,.14);
            padding: 9px;
          }

          .stat-item:first-child {
            border-top: none;
          }

          .product-card {
            min-height: 560px;
          }

          .product-copy {
            width: 100%;
            min-width: 0;
            height: auto;
          }

          .products-preview {
            left: 18px;
            right: 18px;
            bottom: 70px;
            width: auto;
            transform: none;
          }

          .product-prop {
            right: 28px;
          }

          .products-cta button {
            font-size: 16px;
            padding: 0 18px;
          }

          .contact-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="products-shell">
        <motion.header
          className="products-header"
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="brand-lockup">
            <img src="/logo.png" alt="DesireInfoWeb Logo" />
            <div>
              <h2>DesireInfoWeb</h2>
              <p>Your Extended <span>Technology Partner</span></p>
            </div>
          </div>

          <div className="stats-bar products-glass">
            {stats.map(({ icon: Icon, value, label }) => (
              <div className="stat-item" key={label}>
                <Icon size={24} strokeWidth={2.2} />
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="partner-badges">
            <div className="partner-badge products-glass">
              <MicrosoftMark />
              <span>Microsoft<br />Solutions Partner</span>
            </div>
            <div className="partner-badge products-glass">
              <span className="power-mark"><i /></span>
              <span>Built with<br />Microsoft Power Platform</span>
            </div>
          </div>
        </motion.header>

        <div className="products-layout">
          <motion.aside
            className="intro-sidebar"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <h1><span>Our Innovative</span><br />Products</h1>
            <h2>Powerful Solutions.<br />Built for Modern Enterprises.</h2>
            <p className="intro-text">
              Explore our suite of enterprise-grade products designed to streamline operations, boost productivity, and drive digital transformation.
            </p>

            <div className="benefits-list">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <motion.div
                  className="benefit-card products-glass"
                  key={title}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="benefit-icon"><Icon size={18} /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <DecorativeCube side="left" />
          </motion.aside>

          <main className="product-grid">
            {products.map((product, index) => (
              <ProductCard key={product.title} product={product} index={index} />
            ))}
          </main>
        </div>

        <motion.footer
          className="products-bottom"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58 }}
          viewport={{ once: true }}
        >
          <div className="platform-strip products-glass">
            <h3>Built with Microsoft Power Platform</h3>
            <div className="platform-items">
              {platform.map(([label, color]) => (
                <div className="platform-item" key={label}>
                  <span className="platform-icon" style={{ '--platform-color': color }} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="products-cta">
            <button type="button">
              <span>Explore Our Products. Transform Your Business.</span>
              <ArrowRight size={26} />
            </button>
          </div>

          <div className="contact-card products-glass">
            <div className="contact-lines">
              <span><BookOpen size={15} />www.desireinfoweb.com</span>
              <span><Mail size={15} />vijay@desireinfoweb.com</span>
              <span><Phone size={15} />+91-8780468807</span>
            </div>
            <div className="qr" aria-label="QR code placeholder" />
          </div>

          <DecorativeCube side="right" />
        </motion.footer>
      </div>
    </section>
  );
}
