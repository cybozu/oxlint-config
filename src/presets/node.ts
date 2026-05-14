import { defineConfig } from "oxlint";
import { base } from "../configs/base.js";
import { node } from "../configs/node.js";

export const nodePreset = defineConfig({
  extends: [base, node],
});
