"use client";

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: '"Tempat karaoke paling pas dan asyik, harga terjangkau, 2 jam 115 ribu sama es jeruk, lagu lengkap, luas tempat dan parkiran."',
    rating: 'Makanan: 5/5 | Layanan: 5/5 | Suasana: 5/5',
    name: 'Binti Sholihatin',
    role: 'Pelanggan Setia',
    image: '/images/client1.jpg',
  },
  {
    text: '"Harga yang ditawarkan cukup murah dengan berbagai promo yang ada. Karyawannya ramah, ruangannya bersih."',
    name: 'Zevvry Syamtino',
    role: 'Pelanggan Setia',
    image: 'https://ui-avatars.com/api/?name=Zevvry+Syamtino&background=222831&color=ffffff&size=115',
  },
  {
    text: '"Sejak pertama hadir di kota Samarinda happy puppy karena diajak keponakan karaoke di sini sampai sekarang masih tetap oke, koleksi dan pilihan lagu juga banyak. Tempat juga bersih. Harga terjangkau. Tapi sayang, bagian kasir agak sensitif... Selebihnya it\'s oke lah 👍"',
    name: 'zeven Finqawesda',
    role: 'Local Guide',
    image: 'https://ui-avatars.com/api/?name=Zeven+Finqawesda&background=222831&color=ffffff&size=115',
  },
  {
    text: '"Ketika anda stress dan ingin refreshing dengan berteriak maka inilah tempat tujuan anda selain dari hutan dan gunung ! Posisi yang tepat dengan kota samarinda dan asik buat keluarga, jadi kalian harus kesini untuk berkarokean dengan sanak family anda."',
    name: 'Panggil Cahyo',
    role: 'Local Guide',
    image: 'https://ui-avatars.com/api/?name=Panggil+Cahyo&background=222831&color=ffffff&size=115',
  },
  {
    text: '"Tempat yg strategis dlm urusan relaksasi kepenatan kerja seharian. Mantabbb....."',
    rating: 'Makanan: 5/5 | Layanan: 5/5 | Suasana: 5/5',
    name: 'Mahpud Muhamad Muhamad',
    role: 'Local Guide',
    image: 'https://ui-avatars.com/api/?name=Mahpud+Muhamad+Muhamad&background=222831&color=ffffff&size=115',
  }
];

export default function ClientSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[activeIndex];

  return (
    <div style={{ position: 'relative', width: '100%', padding: '10px 0' }}>
      {/* Single visible card */}
      <div
        key={activeIndex}
        style={{
          maxWidth: '650px',
          margin: '0 auto',
          animation: 'fadeSlideIn 0.5s ease',
        }}
      >
        <div className="box" style={{ display: 'flex', flexDirection: 'column', margin: '0 15px' }}>
          <div className="detail-box" style={{
            backgroundColor: '#222831',
            color: '#ffffff',
            padding: '25px 25px 15px 25px',
            borderRadius: '5px',
          }}>
            <p style={{ marginBottom: 0, fontSize: '15px' }}>
              {t.text}
              {t.rating && (
                <>
                  <br />
                  <span style={{ fontSize: '13px', color: '#ffbe33' }}>{t.rating}</span>
                </>
              )}
            </p>
            <h6 style={{ fontWeight: 600, fontSize: '18px', margin: '15px 0 5px 0' }}>{t.name}</h6>
            <p style={{ marginBottom: 0, fontSize: '14px', color: '#aaa' }}>{t.role}</p>
          </div>
          <div className="img-box" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '115px',
            marginTop: '30px',
            position: 'relative',
          }}>
            {/* Diamond pointer */}
            <span style={{
              content: '""',
              position: 'absolute',
              left: '50%',
              top: 0,
              width: '20px',
              height: '20px',
              backgroundColor: '#d4af37',
              transform: 'rotate(45deg) translateX(-50%)',
              display: 'block',
            }} />
            <img
              src={t.image}
              alt={t.name}
              style={{
                width: '115px',
                height: '115px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '5px solid #d4af37',
                position: 'relative',
              }}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=222831&color=ffffff&size=115`;
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', gap: '15px' }}>
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Testimonial sebelumnya"
          style={{
            background: '#ffbe33',
            color: '#ffffff',
            border: 'none',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Testimonial berikutnya"
          style={{
            background: '#ffbe33',
            color: '#ffffff',
            border: 'none',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', gap: '8px' }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Testimonial ${i + 1}`}
            style={{
              width: i === activeIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === activeIndex ? '#ffbe33' : '#ccc',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
