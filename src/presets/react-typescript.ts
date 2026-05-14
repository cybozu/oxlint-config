import { defineConfig } from "oxlint";
import { base } from "../configs/base.js";
import { typescript } from "../configs/typescript.js";
import { react } from "../configs/react.js";
import { reactTypescript } from "../configs/react-typescript.js";

export const reactTypescriptPreset = defineConfig({
  extends: [base, typescript, react, reactTypescript],
});
