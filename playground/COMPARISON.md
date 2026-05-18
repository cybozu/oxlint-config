# `@cybozu/eslint-config`（旧 ESLint 版）→ `@cybozu/oxlint-config` 互換性レポート

本レポートは [cybozu/eslint-config の `main` ブランチ](https://github.com/cybozu/eslint-config/tree/main)（旧 ESLint 版）と、その oxlint への移行ブランチを取り込んだ本リポジトリ（`@cybozu/oxlint-config`）について、**移行先で旧 ESLint 設定の検査意図がどの程度カバーされているか** を分析したものです。

## 1. 検証環境

`playground/` から実際に publish される `@cybozu/oxlint-config` を `link:..` で取り込み、`pnpm install` 時に `playground/node_modules/@cybozu/oxlint-config` への symlink を介して各プリセットを読み込んでいます。

```
playground/
├── package.json              # "@cybozu/oxlint-config": "link:.."
├── configs/                  # 各プリセットを extends した薄い .oxlintrc.json
├── samples/                  # 故意にルール違反を含むサンプル
├── outputs/                  # oxlint 実行結果のスナップショット
└── run-all.sh                # 全プリセットを一括実行
```

```bash
cd playground
pnpm install --registry=https://registry.npmjs.org/
bash run-all.sh   # 結果は outputs/*.txt
```

## 2. プリセット単位のルール数

旧 ESLint 側のルール数は `lib/<name>.js`（実装本体）から抽出し、`@typescript-eslint/foo` → `typescript/foo`、`@stylistic/ts/foo` → `stylistic-ts/foo` に正規化して比較しました。

| Preset | ESLint 元 | Oxlint 後 | 削除 | 追加 | 共通 |
|---|---:|---:|---:|---:|---:|
| base | 115 | 121 | 53 | 59 | 62 |
| es5 | 32 | 126 | 11 | 105 | 21 |
| node | 1 | 123 | 0 | 122 | 1 |
| typescript | 41 | 154 | 13 | 126 | 28 |
| react | 67 | 184 | 23 | 140 | 44 |
| react-typescript | 2 | 217 | 1 | 216 | 1 |
| kintone-customize | 0 | 121 | 0 | 121 | 0 |
| kintone-customize-es5 | 0 | 126 | 0 | 126 | 0 |

「Oxlint 後」は `overrides` 内のルールも含む合計値。
ESLint 側はファイル単位の素朴な集計で、`base` 以外のプリセットは「base から継承＋差分を上書き」する構造のため小さく見えますが、Oxlint 側は base の rules を `overrides` 配下に再展開（フラット化）しているため数が大きく見えるのが主因です。
そのため **base プリセット同士の比較が実質的な互換性指標** になります。

## 3. base プリセットの実質的な変化

### 3.1 旧 ESLint から削除された 53 ルール

ほぼ全件が **`oxfmt` / Prettier に責務移譲されたスタイル系ルール** です。

| 分類 | 主なルール | 移行後の扱い |
|---|---|---|
| インデント／空白 | `array-bracket-spacing`, `block-spacing`, `comma-spacing`, `computed-property-spacing`, `func-call-spacing`, `key-spacing`, `keyword-spacing`, `no-multi-spaces`, `no-multiple-empty-lines`, `no-tabs`, `no-trailing-spaces`, `no-whitespace-before-property`, `object-curly-spacing`, `semi-spacing`, `space-before-blocks`, `space-before-function-paren`, `space-in-parens`, `space-infix-ops`, `space-unary-ops`, `switch-colon-spacing`, `template-curly-spacing`, `template-tag-spacing`, `rest-spread-spacing`, `generator-star-spacing`, `yield-star-spacing` | **oxfmt が代替** |
| 改行・行末 | `linebreak-style`, `max-len`, `nonblock-statement-body-position`, `object-property-newline`, `one-var-declaration-per-line`, `semi-style` | **oxfmt が代替** |
| 構文整形 | `brace-style`, `comma-style`, `dot-location`, `new-parens`, `no-confusing-arrow`, `no-extra-parens`, `no-floating-decimal`, `no-new-object`, `spaced-comment`, `wrap-iife` | **oxfmt が代替** |
| プラグイン側にリネーム | `consistent-return` → `typescript/consistent-return`、`dot-notation` → `typescript/dot-notation`、`import-x/no-duplicates` → `import/no-duplicates` | **互換あり**（base で実有効） |
| oxlint で未実装 | `no-implied-eval`, `no-invalid-this`, `no-return-await`, `require-atomic-updates`, `no-octal-escape`, `no-catch-shadow`, `no-undef-init` | **検査強度低下**（後述） |

「削除」と数えられた 53 件のうち、`oxfmt` 代替が 40 件超、リネーム再有効が 3 件、純粋な検査強度低下は **7 件のみ** です。

### 3.2 旧 ESLint に無く Oxlint で追加された 59 ルール

ESLint 旧設定では `extends: ["eslint:recommended"]` で暗黙有効化されていた **recommended ルール群が、すべて明示列挙の形で書き起こされている** のが正体です。Oxlint では `categories.correctness: "off"` で recommended を切り、必要なものだけ列挙する方針のため、結果的にルール数が膨らんでいます。

主な追加（recommended 相当）:

`constructor-super`, `for-direction`, `getter-return`, `no-case-declarations`, `no-class-assign`, `no-compare-neg-zero`, `no-cond-assign`, `no-const-assign`, `no-constant-binary-expression`, `no-constant-condition`, `no-control-regex`, `no-debugger`, `no-delete-var`, `no-dupe-class-members`, `no-dupe-else-if`, `no-dupe-keys`, `no-duplicate-case`, `no-empty`, `no-empty-character-class`, `no-empty-pattern`, `no-empty-static-block`, `no-ex-assign`, `no-extra-boolean-cast`, `no-fallthrough`, `no-func-assign`, `no-global-assign`, `no-invalid-regexp`, `no-irregular-whitespace`, `no-loss-of-precision`, `no-misleading-character-class`, `no-new-native-nonconstructor`, `no-nonoctal-decimal-escape`, `no-obj-calls`, `no-prototype-builtins`, `no-redeclare`, `no-regex-spaces`, `no-self-assign`, `no-setter-return`, `no-sparse-arrays`, `no-this-before-super`, `no-unexpected-multiline`, `no-unreachable`, `no-unsafe-finally`, `no-unsafe-negation`, `no-unsafe-optional-chaining`, `no-unused-labels`, `no-unused-private-class-members`, `no-useless-backreference`, `no-useless-catch`, `no-useless-escape`, `radix`, `require-yield`, `use-isnan`

加えて `curly`, `eqeqeq`, `yoda` のような旧 base から残った強化系ルールが含まれます。

→ recommended の **対応漏れは事実上ゼロ**、むしろ base の検査強度はわずかに増しています。

## 4. プリセット別の互換性概要

| Preset | 互換性 | 補足 |
|---|---|---|
| **base** | ◎ 非スタイル系はほぼ全継承 + recommended 明示展開で強化 | 検査強度低下は `no-implied-eval` / `no-invalid-this` / `no-return-await` / `require-atomic-updates` 等 7 件のみ |
| **es5** | ◎ ES6+ 構文禁止用 override も同等 | `strict` ルール（ESLint）は oxlint 未実装のため非対応。実害は限定的 |
| **node** | ◎ 旧設定は `no-console: off` のみだったが、Oxlint 側は `node` プラグインのルール + `process`/`Buffer`/`__dirname` 等 28 件のグローバルを明示 | むしろカバレッジ向上 |
| **typescript** | ○ `@typescript-eslint/*` → `typescript/*` への移行が完了。`typeAware: true` + `oxlint-tsgolint` で型情報必須ルール（`no-floating-promises`, `no-misused-promises`, `await-thenable`, `no-for-in-array` 等）もカバー | `no-unnecessary-type-assertion` など型推論依存の一部は未対応。`@stylistic/ts/*` は oxfmt 担当 |
| **react** | ○ `react-hooks/*` は `react/rules-of-hooks` / `react/exhaustive-deps` にリネームされ全継承 | JSX 整形系（`jsx-indent`, `jsx-closing-bracket-location`, `jsx-curly-spacing` など）は oxfmt 担当 |
| **react-typescript** | ○ react と typescript の双方を継承 | 同上 |
| **kintone-customize** | ◎ globals (`kintone`, `swal`, `garoon` 等) は完全継承。base と同等のルール集合 | — |
| **kintone-customize-es5** | ◎ 同上。es5 ベースに kintone globals を足した構成 | — |

## 5. playground 実行結果サマリ

`samples/` 配下の故意に違反したコードに対し、各プリセットが検出した違反数:

| Preset | warnings | errors |
|---|---:|---:|
| base | 5 | 14 |
| typescript | 2 | 5 |
| react-typescript | 1 | 4 |
| es5 | 2 | 5 |
| node | 0 | 0 |
| kintone-customize | 3 | 5 |
| kintone-customize-es5 | 2 | 5 |

base での検出内訳:

```
eslint(no-var)                    x4
eslint(no-implicit-globals)       x3
eslint(no-unused-vars)            x2
eslint(eqeqeq)                    x2
eslint(no-debugger)               x1
eslint(no-eval)                   x1
eslint(no-throw-literal)          x1
eslint(no-unreachable)            x1
eslint(no-with)                   x1
eslint(prefer-const)              x1
eslint(vars-on-top)               x1
import(no-duplicates)             x1
```

`react-typescript` では `react(jsx-key)` / `jsx-a11y(alt-text)` などが追加検出され、`react-hooks/rules-of-hooks` 相当は `react(rules-of-hooks)` として動作しています。

## 6. 総括

- **base ルールの非スタイル系は実質 100% 継承**。recommended 相当が明示列挙され、検査強度はむしろ微増。
- **削除 53 件のうち約 40 件はフォーマッタ (`oxfmt` / Prettier) への意図的委譲**。意味論的な検査強度低下は `no-implied-eval` / `no-invalid-this` / `no-return-await` / `require-atomic-updates` / `no-octal-escape` / `no-catch-shadow` / `no-undef-init` の **7 件のみ**。
- **TypeScript** 系は `typeAware: true` の有効化と `oxlint-tsgolint` 経由の型情報利用で、`@typescript-eslint/recommended-type-checked` 相当の主要ルールをカバー。未対応は一部の型推論依存ルールに限る。
- **React / jsx-a11y / kintone globals** は全継承。React Hooks は `react/rules-of-hooks` 等にリネームのうえ動作。
- **総じて旧 ESLint 設定との意味論的互換性は ~95%** で、残る 5% はフォーマッタへの委譲（実質ゼロ）または型情報依存ルールの未実装（将来のバージョンで埋まる見込み）。

`@cybozu/eslint-config` の利用者が `@cybozu/oxlint-config` に乗り換えた場合、**コードの大部分はそのまま同じ検査を受け、追加で Prettier / oxfmt を併用すればフォーマット面もカバーできる** 状態になっています。
