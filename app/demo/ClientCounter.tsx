'use client';  // ← This makes it a CLIENT Component!

import { useState } from 'react';

export default function ClientCounter() {
  // useState only works in Client Components!
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div style={{
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#ffebee',
      borderRadius: '8px',
      border: '2px solid #f44336'
    }}>
      <h3>⚡ Client Component Example</h3>
      <p>This component runs in the BROWSER (client).</p>

      <div style={{
        marginTop: '15px',
        padding: '15px',
        backgroundColor: '#fff',
        borderRadius: '4px'
      }}>
        <h4>Interactive Counter:</h4>
        <p style={{ fontSize: '24px', margin: '10px 0' }}>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>

        <div style={{ marginTop: '20px' }}>
          <h4>Type Something:</h4>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here..."
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '100%',
              fontSize: '16px'
            }}
          />
          {text && <p style={{ marginTop: '10px' }}>You typed: <strong>{text}</strong></p>}
        </div>
      </div>

      <div style={{
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#fff3e0',
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        <strong>💡 Why this is a Client Component:</strong>
        <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
          <li>Uses <code>useState</code> hook</li>
          <li>Has <code>onClick</code> and <code>onChange</code> handlers</li>
          <li>Needs interactivity!</li>
        </ul>
        <p style={{ marginTop: '8px' }}>
          Notice the <code>'use client'</code> directive at the top of this component's file!
        </p>
      </div>
    </div>
  );
}
