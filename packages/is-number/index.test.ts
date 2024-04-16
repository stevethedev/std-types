import isNumber from "./index";

describe("isNumber", () => {
  it("should return true for numbers", () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(-1.1)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
  });

  it("should return false for non-numbers", () => {
    expect(isNumber("0")).toBe(false);
    expect(isNumber("1")).toBe(false);
    expect(isNumber("1.1")).toBe(false);
    expect(isNumber("-1")).toBe(false);
    expect(isNumber("-1.1")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(0n)).toBe(false);
  });
});
