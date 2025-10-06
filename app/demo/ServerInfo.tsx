// This is a SERVER Component (no 'use client' directive)

export default function ServerInfo() {
  // This runs on the SERVER!
  const randomNumber = Math.floor(Math.random() * 1000);

  return (
    <div style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#c8e6c9',
      borderRadius: '8px',
      border: '2px solid #4caf50'
    }}>
      <h3>✅ Server Component Example</h3>
      <p>This component also runs on the SERVER.</p>
      <p><strong>Random number generated on server:</strong> {randomNumber}</p>
      <div style={{
        marginTop: '10px',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        <strong>Notice:</strong> This number changes on page refresh (server runs again),
        but NOT when you interact with the counter below (client-only updates).
      </div>
    </div>
  );
}
