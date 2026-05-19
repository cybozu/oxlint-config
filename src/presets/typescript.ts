import { defineConfig } from "oxlint";
import { base } from "../configs/base.ts";
import { typescript } from "../configs/typescript.ts";

export default defineConfig({
  extends: [base, typescript],
});
