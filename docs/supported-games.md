# Supported Games And Error Sets

CrashQuest currently uses local JSON database entries only. No live web search is performed in the MVP.

| Game or category | Database file | Local database entries |
| --- | --- | --- |
| Valorant / Riot Vanguard | `database/valorant.json` | `VAN 9003`, `VAN 1067`, `VAN 84`, `VAN 81`, `VAL 5`, `VAL 43`, `VAL 51`, `VAL 59`, `VAL 62`, `VAL 1`, `VAL 19` |
| League of Legends / Riot Client | `database/league-of-legends.json` | `RECONNECT LOOP`, `BLACK SCREEN AFTER CHAMPION SELECT`, `FAILED TO CONNECT`, `UNEXPECTED ERROR WITH LOGIN SESSION`, `RIOT CLIENT NOT OPENING`, `CLIENT STUCK ON LOADING`, `PATCHER STUCK OR UPDATE FAILED`, `DIRECTX OR GRAPHICS INITIALIZATION ERROR` |
| Steam common errors | `database/steam-common.json` | `0XC000007B`, `MISSING EXECUTABLE`, `APP ALREADY RUNNING`, `DISK WRITE ERROR`, `CONTENT FILE LOCKED`, `STEAM CLOUD SYNC ERROR`, `FAILED TO START GAME UNKNOWN ERROR`, `INVALID PLATFORM`, `CONNECTION TIMEOUT`, `CORRUPT UPDATE FILES` |
| Minecraft Java Edition | `database/minecraft.json` | `EXIT CODE 1`, `EXIT CODE 0`, `GLFW ERROR 65542`, `JAVA RUNTIME ENVIRONMENT NOT FOUND`, `UNABLE TO ACCESS JARFILE`, `AUTHENTICATION SERVERS ARE DOWN`, `FAILED TO VERIFY USERNAME`, `OUTDATED CLIENT`, `INCOMPATIBLE MOD SET`, `FAILED TO LOAD MOD CORRECTLY` |
| Windows common game launch errors | `database/windows-common.json` | `SECURE BOOT TPM CHECK`, `0XC000007B`, `0XC0000142`, `0XC0000005`, `MSVCP140.DLL MISSING`, `VCRUNTIME140.DLL MISSING`, `D3DX9_43.DLL MISSING`, `DIRECTX INITIALIZATION FAILED`, `GPU DRIVER CRASH`, `EASY ANTI-CHEAT NOT INSTALLED`, `BATTLEYE SERVICE FAILED TO START`, `FIREWALL OR ANTIVIRUS BLOCKING CONNECTION` |

## Game Name Aliases

The CLI currently normalizes common names such as:

- `val` to `valorant`
- `league of legends`, `league`, and `lol` to `league-of-legends`
- `steam` to `steam-common`
- `minecraft java` to `minecraft`
- `windows` to `windows-common`

More aliases can be added in `src/analyzer/normalizeGameName.ts`.

## Adding Coverage

New entries should use cautious wording when official causes are not exact. Prefer phrases like `commonly associated with`, `may be related to`, and `often reported with`. Do not claim that a fix is guaranteed.
