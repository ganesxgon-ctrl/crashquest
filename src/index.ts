#!/usr/bin/env node
import { findErrorEntry } from "./analyzer/findErrorEntry.js";
import { normalizeErrorCode } from "./analyzer/normalizeErrorCode.js";
import { normalizeGameName } from "./analyzer/normalizeGameName.js";
import { writeReport } from "./report/generateReport.js";

interface AnalyzeOptions {
  game?: string;
  code?: string;
}

function printHelp(): void {
  console.log(`CrashQuest

Usage:
  crashquest analyze --game <game> --code <error-code>

Example:
  crashquest analyze --game valorant --code "VAN 9003"
`);
}

function parseAnalyzeOptions(args: string[]): AnalyzeOptions {
  const options: AnalyzeOptions = {};

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    const next = args[index + 1];

    if (arg === "--game" || arg === "-g") {
      options.game = next;
      index += 1;
    } else if (arg === "--code" || arg === "-c") {
      options.code = next;
      index += 1;
    }
  }

  return options;
}

async function analyze(args: string[]): Promise<void> {
  const options = parseAnalyzeOptions(args);

  if (!options.game || !options.code) {
    console.error("Missing required options: --game and --code");
    printHelp();
    process.exitCode = 1;
    return;
  }

  const normalizedGame = normalizeGameName(options.game);
  const normalizedCode = normalizeErrorCode(options.code);
  const entry = await findErrorEntry(normalizedGame, normalizedCode);

  if (!entry) {
    console.error(`No local database entry found for ${normalizedGame} ${normalizedCode}.`);
    console.error("Try checking docs/supported-games.md or contribute a new database entry.");
    process.exitCode = 1;
    return;
  }

  const reportPath = await writeReport({
    entry,
    normalizedGame,
    normalizedCode
  });

  console.log(`CrashQuest analyzed ${entry.game} ${entry.code}`);
  console.log(`Report written to: ${reportPath}`);
}

async function main(): Promise<void> {
  const [command, ...args] = process.argv.slice(2);

  if (!command || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  if (command !== "analyze") {
    console.error(`Unknown command: ${command}`);
    printHelp();
    process.exitCode = 1;
    return;
  }

  await analyze(args);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
