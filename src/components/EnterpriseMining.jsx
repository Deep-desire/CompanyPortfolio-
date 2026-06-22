import { motion } from 'framer-motion';
import {
  BarChart3,
  BriefcaseBusiness,
  ChevronRight,
  ClipboardList,
  Coins,
  Database,
  FileText,
  Folder,
  Globe2,
  HardHat,
  LockKeyhole,
  Mail,
  Monitor,
  MoreHorizontal,
  Phone,
  ShieldCheck,
  Target,
  UploadCloud,
  UsersRound,
  Workflow,
} from 'lucide-react';

const headerPills = [
  { icon: Workflow, title: 'End-to-End', label: 'Project Create to Close' },
  { icon: BarChart3, title: 'Real-time', label: 'Analytics' },
  { icon: FileText, title: 'Document', label: 'Management' },
  { icon: UsersRound, title: 'Labor & BBBEE', label: 'Tracking' },
  { icon: Coins, title: 'Financial', label: 'Oversight' },
  { icon: LockKeyhole, title: 'Role-based', label: 'Access' },
  { icon: ShieldCheck, title: 'Secure, Scalable', label: '& Compliant' },
];

const heroStats = [
  { icon: ShieldCheck, value: '24', label: 'Active Projects' },
  { icon: ClipboardList, value: 'R 2.45B', label: 'Total Contract Value' },
  { icon: UsersRound, value: '1,248', label: 'Entities Managed' },
  { icon: Workflow, value: '15.6K', label: 'Labor Records' },
  { icon: Target, value: '98%', label: 'Target Compliance' },
];

const dashKpis = [
  ['Total Projects', '24', '+12% vs last month', Target],
  ['Total Contract Value', 'R 2.45B', '+8.7% vs last month', BriefcaseBusiness],
  ['Total Labor Records', '15,623', '+18.4% vs last month', UsersRound],
  ['Target Compliance', '98%', '+6.3% vs last month', ShieldCheck],
  ['Documents', '8,742', '+15.2% vs last month', FileText],
];

const modules = [
  { no: '01', title: 'Centralized Project Dashboard', type: 'project' },
  { no: '02', title: 'Advanced Project Configuration', type: 'target' },
  { no: '03', title: 'Smart Import & Data Management', type: 'import' },
  { no: '04', title: 'Entity Verification & Document Management', type: 'entity' },
  { no: '05', title: 'Document & Note Control', type: 'docs' },
  { no: '06', title: 'Power BI Report', type: 'powerbi' },
];

const benefits = [
  ['End-to-End', 'Lifecycle Management', Workflow],
  ['Real-time', 'Visibility', BarChart3],
  ['Improved Compliance', '& Traceability', ShieldCheck],
  ['Data-driven', 'Decision Making', Monitor],
  ['Reduced Risk', '& Cost', Target],
  ['Scalable & Future', 'Ready Platform', LockKeyhole],
];

function GlassCard({ className = '', children }) {
  return <div className={`em-glass ${className}`}>{children}</div>;
}

function MicrosoftMark() {
  return <span className="em-ms-mark" aria-hidden="true"><i /><i /><i /><i /></span>;
}

function M365Mark() {
  return <span className="em-m365-mark" aria-hidden="true"><i /></span>;
}

function PartnerBadge({ type }) {
  return (
    <GlassCard className="em-partner">
      {type === 'microsoft' ? <MicrosoftMark /> : <M365Mark />}
      <span>{type === 'microsoft' ? 'Microsoft' : 'Built on'}<br />{type === 'microsoft' ? 'Solutions Partner' : 'Microsoft 365'}</span>
    </GlassCard>
  );
}

function HeaderPill({ icon: Icon, title, label }) {
  return <span className="em-pill"><Icon size={23} /><b>{title}</b><small>{label}</small></span>;
}

function Header() {
  return (
    <motion.header className="em-header" initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
      <div className="em-brand">
        <img src="/logo.png" alt="DesireInfoWeb - Your Extended Technology Partner" />
        <span><strong>DesireInfoWeb</strong><small>Your Extended <b>Technology Partner</b></small></span>
      </div>
      <GlassCard className="em-pillbar">{headerPills.map((item) => <HeaderPill key={item.title} {...item} />)}</GlassCard>
      <div className="em-partners"><PartnerBadge type="microsoft" /><PartnerBadge type="m365" /></div>
    </motion.header>
  );
}

function CaseStudyHero() {
  return (
    <motion.aside className="em-hero" initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <p className="em-label">CASE STUDY</p>
      <h1>Enterprise Mining &<br />Construction <span>Project<br />Management System</span></h1>
      <div className="em-info"><b>Client:</b><strong>Mining & Construction<br />Project Management System</strong><HardHat size={54} /></div>
      <div className="em-platform"><b>Platform:</b><strong>SharePoint Framework (SPFx)<br />& Power BI</strong><span><i className="sp" /><i className="bi" /></span></div>
      <p className="em-desc">A unified digital platform that manages the entire lifecycle of mining projects from contract creation to labor tracking, BBBEE targets, document management, and real-time analytics.</p>
    </motion.aside>
  );
}

function DarkSidebar() {
  const items = ['Dashboard', 'Projects', 'Contracts', 'Labor Tracking', 'Entities', 'Documents', 'Reports (Power BI)', 'Notes', 'Configuration', 'Users & Roles', 'Settings'];
  return (
    <aside className="em-dash-side">
      <h3><span>MC</span>Mining<br />& Construction</h3>
      <nav>{items.map((item, index) => <b className={index === 0 ? 'active' : ''} key={item}><ClipboardList size={14} />{item}</b>)}</nav>
    </aside>
  );
}

function DashboardKpi({ item }) {
  const [label, value, trend, Icon] = item;
  return <div className="em-dkpi"><span><Icon size={20} /></span><small>{label}</small><strong>{value}</strong><em>{trend}</em></div>;
}

// Visual layout components inside CommandCenter
function Donut() {
  return (
    <div className="em-panel em-donut-panel">
      <h3>Projects by Status</h3>
      <div className="em-donut"><b>24</b><small>Total</small></div>
      <ul><li>In Progress 14 (58%)</li><li>Planning 5 (21%)</li><li>On Hold 3 (13%)</li><li>Completed 2 (8%)</li></ul>
    </div>
  );
}

function ContractChart() {
  return (
    <div className="em-panel em-contract">
      <h3>Contract Value (Excl. VAT)</h3>
      <strong>R 2.45B</strong><em>+8.7% vs last month</em>
      <div className="em-linechart">{Array.from({ length: 12 }).map((_, i) => <i key={i} />)}</div>
      <p>Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec</p>
    </div>
  );
}

