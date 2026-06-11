# Feature Context Documentation

This directory contains feature-level context summaries for contributors and agents.

Use these documents when you need to understand what a user-facing feature does, which FSD slices participate in it, and which APIs or runtime services it depends on.

## Documents

- [`feature-context-summary.md`](./feature-context-summary.md): index of feature context documents.
- [`runtime-context.md`](./runtime-context.md): shared providers, API infrastructure, streaming, and generated client context.
- [`features/`](./features/): one document per feature or feature-adjacent domain context.
- [`feature-context-template.md`](./feature-context-template.md): reusable template for refreshing this documentation when features change.

## Refresh Guidance

When a feature is added or significantly changed:

1. Read `docs/architecture/feature-sliced-design.md`.
2. Inspect the affected route, page, widget, feature, entity, and shared slices.
3. Add or update the matching document under `features/`.
4. Update `feature-context-summary.md` when the feature document list changes.
5. Use `feature-context-template.md` as the capture format for new feature writeups.
