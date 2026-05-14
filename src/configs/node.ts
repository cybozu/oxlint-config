import type { OxlintConfig } from "oxlint";

export const node: OxlintConfig = {
  plugins: ["node"],
  env: {
    node: true,
  },
  rules: {
    "eslint/no-console": "off",
  },
};
