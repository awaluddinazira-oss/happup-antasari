"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const roomTypes = [
  {
    id: 'small',
    name: 'Small',
    emoji: '🎤',
    capacity: '4 Orang',
    desc: 'Cocok untuk pasangan atau kelompok kecil yang ingin karaoke santai dan intim.',
    features: ['TV LED 42" x 1', 'AC & WiFi', 'Sofa Nyaman'],
    badge: 'Paling Populer',
    badgeColor: '#d4af37',
    img: '/images/Room-Small.jpg',
  },
  {
    id: 'medium',
    name: 'Medium',
    emoji: '🎵',
    capacity: '8 Orang',
    desc: 'Pilihan ideal untuk nongkrong bareng teman atau keluarga kecil yang ingin seru-seruan.',
    features: ['TV LED 42" x 1', 'AC & WiFi', 'Sofa Nyaman'],
    badge: null,
    img: '/images/Room-Medium.jpg',
  },
  {
    id: 'large',
    name: 'Large',
    emoji: '🏠',
    capacity: '10 Orang',
    desc: 'Ruangan luas untuk acara ulang tahun, reuni, atau gathering kantor yang meriah.',
    features: ['TV LED 42" x 1', 'AC & WiFi', 'Sofa Nyaman'],
    badge: null,
    img: '/images/Room-Large.jpg',
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite',
    emoji: '✨',
    capacity: '12 Orang',
    desc: 'Pengalaman karaoke lebih eksklusif dengan fasilitas lengkap dan ruangan yang nyaman.',
    features: ['TV LED 42" x 2', 'AC & WiFi', 'Sofa Nyaman', 'Toilet'],
    badge: null,
    img: '/images/Room-Junior-Suite.jpg',
  },
  {
    id: 'suite',
    name: 'Suite',
    emoji: '👑',
    capacity: '16 Orang',
    desc: 'Room premium untuk momen spesial — fasilitas lengkap dan pengalaman karaoke kelas atas.',
    features: ['TV LED 65" x 1', 'TV LED 42" x 2', 'AC & WiFi', 'Toilet'],
    badge: 'Premium',
    badgeColor: '#9b59b6',
    img: '/images/Room-Suite.jpg',
  },
  {
    id: 'royal-suite',
    name: 'Royal Suite',
    emoji: '🎖️',
    capacity: '20+ Orang',
    desc: 'Pengalaman karaoke terbaik dan termewah. Sempurna untuk event besar dan perayaan istimewa.',
    features: ['TV LED 65" x 1', 'TV LED 42" x 2', 'AC & WiFi', 'Toilet'],
    badge: 'VIP',
    badgeColor: '#e74c3c',
    img: '/images/Room-Royal-Suite.jpg',
  },
];

const stats = [
  { icon: '🏠', value: '20+', label: 'Room Tersedia' },
  { icon: '🎵', value: '10.000+', label: 'Pilihan Lagu' },
  { icon: '⭐', value: '4.8', label: 'Rating Google' },
  { icon: '🕐', value: '11 Pagi', label: 'Buka Setiap Hari' },
];

export default function GaleriPage() {
  const [activeRoom, setActiveRoom] = useState(null);

  return (
    <main className="sub_page">
      <div className="hero_area">
        <div className="bg-box">
          <Image src="/images/hero-bg.jpg" alt="Hero background" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <Navbar />
      </div>

      {/* ── INTRO ── */}
      <section className="galeri_intro layout_padding">
        <div className="container">
          <div className="heading_container heading_center" data-aos="fade-down" style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '50px',
              fontSize: '12px', fontWeight: '600', color: '#d4af37',
              letterSpacing: '1px', textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              🏠 Jenis Room
            </div>
            <h1>Pilih Room Karaoke Anda</h1>
            <p style={{ marginTop: '12px', maxWidth: '520px' }}>
              Dari room kecil yang intim hingga suite mewah untuk pesta besar — temukan room yang pas untuk momen seru Anda.
            </p>
          </div>

          {/* Stats */}
          <div className="galeri-stats" data-aos="fade-up">
            {stats.map((s) => (
              <div key={s.label} className="galeri-stat-card">
                <span className="galeri-stat-icon">{s.icon}</span>
                <span className="galeri-stat-value">{s.value}</span>
                <span className="galeri-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID JENIS ROOM ── */}
      <section className="galeri_grid_section layout_padding-bottom" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="room-type-grid">
            {roomTypes.map((room, index) => (
              <div
                key={room.id}
                className={`room-type-card${activeRoom === room.id ? ' room-type-card-active' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                onMouseEnter={() => setActiveRoom(room.id)}
                onMouseLeave={() => setActiveRoom(null)}
              >
                {/* Badge */}
                {room.badge && (
                  <span
                    className="room-type-badge"
                    style={{ background: room.badgeColor }}
                  >
                    {room.badge}
                  </span>
                )}

                {/* Image Showcase */}
                <div className="room-type-card-image" style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '14px' }}>
                  <Image
                    src={room.img}
                    alt={`Foto Room ${room.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Header */}
                <div className="room-type-header">
                  <span className="room-type-emoji">{room.emoji}</span>
                  <div>
                    <h3 className="room-type-name">Room {room.name}</h3>
                    <span className="room-type-capacity">👥 {room.capacity}</span>
                  </div>
                </div>

                {/* Desc */}
                <p className="room-type-desc">{room.desc}</p>

                {/* Features */}
                <ul className="room-type-features">
                  {room.features.map((f) => (
                    <li key={f}>
                      <span className="room-feat-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/book" className="room-type-btn">
                  Pesan Room Ini
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Harga Room */}
          <div style={{ textAlign: 'center', marginTop: '60px' }} data-aos="fade-up">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '50px',
              fontSize: '12px', fontWeight: '600', color: '#d4af37',
              letterSpacing: '1px', textTransform: 'uppercase',
              marginBottom: '24px',
            }}>
              💰 Daftar Harga
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', maxWidth: '700px', margin: '0 auto' }}>
              <Image
                src="/images/harga-room.jpeg"
                alt="Daftar Harga Room Happy Puppy Antasari"
                width={700}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div style={{ marginTop: '32px' }}>
              <Link href="/book" className="btn1">
                Reservasi Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
