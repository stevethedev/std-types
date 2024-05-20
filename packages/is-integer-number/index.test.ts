import isInteger from "packages/is-integer-number";

describe("isInteger", () => {
  it("should return true", () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(-0)).toBe(true);
    expect(isInteger(-1)).toBe(true);
  });

  it("should return false", () => {
    expect(isInteger(1.1)).toBe(false);
    expect(isInteger(0.1)).toBe(false);
    expect(isInteger(-1.1)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
    expect(isInteger("1")).toBe(false);
    expect(isInteger({})).toBe(false);
  });
});
