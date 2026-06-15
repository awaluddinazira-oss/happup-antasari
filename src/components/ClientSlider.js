"use client";

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: '"Tempat karaoke paling pas dan asyik, harga terjangkau, 2 jam 115 ribu sama es jeruk, lagu lengkap, luas tempat dan parkiran."',
    rating: 5,
    name: 'Binti Sholihatin',
    role: 'Pelanggan Setia',
    image: '/images/client1.jpg',
  },
  {
    text: '"Harga yang ditawarkan cukup murah dengan berbagai promo yang ada. Karyawannya ramah, ruangannya bersih."',
    rating: 5,
    name: 'Zevvry Syamtino',
    role: 'Pelanggan Setia',
    image: 'https://ui-avatars.com/api/?name=Zevvry+Syamtino&background=1a1e27&color=d4af37&size=115',
  },
  {
    text: '"Sejak pertama hadir di kota Samarinda happy puppy karena diajak keponakan karaoke di sini sampai sekarang masih tetap oke, koleksi dan pilihan lagu juga banyak. Tempat juga bersih. Harga terjangkau. 👍"',
    rating: 4,
    name: 'Zeven Finqawesda',
    role: 'Local Guide',
    image: 'https://ui-avatars.com/api/?name=Zeven+Finqawesda&background=1a1e27&color=d4af37&size=115',
  },
  {
    text: '"Ketika anda stress dan ingin refreshing dengan berteriak maka inilah tempat tujuan anda! Posisi yang tepat dengan kota samarinda dan asik buat keluarga. Harus kesini!"',
    rating: 5,
    name: 'Panggil Cahyo',
    role: 'Local Guide',
    image: 'https://ui-avatars.com/api/?name=Panggil+Cahyo&background=1a1e27&color=d4af37&size=115',
  },
  {
    text: '"Tempat yg strategis dlm urusan relaksasi kepenatan kerja seharian. Mantabbb....."',
    rating: 5,
    name: 'Mahpud Muhamad',
    role: 'Local Guide',
    image: 'https://ui-avatars.com/api/?name=Mahpud+Muhamad&background=1a1e27&color=d4af37&size=115',
  },
];

const StarRating = ({ count }) => (
  <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={star <= count ? '#d4af37' : 'rgba(212,175,55,0.2)'}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function ClientSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 300);
  };

  const handleNext = () => goTo((activeIndex + 1) % testimonials.length);
  const handlePrev = () => goTo((activeIndex - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(handleNext, 6500);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const t = testimonials[activeIndex];

  return (
    <div style={{ position: 'relative', width: '100%', padding: '10px 0' }}>
      {/* Card */}
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(8px)' : 'translateY(0)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <div className="box" style={{ display: 'flex', flexDirection: 'column', margin: '0 15px' }}>
          <div
            className="detail-box"
            style={{
              background: 'var(--dark-card)',
              color: '#ffffff',
              padding: '32px',
              borderRadius: '20px',
              border: '1px solid rgba(212,175,55,0.15)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
              position: 'relative',
            }}
          >
            {/* Quote mark */}
            <div style={{
              position: 'absolute', top: '20px', right: '24px',
              fontSize: '64px', fontFamily: 'Outfit, sans-serif',
              color: '#d4af37', opacity: 0.15, lineHeight: 1,
            }}>
              "
            </div>

            <StarRating count={t.rating || 5} />

            <p style={{ marginBottom: 0, fontSize: '15px', lineHeight: '1.8', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic' }}>
              {t.text}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px' }}>
              <img
                src={t.image}
                alt={t.name}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #d4af37',
                  boxShadow: '0 0 15px rgba(212,175,55,0.3)',
                }}
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=1a1e27&color=d4af37&size=115`;
                }}
              />
              <div>
                <h6 style={{ fontWeight: 700, fontSize: '16px', margin: '0 0 3px 0', color: '#fff' }}>{t.name}</h6>
                <p style={{ marginBottom: 0, fontSize: '13px', color: '#d4af37' }}>{t.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '32px', gap: '16px' }}>
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Testimonial sebelumnya"
          style={{
            background: 'var(--dark-surface)',
            color: '#d4af37',
            border: '1px solid rgba(212,175,55,0.3)',
            width: '44px', height: '44px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.35s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#d4af37'; e.currentTarget.style.color = '#0d0f13'; e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--dark-surface)'; e.currentTarget.style.color = '#d4af37'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === activeIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === activeIndex ? '#d4af37' : 'rgba(212,175,55,0.25)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.35s ease',
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Testimonial berikutnya"
          style={{
            background: 'var(--dark-surface)',
            color: '#d4af37',
            border: '1px solid rgba(212,175,55,0.3)',
            width: '44px', height: '44px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.35s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#d4af37'; e.currentTarget.style.color = '#0d0f13'; e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--dark-surface)'; e.currentTarget.style.color = '#d4af37'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
