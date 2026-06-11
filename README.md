# CrashQuest

CrashQuest is an open-source troubleshooting assistant for online game crash errors and error codes.

The MVP is a TypeScript CLI that:

- Normalizes game names and error codes.
- Searches a local JSON database.
- Generates Markdown troubleshooting reports.
- Lists likely causes.
- Recommends safe fixes first.
- Warns about risky fixes to avoid.
- Generates targeted research queries.

CrashQuest does not guarantee that any fix will solve a crash. It prioritizes safe, reversible troubleshooting and clearly separates risky actions to avoid.

## Why CrashQuest Exists

Game crash fixes are often scattered across support pages, forum posts, videos, and risky copy-paste advice. CrashQuest aims to make troubleshooting safer and more repeatable by:

- Preferring reversible, low-risk fixes first.
- Keeping risky actions clearly separated.
- Generating research queries instead of pretending every answer is final.
- Building a local database that contributors can review and improve.

CrashQuest does not perform live web search in the MVP.

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

## CLI Usage

```bash
npm run analyze -- --game valorant --code "VAN 9003"
```

After building, the CLI can also be invoked from the compiled entrypoint:

```bash
node dist/index.js analyze --game valorant --code "VAN 9003"
```

Example aliases:

```bash
npm run analyze -- --game val --code VAN9003
npm run analyze -- --game valorant --code "VAN 1067"
npm run analyze -- --game "league of legends" --code "reconnect loop"
npm run analyze -- --game "league of legends" --code "failed to connect"
npm run analyze -- --game steam --code "0xc000007b"
npm run analyze -- --game steam --code "disk write error"
npm run analyze -- --game "minecraft java" --code "exit code 1"
npm run analyze -- --game minecraft --code "GLFW Error 65542"
npm run analyze -- --game windows --code "0xc000007b"
```

## Example Report

CrashQuest writes reports to `reports/`. A sample output is available at `reports-example/valorant-van9003-report.md`.

Example generated output path:

```text
reports/valorant-van-9003-report.md
```

Short excerpt:

```md
# CrashQuest Report: Valorant VAN 9003

## Summary

VAN 9003 is commonly associated with Riot Vanguard requiring Windows security features such as Secure Boot and TPM 2.0 to be enabled and correctly detected.
```

## Supported Games And Databases

The MVP includes expanded local database coverage for:

- Valorant and Riot Vanguard `VAN` / `VAL` errors.
- League of Legends and Riot Client launch, login, patching, graphics, and connection categories.
- Steam common launch, update, cloud sync, disk, and platform errors.
- Minecraft Java launch, Java runtime, authentication, version, graphics, and mod-loading errors.
- Windows common game launch errors, including Visual C++, DirectX, anti-cheat, GPU, firewall, and antivirus categories.

Current database files:

- `database/valorant.json`
- `database/league-of-legends.json`
- `database/steam-common.json`
- `database/minecraft.json`
- `database/windows-common.json`

See `docs/supported-games.md` for the current database list.

## Manual Verification

```bash
npm install
npm run build
npm run analyze -- --game valorant --code "VAN 1067"
npm run analyze -- --game steam --code "disk write error"
npm run analyze -- --game minecraft --code "Exit Code 1"
npm run analyze -- --game windows --code "0xc000007b"
npm run analyze -- --game "league of legends" --code "reconnect loop"
```

## Source Reliability Policy

CrashQuest should prefer sources in this order:

1. Official publisher, platform, operating system, or hardware vendor documentation.
2. Official service status pages and launcher repair tools.
3. Reputable community threads with multiple confirmations and clear rollback steps.
4. Videos only when they demonstrate official settings or reversible changes.

CrashQuest should not recommend random DLL downloads, unknown registry files, permanent antivirus disabling, early Windows reinstalls, credential collection, or irreversible changes without strong official support.

See `docs/source-policy.md` and `docs/safety-policy.md`.

## Contributing

Contributions are welcome. Good database entries should:

- Use the existing JSON schema.
- Put safe fixes in recommended order.
- Include risky fixes to avoid.
- Include official search queries where possible.
- Avoid collecting account credentials, tokens, private logs, or private user data.

For a new game, add a JSON file in `database/` and update `docs/supported-games.md`.

See `CONTRIBUTING.md` for setup, database entry guidance, and pull request expectations.

## Roadmap

- Validate database entries with a JSON schema.
- Add tests for normalization and report generation.
- Add more games and launcher-level errors.
- Add optional live research mode after safety and source policies are mature.
- Add confidence levels and source citations per fix.
- Add screenshot OCR for error windows.
- Add official support page linking and source-ranked web research.
- Add desktop app and GitHub issue triage workflows.

See `docs/roadmap.md`.

## License

MIT
