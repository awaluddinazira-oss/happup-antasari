"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ClientSlider from '@/components/ClientSlider';
import { menuCategories, getMenuImageUrl } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

const slides = [
  {
    eyebrow: '🎤 Karaoke Terbaik di Samarinda',
    title: 'Happy Puppy Antasari',
    desc: 'Tempat karaoke keluarga terbaik dengan fasilitas modern, pilihan lagu terlengkap, dan suasana yang nyaman untuk momen seru Anda.',
  },
  {
    eyebrow: '🍜 Nyanyi sambil makan enak',
    title: 'Sambil Nyanyi, Makan Enak!',
    desc: 'Nikmati berbagai pilihan hidangan lezat dan minuman segar kami yang siap menemani keseruan Anda saat bernyanyi bersama teman dan keluarga.',
  },
  {
    eyebrow: '🎉 Cocok untuk semua acara',
    title: 'Momen Tak Terlupakan',
    desc: 'Rayakan ulang tahun, acara santai, maupun kumpul keluarga dengan paket karaoke terjangkau dan pelayanan bintang lima hanya di Happy Puppy.',
  },
];

export default function Home() {
  const { addToCart, selectedRoom } = useCart();
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const featuredItemNames = [
    'Sop Iga Sapi',
    'Sapi Lada Hitam',
    'Ayam Lada Hitam',
    'Cumi Saos Tiram',
    'Buah Segar',
    'Mie Goreng Spesial',
    'Nasi Goreng Spesial',
    'Nasi Cap Cay',
    'Nasi Goreng Seafood',
    'Mie Kuah Spesial',
    'Snack Kombinasi',
    'Ayam Saos Teriyaki',
    'Udang Saos Tiram',
    'Fu Yung Hai'
  ];

  const allItems = menuCategories.flatMap(category => category.items);
  const featuredItems = featuredItemNames.map(name => 
    allItems.find(item => item.name.toLowerCase() === name.toLowerCase())
  ).filter(Boolean);

  return (
    <main>
      {/* ── HERO ── */}
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="Hero background" />
        </div>
        <Navbar />

        {/* Slider */}
        <section className="slider_section">
          <div id="customCarousel1" className="carousel slide">
            <div className="carousel-inner">
              {slides.map((slide, i) => (
                <div key={i} className={`carousel-item ${carouselIndex === i ? 'active' : ''}`}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-lg-7">
                        <div className="detail-box" style={{ animation: carouselIndex === i ? 'heroFadeIn 0.8s ease forwards' : 'none' }}>
                          <div className="hero-eyebrow">{slide.eyebrow}</div>
                          <h1>{slide.title}</h1>
                          <p>{slide.desc}</p>
                          <div className="btn-box">
                            <Link href="/book" className="btn1">
                              Reservasi Room
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                            </Link>
                            <Link href="/menu" style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '14px 32px',
                              borderRadius: '50px',
                              background: 'rgba(255,255,255,0.08)',
                              border: '1px solid rgba(255,255,255,0.2)',
                              color: '#ffffff',
                              fontWeight: 600,
                              fontFamily: 'Outfit, sans-serif',
                              fontSize: '15px',
                              backdropFilter: 'blur(10px)',
                              transition: 'all 0.35s ease',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                            }}
                            >
                              Lihat Menu
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom strip: indicators + packages */}
        <div className="bottom-strip container-fluid" style={{
          position: 'absolute', bottom: 0, left: 0, width: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          padding: 0, zIndex: 15,
        }}>
          {/* Slide indicators */}
          <ol className="carousel-indicators" style={{ position: 'relative', margin: '0 0 20px 0' }}>
            {slides.map((_, i) => (
              <li
                key={i}
                className={carouselIndex === i ? 'active' : ''}
                onClick={() => setCarouselIndex(i)}
              />
            ))}
          </ol>

          {/* Packages strip */}
          <div className="offer_section" style={{
            width: '100%',
            padding: '30px 0 28px 0',
            background: 'linear-gradient(to bottom, rgba(13,15,19,0) 0%, rgba(13,15,19,0.85) 60%, rgba(13,15,19,1) 100%)',
          }}>
            <div className="container">
              <div className="row" style={{ margin: 0, marginBottom: '10px', flexWrap: 'nowrap', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '8px', WebkitOverflowScrolling: 'touch', gap: '12px' }}>
                {/* Paket 1 */}
                <div className="col-10 col-md-4" style={{ padding: '0', flex: '0 0 auto' }}>
                  <div className="box">
                    <div className="img-box">
                      <a href="/images/Paket-nyantui.png" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Paket-nyantui.png" alt="Paket Nyantui" />
                      </a>
                    </div>
                    <div className="detail-box">
                      <h5>Paket Nyantui</h5>
                      <h6>Mulai <span>100K</span></h6>
                      <Link href="/book">Pesan Sekarang</Link>
                    </div>
                  </div>
                </div>

                {/* Paket 2 */}
                <div className="col-10 col-md-4" style={{ padding: '0', flex: '0 0 auto' }}>
                  <div className="box">
                    <div className="img-box">
                      <a href="/images/Paket-hepimode-game.png" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Paket-hepimode-game.png" alt="Paket Mode Game" />
                      </a>
                    </div>
                    <div className="detail-box">
                      <h5>Paket Mode Game</h5>
                      <h6>Mulai <span>180K</span></h6>
                      <Link href="/book">Pesan Sekarang</Link>
                    </div>
                  </div>
                </div>

                {/* Paket 3 */}
                <div className="col-10 col-md-4" style={{ padding: '0', flex: '0 0 auto' }}>
                  <div className="box">
                    <div className="img-box">
                      <a href="/images/Paket-nyambar.png" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Paket-nyambar.png?v=2" alt="Paket Nyambar" />
                      </a>
                    </div>
                    <div className="detail-box">
                      <h5>Paket Nyambar</h5>
                      <h6>Mulai <span>200K</span></h6>
                      <Link href="/book">Pesan Sekarang</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOD / MENU SECTION ── */}
      <section className="food_section layout_padding-bottom" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="heading_container heading_center" style={{ marginBottom: '48px' }}>
            <h2>Menu Kami</h2>
            <p style={{ marginTop: '12px', maxWidth: '480px' }}>Pilihan hidangan lezat yang bisa dinikmati langsung di room karaoke Anda</p>
          </div>

          <div className="filters-content">
            <div className="row grid">
              {featuredItems.map((item, index) => (
                <div
                  key={item.name}
                  className="col-6 col-sm-6 col-md-4 col-lg-3 all"
                  data-aos="zoom-in"
                  data-aos-delay={(index % 4) * 100}
                >
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src={getMenuImageUrl(item.image)}
                          alt={item.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span style="font-size:28px">${item.icon || '🍽️'}</span>`;
                          }}
                        />
                      </div>
                      <div className="detail-box">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <div className="options">
                          <h6>{formatRupiah(item.price)}</h6>
                          <Link href="/menu" className="btn-add-cart-link">+</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="btn-box">
            <Link href="/menu">
              Lihat Selengkapnya
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <div className="img-box">
                <img src="/images/abaut-img.jpg" alt="About Happup" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="detail-box" style={{ paddingLeft: '20px' }}>
                <div className="heading_container" style={{ marginBottom: '0' }}>
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
                    ✨ Tentang Kami
                  </div>
                  <h2>🎤 Sing, Chill &amp; Enjoy at Happup Antasari</h2>
                </div>
                <p>
                  Nikmati pengalaman karaoke modern dengan room nyaman, sound berkualitas, pilihan makanan &amp; minuman favorit, serta promo menarik setiap hari. Tempat terbaik untuk bersantai, berkumpul, dan menciptakan momen seru bersama orang terdekat.
                </p>
                <div className="about_badges">
                  <span className="about_badge">🎵 10.000+ Lagu</span>
                  <span className="about_badge">🏠 20+ Room</span>
                  <span className="about_badge">⭐ 4.8 Rating</span>
                  <span className="about_badge">🕐 Buka 11 Pagi</span>
                </div>
                <Link href="/event">Baca Selengkapnya</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className="client_section layout_padding" data-aos="fade-up">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>Apa Kata Pelanggan Kami</h2>
            <p style={{ marginTop: '12px' }}>Review jujur dari pengunjung setia Happup Antasari</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ClientSlider />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
