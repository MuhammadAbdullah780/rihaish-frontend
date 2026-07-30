# Graph Report - .  (2026-07-30)

## Corpus Check
- Corpus is ~1,221 words - fits in a single context window. You may not need a graph.

## Summary
- 6 nodes · 5 edges · 3 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 2 · MODIFIES: 2 · ON_BRANCH: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 10 · Candidates: 18
- Excluded: 70 untracked · 10988 ignored · 0 sensitive · 2 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `1d6803b`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `nextConfig` - 1 edges
2. `config` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 1 - "Community 1"
Cohesion: 1.00
Nodes (1): nextConfig

### Community 2 - "Community 2"
Cohesion: 1.00
Nodes (1): config

### Community 0 - "Community 0"
Cohesion: 1.00
Nodes (2): 1d6803b Initial commit from Create Next App, master

## Knowledge Gaps
- **2 isolated node(s):** `nextConfig`, `config`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 1`** (1 nodes): `nextConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 2`** (1 nodes): `config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 0`** (2 nodes): `1d6803b Initial commit from Create Next App`, `master`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `nextConfig`, `config` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._