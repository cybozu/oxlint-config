import type { OxlintConfig } from "oxlint";

// Rules for developing kintone, provided by the `kintone` JS plugin.
//
// The plugin specifier is resolved from the project that uses this config,
// so `@cybozu/oxlint-config` must be installed in that project.
export const kintoneDev: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
      jsPlugins: ["@cybozu/oxlint-config/plugins/kintone"],
      rules: {
        "kintone/require-identifier-prefix": "error",
      },
    },
  ],
};
