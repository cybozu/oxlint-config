import type { OxlintConfig } from "oxlint";

// Adjusts the react config for TypeScript projects.
export const reactTypescript: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["react"],
      rules: {
        // Restrict JSX to .tsx files only (overrides react config's default)
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
        // TypeScript already checks the type of `style`. This rule also reports
        // components whose `style` prop takes a string (e.g. a variant name).
        "react/style-prop-object": "off",
      },
    },
  ],
};
