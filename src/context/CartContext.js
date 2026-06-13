"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [selectedRoom, setSelectedRoomState] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load cart and room from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('happup_cart');
    const savedRoom = localStorage.getItem('happup_room');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }
    if (savedRoom) {
      setSelectedRoomState(savedRoom);
    }
  }, []);

  // Save cart and room to localStorage when they change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('happup_cart', JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('happup_room', selectedRoom);
    }
  }, [selectedRoom, isMounted]);

  const setSelectedRoom = (room) => {
    setSelectedRoomState(room);
    if (!room) {
      setCart([]);
      setIsCartOpen(false);
    }
  };

  const addToCart = (menuItem) => {
    if (!selectedRoom) {
      alert('Silakan pilih Nomor Room terlebih dahulu (Langkah 1) sebelum menambahkan menu!');
      
      const roomPickerCard = document.querySelector('.room-picker-card');
      if (roomPickerCard) {
        roomPickerCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === menuItem.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === menuItem.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...menuItem, quantity: 1 }];
    });
  };

  const removeCartItem = (itemName) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === itemName);
      if (!existingItem) return prevCart;

      if (existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.name !== itemName);
    });
  };

  const deleteCartItem = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
