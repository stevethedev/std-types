import isNumber from "@std-types/is-number";

export type FiniteNumber = number & { __finiteNumber: never };

export default function isFiniteNumber(data: unknown): data is FiniteNumber {
  return isNumber(data) && Number.isFinite(data);
}
