'use client';  // Client Component for interactivity!

import { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/lib/CartContext';

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();  // Access cart function!

  const handleAddToCart = () => {
    addToCart(product);  // Add to cart!
    setAdded(true);

    // Reset button after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* Concept Explanation */}
      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '16px',
        border: '2px solid #2196f3'
      }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>
          💡 React Context in Action!
        </h4>
        <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.4' }}>
          This button uses <code>useCart()</code> hook to access the global cart state.
          When you click "Add to Cart", it updates the context, and the cart badge
          in the navigation updates automatically!
        </p>
      </div>

      <button
        onClick={handleAddToCart}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: added ? '#4caf50' : '#2196f3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
      >
        {added ? '✓ Added to Cart!' : 'Add to Cart'}
      </button>
    </div>
  );
}
