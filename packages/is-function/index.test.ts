import isFunction from "@std-types/is-function";

describe("isFunction", () => {
  it("should return true", () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(async function () {})).toBe(true);
    expect(isFunction(function* () {})).toBe(true);
    expect(isFunction(async function* () {})).toBe(true);
    expect(isFunction(new Function())).toBe(true);
  });

  it("should return false", () => {
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction("")).toBe(false);
    expect(isFunction(0)).toBe(false);
    expect(isFunction(Symbol(""))).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
  });
});
