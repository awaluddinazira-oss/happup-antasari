"use client";

import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { menuCategories, roomGroups } from '@/data/menuData';

export default function MenuPage() {
  const {
    selectedRoom,
    setSelectedRoom,
    cart,
    addToCart,
    removeCartItem,
    deleteCartItem,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const [activeCategoryId, setActiveCategoryId] = useState('nasi');
  const categorySliderRef = useRef(null);

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const scrollCategories = (direction) => {
    const slider = categorySliderRef.current;
    if (!slider) return;
    slider.scrollBy({ left: direction * Math.round(slider.clientWidth * 0.75), behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryId, event) => {
    setActiveCategoryId(categoryId);
    if (event?.currentTarget) {
      event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const activeCategory = menuCategories.find((cat) => cat.id === activeCategoryId) || menuCategories[0];

  const handleCheckout = () => {
    if (!selectedRoom) {
      alert('Silakan pilih Nomor Room terlebih dahulu!');
      setIsCartOpen(false);
      return;
    }
    if (cart.length === 0) {
      alert('Keranjang masih kosong!');
      return;
    }
    let message = `Halo Happy Puppy, saya ingin memesan menu:\n\n`;
    message += `📍 *${selectedRoom}*\n\n`;
    cart.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (${formatRupiah(item.price * item.quantity)})\n`;
    });
    message += `\n*Total: ${formatRupiah(cartTotal)}*\n\nTerima kasih!`;
    const waUrl = `https://wa.me/6282148004822?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    clearCart();
    setIsCartOpen(false);
  };

  /* ─── Common inline style helpers ─── */
  const qtyBtnBase = {
    width: '30px', height: '30px',
    borderRadius: '8px',
    fontSize: '18px', fontWeight: '700',
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    lineHeight: 1,
    transition: 'all 0.2s',
    flexShrink: 0,
    border: 'none',
  };

  return (
    <main className="sub_page">
      {/* ── HERO ── */}
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="Hero background" />
        </div>
        <Navbar />
      </div>

      {/* ── ROOM PICKER (sticky below hero) ── */}
      <div style={{
        background: 'linear-gradient(135deg, #13161c 0%, #1a1e27 100%)',
        borderBottom: '1px solid rgba(212,175,55,0.15)',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 90,
        backdropFilter: 'blur(20px)',
      }}>
        <div className="container">
          <div className="room-picker-card" style={{ marginBottom: 0 }}>
            <div className="room-picker-left">
              <span style={{
                display: 'inline-block',
                background: 'rgba(212,175,55,0.12)',
                border: '1px solid rgba(212,175,55,0.25)',
                borderRadius: '50px',
                padding: '4px 12px',
                fontSize: '11px', fontWeight: '600', color: '#d4af37',
                letterSpacing: '1px', textTransform: 'uppercase',
                marginBottom: '6px',
              }}>🏠 Room Karaoke</span>
              <h2 style={{ margin: 0, color: '#fff', fontSize: '20px' }}>Pilih Room Anda</h2>
            </div>
            <div className="room-picker-right">
              <label htmlFor="pageRoomNumber" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', marginBottom: '8px', display: 'block' }}>
                Nomor Room
              </label>
              <select
                id="pageRoomNumber"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                style={{
                  width: '280px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: selectedRoom ? '1px solid rgba(212,175,55,0.5)' : '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.06)',
                  color: selectedRoom ? '#d4af37' : 'rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: selectedRoom ? '600' : '400',
                  outline: 'none',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  transition: 'all 0.35s ease',
                }}
              >
                <option value="" style={{ background: '#1a1e27', color: '#888' }}>-- Pilih Nomor Room --</option>
                {roomGroups.map((group) => (
                  <optgroup key={group.label} label={group.label} style={{ background: '#1a1e27', color: '#d4af37' }}>
                    {group.rooms.map((room) => (
                      <option key={room} value={room} style={{ background: '#1a1e27', color: '#fff' }}>
                        {room}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ── MENU SECTION ── */}
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Menu Kami</h2>
          </div>

          {/* Category tabs */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '30px 0', gap: '8px' }}>
            <button
              type="button"
              onClick={() => scrollCategories(-1)}
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold',
                width: '36px', height: '36px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#d4af37'; e.currentTarget.style.color = '#0d0f13'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; }}
            >
              ‹
            </button>

            <nav
              ref={categorySliderRef}
              style={{
                display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth',
                flexGrow: 1, whiteSpace: 'nowrap',
                scrollbarWidth: 'none', msOverflowStyle: 'none', gap: '8px', padding: '4px 0',
              }}
            >
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={(e) => handleCategoryClick(category.id, e)}
                  style={{
                    padding: '9px 22px', borderRadius: '50px', flexShrink: 0,
                    border: activeCategoryId === category.id ? '1px solid rgba(212,175,55,0.5)' : '1px solid rgba(255,255,255,0.1)',
                    background: activeCategoryId === category.id
                      ? 'linear-gradient(135deg, #d4af37 0%, #f0d060 100%)'
                      : 'rgba(255,255,255,0.05)',
                    color: activeCategoryId === category.id ? '#0d0f13' : 'rgba(255,255,255,0.75)',
                    cursor: 'pointer',
                    fontWeight: activeCategoryId === category.id ? '700' : '500',
                    fontFamily: 'Outfit, sans-serif', fontSize: '13px',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s',
                    boxShadow: activeCategoryId === category.id ? '0 4px 15px rgba(212,175,55,0.3)' : 'none',
                  }}
                >
                  {category.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => scrollCategories(1)}
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold',
                width: '36px', height: '36px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#d4af37'; e.currentTarget.style.color = '#0d0f13'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; }}
            >
              ›
            </button>
          </div>

          {/* Menu Items Grid */}
          <div className="filters-content">
            <div className="row grid">
              {activeCategory.items.map((item, index) => (
                <div
                  key={item.name}
                  className={`col-6 col-sm-6 col-md-4 col-lg-3 all ${activeCategoryId}`}
                  data-aos="zoom-in"
                  data-aos-delay={(index % 4) * 100}
                >
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src={item.image.startsWith('http') || item.image.includes('Mpek-mpek') || item.image.includes('tahu-cabe-garam') ? item.image : `https://wawazrc.github.io${item.image}`}
                          alt={item.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span style="font-size:28px">${item.icon}</span>`;
                          }}
                        />
                      </div>
                      <div className="detail-box">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <div className="options">
                          <h6>{formatRupiah(item.price)}</h6>
                          <button
                            type="button"
                            className="btn-add-cart"
                            onClick={() => addToCart(item)}
                          >
                            {selectedRoom ? '+ Add' : 'Pilih Room'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOATING CART BUTTON ── */}
      {cartCount > 0 && (
        <div
          id="floating-cart"
          onClick={() => setIsCartOpen(true)}
          style={{
            position: 'fixed', bottom: '30px', right: '30px',
            background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 100%)',
            color: '#0d0f13',
            width: '60px', height: '60px',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(212,175,55,0.4)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span style={{
            position: 'absolute', top: '-6px', right: '-6px',
            background: '#ef4444', color: '#fff',
            borderRadius: '50%', width: '22px', height: '22px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '11px', fontWeight: '700',
            border: '2px solid #0d0f13',
          }}>
            {cartCount}
          </span>
        </div>
      )}

      {/* ── CART SIDEBAR (dark theme) ── */}
      <div
        id="cart-modal"
        style={{
          position: 'fixed', top: 0,
          right: isCartOpen ? 0 : '-420px',
          width: '380px', maxWidth: '100vw', height: '100%',
          backgroundColor: '#13161c',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.6)',
          zIndex: 1050,
          display: 'flex', flexDirection: 'column',
          transition: 'right 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px', background: '#1a1e27',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#fff', fontFamily: 'Outfit, sans-serif' }}>
            🛒 Keranjang Pesanan
          </h3>
          <button
            id="close-cart"
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', cursor: 'pointer', color: 'rgba(255,255,255,0.7)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 24px', overflowY: 'auto', flexGrow: 1 }}>
          {/* Room badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            marginBottom: '20px', padding: '12px 16px',
            background: selectedRoom ? 'rgba(212,175,55,0.1)' : 'rgba(239,68,68,0.08)',
            border: `1px solid ${selectedRoom ? 'rgba(212,175,55,0.3)' : 'rgba(239,68,68,0.2)'}`,
            borderRadius: '12px',
          }}>
            <span style={{ fontSize: '20px' }}>{selectedRoom ? '📍' : '⚠️'}</span>
            <span style={{ fontWeight: '700', fontSize: '14px', color: selectedRoom ? '#d4af37' : '#f87171' }}>
              {selectedRoom || 'Room belum dipilih'}
            </span>
          </div>

          {/* Items */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {cart.length === 0 ? (
              <li style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', padding: '50px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>🛒</div>
                <span style={{ fontSize: '14px' }}>Keranjang masih kosong</span>
              </li>
            ) : (
              cart.map((item) => (
                <li key={item.name} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ flexGrow: 1 }}>
                    {/* Name */}
                    <span style={{ fontWeight: '600', fontSize: '14px', color: '#fff', display: 'block', marginBottom: '10px' }}>
                      {item.name}
                    </span>
                    {/* Controls */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {/* − */}
                      <button
                        onClick={() => removeCartItem(item.name)}
                        style={{
                          ...qtyBtnBase,
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#fff',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#d4af37'; e.currentTarget.style.color = '#0d0f13'; e.currentTarget.style.borderColor = '#d4af37'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                      >
                        −
                      </button>
                      {/* Qty number */}
                      <span style={{
                        minWidth: '40px', textAlign: 'center',
                        fontWeight: '800', fontSize: '17px',
                        color: '#fff', fontFamily: 'Outfit, sans-serif',
                      }}>
                        {item.quantity}
                      </span>
                      {/* + */}
                      <button
                        onClick={() => addToCart(item)}
                        style={{
                          ...qtyBtnBase,
                          background: 'rgba(212,175,55,0.1)',
                          border: '1px solid rgba(212,175,55,0.4)',
                          color: '#d4af37',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#d4af37'; e.currentTarget.style.color = '#0d0f13'; e.currentTarget.style.borderColor = '#d4af37'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.color = '#d4af37'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'; }}
                      >
                        +
                      </button>
                      {/* Price */}
                      <span style={{ marginLeft: '10px', color: '#d4af37', fontSize: '13px', fontWeight: '600' }}>
                        × {formatRupiah(item.price)}
                      </span>
                    </div>
                  </div>
                  {/* Delete */}
                  <button
                    onClick={() => deleteCartItem(item.name)}
                    style={{
                      background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                      borderRadius: '8px', color: '#ef4444',
                      width: '32px', height: '32px', fontSize: '18px',
                      cursor: 'pointer', marginLeft: '12px', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.08)'; }}
                  >
                    ×
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Footer */}
        <div style={{
          padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#1a1e27',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#fff',
          }}>
            <span>Total</span>
            <span style={{ color: '#d4af37', fontSize: '20px' }}>{formatRupiah(cartTotal)}</span>
          </div>
          <button
            id="btn-checkout-wa"
            onClick={handleCheckout}
            style={{
              width: '100%', padding: '14px',
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              color: '#fff', border: 'none', borderRadius: '50px',
              fontSize: '15px', fontWeight: '700', fontFamily: 'Outfit, sans-serif',
              cursor: 'pointer', transition: 'all 0.3s', letterSpacing: '0.5px',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(34,197,94,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            Pesan Lewat WhatsApp
          </button>
        </div>
      </div>

      {/* ── BACKDROP ── */}
      {isCartOpen && (
        <div
          id="cart-backdrop"
          onClick={() => setIsCartOpen(false)}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 1040,
          }}
        />
      )}
    </main>
  );
}
