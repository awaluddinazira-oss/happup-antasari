"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Toast from './Toast';

let toastId = 0;

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const addToast = useCallback((message, type = 'success', duration = 3000) => {
    const id = ++toastId;
    setToasts(prev => [...prev, { id, message, type, duration }]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  // Expose globally for easy access (only after mount to avoid hydration issues)
  useEffect(() => {
    if (isMounted) {
      window.showToast = addToast;
    }
  }, [isMounted, addToast]);

  // Don't render anything until mounted (prevents hydration mismatch)
  if (!isMounted) return null;

  return (
    <>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
}

// Helper function to show toast from anywhere
export const showToast = (message, type = 'success', duration = 3000) => {
  if (typeof window !== 'undefined' && window.showToast) {
    window.showToast(message, type, duration);
  }
};
