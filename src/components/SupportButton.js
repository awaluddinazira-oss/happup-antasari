"use client";

import { useState } from 'react';

const shopeeLinks = [
  "https://s.shopee.co.id/60Q0pKp76y",
  "https://s.shopee.co.id/6AjR1doTm1",
  "https://s.shopee.co.id/6L2rDwnqR4",
  "https://s.shopee.co.id/6VMHQFnD67",
  "https://s.shopee.co.id/6ffhcYmZlA",
  "https://s.shopee.co.id/5AqmDlp98q",
  "https://s.shopee.co.id/50XM1SpmTp",
  "https://s.shopee.co.id/4qDvp9qPoo",
  "https://s.shopee.co.id/4fuVcqr39n",
  "https://s.shopee.co.id/4Vb5QXrgUm",
  "https://s.shopee.co.id/1LeBG4Ypsz",
  "https://s.shopee.co.id/1qaRqzWvs6",
  "https://s.shopee.co.id/1gH1egXZD5",
  "https://s.shopee.co.id/3Vifq3QaUS",
  "https://s.shopee.co.id/3LPFdkRDpR",
  "https://s.shopee.co.id/2Vq8eRePgF",
  "https://s.shopee.co.id/2g9YqkdmLI",
  "https://s.shopee.co.id/2qSz33d90L",
  "https://s.shopee.co.id/30mPFMcVfO",
  "https://s.shopee.co.id/3B5pRfbsKR",
  "https://s.shopee.co.id/5LAK1t1ZLM",
  "https://s.shopee.co.id/5VTkEC0w0P",
  "https://s.shopee.co.id/5fnAQV0IfS",
  "https://s.shopee.co.id/5q6acnzfKV",
  "https://s.shopee.co.id/60Q0p6z1zY",
];

function getRandomShopeeLink() {
  return shopeeLinks[Math.floor(Math.random() * shopeeLinks.length)];
}

export default function SupportButton() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    const link = getRandomShopeeLink();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        @keyframes support-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(238, 77, 45, 0.55), 0 6px 24px rgba(0,0,0,0.25); }
          70%  { box-shadow: 0 0 0 12px rgba(238, 77, 45, 0), 0 6px 24px rgba(0,0,0,0.25); }
          100% { box-shadow: 0 0 0 0 rgba(238, 77, 45, 0), 0 6px 24px rgba(0,0,0,0.25); }
        }
        @keyframes support-badge-pop {
          0%   { transform: scale(0.7) translateX(6px); opacity: 0; }
          60%  { transform: scale(1.08) translateX(0); opacity: 1; }
          100% { transform: scale(1) translateX(0); opacity: 1; }
        }
        #support-btn {
          animation: support-pulse 2.5s ease-in-out infinite;
        }
        #support-btn:hover {
          animation: none;
        }
      `}</style>

      {/* Tooltip label */}
      <div
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '22px',
          zIndex: 499,
          background: 'linear-gradient(135deg, #ee4d2d 0%, #ff7337 100%)',
          color: '#fff',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.5px',
          padding: '5px 10px',
          borderRadius: '20px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0) scale(1)' : 'translateX(8px) scale(0.9)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
          boxShadow: '0 2px 10px rgba(238,77,45,0.35)',
          animation: hovered ? 'support-badge-pop 0.25s ease forwards' : 'none',
        }}
      >
        🛒 Beli di Shopee
      </div>

      {/* Floating button */}
      <button
        id="support-btn"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        aria-label="Dukung kami di Shopee"
        title="Dukung Kami — Beli di Shopee"
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '22px',
          zIndex: 500,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: hovered
            ? 'linear-gradient(135deg, #ff7337 0%, #ee4d2d 100%)'
            : 'linear-gradient(135deg, #ee4d2d 0%, #c0392b 100%)',
          border: '2.5px solid rgba(255,255,255,0.35)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          padding: '6px',
          transform: pressed
            ? 'scale(0.92)'
            : hovered
            ? 'translateY(-4px) scale(1.1)'
            : 'scale(1)',
          transition: 'background 0.25s, transform 0.2s cubic-bezier(0.22,1,0.36,1), border-color 0.2s',
        }}
      >
        {/* Shopee icon (SVG) */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Shopping bag shape (Shopee-style) */}
          <rect x="8" y="24" width="48" height="34" rx="5" fill="white" fillOpacity="0.92"/>
          <path d="M22 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <circle cx="24" cy="36" r="3" fill="#ee4d2d"/>
          <circle cx="40" cy="36" r="3" fill="#ee4d2d"/>
          <rect x="20" y="44" width="24" height="4" rx="2" fill="#ee4d2d" fillOpacity="0.5"/>
        </svg>
        <span style={{
          fontSize: '7.5px',
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '0.3px',
          lineHeight: 1,
          textTransform: 'uppercase',
        }}>
          Support
        </span>
      </button>
    </>
  );
}
