import type { OxlintConfig } from "oxlint";

export const reactTypescript: OxlintConfig = {
  plugins: ["react"],
  rules: {
    // Restrict JSX to .tsx files only (overrides react config's default)
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    // TODO: "react/prop-types" not supported by oxlint
    // (TypeScript handles prop validation; this rule is not needed)
  },
};
