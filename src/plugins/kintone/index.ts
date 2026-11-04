import { requireIdentifierPrefix } from "./rules/require-identifier-prefix.ts";
import type { Plugin } from "./types.ts";

// JS plugin for oxlint that provides custom rules for developing kintone.
// Rules are written with the ESLint-compatible API.
const plugin: Plugin = {
  meta: { name: "kintone" },
  rules: {
    "require-identifier-prefix": requireIdentifierPrefix,
  },
};

export default plugin;
