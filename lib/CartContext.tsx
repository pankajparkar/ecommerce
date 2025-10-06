'use client';  // MUST be Client Component!

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types/product';

// Define cart item type (product + quantity)
interface CartItem extends Product {
  quantity: number;
}

// Define what our context provides
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component (wraps our app)
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setItems((prevItems) => {
      // Check if product already in cart
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new item with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Clear entire cart
  const clearCart = () => {
    setItems([]);
  };

  // Calculate total items
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}
