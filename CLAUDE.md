# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


## graphify

This project has a graphify knowledge graph at .graphify/.

Rules:
- For codebase or architecture questions, when `.graphify/graph.json` exists, first run `graphify query "<question>"` (or `graphify path "<A>" "<B>"` / `graphify explain "<concept>"`); these return a scoped subgraph, usually much smaller than `GRAPH_REPORT.md` or raw grep output
- If .graphify/wiki/index.md exists, navigate it instead of reading raw files
- If .graphify/graph.json is missing but graphify-out/graph.json exists, run `graphify migrate-state --dry-run` first; if tracked legacy artifacts are reported, ask before using the recommended `git mv -f graphify-out .graphify` and commit message
- If .graphify/needs_update exists or .graphify/branch.json has stale=true, warn before relying on semantic results and run /graphify . --update when appropriate
- Before proposing or committing .graphify artifacts, run `graphify portable-check .graphify`; commit-safe graph artifacts must use repo-relative paths, and never commit .graphify/branch.json, .graphify/worktree.json, .graphify/needs_update, or .graphify/cache/. If a repo already tracks any of them, first add them to .gitignore, then propose `git rm --cached .graphify/branch.json .graphify/worktree.json .graphify/needs_update` and `git rm -r --cached .graphify/cache`; never mutate git state without asking
- Before deep graph traversal, prefer `graphify summary --graph .graphify/graph.json` for compact first-hop orientation
- For review impact on changed files, use `graphify review-delta --graph .graphify/graph.json` instead of generic traversal
- Read `.graphify/GRAPH_REPORT.md` only for broad architecture review or when `query` / `path` / `explain` do not surface enough context
- After modifying code files in this session, run `npx graphify hook-rebuild` to keep the graph current

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm run start   # run production build
```

There is no lint or test script configured yet — do not assume `npm run lint` or `npm test` exist.

## Project overview

Rihaish is a verified real-estate platform for Pakistan (property listings with approval status, utilities, plot records, AI-checked pricing). This repo is the Next.js frontend, currently implementing only the **auth flow** (signup, login, OTP verification, password reset). There is no backend integration, API layer, or state management yet — forms are UI-only.

Stack: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, with the React Compiler enabled (`reactCompiler: true` in [next.config.ts](next.config.ts)).

## Architecture

**Routing.** All routes live under the `(main)` route group in [src/app/(main)/](src/app/(main)/), which is layout-transparent (no route segment in the URL). Auth screens are further nested under `auth/` (login, signup, verify, forgot-password, reset-password, password-updated, welcome, code-sent), each a `page.tsx` that composes components from `src/components/auth/`.

**Auth layout & transition.** [src/app/(main)/auth/layout.tsx](src/app/(main)/auth/layout.tsx) wraps every auth page in [AuthRouteTransition](src/components/auth/AuthRouteTransition.tsx), which intercepts same-origin link clicks on mobile viewports (`max-width: 639px`) to play a slide cover/reveal transition (logo covers the screen, then reveals the new page) instead of an instant navigation. Desktop and programmatic redirects skip the animation. Don't reimplement page transitions elsewhere — extend this component if new transition behavior is needed.

**Shell components.** Two shell patterns wrap page content:
- [AuthCardShell](src/components/auth/AuthCardShell.tsx) — top bar + centered card, used for single/multi-step form screens (login, signup, verify, etc).
- [AuthSplitShell](src/components/auth/AuthSplitShell.tsx) — the 44/56 split-with-photograph layout (per design.md's "Split 44/56" pattern), used for screens like Welcome.

**Component library.** `src/components/auth/` is a flat, screen-specific component library (not a generic design-system package) — form components (`LoginForm`, `SignupForm`, `ForgotPasswordForm`, `ResetPasswordForm`, `VerifyForm`), field primitives (`PasswordField`, `PhoneField`, `OtpInputGroup`), and shared chrome (`Button`, `Card`, `Icon`, `Logo`, `StepIndicator`, `SegmentedToggle`, etc). `Icon.tsx` and `AuthCardShell.tsx` are the most-connected hub components — check their usages before changing their props. `useCountdown.ts` is the one custom hook, used by `ResendButton`/`VerifyForm` for OTP resend timers.

**Design system.** [design.md](design.md) is the authoritative visual spec ("Verified Ground") — color tokens, typography scale, spacing, component specs, motion timing, and a banned-styles list. Read it before building or restyling any UI: it fixes exact hex values, the single brand color (`#0E5C4A`), Tailwind-mappable radii/shadows, and locale formatting rules for Pakistan (phone `+92 3XX XXX XXXX`, currency in Crore/Lakh, area in Marla/Kanal). It also documents the Google Stitch prompting workflow used to generate initial screen mockups — not relevant to writing code, only to how designs originated.

**Fonts.** Inter (body/UI, via `next/font/google`) and Source Serif 4 SemiBold (display headlines only) are loaded once in [src/app/(main)/layout.tsx](src/app/(main)/layout.tsx) as CSS variables (`--font-inter`, `--font-source-serif`) and must not be re-imported per-page. The auth layout additionally loads Material Symbols Outlined via a manual `<link>` for icon glyphs used outside the custom `Icon` component.

**Path alias.** `@/*` maps to `src/*` (see [tsconfig.json](tsconfig.json)).
