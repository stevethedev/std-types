import isFiniteNumber from "@std-types/is-finite-number";

describe("isFiniteNumber", () => {
  it("should return true", () => {
    expect(isFiniteNumber(1)).toBe(true);
    expect(isFiniteNumber(0)).toBe(true);
    expect(isFiniteNumber(-1)).toBe(true);
    expect(isFiniteNumber(1.1)).toBe(true);
    expect(isFiniteNumber(0.1)).toBe(true);
    expect(isFiniteNumber(-1.1)).toBe(true);
  });

  it("should return false", () => {
    expect(isFiniteNumber(NaN)).toBe(false);
    expect(isFiniteNumber(Infinity)).toBe(false);
    expect(isFiniteNumber(-Infinity)).toBe(false);
    expect(isFiniteNumber("1")).toBe(false);
    expect(isFiniteNumber({})).toBe(false);
  });
});
