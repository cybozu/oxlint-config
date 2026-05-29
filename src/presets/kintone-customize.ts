import { defineConfig } from "oxlint";
import { base } from "../configs/base.ts";
import { kintone } from "../configs/kintone.ts";

export default defineConfig({
  extends: [base, kintone],
});
