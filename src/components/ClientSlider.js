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

  return (
    <div className="client-slider-container" style={{ position: 'relative', overflow: 'hidden', width: '100%', padding: '20px 0' }}>
      <div 
        className="client-slider-track"
        style={{
          display: 'flex',
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: 'transform 0.6s ease-in-out',
          width: `${testimonials.length * 100}%`
        }}
      >
        {testimonials.map((t, index) => (
          <div 
            key={index}
            className="client-slide"
            style={{
              width: `${100 / testimonials.length}%`,
              padding: '0 15px',
              boxSizing: 'border-box'
            }}
          >
            <div className="box" style={{ margin: '0 auto', maxWidth: '600px', display: 'block', float: 'none' }}>
              <div className="detail-box">
                <p>
                  {t.text}
                  {t.rating && <><br /><span style={{ fontSize: '13px', color: '#ffbe33' }}>{t.rating}</span></>}
                </p>
                <h6>{t.name}</h6>
                <p>{t.role}</p>
              </div>
              <div className="img-box">
                <img src={t.image} alt={t.name} className="box-img" style={{ width: '115px', height: '115px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '15px' }}>
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
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
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
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
