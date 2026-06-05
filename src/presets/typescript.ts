import { defineConfig } from "oxlint";
import { base } from "../configs/base.ts";
import { typescript } from "../configs/typescript.ts";

export default defineConfig({
  // `options.typeAware` is only honored in the root config, not in nested
  // (extended) configs, so it must be set here rather than in `base`.
  options: {
    typeAware: true,
  },
  extends: [base, typescript],
});
