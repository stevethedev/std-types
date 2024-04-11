import isString from "./index";

describe("isString", () => {
  it("should return true if the value is a string", () => {
    expect(isString("")).toBe(true);
    expect(isString("foo")).toBe(true);
  });

  it("should return false if the value is a string object", () => {
    expect(isString(new String(""))).toBe(false);
    expect(isString(new String("foo"))).toBe(false);
  });

  it("should return false if the value is not a string", () => {
    expect(isString(0)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(() => {})).toBe(false);
  });
});
