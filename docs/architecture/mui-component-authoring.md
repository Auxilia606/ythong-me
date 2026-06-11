# MUI Component Authoring Guide

## Purpose

This guide defines how to author and refactor MUI-based UI components in this project so different agents produce consistent results.

Use it when you are:

- creating a new widget, feature UI, or shared UI component with MUI
- refactoring a component that mixes structure and large inline style blocks
- deciding between `styled(...)`, `sx`, subcomponents, or extraction into another slice

## Primary Rule

Prefer `styled(...)` for structural or repeated styles.

The render body should read mostly as:

- semantic structure
- component composition
- data mapping
- event wiring

Large style objects should not dominate the JSX tree.

## When To Prefer `styled(...)`

Use `styled(...)` when one or more of the following are true:

- the component has multiple layout sections such as `Root`, `Header`, `Content`, `Footer`, `Card`
- responsive styles make the JSX harder to read
- the same visual slot has a clear semantic role
- the component is expected to grow
- the style block is longer than the JSX element is meaningful

Typical examples:

- sidebars
- headers
- cards with internal sections
- sticky panels
- reusable form shells

## When `sx` Is Still Fine

Use `sx` for small, local, one-off adjustments.

Good uses:

- a single spacing or alignment tweak on a child element
- a one-line color override
- very small prototype code that is likely to be deleted

Avoid `sx` when it turns into a long inline object with breakpoints, layered backgrounds, sticky positioning, or visual states. That should move into `styled(...)`.

## Overriding MUI Built-In Styles

When the design change is really an override of MUI's built-in component styles, prefer targeting the component's exported class object instead of fighting generated selectors indirectly.

Typical cases:

- fixing default state styles such as `:first-of-type`, `:last-of-type`, `:hover`, `:expanded`, or `:disabled`
- overriding styles attached to MUI slots such as root, content, expand icon wrapper, or summary content
- keeping the override aligned with the component's own selector model instead of relying on unstable generated class names

Prefer:

- exported class objects such as `accordionClasses`, `accordionSummaryClasses`, `buttonClasses`
- slot-aware selectors inside `sx` or `styled(...)`
- a single clear override source instead of mixing root styles and ad hoc exceptions

Avoid:

- targeting generated CSS class names such as `.css-abc123-Mui...`
- adding workaround selectors that do not match MUI's actual slot or state structure
- spreading the same visual rule across root styles and separate one-off fixes

Example:

```tsx
import { Accordion, accordionClasses } from "@mui/material";

<Accordion
  sx={{
    [`&.${accordionClasses.root}`]: {
      borderRadius: 3,
    },
  }}
/>
```

If the override exists to change a reusable project-wide default rather than a one-off screen need, consider moving it into theme component overrides instead of repeating it locally.

## File-Level Structure

Default structure for a UI file:

1. imports
2. static data or local constants
3. exported component
4. styled slot declarations

This keeps the first screen focused on structure and behavior, while still keeping styles colocated with the component.

## Slot Naming

Name styled elements by role, not by implementation detail.

Prefer:

- `Root`
- `Shell`
- `Aside`
- `Header`
- `Content`
- `Section`
- `SectionLabel`
- `Footer`
- `Card`

Avoid vague names such as:

- `Wrapper`
- `Container2`
- `Inner`
- `Box1`

If a section has domain meaning, reflect that meaning in the name, for example:

- `ResultsSection`
- `FilterPanel`
- `UserCard`

## Semantic Elements

Use semantic HTML when the slot has a semantic role.

Examples:

- `styled("aside")` for sidebar navigation
- `styled("nav")` for navigation groups
- `styled("section")` for standalone sections
- `styled("header")` or `styled("footer")` when appropriate

Do not wrap everything in generic `div` or `Box` elements if the structure has clearer semantics.

## Theme Usage

Prefer theme-aware values over hardcoded visual constants.

Use:

- `theme.spacing(...)`
- `theme.breakpoints.up(...)`
- `theme.vars.palette.*` for palette values that must track light/dark schemes
- `theme.header.height` and `theme.snb.width` for app layout tokens

Hardcoded values are acceptable when they are intentional component-level constants, for example:

- avatar size
- a specific blur value
- a shadow that is already part of the visual design

If a hardcoded value is repeated across files, promote it into a token or shared constant instead of copying it.

## Color Schemes And CSS Variables

This project enables MUI CSS variables and ships both light and dark color schemes.

Rules:

- prefer `theme.vars.palette.*` over raw `var(--palette-...)` whenever the value comes from the MUI theme
- prefer `theme.vars.palette.*Channel` for alpha-based colors instead of hand-writing `var(--palette-...Channel)`
- prefer theme extensions such as `theme.header.height` and `theme.snb.width` over mirrored app-level CSS variables in component code
- use raw `var(--...)` only when integrating with non-MUI CSS, third-party markup, or a custom property that does not exist on the theme
- avoid introducing new direct `var(--palette-...)` references in `styled(...)` or `sx`
- if a value is passed into MUI color utilities such as `alpha(...)`, `lighten(...)`, `darken(...)`, or `emphasize(...)`, use `theme.palette.*` because those helpers require a resolved color value, not a CSS variable string

