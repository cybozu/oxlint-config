import { defineConfig } from "oxlint";
import { base } from "../configs/base.ts";
import { react } from "../configs/react.ts";

export default defineConfig({
  extends: [base, react],
});
