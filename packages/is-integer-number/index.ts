import isNumber from "@std-types/is-number";

export type Integer = number & { __integer: never };

export default function isIntegerNumber(data: unknown): data is Integer {
  return isNumber(data) && Number.isInteger(data);
}
