import isDefined from "@std-types/is-defined";

describe("isDefined", () => {
  it("should return true", () => {
    expect(isDefined(null)).toBe(true);
    expect(isDefined("")).toBe(true);
    expect(isDefined(0)).toBe(true);
    expect(isDefined(false)).toBe(true);
    expect(isDefined({})).toBe(true);
    expect(isDefined([])).toBe(true);
  });

  it("should return false", () => {
    expect(isDefined(undefined)).toBe(false);

    const obj: Partial<Record<string, string>> = { key: "value" };
    expect(obj.key).toBeDefined();
    expect(isDefined(obj.key)).toBe(true);
  });
});
