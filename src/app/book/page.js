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

const packageGroupStyle = { color: '#d4af37' };
const packageOptionStyle = { color: '#ffffff' };

// Validation helpers
const validateName = (name) => {
  if (!name.trim()) return 'Nama lengkap wajib diisi';
  if (name.trim().length < 2) return 'Nama minimal 2 karakter';
  if (name.trim().length > 50) return 'Nama maksimal 50 karakter';
  return null;
};

const validatePhone = (phone) => {
  if (!phone.trim()) return 'Nomor telepon wajib diisi';
  // Indonesian phone format: 08xx, +628xx, or with separator
  const cleanedPhone = phone.replace(/[\s\-]/g, '');
  const phoneRegex = /^(?:\+?62|0)[2-9][0-9]{7,11}$/;
  if (!phoneRegex.test(cleanedPhone)) {
    return 'Format nomor tidak valid (contoh: 081234567890)';
  }
  return null;
};

export default function BookPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pkg, setPkg] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Validation errors state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

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
      pkg === 'Promo Party Call' ||
      pkg === 'Promo Telkomsel Poin' ||
      pkg === 'Promo Indomaret Poinku' ||
      pkg === 'Promo Alfagift'
    ) {
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

  // Validate single field
  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        return validateName(value);
      case 'phone':
        return validatePhone(value);
      case 'pkg':
        if (!value) return 'Silakan pilih jenis paket';
        return null;
      case 'room':
        if (!value) return 'Silakan pilih tipe room';
        return null;
      case 'date':
        if (!value) return 'Silakan pilih tanggal kunjungan';
        if (value < today) return 'Tanggal tidak boleh kurang dari hari ini';
        return null;
      case 'time':
        if (!value) return 'Silakan pilih jam kunjungan';
        return null;
      default:
        return null;
    }
  };

  // Handle field blur - mark as touched and validate
  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, eval(field));
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  // Real-time validation on change
  const handleChange = (field, value) => {
    // Update state based on field
    switch (field) {
      case 'name': setName(value); break;
      case 'phone': setPhone(value); break;
      case 'pkg': setPkg(value); break;
      case 'room': setRoom(value); break;
      case 'date': setDate(value); break;
      case 'time': setTime(value); break;
    }

    // Validate if field has been touched
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  // Validate all fields
  const validateAll = () => {
    const newErrors = {
      name: validateName(name),
      phone: validatePhone(phone),
      pkg: !pkg ? 'Silakan pilih jenis paket' : null,
      room: !room ? 'Silakan pilih tipe room' : null,
      date: !date ? 'Silakan pilih tanggal kunjungan' : (date < today ? 'Tanggal tidak boleh kurang dari hari ini' : null),
      time: !time ? 'Silakan pilih jam kunjungan' : null,
    };

    setErrors(newErrors);
    setTouched({ name: true, phone: true, pkg: true, room: true, date: true, time: true });

    // Return true if no errors
    return !Object.values(newErrors).some(error => error !== null);
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();

    if (!validateAll()) {
      // Show error toast
      if (typeof window !== 'undefined' && window.showToast) {
        window.showToast('Mohon perbaiki data reservasi Anda', 'error', 3500);
      }

      // Scroll to first error
      const firstErrorField = Object.keys(errors).find(key => errors[key]);
      if (firstErrorField) {
        const element = document.getElementById(`book-${firstErrorField === 'pkg' ? 'pkg' : firstErrorField === 'room' ? 'room' : firstErrorField}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
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

  // Helper to get input class based on error state
  const getInputClass = (field) => {
    if (!touched[field]) return 'form-control';
    return errors[field] ? 'form-control input-error' : 'form-control input-success';
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
                <form onSubmit={handleReservationSubmit} noValidate>
                  {/* Nama */}
                  <div className="form-group">
                    <label htmlFor="book-name" className="form-label-a11y">Nama Lengkap <span aria-hidden="true">*</span></label>
                    <input
                      id="book-name"
                      type="text"
                      className={getInputClass('name')}
                      placeholder="Nama lengkap Anda"
                      value={name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      disabled={isLoading}
                      aria-required="true"
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                    />
                    {touched.name && errors.name && (
                      <span id="error-name" className="form-error-msg" role="alert">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', marginRight: '4px', verticalAlign: 'middle' }}>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Telepon */}
                  <div className="form-group">
                    <label htmlFor="book-phone" className="form-label-a11y">Nomor Telepon <span aria-hidden="true">*</span></label>
                    <input
                      id="book-phone"
                      type="tel"
                      className={getInputClass('phone')}
                      placeholder="08xxxxxxxxxx atau +628xxxxxxxxxx"
                      value={phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      disabled={isLoading}
                      aria-required="true"
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                      aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
                    />
                    {touched.phone && errors.phone && (
                      <span id="error-phone" className="form-error-msg" role="alert">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', marginRight: '4px', verticalAlign: 'middle' }}>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Paket */}
                  <div className="form-group">
                    <label htmlFor="book-pkg" className="form-label-a11y">Jenis Paket <span aria-hidden="true">*</span></label>
                    <select
                      id="book-pkg"
                      className={getInputClass('pkg')}
                      value={pkg}
                      onChange={(e) => handleChange('pkg', e.target.value)}
                      onBlur={() => handleBlur('pkg')}
                      style={{ height: '50px', padding: '10px' }}
                      disabled={isLoading}
                      aria-required="true"
                      aria-describedby={errors.pkg ? 'error-pkg' : undefined}
                      aria-invalid={touched.pkg && errors.pkg ? 'true' : 'false'}
                    >
                      <option value="">-- Pilih Paket --</option>
                      <optgroup label="— Reguler —" style={packageGroupStyle}>
                        <option value="Normal" style={packageOptionStyle}>Normal (Tanpa Paket)</option>
                      </optgroup>
                      <optgroup label="— Paket Karaoke —" style={packageGroupStyle}>
                        <option value="Paket Nyantui" style={packageOptionStyle}>Paket Nyantui</option>
                        <option value="Paket Mode Game" style={packageOptionStyle}>Paket Mode Game</option>
                        <option value="Paket Nyambar" style={packageOptionStyle}>Paket Nyambar</option>
                      </optgroup>
                      <optgroup label="— Promo Khusus —" style={packageGroupStyle}>
                        <option value="Promo Ulang Tahun" style={packageOptionStyle}>Promo Ulang Tahun</option>
                        <option value="Promo Senin Murce" style={packageOptionStyle}>Senin Murce</option>
                        <option value="Promo Tanggal 22" style={packageOptionStyle}>Promo Tanggal 22</option>
                        <option value="Promo Party Call" style={packageOptionStyle}>Promo Party Call</option>
                      </optgroup>
                      <optgroup label="— Promo Mitra —" style={packageGroupStyle}>
                        <option value="Promo Telkomsel Poin" style={packageOptionStyle}>Diskon Telkomsel Poin</option>
                        <option value="Promo Indomaret Poinku" style={packageOptionStyle}>Indomaret Poinku</option>
                        <option value="Promo Alfagift" style={packageOptionStyle}>Alfagift</option>
                      </optgroup>
                    </select>
                    {touched.pkg && errors.pkg && (
                      <span id="error-pkg" className="form-error-msg" role="alert">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', marginRight: '4px', verticalAlign: 'middle' }}>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errors.pkg}
                      </span>
                    )}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '8px', fontSize: '11.5px', color: '#888', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🌤️ <strong style={{ color: '#555' }}>Siang</strong>&nbsp;11:00 – 17:45</span>
                      <span style={{ color: '#ccc' }}>|</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🌙 <strong style={{ color: '#555' }}>Malam</strong>&nbsp;18:00 – Close</span>
                    </div>
                  </div>

                  {/* Room */}
                  <div className="form-group">
                    <label htmlFor="book-room" className="form-label-a11y">Tipe Room <span aria-hidden="true">*</span></label>
                    <select
                      id="book-room"
                      className={getInputClass('room')}
                      value={room}
                      onChange={(e) => handleChange('room', e.target.value)}
                      onBlur={() => handleBlur('room')}
                      style={{ height: '50px', padding: '10px' }}
                      disabled={isLoading}
                      aria-required="true"
                      aria-describedby={errors.room ? 'error-room' : undefined}
                      aria-invalid={touched.room && errors.room ? 'true' : 'false'}
                    >
                      <option value="">-- Pilih Room --</option>
                      {allowedRooms.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.text}
                        </option>
                      ))}
                    </select>
                    {touched.room && errors.room && (
                      <span id="error-room" className="form-error-msg" role="alert">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', marginRight: '4px', verticalAlign: 'middle' }}>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errors.room}
                      </span>
                    )}
                    {pkg && (
                      <span style={{ fontSize: '11px', color: '#888', marginTop: '4px', display: 'block' }}>
                        💡 {pkg === 'Paket Nyantui' || pkg === 'Paket Mode Game'
                          ? 'Paket ini hanya tersedia untuk room Small & Medium'
                          : pkg === 'Paket Nyambar'
                          ? 'Paket ini tidak tersedia untuk Royal Suite'
                          : pkg.includes('Promo')
                          ? 'Promo ini tersedia untuk room hingga Junior Suite'
                          : 'Silakan pilih room yang tersedia'}
                      </span>
                    )}
                  </div>

                  {/* Tanggal */}
                  <div className="form-group">
                    <label htmlFor="book-date" className="form-label-a11y">Tanggal Kunjungan <span aria-hidden="true">*</span></label>
                    <input
                      id="book-date"
                      type="date"
                      className={getInputClass('date')}
                      value={date}
                      min={today}
                      onChange={(e) => handleChange('date', e.target.value)}
                      onBlur={() => handleBlur('date')}
                      disabled={isLoading}
                      aria-required="true"
                      aria-describedby={errors.date ? 'error-date' : undefined}
                      aria-invalid={touched.date && errors.date ? 'true' : 'false'}
                    />
                    {touched.date && errors.date && (
                      <span id="error-date" className="form-error-msg" role="alert">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', marginRight: '4px', verticalAlign: 'middle' }}>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errors.date}
                      </span>
                    )}
                  </div>

                  {/* Jam */}
                  <div className="form-group">
                    <div className="time_picker_container">
                      <label className="time_picker_label" id="book-time-label">
                        Pilih Jam <span aria-hidden="true" style={{ color: '#d4af37' }}>*</span>
                      </label>
                      <div className="time_grid" role="group" aria-labelledby="book-time-label">
                        {timeChips.map((t) => (
                          <div
                            key={t}
                            className={`time_chip ${time === t ? 'active' : ''}${isLoading ? ' disabled' : ''}${touched.time && errors.time && !time ? ' time-chip-error' : ''}`}
                            onClick={() => !isLoading && handleChange('time', t)}
                            role="button"
                            tabIndex={isLoading ? -1 : 0}
                            aria-pressed={time === t}
                            aria-label={`Jam ${t}`}
                            aria-invalid={touched.time && errors.time ? 'true' : 'false'}
                            onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && !isLoading) handleChange('time', t); }}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                    {touched.time && errors.time && (
                      <span className="form-error-msg" role="alert" style={{ display: 'block', marginTop: '8px' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', marginRight: '4px', verticalAlign: 'middle' }}>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {errors.time}
                      </span>
                    )}
                  </div>

                  {/* Submit */}
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

                  {/* Required fields notice */}
                  <p style={{ fontSize: '11px', color: '#666', textAlign: 'center', marginTop: '16px' }}>
                    <span style={{ color: '#d4af37' }}>*</span> Field wajib diisi
                  </p>
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
