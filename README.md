# Next.js Ecommerce - Learning Project 🚀

A comprehensive Next.js application built for learning all core concepts through a real-world ecommerce example.

## 🎯 What You've Learned

### Phase 1: Foundation ✅
- **App Router**: File-based routing with the `app/` directory
- **Layouts**: Shared UI components that persist across pages
- **Navigation**: Client-side routing with `<Link>` component
- **File Structure**: Special files (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`)

### Phase 2: Core Concepts ✅
- **Server Components**: Default rendering strategy, async/await in components
- **Client Components**: Interactive components with `'use client'` directive
- **Data Fetching**: Server-side data fetching with caching
- **Dynamic Routes**: `[id]` folder structure for dynamic paths
- **Loading States**: Automatic loading UI with `loading.tsx`
- **Error Handling**: Error boundaries with `error.tsx`

### Phase 3: State Management ✅
- **React Context API**: Global cart state management
- **Client/Server Composition**: Server Components wrapping Client Components
- **Image Optimization**: Next.js `<Image>` component with automatic optimization
- **Tailwind CSS**: Utility-first styling

## 🏗️ Project Structure

```
ecommerce/
├── app/
│   ├── layout.tsx           # Root layout with CartProvider
│   ├── page.tsx             # Home page (Server Component)
│   ├── globals.css          # Global styles
│   ├── products/
│   │   ├── page.tsx         # Product listing (Server Component)
│   │   ├── loading.tsx      # Loading skeleton
│   │   ├── error.tsx        # Error boundary
│   │   └── [id]/
│   │       └── page.tsx     # Product details (Dynamic Route)
│   ├── cart/
│   │   └── page.tsx         # Shopping cart (Client Component)
│   └── about/
│       └── page.tsx         # About page
├── components/
│   ├── Header.tsx           # Navigation header (Client Component)
│   └── AddToCartButton.tsx  # Cart button (Client Component)
├── lib/
│   ├── api.ts               # API functions for data fetching
│   └── cart-context.tsx     # Cart Context Provider
├── types/
│   └── product.ts           # TypeScript interfaces
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🔑 Key Concepts Explained

### Server vs Client Components

**Server Components** (Default):
```tsx
// This is a Server Component (no 'use client')
export default async function ProductsPage() {
  const products = await getAllProducts(); // Can use async/await!
  return <div>{/* ... */}</div>
}
```

**Benefits:**
- Run on the server only
- Can directly access databases/APIs
- Zero JavaScript sent to client
- Better SEO and initial load performance

**Client Components**:
```tsx
'use client'; // This directive makes it a Client Component

import { useState } from 'react';

export default function AddToCartButton() {
  const [count, setCount] = useState(0); // Can use hooks!
  return <button onClick={() => setCount(count + 1)}>Add</button>
}
```

**Benefits:**
- Can use React hooks (useState, useEffect, etc.)
- Can handle user interactions
- Can access browser APIs

**Best Practice:** Use Server Components by default, only use Client Components when you need interactivity!

### Dynamic Routes

```
app/
└── products/
    └── [id]/
        └── page.tsx  → Matches /products/1, /products/2, etc.
```

```tsx
interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  // ...
}
```

### Data Fetching & Caching

```tsx
// Cached for 1 hour (revalidate every 3600 seconds)
const res = await fetch('https://api.com/products', {
  next: { revalidate: 3600 }
});
```

**Caching Strategies:**
- `{ cache: 'force-cache' }` - Cache forever (default)
- `{ cache: 'no-store' }` - Never cache, always fetch fresh
- `{ next: { revalidate: 60 } }` - Revalidate every 60 seconds

### Loading & Error States

**loading.tsx** - Automatic loading UI:
```tsx
export default function Loading() {
  return <div>Loading...</div>
}
```

**error.tsx** - Error boundary:
```tsx
'use client'; // Must be a Client Component!

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit http://localhost:3000

## 📝 Advanced Topics to Explore Next

### 1. Server Actions (Form Handling)
```tsx
async function addProduct(formData: FormData) {
  'use server'
  // Handle form submission on server
}
```

### 2. Middleware (Auth, Redirects)
```tsx
// middleware.ts
export function middleware(request: NextRequest) {
  // Run before request is completed
}
```

### 3. API Routes
```tsx
// app/api/products/route.ts
export async function GET() {
  return Response.json({ products: [] })
}
```

### 4. Metadata & SEO
```tsx
export const metadata: Metadata = {
  title: 'Product Name',
  description: 'Product description',
}
```

### 5. Parallel Routes & Intercepting Routes
```
app/
├── @modal/
└── (.)product/[id]/
```

### 6. Streaming & Suspense
```tsx
<Suspense fallback={<Loading />}>
  <SlowComponent />
</Suspense>
```

## 🎓 What Makes Next.js Special?

1. **File-based Routing** - No router configuration needed
2. **Server Components** - Better performance by default
3. **Automatic Code Splitting** - Each route only loads what it needs
4. **Image Optimization** - Automatic image resizing and optimization
5. **Built-in CSS Support** - Tailwind, CSS Modules, and more
6. **API Routes** - Full-stack framework with backend capabilities
7. **TypeScript Support** - First-class TypeScript experience
8. **Fast Refresh** - Instant feedback during development

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [FakeStore API](https://fakestoreapi.com)

## 💡 Tips for Learning

1. **Start with Server Components** - Only use Client Components when needed
2. **Understand the File System** - Routing is based on folder structure
3. **Use TypeScript** - Better autocomplete and error catching
4. **Leverage Caching** - Next.js caching is powerful, learn how to use it
5. **Check Network Tab** - See what's being sent to the client

---

Built with ❤️ for learning Next.js
