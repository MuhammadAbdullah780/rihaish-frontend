# Graph Report - .  (2026-07-30)

## Corpus Check
- 54 files · ~67,892 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 114 nodes · 239 edges · 8 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 71 · imports: 64 · imports_from: 61 · MODIFIES: 40 · ON_BRANCH: 2 · PARENT_OF: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 54 · Candidates: 77
- Excluded: 1 untracked · 11032 ignored · 4 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `6458873`
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

### Community 0 - "Community 0"
Cohesion: 0.17
Nodes (10): AuthCardShell(), AuthCardShellProps, AuthTopBar(), AuthTopBarProps, BackLink(), BackLinkProps, Card(), CardProps (+2 more)

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (11): AuthSplitShell(), AuthSplitShellProps, Icon(), IconProps, InfoNote(), InfoNoteProps, Logo(), LogoProps (+3 more)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (10): OtpInputGroup(), OtpInputGroupProps, ResendButton(), useCountdown(), VerifyForm(), master, 1d6803b Initial commit from Create Next App, 6458873 feat: init next js project and auth screens (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.16
Nodes (12): Button(), Divider(), LoginForm(), PhoneField(), PhoneFieldProps, SegmentedToggle(), SegmentedToggleOption, SegmentedToggleProps (+4 more)

### Community 4 - "Community 4"
Cohesion: 0.21
Nodes (8): ButtonProps, ButtonVariant, buttonVariantClasses, LinkButton(), LinkButtonProps, RedirectNotice(), SuccessIcon(), SuccessIconProps

### Community 5 - "Community 5"
Cohesion: 0.24
Nodes (6): Role, roles, RoleSelector(), SignupForm(), StepIndicator(), StepIndicatorProps

### Community 6 - "Community 6"
Cohesion: 0.50
Nodes (2): AuthRouteTransition(), Phase

### Community 7 - "Community 7"
Cohesion: 0.40
Nodes (3): inter, metadata, sourceSerif4

## Knowledge Gaps
- **29 isolated node(s):** `stats`, `inter`, `sourceSerif4`, `metadata`, `AuthCardShellProps` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 6`** (2 nodes): `AuthRouteTransition()`, `Phase`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Icon()` connect `Community 1` to `Community 0`, `Community 5`, `Community 4`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `AuthCardShell()` connect `Community 0` to `Community 4`, `Community 5`, `Community 2`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `Card()` connect `Community 0` to `Community 4`, `Community 5`, `Community 2`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `stats`, `inter`, `sourceSerif4` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._