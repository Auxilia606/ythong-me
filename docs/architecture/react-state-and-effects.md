# React State and Effects Guide

## Purpose

This guide defines how to decide between render-derived values, event-driven state, and `useEffect` in this project.

Use it when you are:

- adding local UI state to a component
- deciding whether a value should live in `useState`
- writing or reviewing a `useEffect`
- fixing warnings about cascading renders or unnecessary re-renders

## Primary Rule

Do not use an effect to derive one piece of React state from another piece of React state.

If a value can be calculated during render from props, query results, or existing local state, keep it derived instead of storing it separately.

Prefer this order:

1. derive during render
2. update state from an explicit user event
3. use an effect only to synchronize with an external system

## What Belongs in State

Keep a value in state when the user or the environment can change it independently from the current render inputs.

Good examples:

- whether a dialog is open
- which accordion items the user explicitly expanded
- draft form input
- pending request status owned by the component

Usually do not store:

- filtered arrays that can be recomputed from source data
- booleans that are direct conditions over props or fetched data
- mirrored copies of server data
- default-expanded ids that can be inferred from the current analysis result

## What Effects Are For

Effects should connect React to something outside the render tree.

Good uses:

- subscribing to browser or library events
- starting or cleaning up timers
- synchronizing with DOM APIs that React does not model directly
- updating external stores or imperative widgets
- triggering network work in response to lifecycle boundaries when that work is not already handled elsewhere

Effects are a poor fit for:

- copying props into local state
- recomputing view models
- merging derived ids into local state on every render change
- fixing data flow problems after render

## Synchronous `setState` Inside Effects

Avoid calling `setState` synchronously inside an effect just to realign local state with render inputs.

That pattern often causes:

- an extra render pass
- React warnings about cascading renders
- hidden divergence between the source data and the copied state
- harder-to-reason-about toggle behavior

If the effect only exists to say "when X changes, update Y state", first ask whether `Y` should be derived during render instead.

## Recommended Pattern For Expand/Collapse UI

Split "derived default behavior" from "user intent".

Example rule:

- compute which items should be open by default from the latest data
- store only the user's manual expansions or manual dismissals in state
- determine the final expanded value by combining the derived defaults with the user-owned overrides

This avoids an effect that keeps pushing derived ids into state after every data change.

## Review Questions

Before adding a new `useState` or `useEffect`, verify:

- can this value be derived directly during render
- is this state representing user intent, or just a recomputed view
- is this effect synchronizing with something external to React
- will this effect immediately call `setState` on every dependency change
- if the effect were removed, could the same result be expressed as render logic plus event handlers

## Practical Heuristic

If you can explain a value as "what the UI should look like for the current inputs," derive it.

If you can explain a value as "what the user chose even when inputs change," store it.

If you can explain code as "keep React in sync with something outside React," use an effect.
