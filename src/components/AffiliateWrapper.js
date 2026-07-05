"use client";

import React, { useEffect } from 'react';

const shopeeLinks = [
  "https://s.shopee.co.id/6AiXsGr14s",
  "https://s.shopee.co.id/5Aq0gPuKk2",
  "https://s.shopee.co.id/60P7fvEF7J",
  "https://s.shopee.co.id/7VDvSf1ATL",
  "https://s.shopee.co.id/5L9QsfcpZa",
  "https://s.shopee.co.id/5L9Qsd4N9A",
  "https://s.shopee.co.id/6L1y4SIm4P",
  "https://s.shopee.co.id/9pbqEsFGwK",
  "https://s.shopee.co.id/4VaJt3mDU5",
  "https://s.shopee.co.id/8V6SeOp846",
  "https://s.shopee.co.id/6VLOGiON0c",
  "https://s.shopee.co.id/4AxTUPkr8b",
  "https://s.shopee.co.id/5L9xtVXTQ9",
  "https://s.shopee.co.id/5q6EUQVZPG",
  "https://s.shopee.co.id/5fmoI7WCkF",
  "https://s.shopee.co.id/6Aj4t2UIjM",
  "https://s.shopee.co.id/60PegjUw4L"
];

function openShopeeLink() {
  const randomLink = shopeeLinks[Math.floor(Math.random() * shopeeLinks.length)];
  const a = document.createElement('a');
  a.href = randomLink;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => document.body.removeChild(a), 100);
}

// Elemen interaktif yang TIDAK boleh memicu affiliate
const INTERACTIVE_SELECTORS = 'a, button, input, select, textarea, label, .nice-select, .btn-add-cart-link, [role="button"], .room-picker-right, #pageRoomNumber, .room-select-group, .carousel-indicators li, .nav-link, .navbar-toggler';

export default function AffiliateWrapper({ children }) {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Jangan pernah trigger jika klik pada elemen interaktif
      if (e.target.closest(INTERACTIVE_SELECTORS)) return;

      // ── 1. Room picker card (area non-interaktif) ──
      if (e.target.closest('.room-picker-card')) {
        openShopeeLink();
        return;
      }

      // ── 2. Footer logo / navbar brand ──
      if (e.target.closest('.footer-logo') || e.target.closest('.navbar-brand')) {
        e.preventDefault();
        openShopeeLink();
        return;
      }

      // ── 3. Offer section boxes (area non-link) ──
      if (e.target.closest('.offer_section .box')) {
        openShopeeLink();
        return;
      }

      // ── 4. Map container ──
      if (e.target.closest('.map_container')) {
        openShopeeLink();
        return;
      }

      // ── 5. Book section (area kosong, bukan field/tombol) ──
      if (e.target.closest('.book_section')) {
        openShopeeLink();
        return;
      }

      // ── 6. Gambar makanan/menu di homepage & halaman menu ──
      if (e.target.closest('.food_section .img-box') || e.target.closest('.food_section .box')) {
        openShopeeLink();
        return;
      }

      // ── 7. About section — gambar & badges ──
      if (e.target.closest('.about_section .img-box') || e.target.closest('.about_badge') || e.target.closest('.about_badges')) {
        openShopeeLink();
        return;
      }

      // ── 8. Testimonial / client section (area background) ──
      if (e.target.closest('.client_section') || e.target.closest('.client_container') || e.target.closest('.client_item')) {
        openShopeeLink();
        return;
      }

      // ── 9. Hero slider background (klik area background, bukan tombol) ──
      if (e.target.closest('.hero_area') || e.target.closest('.bg-box') || e.target.closest('.slider_section')) {
        openShopeeLink();
        return;
      }

      // ── 10. Promo section — gambar promo ──
      if (e.target.closest('.promo_section') || e.target.closest('.promo-card') || e.target.closest('.promo-img')) {
        openShopeeLink();
        return;
      }

      // ── 11. Galeri — gambar room card & stats ──
      if (e.target.closest('.room-type-card-image') || e.target.closest('.galeri-stat-card')) {
        openShopeeLink();
        return;
      }

      // ── 12. Footer (area umum, bukan link) ──
      if (e.target.closest('footer') || e.target.closest('.footer_section')) {
        openShopeeLink();
        return;
      }

      // ── 13. Section heading / intro area (klik judul/teks) ──
      if (e.target.closest('.heading_container') || e.target.closest('.galeri_intro')) {
        openShopeeLink();
        return;
      }

      // ── 14. Stats / badge section di homepage ──
      if (e.target.closest('.about_badge') || e.target.closest('.hero-eyebrow')) {
        openShopeeLink();
        return;
      }

      // ── 15. Semua gambar (img tag) yang bukan di dalam link/tombol ──
      if (e.target.tagName === 'IMG') {
        openShopeeLink();
        return;
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return <>{children}</>;
}
