import { Product } from "@/types/product";

// This is a SERVER Component - we can use async/await!
async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductsPage() {
  // Fetch data directly in the component!
  const products = await getProducts();

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Our Products</h1>

      {/* Concept Explanation */}
      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#e8f5e9',
        borderRadius: '8px',
        border: '2px solid #4caf50'
      }}>
        <h3>🚀 Server Component Data Fetching!</h3>
        <p><strong>What's happening here:</strong></p>
        <ol style={{ lineHeight: '1.8', marginTop: '10px' }}>
          <li>This component is <code>async</code> (only possible in Server Components!)</li>
          <li>We <code>await fetch()</code> directly - no useEffect needed!</li>
          <li>Data is fetched on the SERVER</li>
          <li>HTML is sent to browser with data already in it</li>
          <li>Zero JavaScript for data fetching sent to client!</li>
        </ol>
        <p style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#fff3e0',
          borderRadius: '4px'
        }}>
          💡 <strong>In React:</strong> You'd need useState + useEffect + loading state.<br/>
          <strong>In Next.js Server Component:</strong> Just async/await! 🎉
        </p>
      </div>

      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Product Image */}
            <div style={{
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px'
            }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Product Info */}
            <h3 style={{
              fontSize: '16px',
              marginBottom: '8px',
              minHeight: '40px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {product.title}
            </h3>

            <p style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#2196f3',
              margin: '8px 0'
            }}>
              ${product.price.toFixed(2)}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: 'auto',
              paddingTop: '8px'
            }}>
              <span style={{ color: '#ff9800' }}>★</span>
              <span style={{ fontSize: '14px', color: '#666' }}>
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Data Source Info */}
      <div style={{
        marginTop: '40px',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#666'
      }}>
        📦 Data fetched from <a href="https://fakestoreapi.com" target="_blank" rel="noopener" style={{ color: '#2196f3' }}>FakeStore API</a>
      </div>
    </div>
  );
}
