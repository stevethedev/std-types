import isNumber from "./index";

describe("isNumber", () => {
  it("should return true for numbers", () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(-1.1)).toBe(true);
  });

  it("should return true for numbers with options.Infinity", () => {
    expect(isNumber(0, { Infinity: true })).toBe(true);
    expect(isNumber(1, { Infinity: true })).toBe(true);
    expect(isNumber(1.1, { Infinity: true })).toBe(true);
    expect(isNumber(-1, { Infinity: true })).toBe(true);
    expect(isNumber(-1.1, { Infinity: true })).toBe(true);
  });

  it("should return true for numbers with options.NaN", () => {
    expect(isNumber(0, { NaN: true })).toBe(true);
    expect(isNumber(1, { NaN: true })).toBe(true);
    expect(isNumber(1.1, { NaN: true })).toBe(true);
    expect(isNumber(-1, { NaN: true })).toBe(true);
    expect(isNumber(-1.1, { NaN: true })).toBe(true);
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
  });

  it("should return false for non-numbers with options.NaN", () => {
    expect(isNumber("0", { NaN: true })).toBe(false);
    expect(isNumber("1", { NaN: true })).toBe(false);
    expect(isNumber("1.1", { NaN: true })).toBe(false);
    expect(isNumber("-1", { NaN: true })).toBe(false);
    expect(isNumber("-1.1", { NaN: true })).toBe(false);
    expect(isNumber(null, { NaN: true })).toBe(false);
    expect(isNumber(undefined, { NaN: true })).toBe(false);
    expect(isNumber({}, { NaN: true })).toBe(false);
    expect(isNumber([], { NaN: true })).toBe(false);
    expect(isNumber(true, { NaN: true })).toBe(false);
    expect(isNumber(false, { NaN: true })).toBe(false);
  });

  it("should return false for non-numbers with options.Infinity", () => {
    expect(isNumber("0", { Infinity: true })).toBe(false);
    expect(isNumber("1", { Infinity: true })).toBe(false);
    expect(isNumber("1.1", { Infinity: true })).toBe(false);
    expect(isNumber("-1", { Infinity: true })).toBe(false);
    expect(isNumber("-1.1", { Infinity: true })).toBe(false);
    expect(isNumber(null, { Infinity: true })).toBe(false);
    expect(isNumber(undefined, { Infinity: true })).toBe(false);
    expect(isNumber({}, { Infinity: true })).toBe(false);
    expect(isNumber([], { Infinity: true })).toBe(false);
    expect(isNumber(true, { Infinity: true })).toBe(false);
    expect(isNumber(false, { Infinity: true })).toBe(false);
  });

  it("should allow configurable NaN checks", () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(NaN, { NaN: false })).toBe(false);
    expect(isNumber(NaN, { NaN: true })).toBe(true);
  });

  it("should allow configurable Infinity checks", () => {
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber(-Infinity)).toBe(false);
    expect(isNumber(Infinity, { Infinity: false })).toBe(false);
    expect(isNumber(-Infinity, { Infinity: false })).toBe(false);
    expect(isNumber(Infinity, { Infinity: true })).toBe(true);
    expect(isNumber(-Infinity, { Infinity: true })).toBe(true);
  });
});
