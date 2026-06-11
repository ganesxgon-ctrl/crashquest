export const dangerousFixRules = [
  "Do not recommend downloading random DLL files.",
  "Do not recommend disabling antivirus permanently.",
  "Do not recommend unknown registry files.",
  "Do not recommend Windows reinstall as an early step.",
  "Prefer reversible, low-risk fixes first.",
  "Do not collect account credentials, tokens, or private user data."
];

export function renderSafetyRules(): string {
  return dangerousFixRules.map((rule) => `- ${rule}`).join("\n");
}
