import { defineConfig } from "oxlint";
import { base } from "../configs/base.js";
import { typescript } from "../configs/typescript.js";

export const typescriptPreset = defineConfig({
  extends: [base, typescript],
});
