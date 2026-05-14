import { defineConfig } from "oxlint";
import { base } from "../configs/base.js";
import { react } from "../configs/react.js";

export const reactPreset = defineConfig({
  extends: [base, react],
});
