"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="sub_page">
      <div className="hero_area" style={{ minHeight: 'auto' }}>
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="Hero background" />
        </div>
        <Navbar />
      </div>

      <section className="notfound_section">
        <div className="notfound-inner">
          <span className="notfound-icon">🎤</span>
          <span className="notfound-code">404</span>
          <h1 className="notfound-title">Halaman Tidak Ditemukan</h1>
          <p className="notfound-desc">
            Aduh, sepertinya halaman yang kamu cari sudah tidak ada atau salah alamat.
            Tapi tenang — kamu masih bisa bernyanyi di sini! 🎵
          </p>
          <div className="notfound-links">
            <Link href="/" className="notfound-home-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Kembali ke Beranda
            </Link>
            <button
              type="button"
              className="notfound-back-btn"
              onClick={() => router.back()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Halaman Sebelumnya
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
