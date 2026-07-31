# Graph Report - .  (2026-07-31)

## Corpus Check
- 78 files · ~83,883 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 193 nodes · 467 edges · 11 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: MODIFIES: 139 · contains: 120 · imports: 99 · imports_from: 88 · ON_BRANCH: 12 · PARENT_OF: 9


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 78 · Candidates: 143
- Excluded: 0 untracked · 12053 ignored · 4 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `5015039`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `Icon()` - 10 edges
2. `AuthCardShell()` - 7 edges
3. `Card()` - 7 edges
4. `Property` - 5 edges
5. `Button()` - 5 edges
6. `Logo()` - 5 edges
7. `Chip()` - 4 edges
8. `PropertyCard()` - 4 edges
9. `properties` - 4 edges
10. `IconTile()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `4924178 graphify complete setup` --PARENT_OF--> `5015039 feat: buyer pages`  [EXTRACTED]
  git → git  _Bridges community 1 → community 6_

## Communities

### Community 0 - "Auth Shell & Branding UI"
Cohesion: 0.09
Nodes (24): AuthCardShell(), AuthCardShellProps, AuthTopBar(), AuthTopBarProps, BackLink(), BackLinkProps, Card(), CardProps (+16 more)

### Community 1 - "Login/Signup Form Fields"
Cohesion: 0.09
Nodes (23): Button(), ButtonProps, ButtonVariant, buttonVariantClasses, InfoNote(), InfoNoteProps, LinkButton(), LinkButtonProps (+15 more)

### Community 2 - "Auth Card Navigation UI"
Cohesion: 0.14
Nodes (14): AuthRouteTransition(), Phase, AuthSplitShell(), AuthSplitShellProps, Icon(), IconProps, Logo(), LogoProps (+6 more)

### Community 3 - "Auth Card Shell & Steps"
Cohesion: 0.15
Nodes (10): getSocietyById(), similarListings, PropertyDetails(), SocietyDetails(), SocietyDetailsProps, TABS, StatTile(), StatTileProps (+2 more)

### Community 4 - "Buttons & Countdown Hook"
Cohesion: 0.22
Nodes (9): Divider(), LoginForm(), SegmentedToggle(), SegmentedToggleOption, SegmentedToggleProps, AppleIcon(), GoogleIcon(), SocialButton() (+1 more)

### Community 5 - "Auth Notices & Redirects"
Cohesion: 0.24
Nodes (9): Chip(), ChipProps, ChipTone, toneClasses, PropertyCard(), PropertyCardProps, PropertyDetailsProps, TABS (+1 more)

### Community 6 - "Project Config & Home Page"
Cohesion: 0.27
Nodes (5): BuyerFooter(), BuyerTopBar(), currentUser, 5015039 feat: buyer pages, settingsRows

### Community 7 - "Auth Layout Transitions"
Cohesion: 0.20
Nodes (6): ComparePropertiesTable(), getPropertyById(), properties, trendingSocieties, categories, ComparePageProps

### Community 8 - "Root Layout & Fonts"
Cohesion: 0.24
Nodes (6): ComparePropertiesTableProps, CompareRow, rows, favouritePropertyIds, PageHeader(), PageHeaderProps

### Community 9 - "Community 9"
Cohesion: 0.33
Nodes (6): notifications, BuyerUser, NotificationItem, PropertyType, Society, groupOrder

### Community 10 - "Community 10"
Cohesion: 0.40
Nodes (3): inter, metadata, sourceSerif4

## Knowledge Gaps
- **49 isolated node(s):** `nextConfig`, `ComparePageProps`, `groupOrder`, `categories`, `settingsRows` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Icon()` connect `Auth Card Navigation UI` to `Auth Shell & Branding UI`, `Login/Signup Form Fields`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `Property` connect `Auth Notices & Redirects` to `Root Layout & Fonts`, `Community 9`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Why does `AuthCardShell()` connect `Auth Shell & Branding UI` to `Login/Signup Form Fields`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `nextConfig`, `ComparePageProps`, `groupOrder` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Auth Shell & Branding UI` be split into smaller, more focused modules?**
  _Cohesion score 0.09390243902439024 - nodes in this community are weakly interconnected._
- **Should `Login/Signup Form Fields` be split into smaller, more focused modules?**
  _Cohesion score 0.09230769230769231 - nodes in this community are weakly interconnected._
- **Should `Auth Card Navigation UI` be split into smaller, more focused modules?**
  _Cohesion score 0.13538461538461538 - nodes in this community are weakly interconnected._