import { defineConfig } from "oxlint";
import { base } from "../configs/base.ts";
import { react } from "../configs/react.ts";
import { reactTypescript } from "../configs/react-typescript.ts";
import { typescript } from "../configs/typescript.ts";

export default defineConfig({
  extends: [base, typescript, react, reactTypescript],
});
