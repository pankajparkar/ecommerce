// This is a SERVER Component (no 'use client')
import ServerInfo from "./ServerInfo";
import ClientCounter from "./ClientCounter";

export default function DemoPage() {
  // This code runs on the SERVER!
  const serverTime = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Server vs Client Components Demo</h1>

      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        border: '2px solid #2196f3'
      }}>
        <h3>🖥️ Server Component (This Page)</h3>
        <p>This component runs on the SERVER when you visit this page.</p>
        <p><strong>Server time when page was rendered:</strong> {serverTime}</p>
        <p style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#fff3e0',
          borderRadius: '4px'
        }}>
          💡 <strong>Try this:</strong> Refresh the page and watch the time change!
          That's because it runs on the server on each request.
        </p>
      </div>

      {/* This is a Server Component */}
      <ServerInfo />

      {/* This is a Client Component */}
      <ClientCounter />

      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f3e5f5',
        borderRadius: '8px'
      }}>
        <h3>🔑 Key Takeaway:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li>✅ <strong>Server Components</strong> = No JavaScript to browser, fast load</li>
          <li>✅ <strong>Client Components</strong> = Interactive, uses React hooks</li>
          <li>✅ You can <strong>mix both</strong> in the same page!</li>
        </ul>
      </div>
    </div>
  );
}
