export function unusedParameter(parameter: string): void {
  const unused = 1;
  42 as number;
  setTimeout("notify()", 0);
}

export function empty(): void {}

export type Anything = any;
export enum Status {
  First = 1,
  Duplicate = 1,
}
export interface Handler {
  (): void;
}

const onlyUsedAsType = 1;
export type Value = typeof onlyUsedAsType;
