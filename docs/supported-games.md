# Supported Games And Error Sets

CrashQuest currently includes starter local database files for:

| Database file | Supported starter entries |
| --- | --- |
| `database/valorant.json` | Valorant VAN 9003, Valorant VAN 1067 |
| `database/league-of-legends.json` | League of Legends reconnect loop |
| `database/steam-common.json` | Steam game error 0xc000007b |
| `database/minecraft.json` | Minecraft Java exit code 1 |
| `database/windows-common.json` | Shared Windows Secure Boot and TPM checks |

## Game Name Aliases

The CLI currently normalizes common names such as:

- `val` to `valorant`
- `league of legends`, `league`, and `lol` to `league-of-legends`
- `steam` to `steam-common`
- `minecraft java` to `minecraft`
- `windows` to `windows-common`

More aliases can be added in `src/analyzer/normalizeGameName.ts`.
