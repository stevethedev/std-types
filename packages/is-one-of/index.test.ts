import isOneOf, { getIsOneOf } from "@std-types/is-one-of";
import isString from "@std-types/is-string";
import isNumber from "@std-types/is-number";
import { getIsArray } from "@std-types/is-array";

describe("isOneOf", () => {
  it("should return true if the value is one of the provided types", () => {
    const value = "hello";
    expect(isOneOf(value, isString, isNumber)).toBe(true);
    expect(isOneOf(value, isNumber, isNumber)).toBe(false);
  });

  it("can be used within the isArray function", () => {
    const isArrayStringOrNumber = getIsArray(getIsOneOf(isString, isNumber));
    expect(isArrayStringOrNumber(["hello", "world"])).toBe(true);
    expect(isArrayStringOrNumber([42, 42])).toBe(true);
    expect(isArrayStringOrNumber([42, "hello"])).toBe(true);
    expect(isArrayStringOrNumber(["hello", 42])).toBe(true);
    expect(isArrayStringOrNumber(["hello", true])).toBe(false);
    expect(isArrayStringOrNumber([true, false])).toBe(false);
  });
});

describe("getIsOneOf", () => {
  it("should return a function that checks if the value is one of the provided types", () => {
    const isOneOfStringOrNumber = getIsOneOf(isString, isNumber);
    expect(isOneOfStringOrNumber("hello")).toBe(true);
    expect(isOneOfStringOrNumber(42)).toBe(true);
    expect(isOneOfStringOrNumber(true)).toBe(false);
  });
});
