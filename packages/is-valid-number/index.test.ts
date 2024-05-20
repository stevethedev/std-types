import isValidNumber from "@std-types/is-valid-number";

describe("isValidNumber", () => {
  it("should return true", () => {
    expect(isValidNumber(1)).toBe(true);
  });

  it("should return false", () => {
    expect(isValidNumber("1")).toBe(false);
    expect(isValidNumber(NaN)).toBe(false);
  });
});
