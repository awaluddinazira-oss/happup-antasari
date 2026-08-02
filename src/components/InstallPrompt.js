"use client";

import React, { useState, useEffect } from 'react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode
    if (typeof window !== 'undefined') {
      setIsStandalone(
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true
      );

      // Check if iOS
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      setIsIOS(iOS);

      // Listen for standalone mode change
      const mediaQuery = window.matchMedia('(display-mode: standalone)');
      const handleChange = (e) => setIsStandalone(e.matches);
      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    // Check if dismissed recently
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('happup_install_dismissed');
      if (dismissed) {
        const dismissedTime = parseInt(dismissed, 10);
        const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
        if (daysSinceDismissed < 7) {
          return;
        }
      }
    }

    // For Android/Desktop - listen for beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
      // Delay visibility for animation
      setTimeout(() => setIsVisible(true), 100);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      // For iOS - show prompt if not standalone (after delay)
      if (isIOS && !isStandalone) {
        setShowPrompt(true);
        setTimeout(() => setIsVisible(true), 100);
      }

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }
  }, [isIOS, isStandalone]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      // Android/Desktop
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsVisible(false);
        setTimeout(() => setShowPrompt(false), 300);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      // iOS - show instructions
      alert(
        'Untuk menambahkan ke Home Screen:\n\n' +
        '1. Tap ikon Share (kotak dengan panah ke atas)\n' +
        '2. Scroll ke bawah dan tap "Add to Home Screen"\n' +
        '3. Tap "Add" di kanan atas'
      );
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowPrompt(false);
      // Remember that user dismissed (localStorage) for 7 days
      if (typeof window !== 'undefined') {
        localStorage.setItem('happup_install_dismissed', Date.now().toString());
      }
    }, 300);
  };

  if (!showPrompt || isStandalone) return null;

  return (
    <>
      <style>{`
        @keyframes slideUpInstall {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideDownInstall {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        .install-prompt {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #1a1e27 0%, #13161c 100%);
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          padding: 16px 20px;
          z-index: 9998;
          animation: ${isVisible ? 'slideUpInstall' : 'slideDownInstall'} 0.3s ease forwards;
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.4);
          pointer-events: ${isVisible ? 'auto' : 'none'};
        }
        .install-prompt-content {
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 500px;
          margin: 0 auto;
        }
        .install-prompt-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: linear-gradient(135deg, #d4af37 0%, #f0d060 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 24px;
        }
        .install-prompt-text {
          flex: 1;
        }
        .install-prompt-title {
          color: #ffffff;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 2px;
        }
        .install-prompt-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 11px;
        }
        .install-prompt-actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }
        .install-btn {
          background: linear-gradient(135deg, #d4af37 0%, #f0d060 100%);
          color: #0d0f13;
          border: none;
          border-radius: 6px;
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .install-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
        }
        .install-dismiss-btn {
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          width: 32px;
          height: 32px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .install-dismiss-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
        }
        @media (max-width: 480px) {
          .install-prompt-content {
            flex-wrap: wrap;
          }
          .install-prompt-actions {
            width: 100%;
            justify-content: flex-end;
            margin-top: 8px;
          }
        }
      `}</style>

      <div className="install-prompt" role="dialog" aria-label="Install app prompt" aria-hidden={!isVisible}>
        <div className="install-prompt-content">
          <div className="install-prompt-icon">
            🎤
          </div>
          <div className="install-prompt-text">
            <div className="install-prompt-title">Pasang Happup Antasari</div>
            <div className="install-prompt-desc">
              {isIOS
                ? 'Tambahkan ke Home Screen'
                : 'Pasang di Home Screen'}
            </div>
          </div>
          <div className="install-prompt-actions">
            <button className="install-btn" onClick={handleInstall}>
              {isIOS ? 'Cara Pasang' : 'Pasang'}
            </button>
            <button
              className="install-dismiss-btn"
              onClick={handleDismiss}
              aria-label="Tutup"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
