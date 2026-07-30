# Community Labeling

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the community listing below
and write 2-5 word plain-language names for each.

## Language

Write every name in English (en). Do not switch languages.

## Communities

Community 1: nextConfig, next.config.ts
Community 2: config, postcss.config.mjs
Community 0: 1d6803b Initial commit from Create Next App, master

## Instructions

Write a single JSON object mapping each community id (as a string) to its
2-5 word name to: C:\Users\hp\Desktop\fyp-frontend\frontend\.graphify\label-instructions\communities.json

Example:
```json
{
  "1": "Authentication Flow",
  "2": "Authentication Flow",
  "0": "Authentication Flow"
}
```

Then re-run `graphify update` (or `graphify label`) to ingest the names.
