# `features` Layer Guide

## Role

`features` contains user actions and business interactions.

A feature should represent something a user does, triggers, or completes.

## Put Code Here When

- the code models a user action
- the behavior has clear business intent
- the interaction may be reused across screens
- the slice needs its own UI, state, and transport boundary

## Typical Contents

- sign-in flows
- search submission
- saved-search creation
- export actions
- filtering, sorting, or mutation workflows with business meaning

## Typical Structure

```text
src/features/
  save-search/
    ui/
    model/
    api/
    lib/
    config/
    index.ts
```

## Keep Out of `features`

- route composition that belongs in `pages/`
- pure domain representations that belong in `entities/`
- generic UI primitives and infrastructure that belong in `shared/`
- one-off page logic with no reusable or stable business boundary

## Import Rules

- `features` may depend on `entities` and `shared`
- do not import another feature's internals
- same-layer feature-to-feature imports are forbidden by default

If a feature seems to depend on another feature, resolve it by:

- moving shared logic down to a lower layer
- composing both features from a higher layer
- redefining the slice boundary

## Public API Guidance

Expose only stable entry points such as:

- root UI components
- public hooks
- action functions intentionally consumed by upper layers

Do not expose internal helpers, test utilities, or unstable implementation details.

## Anti-Patterns

- extracting code into `features/` only because it is interactive
- creating a feature for route-only glue code
- storing reusable domain contracts here when they belong in `entities/`
