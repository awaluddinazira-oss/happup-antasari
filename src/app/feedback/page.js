"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { SITE_CONFIG } from '@/data/siteConfig';

export default function FeedbackPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    const rawText = `Halo Admin Happy Puppy Antasari, saya ingin memberikan kritik dan saran:\n\n*Nama:* ${name}\n*No HP:* ${phone}\n*Email:* ${email}\n*Pesan:* ${message}\n\n_(Berikut adalah lampiran foto/video bukti dari saya jika ada)_`;
    const encodedText = encodeURIComponent(rawText);
    const waNumber = SITE_CONFIG.waFeedback;

    // Reset loading setelah jeda singkat (user diarahkan ke WA)
    setTimeout(() => setIsLoading(false), 3000);
    window.location.href = `https://wa.me/${waNumber}?text=${encodedText}`;
  };

  return (
    <main className="sub_page">
      <div className="hero_area">
        <div className="bg-box">
          <Image src="/images/hero-bg.jpg" alt="Hero background" fill style={{ objectFit: 'cover' }} priority />
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
                    <label htmlFor="feedback-name" className="form-label-a11y">Nama Lengkap <span aria-hidden="true">*</span></label>
                    <input
                      id="feedback-name"
                      type="text"
                      className={`form-control${errors.name ? ' input-error' : ''}`}
                      placeholder="Nama Lengkap"
                      value={name}
                      onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(prev => ({ ...prev, name: '' })); }}
                      disabled={isLoading}
                      aria-required="true"
                      aria-describedby={errors.name ? 'feedback-name-error' : undefined}
                    />
                    {errors.name && <span id="feedback-name-error" className="form-error-msg" role="alert">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="feedback-phone" className="form-label-a11y">Nomor Telepon / WhatsApp</label>
                    <input
                      id="feedback-phone"
                      type="tel"
                      className="form-control"
                      placeholder="Nomor Telepon / WhatsApp"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="feedback-email" className="form-label-a11y">Email</label>
                    <input
                      id="feedback-email"
                      type="email"
                      className="form-control"
                      placeholder="Email Anda"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="feedback-message" className="form-label-a11y">Pesan Kritik & Saran <span aria-hidden="true">*</span></label>
                    <textarea
                      id="feedback-message"
                      className={`form-control message-box${errors.message ? ' input-error' : ''}`}
                      placeholder="Tuliskan kritik dan saran Anda di sini..."
                      value={message}
                      onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors(prev => ({ ...prev, message: '' })); }}
                      style={{ height: '140px', padding: '16px', resize: 'none' }}
                      disabled={isLoading}
                      aria-required="true"
                      aria-describedby={errors.message ? 'feedback-message-error' : undefined}
                    />
                    {errors.message && <span id="feedback-message-error" className="form-error-msg" role="alert">{errors.message}</span>}
                  </div>
                  <div className="btn_box" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                      type="submit"
                      disabled={isLoading}
                      style={{ width: '100%', maxWidth: '280px', opacity: isLoading ? 0.75 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
                      aria-busy={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span
                            style={{
                              display: 'inline-block', width: '14px', height: '14px',
                              border: '2px solid rgba(255,255,255,0.4)',
                              borderTopColor: '#fff',
                              borderRadius: '50%',
                              animation: 'spin 0.7s linear infinite',
                              marginRight: '8px', verticalAlign: 'middle',
                            }}
                            aria-hidden="true"
                          />
                          Membuka WhatsApp...
                        </>
                      ) : 'Kirim Saran'}
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