Prefer:

```tsx
const Header = styled("header")(({ theme }) => ({
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.88)`,
  color: theme.vars.palette.text.secondary,
  height: theme.header.height,
}));
```

Avoid:

```tsx
const Header = styled("header")(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: "rgba(var(--palette-background-paperChannel) / 0.88)",
  color: "var(--palette-text-secondary)",
  height: "var(--header-height)",
}));
```

Use `theme.palette.*` only when an API requires a resolved color string and `theme.vars` is not accepted cleanly. That should be the exception, not the default authoring style.

Example:

```tsx
const accent = theme.palette.dataViz.brand;

const MetricIcon = styled(Box)({
  backgroundColor: alpha(accent, 0.1),
  color: accent,
});
```

Avoid passing `theme.vars.palette.*` directly into color math helpers. Values such as `var(--palette-dataViz-brand)` are valid CSS, but they are not valid inputs for MUI color parsing utilities.

## Breakpoints

Keep responsive behavior inside the styled slot definition instead of scattering breakpoint logic across JSX.

Prefer:

```tsx
const Aside = styled("aside")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: theme.snb.width,
  },
}));
```

Avoid:

```tsx
<Box
  sx={{
    width: { xs: "100%", md: theme.snb.width },
  }}
/>
```

for large structural slots.

## Composition Boundaries

Use `styled(...)` to improve readability inside a component file.

Create a separate component when:

- a section has its own meaning
- a section may be reused
- the section has its own behavior or future state
- the section can be tested independently

Do not split a file into many tiny components just to avoid writing styles in one place.

## Loading And Skeleton States

Prefer preserving the real component layout during loading.

Rules:

- keep the same container, spacing, and overall structure whenever the loaded and loading states represent the same UI
- apply `Skeleton` only to the fields whose data is not ready yet, such as titles, chips, timestamps, summaries, and body text
- keep layout-affecting wrappers such as cards, accordions, panels, headers, and section shells mounted during loading
- use a dedicated `isLoading` or `loading` prop to switch individual content slots, not to swap the whole component out by default
- disable interactions during loading only when the interaction depends on missing data

Avoid:

- replacing an entire card, panel, or section with a generic fixed-height skeleton block when the final layout is already known
- creating a separate loading-only JSX tree just to mimic the same structure
- collapsing the layout so the page jumps when data arrives

Use a full component replacement only when the loading state is intentionally a different UI, not just the same UI with missing content.

Preferred pattern:

```tsx
<Card>
  <CardHeader
    title={
      isLoading ? <Skeleton width={120} /> : <Typography>{title}</Typography>
    }
  />

  <CardContent>
    {isLoading ? (
      <Skeleton variant="text" width="100%" />
    ) : (
      <Typography>{description}</Typography>
    )}
  </CardContent>
</Card>
```

## Logic Boundaries

Keep styling decisions separate from business logic.

Rules:

- do not compute business state inside styled declarations
- do not hide business behavior in visual prop naming
- pass explicit visual variants when styling truly depends on state
- keep data fetching, domain logic, and orchestration outside presentational slots

If the component starts owning real UI state or domain behavior, consider whether part of it belongs in `model/`, `features/`, or `entities/`.
If you are deciding whether a UI value should be derived during render, stored in state, or synchronized through an effect, read [React State and Effects Guide](./react-state-and-effects.md).

## Recommended Pattern

```tsx
export function ExamplePanel() {
  return (
    <Root>
      <Header>
        <Title variant="h6">Title</Title>
      </Header>

      <Content>
        <Section>
          <SectionLabel variant="caption">Recent items</SectionLabel>
        </Section>
      </Content>
    </Root>
  );
}

const Root = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const Header = styled("header")(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Content = styled(Box)({
  flex: 1,
});

const Section = styled("section")(({ theme }) => ({
  padding: theme.spacing(2),
}));

const SectionLabel = styled(Typography)(({ theme }) => ({
  color: theme.vars.palette.text.secondary,
  fontWeight: 700,
}));
```

## Review Checklist

Before finalizing a MUI component, verify:

- the JSX reads as structure first, not style first
- structural styles live in `styled(...)`
- `sx` is limited to small local exceptions
- loading states preserve the final layout when possible
- skeletons are applied to missing content slots instead of replacing the whole component by default
- slot names describe roles clearly
- semantic elements are used where appropriate
- theme tokens and breakpoints are used consistently
- business logic is not hidden inside style code
- extraction into another component or slice is justified, not automatic

## Scope

This guide applies primarily to:

- `widgets/*/ui`
- `features/*/ui`
- `entities/*/ui`
- `shared/ui`

If an existing area already follows a different established pattern, preserve local consistency unless you are intentionally standardizing that area.
