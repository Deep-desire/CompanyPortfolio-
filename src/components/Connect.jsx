import React from 'react';
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Globe2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Video
} from 'lucide-react';

const contacts = [
  {
    label: 'Email',
    value: 'vijay@desireinfoweb.com',
    href: 'mailto:vijay@desireinfoweb.com',
    Icon: Mail
  },
  {
    label: 'Web',
    value: 'www.desireinfoweb.com',
    href: 'https://www.desireinfoweb.com',
    Icon: Globe2
  },
  {
    label: 'India',
    value: '+91-8780468807',
    href: 'tel:+918780468807',
    Icon: Phone,
    flag: 'india'
  },
  {
    label: 'USA',
    value: '+1 260 560 2128',
    href: 'tel:+12605602128',
    Icon: Phone,
    flag: 'usa'
  },
  {
    label: 'South Africa',
    value: '+27 87 250 3011',
    href: 'tel:+27872503011',
    Icon: Phone,
    flag: 'south-africa'
  }
];

const partnerBadges = [
  { label: 'Microsoft Solutions Partner', type: 'microsoft' },
  { label: 'Built on Microsoft 365', type: 'm365' },
  { label: 'Power Platform Partner', type: 'power' },
  { label: 'Azure Partner', type: 'azure' }
];

function BrandLogo({ compact = false }) {
  return (
    <div className={`connect-brand ${compact ? 'connect-brand--compact' : ''}`}>
      <img src="/logo.png" alt="DesireInfoWeb" />
      <div>
        <strong>
          DesireInfo<span>Web</span>
        </strong>
        <small>
          Your Extended <span>Technology Partner</span>
        </small>
      </div>
    </div>
  );
}

function PartnerIcon({ type }) {
  if (type === 'microsoft') {
    return (
      <span className="partner-icon partner-icon--microsoft" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
    );
  }

  if (type === 'm365') {
    return (
      <span className="partner-icon partner-icon--m365" aria-hidden="true">
        <i />
      </span>
    );
  }

  if (type === 'power') {
    return (
      <span className="partner-icon partner-icon--power" aria-hidden="true">
        <i />
        <b />
      </span>
    );
  }

  return (
    <span className="partner-icon partner-icon--azure" aria-hidden="true">
      <i />
    </span>
  );
}

