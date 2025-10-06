export default function HomePage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🎉 Welcome to Next.js!</h1>
      <p>This is your first Next.js page</p>

      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        maxWidth: '700px',
        margin: '30px auto',
        textAlign: 'left',
        border: '2px solid #2196f3'
      }}>
        <h3>🔄 How Layout + Page Work Together:</h3>
        <ol style={{ lineHeight: '1.8' }}>
          <li><strong>Next.js finds:</strong> <code>app/page.tsx</code> (this file)</li>
          <li><strong>Next.js finds:</strong> <code>app/layout.tsx</code> (wrapper)</li>
          <li><strong>Next.js automatically does:</strong><br/>
            <code style={{
              display: 'block',
              backgroundColor: '#fff',
              padding: '10px',
              marginTop: '8px',
              borderRadius: '4px'
            }}>
              &lt;RootLayout children=&#123;&lt;HomePage /&gt;&#125; /&gt;
            </code>
          </li>
          <li><strong>Result:</strong> This page content appears inside the layout's <code>&#123;children&#125;</code></li>
        </ol>
        <p style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: '#fff3e0',
          borderRadius: '4px',
          borderLeft: '4px solid #ff9800'
        }}>
          <strong>💡 Key Point:</strong> You never manually import or call the layout!<br/>
          Next.js automatically wraps your page based on file structure.
        </p>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        maxWidth: '700px',
        margin: '20px auto',
        textAlign: 'left'
      }}>
        <h3>📝 What you're seeing:</h3>
        <ul>
          <li>✅ This content is from <code>app/page.tsx</code></li>
          <li>✅ It's wrapped by <code>app/layout.tsx</code> (the html/body tags)</li>
          <li>✅ Everything rendered on the SERVER first</li>
          <li>✅ Sent to browser as optimized HTML</li>
        </ul>
      </div>

      <p style={{ color: '#666', fontSize: '14px', marginTop: '20px' }}>
        📖 Check <code>CONCEPT_LAYOUT.md</code> for detailed explanation!
      </p>
    </div>
  );
}
