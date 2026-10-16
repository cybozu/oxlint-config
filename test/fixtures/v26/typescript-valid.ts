declare function notify(): void;

export function allowed(unusedParameter: string, enabled: boolean): void {
  enabled && notify();
  enabled ? notify() : notify();
}

export function updateTuple(): void {
  let [unchanged, changed] = [1, 2];
  changed += 1;
  console.log(unchanged, changed);
}

export function readBeforeAssignment(): void {
  let value;
  console.log(value);
  value = 1;
  console.log(value);
}
