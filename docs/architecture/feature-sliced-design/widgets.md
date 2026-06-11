# `widgets` Layer Guide

## Role

`widgets` contains large reusable UI blocks composed from lower layers.

A widget is a composition unit. It is not the place for defining the underlying business action itself.

## Put Code Here When

- the block is reused across multiple pages
- the block combines features, entities, and shared UI into a larger section
- the main value is reusable screen composition

## Typical Contents

- headers
- sidebars
- dashboards panels
- reusable content sections

## Keep Out of `widgets`

- route-only composition that belongs in `pages/`
- user actions that should be modeled as `features/`
- domain models that belong in `entities/`
- generic primitives that belong in `shared/`

## Typical Structure

```text
src/widgets/
  search-results-panel/
    ui/
    model/
    index.ts
```

## Import Rules

- `widgets` may depend on `features`, `entities`, and `shared`
- other layers should consume widgets through `index.ts`
- same-layer widget-to-widget imports are forbidden by default

## Anti-Patterns

- creating a widget when a plain shared component is enough
- moving business logic into widgets because the UI block is large
- using widgets as a grab bag for anything visible on screen
