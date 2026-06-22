import { useEffect, useRef, useState } from 'react';

const stats = [
  ['♘', '10+', 'AI Solutions Delivered'],
  ['⚙', '100+', 'AI Models Built'],
  ['♙', '50+', 'AI Experts'],
  ['♚', '200+', 'Enterprise Clients'],
  ['✦', '99.9%', 'Model Accuracy'],
  ['◷', '24/7', 'AI Support'],
];

const services = [
  ['🧠', 'AI Strategy & Consulting', 'End-to-end AI roadmaps tailored to your business goals.'],
  ['🛡', 'Data Engineering for AI', 'Build scalable data pipelines and AI-ready data platforms.'],
  ['⚙', 'Model Development', 'Custom machine learning & deep learning model development.'],
  ['✺', 'MLOps & Deployment', 'Seamless model deployment, monitoring, and lifecycle management.'],
  ['▣', 'AI Integration', 'Integrate AI into your apps, workflows, and business processes.'],
  ['♡', 'Responsible AI', 'Ethical AI practices, bias mitigation, and governance frameworks.'],
];

const azure = [
  ['▣', 'GPT-4o & GPT-4'],
  ['◺', 'Embeddings'],
  ['⚙', 'Fine Tuning'],
  ['▧', 'Prompt Engineering'],
  ['✦', 'Content Generation'],
  ['⌘', 'Function Calling'],
];

const copilot = [
  ['✧', 'Custom Copilots'],
  ['▣', 'AI Chatbots'],
  ['⌘', 'Workflow Automation'],
  ['◇', 'Knowledge Assistants'],
];

const apps = [
  ['▣', 'AI Chatbots & Virtual Assistants'],
  ['⌕', 'Intelligent Search Solutions'],
  ['▤', 'AI Document Processing Apps'],
  ['◎', 'Recommendation Engines'],
  ['▧', 'Predictive & Prescriptive Apps'],
  ['↗', 'AI-Powered Analytics Apps'],
];

const industries = [
  ['✚', 'Healthcare', 'Smarter diagnostics, patient care & automation.'],
  ['◈', 'Finance', 'Fraud detection, risk modeling & algorithmic insights.'],
  ['▥', 'Retail', 'Customer intelligence, personalization & demand forecasting.'],
  ['⌘', 'Manufacturing', 'Predictive maintenance, quality inspection & more.'],
  ['☁', 'Logistics', 'Route optimization, fleet management & forecasting.'],
  ['✥', 'Education', 'Personalized learning, assessment & AI tutors.'],
];

const capabilities = [
  ['chart', 'Predictive Analytics', 'Forecast trends, behaviors, and outcomes with advanced ML models.'],
  ['doc', 'Intelligent Document Processing (IDP)', 'Automate data extraction, classification, and document understanding.'],
  ['car', 'Computer Vision', 'Image recognition, object detection, OCR, and visual insights.'],
  ['chat', 'Natural Language Processing (NLP)', 'Sentiment analysis, text mining, summarization, translation & more.'],
  ['arm', 'AI-Powered Automation', 'Intelligent workflows, decision automation, and process optimization.'],
  ['code', 'Generative AI Solutions', 'Create content, code, images, and designs with generative AI models.'],
];

const tech = [
  ['☁', 'Azure AI Services'],
  ['♜', 'Azure Machine Learning'],
  ['▤', 'Databricks Lakehouse'],
  ['▮', 'Power BI Analytics'],
  ['◉', 'Cosmos DB Vector Search'],
  ['☁', 'Azure Cognitive Search'],
  ['▣', 'Azure Data Factory'],
  ['◼', 'Microsoft Fabric'],
  ['⌁', 'LangChain Integration'],
  ['▱', 'Vector Databases'],
];

const steps = [
  ['▣', 'Discover', 'Identify opportunities'],
  ['▧', 'Define', 'AI strategy & goals'],
  ['✺', 'Prepare', 'Data collection & engineering'],
  ['✚', 'Build', 'Model training & validation'],
  ['⌘', 'Deploy', 'Production implementation'],
  ['◷', 'Optimize', 'Monitor, learn & improve'],
];

