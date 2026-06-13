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

      {/* event section */}
      <section className="event_section layout_padding-bottom" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="heading_container heading_center" data-aos="fade-down">
            <h2>Promo Spesial</h2>
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
      {/* end event section */}
    </main>
  );
}
