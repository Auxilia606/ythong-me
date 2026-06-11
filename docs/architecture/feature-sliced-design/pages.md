# `pages` Layer Guide

## Role

`pages` is the route-level composition layer.

Use it to assemble a screen from widgets, features, entities, and shared UI without turning the route itself into reusable business logic too early.

## Put Code Here When

- the code exists for one route or screen
- the logic is not yet reused elsewhere
- the page coordinates multiple lower-layer pieces
- the route needs page-only state, loaders, or orchestration

## Typical Contents

- page entry components
- route-scoped composition
- page-only state and handlers
- page-specific helpers that are not reusable yet

## Pages-First Rule

This project follows a pages-first approach.

- keep non-reusable logic in `pages/`
- do not extract to `features/` only because a page file grew
- extract only when reuse or a clear business boundary becomes real

## Keep Out of `pages`

- reusable business actions that deserve a `features/` slice
- core domain models that belong in `entities/`
- generic infrastructure that belongs in `shared/`
- framework-only route files that belong in `app/`

## Typical Structure

```text
src/pages/
  search/
    ui/
    model/
    index.ts
```

## Import Rules

- `pages` may depend on `widgets`, `features`, `entities`, and `shared`
- `pages` must not be imported by lower layers
- expose the page entry through `index.ts`

## Anti-Patterns

- extracting half-finished page logic into `features/`
- hiding route-specific orchestration in `shared/`
- using `pages/` as a second framework routing directory