function PartnerBar() {
  return (
    <div className="partner-bar">
      <p>Trusted by Global Clients. Delivered with Excellence.</p>
      <div className="partner-list">
        {partnerBadges.map((badge, index) => (
          <React.Fragment key={badge.type}>
            {index > 0 && <span className="partner-divider" />}
            <div className="partner-item">
              <PartnerIcon type={badge.type} />
              <span>{badge.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function FlagBadge({ type }) {
  return (
    <span className={`flag flag--${type}`} aria-hidden="true">
      {type === 'india' && (
        <svg viewBox="0 0 48 48">
          <clipPath id="india-flag">
            <circle cx="24" cy="24" r="24" />
          </clipPath>
          <g clipPath="url(#india-flag)">
            <rect width="48" height="16" fill="#ff9933" />
            <rect y="16" width="48" height="16" fill="#fff" />
            <rect y="32" width="48" height="16" fill="#138808" />
            <circle cx="24" cy="24" r="5.2" fill="none" stroke="#10106b" strokeWidth="1.3" />
            {Array.from({ length: 12 }).map((_, index) => (
              <path key={index} d="M24 18.8v10.4" stroke="#10106b" strokeWidth=".6" transform={`rotate(${index * 15} 24 24)`} />
            ))}
          </g>
        </svg>
      )}
      {type === 'usa' && (
        <svg viewBox="0 0 48 48">
          <clipPath id="usa-flag">
            <circle cx="24" cy="24" r="24" />
          </clipPath>
          <g clipPath="url(#usa-flag)">
            {Array.from({ length: 13 }).map((_, index) => (
              <rect key={index} y={(index * 48) / 13} width="48" height={48 / 13} fill={index % 2 ? '#fff' : '#b22234'} />
            ))}
            <rect width="22" height="18.8" fill="#3c3b6e" />
            {Array.from({ length: 16 }).map((_, index) => (
              <circle key={index} cx={3.4 + (index % 4) * 4.7} cy={3.4 + Math.floor(index / 4) * 4.3} r="1" fill="#fff" />
            ))}
          </g>
        </svg>
      )}
      {type === 'south-africa' && (
        <svg viewBox="0 0 48 48">
          <clipPath id="sa-flag">
            <circle cx="24" cy="24" r="24" />
          </clipPath>
          <g clipPath="url(#sa-flag)">
            <rect width="48" height="24" fill="#de3831" />
            <rect y="24" width="48" height="24" fill="#002395" />
            <path d="M0 0l22 24L0 48h10l19-18h19V18H29L10 0z" fill="#fff" />
            <path d="M0 4l18 20L0 44h7l18-17h23v-6H25L7 4z" fill="#007a4d" />
            <path d="M0 8l14 16L0 40z" fill="#ffb612" />
            <path d="M0 12l10 12L0 36z" fill="#000" />
          </g>
        </svg>
      )}
    </span>
  );
}

function ContactCard({ contact }) {
  const { Icon } = contact;

  return (
    <a className="contact-row" href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      <span className="contact-icon">
        <Icon size={30} strokeWidth={2.2} />
      </span>
      <span className="contact-copy">
        <strong>{contact.label}</strong>
        <span>{contact.value}</span>
      </span>
      {contact.flag && <FlagBadge type={contact.flag} />}
    </a>
  );
}

function ProductTile({ className, children }) {
  return <span className={`product-tile ${className}`}>{children}</span>;
}

function HeroDeviceScene() {
  return (
    <div className="device-scene" aria-hidden="true">
      <div className="city city--left" />
      <div className="city city--right" />
      <div className="orbit orbit--one" />
      <div className="orbit orbit--two" />
      <div className="platform">
        <span />
        <span />
      </div>
      <div className="laptop">
        <div className="laptop-screen">
          <BrandLogo compact />
          <span className="screen-wave screen-wave--one" />
          <span className="screen-wave screen-wave--two" />
        </div>
        <div className="laptop-base" />
      </div>
      <div className="phone-device">
        <div>
          <img src="/logo.png" alt="" />
          <span />
        </div>
      </div>
      <ProductTile className="tile--power-bi">
        <i />
        <i />
        <i />
      </ProductTile>
      <ProductTile className="tile--teams">T</ProductTile>
      <ProductTile className="tile--sharepoint">S</ProductTile>
      <ProductTile className="tile--power">
        <i />
      </ProductTile>
      <ProductTile className="tile--azure">
        <i />
      </ProductTile>
      <ProductTile className="tile--apps">
        <i />
      </ProductTile>
    </div>
  );
}

function Laurel({ right = false }) {
  return (
    <svg className={right ? 'laurel laurel--right' : 'laurel'} viewBox="0 0 38 92" aria-hidden="true">
      <path d="M29 83C15 66 12 43 24 9" fill="none" stroke="#d99000" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 76c-8-1-10-9-3-13 6-2 9 5 3 13ZM29 64c-7-3-6-11 1-12 6 0 7 8-1 12ZM19 56c-8-2-9-10-2-13 6-1 9 6 2 13ZM26 43c-7-3-5-11 2-12 6 1 6 9-2 12ZM20 32c-7-4-4-12 3-12 6 2 5 9-3 12ZM26 20c-6-4-2-11 4-10 5 3 3 10-4 10Z" fill="#f7a900" />
    </svg>
  );
}

function WorldMap() {
  return (
    <svg className="world-map" viewBox="0 0 620 190" aria-hidden="true">
      <defs>
        <filter id="map-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="route-gradient" x1="0" x2="1">
          <stop offset="0" stopColor="#fa2fb0" />
          <stop offset=".55" stopColor="#6d35ff" />
          <stop offset="1" stopColor="#2e8cff" />
        </linearGradient>
      </defs>
      <g fill="#5b2cff" opacity=".34">
        <path d="M67 72c39-40 93-33 111 5 16 34-11 81-56 78-50-2-77-53-55-83Z" />
        <path d="M196 64c46-24 99-12 116 21 20 38-14 78-74 75-49-2-87-40-42-96Z" />
        <path d="M334 62c57-27 134-15 159 26 25 42-28 74-91 67-52-5-102-47-68-93Z" />
        <path d="M487 92c45-9 93 10 102 41 8 29-27 45-72 33-38-10-68-49-30-74Z" />
      </g>
      <g stroke="url(#route-gradient)" strokeWidth="2.5" fill="none" filter="url(#map-glow)">
        <path d="M148 87c79-49 177-47 269 9" strokeDasharray="6 8" />
        <path d="M148 87c59 58 152 74 239 18" />
        <path d="M417 96c39-23 78-19 117 12" strokeDasharray="5 7" />
      </g>
      <g filter="url(#map-glow)">
        <circle cx="148" cy="87" r="8" fill="#2e8cff" />
        <circle cx="417" cy="96" r="8" fill="#6d35ff" />
        <circle cx="387" cy="105" r="7" fill="#20c98f" />
        <circle cx="534" cy="108" r="7" fill="#fa2fb0" />
      </g>
    </svg>
  );
}

function DeliveryCard() {
  return (
    <div className="delivery-card">
      <div className="delivery-title">
        <Laurel />
        <h3>
          Delivering <span>Excellence</span>
          <small>Across 25+ Countries</small>
        </h3>
        <Laurel right />
      </div>
      <WorldMap />
    </div>
  );
}

function MeetingScene() {
  return (
    <div className="meeting-scene" aria-hidden="true">
      <div className="meeting-room">
        <span className="room-line room-line--one" />
        <span className="room-line room-line--two" />
        <span className="room-line room-line--three" />
        <div className="screen-board">
          <BrandLogo compact />
        </div>
        <div className="table" />
        <span className="person person--one" />
        <span className="person person--two" />
        <span className="person person--three" />
        <span className="person person--four" />
      </div>
    </div>
  );
}

function SocialIcon({ children }) {
  return <span className="social-icon">{children}</span>;
}

export default function Connect() {
  return (
    <section className="connect-page" id="lets-connect">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@700;800;900&display=swap');

        .connect-page,
        .connect-page * {
          box-sizing: border-box;
        }

        .connect-page {
          --navy: #101064;
          --ink: #070556;
          --purple: #6736ff;
          --violet: #8a36ff;
          --pink: #ee2b9b;
          --glass: rgba(255, 255, 255, .72);
          --line: rgba(102, 55, 255, .16);
          position: relative;
          isolation: isolate;
          min-height: 100svh;
          overflow: hidden;
          padding: clamp(18px, 1.7vw, 34px) clamp(22px, 2vw, 40px) clamp(16px, 1.4vw, 28px);
          color: var(--navy);
          font-family: Inter, system-ui, sans-serif;
          background:
            radial-gradient(circle at 12% 82%, rgba(240, 47, 176, .16), transparent 33%),
            radial-gradient(circle at 76% 14%, rgba(113, 67, 255, .18), transparent 35%),
            linear-gradient(118deg, #fbfaff 0%, #f7f1ff 46%, #ffffff 100%);
        }

        .connect-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(92, 58, 210, .055) 1px, transparent 1px),
            linear-gradient(0deg, rgba(92, 58, 210, .045) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,.8), rgba(0,0,0,.45));
        }

        .connect-page::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(circle at 88% 7%, rgba(255,255,255,.95) 0 1px, transparent 2px),
            radial-gradient(circle at 92% 15%, rgba(255,255,255,.9) 0 1px, transparent 2px),
            linear-gradient(132deg, transparent 72%, rgba(118, 89, 242, .16) 72.2%, transparent 73%),
            linear-gradient(138deg, transparent 76%, rgba(118, 89, 242, .13) 76.2%, transparent 77%);
          opacity: .9;
          pointer-events: none;
        }

        .connect-shell {
          width: min(100%, 1870px);
          min-height: calc(100svh - clamp(34px, 3.1vw, 62px));
          margin: 0 auto;
          display: grid;
          grid-template-rows: auto 1fr auto;
          gap: clamp(14px, 1.2vw, 20px);
          position: relative;
        }

        .connect-header {
          display: grid;
          grid-template-columns: minmax(310px, .72fr) minmax(600px, 1.34fr) minmax(250px, .72fr);
          align-items: start;
          gap: clamp(20px, 2vw, 48px);
        }

        .connect-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .connect-brand img {
          width: clamp(58px, 4vw, 80px);
          height: clamp(58px, 4vw, 80px);
          object-fit: contain;
          filter: drop-shadow(0 10px 24px rgba(103,54,255,.15));
          flex: 0 0 auto;
        }

        .connect-brand strong {
          display: block;
          font-family: Poppins, Inter, sans-serif;
          font-size: clamp(30px, 2.1vw, 43px);
          line-height: .98;
          color: var(--ink);
          font-weight: 900;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .connect-brand strong span {
          color: var(--pink);
        }

        .connect-brand small {
          display: block;
          margin-top: 7px;
          color: #2611a7;
          font-size: clamp(13px, .9vw, 18px);
          line-height: 1;
          font-weight: 700;
          white-space: nowrap;
        }

        .connect-brand small span {
          color: #a812c7;
        }

        .connect-brand--compact {
          justify-content: center;
          gap: 6px;
        }

        .connect-brand--compact img {
          width: 34px;
          height: 34px;
        }

        .connect-brand--compact strong {
          font-size: 18px;
          color: #fff;
          white-space: nowrap;
        }

        .connect-brand--compact small {
          margin-top: 3px;
          font-size: 6px;
          color: rgba(255,255,255,.92);
          white-space: nowrap;
        }

        .partner-bar {
          width: 100%;
          padding: clamp(18px, 1.55vw, 28px) clamp(28px, 2vw, 48px);
          border-radius: 24px;
          background: rgba(255,255,255,.63);
          border: 1px solid rgba(255,255,255,.92);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 18px 48px rgba(79, 45, 177, .09);
          backdrop-filter: blur(20px);
        }

        .partner-bar p {
          margin: 0 0 20px;
          text-align: center;
          color: var(--navy);
          font-size: clamp(15px, 1vw, 20px);
          font-weight: 850;
          line-height: 1.1;
        }

        .partner-list {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: clamp(16px, 1.3vw, 28px);
        }

        .partner-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 0;
        }

        .partner-item span:last-child {
          color: var(--navy);
          font-size: clamp(11px, .8vw, 16px);
          line-height: 1.12;
          font-weight: 800;
          max-width: 142px;
        }

        .partner-divider {
          width: 1px;
          height: 42px;
          background: rgba(65, 37, 179, .26);
        }

        .partner-icon {
          position: relative;
          width: clamp(32px, 2.3vw, 45px);
          height: clamp(32px, 2.3vw, 45px);
          flex: 0 0 auto;
        }

        .partner-icon--microsoft {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 3px;
        }

        .partner-icon--microsoft i:nth-child(1) { background: #f25022; }
        .partner-icon--microsoft i:nth-child(2) { background: #7fba00; }
        .partner-icon--microsoft i:nth-child(3) { background: #00a4ef; }
        .partner-icon--microsoft i:nth-child(4) { background: #ffb900; }

        .partner-icon--m365 {
          border-radius: 50%;
          background: conic-gradient(from 25deg, #6236ff, #1764ff, #23d1ff, #6236ff);
          box-shadow: inset 0 0 0 5px rgba(255,255,255,.2);
        }

        .partner-icon--m365 i {
          position: absolute;
          inset: 10px;
          border-radius: 8px;
          background: rgba(255,255,255,.72);
          transform: rotate(45deg);
        }

        .partner-icon--power i,
        .partner-icon--power b {
          position: absolute;
          width: 32px;
          height: 20px;
          border-radius: 4px 14px 4px 14px;
          transform: skewX(-18deg);
          background: #0f9f86;
        }

        .partner-icon--power i {
          top: 5px;
          left: 6px;
        }

        .partner-icon--power b {
          right: 5px;
          bottom: 5px;
          background: #087d76;
        }

        .partner-icon--azure i {
          position: absolute;
          inset: 5px 3px 3px;
          background: linear-gradient(135deg, #0c63c9, #12b4f4);
          clip-path: polygon(49% 0, 95% 92%, 62% 92%, 51% 68%, 36% 92%, 5% 92%);
        }

        .connect-main {
          display: grid;
          grid-template-columns: minmax(420px, .86fr) minmax(400px, .54fr) minmax(430px, .62fr);
          gap: clamp(26px, 2.2vw, 52px);
          align-items: stretch;
          min-height: 0;
        }

        .hero-panel {
          min-height: 0;
          display: grid;
          grid-template-rows: auto 1fr;
          padding-top: clamp(16px, 2vw, 40px);
        }

        .hero-copy h1 {
          margin: 0;
          max-width: 520px;
          font-family: Poppins, Inter, sans-serif;
          font-size: clamp(76px, 6.2vw, 124px);
          line-height: .86;
          font-weight: 900;
          letter-spacing: 0;
          color: var(--navy);
        }

        .hero-copy h1 span {
          display: inline-block;
          background: linear-gradient(105deg, #1819d0 0%, #6f32ee 45%, #f02f98 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-copy p {
          max-width: 470px;
          margin: clamp(20px, 1.4vw, 26px) 0 0;
          color: var(--navy);
          font-size: clamp(18px, 1.16vw, 23px);
          line-height: 1.38;
          font-weight: 700;
        }

        .hero-copy p span {
          color: #cf1ca7;
          font-weight: 900;
        }

        .device-scene {
          position: relative;
          min-height: clamp(320px, 34vw, 560px);
          align-self: end;
        }

        .city {
          position: absolute;
          bottom: 50px;
          width: 46%;
          height: 255px;
          opacity: .55;
          background:
            linear-gradient(to top, rgba(118, 80, 255, .55), rgba(118, 80, 255, 0)),
            repeating-linear-gradient(90deg, transparent 0 13px, rgba(114, 66, 230, .32) 13px 17px, transparent 17px 36px);
          clip-path: polygon(0 100%,0 70%,3% 70%,3% 44%,5% 44%,5% 82%,9% 82%,9% 36%,12% 36%,12% 83%,16% 83%,16% 64%,20% 64%,20% 39%,23% 39%,23% 100%,100% 100%,100% 72%,95% 72%,95% 52%,91% 52%,91% 84%,86% 84%,86% 34%,83% 34%,83% 92%,78% 92%,78% 60%,74% 60%,74% 43%,71% 43%,71% 100%);
        }

        .city--left {
          left: -40px;
        }

        .city--right {
          right: -10px;
          transform: scaleX(-1);
        }

        .orbit {
          position: absolute;
          border: 4px solid rgba(116, 93, 232, .22);
          border-bottom-color: transparent;
          border-left-color: rgba(255,255,255,.45);
          border-radius: 50%;
          filter: drop-shadow(0 0 12px rgba(135, 92, 255, .2));
        }

        .orbit--one {
          width: 470px;
          height: 280px;
          left: 130px;
          bottom: 105px;
          transform: rotate(-18deg);
        }

        .orbit--two {
          width: 350px;
          height: 210px;
          left: 220px;
          bottom: 128px;
          transform: rotate(10deg);
          opacity: .55;
        }

        .platform {
          position: absolute;
          left: 88px;
          bottom: 18px;
          width: min(610px, 90%);
          height: 138px;
          border-radius: 50%;
          background:
            radial-gradient(ellipse at center, rgba(255,255,255,.92) 0 34%, rgba(137, 86, 255, .35) 56%, rgba(137, 86, 255, 0) 70%),
            linear-gradient(180deg, rgba(255,255,255,.75), rgba(84,37,201,.22));
          border: 2px solid rgba(255,255,255,.65);
          box-shadow:
            inset 0 -12px 28px rgba(90, 39, 210, .24),
            0 16px 55px rgba(81, 49, 180, .27);
          transform: perspective(850px) rotateX(58deg);
        }

        .platform span:first-child,
        .platform span:last-child {
          position: absolute;
          inset: 12px;
          border-radius: inherit;
          border: 4px solid rgba(254, 54, 192, .45);
          box-shadow: 0 0 20px rgba(254, 54, 192, .45);
        }

        .platform span:last-child {
          inset: 28px;
          border-color: rgba(83, 51, 255, .32);
        }

        .laptop {
          position: absolute;
          left: clamp(90px, 7.2vw, 150px);
          bottom: 78px;
          width: clamp(290px, 20vw, 390px);
          transform: perspective(850px) rotateX(7deg) rotateY(-16deg) rotateZ(3deg);
          filter: drop-shadow(0 28px 28px rgba(24, 11, 84, .28));
        }

        .laptop-screen {
          height: clamp(160px, 11vw, 214px);
          border-radius: 16px 16px 8px 8px;
          padding: 48px 28px;
          background:
            radial-gradient(circle at 90% 85%, rgba(255, 47, 188, .52), transparent 32%),
            radial-gradient(circle at 8% 9%, rgba(99, 67, 255, .35), transparent 25%),
            linear-gradient(135deg, #09043a, #1c157b 55%, #3d21b8);
          border: 7px solid #18205d;
          box-shadow: inset 0 0 0 2px rgba(255,255,255,.1);
          overflow: hidden;
        }

        .screen-wave {
          position: absolute;
          left: -12%;
          bottom: 25px;
          width: 124%;
          height: 44px;
          border-top: 4px solid rgba(255, 73, 198, .8);
          border-radius: 50%;
          transform: rotate(-8deg);
          filter: drop-shadow(0 0 12px rgba(255, 50, 192, .9));
        }

        .screen-wave--two {
          bottom: 5px;
          border-color: rgba(155, 99, 255, .75);
          transform: rotate(-3deg);
        }

        .laptop-base {
          height: 34px;
          margin: -2px auto 0;
          width: 116%;
          transform: translateX(-8%);
          border-radius: 8px 8px 30px 30px;
          background: linear-gradient(180deg, #b9b5eb, #625aa9 42%, #2a2a66 100%);
          box-shadow: inset 0 2px 0 rgba(255,255,255,.55);
        }

        .phone-device {
          position: absolute;
          left: clamp(390px, 27vw, 520px);
          bottom: 100px;
          width: clamp(82px, 5.5vw, 108px);
          height: clamp(176px, 11.5vw, 220px);
          padding: 9px;
          border-radius: 24px;
          background: #15115d;
          box-shadow: 0 19px 28px rgba(24, 11, 84, .32);
          transform: perspective(700px) rotateY(-17deg) rotateZ(-5deg);
        }

        .phone-device div {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          border-radius: 17px;
          background: linear-gradient(180deg, #fbf8ff, #cbbcff);
          overflow: hidden;
        }

        .phone-device img {
          width: 42px;
        }

        .phone-device span {
          position: absolute;
          bottom: 20px;
          width: 22px;
          height: 3px;
          border-radius: 999px;
          background: rgba(255,255,255,.7);
        }

        .product-tile {
          position: absolute;
          width: clamp(58px, 4.2vw, 82px);
          height: clamp(58px, 4.2vw, 82px);
          display: grid;
          place-items: center;
          border-radius: 17px;
          background: rgba(255,255,255,.76);
          border: 1px solid rgba(255,255,255,.95);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 16px 28px rgba(89, 48, 201, .18);
          color: #fff;
          font-weight: 900;
          font-size: 26px;
          animation: tileFloat 4.8s ease-in-out infinite;
        }

        .tile--teams {
          right: 160px;
          top: 40px;
          background: linear-gradient(135deg, rgba(255,255,255,.85), rgba(222,214,255,.82));
          color: #5135c7;
        }

        .tile--sharepoint {
          right: 36px;
          top: 94px;
          background: linear-gradient(135deg, #0a8c86, #006b72);
          animation-delay: .5s;
        }

        .tile--power {
          left: 150px;
          top: 145px;
          animation-delay: 1s;
        }

        .tile--power i {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, #dc35cb, #7b22b5);
          transform: rotate(45deg);
        }

        .tile--azure {
          right: 260px;
          top: 192px;
          animation-delay: 1.4s;
        }

        .tile--azure i {
          width: 38px;
          height: 34px;
          clip-path: polygon(50% 0, 100% 100%, 63% 100%, 50% 70%, 32% 100%, 0 100%);
          background: linear-gradient(135deg, #1064dd, #26c1ff);
        }

        .tile--apps {
          right: 120px;
          top: 230px;
          animation-delay: 1.8s;
        }

        .tile--apps i {
          width: 34px;
          height: 34px;
          border-radius: 7px;
          background: linear-gradient(135deg, #f4a515, #f5c544);
          box-shadow: -12px 14px 0 -5px #f6bd32, 12px 10px 0 -5px #d68b09;
        }

        .tile--power-bi {
          right: 72px;
          top: 220px;
          display: none;
        }

        .center-panel {
          padding-top: clamp(12px, 1.7vw, 34px);
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 20px;
        }

        .section-label::before,
        .section-label::after {
          content: "";
          height: 2px;
          flex: 1;
          background: linear-gradient(90deg, transparent, rgba(100, 57, 237, .25));
        }

        .section-label::after {
          background: linear-gradient(90deg, rgba(100, 57, 237, .25), transparent);
        }

        .section-label span {
          color: var(--pink);
          font-size: clamp(14px, 1vw, 20px);
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .contact-list {
          display: grid;
          gap: clamp(12px, 1vw, 18px);
        }

        .contact-row {
          min-height: clamp(76px, 5.7vw, 98px);
          display: grid;
          grid-template-columns: clamp(56px, 4.3vw, 74px) 1fr auto;
          align-items: center;
          gap: clamp(16px, 1.25vw, 24px);
          padding: clamp(13px, 1vw, 18px) clamp(16px, 1.3vw, 24px);
          color: var(--navy);
          text-decoration: none;
          border-radius: 23px;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(255,255,255,.95);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 20px 44px rgba(72, 40, 170, .08);
          backdrop-filter: blur(18px);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .contact-row:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 50px rgba(72, 40, 170, .14);
        }

        .contact-icon {
          width: clamp(56px, 4.3vw, 74px);
          height: clamp(56px, 4.3vw, 74px);
          display: grid;
          place-items: center;
          border-radius: 16px;
          color: #fff;
          background: linear-gradient(145deg, #9a55ff 0%, #4a21cc 100%);
          box-shadow:
            inset 0 2px 0 rgba(255,255,255,.25),
            0 12px 22px rgba(85, 36, 203, .31);
        }

        .contact-copy {
          min-width: 0;
        }

        .contact-copy strong {
          display: block;
          color: var(--navy);
          font-size: clamp(18px, 1.35vw, 25px);
          line-height: 1.12;
          font-weight: 900;
          margin-bottom: 5px;
        }

        .contact-copy span {
          display: block;
          color: var(--navy);
          font-size: clamp(16px, 1.25vw, 23px);
          line-height: 1.12;
          font-weight: 500;
          word-break: break-word;
        }

        .flag {
          width: clamp(40px, 3.3vw, 58px);
          height: clamp(40px, 3.3vw, 58px);
          display: grid;
          place-items: center;
          border-radius: 50%;
          padding: 5px;
          background: rgba(255,255,255,.85);
          border: 1px solid rgba(122, 86, 232, .18);
          box-shadow: 0 10px 20px rgba(62, 35, 140, .12);
        }

        .flag svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .delivery-card {
          margin-top: clamp(14px, 1.2vw, 22px);
          min-height: clamp(150px, 12vw, 220px);
          padding: 14px 20px 4px;
          display: grid;
          place-items: center;
          border-radius: 24px;
          background: rgba(255,255,255,.68);
          border: 1px solid rgba(255,255,255,.94);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.96),
            0 20px 42px rgba(72, 40, 170, .08);
          overflow: hidden;
        }

        .delivery-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 1vw, 20px);
        }

        .delivery-title h3 {
          margin: 0;
          text-align: center;
          color: #151074;
          font-size: clamp(21px, 1.6vw, 31px);
          line-height: 1.08;
          font-weight: 900;
        }

        .delivery-title h3 span {
          color: var(--pink);
        }

        .delivery-title h3 small {
          display: block;
          margin-top: 4px;
          font-size: clamp(16px, 1.2vw, 23px);
          color: #3224d5;
          font-weight: 800;
        }

        .laurel {
          width: clamp(26px, 1.9vw, 38px);
          height: clamp(62px, 4.8vw, 92px);
        }

        .laurel--right {
          transform: scaleX(-1);
        }

        .world-map {
          width: min(100%, 520px);
          margin-top: -2px;
          filter: drop-shadow(0 8px 18px rgba(99, 54, 255, .2));
        }

        .right-panel {
          padding-top: clamp(8px, 1.2vw, 22px);
          display: flex;
        }

        .discovery-card {
          position: relative;
          width: 100%;
          min-height: 100%;
          padding: clamp(28px, 2vw, 42px);
          border-radius: 32px;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(255,255,255,.95);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.98),
            0 30px 72px rgba(72, 40, 170, .12);
          backdrop-filter: blur(24px);
          display: flex;
          flex-direction: column;
        }

        .discovery-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
        }

        .discovery-eyebrow {
          display: block;
          color: #1b20c9;
          font-size: clamp(15px, 1vw, 20px);
          font-weight: 900;
          letter-spacing: .08em;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .discovery-top h2 {
          margin: 7px 0 0;
          font-family: Poppins, Inter, sans-serif;
          color: #2510ca;
          font-size: clamp(38px, 3vw, 62px);
          line-height: .96;
          font-weight: 900;
          letter-spacing: 0;
        }

        .discovery-top h2 span {
          color: var(--pink);
        }

        .calendar-tile {
          width: clamp(54px, 4vw, 78px);
          height: clamp(54px, 4vw, 78px);
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 16px;
          color: var(--pink);
          background: rgba(255,255,255,.58);
          border: 2px solid rgba(240, 47, 155, .28);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.8), 0 13px 28px rgba(236, 43, 155, .16);
        }

        .discovery-card p {
          margin: clamp(18px, 1.3vw, 26px) 0 clamp(18px, 1.5vw, 30px);
          color: var(--navy);
          font-size: clamp(15px, 1vw, 19px);
          line-height: 1.48;
          font-weight: 600;
          max-width: 500px;
        }

        .meeting-scene {
          width: 100%;
          aspect-ratio: 2.18;
          overflow: hidden;
          border-radius: 22px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.26), rgba(255,255,255,.08)),
            linear-gradient(135deg, #b68aff, #2f1aa0 58%, #f565c7);
          box-shadow: 0 22px 38px rgba(54, 25, 134, .19);
          border: 1px solid rgba(255,255,255,.7);
        }

        .meeting-room {
          position: relative;
          width: 100%;
          height: 100%;
          background:
            linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 38%, rgba(255,255,255,.28), transparent 35%);
          background-size: 60px 60px, 60px 60px, auto;
        }

        .room-line {
          position: absolute;
          background: rgba(255,255,255,.34);
          transform-origin: center;
        }

        .room-line--one {
          left: 0;
          right: 0;
          top: 26%;
          height: 1px;
        }

        .room-line--two {
          width: 1px;
          height: 86%;
          left: 13%;
          top: 0;
        }

        .room-line--three {
          width: 1px;
          height: 86%;
          right: 13%;
          top: 0;
        }

        .screen-board {
          position: absolute;
          left: 14%;
          top: 18%;
          width: 72%;
          height: 45%;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(255,255,255,.95), rgba(244, 238, 255, .95));
          border: 4px solid rgba(76, 35, 195, .76);
          box-shadow: 0 12px 32px rgba(30, 14, 82, .28);
        }

        .screen-board .connect-brand--compact strong {
          color: var(--navy);
          font-size: clamp(15px, 1.2vw, 23px);
        }

        .screen-board .connect-brand--compact small {
          color: #5d2aea;
          font-size: clamp(5px, .4vw, 8px);
        }

        .screen-board .connect-brand--compact img {
          width: clamp(28px, 2.1vw, 40px);
          height: clamp(28px, 2.1vw, 40px);
        }

        .table {
          position: absolute;
          left: 22%;
          bottom: 7%;
          width: 56%;
          height: 17%;
          border-radius: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,.42), rgba(62, 35, 186, .32));
          border: 1px solid rgba(255,255,255,.45);
        }

        .person {
          position: absolute;
          bottom: 9%;
          width: 13%;
          height: 24%;
          border-radius: 45% 45% 18% 18%;
          background: #1e176d;
          box-shadow: inset 0 24px 0 -12px #262184;
        }

        .person::before {
          content: "";
          position: absolute;
          top: -22%;
          left: 29%;
          width: 42%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: inherit;
        }

        .person--one {
          left: 7%;
          background: #25206e;
        }

        .person--two {
          left: 20%;
          background: #13135f;
        }

        .person--three {
          right: 20%;
          background: #15145f;
        }

        .person--four {
          right: 7%;
          background: #29235d;
        }

        .benefits {
          display: grid;
          gap: clamp(14px, 1.3vw, 22px);
          margin: clamp(22px, 2vw, 34px) 0 clamp(22px, 2vw, 34px);
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 20px;
          color: var(--navy);
          font-size: clamp(15px, 1vw, 20px);
          font-weight: 850;
        }

        .benefit i {
          width: clamp(33px, 2.5vw, 46px);
          height: clamp(33px, 2.5vw, 46px);
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          color: #fff;
          background: linear-gradient(145deg, #8f4cff, #3b1dcc);
          box-shadow: 0 9px 18px rgba(73, 34, 193, .25);
        }

        .discovery-cta {
          margin-top: auto;
          min-height: clamp(56px, 4vw, 74px);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          border: 0;
          border-radius: 21px;
          color: #fff;
          font-size: clamp(16px, 1.2vw, 22px);
          font-weight: 900;
          background: linear-gradient(105deg, #2e20d4, #7232ef 54%, #fa368d);
          box-shadow: 0 16px 30px rgba(105, 46, 221, .34), inset 0 1px 0 rgba(255,255,255,.36);
          cursor: pointer;
        }

        .connect-footer {
          position: relative;
          min-height: clamp(70px, 5.3vw, 104px);
          display: grid;
          grid-template-columns: minmax(320px, .9fr) minmax(470px, 1.25fr) auto auto;
          align-items: center;
          gap: clamp(18px, 1.7vw, 34px);
          padding: clamp(14px, 1.2vw, 24px) clamp(28px, 2.4vw, 56px);
          color: #fff;
          border-radius: 18px;
          background: linear-gradient(100deg, #4017d1 0%, #5e1dde 58%, #ed37bd 100%);
          box-shadow: 0 18px 36px rgba(74, 25, 207, .28);
        }

        .footer-company strong {
          display: block;
          font-size: clamp(18px, 1.35vw, 25px);
          line-height: 1.1;
          font-weight: 900;
        }

        .footer-company span {
          display: block;
          margin-top: 9px;
          font-size: clamp(14px, 1vw, 18px);
          font-weight: 600;
        }

        .footer-locations {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(16px, 1.8vw, 36px);
          min-width: 0;
        }

        .footer-locations span {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-size: clamp(15px, 1vw, 19px);
          line-height: 1;
          font-weight: 800;
          white-space: nowrap;
        }

        .footer-locations span + span::before {
          content: "";
          position: absolute;
          left: calc(-1 * clamp(8px, .9vw, 18px));
          width: 1px;
          height: 22px;
          background: rgba(255,255,255,.27);
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: clamp(12px, 1vw, 18px);
        }

        .social-icon {
          width: clamp(42px, 3.2vw, 58px);
          height: clamp(42px, 3.2vw, 58px);
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255,255,255,.18);
          border: 2px solid rgba(255,255,255,.55);
          box-shadow: inset 0 2px 0 rgba(255,255,255,.28), 0 10px 20px rgba(30, 8, 90, .16);
          font-size: clamp(18px, 1.3vw, 24px);
          font-weight: 900;
        }

        .years-shield {
          width: clamp(92px, 7vw, 132px);
          min-height: clamp(76px, 5.5vw, 104px);
          display: grid;
          place-items: center;
          padding: 10px;
          text-align: center;
          color: #ffe56c;
          background: linear-gradient(160deg, #8e1f8d, #451bc3 55%, #b01a80);
          border: 4px solid #ffca50;
          clip-path: polygon(50% 0, 92% 13%, 92% 60%, 50% 100%, 8% 60%, 8% 13%);
          filter: drop-shadow(0 14px 16px rgba(68, 18, 123, .25));
          transform: translateY(-22px);
        }

        .years-shield strong {
          display: block;
          font-size: clamp(28px, 2.3vw, 42px);
          line-height: .86;
          font-weight: 900;
        }

        .years-shield span {
          display: block;
          color: #fff29a;
          font-size: clamp(12px, .9vw, 16px);
          line-height: 1;
          font-weight: 900;
          text-transform: uppercase;
        }

        .years-shield small {
          display: block;
          margin-top: 5px;
          padding: 3px 7px;
          border-radius: 999px;
          color: #86216e;
          background: #ffd66e;
          font-size: clamp(8px, .6vw, 11px);
          line-height: 1;
          font-weight: 900;
        }

        @keyframes tileFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @media (max-width: 1500px) {
          .connect-page {
            padding: 14px 30px 10px;
          }

          .connect-shell {
            gap: 12px;
          }

          .connect-header {
            grid-template-columns: 340px 1fr 140px;
          }

          .partner-bar {
            padding: 13px 28px;
          }

          .partner-bar p {
            margin-bottom: 12px;
          }

          .connect-main {
            grid-template-columns: minmax(360px, .82fr) minmax(370px, .6fr) minmax(360px, .52fr);
            gap: 24px;
          }

          .hero-panel,
          .center-panel,
          .right-panel {
            padding-top: 12px;
          }

          .hero-copy h1 {
            font-size: clamp(70px, 6vw, 98px);
          }

          .hero-copy p {
            max-width: 390px;
            font-size: 15px;
          }

          .device-scene {
            min-height: 360px;
          }

          .city {
            bottom: 32px;
            height: 205px;
          }

          .orbit--one {
            width: 360px;
            height: 215px;
            left: 90px;
            bottom: 80px;
          }

          .orbit--two {
            width: 275px;
            height: 170px;
            left: 160px;
            bottom: 94px;
          }

          .platform {
            left: 60px;
            bottom: -2px;
            width: 450px;
          }

          .laptop {
            left: 85px;
            bottom: 55px;
            width: 285px;
          }

          .phone-device {
            left: 340px;
            bottom: 75px;
            width: 78px;
            height: 160px;
          }

          .tile--teams {
            right: 82px;
            top: 8px;
          }

          .tile--sharepoint {
            right: 4px;
            top: 62px;
          }

          .tile--power {
            left: 96px;
            top: 110px;
          }

          .tile--azure {
            right: 165px;
            top: 130px;
          }

          .tile--apps {
            right: 72px;
            top: 160px;
          }

          .contact-list {
            gap: 10px;
          }

          .contact-row {
            min-height: 72px;
          }

          .delivery-card {
            min-height: 176px;
          }

          .discovery-card {
            padding: 22px;
            border-radius: 24px;
          }

          .benefits {
            gap: 12px;
            margin: 18px 0;
          }

          .connect-footer {
            grid-template-columns: minmax(260px, .8fr) minmax(420px, 1fr) auto auto;
            padding: 12px 42px;
          }
        }

        @media (max-width: 1180px) {
          .connect-page {
            overflow: visible;
          }

          .connect-header {
            grid-template-columns: 1fr;
          }

          .connect-header > span {
            display: none;
          }

          .partner-bar {
            max-width: 900px;
            justify-self: center;
          }

          .connect-main {
            grid-template-columns: 1fr;
          }

          .hero-panel {
            min-height: auto;
          }

          .device-scene {
            min-height: 430px;
          }

          .right-panel,
          .center-panel {
            max-width: 760px;
            width: 100%;
            justify-self: center;
            margin: 0 auto;
          }

          .connect-footer {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
          }

          .footer-locations {
            flex-wrap: wrap;
          }

          .years-shield {
            transform: none;
          }
        }

        @media (max-width: 720px) {
          .connect-page {
            padding: 18px 14px;
          }

          .connect-brand {
            justify-content: center;
            text-align: left;
          }

          .connect-brand img {
            width: 48px;
            height: 48px;
          }

          .connect-brand strong {
            font-size: 23px;
          }

          .connect-brand small {
            font-size: 10px;
          }

          .partner-list {
            grid-template-columns: 1fr;
          }

          .partner-divider {
            display: none;
          }

          .hero-copy {
            text-align: center;
          }

          .hero-copy h1,
          .hero-copy p {
            max-width: none;
          }

          .hero-copy h1 {
            font-size: 62px;
          }

          .device-scene {
            min-height: 315px;
            transform: scale(.78);
            transform-origin: center top;
            margin-bottom: -60px;
          }

          .contact-row {
            grid-template-columns: 52px 1fr auto;
            border-radius: 18px;
          }

          .contact-icon {
            width: 52px;
            height: 52px;
          }

          .contact-copy strong {
            font-size: 16px;
          }

          .contact-copy span {
            font-size: 14px;
          }

          .discovery-top h2 {
            font-size: 37px;
          }

          .footer-locations span + span::before {
            display: none;
          }
        }
      `}</style>

      <div className="connect-shell">
        <header className="connect-header">
          <BrandLogo />
          <PartnerBar />
          <span />
        </header>

        <main className="connect-main">
          <section className="hero-panel" aria-label="Let's Connect">
            <div className="hero-copy">
              <h1>
                Let's
                <br />
                <span>Connect</span>
              </h1>
              <p>
                We'd love to understand your upcoming projects and explore how Desire Infoweb can be your{' '}
                <span>extended delivery arm.</span>
              </p>
            </div>
            <HeroDeviceScene />
          </section>

          <section className="center-panel" aria-label="Contact details">
            <div className="section-label">
              <span>Get In Touch</span>
            </div>
            <div className="contact-list">
              {contacts.map((contact) => (
                <ContactCard key={contact.label} contact={contact} />
              ))}
            </div>
            <DeliveryCard />
          </section>

          <aside className="right-panel" aria-label="Schedule a discovery call">
            <div className="discovery-card">
              <div className="discovery-top">
                <div>
                  <span className="discovery-eyebrow">Schedule for a</span>
                  <h2>
                    Discovery <span>Call</span>
                  </h2>
                </div>
                <span className="calendar-tile" aria-hidden="true">
                  <Calendar size={34} />
                </span>
              </div>

              <p>
                FREE 30-minute discovery call to understand your requirements and suggest the best way we can support your team.
              </p>

              <MeetingScene />

              <div className="benefits">
                <div className="benefit">
                  <i>
                    <Calendar size={20} />
                  </i>
                  <span>Reach out to book your slot</span>
                </div>
                <div className="benefit">
                  <i>
                    <ShieldCheck size={20} />
                  </i>
                  <span>No commitment required</span>
                </div>
                <div className="benefit">
                  <i>
                    <Clock size={20} />
                  </i>
                  <span>Response within 24 hours</span>
                </div>
              </div>

              <button className="discovery-cta" type="button">
                Book Your Discovery Call
                <ArrowRight size={24} />
              </button>
            </div>
          </aside>
        </main>

        <footer className="connect-footer">
          <div className="footer-company">
            <strong>Desire Infoweb Pvt. Ltd.</strong>
            <span>Your Extended Technology Partner - Delivering Excellence Across 25+ Countries</span>
          </div>
          <div className="footer-locations">
            <span>
              <Globe2 size={19} /> www.desireinfoweb.com
            </span>
            <span>
              <MapPin size={18} /> Ahmedabad, India
            </span>
            <span>Canada</span>
            <span>USA</span>
          </div>
          <div className="footer-socials" aria-label="Social links">
            <SocialIcon>in</SocialIcon>
            <SocialIcon>
              <Award size={25} />
            </SocialIcon>
            <SocialIcon>
              <Video size={25} />
            </SocialIcon>
            <SocialIcon>B</SocialIcon>
          </div>
          <div className="years-shield" aria-label="10 plus years of excellence">
            <div>
              <strong>10+</strong>
              <span>Years</span>
              <small>Of Excellence</small>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
