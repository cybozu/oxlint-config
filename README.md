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

### React Compiler rules (opt-in)

`presets/react-compiler` is an add-on preset that enables the React Compiler lint rules
(the `recommended` set of `eslint-plugin-react-hooks`). Combine it with a react preset:

```ts
import { defineConfig } from "oxlint";
import reactTypescript from "@cybozu/oxlint-config/presets/react-typescript";
import reactCompiler from "@cybozu/oxlint-config/presets/react-compiler";

export default defineConfig({ extends: [reactTypescript, reactCompiler] });
```

### kintone development rules (opt-in)

`presets/kintone-dev` is an add-on preset that enables custom rules for developing kintone.
It does not include `base`, so combine it with another preset:

```ts
import { defineConfig } from "oxlint";
import reactTypescript from "@cybozu/oxlint-config/presets/react-typescript";
import kintoneDev from "@cybozu/oxlint-config/presets/kintone-dev";

export default defineConfig({ extends: [reactTypescript, kintoneDev] });
```

See [src/plugins/kintone/README.md](src/plugins/kintone/README.md) for the rules.

## Development

```bash
pnpm build      # build into dist
pnpm typecheck  # type check including tests
pnpm test       # run the plugin rule tests
```

Rule tests are placed next to each rule (`*.test.ts`) and use `RuleTester` from `oxlint/plugins-dev`
with the Node.js test runner.
