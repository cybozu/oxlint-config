import type { OxlintConfig } from "oxlint";

export const node: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
      plugins: ["node"],
      env: { es2026: true, node: true },
      rules: {
        "node/no-exports-assign": "error",
        "no-console": "off",
      },
      // NOTE: We want to disallow CommonJS globals (__dirname, __filename,
      // exports, module, require) by setting them to "off", but this currently
      // cannot be expressed in oxlint because `env.node: true` makes them
      // readonly and overrides any `globals` entry that tries to turn them off.
      // This needs to be fixed on the oxlint side.
    },
  ],
};
