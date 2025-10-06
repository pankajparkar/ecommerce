export default function HomePage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🎉 Welcome to Next.js!</h1>
      <p>This is your first Next.js page</p>

      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '30px auto',
        textAlign: 'left'
      }}>
        <h3>📝 What just happened?</h3>
        <ol>
          <li>You created a file: <code>app/page.tsx</code></li>
          <li>Next.js automatically made it your homepage</li>
          <li>This component is rendered on the SERVER first</li>
          <li>Then sent as HTML to your browser</li>
        </ol>
      </div>

      <p style={{ color: '#666', fontSize: '14px', marginTop: '20px' }}>
        💡 Notice: This is just a regular React component!
      </p>
    </div>
  );
}
