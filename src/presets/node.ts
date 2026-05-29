import { defineConfig } from "oxlint";
import { base } from "../configs/base.ts";
import { node } from "../configs/node.ts";

export default defineConfig({
  extends: [base, node],
});
