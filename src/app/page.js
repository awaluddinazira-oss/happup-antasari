"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ClientSlider from '@/components/ClientSlider';
import { menuCategories } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addToCart, selectedRoom } = useCart();
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-slide hero carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get Nasi Goreng items for the menu section
  const nasiGorengItems = menuCategories.find(c => c.id === 'nasi')?.items || [];

  return (
    <main>
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="Hero background" />
        </div>
        <Navbar />
        
        {/* slider section */}
        <section className="slider_section">
          <div id="customCarousel1" className="carousel slide" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Happy Puppy Antasari</h1>
                        <p>
                          Tempat karaoke keluarga terbaik dengan fasilitas modern, pilihan lagu terlengkap, dan suasana yang nyaman untuk momen seru Anda.
                        </p>
                        <div className="btn-box">
                          <Link href="/book" className="btn1">
                            Reservasi Room
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className={`carousel-item ${carouselIndex === 1 ? 'active' : ''}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Sambil Nyanyi, Makan Enak!</h1>
                        <p>
                          Nikmati berbagai pilihan hidangan lezat dan minuman segar kami yang siap menemani keseruan Anda saat bernyanyi bersama teman dan keluarga.
                        </p>
                        <div className="btn-box">
                          <Link href="/book" className="btn1">
                            Reservasi Room
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div className={`carousel-item ${carouselIndex === 2 ? 'active' : ''}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Momen Tak Terlupakan</h1>
                        <p>
                          Rayakan ulang tahun, acara santai, maupun kumpul keluarga dengan paket karaoke terjangkau dan pelayanan bintang lima hanya di Happy Puppy.
                        </p>
                        <div className="btn-box">
                          <Link href="/book" className="btn1">
                            Reservasi Room
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end slider section */}

        <div className="bottom-strip container-fluid" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, zIndex: 15 }}>
          <ol className="carousel-indicators" style={{ position: 'relative', margin: '0 0 15px 0' }}>
            <li className={carouselIndex === 0 ? 'active' : ''} onClick={() => setCarouselIndex(0)}></li>
            <li className={carouselIndex === 1 ? 'active' : ''} onClick={() => setCarouselIndex(1)}></li>
            <li className={carouselIndex === 2 ? 'active' : ''} onClick={() => setCarouselIndex(2)}></li>
          </ol>
          
          {/* offer section inside slider strip */}
          <div className="offer_section" style={{ width: '100%', padding: '40px 0 20px 0', background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 60%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 1) 100%)' }}>
            <div className="container">
              <div className="row" style={{ margin: 0, marginBottom: '20px', flexWrap: 'nowrap', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '10px', WebkitOverflowScrolling: 'touch' }}>
                {/* Paket 1 */}
                <div className="col-10 col-md-4" style={{ padding: '0 5px', flex: '0 0 auto' }}>
                  <div className="box">
                    <div className="img-box">
                      <a href="/images/Paket-nyantui.png" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Paket-nyantui.png" alt="Paket Nyantui" style={{ objectFit: 'cover' }} />
                      </a>
                    </div>
                    <div className="detail-box">
                      <h5>Paket Nyantui</h5>
                      <h6>Mulai <span>100K</span></h6>
                      <Link href="/book">
                        Pesan Sekarang 
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{ enableBackground: 'new 0 0 456.029 456.029' }}>
                          <g>
                            <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                            </g>
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Paket 2 */}
                <div className="col-10 col-md-4" style={{ padding: '0 5px', flex: '0 0 auto' }}>
                  <div className="box">
                    <div className="img-box">
                      <a href="/images/Paket-hepimode-game.png" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Paket-hepimode-game.png" alt="Paket Mode Game" style={{ objectFit: 'cover' }} />
                      </a>
                    </div>
                    <div className="detail-box">
                      <h5>Paket Mode Game</h5>
                      <h6>Mulai <span>180K</span></h6>
                      <Link href="/book">
                        Pesan Sekarang
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{ enableBackground: 'new 0 0 456.029 456.029' }}>
                          <g>
                            <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                            </g>
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Paket 3 */}
                <div className="col-10 col-md-4" style={{ padding: '0 5px', flex: '0 0 auto' }}>
                  <div className="box">
                    <div className="img-box">
                      <a href="/images/Paket-nyambar.png" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Paket-nyambar.png?v=2" alt="Paket Nyambar" style={{ objectFit: 'cover' }} />
                      </a>
                    </div>
                    <div className="detail-box">
                      <h5>Paket Nyambar</h5>
                      <h6>Mulai <span>200K</span></h6>
                      <Link href="/book">
                        Pesan Sekarang
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{ enableBackground: 'new 0 0 456.029 456.029' }}>
                          <g>
                            <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                            </g>
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* food section */}
      <section className="food_section layout_padding-bottom" data-aos="fade-up">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Menu Kami</h2>
          </div>

          <div className="filters-content">
            <div className="row grid">
              {nasiGorengItems.map((item, index) => (
                <div 
                  key={item.name} 
                  className="col-6 col-sm-6 col-md-4 col-lg-3 all nasi" 
                  data-aos="zoom-in" 
                  data-aos-delay={(index % 4) * 150}
                >
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={item.image.startsWith('http') ? item.image : `https://wawazrc.github.io${item.image}`} alt={item.name} />
                      </div>
                      <div className="detail-box">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <div className="options">
                          <h6>{formatRupiah(item.price)}</h6>
                          <button 
                            type="button" 
                            className="btn-add-cart"
                            onClick={() => addToCart(item)}
                          >
                            + Add
                          </button>
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
            </Link>
          </div>
        </div>
      </section>
      {/* end food section */}

      {/* about section */}
      <section className="about_section layout_padding" style={{ backgroundColor: '#222831', color: '#ffffff' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <div className="img-box">
                <img src="/images/abaut-img.jpg" alt="About Happup" style={{ borderRadius: '15px', width: '100%' }} />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="detail-box">
                <div className="heading_container">
                  <h2 style={{ color: '#ffffff' }}>🎤 Sing, Chill & Enjoy at Happup Antasari</h2>
                </div>
                <p style={{ marginTop: '15px' }}>
                  Nikmati pengalaman karaoke modern dengan room nyaman, sound berkualitas, pilihan makanan & minuman favorit, serta promo menarik setiap hari. Tempat terbaik untuk bersantai, berkumpul, dan menciptakan momen seru bersama orang terdekat.
                </p>
                <Link href="/about">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}

      {/* client section */}
      <section className="client_section layout_padding" data-aos="fade-up">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>Apa Kata Pelanggan Kami</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ClientSlider />
            </div>
          </div>
        </div>
      </section>
      {/* end client section */}
    </main>
  );
}
