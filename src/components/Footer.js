"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row pb-4">

          {/* Brand + Desc */}
          <div className="col-md-4 footer-col" style={{ marginBottom: '28px' }}>
            <Link href="/" className="footer-logo d-inline-block" style={{ marginBottom: '12px' }}>
              <img src="/images/logo.png" alt="Happy Puppy" style={{ maxWidth: '110px', borderRadius: '12px' }} />
            </Link>
            <p style={{ maxWidth: '260px', lineHeight: '1.8' }}>
              Tempat karaoke keluarga terbaik di Samarinda. Fasilitas modern, lagu terlengkap, harga terjangkau.
            </p>
          </div>

          {/* Navigasi */}
          <div className="col-md-2 footer-col">
            <h4>Navigasi</h4>
            <div className="contact_link_box" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/" className="footer-nav-link">Beranda</Link>
              <Link href="/menu" className="footer-nav-link">Menu</Link>
              <Link href="/promo" className="footer-nav-link">Promo</Link>
              <Link href="/book" className="footer-nav-link">Reservasi</Link>
            </div>
          </div>

          {/* Info */}
          <div className="col-md-3 footer-col">
            <h4>Informasi</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <i className="fa fa-map-marker" style={{ color: '#d4af37', marginTop: '3px', width: '16px' }} aria-hidden="true"></i>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Happy+Puppy+Antasari+Samarinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                  style={{ lineHeight: '1.6' }}
                >
                  Jl. P Antasari No.2, Air Putih, Samarinda Ulu, Kota Samarinda, Kaltim 75124
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <i className="fa fa-clock-o" style={{ color: '#d4af37', width: '16px' }} aria-hidden="true"></i>
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>11.00 AM – 02.00 AM</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <i className="fa fa-star" style={{ color: '#d4af37', width: '16px' }} aria-hidden="true"></i>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Happy+Puppy+Antasari+Samarinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  Beri Ulasan di Google
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="col-md-3 footer-col">
            <h4>Ikuti Kami</h4>
            <div className="footer_social">
              <a href="https://wa.me/6282148004822" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/happup.samarinda.antasari/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.tiktok.com/@happupantasari" target="_blank" rel="noopener noreferrer" title="TikTok" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15" fill="currentColor">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/happup.samarinda.antasari/" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6282148004822"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '20px',
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#fff',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: '600',
                fontFamily: 'Outfit, sans-serif',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <i className="fa fa-whatsapp"></i>
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="footer-info">
          <p>
            &copy; <span>{currentYear}</span> Happy Puppy Antasari. All Rights Reserved.
            &nbsp;·&nbsp; Dibuat oleh Awaluddin
          </p>
        </div>
      </div>
    </footer>
  );
}
