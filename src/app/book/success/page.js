"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function BookSuccessPage() {
  return (
    <main className="sub_page">
      <div className="hero_area" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="bg-box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-bg.jpg" alt="Hero background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <Navbar />

        {/* Success Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 20px',
          position: 'relative',
          zIndex: 10,
        }}>
          <div className="success-card">
            {/* Animated checkmark */}
            <div className="success-check-wrapper">
              <svg className="success-checkmark" viewBox="0 0 52 52" aria-hidden="true">
                <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>

            <h1 className="success-title">Reservasi Terkirim! 🎉</h1>
            <p className="success-subtitle">
              Permintaan reservasi Anda sedang kami proses melalui WhatsApp. Tim kami akan segera merespons untuk konfirmasi lebih lanjut.
            </p>

            {/* Info Boxes */}
            <div className="success-info-grid">
              <div className="success-info-box">
                <span className="success-info-icon">🕐</span>
                <div>
                  <strong>Jam Buka</strong>
                  <span>11.00 AM – 02.00 AM</span>
                </div>
              </div>
              <div className="success-info-box">
                <span className="success-info-icon">📍</span>
                <div>
                  <strong>Lokasi</strong>
                  <span>Jl. P Antasari No.2, Samarinda</span>
                </div>
              </div>
              <div className="success-info-box">
                <span className="success-info-icon">📱</span>
                <div>
                  <strong>Konfirmasi</strong>
                  <span>Via WhatsApp dalam 1×24 jam</span>
                </div>
              </div>
              <div className="success-info-box">
                <span className="success-info-icon">✅</span>
                <div>
                  <strong>Tips</strong>
                  <span>Hadir 15 menit sebelum jadwal</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="success-actions">
              <Link href="/" className="btn1">
                Kembali ke Beranda
              </Link>
              <Link href="/promo" className="hero-btn-ghost">
                Lihat Promo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
