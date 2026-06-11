# Getting Started

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
npm run build
```

## Run An Analysis

```bash
npm run analyze -- --game valorant --code "VAN 9003"
```

CrashQuest will:

1. Normalize the game name and error code.
2. Search the matching JSON file in `database/`.
3. Generate a Markdown report in `reports/`.

## Troubleshooting

If no entry is found, check `docs/supported-games.md` and the aliases in the matching database file. The MVP does not search the web.
