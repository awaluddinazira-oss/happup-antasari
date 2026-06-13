"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pkg, setPkg] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [allowedRooms, setAllowedRooms] = useState(allRooms);

  // Apply package-based room filters
  useEffect(() => {
    let filtered = allRooms;
    if (pkg === 'Paket Nyantui' || pkg === 'Paket Mode Game') {
      filtered = allRooms.filter(r => r.value === 'Small' || r.value === 'Medium');
    } else if (pkg === 'Paket Nyambar') {
      filtered = allRooms.filter(r => r.value !== 'Royal Suite');
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

    const message = `Halo, saya ingin melakukan reservasi:\nNama: ${name}\nNo. Telp: ${phone}\nPaket: ${pkg}\nRoom: ${room}\nTanggal: ${date}\nJam: ${time}\n\nTerima kasih 😊`;
    const encodedMessage = encodeURIComponent(message);
    const waNumber = "6282148004822";
    
    window.location.href = `https://wa.me/${waNumber}?text=${encodedMessage}`;
  };

  return (
    <main className="sub_page">
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="Hero background" />
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
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nama Anda" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nomor Telepon" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <select 
                      className="form-control" 
                      value={pkg}
                      onChange={(e) => setPkg(e.target.value)}
                      style={{ height: '50px', padding: '10px' }}
                    >
                      <option value="">Jenis Paket</option>
                      <option value="Normal">Normal</option>
                      <option value="Paket Nyantui">Paket Nyantui</option>
                      <option value="Paket Nyambar">Paket Nyambar</option>
                      <option value="Paket Mode Game">Paket Mode Game</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select 
                      className="form-control" 
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      style={{ height: '50px', padding: '10px' }}
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
                    <input 
                      type="date" 
                      className="form-control" 
                      placeholder="Pilih Tanggal" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <div className="time_picker_container">
                      <label className="time_picker_label">Pilih Jam</label>
                      <div className="time_grid">
                        {timeChips.map((t) => (
                          <div 
                            key={t}
                            className={`time_chip ${time === t ? 'active' : ''}`} 
                            onClick={() => setTime(t)}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="btn_box">
                    <button type="submit">
                      Pesan Sekarang
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="map_container" style={{ height: 'auto' }}>
                <div id="randomShopeeLinkBook" style={{ width: '100%', height: 'auto', cursor: 'pointer' }}>
                  <img src="/images/harga-room.jpeg" alt="Promo Happy Puppy" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end book section */}
    </main>
  );
}