const theme = {
  bgPage: '#f0eeff',
  ink: '#130b67',
  heading: '#271174',
  violet: '#6931e8',
  violet2: '#8b3cf6',
  pink: '#e13c9a',
  muted: '#5d5a78',
  card: 'rgba(255,255,255,0.54)',
  cardStrong: 'rgba(255,255,255,0.72)',
  border: 'rgba(116,75,244,0.28)',
  glow: 'rgba(113,63,245,0.2)',
};

function Visual({ type }) {
  if (type === 'chart') {
    return (
      <div className="ai-visual chart-visual">
        <span style={{ height: '28%' }} />
        <span style={{ height: '46%' }} />
        <span style={{ height: '38%' }} />
        <span style={{ height: '68%' }} />
        <span style={{ height: '58%' }} />
        <span style={{ height: '82%' }} />
        <i />
      </div>
    );
  }

  if (type === 'doc') {
    return (
      <div className="ai-visual doc-visual">
        <b>INVOICE</b>
        <span />
        <span />
        <span />
        <small />
      </div>
    );
  }

  if (type === 'car') {
    return (
      <div className="ai-visual car-visual">
        <div />
        <span />
        <span />
      </div>
    );
  }

  if (type === 'chat') {
    return (
      <div className="ai-visual chat-visual">
        <span>How can I help you today?</span>
        <b>Hello</b>
        <i>नमस्ते</i>
      </div>
    );
  }

  if (type === 'arm') {
    return (
      <div className="ai-visual arm-visual">
        <span className="arm-base" />
        <span className="arm-one" />
        <span className="arm-two" />
        <span className="arm-claw" />
      </div>
    );
  }

  return (
    <div className="ai-visual code-visual">
      <span />
      <span />
      <span />
      <b>&lt;/&gt;</b>
    </div>
  );
}

