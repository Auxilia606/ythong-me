# `shared` Layer Guide

## Role

`shared` is the generic foundation layer.

It contains reusable code with no business meaning.

## Put Code Here When

- the code is domain-agnostic
- multiple unrelated domains can use it
- the main value is reuse of infrastructure or primitives
- the module does not encode product-specific business rules

## Typical Contents

- design-system components
- formatting and date utilities
- environment and runtime config
- theme tokens
- reusable icon components under `src/shared/icon`
- low-level library wrappers

## Typical Structure

```text
src/shared/
  component/
  icon/
  lib/
  theme/
```

`shared` does not use business slices.

## Keep Out of `shared`

- product rules
- business terms that belong to a feature or entity
- route orchestration
- hidden feature logic extracted only for convenience

## Import Rules

- `shared` must not depend on upper layers
- keep APIs generic and explicit
- prefer small, focused modules over large helper buckets

## Guardrail

Before moving code into `shared`, ask:

1. Does this code still make sense without product-specific context?
2. Could two unrelated domains use it without renaming or rewriting?
3. Would moving it here hide important business meaning?

If any answer is no, keep the code in its current slice.

## Anti-Patterns

- `shared/utils` becoming a dumping ground
- generic-looking helpers that actually encode business rules
- moving code into `shared` only to bypass layer boundaries
