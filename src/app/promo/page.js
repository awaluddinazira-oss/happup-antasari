"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="sub_page">
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="Hero background" />
        </div>
        <Navbar />
      </div>

      {/* about section */}
      <section className="about_section layout_padding" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/abaut-img.jpg" alt="About" style={{ borderRadius: '15px', width: '100%' }} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>🎤 Sing, Chill & Enjoy at Happup Antasari</h2>
                </div>
                <p style={{ marginTop: '15px' }}>
                  Nikmati pengalaman karaoke modern dengan room nyaman, sound berkualitas, pilihan makanan & minuman favorit, serta promo menarik setiap hari. Tempat terbaik untuk bersantai, berkumpul, dan menciptakan momen seru bersama orang terdekat.
                </p>
                <Link href="/book">
                  Reservasi Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}

      {/* price section */}
      <section className="price_section layout_padding" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="container">
          <div className="heading_container heading_center" data-aos="fade-down">
            <h2>Harga Room</h2>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 mb-4" data-aos="zoom-in-up" data-aos-delay="0">
              <div className="img-box text-center">
                <img src="/images/Happy-hour.jpeg" alt="Happy Hour" className="img-fluid shadow-lg" style={{ borderRadius: '15px', width: '100%' }} />
              </div>
            </div>
            <div className="col-md-6 mb-4" data-aos="zoom-in-up" data-aos-delay="150">
              <div className="img-box text-center">
                <img src="/images/harga-room.jpeg" alt="Harga Room" className="img-fluid shadow-lg" style={{ borderRadius: '15px', width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end price section */}

      {/* promo section */}
      <section className="promo_section layout_padding-bottom" style={{ paddingTop: '80px', background: 'transparent' }}>
        <div className="container">
          <div className="heading_container heading_center" style={{ marginBottom: '48px' }} data-aos="fade-down">
            <h2>Promo Spesial</h2>
            <p style={{ marginTop: '12px', maxWidth: '480px' }}>Nikmati berbagai promo seru dan hemat khusus untuk Anda di Happy Puppy Antasari</p>
          </div>

          <div className="promo-container">
            {/* Box Promo 1: Ultah */}
            <div className="promo-card" data-aos="fade-up">
              <span className="promo-badge">Birthday Special</span>
              <div className="promo-img-wrapper">
                <img src="/images/promo-ultah.jpg" alt="Promo Ulang Tahun" />
              </div>
              <div className="promo-info">
                <div>
                  <h4>Promo Ulang Tahun</h4>
                  <p>Dapatkan Gratis Karaoke 2 Jam dan Diskon 20% untuk Food &amp; Beverage. Berlaku s/d H+7 dari tanggal lahir Anda!</p>
                </div>
                <Link href="/book" className="btn1" style={{ width: '100%', justifyContent: 'center' }}>
                  Ambil Promo
                </Link>
              </div>
            </div>

            {/* Box Promo 2: Senin Murce */}
            <div className="promo-card" data-aos="fade-up" data-aos-delay="100">
              <span className="promo-badge">Monday Deal</span>
              <div className="promo-img-wrapper">
                <img src="/images/promo-senin.jpg" alt="Promo Senin Murce" />
              </div>
              <div className="promo-info">
                <div>
                  <h4>Senin Murce</h4>
                  <p>Bernyanyi sepuasnya selama 3 Jam hanya dengan Rp 50.000,- setiap hari Senin. Cara terbaik memulai awal pekanmu!</p>
                </div>
                <Link href="/book" className="btn1" style={{ width: '100%', justifyContent: 'center' }}>
                  Ambil Promo
                </Link>
              </div>
            </div>

            {/* Box Promo 3: Tanggal 22 */}
            <div className="promo-card" data-aos="fade-up" data-aos-delay="200">
              <span className="promo-badge">Monthly Deal</span>
              <div className="promo-img-wrapper">
                <img src="/images/promo-tgl22.jpg" alt="Promo Tanggal 22" />
              </div>
              <div className="promo-info">
                <div>
                  <h4>Promo Tanggal 22</h4>
                  <p>Bernyanyi 1 Jam hanya <strong>Rp 22,-</strong> setiap tanggal 22 sepanjang hari (All Day). Berlaku dengan minimal check-in karaoke selama 2 Jam.</p>
                </div>
                <Link href="/book" className="btn1" style={{ width: '100%', justifyContent: 'center' }}>
                  Ambil Promo
                </Link>
              </div>
            </div>

            {/* Box Promo 4: GRWM */}
            <div className="promo-card" data-aos="fade-up" data-aos-delay="300">
              <span className="promo-badge">Ladies Special</span>
              <div className="promo-img-wrapper">
                <img src="/images/promo-grwm.jpg" alt="Promo GRWM" />
              </div>
              <div className="promo-info">
                <div>
                  <h4>Girls Ready With Mic</h4>
                  <p>Untuk kamu para cewek yang memakai Jersey Piala Dunia, nikmati GRATIS Karaoke selama 2 Jam setiap hari Selasa &amp; Rabu. No Jersey, No Party!</p>
                </div>
                <Link href="/book" className="btn1" style={{ width: '100%', justifyContent: 'center' }}>
                  Ambil Promo
                </Link>
              </div>
            </div>

            {/* Box Promo 5: Telkomsel Poin */}
            <div className="promo-card" data-aos="fade-up" data-aos-delay="400">
              <span className="promo-badge">Telkomsel Special</span>
              <div className="promo-img-wrapper">
                <img src="/images/promo-telkomsel.png" alt="Promo Telkomsel Poin" />
              </div>
              <div className="promo-info">
                <div>
                  <h4>Diskon Telkomsel Poin</h4>
                  <p>Tukarkan 3000 Telkomsel Poin untuk mendapatkan Diskon 2 Jam All Room &amp; Diskon 15% untuk Food &amp; Beverage. Ketik SMDHAPPY3K26 kirim SMS ke 777.</p>
                </div>
                <Link href="/book" className="btn1" style={{ width: '100%', justifyContent: 'center' }}>
                  Ambil Promo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* packages section */}
      <section className="event_section layout_padding-bottom" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="heading_container heading_center" data-aos="fade-down" style={{ marginBottom: '40px' }}>
            <h2>Paket Karaoke</h2>
            <p style={{ marginTop: '12px', maxWidth: '480px' }}>Pilihan paket seru dan hemat untuk menemani waktu karaoke Anda</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in-up" data-aos-delay="0">
              <div className="img-box text-center">
                <img src="/images/Paket-nyantui.png" alt="Paket Nyantui" className="img-fluid shadow-lg" style={{ borderRadius: '15px', width: '100%', maxWidth: '500px' }} />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in-up" data-aos-delay="150">
              <div className="img-box text-center">
                <img src="/images/Paket-hepimode-game.png" alt="Paket Hepi Mode Game" className="img-fluid shadow-lg" style={{ borderRadius: '15px', width: '100%', maxWidth: '500px' }} />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in-up" data-aos-delay="300">
              <div className="img-box text-center">
                <img src="/images/Paket-nyambar.png?v=2" alt="Paket Nyambar" className="img-fluid shadow-lg" style={{ borderRadius: '15px', width: '100%', maxWidth: '500px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
