# Icon Authoring Guide

## Purpose

This guide defines how to author and review reusable icon components in this project.

Use it when you are:

- adding an icon under `src/shared/icon`
- reviewing an existing icon component
- converting SVG markup from a source such as Heroicons, Octicons, or a brand asset
- explaining the shape or implementation of an icon

## Primary Rule

Project icons are MUI `SvgIcon` components that preserve the source SVG markup when that keeps the icon easy to trace back to its source.

The following structure is acceptable and should not be called out as a problem during review:

```tsx
import type { SvgIconProps } from "@mui/material";
import { SvgIcon } from "@mui/material";

export default function ExampleIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      {/* credit: source SVG from https://heroicons.com */}
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0 1 15 0"
        />
      </svg>
    </SvgIcon>
  );
}
```

MUI documents this `SvgIcon > svg` pattern for custom SVG icons. Do not require flattening the nested `<svg>` into direct `<path>` children unless there is a concrete rendering, sizing, accessibility, or maintenance issue.

## Placement

Reusable, domain-agnostic icon components belong in `src/shared/icon`.

Rules:

- keep one icon component per file
- use kebab-case file names, for example `building-office-2.tsx`
- export the component as the default export from the icon file
- type props as `SvgIconProps`
- pass props to the outer `SvgIcon`

## Source SVG Handling

Preserve source SVG attributes that are part of the icon's intended rendering.

Allowed:

- nested source `<svg>` inside `SvgIcon`
- source `viewBox`
- outline attributes such as `fill="none"`, `stroke="currentColor"`, `strokeWidth`, `strokeLinecap`, and `strokeLinejoin`
- filled brand-icon attributes such as `fill="currentColor"`
- source credit comments when they help future maintenance

Review the SVG only when there is a real issue:

- invalid JSX attribute names
- hardcoded colors that should follow the surrounding text color
- broken `viewBox` or size behavior
- inaccessible decorative or meaningful icon usage at the call site
- stray syntax artifacts that render as text

## Color

Prefer `currentColor` for icon paths so icons inherit color from MUI props, theme styling, and surrounding text.

Use source-specific color only when the icon must preserve a brand mark or a deliberately multi-color asset.

## Accessibility

Most project icons are decorative when used inside buttons, links, or list items with visible text.

Rules:

- keep decorative icons hidden from assistive technologies at the usage site when needed
- provide an accessible label on the containing button or link when the icon is the only visible affordance
- do not add generic labels to the icon component itself unless every usage has the same semantic meaning

## Review Checklist

Before finalizing an icon component, verify:

- the file lives in `src/shared/icon` when it is reusable and domain-agnostic
- the component accepts `SvgIconProps` and spreads them onto `SvgIcon`
- the icon uses `currentColor` unless a source-specific color is intentional
- the source SVG markup is valid JSX
- `SvgIcon > svg` nesting is accepted when it matches MUI's custom SVG pattern
- any call site using an icon-only control has an accessible label
