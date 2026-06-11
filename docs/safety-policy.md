# Safety Policy

CrashQuest should help users troubleshoot without pushing them toward unnecessary risk.

## Required Safety Rules

- Do not recommend downloading random DLL files, anti-cheat files, launcher files, Java builds, or executables from unofficial sites.
- Do not recommend disabling antivirus or firewall protection permanently.
- Do not recommend unknown registry files.
- Do not recommend Windows reinstall as an early step.
- Prefer reversible, low-risk fixes first.
- Do not collect account credentials, tokens, or private user data.
- Prefer official support pages, official launcher repair tools, Microsoft downloads, Steam support, and hardware vendor documentation before community reports.

## Fix Ordering

Safe fixes should be ordered from lowest risk to highest effort:

1. Restart, service status checks, and launcher repair.
2. Official updates and built-in verification tools.
3. Reversible settings changes.
4. Vendor-documented firmware or driver changes.
5. Reinstalling a game client only after repair and verification steps.

## Source Safety

Official sources should come first, especially for Microsoft Visual C++ Redistributables, DirectX runtimes, anti-cheat repair tools, GPU drivers, firmware settings, and launcher installers. Community sources can be useful for pattern matching, but they should not be treated as guaranteed fixes.

CrashQuest should never suggest permanent security disabling. If firewall or antivirus software may be involved, recommend reviewing quarantine history, adding allow rules for official executables, or testing temporary changes only when the user understands the tradeoff.

## Private Data

CrashQuest database entries must not ask users to provide passwords, session tokens, authentication cookies, recovery codes, or private account data. Logs should be reviewed for private paths, usernames, tokens, and device identifiers before sharing.
