export function normalizeErrorCode(input: string): string {
  return input
    .trim()
    .toUpperCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
}