function LocationMap() {
  return (
    <div className="em-panel em-map">
      <h3>Top Locations</h3>
      <div className="em-sa-map"><i /><i /><i /><i /><i /><i /></div>
      <ul><li>Limpopo 8 Projects</li><li>Mpumalanga 6 Projects</li><li>Northern Cape 4 Projects</li><li>Gauteng 3 Projects</li><li>Free State 2 Projects</li><li>North West 1 Project</li></ul>
    </div>
  );
}

function ProjectCommandCenter() {
  return (
    <motion.section className="em-dashboard" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
      <DarkSidebar />
      <main>
        <header><div><h2>Project Command Center</h2><p>Real-time overview of all mining & construction projects</p></div><button>All Projects <ChevronRight size={14} /></button><button>This Month <ChevronRight size={14} /></button><MoreHorizontal size={20} /></header>
        <div className="em-dkpis">{dashKpis.map((item) => <DashboardKpi key={item[0]} item={item} />)}</div>
        <div className="em-dash-grid"><Donut /><ContractChart /><LocationMap /></div>
      </main>
    </motion.section>
  );
}

function MiningIllustration() {
  return (
    <div className="em-mining-art" aria-hidden="true">
      <span className="sun" /><span className="mountain a" /><span className="mountain b" /><span className="belt" /><span className="truck"><i /></span><span className="excavator"><i /><b /></span><span className="float-card" /><span className="float-card two" />
    </div>
  );
}

function QuickActions() {
  const actions = [['New Project', BriefcaseBusiness], ['New Contract', FileText], ['Import Data', Database], ['Upload Document', UploadCloud], ['Add Entity', UsersRound], ['View Reports', BarChart3]];
  return <GlassCard className="em-actions"><h3>Quick Actions</h3><div>{actions.map(([label, Icon]) => <button key={label}><Icon size={24} /><span>{label}</span></button>)}</div></GlassCard>;
}

function RightPanel() {
  return <aside className="em-right"><MiningIllustration /><QuickActions /></aside>;
}

