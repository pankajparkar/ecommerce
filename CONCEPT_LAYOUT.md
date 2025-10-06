# Understanding Layouts in Next.js

## How Next.js Automatically Wires Layout + Page

### File Structure:
```
app/
├── layout.tsx    → RootLayout component
└── page.tsx      → HomePage component
```

### What Next.js Does Automatically:

```tsx
// You DON'T write this code - Next.js does it for you!
function AutomaticRendering() {
  return (
    <RootLayout>
      <HomePage />  {/* ← This becomes "children" */}
    </RootLayout>
  );
}
```

### How It Works:

**Step 1:** You define layout.tsx
```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>My Header</header>
        {children}  {/* ← Page goes here */}
        <footer>My Footer</footer>
      </body>
    </html>
  );
}
```

**Step 2:** You define page.tsx
```tsx
export default function HomePage() {
  return <h1>Welcome!</h1>;
}
```

**Step 3:** Next.js combines them
```html
<html>
  <body>
    <header>My Header</header>
    <h1>Welcome!</h1>  <!-- Your page -->
    <footer>My Footer</footer>
  </body>
</html>
```

## Key Points:

1. ✅ Next.js finds your `page.tsx`
2. ✅ Next.js finds your `layout.tsx`
3. ✅ Next.js passes page as `children` to layout
4. ✅ You never import or call these - it's automatic!

## The Rule:

> **Every page.tsx is automatically wrapped by its layout.tsx**
>
> The page becomes the `children` prop automatically.

## Nested Layouts (Preview for later):

```
app/
├── layout.tsx           → Wraps everything
├── page.tsx             → Homepage
└── products/
    ├── layout.tsx       → Wraps only /products pages
    └── page.tsx         → Products page

Result:
<RootLayout>
  <ProductsLayout>
    <ProductsPage />
  </ProductsLayout>
</RootLayout>
```

Layouts can be nested! But we'll learn that later.
