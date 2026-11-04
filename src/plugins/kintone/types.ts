import type { RuleTester } from "oxlint/plugins-dev";

// oxlint does not export the rule type, so extract it from the RuleTester signature.
// It is exported so that declaration emit can refer to it by name: since oxlint 1.90.0,
// `oxlint/plugins-dev` ends with `export {}`, so its internal `CreateRule` / `CreateOnceRule`
// can no longer be referenced from emitted `.d.ts` files (TS4082).
export type Rule = Parameters<RuleTester["run"]>[1];

export type Plugin = {
  meta: { name: string };
  rules: Record<string, Rule>;
};
