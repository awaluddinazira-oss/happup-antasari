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
        background: '#fff',
        border: '2px solid rgba(212,175,55,0.5)',
        boxShadow: '0 4px 20px rgba(0,0,0,.3), 0 0 0 1px rgba(212,175,55,0.1)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.2s, border-color 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#d4af37';
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,.25), 0 0 16px rgba(212,175,55,.3)';
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.3), 0 0 0 1px rgba(212,175,55,0.1)';
        e.currentTarget.style.transform = visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)';
      }}
    >
      {/* Happy Puppy Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Logo Puppy.png"
        alt="Happy Puppy"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </button>
  );
}
