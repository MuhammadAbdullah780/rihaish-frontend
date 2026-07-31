# Graph Report - .  (2026-07-31)

## Corpus Check
- 51 files · ~67,569 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 125 nodes · 335 edges · 9 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: MODIFIES: 120 · contains: 71 · imports: 64 · imports_from: 61 · ON_BRANCH: 11 · PARENT_OF: 8


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 51 · Candidates: 112
- Excluded: 26 untracked · 11872 ignored · 4 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `4924178`
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

### Community 0 - "Auth Shell & Branding UI"
Cohesion: 0.17
Nodes (9): AuthSplitShell(), AuthSplitShellProps, Icon(), IconProps, Logo(), LogoProps, sizes, ChecklistItem (+1 more)

### Community 1 - "Login/Signup Form Fields"
Cohesion: 0.20
Nodes (12): Button(), ButtonProps, ButtonVariant, buttonVariantClasses, LinkButtonProps, OtpInputGroup(), OtpInputGroupProps, ResendButton() (+4 more)

### Community 2 - "Auth Card Navigation UI"
Cohesion: 0.20
Nodes (7): BackLink(), BackLinkProps, Card(), CardProps, IconTile(), IconTileProps, VerifyForm()

### Community 3 - "Auth Card Shell & Steps"
Cohesion: 0.17
Nodes (9): AuthCardShell(), PhoneField(), PhoneFieldProps, Role, roles, RoleSelector(), SignupForm(), StepIndicator() (+1 more)

### Community 4 - "Buttons & Countdown Hook"
Cohesion: 0.19
Nodes (9): AuthRouteTransition(), Phase, main, 1d6803b Initial commit from Create Next App, 40686c8 change in gitignore, 4924178 graphify complete setup, 5e449a6 graphify check, 6458873 feat: init next js project and auth screens (+1 more)

### Community 5 - "Auth Notices & Redirects"
Cohesion: 0.22
Nodes (9): Divider(), LoginForm(), SegmentedToggle(), SegmentedToggleOption, SegmentedToggleProps, AppleIcon(), GoogleIcon(), SocialButton() (+1 more)

### Community 6 - "Project Config & Home Page"
Cohesion: 0.22
Nodes (6): InfoNote(), InfoNoteProps, LinkButton(), RedirectNotice(), SuccessIcon(), SuccessIconProps

### Community 7 - "Auth Layout Transitions"
Cohesion: 0.21
Nodes (9): main, 1d6803b Initial commit from Create Next App, 40686c8 change in gitignore, 5e449a6 graphify check, 6458873 feat: init next js project and auth screens, inter, metadata, sourceSerif4 (+1 more)

### Community 8 - "Root Layout & Fonts"
Cohesion: 0.50
Nodes (3): AuthCardShellProps, AuthTopBar(), AuthTopBarProps

## Knowledge Gaps
- **29 isolated node(s):** `nextConfig`, `config`, `stats`, `inter`, `sourceSerif4` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Icon()` connect `Auth Shell & Branding UI` to `Auth Card Navigation UI`, `Project Config & Home Page`, `Auth Card Shell & Steps`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Why does `AuthCardShell()` connect `Auth Card Shell & Steps` to `Root Layout & Fonts`, `Project Config & Home Page`, `Auth Card Navigation UI`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `Card()` connect `Auth Card Navigation UI` to `Project Config & Home Page`, `Auth Card Shell & Steps`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `nextConfig`, `config`, `stats` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._