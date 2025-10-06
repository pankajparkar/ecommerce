# 🎯 React Context in Next.js - Complete Guide

## What You Just Built! 🎉

You successfully implemented a **global shopping cart** using React Context API in Next.js!

---

## 📚 React Context - The Complete Pattern

### **What is React Context?**

React Context is a way to share state across your entire app **without prop drilling**.

**Without Context (Prop Drilling):**
```tsx
<App>
  <Header cart={cart} />
  <Page cart={cart}>
    <Product cart={cart}>
      <Button cart={cart} />  // Passed through 4 levels!
    </Product>
  </Page>
</App>
```

**With Context:**
```tsx
<CartProvider>  // State lives here
  <App>
    <Header />  // useCart() to access
    <Page>
      <Product>
        <Button />  // useCart() to access
      </Product>
    </Page>
  </App>
</CartProvider>
```

---

## 🛠️ The 3-Step Pattern You Used

### **Step 1: Create Context & Provider**

```tsx
// lib/CartContext.tsx
'use client';  // MUST be Client Component!

import { createContext, useContext, useState } from 'react';

// 1. Define the shape of your context
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  totalItems: number;
}

// 2. Create the Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Create Provider Component
export function CartProvider({ children }) {
  // All your state logic here
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems([...items, product]);
  };

  const totalItems = items.length;

  // Provide state to children
  return (
    <CartContext.Provider value={{ items, addToCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

// 4. Create custom hook for easy access
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
```

### **Step 2: Wrap Your App**

```tsx
// app/layout.tsx
import { CartProvider } from '@/lib/CartContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CartProvider>  {/* Wrap everything */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
```

### **Step 3: Use Anywhere!**

```tsx
// Any component
'use client';

import { useCart } from '@/lib/CartContext';

export default function AnyComponent() {
  const { items, addToCart, totalItems } = useCart();

  return (
    <div>
      <p>Total: {totalItems}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
```

---

## 🔑 Key Rules & Best Practices

### **1. Context Provider MUST be Client Component**
```tsx
'use client';  // Required!

export function CartProvider({ children }) {
  // Uses useState/useContext
}
```

### **2. Components Using Context MUST be Client Components**
```tsx
'use client';  // Required!

export default function MyComponent() {
  const { state } = useCart();  // Uses hook
}
```

### **3. Server Components Can Pass Data to Context**
```tsx
// Server Component (no 'use client')
export default async function ProductPage() {
  const product = await fetch(...);  // Server!

  // Pass to Client Component
  return <AddToCartButton product={product} />;
}

// Client Component
'use client';
export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();  // Context!
  return <button onClick={() => addToCart(product)}>Add</button>;
}
```

### **4. Keep Context Logic Separate**
```
lib/
└── CartContext.tsx  // All cart logic in one file
```

---

## 🎯 Your Implementation

### **Files You Created:**

```
├── lib/
│   └── CartContext.tsx          # Context + Provider + Hook
├── components/
│   ├── Navigation.tsx           # Shows cart badge (uses context)
│   └── AddToCartButton.tsx      # Adds items (uses context)
├── app/
│   ├── layout.tsx               # Wraps app with Provider
│   ├── cart/
│   │   └── page.tsx            # Cart page (uses context)
│   └── products/[id]/
│       └── page.tsx            # Product detail (Server → Client)
```

### **Data Flow:**

```
1. User clicks "Add to Cart" button
        ↓
2. AddToCartButton calls addToCart(product)
        ↓
3. CartContext updates state with setItems()
        ↓
4. ALL components using useCart() re-render
        ↓
5. Navigation badge updates
6. Cart page updates
```

---

## 💡 Common Patterns

### **Pattern 1: Computed Values**
```tsx
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Computed on every render
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
```

### **Pattern 2: Complex State Updates**
```tsx
const addToCart = (product) => {
  setItems((prevItems) => {
    // Check if exists
    const existing = prevItems.find(item => item.id === product.id);

    if (existing) {
      // Update quantity
      return prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    // Add new
    return [...prevItems, { ...product, quantity: 1 }];
  });
};
```

### **Pattern 3: Multiple Contexts**
```tsx
// You can have multiple contexts!
<AuthProvider>
  <CartProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </CartProvider>
</AuthProvider>
```

---

## 🚀 What You Can Build Now

With React Context, you can build:

- ✅ Shopping carts
- ✅ User authentication state
- ✅ Theme switching (dark/light mode)
- ✅ Language/i18n
- ✅ Notification systems
- ✅ Any global state!

---

## ⚠️ When NOT to Use Context

**Don't use Context for:**
- ❌ Server-side data (use Server Components instead)
- ❌ Data that doesn't change often
- ❌ Performance-critical frequent updates (consider Zustand/Redux)

**Context is best for:**
- ✅ User preferences
- ✅ Shopping carts
- ✅ Authentication
- ✅ UI state (modals, themes)

---

## 🎓 Context vs Other Solutions

| Solution | Use When |
|----------|----------|
| **React Context** | Small to medium global state, built-in |
| **Zustand** | Need better performance, simpler API |
| **Redux** | Very large apps, need DevTools |
| **Server Components** | Data from database/API (not state!) |

---

## 📊 Your Shopping Cart Features

### **What Works:**
- ✅ Add products to cart
- ✅ Remove products from cart
- ✅ Clear entire cart
- ✅ Show total items
- ✅ Show total price
- ✅ Badge updates in real-time
- ✅ State persists across page navigation

### **Potential Enhancements:**
- 💡 Update quantity in cart
- 💡 Persist cart to localStorage
- 💡 Add animations
- 💡 Show success notifications

---

## 🔥 Pro Tips

1. **Always create a custom hook** (`useCart`) - cleaner API
2. **Type everything with TypeScript** - catches errors early
3. **Error handling** - throw error if used outside provider
4. **Separate concerns** - one context per feature
5. **Keep providers at top level** - in layout.tsx

---

## 🎉 Congratulations!

You've mastered:
- ✅ Creating Context
- ✅ Building Provider components
- ✅ Custom hooks for context
- ✅ Mixing Server + Client components
- ✅ Global state management in Next.js

**You now understand one of the most important patterns in React development!** 🚀
