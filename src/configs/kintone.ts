import type { OxlintConfig } from "oxlint";
import { kintoneGlobals } from "../globals/kintone.ts";

export const kintone: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
      env: { jquery: true },
      globals: kintoneGlobals,
    },
  ],
};