function ModuleContent({ type }) {
  if (type === 'project') {
    return (
      <>
        <div className="em-mini-table large">
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Contract No.</th>
                <th>Auditor</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Raj Tswande PS + Next Phase</td>
                <td>MC-2024-001</td>
                <td>Deloitte</td>
                <td>Limpopo</td>
                <td><span className="status status-progress">In Progress</span></td>
              </tr>
              <tr>
                <td>Thabazimbi Mining Project</td>
                <td>MC-2024-002</td>
                <td>KPMG</td>
                <td>Limpopo</td>
                <td><span className="status status-planning">Planning</span></td>
              </tr>
              <tr>
                <td>Mokopane Expansion</td>
                <td>MC-2024-003</td>
                <td>PwC</td>
                <td>Limpopo</td>
                <td><span className="status status-progress">In Progress</span></td>
              </tr>
              <tr>
                <td>Northern Cape Opencast</td>
                <td>MC-2024-004</td>
                <td>BDO</td>
                <td>N. Cape</td>
                <td><span className="status status-hold">On Hold</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="em-financial-overview">
          <h4>Financial Overview (Excl. VAT)</h4>
          <div className="em-finance">
            <div>
              <small>Total Contract Value</small>
              <b>R 2.45B</b>
            </div>
            <div>
              <small>Total Paid to Date</small>
              <b>R 1.32B</b>
            </div>
            <div>
              <small>Commitments</small>
              <b>R 0.78B</b>
            </div>
            <div>
              <small>Balance</small>
              <b>R 0.35B</b>
            </div>
          </div>
        </div>
        <ul>
          <li>Lists critical data at a glance: Project, Contract, Auditor, Location & Status.</li>
          <li>Financial oversight with high-precision formatting.</li>
        </ul>
        <div className="em-truck-mini">
          <div className="truck-body">
            <div className="bed" />
            <div className="cabin" />
            <div className="wheel wheel-1" />
            <div className="wheel wheel-2" />
          </div>
        </div>
      </>
    );
  }

  if (type === 'target') {
    return (
      <>
        <div className="em-target-header">
          <h4>Target Area on Configuration</h4>
        </div>
        <div className="em-mini-table target">
          <table>
            <thead>
              <tr>
                <th rowSpan="2">Target Area</th>
                <th colSpan="2">Contractors %</th>
                <th colSpan="2">Suppliers %</th>
                <th colSpan="2">Local Enterprise %</th>
                <th colSpan="2">Labour %</th>
              </tr>
              <tr>
                <th>M</th>
                <th>F</th>
                <th>M</th>
                <th>F</th>
                <th>M</th>
                <th>F</th>
                <th>M</th>
                <th>F</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Local Area - Ward 6</td>
                <td>60</td>
                <td>40</td>
                <td>79</td>
                <td>20</td>
                <td>75</td>
                <td>25</td>
                <td>65</td>
                <td>35</td>
              </tr>
              <tr>
                <td>Regional Area</td>
                <td>50</td>
                <td>50</td>
                <td>60</td>
                <td>40</td>
                <td>70</td>
                <td>30</td>
                <td>50</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Provincial Area</td>
                <td>40</td>
                <td>60</td>
                <td>50</td>
                <td>50</td>
                <td>60</td>
                <td>40</td>
                <td>50</td>
                <td>50</td>
              </tr>
              <tr>
                <td>National Area</td>
                <td>30</td>
                <td>70</td>
                <td>40</td>
                <td>60</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="em-target-visual">
          <div className="em-chart-mini">
            <div className="bar" style={{ height: '30%' }} />
            <div className="bar" style={{ height: '55%' }} />
            <div className="bar" style={{ height: '80%' }} />
            <div className="bar" style={{ height: '45%' }} />
          </div>
          <div className="em-map-mini">
            <i className="pin pin-1" />
            <i className="pin pin-2" />
            <i className="pin pin-3" />
            <i className="pin pin-4" />
          </div>
        </div>
        
        <ul>
          <li>Define multiple geographical target areas.</li>
          <li>Track Male vs. Female participation %.</li>
          <li>Coverage for Contractors, Suppliers, Local Enterprise & Labour.</li>
        </ul>
      </>
    );
  }

  if (type === 'import') {
    return (
      <>
        <div className="em-download-template">
          <small>Download Template</small>
          <div className="em-excel-card">
            <div className="excel-icon">X</div>
            <div className="excel-info">
              <strong>Contractor_Worksheet_Template_Homologated.xlsx</strong>
              <span>Excel Worksheet • 120 KB</span>
            </div>
          </div>
        </div>
        <div className="em-import-zone">
          <small>Import Data</small>
          <div className="em-dropzone">
            <UploadCloud size={20} />
            <p>Drag and drop your file here<br />or</p>
            <button>Browse Files</button>
          </div>
        </div>
        <ul>
          <li>Pre-formatted Excel templates ensure structured, accurate data.</li>
          <li>Minimizes formatting errors and speeds up data onboarding.</li>
        </ul>
      </>
    );
  }

  if (type === 'entity') {
    return (
      <>
        <div className="em-entity-list">
          <small>Entity List</small>
          <div className="em-mini-table entity">
            <table>
              <thead>
                <tr>
                  <th>Entity Name</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ABC Mining (Pty) Ltd</td>
                  <td>Contractor</td>
                  <td><span className="status status-verified">Verified</span></td>
                </tr>
                <tr>
                  <td>Thaba Holdings (Pty) Ltd</td>
                  <td>Supplier</td>
                  <td><span className="status status-verified">Verified</span></td>
                </tr>
                <tr>
                  <td>Bright Future (Pty) Ltd</td>
                  <td>Labour</td>
                  <td><span className="status status-pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Northern Civils (Pty) Ltd</td>
                  <td>Contractor</td>
                  <td><span className="status status-verified">Verified</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="em-linked-docs">
          <small>Linked Documents</small>
          <div className="em-doc-item">
            <FileText size={12} className="doc-icon" />
            <div className="doc-info">
              <strong>Company Registration.pdf</strong>
              <span>PDF • 1.2 MB • uploaded on 12 May 2024</span>
            </div>
          </div>
          <div className="em-doc-item">
            <FileText size={12} className="doc-icon" />
            <div className="doc-info">
              <strong>B-BBEE Certificate.pdf</strong>
              <span>PDF • 2.4 MB • uploaded on 12 May 2024</span>
            </div>
          </div>
          <div className="em-doc-item">
            <FileText size={12} className="doc-icon" />
            <div className="doc-info">
              <strong>ID Copy - Director.pdf</strong>
              <span>PDF • 512 KB • uploaded on 12 May 2024</span>
            </div>
          </div>
        </div>
        <ul>
          <li>Centralized entity list with verification.</li>
          <li>Upload & link ID, certificates, and documents.</li>
          <li>Maintain compliance & traceability.</li>
        </ul>
        <ShieldCheck className="em-shield-watermark" size={48} />
      </>
    );
  }

  if (type === 'docs') {
    return (
      <>
        <div className="em-docs-tabs">
          <button className="tab active">Documents</button>
          <button className="tab">Notes</button>
        </div>
        <div className="em-docs-actions">
          <button className="btn-add">+ Add Folder</button>
          <button className="btn-upload"><UploadCloud size={10} /> Upload File</button>
        </div>
        <div className="em-folder-list">
          <div className="em-folder-item">
            <span><Folder size={10} /> 01. Contracts</span>
            <small>15 Files</small>
          </div>
          <div className="em-folder-item">
            <span><Folder size={10} /> 02. Correspondence</span>
            <small>28 Files</small>
          </div>
          <div className="em-folder-item">
            <span><Folder size={10} /> 03. Reports</span>
            <small>19 Files</small>
          </div>
          <div className="em-folder-item">
            <span><Folder size={10} /> 04. Certificates</span>
            <small>32 Files</small>
          </div>
          <div className="em-folder-item">
            <span><Folder size={10} /> 05. Site Photos</span>
            <small>47 Files</small>
          </div>
        </div>
        <div className="em-recent-notes">
          <small>Recent Notes</small>
          <div className="em-note-box">
            <p>Site visit completed for Raj Tswande PS. All safety documentation verified.</p>
            <span className="note-meta">Project Manager • 12 May 2024 - 10:30 AM</span>
          </div>
        </div>
        <ul>
          <li>Folder management with version control.</li>
          <li>Metadata tracking for all documents.</li>
          <li>Notes for collaboration & updates.</li>
        </ul>
      </>
    );
  }

  if (type === 'powerbi') {
    return (
      <div className="em-pbi-ui">
        <h4>Project Summary Dashboard</h4>
        <section className="pbi-kpis">
          <div>
            <small>Contract Sum (Excl VAT)</small>
            <b>R 2.45B</b>
          </div>
          <div>
            <small>Specialist Work Deduction</small>
            <b>R 245M</b>
          </div>
          <div>
            <small>Total Value of Work</small>
            <b>R 2.21B</b>
          </div>
        </section>
        <div className="pbi-chart-title">
          <small>Total Value of Work by Month</small>
          <div className="legend">
            <span><i className="target-dot" /> Target Value</span>
            <span><i className="actual-dot" /> Actual Value</span>
            <span><i className="variance-dot" /> Variance</span>
          </div>
        </div>
        <div className="bars">
          <div className="bar-group"><i style={{ height: '35px' }} /><i style={{ height: '28px' }} /></div>
          <div className="bar-group"><i style={{ height: '48px' }} /><i style={{ height: '40px' }} /></div>
          <div className="bar-group"><i style={{ height: '58px' }} /><i style={{ height: '52px' }} /></div>
          <div className="bar-group"><i style={{ height: '42px' }} /><i style={{ height: '38px' }} /></div>
          <div className="bar-group"><i style={{ height: '55px' }} /><i style={{ height: '50px' }} /></div>
          <div className="bar-group"><i style={{ height: '62px' }} /><i style={{ height: '58px' }} /></div>
        </div>
        <div className="pbi-performance">
          <small>Performance by Category</small>
          <div className="perf-item">
            <span>Contractors</span>
            <div className="bar-stacked">
              <div className="segment green" style={{ width: '77%' }} />
              <div className="segment orange" style={{ width: '13%' }} />
              <div className="segment red" style={{ width: '10%' }} />
            </div>
          </div>
          <div className="perf-item">
            <span>Suppliers</span>
            <div className="bar-stacked">
              <div className="segment green" style={{ width: '60%' }} />
              <div className="segment orange" style={{ width: '30%' }} />
              <div className="segment red" style={{ width: '10%' }} />
            </div>
          </div>
          <div className="perf-item">
            <span>Local Enterprise</span>
            <div className="bar-stacked">
              <div className="segment green" style={{ width: '75%' }} />
              <div className="segment orange" style={{ width: '15%' }} />
              <div className="segment red" style={{ width: '10%' }} />
            </div>
          </div>
          <div className="perf-item">
            <span>Labour</span>
            <div className="bar-stacked">
              <div className="segment green" style={{ width: '70%' }} />
              <div className="segment orange" style={{ width: '20%' }} />
              <div className="segment red" style={{ width: '10%' }} />
            </div>
          </div>
        </div>
        <ul>
          <li>Aggregates contract & financial data.</li>
          <li>Visualizes Target vs. Actual performance.</li>
          <li>Highlights variance & project health.</li>
        </ul>
      </div>
    );
  }

  return null;
}

