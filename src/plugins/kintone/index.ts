import { requireIdentifierPrefix } from "./rules/require-identifier-prefix.ts";

// JS plugin for oxlint that provides custom rules for developing kintone.
// Rules are written with the ESLint-compatible API.
export default {
  meta: { name: "kintone" },
  rules: {
    "require-identifier-prefix": requireIdentifierPrefix,
  },
};
