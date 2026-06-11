const GAME_ALIASES: Record<string, string> = {
  val: "valorant",
  valorant: "valorant",
  "riot valorant": "valorant",
  lol: "league-of-legends",
  league: "league-of-legends",
  "league of legends": "league-of-legends",
  leagueoflegends: "league-of-legends",
  steam: "steam-common",
  "steam common": "steam-common",
  minecraft: "minecraft",
  "minecraft java": "minecraft",
  "minecraft java edition": "minecraft",
  windows: "windows-common",
  "windows common": "windows-common"
};

export function normalizeGameName(input: string): string {
  const cleaned = input
    .trim()
    .toLowerCase()
    .replace(/[_]+/g, " ")
    .replace(/\s+/g, " ");

  return GAME_ALIASES[cleaned] ?? cleaned.replace(/\s+/g, "-");
}
