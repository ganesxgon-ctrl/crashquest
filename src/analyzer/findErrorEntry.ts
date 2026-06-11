import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { normalizeErrorCode } from "./normalizeErrorCode.js";

export interface ErrorEntry {
  game: string;
  code: string;
  aliases: string[];
  category: string;
  summary: string;
  likelyCauses: string[];
  safeFixes: string[];
  riskyFixesToAvoid: string[];
  officialSearchQueries: string[];
  redditSearchQueries: string[];
  youtubeSearchQueries: string[];
  googleSearchQueries: string[];
}

const DATABASE_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../database"
);

export async function findErrorEntry(
  normalizedGame: string,
  normalizedCode: string
): Promise<ErrorEntry | undefined> {
  const filePath = path.join(DATABASE_ROOT, `${normalizedGame}.json`);
  let raw: string;

  try {
    raw = await readFile(filePath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }

    throw error;
  }

  const entries = JSON.parse(raw) as ErrorEntry[];
  const targetCode = normalizeErrorCode(normalizedCode);

  return entries.find((entry) => {
    const codes = [entry.code, ...entry.aliases].map(normalizeErrorCode);
    return codes.includes(targetCode);
  });
}
