import { defineConfig } from "oxlint";
import { base } from "../configs/base.ts";
import { react, reactTypescript } from "../configs/react.ts";
import { typescript } from "../configs/typescript.ts";

export default defineConfig({
  extends: [base, typescript, react, reactTypescript],
});