function ModuleCard({ module }) {
  return (
    <GlassCard className={`em-module ${module.type}`}>
      <div className="em-module-pill">
        <span className="em-module-no">{module.no}</span>
        <span className="em-module-title">{module.title}</span>
      </div>
      <ModuleContent type={module.type} />
    </GlassCard>
  );
}

function Modules() {
  return <section className="em-modules">{modules.map((module) => <ModuleCard key={module.title} module={module} />)}</section>;
}

function QRPlaceholder() {
  return <span className="em-qr" aria-label="QR code placeholder">{Array.from({ length: 64 }).map((_, i) => <i key={i} />)}</span>;
}

function BottomSection() {
  return (
    <section className="em-bottom">
      <button className="em-cta"><Target size={60} /><span>Driving efficiency, compliance,<br />and transparency across the<br />mining & construction lifecycle.</span></button>
      <GlassCard className="em-benefits">{benefits.map(([a, b, Icon]) => <span key={a}><Icon size={28} /><b>{a}</b><small>{b}</small></span>)}</GlassCard>
      <GlassCard className="em-contact"><div><span><Globe2 size={18} />www.desireinfoweb.com</span><span><Mail size={18} />vijay@desireinfoweb.com</span><span><Phone size={18} />+91-8780468807</span></div><QRPlaceholder /></GlassCard>
    </section>
  );
}

