"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function FeedbackPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Mohon isi Nama Lengkap dan Pesan terlebih dahulu.");
      return;
    }

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
      <section className="contact_section layout_padding" data-aos="fade-up">
        <div className="container">
          <div className="heading_container">
            <h2>Kritik dan Saran</h2>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div 
                className="alert alert-warning text-center" 
                style={{
                  borderRadius: '10px',
                  fontSize: '14px',
                  backgroundColor: '#fff3cd',
                  border: '1px solid #ffeeba',
                  color: '#856404',
                  marginBottom: '25px',
                  padding: '15px'
                }}
              >
                <strong>Punya bukti foto atau video?</strong><br />
                Silakan tuliskan pesannya di bawah ini, lalu Anda bisa melampirkan file buktinya (tombol 📎) <b>langsung di aplikasi WhatsApp</b> setelah menekan tombol Kirim.
              </div>
              <div className="form_container">
                <form onSubmit={handleFeedbackSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Nama Lengkap" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Nomor Telepon / WhatsApp" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Email Anda" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="message-box" 
                      placeholder="Tuliskan kritik dan saran Anda di sini..." 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="btn-box">
                    <button type="submit">
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
