# Documentation

This directory is organized by document purpose.

## Structure

- `architecture/`: frontend architecture rules, layer boundaries, and implementation conventions.
- `feature-context/`: feature-level context summaries and reusable documentation templates.

## Architecture

- [Feature-Sliced Design Architecture Guide](./architecture/feature-sliced-design.md): placement rules, dependency direction, public API expectations, and layer selection.
- [MUI Component Authoring Guide](./architecture/mui-component-authoring.md): conventions for composing and styling Material UI components.
- [Icon Authoring Guide](./architecture/icon-authoring.md): rules for reusable SVG icon components.
- [React State and Effects Guide](./architecture/react-state-and-effects.md): local state, derived values, and `useEffect` guidance.

## Feature-Sliced Design Layers

- [`app` layer](./architecture/feature-sliced-design/app.md)
- [`pages` layer](./architecture/feature-sliced-design/pages.md)
- [`widgets` layer](./architecture/feature-sliced-design/widgets.md)
- [`features` layer](./architecture/feature-sliced-design/features.md)
- [`entities` layer](./architecture/feature-sliced-design/entities.md)
- [`shared` layer](./architecture/feature-sliced-design/shared.md)

## Feature Context

- [Feature Context Documentation](./feature-context/README.md): guidance for adding stable feature summaries.

## References

- [MUI Reference](./feature-context/mui-llms.md): Material UI documentation links for agent and contributor lookup.