export default function EnterpriseMining() {
  return (
    <section className="em-page" id="enterprise-mining">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .em-page,.em-page *{box-sizing:border-box}
        .em-page{
          --ink:#111066;
          --purple:#6d28d9;
          --violet:#7c3aed;
          --pink:#ec4899;
          --orange:#f59e0b;
          --blue:#3b82f6;
          --green:#10b981;
          min-height:100vh;
          overflow-x:hidden;
          overflow-y:visible;
          position:relative;
          isolation:isolate;
          padding:22px clamp(14px,1.5vw,32px) 18px;
          color:var(--ink);
          font-family:"Inter","Plus Jakarta Sans","Manrope",system-ui,sans-serif;
          background:radial-gradient(circle at 15% 45%,rgba(124,58,237,.15),transparent 30%),radial-gradient(circle at 74% 14%,rgba(236,72,153,.11),transparent 28%),linear-gradient(135deg,#fbfaff,#f7f2ff 54%,#fff7fd)
        }
        .em-page:before{
          content:"";
          position:absolute;
          inset:0;
          z-index:-1;
          background:linear-gradient(90deg,rgba(109,40,217,.035) 1px,transparent 1px),linear-gradient(0deg,rgba(109,40,217,.03) 1px,transparent 1px);
          background-size:76px 76px
        }
        .em-shell{width:min(100%,1840px);margin:0 auto}
        .em-glass{
          background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.52));
          border:1px solid rgba(255,255,255,.76);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.95),0 22px 62px rgba(109,40,217,.14),0 0 0 1px rgba(130,94,255,.1);
          backdrop-filter:blur(24px)
        }
        
        /* Header section */
        .em-header{display:grid;grid-template-columns:305px minmax(790px,1fr) 360px;gap:16px;align-items:center;margin-bottom:16px}
        .em-brand{display:flex;align-items:center;gap:11px}
        .em-brand img{width:62px;height:62px;object-fit:contain}
        .em-brand strong{display:block;font-size:29px;line-height:.96;font-weight:900}
        .em-brand small{font-size:11px;font-weight:900;color:#1b22c8}
        .em-brand small b{color:#ec4899}
        .em-pillbar{min-height:62px;display:grid;grid-template-columns:repeat(7,1fr);overflow:hidden;border-radius:18px}
        .em-pill{display:grid;grid-template-columns:27px 1fr;grid-template-rows:auto auto;column-gap:7px;align-items:center;padding:0 10px;border-left:1px solid rgba(109,40,217,.14)}
        .em-pill:first-child{border-left:0}
        .em-pill svg{grid-row:1/3;color:#6d28d9}
        .em-pill b{font-size:8px;line-height:1.1;font-weight:900}
        .em-pill small{font-size:6.5px;line-height:1.08;font-weight:850}
        .em-partners{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .em-partner{min-height:62px;display:flex;align-items:center;justify-content:center;gap:10px;border-radius:18px}
        .em-partner span:last-child{font-size:10.5px;line-height:1.08;font-weight:900}
        .em-ms-mark{width:28px;height:28px;display:grid;grid-template-columns:1fr 1fr;gap:3px}
        .em-ms-mark i:nth-child(1){background:#f35325}
        .em-ms-mark i:nth-child(2){background:#81bc06}
        .em-ms-mark i:nth-child(3){background:#05a6f0}
        .em-ms-mark i:nth-child(4){background:#ffba08}
        .em-m365-mark{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(from 35deg,#1b22c8,#7c3aed,#38bdf8,#1b22c8)}
        .em-m365-mark i{width:21px;height:21px;border-radius:9px;background:rgba(255,255,255,.72);transform:rotate(45deg)}
        
        /* Top layout elements */
        .em-top{display:grid;grid-template-columns:minmax(340px,.25fr) minmax(760px,.51fr) minmax(360px,.24fr);gap:16px;align-items:start}
        .em-label{margin:18px 0 8px;color:#ec4899;font-size:17px;font-weight:900;letter-spacing:.13em}
        .em-hero h1{margin:0 0 24px;font-size:clamp(38px,3.2vw,62px);line-height:1.02;font-weight:900;letter-spacing:-.025em}
        .em-hero h1 span{background:linear-gradient(100deg,#1b22c8,#7c3aed 45%,#ec4899 90%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
        .em-info,.em-platform{position:relative;margin-bottom:20px}
        .em-info b,.em-platform b{display:block;color:#ec4899;font-size:11px}
        .em-info strong,.em-platform strong{font-size:15px;line-height:1.2;font-weight:900}
        .em-info svg{position:absolute;right:36px;top:4px;color:#ec4899}
        .em-platform span{display:flex;gap:12px;margin-top:8px}
        .em-platform i{width:40px;height:40px;border-radius:10px;display:block}
        .em-platform .sp{background:radial-gradient(circle at 35% 45%,#fff 0 12%,#008272 13% 100%)}
        .em-platform .bi{background:linear-gradient(90deg,#fbbf24 0 28%,#f59e0b 28% 58%,#d97706 58%)}
        .em-desc{font-size:12.2px;line-height:1.5;font-weight:780;margin:0 0 18px;max-width:420px}
        
        /* Stats Row (Full Width below top columns) */
        .em-stats-row{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:24px;margin-bottom:20px;width:100%}
        .em-stat{
          min-height:64px;
          border-radius:14px;
          padding:12px 14px;
          display:grid;
          grid-template-columns:28px 1fr;
          grid-template-rows:auto auto;
          column-gap:10px;
          align-items:center
        }
        .em-stat svg{grid-row:1/3;color:#6d28d9}
        .em-stat strong{font-size:18px;font-weight:900;color:var(--ink)}
        .em-stat small{font-size:8.5px;font-weight:800;color:#555;text-transform:uppercase}
        
        /* Dashboard visual simulation */
        .em-dashboard{min-height:376px;display:grid;grid-template-columns:136px 1fr;padding:12px;border-radius:22px;background:linear-gradient(180deg,#11124d,#090b35);box-shadow:0 28px 80px rgba(30,20,120,.35);color:white}
        .em-dash-side{border-radius:16px;padding:14px 9px;background:rgba(3,4,30,.42)}
        .em-dash-side h3{margin:0 0 12px;font-size:12px;line-height:1.15}
        .em-dash-side h3 span{display:inline-grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#6d28d9;margin-right:7px}
        .em-dash-side nav{display:grid;gap:4px}
        .em-dash-side b{display:grid;grid-template-columns:17px 1fr;gap:7px;align-items:center;min-height:25px;padding:6px 7px;border-radius:8px;font-size:7.5px}
        .em-dash-side b.active{background:linear-gradient(90deg,#5127e8,#7c3aed)}
        .em-dashboard main{padding:2px 0 0 12px}
        .em-dashboard header{display:grid;grid-template-columns:1fr 120px 120px 28px;gap:9px;align-items:center;margin-bottom:10px}
        .em-dashboard h2{margin:0;font-size:17px}
        .em-dashboard header p{margin:3px 0 0;color:#b9b8ff;font-size:8px;font-weight:800}
        .em-dashboard button{height:32px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:rgba(255,255,255,.07);color:white;font-size:8px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px}
        .em-dkpis{display:grid;grid-template-columns:repeat(5,1fr);gap:9px}
        .em-dkpi{min-height:62px;border-radius:11px;padding:10px;background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);display:grid;grid-template-columns:30px 1fr;grid-template-rows:auto auto auto;column-gap:8px}
        .em-dkpi span{grid-row:1/4;width:30px;height:30px;border-radius:9px;display:grid;place-items:center;background:rgba(124,58,237,.35);color:#a78bfa}
        .em-dkpi small{font-size:6.8px;color:#c4c3ff;font-weight:850}
        .em-dkpi strong{font-size:16px}
        .em-dkpi em{font-style:normal;font-size:6.8px;color:#34d399;font-weight:850}
        .em-dash-grid{display:grid;grid-template-columns:.95fr 1.05fr 1.15fr;gap:10px;margin-top:10px}
        .em-panel{min-height:170px;border-radius:13px;padding:13px;background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
        .em-panel h3{margin:0 0 10px;font-size:9px}
        .em-donut-panel{display:grid;grid-template-columns:100px 1fr}
        .em-donut{width:96px;height:96px;border-radius:50%;display:grid;place-items:center;align-content:center;background:conic-gradient(#6d28d9 0 58%,#3b82f6 58% 79%,#f59e0b 79% 92%,#ec4899 92%);box-shadow:inset 0 0 0 26px rgba(12,14,63,.92)}
        .em-donut b{font-size:20px}
        .em-donut small{font-size:7px}
        .em-donut-panel ul,.em-map ul{margin:0;padding:0;list-style:none;font-size:7px;color:#d9d7ff;font-weight:800;display:grid;gap:8px}
        .em-contract strong{font-size:28px;display:block}
        .em-contract em{font-style:normal;color:#34d399;font-size:8px}
        .em-linechart{height:86px;position:relative;background:linear-gradient(0deg,rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);background-size:34px 22px;overflow:hidden}
        .em-linechart i{position:absolute;width:8px;height:8px;border-radius:50%;background:#c084fc;box-shadow:0 0 12px #c084fc}
        .em-linechart i:nth-child(1){left:4%;top:73%}
        .em-linechart i:nth-child(2){left:13%;top:50%}
        .em-linechart i:nth-child(3){left:22%;top:64%}
        .em-linechart i:nth-child(4){left:31%;top:33%}
        .em-linechart i:nth-child(5){left:40%;top:46%}
        .em-linechart i:nth-child(6){left:49%;top:58%}
        .em-linechart i:nth-child(7){left:58%;top:25%}
        .em-linechart i:nth-child(8){left:67%;top:43%}
        .em-linechart i:nth-child(9){left:76%;top:20%}
        .em-linechart i:nth-child(10){left:85%;top:29%}
        .em-linechart i:nth-child(11){left:94%;top:5%}
        .em-contract p{font-size:6px;color:#aaa8f8}
        .em-map{display:grid;grid-template-columns:1fr 102px}
        .em-sa-map{position:relative;height:120px;clip-path:polygon(18% 25%,55% 8%,88% 24%,76% 72%,48% 94%,16% 76%,5% 46%);background:radial-gradient(circle,#8b5cf6,#27109a);box-shadow:inset 0 0 28px rgba(255,255,255,.18)}
        .em-sa-map i{position:absolute;width:9px;height:9px;border-radius:50%;background:#fff;box-shadow:0 0 16px #c084fc}
        .em-sa-map i:nth-child(1){left:58%;top:25%}
        .em-sa-map i:nth-child(2){left:65%;top:44%}
        .em-sa-map i:nth-child(3){left:35%;top:51%}
        .em-sa-map i:nth-child(4){left:52%;top:66%}
        .em-sa-map i:nth-child(5){left:22%;top:39%}
        .em-sa-map i:nth-child(6){left:42%;top:23%}
        
        /* Mining Illustration & Actions */
        .em-right{display:grid;gap:14px}
        .em-mining-art{position:relative;height:236px;overflow:hidden;border-radius:20px;background:linear-gradient(135deg,#1f1b68,#f59e0b 120%);box-shadow:0 22px 50px rgba(109,40,217,.22)}
        .em-mining-art .sun{position:absolute;right:22px;top:22px;width:62px;height:62px;border-radius:50%;background:#fbbf24;filter:blur(3px)}
        .em-mining-art .mountain{position:absolute;left:0;right:0;bottom:46px;height:86px;background:#3b2177;clip-path:polygon(0 100%,20% 35%,35% 80%,52% 25%,68% 72%,85% 30%,100% 100%)}
        .em-mining-art .belt{position:absolute;left:34px;right:20px;bottom:64px;height:18px;border-radius:99px;background:#11124d;transform:rotate(-11deg)}
        .em-mining-art .truck{position:absolute;left:50px;bottom:28px;width:110px;height:48px;border-radius:10px;background:#f59e0b;box-shadow:0 12px 18px rgba(0,0,0,.25)}
        .em-mining-art .truck:before,.em-mining-art .truck:after{content:"";position:absolute;bottom:-12px;width:26px;height:26px;border-radius:50%;background:#11124d}
        .em-mining-art .truck:before{left:14px}
        .em-mining-art .truck:after{right:14px}
        .em-mining-art .excavator{position:absolute;right:58px;bottom:70px;width:120px;height:16px;background:#f59e0b;transform:rotate(-27deg);transform-origin:right}
        .em-mining-art .excavator i{position:absolute;right:-22px;bottom:-18px;width:54px;height:54px;border:10px solid #f59e0b;border-left:0;border-bottom:0}
        .em-mining-art .excavator b{position:absolute;left:-20px;bottom:-13px;width:44px;height:25px;background:#f59e0b}
        .em-mining-art .float-card{position:absolute;right:22px;top:24px;width:76px;height:54px;border-radius:12px;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.35)}
        .em-mining-art .float-card.two{left:24px;top:34px}
        .em-actions{border-radius:18px;padding:18px}
        .em-actions h3{margin:0 0 16px;font-size:14px}
        .em-actions div{display:grid;grid-template-columns:repeat(6,1fr);gap:9px}
        .em-actions button{min-height:70px;border:0;border-radius:13px;background:rgba(255,255,255,.6);display:grid;place-items:center;color:#6d28d9;font-size:7.4px;font-weight:900}
        
        /* 6 Column Modules Grid */
        .em-modules{display:grid;grid-template-columns:1.25fr 1.25fr 0.88fr 0.88fr 0.88fr 1.15fr;gap:12px;margin-top:14px;align-items:stretch}
        .em-module{
          position:relative;
          min-height:390px;
          border-radius:18px;
          padding:16px 14px 12px;
          display:flex;
          flex-direction:column;
          align-items:stretch;
          justify-content:flex-start
        }
        .em-module.powerbi{background:linear-gradient(180deg,#11124d,#090b35);color:white}
        
        /* Card unified headers as gradient pills */
        .em-module-pill {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:4px 12px 4px 4px;
          border-radius:99px;
          color:white;
          font-size:8px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:0.03em;
          margin-bottom:14px;
          align-self:flex-start;
          box-shadow:0 4px 10px rgba(109, 40, 217, 0.15)
        }
        .em-module.project .em-module-pill { background: linear-gradient(135deg, #1b22c8, #7c3aed); }
        .em-module.target .em-module-pill { background: linear-gradient(135deg, #7c3aed, #ec4899); }
        .em-module.import .em-module-pill { background: linear-gradient(135deg, #ec4899, #f59e0b); }
        .em-module.entity .em-module-pill { background: linear-gradient(135deg, #db2777, #7c3aed); }
        .em-module.docs .em-module-pill { background: linear-gradient(135deg, #7c3aed, #db2777); }
        .em-module.powerbi .em-module-pill { background: linear-gradient(135deg, #4f46e5, #06b6d4); }
        .em-module-no {
          background: rgba(255, 255, 255, 0.25);
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-weight: 900;
          font-size: 8px;
        }
        .em-module-title {
          font-weight: 900;
        }
        
        /* Generic tables styling */
        .em-mini-table {
          border-radius: 10px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(109, 40, 217, 0.08);
          margin-bottom: 8px;
          width: 100%
        }
        .em-mini-table table {
          width: 100%;
          border-collapse: collapse;
          font-size: 6.4px;
          font-weight: 800;
          text-align: left
        }
        .em-mini-table th, .em-mini-table td {
          padding: 4px 5px;
          border: 1px solid rgba(109, 40, 217, 0.08)
        }
        .em-mini-table th {
          background: rgba(109, 40, 217, 0.05);
          color: var(--ink);
          font-weight: 900
        }
        
        /* Table target specific (M/F split) */
        .em-mini-table.target table {
          text-align: center
        }
        .em-mini-table.target th, .em-mini-table.target td {
          padding: 3px 2px;
        }
        
        /* Table status styles */
        .status {
          padding: 2px 4px;
          border-radius: 4px;
          font-size: 5.5px;
          font-weight: 900;
          text-transform: uppercase
        }
        .status-progress { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .status-planning { background: rgba(124, 58, 237, 0.15); color: #7c3aed; }
        .status-hold { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
        .status-pending { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
        .status-verified { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        
        /* Card list bullets styling */
        .em-module ul{margin:10px 0 0;padding-left:13px;font-size:7.2px;line-height:1.55;font-weight:850;color:#444}
        .em-module.powerbi ul { color: #c4c3ff }
        .em-module li { margin-bottom: 3px; }
        
        /* Card 1: Dashboard specifics */
        .em-financial-overview { margin-top: 6px }
        .em-financial-overview h4 { font-size: 7px; font-weight: 900; color: var(--ink); margin: 0 0 4px }
        .em-finance{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
        .em-finance div {
          padding:6px 4px;
          border-radius:8px;
          background:rgba(255,255,255,.65);
          border: 1px solid rgba(109, 40, 217, 0.08);
          display:flex;
          flex-direction:column;
          justify-content:center
        }
        .em-finance small { font-size: 5px; color:#555; font-weight: 800; line-height: 1.1; margin-bottom: 2px }
        .em-finance b { font-size: 9px; font-weight: 900; color: #1b22c8 }
        .em-truck-mini{
          height:46px;
          margin-top:10px;
          border-radius:12px;
          background:linear-gradient(135deg,rgba(245,158,11,0.15),rgba(17,18,77,0.1));
          position:relative;
          overflow:hidden;
          display:flex;
          align-items:center;
          justify-content:center
        }
        .em-truck-mini .truck-body { position:relative; width: 60px; height: 30px }
        .em-truck-mini .bed { position:absolute; left: 5px; top: 5px; width: 35px; height: 15px; background: #f59e0b; border-radius: 2px; transform: skewX(-15deg) }
        .em-truck-mini .cabin { position:absolute; right: 8px; top: 10px; width: 15px; height: 10px; background: #f59e0b; border-radius: 2px }
        .em-truck-mini .cabin:before { content:''; position:absolute; left: 2px; top: 2px; width: 6px; height: 4px; background: #fff; border-radius: 1px }
        .em-truck-mini .wheel { position:absolute; bottom: 0; width: 10px; height: 10px; border-radius: 50%; background: #11124d; border: 2px solid #fff }
        .em-truck-mini .wheel-1 { left: 10px }
        .em-truck-mini .wheel-2 { right: 12px }
        
        /* Card 2: Configuration specifics */
        .em-target-header h4 { font-size: 8px; font-weight: 900; color: var(--ink); margin: 0 0 6px }
        .em-target-visual { display:flex; align-items:flex-end; justify-content:space-between; margin-top:8px; height:74px }
        .em-chart-mini { display:flex; align-items:flex-end; gap:3px; width:45px; height:100%; padding-bottom:5px }
        .em-chart-mini .bar { flex:1; background:linear-gradient(180deg,#a78bfa,#6d28d9); border-radius:2px }
        .em-map-mini{
          flex:1;
          height:74px;
          border-radius:12px;
          background:radial-gradient(circle,#c4b5fd,#ede9fe);
          position:relative;
          max-width:110px
        }
        .em-map-mini .pin{
          position:absolute;
          width:8px;
          height:8px;
          border-radius:50% 50% 50% 0;
          background:#7c3aed;
          transform:rotate(-45deg);
          box-shadow:0 0 6px rgba(124,58,237,0.6)
        }
        .em-map-mini .pin-1 { left: 30%; top: 40% }
        .em-map-mini .pin-2 { left: 60%; top: 26% }
        .em-map-mini .pin-3 { left: 48%; top: 62% }
        .em-map-mini .pin-4 { left: 75%; top: 45% }
        
        /* Card 3: Smart Import specifics */
        .em-download-template, .em-import-zone { width:100%; margin-bottom:8px }
        .em-download-template small, .em-import-zone small { display:block; font-size:7px; font-weight:800; color:#555; margin-bottom:4px }
        .em-excel-card { display:flex; align-items:center; gap:8px; padding:6px; background:rgba(255,255,255,0.7); border:1px solid rgba(16,185,129,0.25); border-radius:8px }
        .em-excel-card .excel-icon { width:22px; height:22px; background:#10b981; color:white; font-weight:900; display:grid; place-items:center; border-radius:4px; font-size:11px }
        .em-excel-card .excel-info { display:flex; flex-direction:column }
        .em-excel-card .excel-info strong { font-size: 5.8px; color:#11124d; font-weight:800; word-break:break-all; line-height:1.2 }
        .em-excel-card .excel-info span { font-size:5px; color:#666 }
        .em-dropzone { border:1.5px dashed rgba(109,40,217,0.25); background:rgba(255,255,255,0.4); border-radius:8px; padding:8px; text-align:center; display:flex; flex-direction:column; align-items:center }
        .em-dropzone p { margin:4px 0; font-size:5.5px; font-weight:800; color:#555; line-height:1.2 }
        .em-dropzone button { border:0; border-radius:6px; padding:4px 8px; background:#ede9fe; color:#6d28d9; font-size:6.5px; font-weight:900; cursor:pointer }
        
        /* Card 4: Entity Verification specifics */
        .em-entity-list, .em-linked-docs { width:100%; margin-bottom:6px }
        .em-entity-list small, .em-linked-docs small { display:block; font-size:7px; font-weight:800; color:#555; margin-bottom:4px }
        .em-doc-item { display:flex; align-items:center; gap:6px; padding:4px 6px; background:rgba(255,255,255,0.6); border:1px solid rgba(109,40,217,0.06); border-radius:6px; margin-bottom:4px }
        .em-doc-item .doc-icon { color:#7c3aed }
        .em-doc-item .doc-info { display:flex; flex-direction:column }
        .em-doc-item .doc-info strong { font-size:5.8px; color:#11124d; font-weight:800 }
        .em-doc-item .doc-info span { font-size:4.8px; color:#666 }
        .em-shield-watermark { position:absolute; right:10px; bottom:10px; opacity:0.12; color:#7c3aed; pointer-events:none }
        
        /* Card 5: Document Control specifics */
        .em-docs-tabs { display:flex; gap:8px; width:100%; border-bottom:1px solid rgba(109,40,217,0.08); padding-bottom:3px; margin-bottom:6px }
        .em-docs-tabs .tab { border:0; background:transparent; font-size:7px; font-weight:850; color:#666; padding:2px 4px; cursor:pointer }
        .em-docs-tabs .tab.active { color:#7c3aed; border-bottom:1.5px solid #7c3aed }
        .em-docs-actions { display:flex; gap:6px; width:100%; margin-bottom:6px }
        .em-docs-actions button { flex:1; border:0; border-radius:6px; padding:4px 6px; font-size:6px; font-weight:900; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:3px }
        .em-docs-actions .btn-add { background:#ede9fe; color:#6d28d9 }
        .em-docs-actions .btn-upload { background:#7c3aed; color:white }
        .em-folder-list { width:100%; display:grid; gap:3px; margin-bottom:6px }
        .em-folder-item { display:flex; justify-content:space-between; align-items:center; padding:3px 6px; background:rgba(255,255,255,0.6); border-radius:6px; border:1px solid rgba(109,40,217,0.04) }
        .em-folder-item span { display:flex; align-items:center; gap:5px; font-size:6px; font-weight:800; color:#11124d }
        .em-folder-item small { font-size:5.5px; color:#666 }
        .em-recent-notes { width:100%; margin-bottom:6px }
        .em-recent-notes small { display:block; font-size:7px; font-weight:800; color:#555; margin-bottom:4px }
        .em-note-box { padding:5px; background:rgba(255,255,255,0.55); border-left:2px solid #7c3aed; border-radius:0 6px 6px 0 }
        .em-note-box p { margin:0 0 3px 0; font-size:5.5px; line-height:1.25; color:#11124d; font-weight:750 }
        .em-note-box .note-meta { font-size:4.5px; color:#777; font-weight:700 }
        
        /* Card 6: Power BI specifics */
        .em-pbi-ui { border-radius:12px; padding:10px; background:#11124d; width:100% }
        .em-pbi-ui h4 { font-size:8px; margin:0 0 6px; color:white; font-weight:800 }
        .pbi-kpis { display:grid; grid-template-columns:repeat(3,1fr); gap:4px; margin-bottom:8px }
        .pbi-kpis div { padding:4px; border-radius:6px; background:rgba(255,255,255,0.08); display:flex; flex-direction:column }
        .pbi-kpis small { font-size:4.5px; color:#b9b8ff; margin-bottom:2px; font-weight:750; line-height:1.1 }
        .pbi-kpis b { font-size:9.5px; color:white; font-weight:900 }
        .pbi-chart-title { display:flex; justify-content:space-between; align-items:center; margin-bottom:4px }
        .pbi-chart-title small { font-size:5.5px; color:#b9b8ff; font-weight:800 }
        .pbi-chart-title .legend { display:flex; gap:6px }
        .pbi-chart-title .legend span { font-size:4.5px; color:#b9b8ff; display:flex; align-items:center; gap:2px; font-weight:700 }
        .pbi-chart-title .legend i { width:4px; height:4px; border-radius:50%; display:inline-block }
        .pbi-chart-title .legend .target-dot { background:#3b82f6 }
        .pbi-chart-title .legend .actual-dot { background:#ec4899 }
        .pbi-chart-title .legend .variance-dot { background:#ef4444 }
        .em-pbi-ui .bars {
          height:64px;
          display:flex;
          align-items:end;
          justify-content:space-between;
          gap:3px;
          border-bottom:1px solid rgba(255,255,255,0.1);
          padding-bottom:3px;
          margin-bottom:8px
        }
        .em-pbi-ui .bar-group { display:flex; align-items:end; gap:1.5px; flex:1 }
        .em-pbi-ui .bar-group i { flex:1; border-radius:1px }
        .em-pbi-ui .bar-group i:first-child { background:#3b82f6 }
        .em-pbi-ui .bar-group i:last-child { background:#ec4899 }
        .pbi-performance { display:grid; gap:4px; margin-bottom:8px }
        .pbi-performance small { font-size:6px; color:#b9b8ff; font-weight:800; margin-bottom:2px; display:block }
        .perf-item { display:grid; grid-template-columns:55px 1fr; align-items:center; gap:6px }
        .perf-item span { font-size:5px; color:#b9b8ff; font-weight:750 }
        .bar-stacked { height:6px; border-radius:3px; overflow:hidden; display:flex; background:rgba(255,255,255,0.1) }
        .bar-stacked .segment { height:100% }
        .bar-stacked .segment.green { background:#10b981 }
        .bar-stacked .segment.orange { background:#f59e0b }
        .bar-stacked .segment.red { background:#ef4444 }
        
        /* Bottom section */
        .em-bottom{display:grid;grid-template-columns:390px minmax(620px,1fr) 390px;gap:14px;margin-top:14px}
        .em-cta{min-height:96px;border:0;border-radius:20px;padding:16px 24px;display:grid;grid-template-columns:72px 1fr;align-items:center;text-align:left;color:white;background:linear-gradient(135deg,#6d28d9,#ec4899 70%,#f43f8c);box-shadow:0 22px 45px rgba(236,72,153,.25);font-size:16px;font-weight:850}
        .em-benefits{display:grid;grid-template-columns:repeat(6,1fr);align-items:center;border-radius:20px;overflow:hidden}
        .em-benefits span{display:grid;grid-template-columns:34px 1fr;grid-template-rows:auto auto;column-gap:8px;align-items:center;padding:0 14px;border-left:1px solid rgba(109,40,217,.14)}
        .em-benefits span:first-child{border-left:0}
        .em-benefits svg{grid-row:1/3;color:#6d28d9}
        .em-benefits b{font-size:9px}
        .em-benefits small{font-size:7px;font-weight:850}
        .em-contact{display:grid;grid-template-columns:1fr 82px;gap:12px;align-items:center;padding:12px;border-radius:20px}
        .em-contact div{display:grid;gap:9px}
        .em-contact span{display:flex;align-items:center;gap:8px;font-size:10.5px;font-weight:900;color:#1b22c8}
        .em-qr{width:80px;height:80px;display:grid;grid-template-columns:repeat(8,1fr);gap:3px;padding:6px;border:4px solid white;border-radius:9px;background:white}
        .em-qr i{background:#111066}
        .em-qr i:nth-child(2n),.em-qr i:nth-child(5n),.em-qr i:nth-child(11n),.em-qr i:nth-child(17n){background:transparent}
        
        /* Media queries */
        @media(max-width:1500px){
          .em-page{padding:16px 12px}
          .em-header{grid-template-columns:280px minmax(660px,1fr) 330px;gap:12px}
          .em-brand img{width:54px;height:54px}
          .em-brand strong{font-size:25px}
          .em-pill{padding:0 7px}
          .em-pill b{font-size:7px}
          .em-top{grid-template-columns:minmax(310px,.25fr) minmax(660px,.51fr) minmax(300px,.24fr);gap:10px}
          .em-hero h1{font-size:35px}
          .em-stats-row { gap: 10px; }
          .em-stat{padding:10px 12px}
          .em-stat strong { font-size: 16px }
          .em-stat small { font-size: 8px }
          .em-dashboard{grid-template-columns:122px 1fr;min-height:346px}
          .em-dashboard main{padding-left:9px}
          .em-dashboard header{grid-template-columns:1fr 92px 92px 24px}
          .em-dkpis{gap:6px}
          .em-dkpi{padding:8px}
          .em-dash-grid{gap:7px}
          .em-panel{min-height:150px;padding:10px}
          .em-right{gap:10px}
          .em-mining-art{height:210px}
          .em-actions div{gap:6px}
          .em-modules{grid-template-columns:1.15fr 1.15fr .85fr .85fr .85fr 1.05fr;gap:8px}
          .em-module{min-height:370px;padding:14px 10px 10px}
          .em-bottom{grid-template-columns:340px minmax(560px,1fr) 330px;gap:10px}
          .em-benefits span{padding:0 9px}
          .em-contact span{font-size:9px}
        }
        @media(max-width:1180px){
          .em-header,.em-top,.em-bottom{grid-template-columns:1fr}
          .em-pillbar{grid-template-columns:repeat(3,1fr)}
          .em-partners{max-width:620px}
          .em-stats-row{grid-template-columns:repeat(3,1fr)}
          .em-modules{grid-template-columns:repeat(2,1fr)}
          .em-dashboard{grid-template-columns:1fr}
          .em-dash-side nav{grid-template-columns:repeat(4,1fr)}
          .em-benefits{grid-template-columns:repeat(3,1fr)}
        }
        @media(max-width:760px){
          .em-pillbar,.em-stats-row,.em-dkpis,.em-dash-grid,.em-modules,.em-benefits{grid-template-columns:1fr}
          .em-partners,.em-actions div{grid-template-columns:1fr 1fr}
          .em-dashboard header,.em-contact{grid-template-columns:1fr}
          .em-dash-side nav{grid-template-columns:1fr}
          .em-hero h1{font-size:38px}
          .em-qr{justify-self:start}
        }
      `}</style>
      <div className="em-shell">
        <Header />
        <div className="em-top">
          <CaseStudyHero />
          <ProjectCommandCenter />
          <RightPanel />
        </div>
        
        <div className="em-stats-row">
          {heroStats.map(({ icon: Icon, value, label }) => (
            <GlassCard className="em-stat" key={label}>
              <Icon size={24} />
              <strong>{value}</strong>
              <small>{label}</small>
            </GlassCard>
          ))}
        </div>
        
        <Modules />
        <BottomSection />
      </div>
    </section>
  );
}
