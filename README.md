# oxlint-config

An oxlint configs for Cybozu.

## Usage

```ts
// oxlint.config.ts
import { defineConfig } from "oxlint";
import reactTypescript from "@cybozu/oxlint-config/presets/react-typescript";

export default defineConfig({ extends: [reactTypescript] });
```

### Presets

- `presets/base`
- `presets/kintone-customize`
- `presets/kintone-dev`
- `presets/node`
- `presets/node-typescript`
- `presets/react`
- `presets/react-compiler`
- `presets/react-typescript`
- `presets/typescript`

The `*-typescript` presets enable type-aware rules, which require `oxlint-tsgolint` to be installed.

The rulesets follow `@cybozu/eslint-config` v26 where Oxlint supports the
corresponding rules. Oxlint's native `no-unused-vars` and
`no-unused-expressions` rules also check TypeScript syntax. TypeScript presets
retain the base options and report variables used only as types, matching
typescript-eslint. The React preset follows v26's function-component ruleset;
class-specific checks are not enabled.

Unsupported rules such as `@stylistic/jsx-quotes` and `react/jsx-no-bind` are not
enabled. The existing `curly` exception remains because Oxlint does not yet
handle its `multi-line` option as expected.

### React Compiler rules (opt-in)

`presets/react-compiler` is an add-on preset that enables the React Compiler lint rules
(the `recommended` set of `eslint-plugin-react-hooks`). Combine it with a react preset:

```ts
import { defineConfig } from "oxlint";
import reactTypescript from "@cybozu/oxlint-config/presets/react-typescript";
import reactCompiler from "@cybozu/oxlint-config/presets/react-compiler";

export default defineConfig({ extends: [reactTypescript, reactCompiler] });
```

## Development

```bash
pnpm build      # build into dist
pnpm typecheck  # type check including tests
pnpm test       # run the plugin rule and preset integration tests
```

Rule tests are placed next to each rule (`*.test.ts`) and use `RuleTester` from `oxlint/plugins-dev`
with the Node.js test runner.
Preset integration tests run the installed Oxlint against fixtures in `test/fixtures`.
