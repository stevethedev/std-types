import isBoolean from "@std-types/is-boolean";
import isNumber from "@std-types/is-number";
import { getIsOneOf } from "@std-types/is-one-of";
import isShapedLike, { getIsShapedLike } from "@std-types/is-shaped-like";
import isString from "@std-types/is-string";
import isUndefined from "@std-types/is-undefined";

describe("isShapedLike", () => {
  it("returns false when the value is not an object", () => {
    const value = 1;
    const shape = {
      a: isNumber,
      b: isString,
    };

    expect(isShapedLike(value, shape)).toBe(false);
  });

  it("returns true when the object is shaped like the shape", () => {
    const value = {
      a: 1,
      b: "hello",
    };

    const shape = {
      a: isNumber,
      b: isString,
    };

    expect(isShapedLike(value, shape)).toBe(true);
  });

  it("returns false when the object is not shaped like the shape", () => {
    const value = {
      a: 1,
      b: "hello",
    };

    const shape = {
      a: isNumber,
      b: isString,
      c: isBoolean,
    };

    expect(isShapedLike(value, shape)).toBe(false);
  });

  it("handles nested shapes", () => {
    const value = {
      a: 1,
      b: {
        c: "hello",
      },
    };

    const shape = {
      a: isNumber,
      b: getIsShapedLike({
        c: isString,
      }),
    };

    expect(isShapedLike(value, shape)).toBe(true);
  });

  it("handles symbols", () => {
    const sym = Symbol("a");
    const shape = {
      [sym]: isNumber,
      a: isNumber,
      b: isString,
    };

    expect(isShapedLike({ a: 1, b: "hello" }, shape)).toBe(false);
    expect(isShapedLike({ [sym]: 1, a: 1, b: "hello" }, shape)).toBe(true);
  });

  it("handles optional properties", () => {
    const value = {
      a: 1,
    };

    const shape = {
      a: isNumber,
      b: getIsOneOf(isUndefined, isString),
    };

    expect(isShapedLike(value, shape)).toBe(true);
  });

  it("throws an error when the shape is not an object", () => {
    const value = {
      a: 1,
      b: "hello",
    };

    const shape = 1;

    expect(() => isShapedLike(value, shape as any)).toThrowError(
      "Expected object, got number",
    );
  });

  it("throws an error when the shape is not a function", () => {
    const value = {
      a: 1,
      b: "hello",
    };

    const shape = {
      a: isNumber,
      b: 1,
    };

    expect(() => isShapedLike(value, shape as any)).toThrowError(
      "Expected function, got number",
    );
  });
});
