import isNumber from "@std-types/is-number";

export type ValidNumber = number & { __validNumber: never };

export default function isValidNumber(value: unknown): value is ValidNumber {
  return isNumber(value) && !Number.isNaN(value);
}
