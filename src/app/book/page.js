"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { SITE_CONFIG } from '@/data/siteConfig';

const allRooms = [
  { value: "Small", text: "Small" },
  { value: "Medium", text: "Medium" },
  { value: "Large", text: "Large" },
  { value: "Junior Suite", text: "Junior Suite" },
  { value: "Suite", text: "Suite" },
  { value: "Royal Suite", text: "Royal Suite" }
];

const timeChips = [
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
  "23:00", "23:30", "24:00"
];

export default function BookPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pkg, setPkg] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [allowedRooms, setAllowedRooms] = useState(allRooms);

  // Apply package-based room filters
  useEffect(() => {
    let filtered = allRooms;
    if (pkg === 'Paket Nyantui' || pkg === 'Paket Mode Game') {
      filtered = allRooms.filter(r => r.value === 'Small' || r.value === 'Medium');
    } else if (pkg === 'Paket Nyambar') {
      filtered = allRooms.filter(r => r.value !== 'Royal Suite');
    } else if (
      pkg === 'Promo Tanggal 22' ||
      pkg === 'Promo GRWM' ||
      pkg === 'Promo Telkomsel Poin' ||
      pkg === 'Promo Indomaret Poinku' ||
      pkg === 'Promo Alfagift'
    ) {
      // Promo mitra & khusus: maks sampai Junior Suite
      filtered = allRooms.filter(r =>
        r.value === 'Small' || r.value === 'Medium' || r.value === 'Large' || r.value === 'Junior Suite'
      );
    }
    setAllowedRooms(filtered);

    // If currently selected room is not in the allowed list, reset room selection
    const isValid = filtered.some(r => r.value === room);
    if (!isValid) {
      setRoom('');
    }
  }, [pkg]);

  const handleReservationSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !pkg || !room || !date || !time) {
      alert("Mohon lengkapi semua data reservasi (Nama, No Telp, Paket, Room, Tanggal, dan Jam) sebelum melanjutkan.");
      return;
    }

    setIsLoading(true);
    const message = `Halo, saya ingin melakukan reservasi:\nNama: ${name}\nNo. Telp: ${phone}\nPaket: ${pkg}\nRoom: ${room}\nTanggal: ${date}\nJam: ${time}\n\nTerima kasih 😊`;
    const encodedMessage = encodeURIComponent(message);
    const waNumber = SITE_CONFIG.waReservasi;

    // Buka WhatsApp di tab baru, lalu arahkan ke halaman konfirmasi
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
    setTimeout(() => {
      router.push('/book/success');
    }, 500);
  };

  return (
    <main className="sub_page">
      <div className="hero_area">
        <div className="bg-box">
          <Image src="/images/hero-bg.jpg" alt="Hero background" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <Navbar />
      </div>

      {/* book section */}
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container" data-aos="fade-down">
            <h2>Reservasi Room</h2>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up">
              <div className="form_container">
                <form onSubmit={handleReservationSubmit}>
                  <div className="form-group">
                    <label htmlFor="book-name" className="form-label-a11y">Nama Anda</label>
                    <input
                      id="book-name"
                      type="text"
                      className="form-control"
                      placeholder="Nama Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isLoading}
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="book-phone" className="form-label-a11y">Nomor Telepon</label>
                    <input
                      id="book-phone"
                      type="tel"
                      className="form-control"
                      placeholder="Nomor Telepon"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={isLoading}
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="book-pkg" className="form-label-a11y">Jenis Paket</label>
                    <select
                      id="book-pkg"
                      className="form-control"
                      value={pkg}
                      onChange={(e) => setPkg(e.target.value)}
                      style={{ height: '50px', padding: '10px' }}
                      disabled={isLoading}
                      aria-required="true"
                    >
                      <option value="">Jenis Paket</option>
                      <optgroup label="— Reguler —">
                        <option value="Normal">Normal</option>
                      </optgroup>
                      <optgroup label="— Paket Karaoke —">
                        <option value="Paket Nyantui">Paket Nyantui</option>
                        <option value="Paket Mode Game">Paket Mode Game</option>
                        <option value="Paket Nyambar">Paket Nyambar</option>
                      </optgroup>
                      <optgroup label="— Promo Khusus —">
                        <option value="Promo Ulang Tahun">🎂 Promo Ulang Tahun</option>
                        <option value="Promo Senin Murce">🎵 Senin Murce</option>
                        <option value="Promo Tanggal 22">🎉 Promo Tanggal 22</option>
                        <option value="Promo GRWM">💄 Girls Ready With Mic (GRWM)</option>
                      </optgroup>
                      <optgroup label="— Promo Mitra —">
                        <option value="Promo Telkomsel Poin">📱 Diskon Telkomsel Poin</option>
                        <option value="Promo Indomaret Poinku">🏪 Indomaret Poinku</option>
                        <option value="Promo Alfagift">🛒 Alfagift</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="book-room" className="form-label-a11y">Pilih Room</label>
                    <select
                      id="book-room"
                      className="form-control"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      style={{ height: '50px', padding: '10px' }}
                      disabled={isLoading}
                      aria-required="true"
                    >
                      <option value="">Room</option>
                      {allowedRooms.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="book-date" className="form-label-a11y">Tanggal Kunjungan</label>
                    <input
                      id="book-date"
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      disabled={isLoading}
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <div className="time_picker_container">
                      <label className="time_picker_label" id="book-time-label">Pilih Jam</label>
                      <div className="time_grid" role="group" aria-labelledby="book-time-label">
                        {timeChips.map((t) => (
                          <div
                            key={t}
                            className={`time_chip ${time === t ? 'active' : ''}${isLoading ? ' disabled' : ''}`}
                            onClick={() => !isLoading && setTime(t)}
                            role="button"
                            tabIndex={isLoading ? -1 : 0}
                            aria-pressed={time === t}
                            aria-label={`Jam ${t}`}
                            onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && !isLoading) setTime(t); }}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="btn_box">
                    <button
                      type="submit"
                      disabled={isLoading}
                      style={{ opacity: isLoading ? 0.75 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
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
                      ) : 'Pesan Sekarang'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="map_container">
                <div className="maps-embed-wrapper">
                  <iframe
                    title="Lokasi Happy Puppy Antasari Samarinda"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6694487527!2d117.14480207499166!3d-0.49419269951684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f5c0a6d30a7%3A0x12d4a91e7bcdf226!2sHappy%20Puppy%20Antasari!5e0!3m2!1sid!2sid!4v1704000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '16px', minHeight: '420px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Happy+Puppy+Antasari+Samarinda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-open-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end book section */}
    </main>
  );
}
