import { defineConfig } from "oxlint";
import { base } from "../configs/base.js";
import { node } from "../configs/node.js";
import { typescript } from "../configs/typescript.js";

export const nodeTypescriptPreset = defineConfig({
  extends: [base, node, typescript],
  rules: {
    // TypeScript transpiles ES syntax, so Node.js version checks are not needed
    // Note: verify "node/no-unsupported-features/es-syntax" rule availability in oxlint
    // "node/no-unsupported-features/es-syntax": "off",
  },
});
