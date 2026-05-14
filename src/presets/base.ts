import { defineConfig } from "oxlint";
import { base } from "../configs/base.js";

export const basePreset = defineConfig({
  extends: [base],
});
