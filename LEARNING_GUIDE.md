# Next.js Ecommerce - Complete Learning Guide

## 🎯 Learning Objectives (4 Hours)

### Phase 1: Foundation (30 min) ✅ DONE
- [x] Project setup
- [x] App Router basics
- [ ] Routing & Navigation

### Phase 2: Core Concepts (45 min)
- [ ] Server vs Client Components
- [ ] Data Fetching
- [ ] Dynamic Routes
- [ ] Loading & Error States

### Phase 3: Styling & UI (30 min)
- [ ] Tailwind CSS
- [ ] Reusable Components
- [ ] Image Optimization

### Phase 4: Ecommerce Features (90 min)
- [ ] Product Listing
- [ ] Product Details
- [ ] Shopping Cart
- [ ] Search & Filter

### Phase 5: Advanced (45 min)
- [ ] Server Actions
- [ ] Middleware
- [ ] Caching Strategies
- [ ] Deployment

---

## 📖 Concepts Explained

### 1. App Router vs Pages Router

**App Router** (New - We're using this!)
- Lives in `app/` directory
- File-system based routing
- Server Components by default
- Better performance & DX

**Pages Router** (Old - Legacy)
- Lives in `pages/` directory
- All Client Components
- Still supported but not recommended

### 2. Special Files

| File | Purpose |
|------|---------|
| `layout.tsx` | Shared UI wrapper, persists across pages |
| `page.tsx` | Unique UI for a route, makes route publicly accessible |
| `loading.tsx` | Loading UI (automatic with Suspense) |
| `error.tsx` | Error UI boundary |
| `not-found.tsx` | 404 UI |
| `route.ts` | API endpoint |

### 3. Routing Examples

```
app/
├── page.tsx                    → /
├── about/
│   └── page.tsx               → /about
├── products/
│   ├── page.tsx               → /products
│   └── [id]/
│       └── page.tsx           → /products/123
└── blog/
    └── [...slug]/
        └── page.tsx           → /blog/a/b/c (catch-all)
```

### 4. Server vs Client Components

**Server Components** (Default)
- Run on the server only
- Can access backend resources directly
- Zero JavaScript to client
- Cannot use hooks (useState, useEffect)
- Cannot use browser APIs

**Client Components** (Use 'use client')
- Run on both server (initial render) and client
- Can use hooks and interactivity
- Can use browser APIs
- Add 'use client' at top of file

---

## 🚀 Next Steps

We'll build the ecommerce app step by step:
1. Create navigation header
2. Add product listing page
3. Implement product details
4. Build shopping cart
5. Add search & filters
6. Implement checkout

Let's continue!
