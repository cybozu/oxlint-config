import type { OxlintConfig } from "oxlint";

// Tightens `jsx-filename-extension` to require JSX only in .tsx files.
export const reactTypescript: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["react"],
      rules: {
        // Restrict JSX to .tsx files only (overrides react config's default)
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      },
    },
  ],
};
