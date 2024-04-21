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

  it("maintains the shape in the returned function", () => {
    const shape = {
      a: isNumber,
      b: isString,
    };

    const isShapedLikeShape = getIsShapedLike(shape);

    expect(isShapedLikeShape.shape).toEqual(shape);
  });

  it("can use the saved shape for extension", () => {
    const isShapedLikeShape = getIsShapedLike({
      a: isNumber,
      b: isString,
    });

    const isShapedLikeExtended = getIsShapedLike({
      ...isShapedLikeShape.shape,
      c: isBoolean,
      b: isUndefined,
    });

    const value = {
      a: 1,
      c: true,
    };

    expect(isShapedLikeShape(value)).toBe(false);
    expect(isShapedLikeExtended(value)).toBe(true);
  });

  it("can use the extend function with a shape", () => {
    const isShapedLikeShape = getIsShapedLike({
      a: isNumber,
      b: isString,
    });

    const isShapedLikeExtended = isShapedLikeShape.extend({
      c: isBoolean,
    });

    expect(isShapedLikeShape({ a: 1, b: "foo" })).toBe(true);
    expect(isShapedLikeExtended({ a: 1, b: "foo" })).toBe(false);

    expect(isShapedLikeShape({ a: 1, b: "foo", c: true })).toBe(true);
    expect(isShapedLikeExtended({ a: 1, b: "foo", c: true })).toBe(true);
  });

  it("can use the extend function with an extension function", () => {
    const isShapedLikeShape = getIsShapedLike({
      a: isNumber,
      b: isString,
    });

    const omit = <O, K extends keyof O>(o: O, keys: K[]): Omit<O, K> => {
      const copy = { ...o };
      keys.forEach((key) => delete copy[key]);
      return copy;
    };

    const isShapedLikeExtended = isShapedLikeShape.extend((shape) => ({
      ...omit(shape, ["b"]),
      c: isBoolean,
    }));

    const value = {
      a: 1,
      c: true,
    };

    expect(isShapedLikeShape(value)).toBe(false);
    expect(isShapedLikeExtended(value)).toBe(true);
  });
});
