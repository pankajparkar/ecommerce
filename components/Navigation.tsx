import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{
      backgroundColor: '#2196f3',
      padding: '16px',
      marginBottom: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
        <Link
          href="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          NextShop
        </Link>

        <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
          <Link
            href="/"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link
            href="/products"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Products
          </Link>
          <Link
            href="/about"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
