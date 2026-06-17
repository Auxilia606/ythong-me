# ythong-me

Personal portfolio and history site built with Next.js App Router, React, and Material UI.

## Getting Started

Install dependencies, then run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `pnpm dev`: start the local Next.js development server.
- `pnpm build`: build the production app.
- `pnpm start`: start the production server after a build.
- `pnpm lint`: run ESLint.

## Project Structure

- `app/`: Next.js App Router files, metadata routes, layouts, and route entries.
- `src/app/`: app-level providers and framework-adjacent wiring.
- `src/pages/`: route-level screen composition.
- `src/widgets/`: reusable page sections and layout blocks.
- `src/shared/`: reusable UI primitives, icons, and theme code.
- `docs/`: architecture rules, implementation conventions, and reference material.

The root `pages/` directory is intentionally not used for routing. It exists only to keep the Next.js Pages Router disabled.

## Documentation

Start with [docs/README.md](./docs/README.md) for the full documentation index.

Common entry points:

- [Feature-Sliced Design Architecture Guide](./docs/architecture/feature-sliced-design.md)
- [MUI Component Authoring Guide](./docs/architecture/mui-component-authoring.md)
- [MUI Reference](./docs/feature-context/mui-llms.md)
