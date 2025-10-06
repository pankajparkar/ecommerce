export default function ProductsPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Our Products</h1>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f3e5f5',
        borderRadius: '8px',
        border: '2px solid #9c27b0'
      }}>
        <h3>📂 Another Route Created!</h3>
        <p><strong>File:</strong> <code>app/products/page.tsx</code></p>
        <p><strong>URL:</strong> <code>/products</code></p>
        <br/>
        <p style={{
          padding: '10px',
          backgroundColor: '#fff',
          borderRadius: '4px'
        }}>
          Try typing in the browser: <code>http://localhost:3000/products</code>
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Product Listing (Coming Soon)</h2>
        <p>We'll add real products here in the next steps!</p>
        <p>For now, notice how easy it was to create this route - just add a folder and page.tsx!</p>
      </div>
    </div>
  );
}
