import isNoneOf, { getIsNoneOf } from "@std-types/is-none-of";
import isNumber from "@std-types/is-number";
import isString from "@std-types/is-string";

describe("isNoneOf", () => {
  it("should return true", () => {
    expect(isNoneOf(1, isString)).toBe(true);
    expect(isNoneOf("a", isNumber)).toBe(true);
    expect(isNoneOf({ x: 1, y: 1 }, isString)).toBe(true);
  });

  it("should return false", () => {
    expect(isNoneOf(1, isNumber)).toBe(false);
    expect(isNoneOf("a", isString)).toBe(false);
  });
});

describe("getIsNoneOf", () => {
  it("should return true", () => {
    const isNumberAndString = getIsNoneOf(isNumber, isString);
    expect(isNumberAndString({})).toBe(true);
  });

  it("should return false", () => {
    const isNumberAndString = getIsNoneOf(isNumber, isString);
    expect(isNumberAndString(1)).toBe(false);
    expect(isNumberAndString("a")).toBe(false);
  });
});
