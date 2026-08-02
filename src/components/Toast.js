"use client";

import React, { useState, useEffect, useCallback } from 'react';

export default function Toast({ message, type = 'success', duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    requestAnimationFrame(() => {
      setIsVisible(true);
    });

    // Auto dismiss
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsLeaving(false);
      if (onClose) onClose();
    }, 300);
  }, [onClose]);

  const icons = {
    success: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    error: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    warning: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    info: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  };

  const colors = {
    success: {
      bg: 'rgba(34, 197, 94, 0.95)',
      border: '#22c55e',
      icon: '#ffffff',
    },
    error: {
      bg: 'rgba(239, 68, 68, 0.95)',
      border: '#ef4444',
      icon: '#ffffff',
    },
    warning: {
      bg: 'rgba(245, 158, 11, 0.95)',
      border: '#f59e0b',
      icon: '#ffffff',
    },
    info: {
      bg: 'rgba(59, 130, 246, 0.95)',
      border: '#3b82f6',
      icon: '#ffffff',
    },
  };

  if (!isVisible) return null;

  const color = colors[type] || colors.success;

  return (
    <>
      <style>{`
        @keyframes toastSlideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes toastSlideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
      <div
        role="alert"
        aria-live="polite"
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '50%',
          transform: `translateX(-50%) translateY(${isLeaving ? '20px' : '0'})`,
          opacity: isLeaving ? 0 : 1,
          animation: isLeaving
            ? 'toastSlideOut 0.3s ease forwards'
            : 'toastSlideIn 0.3s ease forwards',
          background: color.bg,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${color.border}`,
          borderRadius: '12px',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
          zIndex: 9999,
          maxWidth: '90vw',
          minWidth: '280px',
        }}
      >
        <span style={{ color: color.icon, flexShrink: 0 }}>
          {icons[type] || icons.success}
        </span>
        <span style={{
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: 'Outfit, sans-serif',
          lineHeight: 1.4,
        }}>
          {message}
        </span>
        <button
          onClick={handleClose}
          aria-label="Tutup notifikasi"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#ffffff',
            fontSize: '16px',
            marginLeft: '4px',
            flexShrink: 0,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
        >
          ×
        </button>
      </div>
    </>
  );
}
