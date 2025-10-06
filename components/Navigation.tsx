'use client';  // Now a Client Component so we can use useCart!

import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function Navigation() {
  const { totalItems } = useCart();  // Access cart state!

  return (
    <nav style={{
      backgroundColor: '#2196f3',
      padding: '16px',
      marginBottom: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
        <Link
          href="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          NextShop
        </Link>

        <div style={{ flex: 1, display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link
            href="/"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link
            href="/products"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Products
          </Link>
          <Link
            href="/about"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            About
          </Link>
          <Link
            href="/demo"
            style={{
              color: 'white',
              textDecoration: 'none',
              backgroundColor: '#ff9800',
              padding: '4px 12px',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            Demo 🎯
          </Link>

          {/* Cart Link with Badge */}
          <Link
            href="/cart"
            style={{
              color: 'white',
              textDecoration: 'none',
              position: 'relative',
              marginLeft: 'auto'
            }}
          >
            🛒 Cart
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-12px',
                backgroundColor: '#f44336',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
