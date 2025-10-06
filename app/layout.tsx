import "./globals.css";
import Navigation from "@/components/Navigation";
import { CartProvider } from "@/lib/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navigation />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
