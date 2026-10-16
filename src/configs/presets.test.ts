import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const cli = join(dirname(require.resolve("oxlint/package.json")), "bin/oxlint");
const fixtures = fileURLToPath(new URL("../../test/fixtures/v26/", import.meta.url));

function lint(preset: string, fixture: string) {
  const directory = mkdtempSync(join(tmpdir(), "cybozu-oxlint-config-"));
  const config = join(directory, "oxlint.config.ts");
  const presetUrl = new URL(`../presets/${preset}.ts`, import.meta.url).href;
  writeFileSync(config, `export { default } from ${JSON.stringify(presetUrl)};\n`);
  try {
    const result = spawnSync(
      process.execPath,
      [cli, "--config", config, "--format", "json", join(fixtures, fixture)],
      { encoding: "utf8", cwd: fixtures, timeout: 30_000 },
    );
    assert.ifError(result.error);
    assert.ok(result.status === 0 || result.status === 1, result.stderr);
    const output = JSON.parse(result.stdout) as {
      diagnostics: Array<{ code: string }>;
    };
    return output.diagnostics.map(({ code }) => code).sort();
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

describe("v26 preset compatibility", () => {
  it("enables the supported ESLint 10 recommended and base rules", () => {
    const codes = lint("base", "base-errors.js");
    for (const rule of [
      "no-unassigned-vars",
      "no-undef",
      "no-useless-assignment",
      "preserve-caught-error",
      "no-implied-eval",
      "no-object-constructor",
    ]) {
      assert.ok(codes.includes(`eslint(${rule})`), `${rule}: ${codes.join(", ")}`);
    }
  });

  for (const preset of ["typescript", "node-typescript", "react-typescript"]) {
    it(`checks unused TypeScript code and v26 recommended rules with ${preset}`, () => {
      const codes = lint(preset, "typescript-errors.ts");
      for (const rule of [
        "eslint(no-unused-vars)",
        "eslint(no-unused-expressions)",
        "typescript(no-explicit-any)",
        "typescript(no-duplicate-enum-values)",
        "typescript(prefer-function-type)",
        "typescript(no-implied-eval)",
        "eslint(no-empty-function)",
      ]) {
        assert.ok(codes.includes(rule), `${rule}: ${codes.join(", ")}`);
      }
      assert.equal(
        codes.filter((code) => code === "eslint(no-unused-vars)").length,
        2,
        "Both the unused local and the variable used only as a type are reported",
      );
      assert.ok(
        !codes.includes("eslint(no-implied-eval)"),
        "The type-aware rule reports implied eval without a duplicate core diagnostic",
      );
    });

    it(`preserves the base exceptions with ${preset}`, () => {
      assert.deepEqual(lint(preset, "typescript-valid.ts"), []);
    });
  }

  it("keeps the React class rules removed in v26 disabled", () => {
    assert.deepEqual(lint("react", "react-classes.jsx"), []);
  });

  it("retains React accessibility checks including captions and tabbable controls", () => {
    const codes = lint("react-typescript", "react-errors.tsx");
    for (const rule of [
      "jsx-a11y(alt-text)",
      "jsx-a11y(media-has-caption)",
      "jsx-a11y(interactive-supports-focus)",
    ]) {
      assert.ok(codes.includes(rule), `${rule}: ${codes.join(", ")}`);
    }
  });

  it("allows the recommended presentation and canvas roles", () => {
    assert.deepEqual(lint("react-typescript", "react-valid.tsx"), []);
  });
});
