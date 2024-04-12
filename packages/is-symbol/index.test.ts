import isSymbol from ".";

describe("isSymbol", () => {
  test("should return true for symbols", () => {
    expect(isSymbol(Symbol())).toBe(true);
  });

  test("should return false for non-symbols", () => {
    expect(isSymbol(1)).toBe(false);
  });
});
