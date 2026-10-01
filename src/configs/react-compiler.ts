import type { OxlintConfig } from "oxlint";

// React Compiler lint rules (ported from eslint-plugin-react-hooks v6+).
// Oxlint ships them under the `react` plugin since v1.79.0.
//
// The rule set and severities follow the `recommended` preset of
// eslint-plugin-react-hooks. `config` and `gating` are not included because
// they only make sense when the compiler itself runs (Oxlint has no equivalent).
// `void-use-memo` is in `recommended-latest`, not `recommended`, so it is left off.
//
// This config is opt-in. Combine it with a react preset:
//
//   extends: [reactTypescript, reactCompiler]
export const reactCompiler: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react"],
      rules: {
        "react/error-boundaries": "error",
        "react/globals": "error",
        "react/immutability": "error",
        "react/preserve-manual-memoization": "error",
        "react/purity": "error",
        "react/refs": "error",
        "react/set-state-in-effect": "error",
        "react/set-state-in-render": "error",
        "react/static-components": "error",
        "react/use-memo": "error",
        "react/incompatible-library": "warn",
        "react/unsupported-syntax": "warn",
      },
    },
  ],
};
