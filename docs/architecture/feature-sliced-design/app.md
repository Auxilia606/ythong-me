# `app` Layer Guide

## Role

`app` is the framework entry layer.

In this project it exists to connect Next.js App Router to the rest of the application, not to hold reusable business logic.

## Put Code Here When

- the file is required by Next.js App Router
- the code wires providers, layouts, metadata, or global styles
- the code bootstraps application-wide configuration
- the route file only delegates to a page entry component

## Typical Contents

- `layout.tsx`
- `page.tsx`
- `loading.tsx`
- `error.tsx`
- providers
- global CSS
- app-level configuration

## Keep Out of `app`

- reusable business interactions
- domain state that belongs to a feature or entity
- large route composition that should live in `pages/`
- generic helpers that belong in `shared/`

## Next.js Mapping

This project uses both:

- Next.js `src/app/**`
- FSD `src/pages/**`

Recommended pattern:

```ts
// src/app/search/page.tsx
export { SearchPage as default } from "@/pages/search";
```

Keep route files thin. If a route grows beyond simple framework wiring, move the composition into `pages/`.

## Import Rules

- `app` may depend on any lower layer
- `app` should consume lower layers through their public APIs
- avoid reaching into slice internals from route files

## Anti-Patterns

- putting route-specific composition directly into `app` by default
- keeping feature logic inside providers because it is convenient
- treating `app` as a replacement for `pages`
