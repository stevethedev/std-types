import isObject from "./index";

describe("isObject", () => {
  it("should return true for objects", () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(new Date())).toBe(true);
  });

  it("should return false for arrays", () => {
    expect(isObject([])).toBe(false);
    expect(isObject([1, 2, 3])).toBe(false);
  });

  it("should return false for undefined", () => {
    expect(isObject(undefined)).toBe(false);
  });

  it("should return false for numbers", () => {
    expect(isObject(0)).toBe(false);
    expect(isObject(1)).toBe(false);
  });

  it("should return false for strings", () => {
    expect(isObject("")).toBe(false);
    expect(isObject("abc")).toBe(false);
  });

  it("should return false for booleans", () => {
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
  });

  it("should return false for symbols", () => {
    expect(isObject(Symbol())).toBe(false);
  });

  it("should return false for functions", () => {
    expect(isObject(() => {})).toBe(false);
  });

  it("should return true for objects with null prototype", () => {
    expect(isObject(Object.create(null))).toBe(true);
  });
});
