import isNumber from "@std-types/is-number";
import isString from "@std-types/is-string";
import isArray, { getIsArray } from "./index";

describe("isArray", () => {
  it("should return true if the value is an array", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray([])).toBe(true);
  });

  it("should return true if the value is an array and the typing function returns true", () => {
    expect(isArray([1, 2, 3], isNumber)).toBe(true);
  });

  it("should return false if the value is an array and the typing function returns false", () => {
    expect(isArray([1, 2, 3], isString)).toBe(false);
  });

  it("should return false if the value is not an array", () => {
    expect(isArray({})).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray("")).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });

  it("should return false if the value is an array-like object", () => {
    expect(isArray({ length: 0 })).toBe(false);
    expect(isArray({ length: 1 })).toBe(false);
    expect(isArray({ length: 1, 0: "a" })).toBe(false);
  });

  it("excludes typed arrays", () => {
    expect(isArray(new Uint8Array())).toBe(false);
    expect(isArray(new Uint8ClampedArray())).toBe(false);
    expect(isArray(new Uint16Array())).toBe(false);
    expect(isArray(new Uint32Array())).toBe(false);
    expect(isArray(new Int8Array())).toBe(false);
    expect(isArray(new Int16Array())).toBe(false);
    expect(isArray(new Int32Array())).toBe(false);
    expect(isArray(new Float32Array())).toBe(false);
    expect(isArray(new Float64Array())).toBe(false);
    expect(isArray(new BigInt64Array())).toBe(false);
    expect(isArray(new BigUint64Array())).toBe(false);
    expect(isArray(new DataView(new ArrayBuffer(2)))).toBe(false);
  });

  it("excludes Buffer", () => {
    expect(isArray(Buffer.from("test"))).toBe(false);
    expect(isArray(new ArrayBuffer(2))).toBe(false);
    expect(isArray(new SharedArrayBuffer(2))).toBe(false);
  });
});

describe("getIsArray", () => {
  it("should return a function that checks if the value is an array", () => {
    const isTypedArray = getIsArray();
    expect(isTypedArray([])).toBe(true);
    expect(isTypedArray([1, 2, 3])).toBe(true);
    expect(isTypedArray([])).toBe(true);
  });

  it("should return a function that checks if the value is an array and the typing function returns true", () => {
    const isTypedArray = getIsArray(isNumber);
    expect(isTypedArray([1, 2, 3])).toBe(true);
  });

  it("should return a function that checks if the value is an array and the typing function returns false", () => {
    const isTypedArray = getIsArray(isString);
    expect(isTypedArray([1, 2, 3])).toBe(false);
  });

  it("should work on an array of arrays", () => {
    const isTypedArray = getIsArray(getIsArray(isNumber));
    expect(isTypedArray([[1], [2], [3]])).toBe(true);
  });
});
