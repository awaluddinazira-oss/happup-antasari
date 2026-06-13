"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row text-left pb-4 d-flex justify-content-between">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Alamat</h4>
              <div className="contact_link_box">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Happy+Puppy+Antasari+Samarinda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  <p style={{ color: '#ffffff', marginBottom: 0 }}>
                    Jl. P Antasari No.2, Air Putih, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75124
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-auto footer-col">
            <div className="footer_contact">
              <h4>Ulasan</h4>
              <div className="contact_link_box">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Happy+Puppy+Antasari+Samarinda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  <p style={{ color: '#ffffff', marginBottom: 0 }}>Berikan Ulasan di Google</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-auto footer-col">
            <h4>Opening Hours</h4>
            <p style={{ color: '#ffffff' }}>11.00 AM - 02.00 AM</p>
          </div>
          <div className="col-md-auto footer-col">
            <h4>Follow Us</h4>
            <div className="footer_social" style={{ justifyContent: 'flex-start' }}>
              <a href="https://wa.me/6282148004822" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/happup.samarinda.antasari/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.tiktok.com/@happupantasari" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/happup.samarinda.antasari/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <hr style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }} />
        <div className="footer-info text-center mt-4">
          <Link href="/" className="footer-logo mb-2 d-inline-block">
            <img src="/images/logo.png" alt="Happy Puppy" style={{ maxWidth: '80px', borderRadius: '10px' }} />
          </Link>
          <p>
            &copy; <span>{currentYear}</span> Happy Puppy Antasari. All Rights Reserved.<br />
            Dibuat oleh Awaluddin
          </p>
        </div>
      </div>
    </footer>
  );
}
