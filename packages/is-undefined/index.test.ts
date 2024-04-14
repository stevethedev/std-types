import isUndefined from "@std-types/is-undefined";

describe("isUndefined", () => {
  it("should return true", () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it("should return false", () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined("")).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([])).toBe(false);
  });
});
