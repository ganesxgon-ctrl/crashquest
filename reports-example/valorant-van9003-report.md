# CrashQuest Report: Valorant VAN 9003

Generated: 2026-06-11T00:00:00.000Z

## Normalized Input

- Game: valorant
- Error code: VAN 9003

## Summary

VAN 9003 is commonly associated with Riot Vanguard requiring Windows security features such as Secure Boot and TPM 2.0 to be enabled and correctly detected.

## Category

Anti-cheat platform requirements

## Likely Causes

- Secure Boot is disabled in UEFI firmware.
- TPM 2.0, Intel PTT, or AMD fTPM is disabled.
- Windows is installed or booting in legacy BIOS mode instead of UEFI mode.
- Vanguard or Windows is reading stale security-state information after firmware changes.

## Safe Fixes

1. Restart the PC and launch Valorant again before changing system settings.
2. Check Windows Security or System Information to confirm Secure Boot State and TPM status.
3. Install pending Windows updates and restart.
4. Confirm Riot Vanguard is installed, then restart so the Vanguard service starts cleanly.
5. If you are comfortable using firmware settings, enable TPM 2.0 and Secure Boot using your motherboard or laptop vendor's official documentation.
6. After firmware changes, boot back into Windows, restart once more, and try Valorant again.

## Risky Fixes To Avoid

- Do not download replacement Vanguard files from unofficial mirrors.
- Do not install random registry files claiming to bypass VAN 9003.
- Do not disable antivirus permanently.
- Do not reinstall Windows before checking Secure Boot, TPM, Windows updates, and Vanguard restart steps.

## Safety Rules Applied

- Do not recommend downloading random DLL files.
- Do not recommend disabling antivirus permanently.
- Do not recommend unknown registry files.
- Do not recommend Windows reinstall as an early step.
- Prefer reversible, low-risk fixes first.
- Do not collect account credentials, tokens, or private user data.

## Research Queries

### Official Sources

- Riot support VAN 9003 Secure Boot TPM
- Riot Vanguard Secure Boot TPM requirements
- Microsoft check Secure Boot state Windows 11
- Microsoft enable TPM 2.0 Windows

### Reddit

- site:reddit.com/r/VALORANT VAN 9003 Secure Boot TPM
- site:reddit.com/r/ValorantTechSupport VAN9003 fix

### YouTube

- Valorant VAN 9003 Secure Boot TPM official motherboard settings
- How to check Secure Boot TPM Windows Valorant VAN 9003

### Google

- Valorant VAN 9003 safe fix Secure Boot TPM
- VAN9003 Windows 11 Vanguard Secure Boot TPM

## Source Policy

This MVP does not perform live web search. The guidance above comes from the local community-maintained database and should be verified against official publisher, platform, and operating system documentation before applying high-risk changes.
