# Feature-Sliced Design Architecture Guide

## Purpose

This document is the entry point for this project's Feature-Sliced Design (FSD) rules.

Use it when you need to answer one question quickly:

> Which layer should this code belong to?

The detailed rules for each layer live in separate documents so agents and contributors do not need to reread a long guide for every task.

## Core Rules

### Dependency Rule

Code may only depend on lower layers.

```text
app -> pages -> widgets -> features -> entities -> shared
```

Rules:

- upward imports are forbidden
- same-layer slice imports are forbidden by default
- cross-slice communication must go through a public API

### Public API Rule

Every slice must expose a stable entry point through `index.ts`.

Allowed:

```ts
import { SearchForm } from "@/features/search-patents";
```

Forbidden:

```ts
import { SearchForm } from "@/features/search-patents/ui/SearchForm";
```

Prefer explicit exports over broad `export *`.

### Naming Rule

- name slices by business domain or user intent
- use kebab-case for slice directories
- avoid vague names such as `common`, `misc`, `helpers`, or `utils`

## Layer Selection Checklist

Choose placement in this order:

1. Is it framework wiring, route files, providers, or global app configuration? Put it in `app/`.
2. Is it route-specific composition that is not reusable yet? Put it in `pages/`.
3. Is it a large reusable UI block composed from lower layers? Put it in `widgets/`.
4. Is it a user action or business interaction? Put it in `features/`.
5. Is it a core business model or domain concept? Put it in `entities/`.
6. Is it generic infrastructure with no business meaning? Put it in `shared/`.

If the answer is unclear, keep the code local first and extract only when the boundary becomes obvious.

## Segment Reference

Inside a slice, use these segment names when needed:

- `ui/`: components, presentation logic, styles
- `model/`: state, hooks, orchestration, business logic
- `api/`: requests, DTOs, schemas, mappers near transport boundaries
- `lib/`: internal helpers used only inside the slice
- `config/`: local constants, feature flags, static options

Use purpose-driven names such as `ui` and `model` instead of `components` or `hooks`.

## Layer Documents

- [`app` layer](./feature-sliced-design/app.md)
- [`pages` layer](./feature-sliced-design/pages.md)
- [`widgets` layer](./feature-sliced-design/widgets.md)
- [`features` layer](./feature-sliced-design/features.md)
- [`entities` layer](./feature-sliced-design/entities.md)
- [`shared` layer](./feature-sliced-design/shared.md)

## Recommended Reading Order

Use this order when placing new code:

1. Read this file for the placement checklist.
2. Open the target layer document for detailed rules.
3. Verify imports and public API boundaries before writing code.

## Related Conventions

- For MUI-based UI composition and refactoring rules, read [MUI Component Authoring Guide](./mui-component-authoring.md).
- For reusable MUI SVG icon components, read [Icon Authoring Guide](./icon-authoring.md).
- For local state, derived values, and `useEffect` design rules, read [React State and Effects Guide](./react-state-and-effects.md).

## References

[1]: https://feature-sliced.github.io/documentation/
[2]: https://feature-sliced.github.io/documentation/docs/reference/layers
[3]: https://feature-sliced.github.io/documentation/docs/reference/public-api
[4]: https://github.com/feature-sliced/documentation/discussions
