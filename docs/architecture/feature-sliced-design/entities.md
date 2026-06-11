# `entities` Layer Guide

## Role

`entities` contains core business models.

An entity represents a stable domain concept rather than a user action.

## Put Code Here When

- the code describes a core domain object
- the logic belongs to one domain concept regardless of screen
- multiple features or pages need the same domain representation
- the slice owns entity-specific UI, state, or transport mapping

## Typical Contents

- domain types
- entity-focused state
- minimal domain logic
- entity-specific UI
- transport mappers tied to one entity

Examples:

- `user`
- `patent`
- `search-query`
- `alert`

## Typical Structure

```text
src/entities/
  patent/
    ui/
    model/
    api/
    index.ts
```

## Keep Out of `entities`

- user workflows that belong in `features/`
- page orchestration that belongs in `pages/`
- app wiring that belongs in `app/`
- domain-agnostic helpers that belong in `shared/`

## Import Rules

- `entities` may depend only on `shared`
- same-layer entity-to-entity imports are forbidden by default
- expose stable contracts through the slice public API

## Public API Guidance

It is reasonable to expose:

- entity types intentionally consumed by upper layers
- selectors, adapters, or UI entry points that define the entity contract

Avoid exposing internal helpers or implementation-only files.

## Anti-Patterns

- putting mutation workflows here because they mention an entity
- creating a giant domain service layer inside one entity slice
- using `entities/` as a dumping ground for all business code
