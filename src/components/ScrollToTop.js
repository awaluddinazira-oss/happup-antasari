"use client";

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '22px',
        zIndex: 500,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'rgba(17, 17, 20, 0.85)',
        border: '1.5px solid rgba(212,175,55,0.35)',
        boxShadow: '0 4px 20px rgba(0,0,0,.5), 0 0 0 1px rgba(212,175,55,0.08)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s, border-color 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#d4af37';
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,.6), 0 0 16px rgba(212,175,55,.22)';
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.06)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(212,175,55,0.35)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.5), 0 0 0 1px rgba(212,175,55,0.08)';
        e.currentTarget.style.transform = visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)';
      }}
    >
      {/* Chef circular logo SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="56"
        height="56"
        aria-hidden="true"
      >
        {/* Circle background */}
        <circle cx="50" cy="50" r="50" fill="#c0bfbf" />
        {/* Chef silhouette - white */}
        <g fill="white">
          {/* Chef head */}
          <ellipse cx="50" cy="30" rx="10" ry="11" />
          {/* Chef hat base */}
          <ellipse cx="50" cy="22" rx="8" ry="5" />
          <rect x="42" y="17" width="16" height="8" rx="3" />
          {/* Chef hat top puff */}
          <ellipse cx="50" cy="16" rx="10" ry="5" />
          {/* Body */}
          <ellipse cx="50" cy="58" rx="16" ry="18" />
          {/* Left arm */}
          <ellipse cx="30" cy="55" rx="7" ry="5" transform="rotate(-30 30 55)" />
          {/* Left hand / bowl */}
          <ellipse cx="22" cy="63" rx="8" ry="5" />
          <rect x="18" y="60" width="16" height="4" rx="2" />
          {/* Right arm */}
          <ellipse cx="70" cy="52" rx="7" ry="5" transform="rotate(20 70 52)" />
          {/* Right hand */}
          <ellipse cx="77" cy="60" rx="6" ry="4" />
          {/* Legs */}
          <ellipse cx="43" cy="78" rx="7" ry="10" />
          <ellipse cx="57" cy="78" rx="7" ry="10" />
        </g>
      </svg>
    </button>
  );
}
