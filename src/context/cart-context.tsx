'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/data/products';

export type CartItem = Product & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'supplyhouse-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity = 1) => {
    const safeQuantity = Math.max(1, quantity);

    setItems((current) => {
      const existing = current.find((entry) => entry.id === product.id);

      if (existing) {
        return current.map((entry) =>
          entry.id === product.id ? { ...entry, quantity: entry.quantity + safeQuantity } : entry
        );
      }

      return [...current, { ...product, quantity: safeQuantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((current) => current.filter((entry) => entry.id !== productId));
  };

  const setQuantity = (productId: string, quantity: number) => {
    setItems((current) =>
      current
        .map((entry) => (entry.id === productId ? { ...entry, quantity } : entry))
        .filter((entry) => entry.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.quantity * item.price, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, itemCount, subtotal, addToCart, removeFromCart, setQuantity, clearCart }),
    [items, itemCount, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
