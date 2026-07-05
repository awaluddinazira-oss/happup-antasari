"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`header_section${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" href="/">
            <span>
              <img src="/images/logo.png" alt="Happup Antasari" style={{ maxWidth: '140px' }} />
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Buka tutup navigasi"
          >
            <span></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                <Link className="nav-link" href="/" onClick={() => setIsOpen(false)}>
                  Beranda {isActive('/') && <span className="sr-only">(saat ini)</span>}
                </Link>
              </li>
              <li className={`nav-item ${isActive('/menu') ? 'active' : ''}`}>
                <Link className="nav-link" href="/menu" onClick={() => setIsOpen(false)}>
                  Menu {isActive('/menu') && <span className="sr-only">(saat ini)</span>}
                </Link>
              </li>
              <li className={`nav-item ${isActive('/promo') ? 'active' : ''}`}>
                <Link className="nav-link" href="/promo" onClick={() => setIsOpen(false)}>
                  Promo {isActive('/promo') && <span className="sr-only">(saat ini)</span>}
                </Link>
              </li>
              <li className={`nav-item ${isActive('/galeri') ? 'active' : ''}`}>
                <Link className="nav-link" href="/galeri" onClick={() => setIsOpen(false)}>
                  Galeri {isActive('/galeri') && <span className="sr-only">(saat ini)</span>}
                </Link>
              </li>
              <li className={`nav-item ${isActive('/book') ? 'active' : ''}`}>
                <Link className="nav-link" href="/book" onClick={() => setIsOpen(false)}>
                  Reservasi Room {isActive('/book') && <span className="sr-only">(saat ini)</span>}
                </Link>
              </li>
              <li className={`nav-item ${isActive('/feedback') ? 'active' : ''}`}>
                <Link className="nav-link" href="/feedback" onClick={() => setIsOpen(false)}>
                  Kritik &amp; Saran {isActive('/feedback') && <span className="sr-only">(saat ini)</span>}
                </Link>
              </li>
            </ul>
            <div className="user_option">
              <a href="https://wa.me/6282148004822" className="user_link" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/happup.samarinda.antasari/" className="user_link" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.tiktok.com/@happupantasari" className="user_link" target="_blank" rel="noopener noreferrer" title="TikTok" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/happup.samarinda.antasari/" className="user_link" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