function StyleBlock() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');

      .ai-poster, .ai-poster * { box-sizing: border-box; }
      .ai-poster {
        --ink: ${theme.ink};
        --heading: ${theme.heading};
        --violet: ${theme.violet};
        --violet2: ${theme.violet2};
        --pink: ${theme.pink};
        --muted: ${theme.muted};
        --card: ${theme.card};
        --card-strong: ${theme.cardStrong};
        --border: ${theme.border};
        --glow: ${theme.glow};
        font-family: "Inter", "Poppins", "Segoe UI", sans-serif;
      }
      .ai-poster::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 49% 38%, rgba(91,58,236,0.26), transparent 23%),
          radial-gradient(circle at 92% 12%, rgba(236,72,153,0.12), transparent 20%),
          linear-gradient(90deg, rgba(255,255,255,0.82), rgba(255,255,255,0.28) 48%, rgba(255,255,255,0.66)),
          repeating-linear-gradient(0deg, transparent 0 46px, rgba(111,83,229,0.045) 47px),
          repeating-linear-gradient(90deg, transparent 0 72px, rgba(111,83,229,0.04) 73px);
        pointer-events: none;
      }
      .ai-poster::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 70px;
        height: 430px;
        background:
          linear-gradient(100deg, transparent 0 13%, rgba(111,83,229,0.11) 13.2% 13.55%, transparent 13.8% 100%),
          linear-gradient(82deg, transparent 0 38%, rgba(111,83,229,0.1) 38.2% 38.5%, transparent 38.8% 100%),
          linear-gradient(96deg, transparent 0 58%, rgba(236,72,153,0.12) 58.15% 58.45%, transparent 58.8% 100%);
        opacity: 0.72;
        pointer-events: none;
      }
      .glass {
        background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.38));
        border: 1px solid var(--border);
        border-radius: 18px;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.85),
          0 18px 42px rgba(85,53,203,0.12),
          0 0 0 1px rgba(255,255,255,0.26);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
      }
      .soft-card {
        background: linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.44));
        border: 1px solid rgba(116,75,244,0.24);
        border-radius: 16px;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.82), 0 10px 26px rgba(92,57,211,0.1);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transition: all 0.25s ease;
      }
      .service-card {
        width: 262px;
        min-height: 60px;
        grid-template-columns: 34px 1fr;
        gap: 9px;
        padding: 9px 11px;
      }
      .soft-card:hover, .mini-pill:hover, .service:hover, .right-row:hover {
        transform: translateY(-2px);
        border-color: rgba(105,49,232,0.42);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 16px 34px rgba(92,57,211,0.18);
      }
      .poster-title {
        margin: 0;
        font-size: 48px;
        line-height: 0.95;
        font-weight: 900;
        letter-spacing: 0;
        white-space: nowrap;
        background: linear-gradient(110deg, #130b67 0%, #6334e9 58%, #e13c9a 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .top-stat-icon, .line-icon {
        color: var(--violet);
        text-shadow: 0 0 12px rgba(105,49,232,0.34);
      }
      .service, .right-row, .mini-pill, .tech-item, .cap-card {
        transition: all 0.25s ease;
      }
      .mini-pill {
        min-width: 64px;
        min-height: 42px;
        padding: 5px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border-radius: 10px;
        background: rgba(255,255,255,0.35);
        border: 1px solid rgba(116,75,244,0.24);
      }
      .hub-ring { animation: pulseRing 2.8s ease-in-out infinite; }
      .hub-ring:nth-child(2) { animation-delay: .35s; }
      .hub-ring:nth-child(3) { animation-delay: .7s; }
      .orbit-dot.one { animation: orbitOne 4.2s linear infinite; }
      .orbit-dot.two { animation: orbitTwo 3s linear infinite reverse; }
      .orbit-dot.three { animation: orbitThree 5.2s linear infinite; }
      .ai-core { animation: coreGlow 2.7s ease-in-out infinite; }
      .cta { animation: floatBtn 3s ease-in-out infinite; }
      @keyframes pulseRing {
        0%,100% { opacity: .42; transform: translate(-50%,-50%) scale(1); }
        50% { opacity: .78; transform: translate(-50%,-50%) scale(1.05); }
      }
      @keyframes orbitOne {
        from { transform: rotate(0deg) translateX(130px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(130px) rotate(-360deg); }
      }
      @keyframes orbitTwo {
        from { transform: rotate(0deg) translateX(96px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(96px) rotate(-360deg); }
      }
      @keyframes orbitThree {
        from { transform: rotate(0deg) translateX(70px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
      }
      @keyframes coreGlow {
        0%,100% { box-shadow: 0 0 28px rgba(105,49,232,.75), 0 0 76px rgba(105,49,232,.38), inset 0 0 24px rgba(255,255,255,.34); }
        50% { box-shadow: 0 0 52px rgba(105,49,232,.95), 0 0 118px rgba(105,49,232,.55), inset 0 0 30px rgba(255,255,255,.48); }
      }
      @keyframes floatBtn {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-7px); }
      }
      .cap-card {
        min-height: 188px;
        padding: 14px 15px 14px;
        overflow: hidden;
        position: relative;
      }
      .cap-card:hover { transform: translateY(-4px); }
      .ai-visual {
        position: absolute;
        left: 16px;
        right: 16px;
        bottom: 13px;
        height: 78px;
        border-radius: 14px;
        overflow: hidden;
        background: linear-gradient(145deg, rgba(124,58,237,.12), rgba(236,72,153,.1));
      }
      .chart-visual {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        padding: 15px 18px 15px;
      }
      .chart-visual span {
        flex: 1;
        border-radius: 8px 8px 0 0;
        background: linear-gradient(180deg, #ff72cf, #7a46f5);
        box-shadow: 0 0 16px rgba(124,58,237,.28);
      }
      .chart-visual i {
        position: absolute;
        left: 18px;
        right: 18px;
        top: 34px;
        height: 34px;
        border-top: 4px solid rgba(236,72,153,.64);
        transform: skewY(-18deg);
      }
      .doc-visual {
        width: 86px;
        left: 50%;
        right: auto;
        transform: translateX(-50%);
        padding: 13px 11px;
        background: rgba(255,255,255,.72);
      }
      .doc-visual b {
        display: block;
        color: var(--violet);
        font-size: 8px;
        margin-bottom: 9px;
      }
      .doc-visual span {
        display: block;
        height: 6px;
        margin: 6px 0;
        border-radius: 999px;
        background: rgba(105,49,232,.2);
      }
      .doc-visual small {
        position: absolute;
        width: 18px;
        height: 18px;
        right: 9px;
        bottom: 8px;
        border-radius: 50%;
        background: linear-gradient(135deg, #7c3aed, #ec4899);
      }
      .car-visual div {
        position: absolute;
        width: 152px;
        height: 48px;
        left: 50%;
        bottom: 22px;
        transform: translateX(-50%) skewX(-12deg);
        border: 3px solid rgba(105,49,232,.62);
        border-top-left-radius: 44px;
        border-top-right-radius: 56px;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
        box-shadow: 0 0 24px rgba(105,49,232,.32);
      }
      .car-visual span {
        position: absolute;
        width: 20px;
        height: 20px;
        bottom: 14px;
        border-radius: 50%;
        border: 4px solid var(--violet);
      }
      .car-visual span:nth-child(2) { left: 48px; }
      .car-visual span:nth-child(3) { right: 48px; }
      .chat-visual {
        background: transparent;
        overflow: visible;
      }
      .chat-visual span, .chat-visual b, .chat-visual i {
        position: absolute;
        display: block;
        border-radius: 16px;
        color: #fff;
        font-style: normal;
        box-shadow: 0 12px 24px rgba(105,49,232,.18);
      }
      .chat-visual span {
        left: 6px;
        bottom: 24px;
        width: 110px;
        padding: 11px 12px;
        background: linear-gradient(135deg, #f4a1e3, #a35cf6);
        font-size: 13px;
        font-weight: 800;
        line-height: 1.12;
      }
      .chat-visual b {
        right: 18px;
        bottom: 40px;
        padding: 8px 10px;
        background: #7d46e9;
        font-size: 11px;
      }
      .chat-visual i {
        right: 10px;
        bottom: 7px;
        padding: 7px 9px;
        background: #bb5be8;
        font-size: 11px;
        font-weight: 800;
      }
      .arm-visual .arm-base,
      .arm-visual .arm-one,
      .arm-visual .arm-two,
      .arm-visual .arm-claw {
        position: absolute;
        background: linear-gradient(135deg, #261477, #9b6af6);
        box-shadow: 0 0 20px rgba(105,49,232,.28);
      }
      .arm-base {
        width: 72px;
        height: 18px;
        left: 74px;
        bottom: 18px;
        border-radius: 999px;
      }
      .arm-one {
        width: 70px;
        height: 16px;
        left: 58px;
        bottom: 42px;
        border-radius: 999px;
        transform: rotate(-34deg);
      }
      .arm-two {
        width: 62px;
        height: 15px;
        left: 112px;
        bottom: 61px;
        border-radius: 999px;
        transform: rotate(28deg);
      }
      .arm-claw {
        width: 30px;
        height: 30px;
        right: 32px;
        bottom: 43px;
        border-radius: 10px;
      }
      .code-visual {
        padding: 15px;
        background: linear-gradient(135deg, #211170, #6823bb);
      }
      .code-visual span {
        display: block;
        width: 72%;
        height: 7px;
        border-radius: 999px;
        margin: 8px 0;
        background: rgba(255,255,255,.34);
      }
      .code-visual span:nth-child(2) { width: 52%; background: rgba(236,72,153,.54); }
      .code-visual span:nth-child(3) { width: 64%; }
      .code-visual b {
        position: absolute;
        right: 20px;
        bottom: 18px;
        width: 52px;
        height: 52px;
        display: grid;
        place-items: center;
        border-radius: 12px;
        background: linear-gradient(135deg, #ec4899, #7c3aed);
        color: white;
        font-size: 18px;
      }
      .tech-item:hover { transform: translateY(-2px); background: rgba(255,255,255,.7); }
      .process-scroll { scrollbar-width: none; }
      .process-scroll::-webkit-scrollbar { display: none; }
      @media (max-width: 1468px) {
        .poster-shell {
          transform: scale(calc((100vw - 48px) / 1420));
          transform-origin: top left;
        }
        .poster-outer {
          height: calc(930px * ((100vw - 48px) / 1420) + 48px);
          min-height: 0 !important;
          overflow: hidden;
        }
      }
      @media (max-width: 860px) {
        .poster-shell { width: auto; transform: none; }
        .poster-outer { height: auto; overflow: visible; }
        .top-row, .hero-grid, .bottom-grid { grid-template-columns: 1fr !important; }
        .stats-strip, .partners, .middle-row, .cap-grid, .tech-strip { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
        .right-column { grid-template-columns: 1fr !important; }
        .globe-stage { min-height: 310px !important; }
        .poster-title { font-size: 44px; }
      }
    `}</style>
  );
}

export default function AIExpertise() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setActiveStep((step) => (step + 1) % steps.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ai-poster poster-outer"
      style={{
        position: 'relative',
        isolation: 'isolate',
        background: theme.bgPage,
        color: theme.ink,
        minHeight: 978,
        padding: 24,
        overflow: 'hidden',
      }}
    >
      <StyleBlock />

      <div className="poster-shell" style={{ position: 'relative', zIndex: 1, width: 1420, minHeight: 930, margin: '0 auto' }}>
        <div
          className="top-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '350px 680px 320px',
            gap: 18,
            alignItems: 'center',
            marginBottom: 22,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="/logo.png" alt="DesireInfoWeb logo" style={{ width: 62, height: 62, objectFit: 'contain', filter: 'drop-shadow(0 12px 18px rgba(70,38,164,.18))' }} />
            <div>
              <div style={{ fontSize: 28, lineHeight: 1, fontWeight: 900, color: theme.ink }}>DesireInfoWeb</div>
              <div style={{ fontSize: 11, lineHeight: 1.2, marginTop: 5, color: theme.ink }}>
                Your Extended <span style={{ color: theme.pink }}>Technology Partner</span>
              </div>
            </div>
          </div>

          <div
            className="stats-strip glass"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 0,
              width: 680,
              justifySelf: 'start',
              minHeight: 52,
              padding: '6px 10px',
              alignItems: 'center',
            }}
          >
            {stats.map(([icon, value, label], index) => (
              <div
                key={label}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '24px 1fr',
                  alignItems: 'center',
                  gap: 5,
                  padding: '0 6px',
                  borderLeft: index === 0 ? 'none' : '1px solid rgba(116,75,244,.16)',
                }}
              >
                <div className="top-stat-icon" style={{ fontSize: 20, textAlign: 'center', lineHeight: 1 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 900, lineHeight: 1, color: theme.ink }}>{value}</div>
                  <div style={{ marginTop: 3, fontSize: 7.4, fontWeight: 700, color: theme.ink, lineHeight: 1.12 }}>{label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="partners" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10, justifySelf: 'start', width: 300 }}>
            <div className="glass" style={{ minHeight: 72, padding: '10px 12px', display: 'flex', gap: 9, alignItems: 'flex-start' }}>
              <div style={{ width: 27, height: 27, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                {['#f25022', '#7fba00', '#00a4ef', '#ffb900'].map((color) => <span key={color} style={{ background: color }} />)}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 900, lineHeight: 1.15 }}>Microsoft</div>
                <div style={{ fontSize: 10, fontWeight: 700, lineHeight: 1.2 }}>Solutions Partner</div>
                <div style={{ fontSize: 10, marginTop: 6, lineHeight: 1.2 }}>Data & AI<br />Azure</div>
              </div>
            </div>
            <div className="glass" style={{ minHeight: 72, padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ fontSize: 32, color: '#111' }}>⌬</div>
              <div style={{ fontSize: 15, fontWeight: 900, lineHeight: 1.15, color: '#171326' }}>OpenAI<br />Partner</div>
            </div>
          </div>
        </div>

        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '292px 1fr 486px',
            gap: 20,
            alignItems: 'start',
          }}
        >
          <aside>
            <h1 className="poster-title">AI Expertise</h1>
            <div style={{ marginTop: 10, fontSize: 16, fontWeight: 900, color: theme.heading, lineHeight: 1.2, whiteSpace: 'nowrap' }}>
              Intelligent Solutions. <span style={{ color: theme.pink }}>Real Impact.</span>
            </div>
            <p style={{ margin: '22px 0 16px', color: theme.ink, fontSize: 13.2, lineHeight: 1.42, fontWeight: 800, maxWidth: 276 }}>
              We design, build, and deploy AI-powered solutions that automate processes, unlock insights, and drive innovation across your enterprise.
            </p>

            <div style={{ display: 'grid', gap: 7 }}>
              {services.map(([icon, title, desc]) => (
                <div key={title} className="service service-card soft-card" style={{ display: 'grid', alignItems: 'center' }}>
                  <div className="line-icon" style={{ fontSize: 22, textAlign: 'center', lineHeight: 1 }}>{icon}</div>
                  <div>
                    <div style={{ color: theme.ink, fontSize: 9.8, fontWeight: 900, lineHeight: 1.15 }}>{title}</div>
                    <div style={{ marginTop: 3, color: theme.ink, fontSize: 8.3, fontWeight: 650, lineHeight: 1.22 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <main style={{ position: 'relative', minHeight: 584 }}>
            <section className="glass" style={{ position: 'relative', zIndex: 5, width: 520, minHeight: 78, margin: '0 auto 0 8px', padding: '8px 10px', background: 'linear-gradient(180deg, rgba(91,43,218,.92), rgba(45,25,149,.88))', borderColor: 'rgba(188,163,255,.55)', color: 'white' }}>
              <h2 style={{ margin: 0, textAlign: 'center', fontSize: 14, fontWeight: 900 }}>Azure OpenAI Services</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 9, flexWrap: 'nowrap' }}>
                {azure.map(([icon, label]) => (
                  <div key={label} className="mini-pill" style={{ color: 'white', background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.18)' }}>
                    <div style={{ fontSize: 15, lineHeight: 1 }}>{icon}</div>
                    <div style={{ fontSize: 6.8, fontWeight: 700, textAlign: 'center', lineHeight: 1.1 }}>{label}</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="middle-row" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '170px 1fr', gap: 16, alignItems: 'center', marginTop: 4 }}>
              <section className="glass" style={{ padding: '14px 15px', minHeight: 152, transform: 'translate(-16px, -28px)' }}>
                <h2 style={{ margin: '0 0 12px', color: theme.ink, fontSize: 12.5, fontWeight: 900, lineHeight: 1.15 }}>Copilot Studio & AI Assistants</h2>
                {copilot.map(([icon, label]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '7px 0', color: theme.ink, fontSize: 9.8, fontWeight: 800 }}>
                    <span className="line-icon" style={{ fontSize: 15 }}>{icon}</span>
                    {label}
                  </div>
                ))}
              </section>

              <section className="globe-stage" style={{ position: 'relative', minHeight: 340, display: 'grid', placeItems: 'center', overflow: 'visible', transform: 'translateX(-108px)' }}>
                <div style={{ position: 'absolute', width: 410, height: 410, borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,68,255,.22), transparent 63%)', filter: 'blur(14px)' }} />
                {[180, 240, 304].map((size) => (
                  <div key={size} className="hub-ring" style={{ position: 'absolute', left: '50%', top: '50%', width: size, height: size, borderRadius: '50%', border: '2px solid rgba(124,58,237,.14)', transform: 'translate(-50%,-50%)' }} />
                ))}
                <div style={{ position: 'absolute', width: 284, height: 284, borderRadius: '50%', border: '2px dashed rgba(124,58,237,.18)' }}>
                  <span className="orbit-dot one" style={{ position: 'absolute', left: '50%', top: '50%', width: 10, height: 10, margin: -5, borderRadius: '50%', background: '#7c3aed', boxShadow: '0 0 14px #7c3aed' }} />
                  <span className="orbit-dot two" style={{ position: 'absolute', left: '50%', top: '50%', width: 8, height: 8, margin: -4, borderRadius: '50%', background: '#ec4899', boxShadow: '0 0 14px #ec4899' }} />
                  <span className="orbit-dot three" style={{ position: 'absolute', left: '50%', top: '50%', width: 8, height: 8, margin: -4, borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 14px #38bdf8' }} />
                </div>
                <svg viewBox="0 0 220 220" width="188" height="188" style={{ position: 'absolute', filter: 'drop-shadow(0 0 12px rgba(124,58,237,.35))' }} aria-hidden="true">
                  <circle cx="110" cy="110" r="92" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.4" />
                  <circle cx="110" cy="110" r="66" fill="none" stroke="rgba(255,255,255,.62)" strokeWidth="1.2" />
                  <circle cx="110" cy="110" r="36" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.1" />
                  {Array.from({ length: 13 }).map((_, i) => (
                    <line key={i} x1="110" y1="110" x2={110 + Math.cos((i * Math.PI * 2) / 13) * 92} y2={110 + Math.sin((i * Math.PI * 2) / 13) * 92} stroke="rgba(255,255,255,.52)" strokeWidth="1" />
                  ))}
                  {Array.from({ length: 28 }).map((_, i) => (
                    <circle key={i} cx={110 + Math.cos((i * Math.PI * 2) / 28) * (48 + (i % 3) * 17)} cy={110 + Math.sin((i * Math.PI * 2) / 28) * (48 + (i % 3) * 17)} r="3.2" fill="rgba(255,255,255,.9)" />
                  ))}
                </svg>
                <div
                  className="ai-core"
                  style={{
                    position: 'relative',
                    width: 138,
                    height: 138,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 34% 28%, #f7f4ff 0%, #b8a3ff 21%, #6931e8 58%, #271174 100%)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'white',
                    fontSize: 60,
                    fontWeight: 900,
                    letterSpacing: -3,
                    textShadow: '0 0 24px rgba(255,255,255,.95)',
                  }}
                >
                  AI
                </div>
                <div style={{ position: 'absolute', bottom: 38, width: 250, height: 48, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(105,49,232,.52), transparent 68%)', filter: 'blur(10px)' }} />
              </section>
            </div>
          </main>

          <aside className="right-column" style={{ display: 'grid', gridTemplateColumns: '230px 230px', gap: 14, alignItems: 'start', transform: 'translateX(-20px)' }}>
            <section className="glass" style={{ padding: '14px 12px', borderRadius: 15 }}>
              <h2 style={{ margin: '0 0 11px', color: theme.ink, fontSize: 13, textAlign: 'center', fontWeight: 900 }}>AI Applications We Build</h2>
              <div style={{ display: 'grid', gap: 8 }}>
                {apps.map(([icon, label]) => (
                  <div key={label} className="right-row" style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 8, alignItems: 'center', minHeight: 39, padding: '8px 9px', borderRadius: 9, border: '1px solid rgba(116,75,244,.18)', background: 'rgba(255,255,255,.4)', color: theme.ink, fontSize: 8.8, fontWeight: 800 }}>
                    <span className="line-icon" style={{ fontSize: 14 }}>{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </section>

            <section className="glass" style={{ padding: '14px 12px', borderRadius: 15 }}>
              <h2 style={{ margin: '0 0 11px', color: theme.ink, fontSize: 13, textAlign: 'center', fontWeight: 900 }}>Industries We Empower</h2>
              <div style={{ display: 'grid', gap: 7 }}>
                {industries.map(([icon, title, desc]) => (
                  <div key={title} className="right-row" style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 8, minHeight: 43, padding: '7px 9px', borderRadius: 9, border: '1px solid rgba(116,75,244,.18)', background: 'rgba(255,255,255,.42)' }}>
                    <span className="line-icon" style={{ fontSize: 14, lineHeight: 1 }}>{icon}</span>
                    <div>
                      <div style={{ color: theme.ink, fontSize: 8.8, fontWeight: 900, lineHeight: 1.05 }}>{title}</div>
                      <div style={{ marginTop: 3, color: theme.ink, fontSize: 7.2, fontWeight: 650, lineHeight: 1.14 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <div className="cap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginTop: -154, paddingLeft: 292, paddingRight: 20, position: 'relative', zIndex: 4 }}>
          {capabilities.map(([type, title, desc]) => (
            <article key={title} className="cap-card soft-card">
              <h3 style={{ margin: 0, color: theme.ink, fontSize: 12.5, fontWeight: 900, lineHeight: 1.16 }}>{title}</h3>
              <p style={{ margin: '7px 0 0', color: theme.ink, fontSize: 9, fontWeight: 650, lineHeight: 1.3 }}>{desc}</p>
              <Visual type={type} />
            </article>
          ))}
        </div>

        <div className="tech-strip glass" style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 0, alignItems: 'center', minHeight: 62, padding: '8px 16px', margin: '12px 20px 0 292px', position: 'relative', zIndex: 4 }}>
          {tech.map(([icon, label], index) => (
            <div key={label} className="tech-item" style={{ minHeight: 46, display: 'grid', placeItems: 'center', alignContent: 'center', gap: 3, borderLeft: index === 0 ? 'none' : '1px solid rgba(116,75,244,.16)', borderRadius: 10 }}>
              <span className="line-icon" style={{ fontSize: 20, lineHeight: 1 }}>{icon}</span>
              <span style={{ color: theme.ink, fontSize: 8, fontWeight: 800, textAlign: 'center', lineHeight: 1.12 }}>{label}</span>
            </div>
          ))}
        </div>

        <div className="bottom-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 18, alignItems: 'center', margin: '14px 20px 0 0' }}>
          <section className="glass" style={{ minHeight: 86, padding: '12px 16px' }}>
            <h2 style={{ margin: '0 0 12px', textAlign: 'center', color: theme.ink, fontSize: 16, fontWeight: 900 }}>Our AI Development Process</h2>
            <div className="process-scroll" style={{ display: 'grid', gridTemplateColumns: 'repeat(11, auto)', alignItems: 'center', overflowX: 'auto' }}>
              {steps.map(([icon, label, desc], index) => (
                <div key={label} style={{ display: 'contents' }}>
                  <div style={{ minWidth: 98, display: 'grid', gridTemplateColumns: '24px 1fr', gap: 7, alignItems: 'center' }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, display: 'grid', placeItems: 'center', color: activeStep === index ? '#fff' : theme.violet, background: activeStep === index ? 'linear-gradient(135deg,#6931e8,#e13c9a)' : 'rgba(255,255,255,.56)', border: '1px solid rgba(116,75,244,.25)', boxShadow: activeStep === index ? '0 0 16px rgba(105,49,232,.42)' : 'none', fontSize: 14, transition: 'all .35s ease' }}>{icon}</div>
                    <div>
                      <div style={{ color: theme.ink, fontSize: 9.5, fontWeight: 900 }}>{label}</div>
                      <div style={{ color: theme.ink, fontSize: 7.5, fontWeight: 650, lineHeight: 1.15 }}>{desc}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && <div style={{ width: 24, height: 2, margin: '0 7px', background: index < activeStep ? 'linear-gradient(90deg,#6931e8,#e13c9a)' : 'rgba(116,75,244,.24)' }} />}
                </div>
              ))}
            </div>
          </section>

          <button type="button" className="cta" style={{ minHeight: 86, border: 'none', borderRadius: 16, color: '#fff', background: 'linear-gradient(110deg,#3a22d8 0%,#7433f2 43%,#ec4899 78%,#ffb44b 100%)', boxShadow: '0 18px 40px rgba(124,58,237,.32)', cursor: 'pointer', fontSize: 24, fontWeight: 900, lineHeight: 1.13 }}>
            Let&apos;s Build the Future
            <br />
            with AI Innovation <span style={{ fontSize: 31, verticalAlign: -2 }}>→</span>
          </button>

        </div>

      </div>
    </section>
  );
}
