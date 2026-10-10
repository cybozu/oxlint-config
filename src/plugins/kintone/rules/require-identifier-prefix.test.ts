import { describe, it } from "node:test";
import { RuleTester } from "oxlint/plugins-dev";
import { requireIdentifierPrefix } from "./require-identifier-prefix.ts";

RuleTester.describe = describe;
RuleTester.it = it;

const ruleTester = new RuleTester({
  languageOptions: { sourceType: "module" },
});

const IMPORT = "import { createRoot } from 'react-dom/client';";
const errors = [{ messageId: "missing" }];

ruleTester.run("require-identifier-prefix", requireIdentifierPrefix, {
  valid: [
    `${IMPORT} createRoot(container, { identifierPrefix: 'app-show' });`,
    "import { createRoot as create } from 'react-dom/client'; create(container, { identifierPrefix: 'app-show' });",
    // Options passed as a variable or a spread cannot be inspected, so they are allowed
    `${IMPORT} createRoot(container, options);`,
    `${IMPORT} createRoot(container, { ...options, onRecoverableError });`,
    // `createRoot` not from `react-dom/client` is out of scope
    "import { createRoot } from './createRoot'; createRoot(container);",
  ],
  invalid: [
    { code: `${IMPORT} createRoot(container);`, errors },
    {
      code: `${IMPORT} createRoot(container, { onRecoverableError });`,
      errors,
    },
    {
      code: "import { createRoot as create } from 'react-dom/client'; create(container);",
      errors,
    },
  ],
});
