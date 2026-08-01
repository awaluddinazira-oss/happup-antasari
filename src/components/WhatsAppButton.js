"use client";

import { useState } from 'react';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const greeting = `Halo Happup Antasari! 👋\nSaya ingin menanyakan informasi lebih lanjut mengenai karaoke di sini.`;

  const handleClick = () => {
    const url = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(greeting)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55), 0 6px 24px rgba(0,0,0,0.2); }
          70%  { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0), 0 6px 24px rgba(0,0,0,0.2); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0), 0 6px 24px rgba(0,0,0,0.2); }
        }
        #wa-chat-btn {
          animation: wa-pulse 2.8s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        #wa-chat-btn:hover {
          animation: none;
        }
      `}</style>

      {/* Tooltip */}
      <div
        style={{
          position: 'fixed',
          bottom: '172px',
          right: '80px',
          zIndex: 499,
          background: 'linear-gradient(135deg, #128c7e 0%, #25d366 100%)',
          color: '#fff',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.3px',
          padding: '7px 14px',
          borderRadius: '20px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0) scale(1)' : 'translateX(8px) scale(0.9)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
          boxShadow: '0 2px 12px rgba(37,211,102,0.4)',
        }}
      >
        💬 Chat WhatsApp
        {/* Arrow */}
        <span style={{
          position: 'absolute',
          right: '-7px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 0, height: 0,
          borderTop: '7px solid transparent',
          borderBottom: '7px solid transparent',
          borderLeft: '7px solid #25d366',
        }} />
      </div>

      {/* Floating button */}
      <button
        id="wa-chat-btn"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        aria-label="Chat via WhatsApp"
        title="Chat dengan Kami di WhatsApp"
        style={{
          position: 'fixed',
          bottom: '164px',
          right: '22px',
          zIndex: 500,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: hovered
            ? 'linear-gradient(135deg, #2edb6e 0%, #20b858 100%)'
            : 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          border: '2.5px solid rgba(255,255,255,0.35)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0',
          transform: pressed
            ? 'scale(0.92)'
            : hovered
            ? 'translateY(-4px) scale(1.1)'
            : 'scale(1)',
          transition: 'background 0.25s, transform 0.2s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Official WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </>
  );
}
