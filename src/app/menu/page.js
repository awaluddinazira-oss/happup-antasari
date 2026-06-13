"use client";

import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { outlet, menuCategories, roomGroups, heroImageUrl } from '@/data/menuData';

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

    slider.scrollBy({
      left: direction * Math.round(slider.clientWidth * 0.75),
      behavior: 'smooth',
    });
  };

  const handleCategoryClick = (categoryId, event) => {
    setActiveCategoryId(categoryId);
    if (event?.currentTarget) {
      event.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const activeCategory = menuCategories.find((cat) => cat.id === activeCategoryId) || menuCategories[0];

  const handleCheckout = () => {
    if (!selectedRoom) {
      alert("Silakan pilih Nomor Room terlebih dahulu!");
      setIsCartOpen(false);
      return;
    }

    if (cart.length === 0) {
      alert("Keranjang masih kosong!");
      return;
    }

    let message = `Halo Happy Puppy, saya ingin memesan menu:\n\n`;
    message += `📍 *${selectedRoom}*\n\n`;
    
    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      message += `- ${item.quantity}x ${item.name} (${formatRupiah(itemTotal)})\n`;
    });

    message += `\n*Total: ${formatRupiah(cartTotal)}*\n\n`;
    message += `Terima kasih!`;

    const waNumber = "6282148004822";
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    
    // Clear cart and close modal
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <main className="sub_page">
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="Hero background" />
        </div>
        <Navbar />
        
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          {/* Room Picker */}
          <div className="room-picker-card" style={{ marginBottom: 0 }}>
            <div className="room-picker-left">
              <h2>Pilih Room Karaoke</h2>
            </div>
            <div className="room-picker-right">
              <label htmlFor="pageRoomNumber">Nomor Room</label>
              <select 
                className="form-control" 
                id="pageRoomNumber"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                style={{ appearance: 'none', WebkitAppearance: 'none' }}
              >
                <option value="">-- Pilih Nomor Room --</option>
                {roomGroups.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.rooms.map((room) => (
                      <option key={room} value={room}>
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

      {/* food section */}
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Menu Kami</h2>
          </div>

          {/* Category tabs */}
          <div className="menu-tabs-shell" style={{ display: 'flex', alignItems: 'center', margin: '30px 0', position: 'relative' }}>
            <button
              type="button"
              className="tab-scroll-btn"
              onClick={() => scrollCategories(-1)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}
            >
              &lt;
            </button>

            <nav
              ref={categorySliderRef}
              className="menu-tabs"
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                flexGrow: 1,
                whiteSpace: 'nowrap',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                gap: '10px',
                padding: '10px'
              }}
            >
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`tab-btn ${activeCategoryId === category.id ? 'active' : ''}`}
                  onClick={(e) => handleCategoryClick(category.id, e)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '25px',
                    border: 'none',
                    backgroundColor: activeCategoryId === category.id ? '#ffbe33' : '#f7f7f7',
                    color: activeCategoryId === category.id ? '#ffffff' : '#222831',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  {category.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              className="tab-scroll-btn"
              onClick={() => scrollCategories(1)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}
            >
              &gt;
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
                          src={item.image.startsWith('http') ? item.image : `https://wawazrc.github.io${item.image}`} 
                          alt={item.name} 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span style="font-size: 24px; font-weight: bold; color: #ffbe33;">${item.icon}</span>`;
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

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <div 
          id="floating-cart" 
          className="floating-cart show"
          onClick={() => setIsCartOpen(true)}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#ffbe33',
            color: '#ffffff',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: 1000,
            transition: 'transform 0.3s ease'
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="cart-count" style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: '#222831',
            color: '#ffffff',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {cartCount}
          </span>
        </div>
      )}

      {/* Cart Modal / Sidebar */}
      <div id="cart-modal" className={`cart-modal ${isCartOpen ? 'open' : ''}`} style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        maxWidth: '450px',
        height: '100%',
        backgroundColor: '#ffffff',
        boxShadow: '-5px 0 25px rgba(0,0,0,0.15)',
        zIndex: 1050,
        display: 'flex',
        flexDirection: 'column',
        transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s ease-in-out'
      }}>
        <div className="cart-header" style={{
          padding: '20px',
          borderBottom: '1px solid #eeeeee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#222831',
          color: '#ffffff'
        }}>
          <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Keranjang Pesanan</h3>
          <button 
            id="close-cart" 
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '28px',
              cursor: 'pointer',
              lineHeight: 1
            }}
          >
            &times;
          </button>
        </div>
        <div className="cart-body" style={{
          padding: '20px',
          overflowY: 'auto',
          flexGrow: 1
        }}>
          <p id="selected-room-display" className="room-display-text" style={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#ffbe33',
            marginBottom: '15px',
            borderLeft: '4px solid #ffbe33',
            paddingLeft: '10px'
          }}>
            {selectedRoom ? `Room: ${selectedRoom}` : 'Room belum dipilih'}
          </p>
          <ul id="cart-items-list" className="cart-items-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {cart.length === 0 ? (
              <li className="empty-cart-msg" style={{ textAlign: 'center', color: '#999999', padding: '40px 0' }}>Keranjang masih kosong</li>
            ) : (
              cart.map((item) => (
                <li key={item.name} className="cart-item" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid #f2f2f2'
                }}>
                  <div className="cart-item-details" style={{ flexGrow: 1 }}>
                    <span className="cart-item-name" style={{ fontWeight: '500', color: '#222831' }}>{item.name}</span>
                    <div className="cart-qty-controls" style={{ display: 'flex', alignItems: 'center', marginTop: '6px' }}>
                      <button 
                        className="btn-qty" 
                        onClick={() => removeCartItem(item.name)}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          border: '1px solid #cccccc',
                          background: '#ffffff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        -
                      </button>
                      <span className="cart-item-qty" style={{ margin: '0 10px', fontWeight: 'bold' }}>{item.quantity}</span>
                      <button 
                        className="btn-qty" 
                        onClick={() => addToCart(item)}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          border: '1px solid #cccccc',
                          background: '#ffffff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        +
                      </button>
                      <span className="cart-item-price" style={{ marginLeft: '10px', color: '#666666', fontSize: '13px' }}>
                        x {formatRupiah(item.price)}
                      </span>
                    </div>
                  </div>
                  <button 
                    className="btn-remove-item" 
                    onClick={() => deleteCartItem(item.name)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#ff3333',
                      fontSize: '22px',
                      cursor: 'pointer',
                      marginLeft: '15px'
                    }}
                  >
                    &times;
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="cart-footer" style={{
          padding: '20px',
          borderTop: '1px solid #eeeeee',
          backgroundColor: '#f9f9f9'
        }}>
          <div className="cart-total" style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '15px'
          }}>
            <span>Total:</span>
            <span id="cart-total-price" style={{ color: '#ffbe33' }}>{formatRupiah(cartTotal)}</span>
          </div>
          <button 
            id="btn-checkout-wa" 
            className="btn-checkout" 
            onClick={handleCheckout}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#ffbe33',
              color: '#ffffff',
              border: 'none',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(255,190,51,0.3)'
            }}
          >
            Pesan Lewat WhatsApp
          </button>
        </div>
      </div>

      {/* Cart Backdrop */}
      {isCartOpen && (
        <div 
          id="cart-backdrop" 
          className="cart-backdrop open"
          onClick={() => setIsCartOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1040,
            opacity: 1,
            transition: 'opacity 0.4s ease'
          }}
        />
      )}
    </main>
  );
}
