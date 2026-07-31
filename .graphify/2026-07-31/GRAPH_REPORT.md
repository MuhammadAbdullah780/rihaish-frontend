# Graph Report - .  (2026-07-30)

## Corpus Check
- 53 files · ~68,424 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 119 nodes · 286 edges · 9 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: MODIFIES: 80 · contains: 71 · imports: 64 · imports_from: 61 · ON_BRANCH: 6 · PARENT_OF: 4


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 53 · Candidates: 117
- Excluded: 7 untracked · 11138 ignored · 4 sensitive · 1 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `40686c8`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `Icon()` - 10 edges
2. `AuthCardShell()` - 7 edges
3. `Card()` - 7 edges
4. `Button()` - 5 edges
5. `Logo()` - 5 edges
6. `IconTile()` - 4 edges
7. `LinkButton()` - 4 edges
8. `useCountdown()` - 4 edges
9. `AuthSplitShell()` - 3 edges
10. `BackLink()` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 6 - "Project Config & Home Page"
Cohesion: 0.24
Nodes (7): nextConfig, config, 1d6803b Initial commit from Create Next App, 40686c8 change in gitignore, 5e449a6 graphify check, 6458873 feat: init next js project and auth screens, main

### Community 5 - "Auth Notices & Redirects"
Cohesion: 0.20
Nodes (7): InfoNoteProps, InfoNote(), LinkButton(), RedirectNotice(), ResendButton(), SuccessIconProps, SuccessIcon()

### Community 2 - "Auth Card Navigation UI"
Cohesion: 0.20
Nodes (7): BackLinkProps, BackLink(), CardProps, Card(), IconTileProps, IconTile(), VerifyForm()

### Community 7 - "Auth Layout Transitions"
Cohesion: 0.36
Nodes (5): Phase, AuthRouteTransition(), 1d6803b Initial commit from Create Next App, 6458873 feat: init next js project and auth screens, master

### Community 0 - "Auth Shell & Branding UI"
Cohesion: 0.17
Nodes (9): stats, AuthSplitShellProps, AuthSplitShell(), IconProps, Icon(), LogoProps, sizes, Logo() (+1 more)

### Community 3 - "Auth Card Shell & Steps"
Cohesion: 0.17
Nodes (9): AuthCardShellProps, AuthCardShell(), AuthTopBarProps, AuthTopBar(), Role, roles, RoleSelector(), StepIndicatorProps (+1 more)

### Community 8 - "Root Layout & Fonts"
Cohesion: 0.40
Nodes (3): inter, sourceSerif4, metadata

### Community 4 - "Buttons & Countdown Hook"
Cohesion: 0.23
Nodes (8): ButtonVariant, ButtonProps, buttonVariantClasses, Button(), LinkButtonProps, OtpInputGroupProps, OtpInputGroup(), useCountdown()

### Community 1 - "Login/Signup Form Fields"
Cohesion: 0.16
Nodes (12): Divider(), LoginForm(), PhoneFieldProps, PhoneField(), SegmentedToggleOption, SegmentedToggleProps, SegmentedToggle(), SignupForm() (+4 more)

## Knowledge Gaps
- **29 isolated node(s):** `nextConfig`, `config`, `stats`, `inter`, `sourceSerif4` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Icon()` connect `Auth Shell & Branding UI` to `Auth Card Navigation UI`, `Auth Notices & Redirects`, `Auth Card Shell & Steps`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `AuthCardShell()` connect `Auth Card Shell & Steps` to `Auth Notices & Redirects`, `Auth Card Navigation UI`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `Card()` connect `Auth Card Navigation UI` to `Auth Notices & Redirects`, `Auth Card Shell & Steps`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **What connects `nextConfig`, `config`, `stats` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._