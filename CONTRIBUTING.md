# Contributing To CrashQuest

Thanks for helping improve CrashQuest. The project is meant to make game crash troubleshooting safer, clearer, and easier to verify.

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

## Test The Sample Command

```bash
npm run analyze -- --game valorant --code "VAN 9003"
```

The command should generate a Markdown report in `reports/`.

## Add A New Game Error Code Entry

1. Choose or create a JSON database file in `database/`.
2. Follow the existing entry shape:
   - `game`
   - `code`
   - `aliases`
   - `category`
   - `summary`
   - `likelyCauses`
   - `safeFixes`
   - `riskyFixesToAvoid`
   - `officialSearchQueries`
   - `redditSearchQueries`
   - `youtubeSearchQueries`
   - `googleSearchQueries`
3. Add common aliases so the CLI can find the entry after normalization.
4. Update `docs/supported-games.md` if you add a new database or major entry.
5. Run the build and sample analyze command before opening a pull request.

## Safe Fixes And Risky Fixes

Safe fixes should be reversible, low-risk, and ordered from simplest to most involved. Prefer restart steps, official repair tools, status checks, verified updates, and vendor-documented settings.

Risky fixes should be clearly marked in `riskyFixesToAvoid`. CrashQuest should not recommend random DLL downloads, permanent antivirus disabling, unknown registry files, early Windows reinstalls, or anything that asks for account credentials, tokens, or private user data.

## Source Reliability Policy

Prefer sources in this order:

1. Official support pages first.
2. Publisher support forums second.
3. Microsoft/Steam support third.
4. Reddit repeated success reports fourth.
5. YouTube tutorials/comments last.

The MVP does not perform live web search. Search queries are included to help future manual or automated research.
