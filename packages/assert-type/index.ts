import isFunction from "@std-types/is-function";
import isInstanceOf from "@std-types/is-instance-of";
import isString from "@std-types/is-string";
import assert = require("assert");

export type AssertType<T> = (
  value: unknown,
  message?: string | Message,
) => asserts value is T;
export type IsFn<T> = (value: unknown) => value is T;
export type Message = string | Error | ((value: unknown) => string | Error);

const runMessage = (
  value: unknown,
  message?: string | Message,
): string | Error | undefined => {
  if (isString(message)) {
    return message;
  }

  if (isInstanceOf(message, Error)) {
    return message;
  }

  if (isFunction(message)) {
    return message(value);
  }

  return `Unexpected type: ${typeof value}`;
};

export default function assertType<T>(
  value: unknown,
  isFn: IsFn<T>,
  message?: Message,
): asserts value is T {
  assert(isFn(value), runMessage(value, message));
}

export const getAssertType = <T>(
  isFn: IsFn<T>,
  defaultMessage?: Message,
): AssertType<T> => {
  return (value, message = defaultMessage) => {
    assertType(value, isFn, message);
  };
};
