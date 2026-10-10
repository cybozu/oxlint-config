import { defineConfig } from "oxlint";
import { kintoneDev } from "../configs/kintone-dev.ts";

// Add-on preset: enables the custom rules for developing kintone.
// It does not include `base`, so extend it together with another preset:
//
//   import reactTypescript from "@cybozu/oxlint-config/presets/react-typescript";
//   import kintoneDev from "@cybozu/oxlint-config/presets/kintone-dev";
//   export default defineConfig({ extends: [reactTypescript, kintoneDev] });
export default defineConfig({
  extends: [kintoneDev],
});
