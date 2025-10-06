export default function AboutPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Us</h1>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#e8f5e9',
        borderRadius: '8px',
        border: '2px solid #4caf50'
      }}>
        <h3>🎯 Routing Concept:</h3>
        <p><strong>File:</strong> <code>app/about/page.tsx</code></p>
        <p><strong>URL:</strong> <code>/about</code></p>
        <br/>
        <p>Notice the pattern:</p>
        <ul>
          <li><code>app/page.tsx</code> → <code>/</code></li>
          <li><code>app/about/page.tsx</code> → <code>/about</code></li>
          <li><code>app/products/page.tsx</code> → <code>/products</code></li>
        </ul>
        <p style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#fff3e0',
          borderRadius: '4px'
        }}>
          <strong>💡 The folder name becomes the URL path!</strong>
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>About This Learning Project</h2>
        <p>You're learning Next.js by building a real ecommerce app step-by-step.</p>
        <p>This page demonstrates how routing works with the App Router!</p>
      </div>
    </div>
  );
}
