import { defineConfig } from "oxlint";
import { base } from "../configs/base.js";
import { kintone } from "../configs/kintone.js";

export const kintoneCustomizePreset = defineConfig({
  extends: [base, kintone],
});
