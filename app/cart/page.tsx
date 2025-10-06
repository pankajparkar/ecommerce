'use client';  // Client Component to use useCart

import { useCart } from '@/lib/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Shopping Cart</h1>
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '60px',
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>🛒</div>
          <h2 style={{ fontSize: '24px', marginBottom: '12px', color: '#666' }}>
            Your cart is empty
          </h2>
          <p style={{ color: '#999', marginBottom: '24px' }}>
            Add some products to get started!
          </p>
          <Link
            href="/products"
            style={{
              display: 'inline-block',
              backgroundColor: '#2196f3',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '36px', margin: 0 }}>Shopping Cart</h1>
        <button
          onClick={clearCart}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Clear Cart
        </button>
      </div>

      {/* Concept Explanation */}
      <div style={{
        backgroundColor: '#e8f5e9',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '30px',
        border: '2px solid #4caf50'
      }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold' }}>
          🎯 Context State in Action!
        </h3>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
          This page uses <code>useCart()</code> to access the global cart state.
          When you add/remove items, the context updates and this page re-renders automatically.
          The same state is shared across all components! 🚀
        </p>
      </div>

      {/* Cart Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              gap: '20px',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }}
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                padding: '8px'
              }}
            />

            {/* Product Info */}
            <div style={{ flex: 1 }}>
              <Link
                href={`/products/${item.id}`}
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#333',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '8px'
                }}
              >
                {item.title}
              </Link>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                {item.category}
              </p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#2196f3' }}>
                ${item.price.toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                height: 'fit-content'
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '24px',
        borderRadius: '8px',
        border: '2px solid #ddd'
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Order Summary</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span>Total Items:</span>
          <strong>{totalItems}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span>Subtotal:</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <div style={{
          borderTop: '2px solid #ddd',
          paddingTop: '12px',
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '20px'
        }}>
          <strong>Total:</strong>
          <strong style={{ color: '#2196f3' }}>${totalPrice.toFixed(2)}</strong>
        </div>
        <button
          style={{
            width: '100%',
            marginTop: '20px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
