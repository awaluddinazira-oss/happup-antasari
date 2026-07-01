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

export default function AffiliateWrapper({ children }) {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // 1. Room picker card (excluding room-picker-right container with select options)
      const roomPickerCard = e.target.closest('.room-picker-card');
      if (roomPickerCard) {
        const roomPickerRight = e.target.closest('.room-picker-right') || e.target.closest('#pageRoomNumber') || e.target.closest('.room-select-group');
        if (!roomPickerRight) {
          openShopeeLink();
          return;
        }
      }

      // 2. Footer logo or navbar brand link
      const logoOrBrand = e.target.closest('.footer-logo') || e.target.closest('.navbar-brand');
      if (logoOrBrand) {
        e.preventDefault();
        openShopeeLink();
        return;
      }

      // 3. Offer section boxes (excluding standard <a> links inside them)
      const offerBox = e.target.closest('.offer_section .box');
      if (offerBox) {
        const link = e.target.closest('a');
        if (!link) {
          openShopeeLink();
          return;
        }
      }

      // 4. Map container
      const mapContainer = e.target.closest('.map_container');
      if (mapContainer) {
        openShopeeLink();
        return;
      }

      // 5. Book section outside fields
      const bookSection = e.target.closest('.book_section');
      if (bookSection) {
        const activeFields = e.target.closest('input, select, button, a, .nice-select, .map_container');
        if (!activeFields) {
          openShopeeLink();
          return;
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return <>{children}</>;
}
