# Node Description Batch 1 of 1

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:local/frontend@e5ad458c@1d6803b3ac38411c4d60078635d4b9ebeccdc1cb": "1d6803b Initial commit from Create Next App" | kind=Commit | source=git | neighbors=[master, next.config.ts, postcss.config.mjs]
- "next_config": "next.config.ts" | kind=code-symbol | source=next.config.ts:L1 | neighbors=[1d6803b Initial commit from Create Next…, nextConfig]
- "postcss_config": "postcss.config.mjs" | kind=code-symbol | source=postcss.config.mjs:L1 | neighbors=[1d6803b Initial commit from Create Next…, config]
- "branch:repo:local/frontend@e5ad458c#master": "master" | kind=Branch | source=git | neighbors=[1d6803b Initial commit from Create Next…]
- "next_config_nextconfig": "nextConfig" | kind=code-symbol | source=next.config.ts:L3 | neighbors=[next.config.ts]
- "postcss_config_config": "config" | kind=code-symbol | source=postcss.config.mjs:L1 | neighbors=[postcss.config.mjs]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\hp\Desktop\fyp-frontend\frontend\.graphify\description-instructions\batch-000.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
