import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { ErrorEntry } from "../analyzer/findErrorEntry.js";
import { renderSafetyRules } from "../safety/dangerousFixRules.js";

export interface ReportInput {
  entry: ErrorEntry;
  normalizedGame: string;
  normalizedCode: string;
  outputDirectory?: string;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function renderList(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

function renderNumberedList(items: string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

export function generateReportMarkdown(input: ReportInput): string {
  const { entry, normalizedGame, normalizedCode } = input;
  const generatedAt = new Date().toISOString();

  return `# CrashQuest Report: ${entry.game} ${entry.code}

Generated: ${generatedAt}

## Normalized Input

- Game: ${normalizedGame}
- Error code: ${normalizedCode}

## Summary

${entry.summary}

## Category

${entry.category}

## Likely Causes

${renderList(entry.likelyCauses)}

## Safe Fixes

${renderNumberedList(entry.safeFixes)}

## Risky Fixes To Avoid

${renderList(entry.riskyFixesToAvoid)}

## Safety Rules Applied

${renderSafetyRules()}

## Research Queries

### Official Sources

${renderList(entry.officialSearchQueries)}

### Reddit

${renderList(entry.redditSearchQueries)}

### YouTube

${renderList(entry.youtubeSearchQueries)}

### Google

${renderList(entry.googleSearchQueries)}

## Source Policy

This MVP does not perform live web search. The guidance above comes from the local community-maintained database and should be verified against official publisher, platform, and operating system documentation before applying high-risk changes.
`;
}

export async function writeReport(input: ReportInput): Promise<string> {
  const outputDirectory = input.outputDirectory ?? "reports";
  const filename = `${slugify(input.normalizedGame)}-${slugify(input.normalizedCode)}-report.md`;
  const outputPath = path.resolve(outputDirectory, filename);
  const markdown = generateReportMarkdown(input);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, markdown, "utf8");

  return outputPath;
}
