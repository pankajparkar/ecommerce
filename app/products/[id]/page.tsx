import { Product } from "@/types/product";

// Fetch single product by ID
async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  return res.json();
}

// Dynamic route receives params
interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  // Get the ID from URL params
  const { id } = await params;

  // Fetch product data on the server!
  const product = await getProduct(id);

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Concept Explanation */}
      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        border: '2px solid #2196f3',
        marginBottom: '30px'
      }}>
        <h3>🎯 Dynamic Route Concept!</h3>
        <p><strong>What's happening:</strong></p>
        <ol style={{ lineHeight: '1.8', marginTop: '10px' }}>
          <li><strong>Folder name:</strong> <code>app/products/[id]/page.tsx</code></li>
          <li><strong>URL:</strong> <code>/products/{id}</code></li>
          <li><strong>Params:</strong> <code>params.id = "{id}"</code></li>
          <li>Next.js automatically passes the URL parameter to your component!</li>
        </ol>
        <p style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#fff3e0',
          borderRadius: '4px'
        }}>
          💡 The <code>[id]</code> folder makes this a dynamic route.<br/>
          Whatever you put in the URL becomes <code>params.id</code>!
        </p>
      </div>

      {/* Product Details */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'start'
      }}>
        {/* Product Image */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '40px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: '100%',
              maxHeight: '400px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Product Info */}
        <div>
          <div style={{
            fontSize: '12px',
            color: '#666',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            {product.category}
          </div>

          <h1 style={{ marginBottom: '16px' }}>{product.title}</h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px'
          }}>
            <span style={{ color: '#ff9800', fontSize: '20px' }}>★</span>
            <span style={{ fontSize: '18px' }}>{product.rating.rate}</span>
            <span style={{ color: '#666', fontSize: '14px' }}>
              ({product.rating.count} reviews)
            </span>
          </div>

          <p style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#2196f3',
            marginBottom: '24px'
          }}>
            ${product.price.toFixed(2)}
          </p>

          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px'
          }}>
            <h3 style={{ marginBottom: '12px' }}>Description</h3>
            <p style={{ lineHeight: '1.6', color: '#666' }}>
              {product.description}
            </p>
          </div>

          <button
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#2196f3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Add to Cart
          </button>

          <p style={{
            marginTop: '16px',
            fontSize: '14px',
            color: '#666',
            textAlign: 'center'
          }}>
            (Note: This button doesn't work yet - we'll add interactivity next!)
          </p>
        </div>
      </div>

      {/* Back Link */}
      <div style={{ marginTop: '40px' }}>
        <a
          href="/products"
          style={{
            color: '#2196f3',
            textDecoration: 'none'
          }}
        >
          ← Back to Products
        </a>
      </div>
    </div>
  );
}
