"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function FeedbackPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Nama lengkap wajib diisi.';
    if (!message.trim()) newErrors.message = 'Pesan kritik & saran wajib diisi.';
    return newErrors;
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const rawText = `Halo Admin Happy Puppy Antasari, saya ingin memberikan kritik dan saran:\n\n*Nama:* ${name}\n*No HP:* ${phone}\n*Email:* ${email}\n*Pesan:* ${message}\n\n_(Berikut adalah lampiran foto/video bukti dari saya jika ada)_`;
    const encodedText = encodeURIComponent(rawText);
    const waNumber = "6285242359460";
    
    window.location.href = `https://wa.me/${waNumber}?text=${encodedText}`;
  };

  return (
    <main className="sub_page">
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="Hero background" />
        </div>
        <Navbar />
      </div>

      {/* contact section */}
      <section className="book_section layout_padding" data-aos="fade-up">
        <div className="container">
          <div className="heading_container heading_center" style={{ marginBottom: '40px' }}>
            <h2>Kritik dan Saran</h2>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="feedback-alert">
                <strong>Punya bukti foto atau video?</strong><br />
                Silakan tuliskan pesannya di bawah ini, lalu Anda bisa melampirkan file buktinya (tombol 📎) <b>langsung di aplikasi WhatsApp</b> setelah menekan tombol Kirim.
              </div>
              <div className="form_container">
                <form onSubmit={handleFeedbackSubmit} noValidate>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className={`form-control${errors.name ? ' input-error' : ''}`}
                      placeholder="Nama Lengkap *" 
                      value={name}
                      onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(prev => ({ ...prev, name: '' })); }}
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Nomor Telepon / WhatsApp" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control"
                      placeholder="Email Anda" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      className={`form-control message-box${errors.message ? ' input-error' : ''}`}
                      placeholder="Tuliskan kritik dan saran Anda di sini... *" 
                      value={message}
                      onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors(prev => ({ ...prev, message: '' })); }}
                      style={{ height: '140px', padding: '16px', resize: 'none' }}
                    />
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>
                  <div className="btn_box" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" style={{ width: '100%', maxWidth: '280px' }}>
                      Kirim Saran
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
    </main>
  );
}
