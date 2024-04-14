import isBigInt from "@std-types/is-bigint";

describe("isBigInt", () => {
  it("should return true", () => {
    expect(isBigInt(0n)).toBe(true);
  });

  it("should return false", () => {
    expect(isBigInt(null)).toBe(false);
    expect(isBigInt("")).toBe(false);
    expect(isBigInt(0)).toBe(false);
    expect(isBigInt(false)).toBe(false);
    expect(isBigInt({})).toBe(false);
    expect(isBigInt([])).toBe(false);
  });
});
