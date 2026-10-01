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
